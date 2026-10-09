import type {MemoryKind} from './memories';

export interface StoryChapter {
  id:string;
  order:number;
  kind:MemoryKind;
  date:string;
  city:string;
  title:string;
  subtitle:string;
  lines:string[];
  backText:string;
  asset:string;
  accent:string;
  sourcePage:number;
}

export const storyChapters:StoryChapter[]=[
  {id:'shanghai-first',order:1,kind:'frames',date:'2025.04.29',city:'上海',title:'第一次见面',subtitle:'原来紧张是可以被看见的',lines:['从机场到地铁，他一路都不太敢抬头看我。','我轻轻抓住他的手，说没关系。','我们分了一只耳机，坐在一起听歌。'],backText:'原来有人会为见我，而变得这样小心翼翼。',asset:'./memories/story-01.svg',accent:'#efb5ad',sourcePage:1},
  {id:'shanghai-hotpot',order:2,kind:'calls',date:'2025.05.29',city:'上海',title:'火锅味的日常',subtitle:'一起虚度光阴的快乐',lines:['我们抱回一堆火锅底料和蘸料。','吃饱了玩《双影奇境》，窗外的世界很远。','在我的系统化喂养下，他的食量终于进化成正常人类。'],backText:'无聊不是空白，而是两个人在锅里翻滚的安心。',asset:'./memories/story-02.svg',accent:'#e88c62',sourcePage:2},
  {id:'xian',order:3,kind:'together',date:'2025.06.12',city:'西安',title:'来到她的城市',subtitle:'城墙、烟火气与一场没去成的演唱会',lines:['城墙在晚风里安静地延展。','肉夹馍、凉皮、羊肉泡馍，第一口就是这座城的味道。','我看画，也偷偷看她。'],backText:'西安不仅有古老而美丽的风景，也有美丽的人。',asset:'./memories/story-03.svg',accent:'#cf876e',sourcePage:3},
  {id:'nanjing',order:4,kind:'portraits',date:'2025.07.02',city:'南京',title:'来到他的家乡',subtitle:'南京的夜和他一样安静',lines:['盛夏的白天锋利又炽烈，我们干脆昼伏夜出。','晚风从街巷间穿过，有一种温柔的抚摸。','我开始忍不住想，究竟是什么样的环境养育出他。'],backText:'当我走进你的城市，你的一部分也终于有了来处。',asset:'./memories/story-04.svg',accent:'#8fae8b',sourcePage:3},
  {id:'seaside',order:5,kind:'sunny',date:'2025.07.24',city:'海边',title:'第一次去海边',subtitle:'双向奔赴的旅行',lines:['这是我们第一次两个人去异地。','他为了救我，也被淋了个落汤鸡。','我们拿着手机，笨拙地录下跑向海的样子。'],backText:'去看海的那天，我们也在奔向彼此。',asset:'./memories/story-05.svg',accent:'#74b7cd',sourcePage:4},
  {id:'nanjing-yangzhou',order:6,kind:'film',date:'2025.08.08',city:'南京·扬州',title:'榴莲、雨和手术前夕',subtitle:'幸福有时是一种很具体的甜',lines:['我们认真挑了一颗大大的榴莲。','扬州的河水静静流着，桥影倒映在水面上。','雨落下来时，我们知道一场手术正在靠近。'],backText:'雨过之后，空气会更干净，天也会更亮。',asset:'./memories/story-06.svg',accent:'#d3a46f',sourcePage:5},
  {id:'beijing-goodbye',order:7,kind:'magic',date:'2025.09.11',city:'北京',title:'手术后的火锅与分别',subtitle:'距离拉开的是城市，不是心',lines:['手术刚恢复好，我就迫不及待地去看她。','北京下着大雨，我们躲进小屋煮起火锅。','真正分别的时候，眼泪还是忍不住。'],backText:'一个留在北京，一个飞往新加坡。落下来却很重。',asset:'./memories/story-07.svg',accent:'#91a6bf',sourcePage:5},
  {id:'singapore-first',order:8,kind:'books',date:'2025.10.03',city:'新加坡',title:'第一次出国去看他',subtitle:'两天太短，所以每个拥抱都更紧',lines:['国庆一咬牙，飞去新加坡看他。','白天冲去了环球，晚上去动物园。','他带我走过熟悉的路，我终于看见他在另一座城市里的生活。'],backText:'希望下一次见面，不用再这么匆忙。',asset:'./memories/story-08.svg',accent:'#70b4ad',sourcePage:6},
  {id:'beijing-side-by-side',order:9,kind:'tv',date:'2025.11.07',city:'北京',title:'一起硬撑的日子',subtitle:'不是热烈的欢笑，是并肩作战的安静',lines:['行程像被拧紧的发条，身体也不争气。','我熬夜做 PPT，她也一遍遍推翻方案。','冷风会过去，忙碌也会过去。'],backText:'我们各自对着自己的难题，又时不时抬头看一眼对方。',asset:'./memories/story-09.svg',accent:'#8094ab',sourcePage:6},
  {id:'singapore-christmas',order:10,kind:'elephant',date:'2025.11.27',city:'新加坡',title:'在失业的空档里重逢',subtitle:'奔波与不确定之间，短暂停靠在彼此身边',lines:['我趁生活突然空出的间隙，飞去新加坡。','一起看《疯狂动物城 2》，一起吃了好多面线。','热带的圣诞节没有雪，却有明亮而轻快的浪漫。'],backText:'没有太多宏大的计划，只是吃饭、看电影、散步，却更真实。',asset:'./memories/story-10.svg',accent:'#897bb0',sourcePage:7},
  {id:'beijing-nature',order:11,kind:'cats',date:'2026.01.09',city:'北京',title:'推开门，她在，Nature 也在',subtitle:'屋子里的灯光、笑声和猫咪的体温',lines:['好不容易熬过一个多月的赶稿，我飞回北京见她。','我终于见到我们一起养的小布偶 Nature。','世界忽然变得很小，只剩灯光、她的笑声和猫咪的体温。'],backText:'季节在变，城市在变，但只要推开门，那种安心就会准时出现。',asset:'./memories/story-11.svg',accent:'#c99b85',sourcePage:8},
  {id:'valentine',order:12,kind:'calendar',date:'2026.02.14',city:'新加坡',title:'情人节前的倒计时',subtitle:'等见到你，我什么都不想说，只想抱抱你',lines:['临近过年，空气里已经有团圆的味道。','而今天是 2 月 14 日，我们又即将相聚。','想到你，我的心还是会像第一次那样轻轻一颤。'],backText:'爱是等待，是倒计时，是日历上被圈出来的日子。',asset:'./memories/story-12.svg',accent:'#d95858',sourcePage:9},
];

export const chapterByKind=(kind:MemoryKind)=>storyChapters.find(chapter=>chapter.kind===kind)!;

