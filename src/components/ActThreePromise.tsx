import {useMemo, useState} from 'react';
import {ArrowLeft, ChevronLeft, ChevronRight, Sparkles} from 'lucide-react';
import {
  CHAT_DAY_TOTAL,
  CHAT_INDEXED_DAY_TOTAL,
  CHAT_MESSAGE_TOTAL,
  CHAT_PHASES,
  memoryStars,
  type MemoryStar,
} from '../data/chat-constellation';

type Props = {onBack: () => void};
type Phase = 'all' | (typeof CHAT_PHASES)[number];

function hash(value: string) {
  let result = 2166136261;
  for (const char of value) result = Math.imul(result ^ char.charCodeAt(0), 16777619);
  return result >>> 0;
}

function starStyle(star: MemoryStar, index: number, total: number) {
  const noise = hash(star.date);
  const left = 3 + (index / Math.max(1, total - 1)) * 94;
  const top = 8 + (noise % 7700) / 100;
  const size = star.featured ? 15 : Math.min(9, 2.4 + Math.sqrt(star.count) / 3.7);
  const delay = -((noise % 60) / 10);
  return {left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s`};
}

export function ActThreePromise({onBack}: Props) {
  const [phase, setPhase] = useState<Phase>('all');
  const [selectedId, setSelectedId] = useState('day-2025-08-01');
  const visible = useMemo(() => phase === 'all' ? memoryStars : memoryStars.filter((star) => star.phase === phase), [phase]);
  const selected = memoryStars.find((star) => star.id === selectedId) ?? visible[0] ?? memoryStars[0];
  const selectedIndex = visible.findIndex((star) => star.id === selected.id);

  const move = (direction: -1 | 1) => {
    const current = selectedIndex < 0 ? 0 : selectedIndex;
    setSelectedId(visible[(current + direction + visible.length) % visible.length].id);
  };

  const choosePhase = (next: Phase) => {
    setPhase(next);
    const first = next === 'all' ? memoryStars.find((star) => star.featured) : memoryStars.find((star) => star.phase === next);
    if (first) setSelectedId(first.id);
  };

  return (
    <section className="promise-room constellation-room" aria-label="第三幕聊天记忆星空">
      <header className="promise-header constellation-header">
        <button onClick={onBack}><ArrowLeft size={17} /> 回到第二幕</button>
        <div><small>ACT III / OUR CHAT CONSTELLATION</small><strong>聊天记忆星空</strong></div>
        <span className="constellation-range">2025.07.31 — 2026.10.09</span>
      </header>

      <div className="constellation-summary">
        <span><strong>{CHAT_MESSAGE_TOTAL.toLocaleString()}</strong>条聊天</span>
        <i />
        <span><strong>{CHAT_INDEXED_DAY_TOTAL}</strong>个有记录的日子</span>
        <i />
        <span><strong>{CHAT_DAY_TOTAL}</strong>颗可点亮的对话星</span>
      </div>

      <nav className="constellation-phases" aria-label="关系阶段">
        <button className={phase === 'all' ? 'active' : ''} onClick={() => choosePhase('all')}>全部星空</button>
        {CHAT_PHASES.map((item) => <button className={phase === item ? 'active' : ''} onClick={() => choosePhase(item)} key={item}>{item}</button>)}
      </nav>

      <main className="constellation-layout">
        <section className="star-field" aria-label={`${visible.length}颗记忆星`}>
          <div className="milky-way" aria-hidden="true" />
          {visible.map((star, index) => (
            <button
              className={`memory-star theme-${star.theme}${star.featured ? ' featured' : ''}${selected.id === star.id ? ' selected' : ''}`}
              style={starStyle(star, index, visible.length)}
              onClick={() => setSelectedId(star.id)}
              key={star.id}
              title={`${star.date} · ${star.title} · ${star.count}条`}
              aria-label={`打开 ${star.date} 的对话`}
            ><span /></button>
          ))}
          <div className="star-field-caption"><Sparkles size={14} /> 每颗星是一天；越亮，那天说的话越多。</div>
        </section>

        <article className="star-dialogue" key={selected.id}>
          <div className="star-dialogue-kicker"><span>{selected.phase}</span><time>{selected.date}</time></div>
          <h1>{selected.title}</h1>
          <p className="star-dialogue-count">这一天，你们留下了 <strong>{selected.count}</strong> 条记录。</p>
          <section className="chat-transcript" aria-label="微信原话节选">
            <div className="chat-transcript-label"><i /> 微信原话节选 <i /></div>
            {selected.lines.map((line, index) => (
              <div className={`chat-line ${line.side}`} key={`${line.time}-${index}`}>
                <div><strong>{line.speaker}</strong><time>{line.time}</time></div>
                <p>{line.text}</p>
              </div>
            ))}
          </section>
          {selected.featured && <div className="major-star-note"><Sparkles size={13} /> 这是六颗主星之一，也是信件故事里的高光时刻。</div>}
          <footer>
            <button onClick={() => move(-1)}><ChevronLeft size={17} />上一天</button>
            <span>{selectedIndex + 1} / {visible.length}</span>
            <button onClick={() => move(1)}>下一天<ChevronRight size={17} /></button>
          </footer>
        </article>
      </main>

      <p className="constellation-privacy">全年消息都参与了日期、亮度和阶段统计；展示时会过滤账号、电话、地址、链接与媒体元数据。14 个只有媒体或无可安全摘录文字的日子，已折叠进相邻星群。</p>
    </section>
  );
}
