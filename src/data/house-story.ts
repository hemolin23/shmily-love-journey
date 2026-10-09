export type HouseRoomId =
  | 'arrival'
  | 'ordinary'
  | 'rain'
  | 'two-cities'
  | 'nature'
  | 'leave-light';

export interface StoryObject {
  name: string;
  meaning: string;
}

export interface HouseRoomStory {
  id: HouseRoomId;
  number: string;
  title: string;
  english: string;
  date: string;
  cities: string;
  change: string;
  summary: string;
  quote: string;
  objects: StoryObject[];
  moments: string[];
}

export const houseRooms: HouseRoomStory[] = [
  {
    id: 'arrival',
    number: '01',
    title: '初见玄关',
    english: 'THE FIRST ARRIVAL',
    date: '2025.04.29',
    cities: '上海',
    change: '陌生 → 允许靠近',
    summary: '机场出口，他抱着白郁金香，不敢一直看她。地铁里出现一个空位，她先抓住他的手。两个人共用一副耳机，第一次在真实世界里进入同一段声音。',
    quote: '听会儿歌吧。',
    objects: [
      {name: '白郁金香', meaning: '被认真等待的第一次抵达'},
      {name: '单只耳机', meaning: '共享一条私密的声音通道'},
      {name: '行李箱', meaning: '每次靠近都需要真实地出发'},
    ],
    moments: ['上海机场初见', '地铁里第一次牵手', '共用耳机'],
  },
  {
    id: 'ordinary',
    number: '02',
    title: '日常厨房',
    english: 'ORDINARY DAYS',
    date: '2025.05—07',
    cities: '上海 · 西安 · 南京 · 海边',
    change: '约会 → 生活预演',
    summary: '火锅、游戏、水果和一次次短途见面，把“特别的一天”慢慢变成普通生活。不是所有记忆都需要壮观；两个人吃饱以后什么都不用想，已经像家的雏形。',
    quote: '我们家是喜欢吃水果的。',
    objects: [
      {name: '火锅', meaning: '最早被共同拥有的日常'},
      {name: '水果篮', meaning: '一句玩笑里第一次出现“我们家”'},
      {name: '游戏手柄', meaning: '一起虚度光阴也值得被记住'},
    ],
    moments: ['上海宅家吃火锅', '西安与南京的夏天', '第一次一起去海边'],
  },
  {
    id: 'rain',
    number: '03',
    title: '雨夜站台',
    english: 'RAIN BEFORE GOODBYE',
    date: '2025.08—09',
    cities: '南京 · 扬州 · 北京',
    change: '浪漫 → 共同承受现实',
    summary: '手术、雨夜和分别第一次把现实放到他们中间。她赶去北京，锅里翻滚着热气，窗外是倾盆的雨。后来站台把两个人送往不同城市，但距离只拉开了地图，没有拉开心。',
    quote: '我是说，回到家。',
    objects: [
      {name: '旧雨伞', meaning: '浪漫以外，也一起淋过现实'},
      {name: '住院腕带', meaning: '脆弱第一次被另一个人看见'},
      {name: '车票与行李', meaning: '离开并不等于结束'},
    ],
    moments: ['南京与扬州', '术后北京雨夜', '九月站台分别'],
  },
  {
    id: 'two-cities',
    number: '04',
    title: '双城书房',
    english: 'TWO CITIES, ONE DAY',
    date: '2025.09—12',
    cities: '北京 ⇄ 新加坡',
    change: '等待见面 → 共同时间',
    summary: '北京和新加坡没有时差，却有各自忙乱的生活。视频、通勤路线、并排赶工和一次次飞行，把遥远的两间房变成同一张桌子的两侧。见面仍然短暂，但等待开始有了秩序。',
    quote: '下次来找你，我可以自己坐地铁了。',
    objects: [
      {name: '两盏台灯', meaning: '在不同房间里共享同一段夜晚'},
      {name: '手机支架', meaning: '陪伴有时只是一块亮着的屏幕'},
      {name: '地铁卡', meaning: '陌生的城市渐渐可以独自抵达'},
    ],
    moments: ['第一次去新加坡', '北京并排赶工', '圣诞夜与面线'],
  },
  {
    id: 'nature',
    number: '05',
    title: 'Nature 房',
    english: 'THE THIRD MEMBER',
    date: '2026.01—02',
    cities: '北京 · 新加坡',
    change: '二人世界 → 有劳动的共同体',
    summary: 'Nature 的出现让“喜欢”第一次有了每天都要完成的劳动：添粮、铲砂、擦地、带去看医生。小猫不懂浪漫，却让两个人学会共同照顾一个比自己更小的生命。',
    quote: '正因为 Nature 是我们俩的。',
    objects: [
      {name: '猫碗', meaning: '爱开始拥有固定的责任'},
      {name: '猫砂铲', meaning: '共同生活里不只保留漂亮部分'},
      {name: '歪着的手机', meaning: '跨城也要确认小家伙今天好不好'},
    ],
    moments: ['北京第一次见 Nature', '视频里一起照看', '情人节前的重逢'],
  },
  {
    id: 'leave-light',
    number: '06',
    title: '留灯房',
    english: 'LEAVE THE LIGHT ON',
    date: '2026.03—05',
    cities: '北京 ⇄ 新加坡',
    change: '证明正确 → 在不确定里陪伴',
    summary: '真正难的不是远距离，而是疲惫时仍愿意把误解翻译成对方听得懂的话。他们没有在这一年得到所有答案，只学会在争执后留一盏灯，让关系还有回来的入口。',
    quote: '我还在。不是不说，明天再说。',
    objects: [
      {name: '被改过的计划纸', meaning: '未来可以讨论，不必一次决定'},
      {name: '打结的充电线', meaning: '误解不会自动消失，需要慢慢解开'},
      {name: '十点闹钟', meaning: '说好明天继续，就真的继续'},
    ],
    moments: ['谈论共同未来', '争执后的沉默', '留灯与再次开口'],
  },
];

export const houseEnding = {
  eyebrow: 'THE HOUSE IS STILL GROWING',
  title: '家还没有地址。',
  body: '但它已经有了抵达、日常、风雨、等待、照顾，也有争执之后没有熄灭的灯。',
  finalLine: '今天，有人在等你到家。',
};

export const roomById = (id: HouseRoomId) =>
  houseRooms.find((room) => room.id === id) ?? houseRooms[0];
