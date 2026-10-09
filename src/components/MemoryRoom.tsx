'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Volume2, VolumeX, RotateCcw, NotebookPen, Phone } from 'lucide-react';
import { roomAudio } from '../lib/audio';
import { useRoomState } from '../hooks/useRoomState';
import { MemoryViewer } from './MemoryViewer';
import { memories, callFragments, type MemoryKind } from '../data/memories';
import { focusBoxes, type ObjectId, type FocusKind } from '../data/room';
import {IncomingCall,type CallPhase} from './IncomingCall';
import {AtmospherePicker} from './AtmospherePicker';
import {atmospheres, atmosphereSurfaces} from '../data/atmospheres';
import {RoomBackdrop} from './RoomBackdrop';
import {RELIGHT_DURATION} from '../lib/room-journey';
import { getBirthdayState } from '../data/timeline';
import { BirthdayEnding, type EndingPhase } from './BirthdayEnding';
import { BirthdayCamera } from './BirthdayCamera';
import { latestBirthdayPhoto } from '../lib/storage';
import { advancePhoto } from '../lib/scene-camera';
import { FocusControls } from './SpatialObjects';
import { Room3D } from './Room3D';
import {storyChapters} from '../data/story';

export function MemoryRoom() {
  const [hydrated,setHydrated]=useState(false),[callOpen,setCallOpen]=useState(false),[replaying,setReplaying]=useState(false);
  const [drawerOpen,setDrawerOpen]=useState(false),[charmPulse,setCharmPulse]=useState(0);
  const [entered,setEntered]=useState(false),[callPhase,setCallPhase]=useState<CallPhase>('ringing'),[callSeconds,setCallSeconds]=useState(0);
  const [memory,setMemory]=useState<MemoryKind|null>(null),[focus,setFocus]=useState<FocusKind|null>(null);
  const [viewReset,setViewReset]=useState(0),[dialRequest,setDialRequest]=useState(0),[elephantPet,setElephantPet]=useState(0);
  const [magic,setMagic]=useState(false),[whisper,setWhisper]=useState(''),[journalOpen,setJournalOpen]=useState(false);
  const [weatherOpen,setWeatherOpen]=useState(false);
  const headerRef=useRef<HTMLElement>(null);
  useEffect(()=>{
    if(!journalOpen&&!weatherOpen)return;
    const close=(event:PointerEvent)=>{if(!headerRef.current?.contains(event.target as Node)){setJournalOpen(false);setWeatherOpen(false);}};
    const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setJournalOpen(false);setWeatherOpen(false);}};
    document.addEventListener('pointerdown',close);document.addEventListener('keydown',escape);
    return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape);};
  },[journalOpen,weatherOpen]);
  const [ending,setEnding]=useState<EndingPhase>('idle');
  const returnTo=useRef<HTMLElement|null>(null);
  const [cameraOpen,setCameraOpen]=useState(false),[photoRevision,setPhotoRevision]=useState(0),[savedPhoto,setSavedPhoto]=useState('');
  const [birthday,setBirthday]=useState(()=>getBirthdayState());
  const [frameIndex,setFrameIndex]=useState(0),[frameFlipped,setFrameFlipped]=useState(false);
  const [callIndex,setCallIndex]=useState(-1);
  const [calendarPage,setCalendarPage]=useState(0),[calendarTurning,setCalendarTurning]=useState(false);
  const [tvIndex,setTVIndex]=useState(0),[tvPaused,setTVPaused]=useState(false),[visible,setVisible]=useState(true);
  const [sofaPet,setSofaPet]=useState(0),[windowPet,setWindowPet]=useState(0),[catOffer,setCatOffer]=useState(false);
  const whisperTimer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined),answerTimer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined),calendarTimer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);
  const state=useRoomState();
  const seenChapterIds=new Set((state.discoveredObjects??[]).filter(id=>id.startsWith('chapter:')).map(id=>id.slice(8)));
  const firstUnseen=storyChapters.findIndex(chapter=>!seenChapterIds.has(chapter.id));
  const nextChapterIndex=firstUnseen<0?storyChapters.length:firstUnseen;
  const canExplore=entered&&!callOpen&&ending==='idle'&&!memory&&!cameraOpen;
  useEffect(()=>{
    let alive=true;
    void (async()=>{
      try{await useRoomState.persist.rehydrate();}catch{/* Storage can be unavailable in a private browser. */}if(!alive)return;
      const saved=useRoomState.getState();roomAudio.prepare();roomAudio.setMuted(saved.audioMuted);
      if(saved.openingSeen){setEntered(true);roomAudio.enterRoom();}else{setCallOpen(true);roomAudio.startRinging();saved.enter();}
      setHydrated(true);
    })();setBirthday(getBirthdayState());
    const visibility=()=>{const v=document.visibilityState==='visible';setVisible(v);roomAudio.setVisible(v);};
    visibility();document.addEventListener('visibilitychange',visibility);
    return()=>{alive=false;document.removeEventListener('visibilitychange',visibility);clearTimeout(whisperTimer.current);clearTimeout(answerTimer.current);clearTimeout(calendarTimer.current);roomAudio.dispose();};
  },[]);
  useEffect(()=>{
    if(!entered||callOpen)return;
    const engage=()=>roomAudio.engage();
    document.addEventListener('pointerdown',engage,{capture:true});document.addEventListener('keydown',engage,{capture:true});
    return()=>{document.removeEventListener('pointerdown',engage,true);document.removeEventListener('keydown',engage,true);};
  },[entered,callOpen]);
  useEffect(()=>{roomAudio.setMuted(state.audioMuted);},[state.audioMuted]);
  function closeFocus(){setFocus(null);roomAudio.stopPhone();requestAnimationFrame(()=>returnTo.current?.focus({preventScroll:true}));}
  useEffect(()=>{
    const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'&&!memory&&!cameraOpen&&ending==='idle'){closeFocus();setMagic(false);setWhisper('');setJournalOpen(false);}};
    window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);
  },[memory,cameraOpen,ending]);
  useEffect(()=>{
    roomAudio.setFocus(ending==='relight'?'relight':ending==='wish'||ending==='dark'?'ending':focus==='calls'?'phone':'room');
    if(!memory)return;
    const core=memory;
    const timer=setTimeout(()=>useRoomState.getState().discover(core),1700);return()=>clearTimeout(timer);
  },[memory,focus,ending,cameraOpen]);
  useEffect(()=>{
    if(!entered||tvPaused||!visible||ending==='dark')return;
    const timer=setInterval(()=>setTVIndex(i=>advancePhoto(i,memories.length)),4800);return()=>clearInterval(timer);
  },[entered,tvPaused,visible,ending]);
  useEffect(()=>{
    let alive=true,url='';void latestBirthdayPhoto().then(photo=>{if(!alive)return;url=photo?URL.createObjectURL(photo.blob):'';setSavedPhoto(url);}).catch(()=>{});
    return()=>{alive=false;if(url)URL.revokeObjectURL(url);};
  },[photoRevision]);
  useEffect(()=>{
    if(ending==='dark'){const t=setTimeout(()=>setEnding('relight'),1350);return()=>clearTimeout(t);}
    if(ending==='relight'){const t=setTimeout(()=>{state.finish();setEnding('letter');},RELIGHT_DURATION);return()=>clearTimeout(t);}
  },[ending,state.finish]);
  useEffect(()=>{if(entered&&state.endingUnlocked&&!state.endingSeen&&ending==='idle')say('十二站都亮了。为下一站许个愿吧。');},[entered,state.endingUnlocked,state.endingSeen]);
  useEffect(()=>{
    if(entered&&nextChapterIndex===storyChapters.length&&!state.endingUnlocked)state.unlockEnding();
  },[entered,nextChapterIndex,state.endingUnlocked,state.unlockEnding]);
  function say(text:string){clearTimeout(whisperTimer.current);setWhisper(text);whisperTimer.current=setTimeout(()=>setWhisper(''),4500);}
  function openChapter(index:number){
    const chapter=storyChapters[index];if(!chapter)return;
    const alreadySeen=seenChapterIds.has(chapter.id);
    if(!alreadySeen&&index>nextChapterIndex){say(`先走完第 ${nextChapterIndex+1} 站吧。`);return;}
    setJournalOpen(false);setWeatherOpen(false);setFocus(null);setWhisper('');setMemory(chapter.kind);
    state.notice(`chapter:${chapter.id}`);state.discover(chapter.kind);roomAudio.foley('paper');
  }
  function petCat(window=false){
    const n=window?windowPet:sofaPet;
    if(window)setWindowPet(v=>v+1);else setSofaPet(v=>v+1);
    state.notice(window?'window-cat':'cats');state.discover('cats');roomAudio.foley('cat');setCatOffer(true);
    const replies=window?['喵？来一起看窗外。','蹭蹭。窗边分你一半。','尾巴说：再摸一下。']:['呼噜噜……','耳朵自动贴到你手心。','好啦，这只手归猫了。'];
    say(replies[n%replies.length]);
  }
  function openObject(id:ObjectId){
    if(!canExplore)return;
    returnTo.current=document.activeElement instanceof HTMLElement?document.activeElement:null;
    setCatOffer(false);state.notice(id);
    if(id==='lamp'||id==='desk-lamp'){const key=id==='lamp'?'floor':'desk';state.setLighting({[key]:state.lighting[key]>0?0:key==='floor'?85:65});roomAudio.foley('switch');return;}
    if(id==='cats'||id==='window-cat'){petCat(id==='window-cat');return;}
    if(id==='elephant'){
      setElephantPet(n=>n+1);state.discover('elephant');roomAudio.foley('pickup');
      say(state.endingUnlocked&&!state.endingSeen?'鼻子指了指蛋糕。':elephantPet%2?'它把小照片藏到身后。':'碰一下鼻子。约好了。');
      return;
    }
    if(id==='cake'){
      if(!state.endingUnlocked){say('还差一点点。去房间里转转？');return;}
      setFocus(null);setWhisper('');setEnding('wish');return;
    }
    if(id==='drawer'){setFocus('drawer');setDrawerOpen(v=>!v);state.discover('drawer');roomAudio.foley('paper');return;}
    if(id==='wall-charm'){setCharmPulse(n=>n+1);state.discover('magic');roomAudio.foley('magic');say('星星借你一会儿。');return;}
    if(id==='letter'){setEnding('letter');return;}
    if(id==='camera'){setCameraOpen(true);roomAudio.foley('pickup');return;}
    if(Object.prototype.hasOwnProperty.call(focusBoxes,id)){
      setFocus(id as FocusKind);if(id==='calls')roomAudio.phoneRing();else roomAudio.foley('pickup');
      if(['frames','books','calendar','tv'].includes(id))state.discover(id);return;
    }
    const chapterIndex=storyChapters.findIndex(chapter=>chapter.kind===id);
    if(chapterIndex>=0){openChapter(chapterIndex);return;}
    roomAudio.foley('paper');setMemory(id as MemoryKind);
  }
  function frameFlip(){setFrameFlipped(v=>!v);roomAudio.foley('paper');}
  function calendarFlip(){if(calendarTurning)return;setCalendarTurning(true);setCalendarPage(n=>1-n);roomAudio.foley('paper');calendarTimer.current=setTimeout(()=>setCalendarTurning(false),1450);}
  function finishCall(){clearTimeout(answerTimer.current);setCallPhase('transition');setEntered(true);state.enter();roomAudio.enterRoom();answerTimer.current=setTimeout(()=>{setCallOpen(false);setCallPhase('ringing');setReplaying(false);},1500);}
  function startRecording(){state.enter();setCallPhase('connected');setCallSeconds(0);roomAudio.connect(state.audioMuted,finishCall,()=>setCallPhase('error'),setCallSeconds);}
  function answer(){if(callPhase!=='connected')startRecording();}
  function replayCall(){if(!canExplore)return;setJournalOpen(false);setWhisper('');setReplaying(true);setCallOpen(true);startRecording();}
  const light=state.lighting;
  function sceneAction(id:string){
    if(!canExplore)return;
    if(id==='drawer-star'){setCharmPulse(n=>n+1);state.discover('magic');roomAudio.foley('magic');say('一颗没睡着的星星。');return;}
    if(id==='tv-prev'){setTVIndex(i=>(i-1+memories.length)%memories.length);return;}
    if(id==='tv-next'){setTVIndex(i=>advancePhoto(i,memories.length));return;}
    if(id==='tv-pause'){setTVPaused(p=>!p);roomAudio.foley('switch');return;}
        if(['mug','tulips','cushion','keys','coffee'].includes(id)){state.discover(id==='coffee'||id==='mug'?'coffee':id);roomAudio.foley(id==='cushion'?'paper':'pickup');return;}

    if(id.startsWith('book:')){setFocus('books');state.discover('books');return;}
    if(id==='frames'&&focus==='frames'){frameFlip();return;}
    if(id==='calendar'&&focus==='calendar'){calendarFlip();return;}
    openObject(id as ObjectId);
  }
  return <main style={atmosphereSurfaces[state.atmosphere] as CSSProperties} data-atmosphere={state.atmosphere} data-tone={atmospheres[state.atmosphere].tone} className={`experience is-three-dimensional ${entered?'has-entered':''} ${callOpen?'has-call':''} ${focus?'is-focused':''} ${ending==='wish'?'is-wishing':''} ${ending==='relight'?'is-relighting':''} ${ending==='dark'||ending==='relight'?'is-cinematic':''}`}>
    <RoomBackdrop value={state.atmosphere}/>
    <div className="room-surface" inert={!hydrated||callOpen}>
    <Room3D state={{entered,drawerOpen,charmPulse,blocked:!canExplore,focus,frameIndex,frameFlipped,tvIndex,tvPaused,calendarPage,selectedBook:null,elephantPet,discovered:state.discoveredObjects??[],atmosphere:state.atmosphere,lighting:light,sofaPet,windowPet,count:nextChapterIndex,ready:state.endingUnlocked,seen:state.endingSeen,ending,magic,viewReset,dialRequest,savedPhoto}} onObject={sceneAction} onDial={()=>{setCallIndex(n=>(n+1)%callFragments.length);state.discover('calls');roomAudio.foley('pickup');}}/>
    {entered&&!focus&&ending==='idle'&&<header ref={headerRef} className="room-header">
    <div className="room-title"><h1>我们的故事还亮着</h1><span>{nextChapterIndex} / 12 STOPS</span></div>
    <nav className="room-tools" aria-label="小屋工具">
    <button className="replay-call" aria-label="回听开场电话" title="回听开场电话" onClick={()=>{setWeatherOpen(false);replayCall();}}><Phone size={20}/></button>
    <div className="discovery-journal">
      <button className="journal-toggle" aria-label="恋爱时间轨道" title="恋爱时间轨道" aria-expanded={journalOpen} aria-controls="discovery-pages" onClick={()=>{setWeatherOpen(false);setJournalOpen(v=>!v);}}><NotebookPen size={20}/></button>
      {journalOpen&&<div className="journal-pages story-journal" id="discovery-pages"><p>LOVE LINE · 12 STOPS</p><div className="story-rail">{storyChapters.map((chapter,index)=>{
        const found=seenChapterIds.has(chapter.id),current=index===nextChapterIndex,locked=!found&&index>nextChapterIndex;
        return <button key={chapter.id} className={found?'found':current?'current':'locked'} disabled={locked} aria-label={`${chapter.order}. ${chapter.city} ${chapter.title}`} onClick={()=>openChapter(index)}><i>{String(chapter.order).padStart(2,'0')}</i><span><b>{chapter.city}</b><small>{chapter.date.slice(5)} · {chapter.title}</small></span><em>{found?'✦':current?'→':'·'}</em></button>;
      })}</div>{state.endingSeen&&<div className="journal-bottom"><button onClick={()=>{setJournalOpen(false);openObject('letter');}}>重读最后的信</button></div>}</div>}
    </div>
    <AtmospherePicker value={state.atmosphere} open={weatherOpen} onToggle={()=>{setJournalOpen(false);setWeatherOpen(v=>!v);}} onChange={value=>{state.setAtmosphere(value);setWeatherOpen(false);}}/>
    </nav></header>}
    {canExplore&&!focus&&<button className="room-reset" aria-label="回到原位" title="回到原位" onClick={()=>{setWeatherOpen(false);setJournalOpen(false);setViewReset(n=>n+1);}}><RotateCcw size={18}/></button>}
    {canExplore&&!focus&&nextChapterIndex<storyChapters.length&&<button className="story-next" onClick={()=>openChapter(nextChapterIndex)}><span>NEXT STOP · {String(nextChapterIndex+1).padStart(2,'0')}</span><b>{storyChapters[nextChapterIndex].city}</b><em>{storyChapters[nextChapterIndex].title} →</em></button>}
    <div className="room-vignette"/><div className="room-film-grain" aria-hidden="true"/>

    {focus&&<FocusControls kind={focus} onClose={closeFocus} frameIndex={frameIndex} frameFlipped={frameFlipped} onFrameMove={n=>{setFrameIndex(i=>(i+n+2)%2);setFrameFlipped(false);roomAudio.foley('paper');}} onFrameFlip={frameFlip} selectedBook={null} onBookSelect={()=>{}} onDial={()=>setDialRequest(n=>n+1)} onBookMemory={isMagic=>openChapter(storyChapters.findIndex(chapter=>chapter.kind===(isMagic?'magic':'sunny')))} callIndex={callIndex} calendarPage={calendarPage} onCalendarFlip={calendarFlip} tvIndex={tvIndex} tvPaused={tvPaused} onTVPause={()=>setTVPaused(p=>!p)} onTVNext={()=>setTVIndex(i=>advancePhoto(i,memories.length))} onWindowCat={()=>petCat(true)} drawerOpen={drawerOpen} onDrawerToggle={()=>setDrawerOpen(v=>!v)} onDrawerMagic={()=>sceneAction('drawer-star')}/>} 
    {whisper&&<p className="room-whisper" role="status" key={whisper}>{whisper}</p>}
    {catOffer&&!memory&&!focus&&ending==='idle'&&<button className="cat-photos-link" onClick={()=>{openChapter(10);setCatOffer(false);setWhisper('');}}>Nature 在等你 ↗</button>}
    {magic&&<button className="nox-button" onClick={()=>setMagic(false)}>Nox</button>}
    <MemoryViewer kind={memory} onClose={()=>setMemory(null)} onMagic={()=>{setFocus(null);setMagic(true);state.discover('magic');state.setLighting({floor:100,desk:85,window:65});roomAudio.foley('magic');}}/>
    <BirthdayEnding phase={ending} onBlow={()=>{state.setAtmosphere('night');setEnding('dark');}} onClose={()=>{const letter=ending==='letter';setEnding('idle');if(letter)say('下一站，还会继续。');}} season={birthday.season}/>
    <BirthdayCamera open={cameraOpen} onClose={()=>setCameraOpen(false)} onKept={()=>{setPhotoRevision(n=>n+1);state.discover('film');}} season={birthday.season}/>

    </div>
    <button className="sound-control" aria-label={state.audioMuted?'开启声音':'静音'} aria-pressed={!state.audioMuted} onClick={()=>{roomAudio.engage();state.toggleMuted();}}>{state.audioMuted?<VolumeX size={19}/>:<Volume2 size={19}/>}<span>{state.audioMuted?'SOUND OFF':'SOUND ON'}</span></button>
    {hydrated&&callOpen&&<IncomingCall replaying={replaying} phase={callPhase} seconds={callSeconds} muted={state.audioMuted} onAnswer={answer} onContinue={finishCall}/>}
  </main>;
}
