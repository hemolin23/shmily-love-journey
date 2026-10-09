import {useCallback, useEffect, useRef, useState} from 'react';
import {ArrowRight, Mouse, X} from 'lucide-react';
import {actTwoShots} from '../data/act-two';
import {ActThreePromise} from './ActThreePromise';

type Props = {onClose: () => void};

export function ActTwoStory({onClose}: Props) {
  const [index, setIndex] = useState(0);
  const [promiseOpen, setPromiseOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const scrollFrame = useRef(0);
  const shot = actTwoShots[index];

  const findCenteredShot = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cardRefs.current.forEach((card, cardIndex) => {
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      const nextDistance = Math.abs(bounds.left + bounds.width / 2 - center);
      if (nextDistance < distance) {
        closest = cardIndex;
        distance = nextDistance;
      }
    });
    setIndex(closest);
  }, []);

  const onScroll = () => {
    cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = requestAnimationFrame(findCenteredShot);
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    railRef.current?.scrollBy({left: event.deltaY * 1.15, behavior: 'auto'});
  };

  useEffect(() => {
    videoRefs.current.forEach((video, videoIndex) => {
      if (!video) return;
      if (videoIndex === index && actTwoShots[videoIndex].available) {
        video.currentTime = 0;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  useEffect(() => () => cancelAnimationFrame(scrollFrame.current), []);

  return (
    <section className="act-two" aria-label="第二幕故事放映厅">
      <div className="act-two-light act-two-light-left" aria-hidden="true" />
      <div className="act-two-light act-two-light-right" aria-hidden="true" />
      <header className="act-two-header">
        <div><small>ACT II / THE ROOMS REMEMBER US</small><strong>走进亮着的房间</strong></div>
        <button onClick={onClose} aria-label="回到第一幕"><X size={20} /></button>
      </header>

      <div className="act-two-intro" aria-hidden="true">
        <span>{shot.number} / 12</span>
        <p><Mouse size={14} /> 滚轮向前，故事就向前</p>
      </div>

      <div ref={railRef} className="act-two-film" onScroll={onScroll} onWheel={onWheel} aria-label="第二幕影片时间轴">
        {actTwoShots.map((item, shotIndex) => (
          <article
            key={item.id}
            ref={(node) => {cardRefs.current[shotIndex] = node;}}
            className={`act-two-frame ${shotIndex === index ? 'is-active' : ''} ${item.available ? 'has-film' : 'is-still'}`}
            aria-current={shotIndex === index ? 'step' : undefined}
          >
            <div className="act-two-image">
              <img src={item.poster} alt="" aria-hidden="true" />
              {item.available && (
                <video
                  ref={(node) => {videoRefs.current[shotIndex] = node;}}
                  src={item.video}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  preload={Math.abs(shotIndex - index) <= 1 ? 'auto' : 'metadata'}
                  aria-label={`${item.title}影片`}
                />
              )}
              {!item.available && <div className="act-two-still-mark"><i /><span>这一格留给没有拍完的以后</span></div>}
              <span className="act-two-timecode">{item.number}:00:05</span>
            </div>
            <div className="act-two-caption">
              <p>{item.chapter} · {item.place}</p>
              <h1><span>{item.number}</span>{item.title}</h1>
              <blockquote>“{item.line}”</blockquote>
            </div>
          </article>
        ))}
      </div>

      <div className="act-two-track" aria-hidden="true">
        {actTwoShots.map((item, shotIndex) => <i key={item.id} className={`${item.available ? 'has-film' : ''} ${shotIndex === index ? 'is-active' : ''}`} />)}
      </div>

      {index === actTwoShots.length - 1 && <button className="act-two-promise" onClick={() => setPromiseOpen(true)}>走进聊天记忆星空 <ArrowRight size={15}/></button>}
      {promiseOpen && <ActThreePromise onBack={() => setPromiseOpen(false)} />}
    </section>
  );
}
