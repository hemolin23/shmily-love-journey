import {useEffect, useMemo, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, DoorOpen, House, RotateCcw, X} from 'lucide-react';
import {houseEnding, houseRooms, roomById, type HouseRoomId} from '../data/house-story';
import {ActTwoStory} from './ActTwoStory';
import {StoryHouse3D} from './StoryHouse3D';

const STORAGE_KEY = 'shmily-story-house-v2';

function loadVisited(): HouseRoomId[] {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(value) ? value.filter((id) => houseRooms.some((room) => room.id === id)) : [];
  } catch {
    return [];
  }
}

export function StoryHouse() {
  const [entered, setEntered] = useState(false);
  const [selected, setSelected] = useState<HouseRoomId | null>(null);
  const [visited, setVisited] = useState<HouseRoomId[]>(loadVisited);
  const [endingOpen, setEndingOpen] = useState(false);
  const [actTwoOpen, setActTwoOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const current = selected ? roomById(selected) : null;
  const currentIndex = current ? houseRooms.findIndex((room) => room.id === current.id) : -1;
  const complete = visited.length === houseRooms.length;

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [selected]);

  const progressLabel = useMemo(
    () => String(visited.length).padStart(2, '0') + ' / ' + String(houseRooms.length).padStart(2, '0'),
    [visited.length],
  );

  const chooseRoom = (id: HouseRoomId) => {
    setEntered(true);
    setSelected(id);
    setVisited((previous) => {
      if (previous.includes(id)) return previous;
      const next = [...previous, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const move = (direction: -1 | 1) => {
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + direction + houseRooms.length) % houseRooms.length;
    chooseRoom(houseRooms[nextIndex].id);
  };

  const restart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setVisited([]);
    setSelected(null);
    setEndingOpen(false);
    setEntered(false);
  };

  return (
    <main className="story-house-shell">
      <div className="story-house-grain" aria-hidden="true" />
      <header className="story-house-header">
        <button className="story-house-brand" onClick={() => setSelected(null)} aria-label="回到整栋房子">
          <House size={17} strokeWidth={1.5} />
          <span>
            <strong>还没有地址的家</strong>
            <small>ACT I / A HOME WITHOUT AN ADDRESS</small>
          </span>
        </button>
        <div className="story-house-progress" aria-label={'已看过 ' + visited.length + ' 个房间'}>
          <span>ROOMS LIT</span>
          <strong>{progressLabel}</strong>
        </div>
      </header>

      <div className="story-house-act-switch" aria-label="选择幕">
        <button className="is-active" onClick={() => setActTwoOpen(false)}>I · 六个房间</button>
        <button onClick={() => setActTwoOpen(true)}>II · 走进房间</button>
      </div>

      <StoryHouse3D selected={selected} visited={visited} onSelect={chooseRoom} />

      <nav className="story-house-timeline" aria-label="故事房间">
        {houseRooms.map((room) => (
          <button
            key={room.id}
            className={(selected === room.id ? 'is-selected ' : '') + (visited.includes(room.id) ? 'is-visited' : '')}
            onClick={() => chooseRoom(room.id)}
            aria-label={room.number + ' ' + room.title}
          >
            <span className="story-house-node" />
            <small>{room.number}</small>
            <strong>{room.title}</strong>
          </button>
        ))}
      </nav>

      {!entered && (
        <section className="story-house-intro">
          <p className="story-house-kicker">ACT I · ONE YEAR · SIX ROOMS</p>
          <h1>一段恋爱，<br />不是十二张日期卡。</h1>
          <p>它是一所慢慢亮起来的家。<br />每一件物品，都记得两个人如何靠近。</p>
          <button className="story-house-primary" onClick={() => chooseRoom(houseRooms[0].id)}>
            <DoorOpen size={18} /> 从第一次抵达开始
          </button>
        </section>
      )}

      {current && (
        <aside ref={panelRef} className="story-house-panel" aria-live="polite">
          <button className="story-house-close" onClick={() => setSelected(null)} aria-label="关闭故事面板"><X size={19} /></button>
          <p className="story-house-panel-number">ROOM {current.number} / 06</p>
          <p className="story-house-panel-english">{current.english}</p>
          <h2>{current.title}</h2>
          <div className="story-house-meta"><span>{current.date}</span><span>{current.cities}</span></div>
          <p className="story-house-change">{current.change}</p>
          <p className="story-house-summary">{current.summary}</p>
          <blockquote>“{current.quote}”</blockquote>
          <div className="story-house-object-list">
            {current.objects.map((object) => (
              <div key={object.name}><strong>{object.name}</strong><span>{object.meaning}</span></div>
            ))}
          </div>
          <div className="story-house-panel-nav">
            <button onClick={() => move(-1)} aria-label="上一个房间"><ArrowLeft size={18} /></button>
            <span>{current.moments.join(' · ')}</span>
            <button onClick={() => move(1)} aria-label="下一个房间"><ArrowRight size={18} /></button>
          </div>
        </aside>
      )}

      {complete && !endingOpen && (
        <button className="story-house-ending-trigger" onClick={() => setEndingOpen(true)}>
          看见整所亮起的家 <ArrowRight size={17} />
        </button>
      )}

      {endingOpen && (
        <section className="story-house-ending">
          <div className="story-house-ending-lamps" aria-hidden="true"><i /><i /></div>
          <button className="story-house-close" onClick={() => setEndingOpen(false)} aria-label="关闭结尾"><X size={20} /></button>
          <p>{houseEnding.eyebrow}</p>
          <h2>{houseEnding.title}</h2>
          <div className="story-house-ending-line" />
          <h3>{houseEnding.finalLine}</h3>
          <span>{houseEnding.body}</span>
          <button className="story-house-restart" onClick={restart}><RotateCcw size={16} /> 再走一遍</button>
          <button className="story-house-restart" onClick={() => setActTwoOpen(true)}><ArrowRight size={16} /> 进入第二幕</button>
        </section>
      )}

      {actTwoOpen && <ActTwoStory onClose={() => setActTwoOpen(false)} />}
    </main>
  );
}
