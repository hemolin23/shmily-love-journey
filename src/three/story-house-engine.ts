import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {houseRooms, type HouseRoomId} from '../data/house-story';

interface MountCallbacks {
  onReady: () => void;
  onHover: (label: string) => void;
  onSelect: (id: HouseRoomId) => void;
}

interface SyncState {
  selected: HouseRoomId | null;
  visited: HouseRoomId[];
}

export interface StoryHouseController {
  sync: (state: SyncState) => void;
  dispose: () => void;
}

interface RoomVisual {
  id: HouseRoomId;
  group: T.Group;
  floor: T.MeshStandardMaterial;
  glow: T.MeshBasicMaterial;
  lights: T.PointLight[];
}

const C = {
  ink: 0x101719,
  wall: 0x263335,
  wallSide: 0x1a2527,
  plaster: 0xd9cdb8,
  cream: 0xf5ebd7,
  amber: 0xe7a65d,
  amberSoft: 0x9b6639,
  green: 0x657a6f,
  rain: 0x658092,
  rose: 0xb98b7a,
  paper: 0xcbbd9f,
};

const roomPositions: Record<HouseRoomId, T.Vector3> = {
  arrival: new T.Vector3(-4, 3.18, 0),
  ordinary: new T.Vector3(0, 3.18, 0),
  rain: new T.Vector3(4, 3.18, 0),
  'two-cities': new T.Vector3(4, 0, 0),
  nature: new T.Vector3(0, 0, 0),
  'leave-light': new T.Vector3(-4, 0, 0),
};

function standard(color: number, roughness = 0.76, metalness = 0.03) {
  return new T.MeshStandardMaterial({color, roughness, metalness});
}

type SurfaceKind = 'wood' | 'tile' | 'plaster' | 'fabric';

function surfaceTexture(kind: SurfaceKind, base: string, detail: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new T.CanvasTexture(canvas);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = detail;
  ctx.fillStyle = detail;
  if (kind === 'wood') {
    ctx.globalAlpha = 0.32;
    for (let y = 22; y < 512; y += 54) {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= 512; x += 32) ctx.lineTo(x, y + Math.sin((x + y) * 0.035) * 5);
      ctx.stroke();
    }
    for (let x = 110; x < 512; x += 170) {
      ctx.beginPath();
      ctx.ellipse(x, 160 + (x % 3) * 78, 28, 8, 0.2, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (kind === 'tile') {
    ctx.globalAlpha = 0.28;
    ctx.lineWidth = 3;
    for (let n = 0; n <= 512; n += 64) {
      ctx.beginPath(); ctx.moveTo(n, 0); ctx.lineTo(n, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, n); ctx.lineTo(512, n); ctx.stroke();
    }
  } else {
    ctx.globalAlpha = kind === 'fabric' ? 0.18 : 0.12;
    for (let i = 0; i < 2200; i += 1) {
      const x = (i * 73) % 512;
      const y = (i * 151) % 512;
      const size = kind === 'fabric' ? 1.1 : 0.7 + (i % 3) * 0.4;
      ctx.fillRect(x, y, size, size);
    }
  }
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  texture.wrapS = T.RepeatWrapping;
  texture.wrapT = T.RepeatWrapping;
  texture.repeat.set(kind === 'wood' ? 2.4 : 3.5, kind === 'wood' ? 2.4 : 3.5);
  texture.anisotropy = 8;
  return texture;
}

function texturedMaterial(kind: SurfaceKind, base: string, detail: string, roughness = 0.8) {
  return new T.MeshStandardMaterial({map: surfaceTexture(kind, base, detail), roughness, metalness: 0.01});
}

function meshBox(
  parent: T.Object3D,
  size: [number, number, number],
  position: [number, number, number],
  material: T.Material,
  radius = 0.04,
) {
  const geometry = radius > 0
    ? new RoundedBoxGeometry(size[0], size[1], size[2], 4, Math.min(radius, Math.min(...size) * 0.2))
    : new T.BoxGeometry(...size);
  const mesh = new T.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function box(
  parent: T.Object3D,
  size: [number, number, number],
  position: [number, number, number],
  color: number,
  radius = 0.04,
) {
  const geometry = radius > 0
    ? new RoundedBoxGeometry(size[0], size[1], size[2], 3, Math.min(radius, Math.min(...size) * 0.2))
    : new T.BoxGeometry(...size);
  const mesh = new T.Mesh(geometry, standard(color));
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function cylinder(
  parent: T.Object3D,
  radiusTop: number,
  radiusBottom: number,
  height: number,
  position: [number, number, number],
  color: number,
  segments = 24,
) {
  const mesh = new T.Mesh(new T.CylinderGeometry(radiusTop, radiusBottom, height, segments), standard(color));
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function sphere(parent: T.Object3D, radius: number, position: [number, number, number], color: number) {
  const mesh = new T.Mesh(new T.SphereGeometry(radius, 20, 14), standard(color));
  mesh.position.set(...position);
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function tube(parent: T.Object3D, points: T.Vector3[], radius: number, color: number) {
  const curve = new T.CatmullRomCurve3(points);
  const mesh = new T.Mesh(new T.TubeGeometry(curve, 32, radius, 8, false), standard(color, 0.6));
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function canvasTexture(lines: string[], options: {width?: number; height?: number; accent?: boolean} = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = options.width ?? 640;
  canvas.height = options.height ?? 200;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new T.CanvasTexture(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = options.accent ? '#e7a65d' : '#eadfca';
  ctx.font = '600 34px "Songti SC", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, index) => {
    const y = canvas.height / 2 + (index - (lines.length - 1) / 2) * 50;
    ctx.fillText(line, canvas.width / 2, y);
  });
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function wallLabel(parent: T.Object3D, number: string, title: string) {
  const texture = canvasTexture([number + '  ' + title]);
  const material = new T.MeshBasicMaterial({map: texture, transparent: true, opacity: 0.78, depthWrite: false});
  const mesh = new T.Mesh(new T.PlaneGeometry(1.55, 0.48), material);
  mesh.position.set(-0.95, 2.6, -1.405);
  parent.add(mesh);
}

function paperLabel(parent: T.Object3D, text: string, position: [number, number, number], size: [number, number]) {
  const texture = canvasTexture([text], {width: 460, height: 150, accent: true});
  const material = new T.MeshBasicMaterial({map: texture, transparent: true, side: T.DoubleSide});
  const mesh = new T.Mesh(new T.PlaneGeometry(size[0], size[1]), material);
  mesh.position.set(...position);
  mesh.rotation.x = -Math.PI / 2;
  parent.add(mesh);
  return mesh;
}

function makeLamp(parent: T.Object3D, position: [number, number, number], lights: T.PointLight[]) {
  cylinder(parent, 0.07, 0.08, 0.62, [position[0], position[1] + 0.3, position[2]], C.ink, 12);
  const shade = new T.Mesh(new T.ConeGeometry(0.28, 0.34, 20, 1, true), standard(C.cream));
  shade.position.set(position[0], position[1] + 0.72, position[2]);
  shade.rotation.x = Math.PI;
  parent.add(shade);
  const bulb = sphere(parent, 0.1, [position[0], position[1] + 0.61, position[2]], C.amber);
  (bulb.material as T.MeshStandardMaterial).emissive.setHex(C.amber);
  (bulb.material as T.MeshStandardMaterial).emissiveIntensity = 1.25;
  const light = new T.PointLight(C.amber, 0.35, 3.2, 2);
  light.position.set(position[0], position[1] + 0.62, position[2] + 0.08);
  parent.add(light);
  lights.push(light);
}

function makePendant(parent: T.Object3D, x: number, z: number, lights: T.PointLight[]) {
  cylinder(parent, 0.018, 0.018, 0.56, [x, 2.63, z], 0x302a24, 8);
  const shadeMaterial = new T.MeshStandardMaterial({color: 0xd9c8a8, roughness: 0.45, side: T.DoubleSide});
  const shade = new T.Mesh(new T.ConeGeometry(0.34, 0.34, 28, 1, true), shadeMaterial);
  shade.position.set(x, 2.31, z);
  shade.rotation.x = Math.PI;
  parent.add(shade);
  const bulbMaterial = new T.MeshStandardMaterial({color: C.cream, emissive: C.amber, emissiveIntensity: 2.4, roughness: 0.3});
  const bulb = new T.Mesh(new T.SphereGeometry(0.075, 14, 10), bulbMaterial);
  bulb.position.set(x, 2.17, z);
  parent.add(bulb);
  const light = new T.PointLight(C.amber, 0.48, 3.8, 1.8);
  light.position.set(x, 2.02, z + 0.16);
  light.castShadow = true;
  light.shadow.mapSize.set(256, 256);
  parent.add(light);
  lights.push(light);
}

function makeWindow(parent: T.Object3D, x: number, width: number, city: 'shanghai' | 'beijing' | 'singapore') {
  const frameColor = 0x6f5d48;
  box(parent, [width + 0.16, 0.08, 0.08], [x, 1.98, -1.405], frameColor, 0.015);
  box(parent, [width + 0.16, 0.08, 0.08], [x, 0.67, -1.405], frameColor, 0.015);
  box(parent, [0.08, 1.38, 0.08], [x - width / 2, 1.33, -1.405], frameColor, 0.015);
  box(parent, [0.08, 1.38, 0.08], [x + width / 2, 1.33, -1.405], frameColor, 0.015);
  box(parent, [0.055, 1.28, 0.06], [x, 1.33, -1.39], frameColor, 0.01);
  const sky = new T.MeshStandardMaterial({color: city === 'singapore' ? 0x243b4a : 0x1d2b38, emissive: city === 'beijing' ? 0x16232d : 0x1b3340, emissiveIntensity: 0.55, roughness: 0.92});
  meshBox(parent, [width - 0.04, 1.22, 0.035], [x, 1.33, -1.455], sky, 0);
  const skyline = new T.Group();
  skyline.position.set(x - width / 2 + 0.12, 0.72, -1.365);
  const count = Math.max(5, Math.round(width * 5));
  for (let i = 0; i < count; i += 1) {
    const w = 0.11 + (i % 3) * 0.035;
    const h = 0.23 + ((i * 7) % 6) * 0.075;
    const tower = box(skyline, [w, h, 0.045], [i * ((width - 0.28) / count), h / 2, 0], city === 'singapore' ? 0x31474a : 0x283536, 0.01);
    if (i % 2 === 0) {
      const windowMaterial = new T.MeshBasicMaterial({color: 0xe8b96f, transparent: true, opacity: 0.82});
      const litWindow = new T.Mesh(new T.PlaneGeometry(w * 0.22, h * 0.16), windowMaterial);
      litWindow.position.set(tower.position.x, h * 0.58, 0.026);
      skyline.add(litWindow);
    }
  }
  parent.add(skyline);
}

function makeRug(parent: T.Object3D, position: [number, number, number], size: [number, number], color: number) {
  const material = texturedMaterial('fabric', '#' + color.toString(16).padStart(6, '0'), '#e7dcc6', 0.98);
  const rug = new T.Mesh(new RoundedBoxGeometry(size[0], 0.035, size[1], 4, 0.06), material);
  rug.position.set(...position);
  rug.receiveShadow = true;
  parent.add(rug);
  return rug;
}

function makeChair(parent: T.Object3D, position: [number, number, number], rotationY = 0, color = 0x806c5a) {
  const group = new T.Group();
  group.position.set(...position);
  group.rotation.y = rotationY;
  box(group, [0.68, 0.14, 0.64], [0, 0.58, 0], color, 0.08);
  box(group, [0.7, 0.72, 0.13], [0, 0.94, -0.27], color, 0.08);
  [-0.25, 0.25].forEach((x) => {
    box(group, [0.07, 0.57, 0.07], [x, 0.27, -0.22], 0x3c332b, 0.02);
    box(group, [0.07, 0.57, 0.07], [x, 0.27, 0.22], 0x3c332b, 0.02);
  });
  parent.add(group);
  return group;
}

function makeShelf(parent: T.Object3D, position: [number, number, number], width: number) {
  const group = new T.Group();
  group.position.set(...position);
  [0, 0.58, 1.16].forEach((y) => box(group, [width, 0.08, 0.34], [0, y, 0], 0x6d5039, 0.025));
  [-width / 2 + 0.05, width / 2 - 0.05].forEach((x) => box(group, [0.08, 1.22, 0.34], [x, 0.58, 0], 0x5b4533, 0.02));
  const bookColors = [0x9a6d58, 0x718070, 0xc1a46e, 0x5f7180, 0xb7a88e];
  for (let i = 0; i < 8; i += 1) {
    const shelfY = i < 4 ? 0.25 : 0.83;
    const x = -width / 2 + 0.18 + (i % 4) * 0.18;
    const book = box(group, [0.13, 0.34 + (i % 2) * 0.08, 0.24], [x, shelfY, 0.02], bookColors[i % bookColors.length], 0.012);
    book.rotation.z = i % 3 === 0 ? -0.07 : 0;
  }
  parent.add(group);
}

function makePlant(parent: T.Object3D, position: [number, number, number], scale = 1) {
  const group = new T.Group();
  group.position.set(...position);
  group.scale.setScalar(scale);
  cylinder(group, 0.2, 0.15, 0.32, [0, 0.16, 0], 0x8a634d, 18);
  for (let i = 0; i < 7; i += 1) {
    const angle = (i / 7) * Math.PI * 2;
    const leaf = new T.Mesh(new T.SphereGeometry(0.16, 12, 8), standard(i % 2 ? 0x526c5e : 0x657b67));
    leaf.scale.set(0.55, 1.55, 0.32);
    leaf.position.set(Math.cos(angle) * 0.14, 0.5 + (i % 3) * 0.08, Math.sin(angle) * 0.14);
    leaf.rotation.z = Math.cos(angle) * 0.65;
    group.add(leaf);
  }
  parent.add(group);
}

function makeMug(parent: T.Object3D, position: [number, number, number], color = C.cream) {
  const cup = new T.Mesh(new T.CylinderGeometry(0.09, 0.075, 0.18, 18, 1, true), standard(color));
  cup.position.set(...position);
  cup.castShadow = true;
  parent.add(cup);
  const handle = new T.Mesh(new T.TorusGeometry(0.075, 0.018, 7, 16, Math.PI * 1.5), standard(color));
  handle.position.set(position[0] + 0.1, position[1], position[2]);
  handle.rotation.y = Math.PI / 2;
  parent.add(handle);
}

function makeArchTrim(parent: T.Object3D, x: number, color: number) {
  box(parent, [0.06, 1.1, 0.05], [x - 0.63, 1.0, -1.36], color, 0.015);
  box(parent, [0.06, 1.1, 0.05], [x + 0.63, 1.0, -1.36], color, 0.015);
  const arch = new T.Mesh(new T.TorusGeometry(0.63, 0.032, 8, 36, Math.PI), standard(color));
  arch.position.set(x, 1.55, -1.36);
  parent.add(arch);
}

function makeSteam(parent: T.Object3D, x: number, y: number, z: number) {
  [-0.18, 0, 0.18].forEach((dx, index) => {
    const steamMaterial = new T.MeshBasicMaterial({color: C.cream, transparent: true, opacity: 0.26, depthWrite: false});
    const curve = new T.CatmullRomCurve3([
      new T.Vector3(x + dx, y, z),
      new T.Vector3(x + dx + 0.07, y + 0.25, z),
      new T.Vector3(x + dx - 0.04, y + 0.52 + index * 0.03, z),
    ]);
    parent.add(new T.Mesh(new T.TubeGeometry(curve, 18, 0.014, 6, false), steamMaterial));
  });
}

function makeTulips(parent: T.Object3D) {
  const vase = cylinder(parent, 0.16, 0.22, 0.5, [-0.75, 0.56, -0.72], 0x9ca6a0, 18);
  (vase.material as T.MeshStandardMaterial).transparent = true;
  (vase.material as T.MeshStandardMaterial).opacity = 0.82;
  [-0.13, 0, 0.14].forEach((dx, index) => {
    cylinder(parent, 0.018, 0.018, 0.82 + index * 0.04, [-0.75 + dx, 1.15, -0.72], C.green, 8);
    const petals = new T.Group();
    petals.position.set(-0.75 + dx, 1.57 + index * 0.04, -0.72);
    for (let p = 0; p < 3; p += 1) {
      const petal = new T.Mesh(new T.SphereGeometry(0.13, 12, 8), standard(C.cream));
      petal.scale.set(0.72, 1.15, 0.52);
      petal.rotation.z = (p - 1) * 0.45;
      petal.position.x = (p - 1) * 0.07;
      petals.add(petal);
    }
    parent.add(petals);
  });
}

function makeHeadphones(parent: T.Object3D) {
  const band = new T.Mesh(new T.TorusGeometry(0.34, 0.045, 8, 28, Math.PI), standard(C.ink));
  band.position.set(0.66, 0.79, -0.82);
  band.rotation.z = Math.PI;
  parent.add(band);
  box(parent, [0.13, 0.29, 0.16], [0.32, 0.69, -0.82], C.ink, 0.06);
  box(parent, [0.13, 0.29, 0.16], [1.0, 0.69, -0.82], C.ink, 0.06);
}

function furnishArrival(parent: T.Object3D) {
  makeRug(parent, [0.35, 0.105, 0.34], [2.25, 1.25], 0x53665f);
  const suitcase = box(parent, [0.84, 1.18, 0.5], [-0.98, 0.61, 0.42], C.rose, 0.09);
  box(suitcase, [0.08, 0.85, 0.025], [0, 0, 0.263], 0x8f6458, 0.015);
  box(suitcase, [0.58, 0.07, 0.025], [0, 0.15, 0.264], 0x8f6458, 0.015);
  [-0.27, 0.27].forEach((x) => cylinder(suitcase, 0.045, 0.045, 0.08, [x, -0.63, 0.16], C.ink, 12));
  tube(parent, [new T.Vector3(-1.19, 1.23, 0.42), new T.Vector3(-1.19, 1.46, 0.42), new T.Vector3(-0.95, 1.5, 0.42)], 0.025, C.ink);
  makeTulips(parent);
  makeHeadphones(parent);
  box(parent, [1.52, 0.12, 0.48], [0.55, 0.38, -0.9], C.green, 0.04);
  box(parent, [1.36, 0.3, 0.09], [0.55, 0.16, -1.15], 0x4d4035, 0.03);
  [-0.16, 0.16].forEach((x) => {
    const shoe = box(parent, [0.34, 0.13, 0.18], [0.42 + x, 0.17, -0.58], 0xddd1bd, 0.06);
    shoe.rotation.y = x * 1.2;
  });
  for (let i = 0; i < 3; i += 1) {
    cylinder(parent, 0.035, 0.035, 0.09, [0.45 + i * 0.28, 1.76, -1.38], 0xb9935e, 12).rotation.x = Math.PI / 2;
  }
}

function furnishOrdinary(parent: T.Object3D) {
  meshBox(parent, [3.18, 0.74, 0.45], [0, 0.38, -1.12], texturedMaterial('wood', '#5f4635', '#2d211a', 0.68), 0.04);
  for (let i = -1; i <= 1; i += 1) {
    box(parent, [0.03, 0.56, 0.03], [i * 0.9, 0.39, -0.87], 0x2e2823, 0.01);
    cylinder(parent, 0.025, 0.025, 0.14, [i * 0.9 + 0.34, 0.43, -0.86], 0xc09a63, 10).rotation.z = Math.PI / 2;
  }
  box(parent, [3.05, 0.58, 0.04], [0, 1.14, -1.39], 0xb8aa94, 0.01);
  for (let x = -1.45; x <= 1.45; x += 0.24) box(parent, [0.012, 0.56, 0.018], [x, 1.14, -1.36], 0x8f846f, 0);
  box(parent, [1.35, 0.08, 0.32], [0.75, 1.68, -1.29], 0x6a4d36, 0.02);
  [0x9e7258, 0x71806e, 0xc3a66e, 0xd4cec1].forEach((color, index) => cylinder(parent, 0.08, 0.07, 0.26 + index * 0.025, [0.35 + index * 0.25, 1.84, -1.27], color, 16));
  box(parent, [2.4, 0.14, 1.12], [0, 0.72, 0], 0x80614c, 0.06);
  box(parent, [0.12, 0.68, 0.12], [-0.88, 0.34, -0.33], C.ink, 0.02);
  box(parent, [0.12, 0.68, 0.12], [0.88, 0.34, -0.33], C.ink, 0.02);
  const pot = cylinder(parent, 0.53, 0.49, 0.27, [0, 0.93, 0], 0x2c3030, 28);
  pot.rotation.y = Math.PI / 5;
  const soup = cylinder(parent, 0.44, 0.44, 0.025, [0, 1.08, 0], 0xc55c45, 28);
  (soup.material as T.MeshStandardMaterial).emissive.setHex(0x5f2217);
  (soup.material as T.MeshStandardMaterial).emissiveIntensity = 0.5;
  makeSteam(parent, 0, 1.13, 0);
  [[-0.22, 0.15], [0.04, 0.1], [0.23, -0.15]].forEach(([x, z], index) => sphere(parent, 0.1, [x, 1.12, z], index === 1 ? C.green : C.cream));
  sphere(parent, 0.16, [-0.93, 0.98, 0.05], 0xd3a04f);
  sphere(parent, 0.14, [-0.67, 0.98, 0.14], 0xb96b52);
  const controller = box(parent, [0.65, 0.16, 0.34], [0.83, 0.95, 0.05], C.ink, 0.12);
  controller.rotation.y = -0.24;
  sphere(parent, 0.055, [0.68, 1.05, 0.2], C.cream);
  sphere(parent, 0.055, [0.94, 1.05, 0.12], C.amber);
  makeChair(parent, [-1.18, 0.03, 0.18], 0.1, 0x6e5a4b);
  makeChair(parent, [1.18, 0.03, 0.18], -0.1, 0x6e5a4b);
}

function makeUmbrella(parent: T.Object3D) {
  const canopy = new T.Mesh(new T.SphereGeometry(0.68, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), standard(C.rain));
  canopy.position.set(-0.55, 1.55, -0.44);
  canopy.scale.y = 0.48;
  parent.add(canopy);
  tube(parent, [new T.Vector3(-0.55, 1.56, -0.44), new T.Vector3(-0.55, 0.63, -0.44), new T.Vector3(-0.4, 0.51, -0.44)], 0.025, C.cream);
}

function furnishRain(parent: T.Object3D) {
  const puddleMaterial = new T.MeshPhysicalMaterial({color: 0x5d7480, roughness: 0.18, metalness: 0.05, transparent: true, opacity: 0.62, clearcoat: 1});
  const puddle = new T.Mesh(new T.CircleGeometry(0.72, 42), puddleMaterial);
  puddle.rotation.x = -Math.PI / 2;
  puddle.scale.y = 0.55;
  puddle.position.set(-0.42, 0.105, 0.68);
  parent.add(puddle);
  box(parent, [3.25, 0.055, 0.13], [0, 0.12, 1.18], 0xc2a451, 0.015);
  box(parent, [1.38, 0.13, 0.46], [-0.08, 0.48, -0.95], 0x59646a, 0.035);
  box(parent, [0.09, 0.45, 0.09], [-0.58, 0.25, -0.95], 0x30393c, 0.015);
  box(parent, [0.09, 0.45, 0.09], [0.42, 0.25, -0.95], 0x30393c, 0.015);
  makeUmbrella(parent);
  box(parent, [0.76, 1.05, 0.48], [0.82, 0.55, 0.25], 0x6a594c, 0.07);
  const wristband = new T.Mesh(new T.TorusGeometry(0.26, 0.055, 10, 28), standard(C.cream));
  wristband.position.set(0.83, 1.22, 0.22);
  wristband.rotation.x = Math.PI / 2;
  parent.add(wristband);
  const ticket = box(parent, [0.7, 0.035, 0.34], [0.42, 0.52, -0.74], C.paper, 0.02);
  ticket.rotation.y = -0.18;
  paperLabel(parent, 'BEIJING', [0.42, 0.55, -0.73], [0.55, 0.18]);
  const clockFace = new T.Mesh(new T.CircleGeometry(0.32, 32), new T.MeshBasicMaterial({color: 0xe8dfcf}));
  clockFace.position.set(0.94, 2.12, -1.38);
  parent.add(clockFace);
  cylinder(parent, 0.35, 0.35, 0.07, [0.94, 2.12, -1.42], 0x3a3430, 32).rotation.x = Math.PI / 2;
  box(parent, [0.025, 0.18, 0.015], [0.94, 2.18, -1.34], C.ink, 0.005).rotation.z = -0.4;
  box(parent, [0.16, 0.02, 0.015], [1.01, 2.12, -1.34], C.ink, 0.005).rotation.z = 0.18;
  for (let i = 0; i < 11; i += 1) {
    const x = -1.45 + (i % 6) * 0.55;
    const y = 0.75 + (i % 4) * 0.47;
    tube(parent, [new T.Vector3(x, y, -1.43), new T.Vector3(x - 0.12, y - 0.3, -1.43)], 0.009, 0x8aa2ad);
  }
}

function makeDesk(parent: T.Object3D, x: number) {
  box(parent, [1.32, 0.12, 0.62], [x, 0.73, -0.45], 0x765c48, 0.04);
  box(parent, [0.09, 0.7, 0.09], [x - 0.5, 0.35, -0.63], C.ink, 0.02);
  box(parent, [0.09, 0.7, 0.09], [x + 0.5, 0.35, -0.63], C.ink, 0.02);
  box(parent, [0.39, 0.62, 0.045], [x, 1.16, -0.71], 0x273035, 0.025);
  const screen = box(parent, [0.33, 0.5, 0.02], [x, 1.16, -0.68], 0x7c9ca1, 0.018);
  (screen.material as T.MeshStandardMaterial).emissive.setHex(0x2e4c53);
  (screen.material as T.MeshStandardMaterial).emissiveIntensity = 0.6;
}

function furnishTwoCities(parent: T.Object3D, lights: T.PointLight[]) {
  makeShelf(parent, [-1.33, 0.15, -1.18], 0.72);
  makeShelf(parent, [1.33, 0.15, -1.18], 0.72);
  makeDesk(parent, -0.82);
  makeDesk(parent, 0.82);
  makeChair(parent, [-0.82, 0.03, 0.46], Math.PI, 0x65726e);
  makeChair(parent, [0.82, 0.03, 0.46], Math.PI, 0x65726e);
  makeLamp(parent, [-1.2, 0.79, -0.32], lights);
  makeLamp(parent, [1.2, 0.79, -0.32], lights);
  makeMug(parent, [-0.55, 0.91, -0.3], 0x9d735d);
  makeMug(parent, [0.55, 0.91, -0.3], 0x6c7b77);
  const rail = tube(parent, [new T.Vector3(-1.5, 1.98, -1.42), new T.Vector3(0, 2.19, -1.42), new T.Vector3(1.5, 1.98, -1.42)], 0.018, C.amberSoft);
  (rail.material as T.MeshStandardMaterial).emissive.setHex(C.amberSoft);
  box(parent, [0.46, 0.035, 0.28], [0, 0.47, 0.5], C.rain, 0.025);
  paperLabel(parent, 'MRT', [0, 0.5, 0.5], [0.32, 0.15]);
}

function furnishNature(parent: T.Object3D) {
  makeRug(parent, [0, 0.105, 0.2], [2.4, 1.7], 0x59685e);
  const couch = new T.Group();
  couch.position.set(-0.74, 0.06, -0.9);
  box(couch, [1.55, 0.38, 0.62], [0, 0.4, 0], 0x8b7868, 0.12);
  box(couch, [1.55, 0.7, 0.2], [0, 0.72, -0.24], 0x78695d, 0.1);
  box(couch, [0.2, 0.52, 0.62], [-0.75, 0.48, 0], 0x78695d, 0.08);
  box(couch, [0.2, 0.52, 0.62], [0.75, 0.48, 0], 0x78695d, 0.08);
  parent.add(couch);
  const bowl = cylinder(parent, 0.38, 0.3, 0.19, [-0.72, 0.16, 0.22], C.cream, 26);
  const bowlTop = cylinder(parent, 0.28, 0.28, 0.025, [-0.72, 0.27, 0.22], 0x825a42, 26);
  bowlTop.position.y = 0.27;
  const bag = box(parent, [0.58, 1.12, 0.35], [0.92, 0.58, -0.5], C.paper, 0.08);
  bag.rotation.z = -0.08;
  const phone = box(parent, [0.48, 0.82, 0.045], [0.55, 0.78, 0.36], 0x252b2d, 0.06);
  phone.rotation.z = -0.32;
  phone.rotation.x = -0.35;
  const cat = new T.Group();
  sphere(cat, 0.34, [0, 0.44, -0.12], 0xddd5c8);
  sphere(cat, 0.26, [0, 0.86, -0.12], 0xded7cb);
  const earGeometry = new T.ConeGeometry(0.13, 0.28, 3);
  [-0.16, 0.16].forEach((x) => {
    const ear = new T.Mesh(earGeometry, standard(0xaaa49d));
    ear.position.set(x, 1.08, -0.12);
    cat.add(ear);
  });
  sphere(cat, 0.032, [-0.09, 0.89, 0.12], C.ink);
  sphere(cat, 0.032, [0.09, 0.89, 0.12], C.ink);
  tube(cat, [new T.Vector3(0.27, 0.54, -0.12), new T.Vector3(0.55, 0.7, -0.06), new T.Vector3(0.46, 1.0, 0)], 0.045, 0xaaa49d);
  parent.add(cat);
  tube(parent, [new T.Vector3(-1.15, 0.2, -0.73), new T.Vector3(-1.0, 0.54, -0.61), new T.Vector3(-0.82, 0.91, -0.52)], 0.035, C.ink);
  box(parent, [0.32, 0.08, 0.22], [-0.78, 1.02, -0.5], C.ink, 0.04);
  cylinder(parent, 0.08, 0.09, 1.12, [1.3, 0.63, 0.25], 0x9f8460, 14);
  cylinder(parent, 0.48, 0.48, 0.09, [1.3, 0.12, 0.25], 0x6e5945, 28);
  cylinder(parent, 0.38, 0.42, 0.16, [1.3, 1.18, 0.25], 0x8c7356, 28);
  makePlant(parent, [1.31, 0.1, -1.0], 0.76);
}

function furnishLeaveLight(parent: T.Object3D, lights: T.PointLight[]) {
  makeRug(parent, [0, 0.105, 0.28], [2.65, 1.75], 0x6d6256);
  makeChair(parent, [-1.05, 0.04, 0.28], -0.38, 0x8a705f);
  makeChair(parent, [1.05, 0.04, 0.28], 0.38, 0x68746e);
  box(parent, [2.38, 0.13, 1.05], [0, 0.68, -0.12], 0x755b49, 0.05);
  box(parent, [0.12, 0.65, 0.12], [-0.91, 0.33, -0.42], C.ink, 0.02);
  box(parent, [0.12, 0.65, 0.12], [0.91, 0.33, -0.42], C.ink, 0.02);
  makeLamp(parent, [-1.08, 0.74, -0.35], lights);
  makeLamp(parent, [1.08, 0.74, -0.35], lights);
  const plan = box(parent, [0.95, 0.035, 0.62], [-0.17, 0.78, -0.08], C.paper, 0.015);
  plan.rotation.y = 0.15;
  paperLabel(parent, 'PLAN ?', [-0.17, 0.81, -0.08], [0.68, 0.2]);
  tube(parent, [
    new T.Vector3(-0.15, 0.82, 0.28),
    new T.Vector3(0.12, 0.87, 0.34),
    new T.Vector3(0.3, 0.78, 0.16),
    new T.Vector3(0.12, 0.83, 0.02),
    new T.Vector3(0.42, 0.85, -0.05),
  ], 0.025, C.ink);
  paperLabel(parent, '10:00', [0.63, 1.48, -1.46], [0.72, 0.32]);
  for (let i = 0; i < 5; i += 1) {
    const note = box(parent, [0.34, 0.025, 0.25], [-0.78 + (i % 3) * 0.42, 1.45 + Math.floor(i / 3) * 0.36, -1.37], i % 2 ? 0xc7b58e : 0x9eaa94, 0.01);
    note.rotation.z = (i - 2) * 0.035;
  }
}

function buildRoom(roomIndex: number): RoomVisual {
  const data = houseRooms[roomIndex];
  const group = new T.Group();
  group.position.copy(roomPositions[data.id]);
  group.userData.roomId = data.id;
  group.userData.roomTitle = data.title;
  const lights: T.PointLight[] = [];

  const roomColors: Record<HouseRoomId, {wall: string; wallDetail: string; floor: string; floorDetail: string; trim: number}> = {
    arrival: {wall: '#43544f', wallDetail: '#d8cdb8', floor: '#8a735d', floorDetail: '#3c3028', trim: 0xc7b083},
    ordinary: {wall: '#5c493e', wallDetail: '#e4d7c0', floor: '#72543e', floorDetail: '#33251d', trim: 0xc9a46e},
    rain: {wall: '#334852', wallDetail: '#93aab3', floor: '#56676c', floorDetail: '#b6c1bd', trim: 0xb4a67e},
    'two-cities': {wall: '#354748', wallDetail: '#d6cbb5', floor: '#6f543e', floorDetail: '#2d211a', trim: 0xd1b47a},
    nature: {wall: '#46584b', wallDetail: '#d7cab2', floor: '#7a634c', floorDetail: '#3b2f27', trim: 0xc5ad7b},
    'leave-light': {wall: '#51443f', wallDetail: '#d9cbb9', floor: '#6c5242', floorDetail: '#33251e', trim: 0xd3b27a},
  };
  const palette = roomColors[data.id];
  const floorKind: SurfaceKind = data.id === 'rain' ? 'tile' : 'wood';
  const floor = texturedMaterial(floorKind, palette.floor, palette.floorDetail, data.id === 'rain' ? 0.48 : 0.7);
  floor.emissive.setHex(C.amberSoft);
  floor.emissiveIntensity = 0;
  meshBox(group, [3.72, 0.16, 3.2], [0, 0, 0], floor, 0.025);

  const wallMaterial = texturedMaterial('plaster', palette.wall, palette.wallDetail, 0.93);
  meshBox(group, [3.72, 2.96, 0.16], [0, 1.48, -1.53], wallMaterial, 0.02);
  meshBox(group, [0.14, 2.96, 3.2], [-1.79, 1.48, 0], texturedMaterial('plaster', palette.wall, palette.wallDetail, 0.93), 0.02);
  meshBox(group, [0.14, 2.96, 3.2], [1.79, 1.48, 0], texturedMaterial('plaster', palette.wall, palette.wallDetail, 0.93), 0.02);
  box(group, [3.46, 0.075, 0.08], [0, 0.19, -1.39], palette.trim, 0.018);
  box(group, [3.46, 0.055, 0.08], [0, 2.78, -1.39], palette.trim, 0.018);
  box(group, [0.07, 2.56, 0.07], [-1.66, 1.47, -1.39], palette.trim, 0.015);
  box(group, [0.07, 2.56, 0.07], [1.66, 1.47, -1.39], palette.trim, 0.015);

  if (data.id === 'arrival') {
    makeWindow(group, 0.62, 1.65, 'shanghai');
    makeArchTrim(group, -0.72, palette.trim);
  }
  if (data.id === 'rain') makeWindow(group, 0, 2.75, 'beijing');
  if (data.id === 'two-cities') {
    makeWindow(group, -0.93, 1.25, 'beijing');
    makeWindow(group, 0.93, 1.25, 'singapore');
  }
  if (data.id === 'nature') {
    makeWindow(group, 0.75, 1.55, 'beijing');
    makeArchTrim(group, -0.7, palette.trim);
  }
  if (data.id === 'leave-light') makeArchTrim(group, 0, palette.trim);

  makePendant(group, data.id === 'rain' ? 1.15 : -1.22, 0.15, lights);

  const glow = new T.MeshBasicMaterial({color: C.amber, transparent: true, opacity: 0, depthWrite: false, blending: T.AdditiveBlending});
  const glowMesh = new T.Mesh(new T.PlaneGeometry(3.35, 2.62), glow);
  glowMesh.position.set(0, 1.42, -1.43);
  group.add(glowMesh);

  if (data.id === 'arrival') furnishArrival(group);
  if (data.id === 'ordinary') furnishOrdinary(group);
  if (data.id === 'rain') furnishRain(group);
  if (data.id === 'two-cities') furnishTwoCities(group, lights);
  if (data.id === 'nature') furnishNature(group);
  if (data.id === 'leave-light') furnishLeaveLight(group, lights);
  wallLabel(group, data.number, data.title);

  const hitMaterial = new T.MeshBasicMaterial({transparent: true, opacity: 0, depthWrite: false});
  const hit = new T.Mesh(new T.BoxGeometry(3.45, 2.72, 2.85), hitMaterial);
  hit.position.set(0, 1.38, 0);
  hit.userData.roomId = data.id;
  hit.userData.roomTitle = data.title;
  group.add(hit);

  return {id: data.id, group, floor, glow, lights};
}

function buildSharedLightLine(scene: T.Scene) {
  const routes: Array<{id: HouseRoomId; points: T.Vector3[]}> = [
    {id: 'arrival', points: [new T.Vector3(-5.72, 3.3, 1.64), new T.Vector3(-2.16, 3.3, 1.64)]},
    {id: 'ordinary', points: [new T.Vector3(-1.84, 3.3, 1.64), new T.Vector3(1.84, 3.3, 1.64)]},
    {id: 'rain', points: [new T.Vector3(2.16, 3.3, 1.64), new T.Vector3(5.72, 3.3, 1.64), new T.Vector3(5.72, 0.19, 1.64)]},
    {id: 'two-cities', points: [new T.Vector3(5.72, 0.19, 1.64), new T.Vector3(2.16, 0.19, 1.64)]},
    {id: 'nature', points: [new T.Vector3(1.84, 0.19, 1.64), new T.Vector3(-1.84, 0.19, 1.64)]},
    {id: 'leave-light', points: [new T.Vector3(-2.16, 0.19, 1.64), new T.Vector3(-5.72, 0.19, 1.64)]},
  ];
  const segments: Array<{id: HouseRoomId; material: T.MeshStandardMaterial}> = [];
  routes.forEach((route) => {
    const material = new T.MeshStandardMaterial({color: 0x435154, emissive: 0x000000, roughness: 0.4, transparent: true, opacity: 0.38});
    const curve = new T.CatmullRomCurve3(route.points);
    const mesh = new T.Mesh(new T.TubeGeometry(curve, 36, 0.035, 8, false), material);
    scene.add(mesh);
    segments.push({id: route.id, material});
  });
  return segments;
}

function buildHouseFrame(scene: T.Scene) {
  const frame = new T.Group();
  const beamMaterial = texturedMaterial('wood', '#241d18', '#70523a', 0.72);
  const addBeam = (size: [number, number, number], position: [number, number, number]) => {
    const mesh = new T.Mesh(new RoundedBoxGeometry(size[0], size[1], size[2], 3, 0.025), beamMaterial);
    mesh.position.set(...position);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    frame.add(mesh);
  };
  addBeam([12.3, 0.28, 3.46], [0, -0.2, 0]);
  addBeam([12.24, 0.2, 3.4], [0, 3.01, 0]);
  addBeam([12.24, 0.24, 3.4], [0, 6.18, 0]);
  [-6.05, -2.03, 2.03, 6.05].forEach((x) => addBeam([0.18, 6.5, 3.42], [x, 3.01, 0]));
  const roofMaterial = texturedMaterial('wood', '#1e1a18', '#5f4635', 0.88);
  const roofLeft = new T.Mesh(new RoundedBoxGeometry(6.75, 0.22, 3.52, 3, 0.035), roofMaterial);
  roofLeft.position.set(-3.0, 7.03, 0);
  roofLeft.rotation.z = 0.25;
  roofLeft.castShadow = true;
  frame.add(roofLeft);
  const roofRight = roofLeft.clone();
  roofRight.position.x = 3.0;
  roofRight.rotation.z = -0.25;
  frame.add(roofRight);
  addBeam([0.2, 1.05, 0.65], [-4.75, 7.14, -0.55]);
  addBeam([0.46, 0.12, 0.78], [-4.75, 7.68, -0.55]);
  const plaqueMaterial = new T.MeshStandardMaterial({color: 0xb79763, roughness: 0.42, metalness: 0.54});
  meshBox(frame, [2.4, 0.16, 0.5], [0, -0.43, 1.42], plaqueMaterial, 0.06);
  scene.add(frame);
}

function buildBackdrop(scene: T.Scene) {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#0c151a');
    gradient.addColorStop(0.52, '#203036');
    gradient.addColorStop(1, '#11191b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 512);
  }
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  const sky = new T.Mesh(new T.PlaneGeometry(25, 13), new T.MeshBasicMaterial({map: texture, fog: false}));
  sky.position.set(0, 5.0, -5.2);
  scene.add(sky);

  const skyline = new T.Group();
  skyline.position.set(-10.5, -0.12, -4.55);
  for (let i = 0; i < 34; i += 1) {
    const width = 0.38 + (i % 4) * 0.12;
    const height = 0.8 + ((i * 11) % 13) * 0.18;
    const buildingMaterial = new T.MeshStandardMaterial({color: i % 3 === 0 ? 0x1f2e31 : 0x192629, roughness: 0.96});
    const building = new T.Mesh(new T.BoxGeometry(width, height, 0.34), buildingMaterial);
    building.position.set(i * 0.64, height / 2, 0);
    skyline.add(building);
    for (let w = 0; w < Math.min(3, Math.floor(height / 0.42)); w += 1) {
      if ((i + w) % 3 !== 0) continue;
      const light = new T.Mesh(new T.PlaneGeometry(0.045, 0.07), new T.MeshBasicMaterial({color: 0xd8a65d, transparent: true, opacity: 0.5}));
      light.position.set(building.position.x, 0.34 + w * 0.38, 0.18);
      skyline.add(light);
    }
  }
  scene.add(skyline);

  const ground = new T.Mesh(new T.PlaneGeometry(30, 18), texturedMaterial('plaster', '#11191a', '#455154', 0.94));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.38, 2);
  ground.receiveShadow = true;
  scene.add(ground);
  const stepMaterial = texturedMaterial('plaster', '#2d3433', '#756858', 0.86);
  meshBox(scene, [13.2, 0.22, 3.95], [0, -0.33, 0.18], stepMaterial, 0.06);
  meshBox(scene, [8.2, 0.18, 0.62], [0, -0.47, 2.05], stepMaterial, 0.05);
  meshBox(scene, [5.2, 0.15, 0.52], [0, -0.59, 2.55], stepMaterial, 0.05);
  makePlant(scene, [-6.65, -0.32, 1.18], 1.35);
  makePlant(scene, [6.65, -0.32, 1.12], 1.2);
}

function addDust(scene: T.Scene) {
  const count = 150;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = Math.random() * 9 - 1;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
  const material = new T.PointsMaterial({color: C.cream, size: 0.025, transparent: true, opacity: 0.26, depthWrite: false});
  const points = new T.Points(geometry, material);
  scene.add(points);
  return points;
}

export function mountStoryHouse(host: HTMLDivElement, callbacks: MountCallbacks): StoryHouseController {
  const scene = new T.Scene();
  scene.fog = new T.FogExp2(C.ink, 0.018);
  const camera = new T.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(10.6, 7.55, 17.4);

  const renderer = new T.WebGLRenderer({antialias: true, alpha: true, powerPreference: 'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  host.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 3.0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.enablePan = false;
  controls.minDistance = 6.5;
  controls.maxDistance = 25;
  controls.minPolarAngle = 0.72;
  controls.maxPolarAngle = 1.34;
  controls.minAzimuthAngle = -0.62;
  controls.maxAzimuthAngle = 0.62;

  const desiredCamera = camera.position.clone();
  const desiredTarget = controls.target.clone();
  let cameraTweening = false;
  controls.addEventListener('start', () => { cameraTweening = false; });

  scene.add(new T.HemisphereLight(0xc9d5d1, 0x121718, 1.25));
  const key = new T.DirectionalLight(0xffe3bd, 1.9);
  key.position.set(-6, 10, 9);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -9;
  key.shadow.camera.right = 9;
  key.shadow.camera.top = 10;
  key.shadow.camera.bottom = -3;
  scene.add(key);
  const rim = new T.DirectionalLight(0x7395a2, 1.35);
  rim.position.set(8, 5, -8);
  scene.add(rim);

  buildBackdrop(scene);
  buildHouseFrame(scene);
  const roomVisuals = houseRooms.map((_, index) => buildRoom(index));
  roomVisuals.forEach((room) => scene.add(room.group));
  const lineSegments = buildSharedLightLine(scene);
  const dust = addDust(scene);
  const interactives = roomVisuals.map((room) => room.group.children[room.group.children.length - 1]);

  const raycaster = new T.Raycaster();
  const pointer = new T.Vector2();
  let selected: HouseRoomId | null = null;
  let visited: HouseRoomId[] = [];
  let downPosition: {x: number; y: number} | null = null;
  let disposed = false;
  let animationFrame = 0;

  const setDesiredView = () => {
    if (!selected) {
      desiredCamera.set(10.6, 7.55, 17.4);
      desiredTarget.set(0, 3.0, 0);
      controls.maxAzimuthAngle = 0.62;
      controls.minAzimuthAngle = -0.62;
    } else {
      const room = roomPositions[selected];
      const narrow = host.clientWidth <= 900;
      desiredCamera.set(room.x + (narrow ? 2.15 : 2.6), room.y + (narrow ? 2.2 : 1.95), narrow ? 8.4 : 8.0);
      desiredTarget.set(room.x + (narrow ? 0.05 : 0.82), room.y + (narrow ? 1.1 : 1.28), -0.12);
      controls.maxAzimuthAngle = Math.PI;
      controls.minAzimuthAngle = -Math.PI;
    }
    cameraTweening = true;
  };

  const syncMaterials = () => {
    roomVisuals.forEach((room) => {
      const isSelected = selected === room.id;
      const isVisited = visited.includes(room.id);
      room.floor.emissiveIntensity = isSelected ? 0.3 : isVisited ? 0.12 : 0;
      room.glow.opacity = isSelected ? 0.12 : isVisited ? 0.035 : 0;
      room.lights.forEach((light) => {
        light.intensity = isSelected ? 2.0 : isVisited ? 1.05 : 0.28;
      });
      room.group.scale.setScalar(isSelected ? 1.015 : 1);
    });
    lineSegments.forEach((segment) => {
      const lit = visited.includes(segment.id);
      const active = selected === segment.id;
      segment.material.color.setHex(active ? C.cream : lit ? C.amber : 0x435154);
      segment.material.emissive.setHex(lit ? C.amberSoft : 0x000000);
      segment.material.emissiveIntensity = active ? 1.8 : lit ? 0.8 : 0;
      segment.material.opacity = active ? 1 : lit ? 0.82 : 0.32;
    });
  };

  const findRoom = (clientX: number, clientY: number) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(interactives, false)[0];
    if (!hit) return null;
    return {
      id: hit.object.userData.roomId as HouseRoomId,
      title: hit.object.userData.roomTitle as string,
    };
  };

  const onPointerMove = (event: PointerEvent) => {
    const room = findRoom(event.clientX, event.clientY);
    renderer.domElement.style.cursor = room ? 'pointer' : 'grab';
    callbacks.onHover(room ? room.title : '');
  };
  const onPointerLeave = () => callbacks.onHover('');
  const onPointerDown = (event: PointerEvent) => {
    downPosition = {x: event.clientX, y: event.clientY};
  };
  const onPointerUp = (event: PointerEvent) => {
    if (!downPosition) return;
    const distance = Math.hypot(event.clientX - downPosition.x, event.clientY - downPosition.y);
    downPosition = null;
    if (distance > 6) return;
    const room = findRoom(event.clientX, event.clientY);
    if (room) callbacks.onSelect(room.id);
  };

  renderer.domElement.addEventListener('pointermove', onPointerMove);
  renderer.domElement.addEventListener('pointerleave', onPointerLeave);
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointerup', onPointerUp);

  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (selected) setDesiredView();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const timer = new T.Timer();
  timer.connect(document);
  const render = (timestamp?: number) => {
    if (disposed) return;
    timer.update(timestamp);
    const elapsed = timer.getElapsed();
    dust.rotation.y = elapsed * 0.012;
    roomVisuals.forEach((room, index) => {
      room.lights.forEach((light) => {
        const base = selected === room.id ? 2.0 : visited.includes(room.id) ? 1.05 : 0.28;
        light.intensity = base * (1 + Math.sin(elapsed * 1.3 + index) * 0.008);
      });
    });
    if (cameraTweening) {
      camera.position.lerp(desiredCamera, 0.075);
      controls.target.lerp(desiredTarget, 0.085);
      if (camera.position.distanceTo(desiredCamera) < 0.025 && controls.target.distanceTo(desiredTarget) < 0.02) cameraTweening = false;
    }
    controls.update();
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(render);
  };
  render();
  requestAnimationFrame(callbacks.onReady);

  return {
    sync(state) {
      selected = state.selected;
      visited = state.visited;
      syncMaterials();
      setDesiredView();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      timer.dispose();
      resizeObserver.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      scene.traverse((object) => {
        if (object instanceof T.Mesh || object instanceof T.Points) {
          object.geometry?.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material instanceof T.MeshBasicMaterial && material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
