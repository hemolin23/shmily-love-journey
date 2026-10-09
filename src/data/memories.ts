export type MemoryKind = 'frames' | 'calls' | 'film' | 'together' | 'portraits' | 'cats' | 'sunny' | 'magic' | 'books' | 'calendar' | 'tv' | 'elephant';
export interface Memory { id:string; episode:string; category:MemoryKind; carrier:'frame'|'polaroid'|'filmstrip'|'contact-sheet'|'tv'; asset:string; alt:string; backText:string; priority:number; }
import {storyChapters} from './story';
export const episodeTitles:Record<MemoryKind,string>=Object.fromEntries(storyChapters.map(chapter=>[chapter.kind,chapter.title])) as Record<MemoryKind,string>;
export const memories:Memory[]=storyChapters.map(chapter=>({id:chapter.id,episode:chapter.title,category:chapter.kind,carrier:chapter.kind==='frames'?'frame':'polaroid',asset:chapter.asset,alt:`${chapter.date} ${chapter.city}：${chapter.title}`,backText:chapter.backText,priority:chapter.order}));
export const photo=(index:number)=>memories[((index-1)%memories.length+memories.length)%memories.length];
export {albums} from './photo-collections';
export const callFragments=[
 {time:'第 01 站',line:'我从上海落地。\n你站在机场出口。',aside:'2025.04.29'},
 {time:'第 02 站',line:'我们吃着火锅，\n把普通日子过得很好。',aside:'2025.05.29'},
 {time:'第 03 站',line:'西安的城墙很旧，\n但故事才刚开始。',aside:'2025.06.12'},
 {time:'第 07 站',line:'距离拉开的是城市，\n不是心。',aside:'2025.09.11'},
 {time:'第 11 站',line:'推开门，\n你在，Nature 也在。',aside:'2026.01.09'},
 {time:'第 12 站',line:'等见到你，\n我只想抱抱你。',aside:'2026.02.14'},
];
export const birthdayLetter=[
 '给 shmily：',
 '爱是短暂却用力的相聚，是美好到无需言语，靠在一起。',
 '爱是下飞机那一瞬间的心跳加速，是穿过人群时忍不住加快的脚步，也是在出口张望时的紧张。',
 '我们走过上海、西安、南京、北京和新加坡。火锅的热气、盛夏的雨、机场的分别和 Nature 的呼噜声，都在这间房子里留了下来。',
 '距离拉开的是城市，不是心。每一次分别，都因为已经在说“下一次”而没有真正结束。',
 '等见到你的那一刻，我什么都不想说。我只想抱抱你。',
 '这是属于我们的故事。还会继续。',
];
