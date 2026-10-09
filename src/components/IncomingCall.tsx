'use client';
import {useEffect,useRef,useState,type KeyboardEvent,type PointerEvent} from 'react';
import {Phone,ChevronRight,AudioLines} from 'lucide-react';
import {slideProgress} from '../lib/room-journey';
export type CallPhase='ringing'|'connected'|'transition'|'error';
export function IncomingCall({phase,seconds,muted,replaying=false,onAnswer,onContinue}:{replaying?:boolean;phase:CallPhase;seconds:number;muted:boolean;onAnswer:()=>void;onContinue:()=>void}){
 const screen=useRef<HTMLElement>(null);
 useEffect(()=>{screen.current?.focus({preventScroll:true});},[]);
 function trap(e:KeyboardEvent){if(e.key==='Escape'&&phase!=='transition'){onContinue();return;}if(e.key!=='Tab')return;const items=screen.current?.querySelectorAll<HTMLElement>('button,[role="slider"]');if(!items?.length){e.preventDefault();return;}const first=items[0],last=items[items.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===screen.current)){e.preventDefault();last.focus();}else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===screen.current)){e.preventDefault();first.focus();}}
 const [progress,setProgress]=useState(0);const track=useRef<HTMLDivElement>(null),drag=useRef<{start:number;travel:number}|null>(null),value=useRef(0);
 const move=(p:number)=>{value.current=p;setProgress(p);};
 function start(e:PointerEvent<HTMLDivElement>){if(phase!=='ringing')return;const width=track.current?.clientWidth??300;drag.current={start:e.clientX,travel:width-68};e.currentTarget.setPointerCapture(e.pointerId);}
 function release(){if(!drag.current)return;drag.current=null;if(value.current>=.86){move(1);onAnswer();}else move(0);}
 function key(e:KeyboardEvent){if(phase!=='ringing')return;if(['Enter',' '].includes(e.key)){e.preventDefault();move(1);onAnswer();}else if(e.key==='ArrowRight'||e.key==='End'){e.preventDefault();const p=e.key==='End'?1:Math.min(1,value.current+.2);move(p);if(p===1)onAnswer();}else if(e.key==='ArrowLeft'||e.key==='Home'){e.preventDefault();move(e.key==='Home'?0:Math.max(0,value.current-.2));}}
 const timer=`${Math.floor(seconds/60).toString().padStart(2,'0')}:${Math.floor(seconds%60).toString().padStart(2,'0')}`;
 return <section ref={screen} tabIndex={-1} onKeyDown={trap} role="dialog" aria-modal="true" className={`incoming-screen call-${phase}`} aria-label="语音通话">
  <div className="caller-portrait" aria-hidden="true">♡</div><h2>来自第一站的电话</h2>
  <p className="call-status" aria-live="polite">{phase==='ringing'?'上海 · 2025.04.29':phase==='error'?'暂时没有接通':phase==='transition'?'故事正在亮起…':`${timer} · 通话中${muted?' · 已静音':''}`}</p>
  {phase==='ringing'&&<div className="answer-track" ref={track} style={{'--answer-progress':progress} as React.CSSProperties}>
   <span className="slide-label">向右滑动接听<ChevronRight size={16}/><ChevronRight size={16}/></span>
   <div className="answer-slider" role="slider" tabIndex={0} aria-label="滑动接听电话" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress*100)} aria-valuetext={progress>.85?'接通':'向右滑动，或按回车接听'} onKeyDown={key} onPointerDown={start} onPointerMove={e=>{if(drag.current)move(slideProgress(drag.current.start,e.clientX,drag.current.travel));}} onPointerUp={release} onPointerCancel={()=>{drag.current=null;move(0);}}><Phone size={25}/></div>
  </div>}
  {phase==='connected'&&<p className="call-caption" role="status">{seconds<3?'喂，还记得我们第一次见面吗？':seconds<5?'十二段路，都放进房间里了。':'不用挂电话，我们从第一站开始吧。'}</p>}
  {phase==='connected'&&<div className="call-wave" aria-hidden="true">{Array.from({length:9},(_,i)=><i key={i} style={{animationDelay:`${i*-.19}s`}}/>)}</div>}
  {phase==='error'&&<div className="call-recovery"><button onClick={onAnswer}><Phone size={17}/>重新接通</button><button onClick={onContinue}>继续进入</button></div>}
  {phase==='connected'&&<button className="call-return" onClick={onContinue}>{replaying?'回到房间':'走进我们的故事'}</button>}
  {phase==='transition'&&<AudioLines className="call-continuing" size={27} aria-hidden="true"/>}
 </section>;
}
