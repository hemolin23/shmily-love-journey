'use client';
import {useState} from 'react';
import {MapPin,RotateCcw,X} from 'lucide-react';
import {Dialog,DialogContent,DialogDescription,DialogTitle} from '@/components/ui/dialog';
import {chapterByKind} from '../data/story';
import type {MemoryKind} from '../data/memories';
import {roomAudio} from '../lib/audio';

export function MemoryViewer({kind,onClose}:{kind:MemoryKind|null;onClose:()=>void;onMagic:()=>void}){
  const chapter=kind?chapterByKind(kind):null;
  const [flipped,setFlipped]=useState(false);
  function flip(){setFlipped(value=>!value);roomAudio.foley('paper');}
  return <Dialog open={!!chapter} onOpenChange={open=>{if(!open){setFlipped(false);onClose();}}}>
    <DialogContent className="memory-dialog story-dialog" showCloseButton={false}>
      {chapter&&<>
        <button className="close-object" onClick={onClose} aria-label="放回房间"><X size={21}/></button>
        <div className="story-chapter-mark"><span>{String(chapter.order).padStart(2,'0')}</span><i></i><em>12</em></div>
        <DialogTitle className="story-title">{chapter.title}</DialogTitle>
        <DialogDescription className="story-meta"><MapPin size={13}/>{chapter.city}<span>{chapter.date}</span></DialogDescription>
        <div className="story-layout">
          <button className={`story-card ${flipped?'is-flipped':''}`} onClick={flip} aria-label={flipped?'看章节卡片':'翻到背面'}>
            <span className="story-card-turner">
              <span className="story-card-front"><img src={chapter.asset} alt={`${chapter.city} ${chapter.title}`}/></span>
              <span className="story-card-back"><strong>{chapter.date}</strong><p>{chapter.backText}</p><small>shmily · our story</small></span>
            </span>
          </button>
          <article className="story-copy"><p className="story-subtitle">{chapter.subtitle}</p>{chapter.lines.map((line,index)=><p key={index}>{line}</p>)}<button className="story-flip" onClick={flip}><RotateCcw size={13}/>{flipped?'看卡片':'翻到背面'}</button></article>
        </div>
      </>}
    </DialogContent>
  </Dialog>;
}
