# Siltok 执行包｜第二幕《走进亮着的房间》

## 全局上传顺序

1. 男主身份参考：`public/act2/characters/male-protagonist-v1.png`
2. 女主身份参考：`public/act2/characters/female-protagonist-v1.png`
3. 镜头 02 构图参考：`public/act2/keyframes/shot-02-airport-meeting.png`
4. 镜头 06 构图参考：`public/act2/keyframes/shot-06-beijing-rain.png`
5. 镜头 10 构图参考：`public/act2/keyframes/shot-10-nature-home.png`
6. 镜头 12 构图参考：`public/act2/keyframes/shot-12-memory-house-final.png`

角色图只负责身份锁定；场景图只负责构图、灯光和空间。每个镜头独立生成 5 秒，竖屏 9:16、24fps，再按编号剪辑。不要要求单次模型生成完整一分钟。

## 全局角色锁定前缀

将下段放在每条提示词最前面：

```text
Premium stylized-realistic 3D animated romantic drama, vertical 9:16, 24 fps, duration 5 seconds. Use the supplied male and female character sheets ONLY as identity references. Preserve exact adult facial structure, eye spacing, hairstyle, black rectangular glasses on the man, body proportions, signature wardrobe colors, and age in every frame. Natural restrained acting, realistic hands, tactile cloth, wood, paper and glass. No dialogue and no lip-sync; quiet natural location sound only, no music. No text, subtitles, logo or watermark. No chibi proportions, no extra fingers, no duplicate people, no face morphing, no sudden wardrobe change, no camera teleport, no split screen.
```

## SH01｜门后是机场｜5 秒

参考：第一幕现有六房记忆屋。

```text
Blue-hour exterior of the refined six-room architectural cutaway memory house from Act I. All rooms are dark except one newly glowing amber lamp. A single white tulip in the foreground moves slightly in the night breeze. The camera makes one slow continuous push toward the first open doorway; as it crosses the threshold, the doorway brightness naturally becomes airport arrival-hall light. No people visible. Cinematic volumetric light, deep indigo exterior, warm plaster and walnut interior, one clean forward camera move.
```

剪辑点：门框充满画面时切 SH02。声音：夜风 → 很轻的机场广播。

## SH02｜白郁金香｜5 秒

参考：`shot-02-airport-meeting.png` + 两张角色母版。

```text
Shanghai airport arrivals at sunset. Wide-to-medium composition. The male protagonist stands frame left holding one modest bouquet of white tulips, nervously rotating the stems once and wiping his free hand on his trouser seam. The female protagonist enters frame right pulling one small suitcase, notices him and slows down. They meet in the center but do not hug; their eyes meet for one charged quiet beat. Slow controlled dolly-in, warm sunset reflected on airport glass, realistic travelers only as soft distant silhouettes, keep the couple unobstructed.
```

声音：滚轮、远处广播。物件：白郁金香、行李箱。

## SH03｜她先牵住他｜5 秒

```text
Inside a crowded but elegant Shanghai metro carriage at night. Medium two-shot from aisle height. A seat opens; the man hesitates and looks for space. The woman gently catches his hand and pulls him into the two adjacent seats in one continuous natural action. Their hands stay together for half a second before releasing. Passing tunnel lights stripe their faces. Locked identity, consistent airport wardrobe, subtle handheld train sway, no exaggerated romance, no kissing.
```

声音：地铁行驶与到站提示音。匹配剪辑：花束缎带 → 牵住的手。

## SH04｜一副耳机｜5 秒

```text
Same metro ride and same wardrobe. Close medium two-shot reflected faintly in the dark train window. The woman places one earbud in her ear and offers the other earbud across the small space. The man accepts it; they sit shoulder to shoulder and look forward, not at camera. The cable forms a gentle curve connecting them while tunnel lights glide across their faces. Slow lateral camera drift, restrained smiles, continuous realistic hand motion.
```

声音：地铁轰鸣里露出一小段模糊旋律，后期再铺正式音乐。

## SH05｜恋爱长成日常｜5 秒

```text
Warm Shanghai rental apartment at night. A compact hotpot boils on a low wooden table. The couple sit on the floor in casual versions of their signature outfits. The man bites a piece of food that is too hot and tries to hide it; the woman silently slides a water glass toward him. Immediately after, both reach for the same game controller and pause with amused surprise. One smooth three-quarter camera arc, rich steam, believable food and lived-in props, playful but not slapstick.
```

声音：锅沸、水杯滑过木桌、游戏机提示音。

## SH06｜雨夜不是探望，是回家｜5 秒

参考：`shot-06-beijing-rain.png` + 两张角色母版。

```text
Cold Beijing rain outside a tiny warm apartment after the man's surgery. He wears the olive quilted jacket and keeps his black rectangular glasses; she wears the camel-beige puffer and ivory turtleneck. Hotpot steam rises between them. He lifts a bowl with one slightly unsteady hand; both instinctively reach to steady it, their hands overlapping around the bowl. They exchange one tired relieved look. Slow push-in, amber practical lamp against blue rain window, mature companionship, no melodramatic embrace.
```

声音：雨、汤沸、陶瓷碗轻碰。

## SH07｜行李箱在中间｜5 秒

```text
Beijing South railway station in cold morning light. One suitcase stands exactly between the couple. The gate indicator changes and the man starts to leave, rolls the suitcase two steps, stops, turns back and gives the woman one brief tight hug. The camera stays still at respectful distance while commuters pass as soft background motion. Winter wardrobe remains identical to SH06. End with the suitcase wheels beginning to move away, restrained emotion, no tears toward camera.
```

声音：检票提示音、滚轮。匹配剪辑：滚轮 → 下一镜头椅轮。

## SH08｜新加坡这一盏灯｜5 秒

```text
Singapore student room late at night. The male protagonist sits alone at a compact desk under one warm lamp, charcoal overshirt back on, glasses consistent. An unfinished paper is open on the laptop; the phone is propped beside a mug on an active video call, but the caller's screen content stays soft and unreadable. He glances from the paper to the phone, relaxes, and continues typing. Slow over-shoulder push, humid city bokeh outside, calm routine rather than loneliness.
```

声音：键盘、空调、极轻的远处城市声。

## SH09｜北京这一盏灯｜5 秒

```text
Beijing home at the same hour. The female protagonist works at her desk under a matching warm lamp; long black hair and ivory knit wardrobe stay consistent. The same style of phone is propped beside a water glass on the ongoing video call. Nature's tail passes under the desk and gently moves the charging cable. She looks at the phone for one quiet second, then places a small metro card beside it and returns to work. One slow side dolly, cool winter window outside, warm human interior.
```

声音：翻页、猫项圈轻响。转场：充电线延伸到下一镜头。

## SH10｜Nature 是“我们”｜5 秒

参考：`shot-10-nature-home.png` + 两张角色母版。

```text
Sunlit Beijing living room, the fluffy white-and-gray ragdoll cat Nature centered between the couple. The man kneels frame left with a feather toy; the woman kneels frame right holding a food bowl. Nature follows the toy, then turns to the bowl and sits proudly. The couple's eyes meet over the cat and they share a small unposed smile. Representative objects remain visible but secondary: two mugs, one game controller, one metro card, one white tulip. Gentle morning backlight, slow low-angle semicircle, highly detailed fur, exactly one cat.
```

声音：猫呼噜、碗碰地毯、清晨室内声。

## SH11｜答案可以明天再说｜5 秒

```text
Late-night video call after a disagreement. The male protagonist sits at his Singapore desk with a densely written plan sheet; he deliberately puts the pen down and flips the paper to its blank side. Match cut to the female protagonist in Beijing beside an open but unpacked suitcase; she stops packing and places the sweater back on a chair. Finish on the phone and one warm lamp still on, with the charging cable containing one small loose knot. Keep faces consistent and emotions restrained: tired, hurt, still present. No shouting, no crying, no readable phone text.
```

实现建议：Siltok 若不支持镜内匹配切，分别生成 SH11A / SH11B 各 5 秒，后期各取 2.5 秒。

声音：笔放下、布料、Nature 远处叫一声。

## SH12｜走进亮着的家｜5 秒

参考：`shot-12-memory-house-final.png` + 两张角色母版。

```text
Magical-realism blue-hour finale outside the refined architectural cutaway memory house. The same couple, adult and realistically proportioned, walk side by side through the front threshold while guiding one shared suitcase; the man carries one small warm lamp and the woman carries one white tulip. Nature waits just inside. As they cross the threshold, the six distinct rooms illuminate in chronological order from lower left to upper right, each revealing only its representative object rather than duplicate versions of the couple: tulips, earbuds, hotpot, suitcase, two desk lamps, cat bowl. One slow crane backward reveals the complete house against a deep indigo city. Detailed wood, plaster, glass and paper, emotional architectural miniature, no cloned people.
```

声音：门轴、滚轮、六次柔和电灯声。最后保留 12 帧静止供字幕：`家还没有地址。今天，有人在等你到家。`

## 生成参数与选片规则

- 每镜头：5 秒，9:16，24fps，建议最高质量档。
- 固定随机种子（若平台支持）；同一角色图在每个含人物镜头都重新上传。
- 每镜头先跑 2 个版本，只选脸型、手部和空间关系都稳定的版本；不要单纯选“更漂亮”的版本。
- SH02、SH06、SH10、SH12 必须使用对应场景参考图；其他镜头只用角色母版，避免构图污染。
- 一旦某镜头的脸漂移，不要在原提示词堆更多形容词；回到角色母版，缩短动作并重跑。
- 剪辑节奏按 5 秒整齐拼接，旁白与音乐后置；视频模型只负责稳定的可见动作。

