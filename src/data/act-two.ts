export type ActTwoShot = {
  id: string;
  number: string;
  title: string;
  chapter: string;
  place: string;
  line: string;
  poster: string;
  video: string;
  available: boolean;
};

const video = (id: string) => `/act2/videos/${id}.mp4`;

export const actTwoShots: ActTwoShot[] = [
  {id: 'SH01', number: '01', title: '门后是机场', chapter: '抵达', place: '还没有地址的家', line: '房子先亮起一盏灯，门后传来机场广播。', poster: '/act2/keyframes/shot-12-memory-house-final.png', video: video('SH01'), available: true},
  {id: 'SH02', number: '02', title: '白郁金香', chapter: '初见', place: '上海', line: '他抱着一束白色郁金香，把紧张缩进一点点空气里。', poster: '/act2/keyframes/shot-02-airport-meeting.png', video: video('SH02'), available: true},
  {id: 'SH03', number: '03', title: '她先牵住他', chapter: '靠近', place: '上海地铁', line: '空出一个座位时，她先伸手，把他拉到身边。', poster: '/act2/keyframes/shot-02-airport-meeting.png', video: video('SH03'), available: false},
  {id: 'SH04', number: '04', title: '一副耳机', chapter: '靠近', place: '上海地铁', line: '两只耳朵分享同一首歌，线缆是当时最短的距离。', poster: '/act2/keyframes/shot-02-airport-meeting.png', video: video('SH04'), available: true},
  {id: 'SH05', number: '05', title: '恋爱长成日常', chapter: '共居', place: '上海', line: '火锅、水杯和抢到同一只手柄的手，让日子有了形状。', poster: '/act2/keyframes/shot-10-nature-home.png', video: video('SH05'), available: true},
  {id: 'SH06', number: '06', title: '雨夜不是探望', chapter: '守护', place: '北京', line: '两双手同时扶住一只碗。那一刻，探望变成了回家。', poster: '/act2/keyframes/shot-06-beijing-rain.png', video: video('SH06'), available: true},
  {id: 'SH07', number: '07', title: '行李箱在中间', chapter: '分别', place: '北京南站', line: '闸机已经打开，他还是回头，把最后一个拥抱抱紧。', poster: '/act2/keyframes/shot-06-beijing-rain.png', video: video('SH07'), available: false},
  {id: 'SH08', number: '08', title: '新加坡这一盏灯', chapter: '异地', place: '新加坡', line: '他在论文和视频电话之间抬头，房间就不再只有一个人。', poster: '/act2/characters/male-protagonist-v1.png', video: video('SH08'), available: false},
  {id: 'SH09', number: '09', title: '北京这一盏灯', chapter: '异地', place: '北京', line: '她把地铁卡放在手机旁，两座城市被过成同一天。', poster: '/act2/keyframes/shot-10-nature-home.png', video: video('SH09'), available: true},
  {id: 'SH10', number: '10', title: 'Nature 是我们', chapter: '日常', place: '北京', line: '一个拿逗猫棒，一个拿食盆，小猫让“我们”有了体温。', poster: '/act2/keyframes/shot-10-nature-home.png', video: video('SH10'), available: true},
  {id: 'SH11', number: '11', title: '答案可以明天再说', chapter: '冲突', place: '北京 · 新加坡', line: '计划表翻到空白背面。今天没有答案，但灯没有关。', poster: '/act2/keyframes/shot-06-beijing-rain.png', video: video('SH11'), available: false},
  {id: 'SH12', number: '12', title: '走进亮着的家', chapter: '未来', place: '还没有地址的家', line: '两个人推着同一只行李箱走进门，六个房间按时间顺序亮起。', poster: '/act2/keyframes/shot-12-memory-house-final.png', video: video('SH12'), available: false},
];
