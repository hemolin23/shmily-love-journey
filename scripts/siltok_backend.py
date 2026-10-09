#!/usr/bin/env python3
"""Submit and track Siltok Bonnet video jobs without GUI automation."""

from __future__ import annotations

import argparse
import base64
import hashlib
import ipaddress
import json
import mimetypes
import os
import sys
import time
import tomllib
import urllib.parse
import urllib.error
import urllib.request
import uuid
from pathlib import Path

from cryptography.hazmat.primitives.ciphers.aead import AESGCM


APP_SUPPORT = Path.home() / "Library/Application Support/Siltok/Dash"
CONFIG_PATH = APP_SUPPORT / "config.toml"
KEYS_PATH = APP_SUPPORT / "connect-keys.json"
LOCAL_SECRET_PATH = APP_SUPPORT / "local-secret.key"
ACCOUNT_SESSION_PATH = APP_SUPPORT / "account-session.json"
IDENTITY_ISSUER = "https://identity.siltok-ai.cn"
HUB_BASE_URL = "https://hub.siltok-ai.cn"
IDENTITY_CLIENT_ID = "siltok-dash"
IDENTITY_AUDIENCE = "urn:siltok:resource:hub-device-control"
IDENTITY_SCOPE = "openid offline_access phone hub.device.access"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MANIFEST = PROJECT_ROOT / "story/act-2-siltok-batch.json"
DEFAULT_STATE = PROJECT_ROOT / "outputs/act2-siltok/tasks.json"
DEFAULT_RESULTS = PROJECT_ROOT / "public/act2/videos"


class BonnetError(RuntimeError):
    pass


def local_secret_key() -> bytes:
    key = base64.b64decode(LOCAL_SECRET_PATH.read_text().strip(), validate=True)
    if len(key) != 32:
        raise BonnetError("Siltok local secret key has an unexpected length")
    return key


def unseal_secret(stored: str) -> str | None:
    """Decode a Dash local-secret-v1 value without ever logging the secret."""
    prefix = "local-secret-v1:"
    if not stored.startswith(prefix):
        return None
    try:
        raw = base64.b64decode(stored[len(prefix):], validate=True)
        if len(raw) <= 28:
            return None
        iv, tag, ciphertext = raw[:12], raw[12:28], raw[28:]
        return AESGCM(local_secret_key()).decrypt(iv, ciphertext + tag, None).decode("utf-8")
    except Exception:
        return None


def seal_secret(value: str) -> str:
    iv = os.urandom(12)
    encrypted = AESGCM(local_secret_key()).encrypt(iv, value.encode("utf-8"), None)
    ciphertext, tag = encrypted[:-16], encrypted[-16:]
    return "local-secret-v1:" + base64.b64encode(iv + tag + ciphertext).decode("ascii")


def unseal_connect_key(stored: str) -> str | None:
    if stored.startswith("sck_"):
        return stored
    value = unseal_secret(stored)
    return value if value and value.startswith("sck_") else None


def atomic_private_json(path: Path, payload: dict) -> None:
    temp = path.with_name(f".{path.name}.{uuid.uuid4().hex}.tmp")
    temp.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")))
    temp.chmod(0o600)
    temp.replace(path)
    path.chmod(0o600)


def public_json(method: str, url: str, *, headers: dict | None = None, form: dict | None = None, timeout: int = 20) -> dict:
    body = None
    request_headers = {"Accept": "application/json", **(headers or {})}
    if form is not None:
        body = urllib.parse.urlencode(form).encode("utf-8")
        request_headers["Content-Type"] = "application/x-www-form-urlencoded"
    request = urllib.request.Request(url, data=body, headers=request_headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            raw = response.read()
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise BonnetError(f"Siltok account service returned HTTP {exc.code}: {detail[:500]}") from exc
    except OSError as exc:
        raise BonnetError(f"Siltok account service is unavailable: {exc}") from exc
    return json.loads(raw) if raw else {}


def refresh_connect_keys() -> int:
    """Refresh the app's rotated OAuth session and per-device LAN keys."""
    session_wire = json.loads(ACCOUNT_SESSION_PATH.read_text())
    refresh_token = unseal_secret(session_wire.get("refreshToken", ""))
    if not refresh_token:
        raise BonnetError("The stored Siltok account session could not be decrypted")

    discovery = public_json("GET", f"{IDENTITY_ISSUER}/.well-known/openid-configuration")
    token_endpoint = discovery.get("token_endpoint", "")
    if not token_endpoint.startswith(IDENTITY_ISSUER + "/"):
        raise BonnetError("Siltok Identity returned an unexpected token endpoint")
    token_set = public_json("POST", token_endpoint, form={
        "client_id": IDENTITY_CLIENT_ID,
        "grant_type": "refresh_token",
        "refresh_token": refresh_token,
        "resource": IDENTITY_AUDIENCE,
        "scope": IDENTITY_SCOPE,
    })
    access_token = token_set.get("access_token")
    rotated_refresh = token_set.get("refresh_token")
    if not isinstance(access_token, str) or not isinstance(rotated_refresh, str):
        raise BonnetError("Siltok Identity returned an incomplete token set")

    # Persist the rotated refresh token before requesting device keys so Dash stays signed in.
    next_session = {**session_wire, "refreshToken": seal_secret(rotated_refresh)}
    atomic_private_json(ACCOUNT_SESSION_PATH, next_session)

    key_wire = json.loads(KEYS_PATH.read_text())
    refreshed = 0
    headers = {"Authorization": f"Bearer {access_token}"}
    for device_id in list(key_wire.get("keys", {})):
        try:
            payload = public_json("GET", f"{HUB_BASE_URL}/api/device/v1/{device_id}/connect-key", headers=headers)
        except BonnetError:
            continue
        connect_key = payload.get("connectKey")
        if isinstance(connect_key, str) and connect_key.startswith("sck_"):
            key_wire["keys"][device_id] = seal_secret(connect_key)
            refreshed += 1
    if refreshed == 0:
        raise BonnetError("Siltok Hub did not return a usable connect key for any configured node")
    atomic_private_json(KEYS_PATH, key_wire)
    return refreshed


def load_connections() -> list[dict]:
    config = tomllib.loads(CONFIG_PATH.read_text())
    key_data = json.loads(KEYS_PATH.read_text())
    keys = key_data.get("keys", {})
    seen: set[tuple[str, int, str]] = set()
    result = []
    for hint in config.get("address_hints", []):
        host = hint.get("host")
        port = int(hint.get("port", 9876))
        device_id = hint.get("device_id")
        stored_key = keys.get(device_id)
        key = unseal_connect_key(stored_key) if isinstance(stored_key, str) else None
        signature = (host, port, device_id)
        try:
            address = ipaddress.ip_address(host)
        except ValueError:
            continue
        # Connection credentials must never leave the user's RFC1918 LAN.
        if not address.is_private or not host.startswith(("10.", "172.16.", "172.17.", "172.18.", "172.19.", "172.2", "172.30.", "172.31.", "192.168.")):
            continue
        if not device_id or not key or signature in seen:
            continue
        seen.add(signature)
        result.append({"host": host, "port": port, "device_id": device_id, "key": key})
    return result


def request_json(connection: dict, method: str, path: str, body: bytes | None = None, content_type: str | None = None, timeout: int = 20) -> dict:
    headers = {
        "Accept": "application/json",
        "Authorization": f"Bearer {connection['key']}",
        "X-Request-ID": str(uuid.uuid4()),
        "User-Agent": "shmily-love-journey/1.0",
    }
    if content_type:
        headers["Content-Type"] = content_type
    url = f"http://{connection['host']}:{connection['port']}{path}"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            payload = response.read()
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise BonnetError(f"{method} {path}: HTTP {exc.code}: {detail[:800]}") from exc
    except OSError as exc:
        raise BonnetError(f"{method} {path}: {exc}") from exc
    if not payload:
        return {}
    return json.loads(payload)


def discover(required_model: str | None = None) -> list[dict]:
    candidates = []
    for connection in load_connections():
        public = {k: v for k, v in connection.items() if k != "key"}
        try:
            health = request_json(connection, "GET", "/healthz", timeout=5)
            models = request_json(connection, "GET", "/api/openai/v1/models", timeout=12).get("data", [])
            queue = request_json(connection, "GET", "/api/openai/v1/queue?limit=100&order=desc", timeout=12)
            model_ids = [item.get("id") for item in models]
            queue_items = queue.get("data", queue.get("tasks", [])) if isinstance(queue, dict) else []
            active = sum(1 for task in queue_items if task.get("status") in {"queued", "running", "in_progress", "processing"})
            candidates.append({
                **public,
                "connection": connection,
                "health": health.get("status", "unknown"),
                "models": model_ids,
                "active_tasks": active,
                "supports_required": not required_model or required_model in model_ids,
            })
        except BonnetError as exc:
            candidates.append({**public, "connection": connection, "error": str(exc), "supports_required": False, "active_tasks": 9999})
    return candidates


def choose_connection(model: str) -> tuple[dict, list[dict]]:
    candidates = discover(model)
    supported = [item for item in candidates if item.get("supports_required")]
    if not supported:
        summary = [{k: v for k, v in item.items() if k != "connection"} for item in candidates]
        raise BonnetError("No connected Siltok node exposes the requested model.\n" + json.dumps(summary, ensure_ascii=False, indent=2))
    supported.sort(key=lambda item: (item.get("active_tasks", 9999), item["host"]))
    return supported[0]["connection"], candidates


def choose_connections(model: str) -> tuple[list[dict], list[dict]]:
    candidates = discover(model)
    supported = [item for item in candidates if item.get("supports_required")]
    if not supported:
        summary = [{k: v for k, v in item.items() if k != "connection"} for item in candidates]
        raise BonnetError("No connected Siltok node exposes the requested model.\n" + json.dumps(summary, ensure_ascii=False, indent=2))
    supported.sort(key=lambda item: (item.get("active_tasks", 9999), item["host"]))
    return [item["connection"] for item in supported], candidates


def build_multipart(metadata: dict, reference_paths: list[Path], field_name: str = "reference_images") -> tuple[bytes, str]:
    boundary = "----siltok-codex-" + uuid.uuid4().hex
    chunks: list[bytes] = []

    def field(name: str, payload: bytes, content_type: str, filename: str | None = None) -> None:
        disposition = f'form-data; name="{name}"'
        if filename:
            disposition += f'; filename="{filename}"'
        chunks.extend([
            f"--{boundary}\r\n".encode(),
            f"Content-Disposition: {disposition}\r\n".encode(),
            f"Content-Type: {content_type}\r\n\r\n".encode(),
            payload,
            b"\r\n",
        ])

    field("request", json.dumps(metadata, ensure_ascii=False).encode("utf-8"), "application/json")
    for path in reference_paths:
        media_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        field(field_name, path.read_bytes(), media_type, path.name)
    chunks.append(f"--{boundary}--\r\n".encode())
    return b"".join(chunks), f"multipart/form-data; boundary={boundary}"


def submit_one(connection: dict, shot: dict) -> dict:
    references = [(PROJECT_ROOT / item).resolve() for item in shot["references"]]
    missing = [str(path) for path in references if not path.is_file()]
    if missing:
        raise BonnetError("Missing reference assets: " + ", ".join(missing))
    model = shot.get("model", "local/minimax-h3-ref2va")
    metadata = {
        "model": model,
        "prompt": shot["prompt"],
        "size": shot.get("size", "768x1344"),
        "seconds": shot.get("seconds", 5),
        "fps": shot.get("fps", 24),
        "seed": shot.get("seed", 4242401),
        "generate_audio": shot.get("generate_audio", True),
    }
    if model == "local/minimax-h3-fl2va":
        references = references[:1]
        metadata["input_reference"] = {}
        reference_field = "input_reference"
    else:
        metadata["reference_images"] = [{} for _ in references]
        reference_field = "reference_images"
    if shot.get("loras"):
        metadata["loras"] = shot["loras"]
    body, content_type = build_multipart(metadata, references, reference_field)
    response = request_json(connection, "POST", "/api/openai/v1/videos", body, content_type, timeout=120)
    if not response.get("id"):
        raise BonnetError("Siltok returned no task id: " + json.dumps(response, ensure_ascii=False))
    return response


def save_state(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + ".tmp")
    temp.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    temp.replace(path)


def load_state(path: Path) -> dict:
    if not path.exists():
        raise BonnetError(f"State file not found: {path}")
    return json.loads(path.read_text())


def command_discover(args: argparse.Namespace) -> None:
    rows = discover(args.model)
    clean = [{k: v for k, v in row.items() if k != "connection" and k != "models"} | {"matching_models": [m for m in row.get("models", []) if "minimax-h3" in (m or "")]} for row in rows]
    print(json.dumps(clean, ensure_ascii=False, indent=2))


def command_refresh(args: argparse.Namespace) -> None:
    refreshed = refresh_connect_keys()
    print(json.dumps({"refreshed_connect_keys": refreshed}, ensure_ascii=False))


def command_submit(args: argparse.Namespace) -> None:
    manifest_path = Path(args.manifest).resolve()
    state_path = Path(args.state).resolve()
    manifest = json.loads(manifest_path.read_text())
    model = manifest.get("model", "local/minimax-h3-ref2va")
    connections, candidates = choose_connections(model)
    state = {
        "project": manifest.get("title", manifest_path.stem),
        "submitted_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "backends": [
            {"host": item["host"], "port": item["port"], "device_id": item["device_id"]}
            for item in connections
        ],
        "model": model,
        "jobs": [],
    }
    save_state(state_path, state)
    print(f"Selected {len(connections)} Siltok nodes for {model}", flush=True)
    for index, source in enumerate(manifest["shots"], start=1):
        connection = connections[(index - 1) % len(connections)]
        shot = {**source, "model": source.get("model", model)}
        try:
            response = submit_one(connection, shot)
            job = {
                "shot": shot["id"],
                "title": shot["title"],
                "task_id": response["id"],
                "status": response.get("status", "queued"),
                "device_id": connection["device_id"],
                "host": f"{connection['host']}:{connection['port']}",
                "prompt_sha256": hashlib.sha256(shot["prompt"].encode()).hexdigest(),
            }
            print(f"[{index:02d}/{len(manifest['shots']):02d}] {shot['id']} -> {job['task_id']} @ {job['host']} ({job['status']})", flush=True)
        except Exception as exc:
            job = {"shot": shot["id"], "title": shot["title"], "status": "submit_failed", "error": str(exc)}
            print(f"[{index:02d}/{len(manifest['shots']):02d}] {shot['id']} FAILED: {exc}", file=sys.stderr, flush=True)
        state["jobs"].append(job)
        save_state(state_path, state)
    failed = [job for job in state["jobs"] if job["status"] == "submit_failed"]
    if failed:
        raise BonnetError(f"{len(failed)} task(s) failed to submit; see {state_path}")
    print(f"All {len(state['jobs'])} shots queued. State: {state_path}")


def command_retry_failed(args: argparse.Namespace) -> None:
    manifest_path = Path(args.manifest).resolve()
    state_path = Path(args.state).resolve()
    manifest = json.loads(manifest_path.read_text())
    state = load_state(state_path)
    shots = {shot["id"]: shot for shot in manifest["shots"]}
    retry_jobs = [job for job in state["jobs"] if job.get("status") == "failed"]
    if not retry_jobs:
        print("No failed jobs to retry")
        return
    bad_devices = {job.get("device_id") for job in retry_jobs if job.get("error", {}).get("code") == "resource_insufficient"}
    model = state.get("model", manifest.get("model", "local/minimax-h3-ref2va"))
    connections, candidates = choose_connections(model)
    if args.target_host:
        target = next(
            (item for item in candidates if item.get("host") == args.target_host and item.get("supports_required")),
            None,
        )
        if not target:
            raise BonnetError(f"Requested retry node {args.target_host} is unavailable or lacks {model}")
        connections = [target["connection"]]
    else:
        connections = [item for item in connections if item["device_id"] not in bad_devices]
        healthy_connections = []
        required_memory = int(args.min_free_memory_gb * 1024 ** 3)
        for connection in connections:
            try:
                metrics = request_json(connection, "GET", "/api/performance/get", timeout=20).get("data", {})
                free_memory = max(metrics.get("memoryTotalBytes", 0) - metrics.get("memoryUsedBytes", 0), 0)
            except BonnetError:
                continue
            if free_memory >= required_memory:
                healthy_connections.append((connection, free_memory))
        healthy_connections.sort(key=lambda item: item[1], reverse=True)
        connections = [item[0] for item in healthy_connections]
    if not connections:
        raise BonnetError(
            f"No alternate Siltok node has at least {args.min_free_memory_gb:g} GB of free system memory"
        )
    for index, job in enumerate(retry_jobs):
        source = shots[job["shot"]]
        shot = {**source, "model": source.get("model", state["model"])}
        connection = connections[index % len(connections)]
        previous = {key: job.get(key) for key in ("task_id", "status", "device_id", "host", "error") if key in job}
        response = submit_one(connection, shot)
        job.setdefault("previous_attempts", []).append(previous)
        job.update({
            "task_id": response["id"],
            "status": response.get("status", "queued"),
            "device_id": connection["device_id"],
            "host": f"{connection['host']}:{connection['port']}",
        })
        job.pop("error", None)
        job.pop("progress", None)
        print(f"{job['shot']} -> {job['task_id']} @ {job['host']} ({job['status']})", flush=True)
        save_state(state_path, state)
    print(f"Retried {len(retry_jobs)} failed shot(s)")


def command_migrate_queued(args: argparse.Namespace) -> None:
    """Cancel queued jobs on their old nodes and submit them to one requested LAN node."""
    manifest_path = Path(args.manifest).resolve()
    state_path = Path(args.state).resolve()
    manifest = json.loads(manifest_path.read_text())
    state = load_state(state_path)
    shots = {shot["id"]: shot for shot in manifest["shots"]}
    model = state.get("model", manifest.get("model", "local/minimax-h3-ref2va"))
    candidates = discover(model)
    target_row = next((item for item in candidates if item.get("host") == args.target_host), None)
    if not target_row:
        raise BonnetError(f"Siltok node {args.target_host} is not configured")
    if not target_row.get("supports_required"):
        detail = target_row.get("error", "required model unavailable")
        raise BonnetError(f"Siltok node {args.target_host} is unavailable: {detail}")
    target = target_row["connection"]
    connections = {item["device_id"]: item for item in load_connections()}
    queued = [
        job for job in state["jobs"]
        if job.get("status") == "queued" and job.get("device_id") != target["device_id"]
    ]
    if args.shots:
        requested = set(args.shots)
        queued = [job for job in queued if job.get("shot") in requested]
    if not queued:
        print(f"No queued jobs need migration to {args.target_host}")
        return

    if not any(item.get("device_id") == target["device_id"] for item in state.get("backends", [])):
        state.setdefault("backends", []).append({
            "host": target["host"],
            "port": target["port"],
            "device_id": target["device_id"],
        })

    migrated = 0
    for job in queued:
        old_connection = connections.get(job.get("device_id"))
        if not old_connection:
            raise BonnetError(f"Missing connection for queued shot {job['shot']}")
        old_task_id = job.get("task_id")
        if not old_task_id:
            raise BonnetError(f"Queued shot {job['shot']} has no task id")

        # Use the Dash-authenticated unified queue endpoint. The OpenAI DELETE
        # route is API-key scoped and intentionally rejects LAN connect keys.
        cancel_body = json.dumps({"kind": "video"}).encode("utf-8")
        request_json(
            old_connection,
            "POST",
            f"/api/openai/v1/queue/{old_task_id}/cancel",
            cancel_body,
            "application/json",
            timeout=30,
        )
        source = shots[job["shot"]]
        shot = {**source, "model": source.get("model", model)}
        previous = {key: job.get(key) for key in ("task_id", "status", "device_id", "host", "progress") if key in job}
        previous["migration"] = f"cancelled_for_{args.target_host}"
        try:
            response = submit_one(target, shot)
        except Exception as exc:
            job.setdefault("previous_attempts", []).append(previous)
            job.update({"status": "submit_failed", "error": str(exc)})
            save_state(state_path, state)
            raise
        job.setdefault("previous_attempts", []).append(previous)
        job.update({
            "task_id": response["id"],
            "status": response.get("status", "queued"),
            "device_id": target["device_id"],
            "host": f"{target['host']}:{target['port']}",
        })
        job.pop("error", None)
        job.pop("progress", None)
        migrated += 1
        save_state(state_path, state)
        print(f"{job['shot']} -> {job['task_id']} @ {job['host']} ({job['status']})", flush=True)
    print(f"Migrated {migrated} queued shot(s) to {args.target_host}")


def command_retry_on_node(args: argparse.Namespace) -> None:
    """Retry failed shots only after one node has enough RAM and VRAM."""
    manifest_path = Path(args.manifest).resolve()
    state_path = Path(args.state).resolve()
    manifest = json.loads(manifest_path.read_text())
    state = load_state(state_path)
    shots = {shot["id"]: shot for shot in manifest["shots"]}
    model = state.get("model", manifest.get("model", "local/minimax-h3-ref2va"))
    candidates = discover(model)
    target_row = next((item for item in candidates if item.get("host") == args.target_host), None)
    if not target_row or not target_row.get("supports_required"):
        detail = target_row.get("error", "node not configured") if target_row else "node not configured"
        raise BonnetError(f"Siltok node {args.target_host} is unavailable: {detail}")
    target = target_row["connection"]
    metrics = request_json(target, "GET", "/api/performance/get", timeout=20).get("data", {})
    memory_total = metrics.get("memoryTotalBytes", 0)
    memory_used = metrics.get("memoryUsedBytes", 0)
    free_memory = max(memory_total - memory_used, 0)
    gpus = metrics.get("gpus") or []
    free_values = [gpu.get("vramTotalBytes", 0) - gpu.get("vramUsedBytes", 0) for gpu in gpus]
    free_vram = max(free_values, default=0)
    required_memory = int(args.min_free_memory_gb * 1024 ** 3)
    required_vram = int(args.min_free_vram_gb * 1024 ** 3)
    if free_memory < required_memory or free_vram < required_vram:
        reasons = []
        if free_memory < required_memory:
            reasons.append("insufficient_free_memory")
        if free_vram < required_vram:
            reasons.append("insufficient_free_vram")
        print(json.dumps({
            "retried": 0,
            "reason": "+".join(reasons),
            "target_host": args.target_host,
            "free_memory_gb": round(free_memory / 1024 ** 3, 2),
            "required_memory_gb": args.min_free_memory_gb,
            "free_vram_gb": round(free_vram / 1024 ** 3, 2),
            "required_vram_gb": args.min_free_vram_gb,
        }, ensure_ascii=False))
        return

    retry_jobs = [
        job for job in state["jobs"]
        if job.get("status") == "failed" and job.get("device_id") == target["device_id"]
    ]
    for job in retry_jobs:
        source = shots[job["shot"]]
        shot = {**source, "model": source.get("model", model)}
        previous = {key: job.get(key) for key in ("task_id", "status", "device_id", "host", "error", "progress") if key in job}
        response = submit_one(target, shot)
        job.setdefault("previous_attempts", []).append(previous)
        job.update({
            "task_id": response["id"],
            "status": response.get("status", "queued"),
            "device_id": target["device_id"],
            "host": f"{target['host']}:{target['port']}",
        })
        job.pop("error", None)
        job.pop("progress", None)
        save_state(state_path, state)
        print(f"{job['shot']} -> {job['task_id']} @ {job['host']} ({job['status']})", flush=True)
    print(f"Retried {len(retry_jobs)} failed shot(s) on {args.target_host}")


def connections_from_state(state: dict) -> dict[str, dict]:
    targets = state.get("backends") or [state["backend"]]
    target_ids = {target["device_id"] for target in targets}
    found: dict[str, dict] = {}
    for connection in load_connections():
        if connection["device_id"] in target_ids:
            found[connection["device_id"]] = connection
    missing = target_ids - found.keys()
    if missing:
        raise BonnetError("A connection key for a recorded Siltok node is no longer available")
    return found


def command_poll(args: argparse.Namespace) -> None:
    state_path = Path(args.state).resolve()
    state = load_state(state_path)
    connections = connections_from_state(state)
    terminal = {"completed", "failed", "cancelled", "canceled"}
    while True:
        pending = 0
        for job in state["jobs"]:
            if job.get("status") in terminal or not job.get("task_id"):
                continue
            connection = connections[job.get("device_id") or state["backend"]["device_id"]]
            data = request_json(connection, "GET", f"/api/openai/v1/videos/{job['task_id']}", timeout=20)
            job["status"] = data.get("status", job.get("status", "unknown"))
            job["progress"] = data.get("progress")
            if data.get("error"):
                job["error"] = data["error"]
            if job["status"] not in terminal:
                pending += 1
        state["last_polled_at"] = time.strftime("%Y-%m-%dT%H:%M:%S%z")
        save_state(state_path, state)
        counts: dict[str, int] = {}
        for job in state["jobs"]:
            counts[job.get("status", "unknown")] = counts.get(job.get("status", "unknown"), 0) + 1
        print(json.dumps(counts, ensure_ascii=False), flush=True)
        if pending == 0 or args.once:
            break
        time.sleep(args.interval)


def command_download(args: argparse.Namespace) -> None:
    state_path = Path(args.state).resolve()
    output_dir = Path(args.output).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    state = load_state(state_path)
    connections = connections_from_state(state)
    downloaded = 0
    for job in state["jobs"]:
        if job.get("status") != "completed" or not job.get("task_id"):
            continue
        destination = output_dir / f"{job['shot']}.mp4"
        if destination.exists() and destination.stat().st_size > 0:
            job["output"] = str(destination)
            continue
        connection = connections[job.get("device_id") or state["backend"]["device_id"]]
        headers = {"Authorization": f"Bearer {connection['key']}", "X-Request-ID": str(uuid.uuid4())}
        url = f"http://{connection['host']}:{connection['port']}/api/openai/v1/videos/{job['task_id']}/content"
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=180) as response, destination.open("wb") as handle:
            handle.write(response.read())
        job["output"] = str(destination)
        downloaded += 1
        print(f"Downloaded {job['shot']} -> {destination}")
    save_state(state_path, state)
    print(f"Downloaded {downloaded} new video(s)")


def parser() -> argparse.ArgumentParser:
    root = argparse.ArgumentParser(description=__doc__)
    sub = root.add_subparsers(dest="command", required=True)
    discover_parser = sub.add_parser("discover")
    discover_parser.add_argument("--model", default="local/minimax-h3-ref2va")
    discover_parser.set_defaults(func=command_discover)
    refresh_parser = sub.add_parser("refresh-auth")
    refresh_parser.set_defaults(func=command_refresh)
    submit_parser = sub.add_parser("submit")
    submit_parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST))
    submit_parser.add_argument("--state", default=str(DEFAULT_STATE))
    submit_parser.set_defaults(func=command_submit)
    retry_parser = sub.add_parser("retry-failed")
    retry_parser.add_argument("--target-host")
    retry_parser.add_argument("--min-free-memory-gb", type=float, default=20.0)
    retry_parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST))
    retry_parser.add_argument("--state", default=str(DEFAULT_STATE))
    retry_parser.set_defaults(func=command_retry_failed)
    migrate_parser = sub.add_parser("migrate-queued")
    migrate_parser.add_argument("--target-host", required=True)
    migrate_parser.add_argument("--shots", nargs="*")
    migrate_parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST))
    migrate_parser.add_argument("--state", default=str(DEFAULT_STATE))
    migrate_parser.set_defaults(func=command_migrate_queued)
    node_retry_parser = sub.add_parser("retry-on-node")
    node_retry_parser.add_argument("--target-host", required=True)
    node_retry_parser.add_argument("--min-free-memory-gb", type=float, default=20.0)
    node_retry_parser.add_argument("--min-free-vram-gb", type=float, default=14.0)
    node_retry_parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST))
    node_retry_parser.add_argument("--state", default=str(DEFAULT_STATE))
    node_retry_parser.set_defaults(func=command_retry_on_node)
    poll_parser = sub.add_parser("poll")
    poll_parser.add_argument("--state", default=str(DEFAULT_STATE))
    poll_parser.add_argument("--interval", type=int, default=30)
    poll_parser.add_argument("--once", action="store_true")
    poll_parser.set_defaults(func=command_poll)
    download_parser = sub.add_parser("download")
    download_parser.add_argument("--state", default=str(DEFAULT_STATE))
    download_parser.add_argument("--output", default=str(DEFAULT_RESULTS))
    download_parser.set_defaults(func=command_download)
    return root


if __name__ == "__main__":
    args = parser().parse_args()
    try:
        args.func(args)
    except BonnetError as exc:
        print(f"error: {exc}", file=sys.stderr)
        raise SystemExit(1)
