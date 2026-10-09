export type MemoryStar = {
  id: string;
  date: string;
  phase: string;
  title: string;
  theme: string;
  count: number;
  featured: boolean;
  lines: Array<{speaker: '我' | 'shmily'; side: 'self' | 'him'; time: string; text: string}>;
};

export const CHAT_MESSAGE_TOTAL = 57991;
export const CHAT_INDEXED_DAY_TOTAL = 431;
export const CHAT_DAY_TOTAL = 417;
export const CHAT_PHASES = [
  "初见·靠近",
  "远行·相见",
  "日常·成家",
  "异地·并肩",
  "未来·同行"
] as const;
export const memoryStars: MemoryStar[] = [
  {
    "id": "day-2025-07-31",
    "date": "2025-07-31",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 137,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "和宝宝度过难关"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "今天就好好休息吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:05",
        "text": "去年我打过流感疫苗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "估计是昨天"
      }
    ]
  },
  {
    "id": "day-2025-08-01",
    "date": "2025-08-01",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 211,
    "featured": true,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:15",
        "text": "我这个表情包可爱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:15",
        "text": "宝宝酱是灵魂伴侣"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:15",
        "text": "好的宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:16",
        "text": "时间过的好快啊"
      }
    ]
  },
  {
    "id": "day-2025-08-02",
    "date": "2025-08-02",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 277,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:06",
        "text": "我是不是没有什么耐心哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:06",
        "text": "辛苦我们俩儿了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:06",
        "text": "宝宝今天吃药了吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:06",
        "text": "主要是甲锋要睡了"
      }
    ]
  },
  {
    "id": "day-2025-08-03",
    "date": "2025-08-03",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 159,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:02",
        "text": "我自己怎么从来没有发现"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:04",
        "text": "来我们开腾讯会议吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "你是咋重启的宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "你不会直接按开机键重启的吧"
      }
    ]
  },
  {
    "id": "day-2025-08-04",
    "date": "2025-08-04",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 127,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:18",
        "text": "在吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:29",
        "text": "唔，宝宝酱可能在睡觉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:46",
        "text": "是的刚醒"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:46",
        "text": "好像感冒了"
      }
    ]
  },
  {
    "id": "day-2025-08-05",
    "date": "2025-08-05",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 292,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:14",
        "text": "我去上个厕所就睡"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:16",
        "text": "宝宝酱，我们的视频和图片是走iCloud对吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:16",
        "text": "如果拿去维修不用删掉吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:20",
        "text": "提前备份吧宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-08-06",
    "date": "2025-08-06",
    "phase": "初见·靠近",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 531,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:10",
        "text": "我没回"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:10",
        "text": "你现在吃饭重要还是工作重要"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:10",
        "text": "不急，如果他，明天问我我再回复"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:10",
        "text": "。。。"
      }
    ]
  },
  {
    "id": "day-2025-08-07",
    "date": "2025-08-07",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 191,
    "featured": true,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:10",
        "text": "晚安，宝宝酱，你做什么选择我都支持你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:12",
        "text": "晚安宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:13",
        "text": "睡一觉醒来再看吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:22",
        "text": "中介报价3500"
      }
    ]
  },
  {
    "id": "day-2025-08-08",
    "date": "2025-08-08",
    "phase": "初见·靠近",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 158,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:39",
        "text": "[拥抱][拥抱]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:41",
        "text": "这次我们住南京南周围，如何"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:50",
        "text": "可以滴"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:51",
        "text": "我带你去牛首山或者老山玩玩"
      }
    ]
  },
  {
    "id": "day-2025-08-11",
    "date": "2025-08-11",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 11,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:43",
        "text": "只有八间"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:43",
        "text": "辛苦宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:47",
        "text": "直接进来"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:49",
        "text": "你在哪儿"
      }
    ]
  },
  {
    "id": "day-2025-08-12",
    "date": "2025-08-12",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 81,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:27",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:27",
        "text": "抱抱宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:27",
        "text": "我去帮甲锋买点水洗个碗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:28",
        "text": "你休息休息"
      }
    ]
  },
  {
    "id": "day-2025-08-13",
    "date": "2025-08-13",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 358,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:24",
        "text": "宝宝酱别研究了，我自己来就好，你继续写总结"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:32",
        "text": "宝宝酱我看过了，它的这个工作流是没有同步功能的，我最后可以给你增加一个节点同步到飞书。因为这是一个文档内容，宝宝酱是想要在飞书里面新建一个文档同步过去呢，还是想要批量调研，然后写到表格里呢"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:33",
        "text": "同步过去就行"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:34",
        "text": "宝宝酱有一个题外话"
      }
    ]
  },
  {
    "id": "day-2025-08-14",
    "date": "2025-08-14",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 245,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:44",
        "text": "是的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:45",
        "text": "可以问下你们 8 个小时工作制是咋算的。9 点上班，6 点下班，中间一个小时休息？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:45",
        "text": "嗯嗯，拍摄应该是无固定时间的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:45",
        "text": "宝宝你先上班好了"
      }
    ]
  },
  {
    "id": "day-2025-08-15",
    "date": "2025-08-15",
    "phase": "初见·靠近",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 217,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:51",
        "text": "剪辑的同事一大早就过来了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:52",
        "text": "7点要起床坐一个半小时地铁现在趴桌上睡觉我估计他六点半就出发了 毕竟还要吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:52",
        "text": "太辛苦了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:35",
        "text": "加油宝酱！"
      }
    ]
  },
  {
    "id": "day-2025-08-16",
    "date": "2025-08-16",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 132,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:08",
        "text": "还有我的药品和小物件"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:09",
        "text": "好的好的，辛苦宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:09",
        "text": "我先吃饭了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:49",
        "text": "晚上好宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-08-17",
    "date": "2025-08-17",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 204,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:00",
        "text": "只是睡觉现在不是很舒服"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:10",
        "text": "希望手术能一劳永逸 毕竟睡不好觉太折磨人了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:10",
        "text": "尤其是智力型高强度工作"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:15",
        "text": "和宝宝酱能好好工作"
      }
    ]
  },
  {
    "id": "day-2025-08-18",
    "date": "2025-08-18",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 233,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:51",
        "text": "不是，明早不吃不喝手术"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:57",
        "text": "晚安，宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:57",
        "text": "一切顺利"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:58",
        "text": "我也睡"
      }
    ]
  },
  {
    "id": "day-2025-08-19",
    "date": "2025-08-19",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 156,
    "featured": true,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:51",
        "text": "晚安"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:52",
        "text": "嗯嗯，你休息吧，晚安，我也睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:52",
        "text": "我打字慢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:52",
        "text": "主要"
      }
    ]
  },
  {
    "id": "day-2025-08-20",
    "date": "2025-08-20",
    "phase": "初见·靠近",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 124,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "06:09",
        "text": "早安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "06:10",
        "text": "宝宝酱昨晚上头像变成了猫猫"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "06:26",
        "text": "嘿嘿，可爱猫猫，早上好呀"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "06:28",
        "text": "今天醒得有点早，我要再睡会儿觉"
      }
    ]
  },
  {
    "id": "day-2025-08-21",
    "date": "2025-08-21",
    "phase": "初见·靠近",
    "title": "把你照顾好",
    "theme": "care",
    "count": 176,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:30",
        "text": "俺刷一会儿视频"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:30",
        "text": "宝宝酱好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:28",
        "text": "我发现我真的怕挂水"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:29",
        "text": "可能心理有些排斥异物进入身体"
      }
    ]
  },
  {
    "id": "day-2025-08-22",
    "date": "2025-08-22",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 146,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "22:55",
        "text": "下雨了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:59",
        "text": "晚安哦，快快睡觉哦宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:59",
        "text": "我去洗漱去"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:59",
        "text": "我们一会视频吗"
      }
    ]
  },
  {
    "id": "day-2025-08-23",
    "date": "2025-08-23",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 197,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:35",
        "text": "想do"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:39",
        "text": "宝宝酱，我们都要先照顾好自己"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:40",
        "text": "我也写会儿字吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:40",
        "text": "怎么变成宝酱劝我了"
      }
    ]
  },
  {
    "id": "day-2025-08-24",
    "date": "2025-08-24",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 150,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:42",
        "text": "宝酱还好吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:04",
        "text": "宝宝酱我一直都在哦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:12",
        "text": "我大概是说到了一些触动他的话"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:13",
        "text": "他应该是有点怕了，另外我还说了亲情爱情友情"
      }
    ]
  },
  {
    "id": "day-2025-08-25",
    "date": "2025-08-25",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 447,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:13",
        "text": "哦是这样的，昨天没有讨论这个问题，宝宝酱，我现在坦白跟你说"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:14",
        "text": "我借你钱的主要目的是，让你在你读研工作这两年，不要过那种欠银行、或者欠别人钱的那种焦虑的生活，然后我们的关系的稳定可以抵消一部分宝宝酱心里对我的不安全感"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:16",
        "text": "另一个方面是想要宝宝酱慢慢存钱，拥有抵抗经济风险的能力，所以你啥时候还，甚至不还我也可以接受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:20",
        "text": "不要帮他"
      }
    ]
  },
  {
    "id": "day-2025-08-26",
    "date": "2025-08-26",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 212,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:58",
        "text": "我还是有的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:59",
        "text": "但是宝宝酱，你的床就在旁边，我学一会儿就到床上去了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:59",
        "text": "emmm那你学一会儿，躺一会儿也可以"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:00",
        "text": "宝宝酱在家里也会去床上吗"
      }
    ]
  },
  {
    "id": "day-2025-08-27",
    "date": "2025-08-27",
    "phase": "初见·靠近",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 106,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:29",
        "text": "早！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:29",
        "text": "宝宝酱好好睡觉，好好上班"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:10",
        "text": "现在赶紧出发"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:10",
        "text": "步行去上班"
      }
    ]
  },
  {
    "id": "day-2025-08-28",
    "date": "2025-08-28",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 147,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:28",
        "text": "好哦一大早就被老板叫过去啦 聊了很久内容 幸好昨晚没睡着想了一下他的内容调整 最终就是不大改 他早上和我的想法一样"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:22",
        "text": "我在家等你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:28",
        "text": "我到家了，宝宝酱，你慢慢工作，别着急"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:57",
        "text": "天哪宝酱8点了，还在加班[流泪][流泪]"
      }
    ]
  },
  {
    "id": "day-2025-08-29",
    "date": "2025-08-29",
    "phase": "初见·靠近",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 88,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:49",
        "text": "我知道麦当劳在哪里，中午就出发去找你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:49",
        "text": "刚查了一下，北京华信医院🏥预防接种门诊 距你5公里 可以咨询HPV，3针一共1323全国统一价"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:49",
        "text": "26岁之前接种效果最好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:07",
        "text": "不急"
      }
    ]
  },
  {
    "id": "day-2025-08-30",
    "date": "2025-08-30",
    "phase": "初见·靠近",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 2,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:37",
        "text": "没事，和牛238一个人，算了我们还是那个便宜点的套餐吧"
      }
    ]
  },
  {
    "id": "day-2025-08-31",
    "date": "2025-08-31",
    "phase": "初见·靠近",
    "title": "想念有了回声",
    "theme": "love",
    "count": 9,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:52",
        "text": "宝宝酱我进来了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:52",
        "text": "哦好，你给我拍个桌码"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:52",
        "text": "我看看"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:52",
        "text": "在门口的第二桌"
      }
    ]
  },
  {
    "id": "day-2025-09-01",
    "date": "2025-09-01",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 277,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:00",
        "text": "好 不看啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:00",
        "text": "回去也好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:00",
        "text": "也到饭点了，大家都去吃饭了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:02",
        "text": "午休了"
      }
    ]
  },
  {
    "id": "day-2025-09-02",
    "date": "2025-09-02",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 201,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:25",
        "text": "天哪宝酱不会睡着了吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:26",
        "text": "好吧在打电话"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:54",
        "text": "晚安宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:58",
        "text": "晚安宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-09-03",
    "date": "2025-09-03",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 181,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "22:40",
        "text": "恢复得真快"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:40",
        "text": "好好休息吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:40",
        "text": "他说他不睡了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:40",
        "text": "现在坐起来吃饭"
      }
    ]
  },
  {
    "id": "day-2025-09-04",
    "date": "2025-09-04",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 114,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "找找音乐看看片子去"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:01",
        "text": "那行，我能看一分钟宝宝酱嘛？这算工作时间违约吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:34",
        "text": "晚上又出去吃了顿烧烤"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:34",
        "text": "其实我觉得味道还可以，老板的嘴是真的挑"
      }
    ]
  },
  {
    "id": "day-2025-09-05",
    "date": "2025-09-05",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 118,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:28",
        "text": "我今天整完，明天就不做了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:28",
        "text": "我要好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:29",
        "text": "哦哦明天是周末"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:29",
        "text": "你可以休息休息"
      }
    ]
  },
  {
    "id": "day-2025-09-06",
    "date": "2025-09-06",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 123,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:01",
        "text": "好的好的，到公寓记得吃药"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:01",
        "text": "老板要带我们去吃饭"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:01",
        "text": "到宾馆"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:01",
        "text": "嗯嗯我这估计还得会儿了"
      }
    ]
  },
  {
    "id": "day-2025-09-07",
    "date": "2025-09-07",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 235,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:48",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:48",
        "text": "你先剪辑吧！我不打扰宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:48",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "天呐，姐姐刚刚跟我说，她帮我免掉了每个月 55$ 物业管理费"
      }
    ]
  },
  {
    "id": "day-2025-09-08",
    "date": "2025-09-08",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 285,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:53",
        "text": "现在迎合女权的宣传有点让我觉得不靠谱，感觉短效避孕药这两年都不太敢宣传了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:54",
        "text": "等我以后去正规三甲医院问就行了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:54",
        "text": "我了解的是2年内复通率80%，2年后复通率50%"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:54",
        "text": "好的"
      }
    ]
  },
  {
    "id": "day-2025-09-09",
    "date": "2025-09-09",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 451,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:21",
        "text": "我也头痛了🤕"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:30",
        "text": "我v你50，给宝宝酱吃点好的，这段时间工作太辛苦了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:30",
        "text": "五险一金要不要交"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:31",
        "text": "可以不交其实"
      }
    ]
  },
  {
    "id": "day-2025-09-10",
    "date": "2025-09-10",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 203,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:21",
        "text": "没事"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:10",
        "text": "北京鸣禾传媒有限公司 内容运营2025.6-2025.9"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:12",
        "text": "好的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:12",
        "text": "我今天开始执行这个"
      }
    ]
  },
  {
    "id": "day-2025-09-11",
    "date": "2025-09-11",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 233,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:10",
        "text": "肯定还是倾向的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:11",
        "text": "我之前其实也没怎么想明白，但我在上海连续工作一年的时候，真的会想要歇至少一周以上的时间"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:12",
        "text": "哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:12",
        "text": "认可"
      }
    ]
  },
  {
    "id": "day-2025-09-12",
    "date": "2025-09-12",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 35,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:45",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:21",
        "text": "要请我们吃饭。。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:21",
        "text": "[破涕为笑][破涕为笑]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:21",
        "text": "好家伙"
      }
    ]
  },
  {
    "id": "day-2025-09-13",
    "date": "2025-09-13",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 208,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:15",
        "text": "我赶紧把事做完"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:44",
        "text": "宝宝酱我把课表捋清楚了，明天16.20-18.10我在学校，18.10后可以和你北邮的朋友一起吃饭"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:39",
        "text": "天啊我岂不是天天吃"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:39",
        "text": "太好了"
      }
    ]
  },
  {
    "id": "day-2025-09-14",
    "date": "2025-09-14",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 36,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:43",
        "text": "我没有感觉天呐"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:43",
        "text": "宝宝酱你回想一下你和我的朋友们聊了啥"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:43",
        "text": "这么一想确实"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:43",
        "text": "全是他们提问工作呀"
      }
    ]
  },
  {
    "id": "day-2025-09-16",
    "date": "2025-09-16",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 6,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:57",
        "text": "宝宝酱睡了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:57",
        "text": "帮我投简历呀"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:25",
        "text": "嫩牛家潮汕牛肉火锅(青年路店)"
      }
    ]
  },
  {
    "id": "day-2025-09-17",
    "date": "2025-09-17",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 173,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:06",
        "text": "我中午都没饿，早上吃太饱了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:08",
        "text": "我们可以一起睡觉觉喽"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:32",
        "text": "到南京马上鼻子就开始不通气了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:32",
        "text": "真典"
      }
    ]
  },
  {
    "id": "day-2025-09-18",
    "date": "2025-09-18",
    "phase": "远行·相见",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 162,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:59",
        "text": "原来是这样，看来是为过审"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "不是，我觉得这种电影因为过审有改动是正常的，但是导演的逻辑有点问题。感觉像是731版肖申克的救赎。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:08",
        "text": "搞得像悬疑+恐怖，但没啥感觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:14",
        "text": "还好我只花了27"
      }
    ]
  },
  {
    "id": "day-2025-09-19",
    "date": "2025-09-19",
    "phase": "远行·相见",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 75,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:33",
        "text": "回去视频"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:33",
        "text": "我在外面吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:35",
        "text": "好滴~"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:06",
        "text": "最新的课表"
      }
    ]
  },
  {
    "id": "day-2025-09-20",
    "date": "2025-09-20",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 182,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "难过"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "要不下午别上课了，回去好好休息"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:04",
        "text": "吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:04",
        "text": "食堂还是划算的"
      }
    ]
  },
  {
    "id": "day-2025-09-21",
    "date": "2025-09-21",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 172,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:59",
        "text": "最近吃高热量太多了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:01",
        "text": "我不能跟宝宝酱吃火锅了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:02",
        "text": "好的宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:02",
        "text": "我也要注意，也许我也有脂肪肝"
      }
    ]
  },
  {
    "id": "day-2025-09-22",
    "date": "2025-09-22",
    "phase": "远行·相见",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 252,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:08",
        "text": "都是i 人"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:09",
        "text": "呼呼呼我要买个枕头睡觉😴这里都没有枕头"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:09",
        "text": "可以买个床"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:09",
        "text": "哈哈哈"
      }
    ]
  },
  {
    "id": "day-2025-09-23",
    "date": "2025-09-23",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 201,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:51",
        "text": "宝宝酱我睡喽，想着想着也能睡着"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "05:47",
        "text": "宝宝酱，我还是觉得，如果你工作很累很辛苦，可以考虑周末找人代课，或者作业随便写写，这没啥问题"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "05:48",
        "text": "我感觉我自己就是透支状态。我觉得丁老师很想委我以重任，但我没有好好爱惜自己的身体"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "07:19",
        "text": "早上好宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-09-24",
    "date": "2025-09-24",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 149,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:01",
        "text": "加油！"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:30",
        "text": "hhh好看的鸽子"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:31",
        "text": "我买了一辆电动自行车，以后每天骑车上班，估计下周到"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:32",
        "text": "目前放弃转租的想法了，搬家太累了"
      }
    ]
  },
  {
    "id": "day-2025-09-25",
    "date": "2025-09-25",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 164,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:12",
        "text": "做多少是多少，加油"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:07",
        "text": "好神奇啊，银白色就没有，深蓝色就有"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:18",
        "text": "宝酱！我查了新加坡没有官方折抵。。要不我11月回国带给宝酱帮我折"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:18",
        "text": "帮我卖"
      }
    ]
  },
  {
    "id": "day-2025-09-26",
    "date": "2025-09-26",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 269,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:50",
        "text": "嗯嗯，确实事情很多，也挺累"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:50",
        "text": "我要对接的人也很多，我其实比较怕说错话，而且我发现我这个建立初期，工作真的难啊，啥都要学"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:50",
        "text": "好在同事们还是愿意帮帮你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:51",
        "text": "我现在就像公司代表一样去找人和我们商务合作"
      }
    ]
  },
  {
    "id": "day-2025-09-27",
    "date": "2025-09-27",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 105,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "太好咯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "这几天辛苦你了，回去先休息一下"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:02",
        "text": "是啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:02",
        "text": "好累"
      }
    ]
  },
  {
    "id": "day-2025-09-28",
    "date": "2025-09-28",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 106,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "20:58",
        "text": "deepseek真会说话hhh"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:58",
        "text": "宝宝酱不用担心，我这边放松了，我喝完药就去洗漱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:05",
        "text": "我回来啦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:31",
        "text": "睡觉吗"
      }
    ]
  },
  {
    "id": "day-2025-09-29",
    "date": "2025-09-29",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 59,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:20",
        "text": "上午真的好困好困，但是睡了一会儿，下午效率上来了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:46",
        "text": "宝宝酱休息够了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:46",
        "text": "干活喽"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:47",
        "text": "嗯嗯，我已经干了两个小时多了"
      }
    ]
  },
  {
    "id": "day-2025-09-30",
    "date": "2025-09-30",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 290,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:35",
        "text": "[拥抱][拥抱][拥抱][调皮]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:42",
        "text": "没事没事，我们都休息休息，"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:42",
        "text": "出去玩也挺累的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:43",
        "text": "我主要是去睡觉"
      }
    ]
  },
  {
    "id": "day-2025-10-01",
    "date": "2025-10-01",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 269,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:15",
        "text": "果然人的关注点是不一样的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:16",
        "text": "等你以后来了就可以吃火锅了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:16",
        "text": "你还打算做饭吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:20",
        "text": "okok"
      }
    ]
  },
  {
    "id": "day-2025-10-02",
    "date": "2025-10-02",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 173,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "07:55",
        "text": "早上好呀"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:18",
        "text": "宝宝酱你是还在睡觉还是出事了？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:18",
        "text": "不是说要早起吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:47",
        "text": "我5点醒了一下"
      }
    ]
  },
  {
    "id": "day-2025-10-05",
    "date": "2025-10-05",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 51,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:52",
        "text": "嗯嗯，我这边还在等"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:52",
        "text": "好，辛苦宝宝了！"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:59",
        "text": "这个是实况图"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:59",
        "text": "你看能不能动"
      }
    ]
  },
  {
    "id": "day-2025-10-06",
    "date": "2025-10-06",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 227,
    "featured": true,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:26",
        "text": "呀我发现 ios26可以发长图了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:36",
        "text": "另外的确宝宝酱最近有一些压力和焦虑，因为我在客厅、宝宝酱的泳衣还有家里的床上地上都发现了不少头发，真是要好好休息啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:37",
        "text": "我之前在上海掉头发很多，但是最近好了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:46",
        "text": "刚刚在手动安装桌子"
      }
    ]
  },
  {
    "id": "day-2025-10-07",
    "date": "2025-10-07",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 249,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:42",
        "text": "饭量变小了，60元我一个人竟然吃不完，还剩半锅，正好合租的京东外卖大哥回来了，我听到他在洗碗，得知他要做饭，然后正好把剩余半锅给他了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:42",
        "text": "以后我俩儿吃饭我也知道该买多少了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:44",
        "text": "宝宝酱真是一个节省的人"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:46",
        "text": "真的很巧，不然就浪费了，我会有些心疼hhh"
      }
    ]
  },
  {
    "id": "day-2025-10-08",
    "date": "2025-10-08",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 128,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:18",
        "text": "我一开始还以为是我自己的英语水平 退化了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:21",
        "text": "好棒，不愧是宝宝酱，论文全是自己英语写的！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:27",
        "text": "因为它废话实在太多"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:27",
        "text": "然后又夸大自己的贡献"
      }
    ]
  },
  {
    "id": "day-2025-10-09",
    "date": "2025-10-09",
    "phase": "远行·相见",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 188,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:22",
        "text": "终于"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:54",
        "text": "是呀，中午还是要睡觉，在公司空调的威力下，我竟然睡着了，然后去体验了一波中医物理疗法感觉还ok"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:54",
        "text": "但是又不太相信了，因为网上说是骗子"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:56",
        "text": "ai 问诊？"
      }
    ]
  },
  {
    "id": "day-2025-10-10",
    "date": "2025-10-10",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 199,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:55",
        "text": "看来宝宝酱不冷了，都睡着了，真好呀，晚安😘"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "07:57",
        "text": "真的不冷啦！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:13",
        "text": "早安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:13",
        "text": "昨晚没睡着"
      }
    ]
  },
  {
    "id": "day-2025-10-11",
    "date": "2025-10-11",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 280,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:48",
        "text": "来回都是从上海浦东吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:49",
        "text": "好，从新加坡上海往返，2号/3号去，10号回。这样吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:49",
        "text": "嗯，如果可以的话 10 号最好是中午或者下午的航班，晚上到"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:49",
        "text": "因为我上午还要从北京 - 上海"
      }
    ]
  },
  {
    "id": "day-2025-10-12",
    "date": "2025-10-12",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:51",
        "text": "新加坡介绍大学生就业问题"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:01",
        "text": "我的宝宝酱，我们今天这里在哗啦啦下雨"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:03",
        "text": "早上好呀宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:03",
        "text": "我正起床开始干饭"
      }
    ]
  },
  {
    "id": "day-2025-10-13",
    "date": "2025-10-13",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 147,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:09",
        "text": "我爱你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:21",
        "text": "爱你，晚安睡觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:51",
        "text": "早安"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "07:57",
        "text": "早上好宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-10-14",
    "date": "2025-10-14",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 188,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:37",
        "text": "哈哈哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:38",
        "text": "我的实习生来了，我要开始工作了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:43",
        "text": "抱抱宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:44",
        "text": "好，我到实验室了"
      }
    ]
  },
  {
    "id": "day-2025-10-15",
    "date": "2025-10-15",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 190,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:09",
        "text": "中午好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:23",
        "text": "好好休息哦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:43",
        "text": "好滴"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:44",
        "text": "我一会儿睡一下"
      }
    ]
  },
  {
    "id": "day-2025-10-16",
    "date": "2025-10-16",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 232,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:51",
        "text": "我下次要记一下发车时间再走，不然在公交站等太久"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:52",
        "text": "辛苦了宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:09",
        "text": "总有一种滑稽感"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:12",
        "text": "哈哈哈"
      }
    ]
  },
  {
    "id": "day-2025-10-17",
    "date": "2025-10-17",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 148,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:48",
        "text": "这下是冲刺了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:39",
        "text": "宝宝酱，我可能是习惯了，我感觉好累好困啊，想回去睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:39",
        "text": "[流泪][流泪]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:43",
        "text": "我回去路上看看资料，下午回来就做"
      }
    ]
  },
  {
    "id": "day-2025-10-18",
    "date": "2025-10-18",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 250,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:36",
        "text": "以身试毒"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:38",
        "text": "其实我也可以在新加坡办post paid"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:42",
        "text": "只能如此了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:04",
        "text": "可爱的嘞"
      }
    ]
  },
  {
    "id": "day-2025-10-19",
    "date": "2025-10-19",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 73,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:08",
        "text": "想开始休息哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:19",
        "text": "哈哈哈，那就休息吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:42",
        "text": "我在剪指甲"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:42",
        "text": "宝酱睡了吗"
      }
    ]
  },
  {
    "id": "day-2025-10-20",
    "date": "2025-10-20",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 275,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "07:31",
        "text": "现在知道了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:11",
        "text": "虽然到不了情绪崩溃，但是就是会很低落，我把我的大部分时间都放在思索人生上面，所以科研和学习就无法投入"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:13",
        "text": "然后有了宝宝酱以后我们也是经历了一段比较激动和不稳定期，然后慢慢稳定下来，后来我身体也出了点问题，好在及时调整，然后才迎来我现在有一个理性的大脑状态，可以支持我把效率拉得很高"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:06",
        "text": "笑死我了我妈妈又让我转写音频了。这次太长了上传不上去"
      }
    ]
  },
  {
    "id": "day-2025-10-21",
    "date": "2025-10-21",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 175,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:40",
        "text": "但是总是错过"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:40",
        "text": "说明我们以后都要早点睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:49",
        "text": "Tschüss!"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:56",
        "text": "Tschüss!"
      }
    ]
  },
  {
    "id": "day-2025-10-22",
    "date": "2025-10-22",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 141,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:41",
        "text": "开完了，干别的活了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:42",
        "text": "好的好的，辛苦宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:16",
        "text": "宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:16",
        "text": "你还没下班吗"
      }
    ]
  },
  {
    "id": "day-2025-10-23",
    "date": "2025-10-23",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 85,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:19",
        "text": "0.7×5.5=3.85万"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:40",
        "text": "宝宝酱我今天可能要工作晚一点"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:57",
        "text": "嗯嗯没事"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:58",
        "text": "我刚收拾完"
      }
    ]
  },
  {
    "id": "day-2025-10-24",
    "date": "2025-10-24",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 130,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:02",
        "text": "好宝酱我现在看看"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:02",
        "text": "没事，宝宝酱可以工作"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:02",
        "text": "我的目标完成了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:02",
        "text": "哈哈哈"
      }
    ]
  },
  {
    "id": "day-2025-10-25",
    "date": "2025-10-25",
    "phase": "远行·相见",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 176,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:02",
        "text": "真的，因为基础太差了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:14",
        "text": "我打算回国之前至少达到 B1"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:15",
        "text": "然后回国以后3个月如果可以达到 B2"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:15",
        "text": "我明年就可以准备去德国玩了"
      }
    ]
  },
  {
    "id": "day-2025-10-26",
    "date": "2025-10-26",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 263,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:33",
        "text": "工作日基本都是晚上"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:33",
        "text": "或者我们以后可以早上打电话，互相看着开始刷牙洗脸开始一天的工作"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:33",
        "text": "周六周末我才有空"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:33",
        "text": "可以尝试尝试哈哈"
      }
    ]
  },
  {
    "id": "day-2025-10-27",
    "date": "2025-10-27",
    "phase": "远行·相见",
    "title": "把你照顾好",
    "theme": "care",
    "count": 176,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:18",
        "text": "起了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:19",
        "text": "起床以后心脏竟然不难受了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:23",
        "text": "睡饱睡好心事少 就不会心脏痛了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:01",
        "text": "学完了11课！"
      }
    ]
  },
  {
    "id": "day-2025-10-28",
    "date": "2025-10-28",
    "phase": "远行·相见",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 300,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "我靠这么离谱呢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "什么小 A 工作中遇到了一些问题，然后领导给她安排了另一个更好的同事小 B，请问最可能的原因是什么"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "额😑"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:05",
        "text": "小 A 因为整体环境原因被领导裁了，你认为可能原因是什么"
      }
    ]
  },
  {
    "id": "day-2025-10-29",
    "date": "2025-10-29",
    "phase": "远行·相见",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 158,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:14",
        "text": "我回去检查一下"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:14",
        "text": "对，我们这一周不要漏吃，这样子我来了也没事"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:14",
        "text": "嗯嗯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:14",
        "text": "下周五你就来了吗"
      }
    ]
  },
  {
    "id": "day-2025-10-30",
    "date": "2025-10-30",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 153,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:32",
        "text": "我也想你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:55",
        "text": "没供暖吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:59",
        "text": "吃药了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:59",
        "text": "宝酱"
      }
    ]
  },
  {
    "id": "day-2025-10-31",
    "date": "2025-10-31",
    "phase": "远行·相见",
    "title": "想念有了回声",
    "theme": "love",
    "count": 260,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:01",
        "text": "赶上了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:42",
        "text": "宝酱12点才能到家吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:49",
        "text": "宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:49",
        "text": "我到家了额"
      }
    ]
  },
  {
    "id": "day-2025-11-01",
    "date": "2025-11-01",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 156,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:21",
        "text": "早安"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:24",
        "text": "该吃饭了宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:27",
        "text": "我到实验室了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:27",
        "text": "过会去吃"
      }
    ]
  },
  {
    "id": "day-2025-11-02",
    "date": "2025-11-02",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 179,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:26",
        "text": "太可恶了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:32",
        "text": "笑死我了，主持人说，我们 LPL 第13次倒在了 T1 的脚下"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:53",
        "text": "这是我修的末日废土风"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:54",
        "text": "哈哈哈怎么有一股"
      }
    ]
  },
  {
    "id": "day-2025-11-03",
    "date": "2025-11-03",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:29",
        "text": "我没注意"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:32",
        "text": "是的，因为我回国挂不了外网了，很难受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:32",
        "text": "芒果"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:33",
        "text": "宝酱竟然不要椰子"
      }
    ]
  },
  {
    "id": "day-2025-11-04",
    "date": "2025-11-04",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:25",
        "text": "现在我在生图呢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:31",
        "text": "那我们 12:30 到 1 点聊一聊，1点之后我就准备走，2点的火车"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:31",
        "text": "爱你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:36",
        "text": "现在我可以登陆了，宝宝酱"
      }
    ]
  },
  {
    "id": "day-2025-11-05",
    "date": "2025-11-05",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 92,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:25",
        "text": "晚安宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:29",
        "text": "晚安！爱你😘"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:03",
        "text": "早上好"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:03",
        "text": "我去接种疫苗去"
      }
    ]
  },
  {
    "id": "day-2025-11-06",
    "date": "2025-11-06",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 214,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "21:19",
        "text": "你不需要理解"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:19",
        "text": "感觉你很难受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:19",
        "text": "你可以明天再来"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:19",
        "text": "我不难受"
      }
    ]
  },
  {
    "id": "day-2025-11-07",
    "date": "2025-11-07",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 65,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "06:14",
        "text": "我走了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:59",
        "text": "哇太好啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:00",
        "text": "我们到家先睡觉然后再吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:00",
        "text": "毕竟你睡得晚"
      }
    ]
  },
  {
    "id": "day-2025-11-10",
    "date": "2025-11-10",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 103,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:45",
        "text": "10点15开会"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:46",
        "text": "好的，辛苦宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:55",
        "text": "我今天是在静音车厢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "挺安静的"
      }
    ]
  },
  {
    "id": "day-2025-11-11",
    "date": "2025-11-11",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 146,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:24",
        "text": "Okok"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:25",
        "text": "用一下宝宝酱的美区app store"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:26",
        "text": "你用"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:30",
        "text": "Re112211"
      }
    ]
  },
  {
    "id": "day-2025-11-12",
    "date": "2025-11-12",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 199,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:39",
        "text": "好！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:39",
        "text": "啊都下进去了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:39",
        "text": "嗯嗯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:57",
        "text": "去程 11-13 北京 → 新加坡 07:00-17:15 MU5100-MU6049 返程 11-18 新加坡 → 北京 00:25-11:25 MU544-MU5129"
      }
    ]
  },
  {
    "id": "day-2025-11-13",
    "date": "2025-11-13",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 212,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:02",
        "text": "你把我的精力都抽走了！！"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:02",
        "text": "因为之前在公司的时候，每天都有很多很多的事情占据我的大脑，然后我就中午就睡不着觉了，没有办法安稳的睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:02",
        "text": "快过来还给我"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:02",
        "text": "哦哦好吧"
      }
    ]
  },
  {
    "id": "day-2025-11-14",
    "date": "2025-11-14",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 106,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:13",
        "text": "Haustiere = pets"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:48",
        "text": "谢谢宝宝酱，爱你🥰"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:10",
        "text": "宝宝酱晚安😴"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:21",
        "text": "他好可爱"
      }
    ]
  },
  {
    "id": "day-2025-11-15",
    "date": "2025-11-15",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 136,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:42",
        "text": "损失交通疫苗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:42",
        "text": "好，看看能要回多少吧，宝宝酱比较会这方面"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:43",
        "text": "我现在去还充电宝"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:44",
        "text": "好的"
      }
    ]
  },
  {
    "id": "day-2025-11-16",
    "date": "2025-11-16",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 267,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:37",
        "text": "对吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:38",
        "text": "我其实觉得，我们现在还有一个点要搞清楚，就是这只猫现在的情况，在我们买了保险以外，如果想要健康治愈，还需要多少后续花费"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:42",
        "text": "一个是花费一个是心力"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:42",
        "text": "它现在又蜷缩在那里一动不动了"
      }
    ]
  },
  {
    "id": "day-2025-11-17",
    "date": "2025-11-17",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 175,
    "featured": true,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:55",
        "text": "宝宝酱，我困了提前午休"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:07",
        "text": "我开始工作啦，宝宝酱好好休息，Nature 好好睡觉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:09",
        "text": "宝宝酱继续工作"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:09",
        "text": "说床底可能有虫子，可能会带到床上咬你"
      }
    ]
  },
  {
    "id": "day-2025-11-18",
    "date": "2025-11-18",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 95,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:59",
        "text": "我去跟师妹讨论一下她做什么哦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:59",
        "text": "抱抱宝酱，nature睡了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:14",
        "text": "板鸭趴"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:14",
        "text": "不知道睡了没"
      }
    ]
  },
  {
    "id": "day-2025-11-19",
    "date": "2025-11-19",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 112,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:38",
        "text": "明天开始我要严格执行早起，不能再晚睡了，现在我不到1点都睡不着了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:09",
        "text": "谢谢宝宝酱的支持，让我能沉下心探索一些新的东西"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:09",
        "text": "是外包还是"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:09",
        "text": "正式工"
      }
    ]
  },
  {
    "id": "day-2025-11-20",
    "date": "2025-11-20",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 240,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:42",
        "text": "我看不出语法"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:42",
        "text": "nature在睡觉，轻微打呼噜，鼻子不通气"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:57",
        "text": "hahah"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:57",
        "text": "我想喝奶茶了"
      }
    ]
  },
  {
    "id": "day-2025-11-21",
    "date": "2025-11-21",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 164,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:51",
        "text": "你还好吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:52",
        "text": "宝宝酱放心，我只是拿，Gemini的建议反串，然后继续用那套指令得出来完全相反的回答"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:54",
        "text": "okok"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:54",
        "text": "那我继续工作了"
      }
    ]
  },
  {
    "id": "day-2025-11-22",
    "date": "2025-11-22",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 272,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:28",
        "text": "连打3-5天针"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:28",
        "text": "我们的猫猫真的名字打了 Nature"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:28",
        "text": "过去打吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:28",
        "text": "多少钱啊"
      }
    ]
  },
  {
    "id": "day-2025-11-23",
    "date": "2025-11-23",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 130,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:12",
        "text": "谢谢宝酱，有你，我和nature都很幸运"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:15",
        "text": "是先有宝宝酱，才会有 Nature 才会能给我机会，让你们有这份幸运"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:44",
        "text": "也是拿到学生证了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:51",
        "text": "我累了，刚刚完成了导播的结课作业"
      }
    ]
  },
  {
    "id": "day-2025-11-24",
    "date": "2025-11-24",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 198,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:36",
        "text": "来回14公里"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:36",
        "text": "好吧，辛苦宝宝酱了，你不会是在海淀社区吧？"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:37",
        "text": "？？？？？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:37",
        "text": "我在常营社区接种的"
      }
    ]
  },
  {
    "id": "day-2025-11-25",
    "date": "2025-11-25",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 271,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:54",
        "text": "应该这样说"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:54",
        "text": "千万不要认为对方能力强，就能很好的沟通交流，得看双方是不是一个层级，是否有共同的语言空间，尤其是工作领域，必须是有交集才行，而你们是因为友情的交集，所以一旦合作就容易起冲突"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:54",
        "text": "宝宝酱你看这是我重新做的数据集"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:55",
        "text": "哦不对这个没有对照"
      }
    ]
  },
  {
    "id": "day-2025-11-26",
    "date": "2025-11-26",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 285,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:30",
        "text": "我就看了一点点"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:31",
        "text": "我觉得如果我们以后真有孩子然后养不起了，你也可以快速找到"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:36",
        "text": "我不要孩子"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:36",
        "text": "太要命了"
      }
    ]
  },
  {
    "id": "day-2025-11-27",
    "date": "2025-11-27",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 160,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:16",
        "text": "怎么说"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "06:43",
        "text": "上机了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:53",
        "text": "落地上海机场了，滑行中"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:46",
        "text": "可恶卫生间竟然要排队"
      }
    ]
  },
  {
    "id": "day-2025-11-29",
    "date": "2025-11-29",
    "phase": "日常·成家",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 1,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "20:32",
        "text": "照片"
      }
    ]
  },
  {
    "id": "day-2025-12-01",
    "date": "2025-12-01",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 4,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "火锅说要等到1点"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "我们看看另一家烧烤"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:21",
        "text": "没事"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:21",
        "text": "好呀"
      }
    ]
  },
  {
    "id": "day-2025-12-03",
    "date": "2025-12-03",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 74,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:54",
        "text": "我们很好的处理好了意外"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:54",
        "text": "上飞机啦？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:55",
        "text": "我为了赶时间，体验了一次sky triain"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:55",
        "text": "啊哈哈哈哈"
      }
    ]
  },
  {
    "id": "day-2025-12-04",
    "date": "2025-12-04",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:27",
        "text": "竟然开始觉得自己的房间太小了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:27",
        "text": "没事，那就好好休息，我今天没办法必须要写完那个 5000 字的报告"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:27",
        "text": "呃呃"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:27",
        "text": "觉得你的🛏️好"
      }
    ]
  },
  {
    "id": "day-2025-12-05",
    "date": "2025-12-05",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 150,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "20:51",
        "text": "身体能休息，头脑过度活跃"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:51",
        "text": "是啊，宝酱好好休息"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:54",
        "text": "不用担心，我现在吃饱饭了，不能立刻睡觉，我现在开始改作品集"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:54",
        "text": "我们来安全着陆"
      }
    ]
  },
  {
    "id": "day-2025-12-06",
    "date": "2025-12-06",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:53",
        "text": "我确实有点迷茫，因为我把任务分解下去，发现要做的很多很多"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:56",
        "text": "我想做一个Nature从一只傻猫，努力学习发Nature的故事"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:56",
        "text": "哈哈哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:56",
        "text": "[强]好故事我试试"
      }
    ]
  },
  {
    "id": "day-2025-12-07",
    "date": "2025-12-07",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 91,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:32",
        "text": "认同"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:32",
        "text": "我每次看起来陷入低谷，其实都是我的工作状态被各种各样的事情逸散了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:33",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:33",
        "text": "所以我说我不应该跟你吵，我应该写作"
      }
    ]
  },
  {
    "id": "day-2025-12-08",
    "date": "2025-12-08",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 208,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:23",
        "text": "我下午吃了泡面"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:23",
        "text": "nature在睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:24",
        "text": "好的好的，宝宝酱胳膊今天痛吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:24",
        "text": "不痛"
      }
    ]
  },
  {
    "id": "day-2025-12-09",
    "date": "2025-12-09",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 174,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:31",
        "text": "看来他不喜欢穿衣服"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:11",
        "text": "微信读书现在很有意思，你订阅了一本书以后，不出半天就有人给你发电子版"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:11",
        "text": "为什么我没收到"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:12",
        "text": "不知道，好几次了"
      }
    ]
  },
  {
    "id": "day-2025-12-10",
    "date": "2025-12-10",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:05",
        "text": "晚安，我现在去上厕所然后睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:28",
        "text": "好的宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:58",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:29",
        "text": "昨天睡晚了"
      }
    ]
  },
  {
    "id": "day-2025-12-11",
    "date": "2025-12-11",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 58,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:31",
        "text": "哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:32",
        "text": "以后只给我认可的公司看，让他们申请"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:49",
        "text": "没有"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:49",
        "text": "我调整到了下周，因为那个比较远"
      }
    ]
  },
  {
    "id": "day-2025-12-12",
    "date": "2025-12-12",
    "phase": "日常·成家",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 142,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:35",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:45",
        "text": "你研究"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:45",
        "text": "我发现看课真的很快"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:45",
        "text": "我想和你打个电话亲你一下"
      }
    ]
  },
  {
    "id": "day-2025-12-13",
    "date": "2025-12-13",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:04",
        "text": "宝酱下午要考试对吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:05",
        "text": "那我们下午一起去，我也去工作"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:29",
        "text": "哎呀，刚刚去八卦前司变动了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:45",
        "text": "前司？"
      }
    ]
  },
  {
    "id": "day-2025-12-14",
    "date": "2025-12-14",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 89,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "我现在想回家了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:08",
        "text": "行，回去休息一下然后再继续"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:09",
        "text": "马上我把代码改完"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:43",
        "text": "感觉现在看小时候的电视剧啥的真别有一番感觉"
      }
    ]
  },
  {
    "id": "day-2025-12-15",
    "date": "2025-12-15",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 155,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "21:10",
        "text": "本身也是我欠的人情，其实与你无关"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:57",
        "text": "晚安宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:57",
        "text": "亲亲"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:01",
        "text": "真有市场啊"
      }
    ]
  },
  {
    "id": "day-2025-12-16",
    "date": "2025-12-16",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 85,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:59",
        "text": "我也做噩梦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:01",
        "text": "等你ddl赶完了，就是等成果的时候"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:01",
        "text": "以后我们都少熬夜，让你的身体好恢复精力"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:02",
        "text": "我下午2点"
      }
    ]
  },
  {
    "id": "day-2025-12-17",
    "date": "2025-12-17",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 128,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:06",
        "text": "再听听下面这个额版本"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:25",
        "text": "先听了李健版本，后来又听梁咏琪的，又听李健的，大概明白明白宝宝酱为什么会被触动"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:25",
        "text": "我发现我喝完咖啡就比较容易激动"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:26",
        "text": "压力大也比较容易激动"
      }
    ]
  },
  {
    "id": "day-2025-12-18",
    "date": "2025-12-18",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:22",
        "text": "好的好的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:22",
        "text": "宝宝酱回去我们视频"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:07",
        "text": "我回来啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:13",
        "text": "你睡了吗"
      }
    ]
  },
  {
    "id": "day-2025-12-19",
    "date": "2025-12-19",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 109,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:16",
        "text": "晚安，我要早起入职体检，我先睡啦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:31",
        "text": "你从中理解到什么"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:32",
        "text": "宝宝酱现在在工作嘛"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:26",
        "text": "我竟然用两句话就说清楚了问题和背景"
      }
    ]
  },
  {
    "id": "day-2025-12-20",
    "date": "2025-12-20",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 236,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:30",
        "text": "届时再议"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:30",
        "text": "我觉得有了 AI 世界以后我们的大脑似乎变得不那么灵光了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:30",
        "text": "我们更多变成了怎么用"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:30",
        "text": "追求效率"
      }
    ]
  },
  {
    "id": "day-2025-12-21",
    "date": "2025-12-21",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 147,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:27",
        "text": "这表情不错"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:45",
        "text": "不是我不能做，而是我想做到最好，所以，那条视频对我的启发就是，不用要hard模式消耗自己"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:47",
        "text": "甚至四面和老板交锋，我也指导如何去表达我的工作态度了，我想要身心平衡，心流状态的那种，easy模式大后期，而不是过度消耗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:47",
        "text": "甚至我觉得自己可以开始做自媒体了，因为我做着做着，就会精进，而不是一开始就要精进"
      }
    ]
  },
  {
    "id": "day-2025-12-22",
    "date": "2025-12-22",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 137,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:47",
        "text": "哈哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:48",
        "text": "可爱宝酱晚安😴"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:49",
        "text": "我都开始看大司马的搞笑视频了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:49",
        "text": "晚安"
      }
    ]
  },
  {
    "id": "day-2025-12-23",
    "date": "2025-12-23",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 119,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:09",
        "text": "这个词挺有意思"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:09",
        "text": "宝宝酱准备睡觉了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:09",
        "text": "没有"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:09",
        "text": "我在看测试gpt5.2命理解读水平"
      }
    ]
  },
  {
    "id": "day-2025-12-24",
    "date": "2025-12-24",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 87,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:49",
        "text": "晚安宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:54",
        "text": "作业写好了，现在睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:57",
        "text": "爱你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:57",
        "text": "我们都辛苦"
      }
    ]
  },
  {
    "id": "day-2025-12-25",
    "date": "2025-12-25",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 96,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:14",
        "text": "晚安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:14",
        "text": "晚安宝宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:14",
        "text": "我上个厕所就睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:14",
        "text": "你早点休息哦"
      }
    ]
  },
  {
    "id": "day-2025-12-26",
    "date": "2025-12-26",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 127,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:20",
        "text": "我确实是在两系统交界"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:21",
        "text": "宝宝酱变成了规则的观察者，系统的构建者，学会了在自我反思中构建和成长，这是一种内生的，不靠外在鼓励或者环境影响的，强大内在力量，这个足以支持你去任何一个城市"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:23",
        "text": "我觉得美育是很重要的，宝宝酱从一开始听李健到后来听rap，到后来听回李健，慢慢的开始听小品，说明宝宝酱在关注自己内在的身心了，回归到生命力本源，回归到对美的感受和创造力的培养上，这个和理性规则相碰撞"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:24",
        "text": "宝酱只是不知道如何处理好这两者，而我也不知道，我也在探索，我不想成为一个“工具性”的人，我很多时候不知道做什么是对的，但是我有一个清晰的边界就是我知道我不想做什么"
      }
    ]
  },
  {
    "id": "day-2025-12-27",
    "date": "2025-12-27",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "02:10",
        "text": "@观星炖鱼厨师长: 《论我们自动化专业的科创都在研究什么》[躺平][躺平][躺平]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:10",
        "text": "这个我真会做"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:10",
        "text": "太抽象了hhh"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:10",
        "text": "哈吉米南北绿豆"
      }
    ]
  },
  {
    "id": "day-2025-12-28",
    "date": "2025-12-28",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 104,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:43",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:52",
        "text": "我特别喜欢他尾奏部分，唱歌的时候就像是主讲人讲完一个故事，然后结尾是用乐器给你展示故事的结尾，无须语言诉说"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:54",
        "text": "因为他的歌摇滚比较多，摇滚乐有一个问题就是它只能呈现一个面的情绪，不像抒情歌曲能讲一个完整的故事，所以把情绪给你烘托到位了以后，加上很长一段尾奏，就有一种把情绪慢慢讲清楚了的感觉，所以我很喜欢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:43",
        "text": "呜呜呜宝酱"
      }
    ]
  },
  {
    "id": "day-2025-12-29",
    "date": "2025-12-29",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 104,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:06",
        "text": "嗯嗯，还有3h下班"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:07",
        "text": "我等着回去吃饭睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:45",
        "text": "我终于把速度的问题解决了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:46",
        "text": "我笑飞了，我看到付航的脱口秀，想到宝宝酱当时在安检口被问，然后你说 come to enjoy，"
      }
    ]
  },
  {
    "id": "day-2025-12-30",
    "date": "2025-12-30",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 254,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:19",
        "text": "我还是早起吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:23",
        "text": "宝宝酱你先去上班把"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:23",
        "text": "我们晚上再讨论"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:23",
        "text": "爱你"
      }
    ]
  },
  {
    "id": "day-2025-12-31",
    "date": "2025-12-31",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 116,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:58",
        "text": "疯狂测试"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:59",
        "text": "极限挑战，辛苦了宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:17",
        "text": "哦你下班了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:17",
        "text": "我回家了"
      }
    ]
  },
  {
    "id": "day-2026-01-01",
    "date": "2026-01-01",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 100,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:34",
        "text": "宝宝酱！！！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:40",
        "text": "宝宝酱，你先睡一会儿吧，等你醒来我们讨论一下怎么办"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:47",
        "text": "不要为此事担忧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:48",
        "text": "没有，只是担心你睡不好"
      }
    ]
  },
  {
    "id": "day-2026-01-02",
    "date": "2026-01-02",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 61,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:49",
        "text": "Nature睡好香"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:51",
        "text": "我们今天是工作日"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:23",
        "text": "我怎么帮你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:24",
        "text": "啊你砸了"
      }
    ]
  },
  {
    "id": "day-2026-01-03",
    "date": "2026-01-03",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 184,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:44",
        "text": "我在对我最后一次校对之前要做的事情做梳理，准备这三天做完。最后一天截稿的时候只做小修"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:43",
        "text": "我今天把我的工作整理梳理完了，而且我发现之前为什么服务器一直登陆不上去了，并发把 GPU 内存占满了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:44",
        "text": "难怪"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:44",
        "text": "这个跑量太大了"
      }
    ]
  },
  {
    "id": "day-2026-01-04",
    "date": "2026-01-04",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 161,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:46",
        "text": "等你来，教我怎么跑代码，以后我帮你做实验"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:09",
        "text": "我现在今天下午，今天晚上，明天下午，明天晚上，后天下午。一共还有5个工作周期，我得算算我怎么把论文完成"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:10",
        "text": "我下午去助播"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:06",
        "text": "终于发现了为什么总是卡住的 bug。"
      }
    ]
  },
  {
    "id": "day-2026-01-05",
    "date": "2026-01-05",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 81,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:42",
        "text": "哦哦好的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:42",
        "text": "辛苦宝宝酱，这么晚还要去吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:43",
        "text": "刚刚都在和她讲东西"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:43",
        "text": "等你回来我再跟你说"
      }
    ]
  },
  {
    "id": "day-2026-01-06",
    "date": "2026-01-06",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 152,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:03",
        "text": "我现在在工作了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:05",
        "text": "你工作吧[玫瑰][玫瑰][呲牙][呲牙]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:10",
        "text": "没有，我今天反倒是没有什么打游戏的欲望"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:55",
        "text": "宝酱加油"
      }
    ]
  },
  {
    "id": "day-2026-01-07",
    "date": "2026-01-07",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 88,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:34",
        "text": "是呀是呀，都是血的教训"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:37",
        "text": "发现有些时候不是员工不想改，是工作量大，是流程问题，是信息不透明，是人力有限"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:37",
        "text": "不是个人原因是物质原因"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:39",
        "text": "是组织原因"
      }
    ]
  },
  {
    "id": "day-2026-01-08",
    "date": "2026-01-08",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 82,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:07",
        "text": "又要加班了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:07",
        "text": "工作问题太多了，直播可以让我在别的公司透口气"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:07",
        "text": "那你明天请假吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:08",
        "text": "明天好像要开会，我想想"
      }
    ]
  },
  {
    "id": "day-2026-01-09",
    "date": "2026-01-09",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 101,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:20",
        "text": "今天飞机上做"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:20",
        "text": "好辛苦宝宝酱了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:23",
        "text": "我吃一碗面"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:24",
        "text": "时间还早"
      }
    ]
  },
  {
    "id": "day-2026-01-11",
    "date": "2026-01-11",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 22,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:21",
        "text": "宝酱擦百多邦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:01",
        "text": "猫藓没完全好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:01",
        "text": "哦哦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:01",
        "text": "不能打"
      }
    ]
  },
  {
    "id": "day-2026-01-12",
    "date": "2026-01-12",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 134,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:28",
        "text": "到公司了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:40",
        "text": "来来来"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:40",
        "text": "我们一起先去吃饭再回家吧，你有什么想吃的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:40",
        "text": "老火锅？"
      }
    ]
  },
  {
    "id": "day-2026-01-13",
    "date": "2026-01-13",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 194,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:47",
        "text": "闪送费93，是否要顺丰明天到"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:47",
        "text": "但是我们明天 9 点半的飞机"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:48",
        "text": "那我就闪送了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:48",
        "text": "嗯嗯"
      }
    ]
  },
  {
    "id": "day-2026-01-14",
    "date": "2026-01-14",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 90,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:56",
        "text": "让他睡"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:58",
        "text": "嗯嗯，今天中午开会差点睡着，我今天回去睡觉应该会很快入睡"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:24",
        "text": "我到家啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:34",
        "text": "好滴宝宝酱我七点才下班"
      }
    ]
  },
  {
    "id": "day-2026-01-15",
    "date": "2026-01-15",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 62,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:14",
        "text": "我不加班"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:14",
        "text": "我们可以从布达佩斯一路向西，先去奥地利维也纳，然后往北看一看捷克的布拉格，然后再往西去德国慕尼黑，往南路过瑞士，再到意大利米兰，最后到法国，去摩纳哥结束"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:15",
        "text": "[嘿哈][嘿哈]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:13",
        "text": "哇你都想好啦"
      }
    ]
  },
  {
    "id": "day-2026-01-16",
    "date": "2026-01-16",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 294,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:45",
        "text": "[捂脸][捂脸][捂脸]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:45",
        "text": "我们以后可以一起唱这个"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:32",
        "text": "我还差20分钟才下班"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:37",
        "text": "你把这个给你的GPT输入看看"
      }
    ]
  },
  {
    "id": "day-2026-01-17",
    "date": "2026-01-17",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 172,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:35",
        "text": "应该是从之前的狼人杀想到的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:37",
        "text": "以后我们也去玩"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:37",
        "text": "玩啥"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:37",
        "text": "狼人杀吗"
      }
    ]
  },
  {
    "id": "day-2026-01-18",
    "date": "2026-01-18",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 186,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:52",
        "text": "然后回家"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:52",
        "text": "睡觉，24上班"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:52",
        "text": "可以是可以"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:52",
        "text": "对了"
      }
    ]
  },
  {
    "id": "day-2026-01-19",
    "date": "2026-01-19",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 220,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:10",
        "text": "但是过年和爱人一起，也避开寒冷，是件好事"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:11",
        "text": "其实还好，2000 + 房租 2400 + 照顾 nature 1000 + 给父母转 2000 + 4000 来回飞机票 = 12000 左右"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:11",
        "text": "好吧不好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:11",
        "text": "你还有 3000 ，这还不算交税"
      }
    ]
  },
  {
    "id": "day-2026-01-20",
    "date": "2026-01-20",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 179,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:30",
        "text": "我决定晚上穿睡衣睡觉，可能是肚子着凉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:34",
        "text": "一人公司需要满足几个条件，即使自己生病住院，依然玩得转；一个人需要有多方面的反思能力，尤其是清楚的知道自己擅长什么不擅长什么"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:35",
        "text": "所以方向确实很少，"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:35",
        "text": "但值得探索的点还是很多的"
      }
    ]
  },
  {
    "id": "day-2026-01-21",
    "date": "2026-01-21",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 180,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:55",
        "text": "我今天听了很多首葵因的歌。。"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:56",
        "text": "我今天下午就安心和宝宝酱聊天"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:56",
        "text": "挺好的，但很多我听不懂"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:56",
        "text": "中午已经开完会了"
      }
    ]
  },
  {
    "id": "day-2026-01-22",
    "date": "2026-01-22",
    "phase": "日常·成家",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 329,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:39",
        "text": "聪明宝酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:39",
        "text": "我也在吃午饭了，你的牛角包像是飞机餐"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:39",
        "text": "是啊太少了我都没吃饱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:40",
        "text": "我再问包容呢"
      }
    ]
  },
  {
    "id": "day-2026-01-23",
    "date": "2026-01-23",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 157,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:51",
        "text": "现在不疼了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:51",
        "text": "宝宝酱我们以后不要吃便宜的，你一天 100"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:52",
        "text": "肠胃消耗是很难回来的，我的前车之鉴，，"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:52",
        "text": "25呢"
      }
    ]
  },
  {
    "id": "day-2026-01-24",
    "date": "2026-01-24",
    "phase": "日常·成家",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 155,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:24",
        "text": "no不要小金毛"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:24",
        "text": "就是让我想象 nature如何一天把你的梦中情房弄乱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:25",
        "text": "现在nature必须要听我的话"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:25",
        "text": "胆子太大了竟然睡我枕头"
      }
    ]
  },
  {
    "id": "day-2026-01-25",
    "date": "2026-01-25",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 56,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:31",
        "text": "宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:31",
        "text": "我一直送，赢了3局，输了一局"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:32",
        "text": "[捂脸]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:54",
        "text": "我现在在吃饭"
      }
    ]
  },
  {
    "id": "day-2026-01-26",
    "date": "2026-01-26",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 182,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:05",
        "text": "[流泪]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:10",
        "text": "我今天工作完成了，我可以安心回去睡觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:16",
        "text": "你才走吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:16",
        "text": "是的"
      }
    ]
  },
  {
    "id": "day-2026-01-27",
    "date": "2026-01-27",
    "phase": "日常·成家",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 362,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:54",
        "text": "复杂啥"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:54",
        "text": "我要吃饭，如果他不回复我，就算了，那你就正常的去他的邮箱去发文件，表达尊敬然后投稿，我的目的就是了解清楚了合作和报价"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:54",
        "text": "本来页应该是我加人家呀，是我要投稿，"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:54",
        "text": "因为不懂学术圈，怕冲撞了别人"
      }
    ]
  },
  {
    "id": "day-2026-01-28",
    "date": "2026-01-28",
    "phase": "日常·成家",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 176,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "这个 up 讲的很有逻辑"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:18",
        "text": "把我注意力吸引走了，因为讲到了宝宝酱之前一直说我的问题，不能太理性"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:54",
        "text": "理性能让我们有效率，让外部更可控，但是在亲密关系中，会像开会复盘和评审"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:55",
        "text": "理性是系统化和结构性的感性，感性是理性的前段借口，，需要大量的感受来去让人回到生命本能，体验美学体验很多在理性看来非最优的东西，唯有不断积累新的感性材料才能升华归纳完善打破理性，新自我会更加强大和包容"
      }
    ]
  },
  {
    "id": "day-2026-01-29",
    "date": "2026-01-29",
    "phase": "日常·成家",
    "title": "想念有了回声",
    "theme": "love",
    "count": 211,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:25",
        "text": "我先工作啦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:26",
        "text": "[呲牙]不好意思又和宝宝酱聊了这么多"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:26",
        "text": "嘿嘿你工作吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:26",
        "text": "没事"
      }
    ]
  },
  {
    "id": "day-2026-01-30",
    "date": "2026-01-30",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 139,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:58",
        "text": "困得不行"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:59",
        "text": "嗯嗯，好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:00",
        "text": "没有图哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:00",
        "text": "[强]我发条圈"
      }
    ]
  },
  {
    "id": "day-2026-01-31",
    "date": "2026-01-31",
    "phase": "日常·成家",
    "title": "把你照顾好",
    "theme": "care",
    "count": 95,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:23",
        "text": "宝酱太困啦，好好休息吧，晚安，爱你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:46",
        "text": "睡醒了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:46",
        "text": "嗯嗯我要睡了，"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:46",
        "text": "晚安"
      }
    ]
  },
  {
    "id": "day-2026-02-01",
    "date": "2026-02-01",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 164,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "03:31",
        "text": "以后对宝酱柔软一点 get~"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "03:45",
        "text": "nature拉屎真臭，我要去铲屎然后睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:56",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:06",
        "text": "早上好宝宝酱"
      }
    ]
  },
  {
    "id": "day-2026-02-02",
    "date": "2026-02-02",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 283,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:20",
        "text": "算了不要影响彼此一大早的心情，我不该生气"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:23",
        "text": "以后如果涉及双方都要使用的，我听你的意见，如果是我自己的，我只参考，不动摇决策"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:28",
        "text": "不好意思宝酱我刚刚看到，我才出门刚上车🚌"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:29",
        "text": "谢谢宝酱[流泪]"
      }
    ]
  },
  {
    "id": "day-2026-02-03",
    "date": "2026-02-03",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 310,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:26",
        "text": "ok"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:28",
        "text": "所以宝宝酱进入公司以后，会真实的感受到，有限资源、有限团队情况下，很多问题就推不下去了，能做的视角就会很有限。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:30",
        "text": "因为，宝宝酱其实并没有带一个，大多数人都比你认知落后的团队的经验，或者说，在有限的空间里做出一个实实在在的东西来，你更渴望一种理想化的空间"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:31",
        "text": "这就产生矛盾了，当然这是做工程的视角"
      }
    ]
  },
  {
    "id": "day-2026-02-04",
    "date": "2026-02-04",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 121,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:41",
        "text": "吃好次的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:41",
        "text": "给nature也喂一点"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:56",
        "text": "喂啦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:59",
        "text": "好滴宝宝酱吃好吃的！！！"
      }
    ]
  },
  {
    "id": "day-2026-02-05",
    "date": "2026-02-05",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 122,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "22:08",
        "text": "我还是小女孩儿"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:08",
        "text": "你一直不回我，我以为你回家路上出啥事了呢"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:08",
        "text": "可恶的微信"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:09",
        "text": "哈哈哈"
      }
    ]
  },
  {
    "id": "day-2026-02-06",
    "date": "2026-02-06",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 191,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:00",
        "text": "我回家再跑一天"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:50",
        "text": "唉我想起来当时我们在上海的时候，有个同学程序写错批量调用重复了 1000 次，干掉了丁老师几万块钱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:50",
        "text": "相比之下我们损失还好"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:52",
        "text": "嗯嗯汲取经验教训了"
      }
    ]
  },
  {
    "id": "day-2026-02-07",
    "date": "2026-02-07",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 74,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:31",
        "text": "我吃完了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:31",
        "text": "想你咯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:37",
        "text": "我在等剪头发"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:45",
        "text": "孩子睡了"
      }
    ]
  },
  {
    "id": "day-2026-02-08",
    "date": "2026-02-08",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:24",
        "text": "别整得那么可怜的表情包"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:28",
        "text": "这是宝宝酱的表情包"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:46",
        "text": "哎呀呀那么可怜的表情包"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:14",
        "text": "宝酱我去买自取，自动猫砂盆"
      }
    ]
  },
  {
    "id": "day-2026-02-09",
    "date": "2026-02-09",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 295,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:24",
        "text": "这个模型看着还挺好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:29",
        "text": "宝宝酱我们下次好用的话，先买最便宜的套餐，用完以后觉得好，再买贵的哈"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:29",
        "text": "虽然可以报销，但是万一不可以，就还是挺麻烦的，咱自己就吃亏了不是"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:30",
        "text": "我觉得我对国际支付这方面对东西不是很理解"
      }
    ]
  },
  {
    "id": "day-2026-02-10",
    "date": "2026-02-10",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 168,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:38",
        "text": "了解了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:41",
        "text": "对，我也很同情nature的遭遇，我觉得我们能做的动作只有，1把nature照顾好，2学习法律知识，将来不被这个市场坑，或者去推动立法"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:44",
        "text": "嗯嗯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:45",
        "text": "不卖nature了"
      }
    ]
  },
  {
    "id": "day-2026-02-11",
    "date": "2026-02-11",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 267,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:52",
        "text": "我现在就去订阅会员，然后提报销"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:01",
        "text": "宝宝酱你等着，你来新加坡看我怎么榨干你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:02",
        "text": "看我睾酮旺盛"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:06",
        "text": "[流泪]我不知道CVC"
      }
    ]
  },
  {
    "id": "day-2026-02-12",
    "date": "2026-02-12",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 363,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:20",
        "text": "哈哈没事的宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:20",
        "text": "我们宽容一些，这个工作本来就是抨击性质的，引起冲突和讨论是正常的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:21",
        "text": "嗯嗯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:21",
        "text": "然后我就给你花了38买1000阅读和50爱心"
      }
    ]
  },
  {
    "id": "day-2026-02-13",
    "date": "2026-02-13",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 164,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:02",
        "text": "Maarten Witteveen是manus的cto"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:07",
        "text": "会开完了，我现在已经开始把自己的职能收缩到只干执行了，以后每天就想着，平安度过一天，无事发生就ok，然后自己做自己的创意，成为各大平台的超创，完成公司的要求，就酱[呲牙]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:22",
        "text": "谢谢酱酱的妈妈，芒果好吃！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:23",
        "text": "太棒啦"
      }
    ]
  },
  {
    "id": "day-2026-02-14",
    "date": "2026-02-14",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 110,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:58",
        "text": "🥹好吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:58",
        "text": "辛苦宝宝酱了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:59",
        "text": "回去消毒"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:59",
        "text": "是呀我在等车回去"
      }
    ]
  },
  {
    "id": "day-2026-02-15",
    "date": "2026-02-15",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 44,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:04",
        "text": "哇哇哇哇"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:04",
        "text": "我落地了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:04",
        "text": "这么快就两点了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "02:04",
        "text": "滑行中"
      }
    ]
  },
  {
    "id": "day-2026-02-16",
    "date": "2026-02-16",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 17,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:24",
        "text": "但是别人都不喝白酒，就他喝。。我觉得有种可能性他就是要醉，可能太孤僻了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:26",
        "text": "他如果喝出问题了，我们都有责任"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:26",
        "text": "问问有没有氯雷他定片呗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:27",
        "text": "我悄悄给王凯说一下"
      }
    ]
  },
  {
    "id": "day-2026-02-17",
    "date": "2026-02-17",
    "phase": "异地·并肩",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 4,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:03",
        "text": "2分32"
      }
    ]
  },
  {
    "id": "day-2026-02-19",
    "date": "2026-02-19",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 37,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:39",
        "text": "我0.55开始登机"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:39",
        "text": "现在腰酸"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:43",
        "text": "好，你找个地方休息休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:44",
        "text": "我还有7站左右"
      }
    ]
  },
  {
    "id": "day-2026-02-20",
    "date": "2026-02-20",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 214,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:06",
        "text": "终于到了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:06",
        "text": "辛苦酱酱，先回去睡觉吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:17",
        "text": "我在打扫房间呢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:18",
        "text": "哦哦"
      }
    ]
  },
  {
    "id": "day-2026-02-21",
    "date": "2026-02-21",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 108,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:10",
        "text": "打车送过来花20，相当于500"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:12",
        "text": "买了自动猫砂盆还要买矿砂和猫砂袋，幸好矿砂比较便宜，希望nature能适应这个猫砂盆，然后让我工作期间自动铲屎，加猫砂，就不用那么辛苦的铲屎了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:13",
        "text": "为娘真不容易，还要带他去做绝育，等到4月就去做"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:37",
        "text": "确实大"
      }
    ]
  },
  {
    "id": "day-2026-02-22",
    "date": "2026-02-22",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 96,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:04",
        "text": "我是小nature"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:30",
        "text": "晚安早点休息，今天辛苦了，酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:30",
        "text": "吓死了以为是酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:31",
        "text": "看评论第一条"
      }
    ]
  },
  {
    "id": "day-2026-02-23",
    "date": "2026-02-23",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 152,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:23",
        "text": "没事没事酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:23",
        "text": "我的目标是6月找到月薪两万的工作，尽快还清债务，这样我们之间就不存在债务关系了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:24",
        "text": "我打算花一个月时间寻找，同时从上班开始积累新的技能经验"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:24",
        "text": "4月离职我要攒够3万"
      }
    ]
  },
  {
    "id": "day-2026-02-24",
    "date": "2026-02-24",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 258,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:28",
        "text": "md可恶这么快我的ideal的独特性就没了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:28",
        "text": "宝宝酱，你是学生，以后顺丰快递，用学生优惠可以省钱[呲牙]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:39",
        "text": "完了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:39",
        "text": "Nature挂了"
      }
    ]
  },
  {
    "id": "day-2026-02-25",
    "date": "2026-02-25",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 235,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:07",
        "text": "OK"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:12",
        "text": "酱酱你买的很多服务是工具式的交互平台，是面向用户的；我现在很多需求是面向开发者的，所以我们要合计一下，也不能花公司太多钱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:15",
        "text": "我正在转开发"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:15",
        "text": "在学习了"
      }
    ]
  },
  {
    "id": "day-2026-02-26",
    "date": "2026-02-26",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 543,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:54",
        "text": "我中间在睡觉，现在用了 20%"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:54",
        "text": "说明我如果一直工作的话，大概可以用到 0.5M /tokens 左右"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:55",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:55",
        "text": "我现在去锻炼 + 吃饭，然后我吃饭的时候看你给的后面的链接，"
      }
    ]
  },
  {
    "id": "day-2026-02-27",
    "date": "2026-02-27",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 379,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:28",
        "text": "连网络都出问题"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:15",
        "text": "Nature 还说这个电影它看不懂，但它觉得是我考虑的不对，让我再多想想"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:17",
        "text": "Nature，咱不打扰妈妈工作了，好不好，妈妈一天一天可辛苦了，咱给妈妈准备点好吃的！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:17",
        "text": "【Nature】：喵喵喵"
      }
    ]
  },
  {
    "id": "day-2026-02-28",
    "date": "2026-02-28",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 116,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:55",
        "text": "酱酱晚安，爱你😘"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:59",
        "text": "报道成功了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:50",
        "text": "好耶，找过老师了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:27",
        "text": "聊完了"
      }
    ]
  },
  {
    "id": "day-2026-03-01",
    "date": "2026-03-01",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 57,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:29",
        "text": "要是我待到七月就好了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:29",
        "text": "七月我们再去新加坡呗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:30",
        "text": "改成3月多好"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:30",
        "text": "就是"
      }
    ]
  },
  {
    "id": "day-2026-03-02",
    "date": "2026-03-02",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 146,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:03",
        "text": "我去上班"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:49",
        "text": "酱酱我现在出发"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:50",
        "text": "今天是休息与恢复，我去签个到然后回来睡觉。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:50",
        "text": "睡到中午收拾下房间，下午再去学校，开始工作"
      }
    ]
  },
  {
    "id": "day-2026-03-03",
    "date": "2026-03-03",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 205,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:47",
        "text": "都炸到阿联酋了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:06",
        "text": "我像一个AI机器人一样，接受了太多太多，已经不是单纯的谋生问题了，我要开始做新的作品集，继续待着，但是为了未来生路离开，嗯嗯，先投杭州的公司看看"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:13",
        "text": "我做你最坚实的后盾"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:18",
        "text": "我要尝试这个"
      }
    ]
  },
  {
    "id": "day-2026-03-04",
    "date": "2026-03-04",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 244,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:39",
        "text": "酱酱吃药了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:32",
        "text": "现在指挥 Nature 继续干活"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:34",
        "text": "今后我们的工作流可以这样：9-14 点，14-19点，19-24 点。每 5 小时刷新一次，这样我们每次 token 差不多用完就休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:34",
        "text": "从明天开始，我每天早上 9 点要开始工作准备！！"
      }
    ]
  },
  {
    "id": "day-2026-03-05",
    "date": "2026-03-05",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 70,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:34",
        "text": "嘿嘿，还得是即梦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "完蛋喽，我的工作内容又多了，我可能要承担直播售卖RedFi的功能"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:06",
        "text": "加钱不"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:07",
        "text": "应该是不加钱"
      }
    ]
  },
  {
    "id": "day-2026-03-06",
    "date": "2026-03-06",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 187,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:50",
        "text": "酱酱只能推物理了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:51",
        "text": "等它恢复以后让它反思一下。也有可能是其他问题"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:51",
        "text": "因为这段时间我只问了一个问题，其他都是你问的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:51",
        "text": "嗯嗯"
      }
    ]
  },
  {
    "id": "day-2026-03-07",
    "date": "2026-03-07",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 124,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:33",
        "text": "我一会儿暖暖"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:39",
        "text": "心疼酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:03",
        "text": "[强][强][强]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:03",
        "text": "到家了吗酱酱"
      }
    ]
  },
  {
    "id": "day-2026-03-08",
    "date": "2026-03-08",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 159,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:44",
        "text": "刚刚洗漱完，打算继续睡"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:45",
        "text": "嘿嘿"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:53",
        "text": "我累了，晚安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:53",
        "text": "晚安"
      }
    ]
  },
  {
    "id": "day-2026-03-09",
    "date": "2026-03-09",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 228,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:26",
        "text": "我觉得酱酱你离职之前，我想拥有一套在当今这个时代的资产配置方案，是实际可操作的。等你离职以后我从打算从家里加上我自己的钱，要大概 30 万左右来做这个事情。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:27",
        "text": "因为未来世界局势如果特别紧张的话，对我们来说，得做一定程度的风险对抗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:28",
        "text": "[发呆]你要干啥"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:28",
        "text": "资产配置是吗？"
      }
    ]
  },
  {
    "id": "day-2026-03-10",
    "date": "2026-03-10",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 128,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:16",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:09",
        "text": "酱酱快回家快回家"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:13",
        "text": "OpenClaw 挂了，我们今天好好休息把，"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:14",
        "text": "Mac mini 在自动更新"
      }
    ]
  },
  {
    "id": "day-2026-03-11",
    "date": "2026-03-11",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 171,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:49",
        "text": "大三吧快大四了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:12",
        "text": "尬住了，你之前用的 GLM 并不是 GLM 还是 nature"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:12",
        "text": "好像还有一些配置要做"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:33",
        "text": "使用先稍微限制一下，我这边在配置"
      }
    ]
  },
  {
    "id": "day-2026-03-12",
    "date": "2026-03-12",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 118,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:14",
        "text": "我不着急"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "我其实觉得，如果是想要及时反馈和快速工作的话，最好的方式还是用 claude code"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "就是带来及时的效率提升。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:47",
        "text": "但是如果你想做一个每天帮你发一封小红书的虚拟 AI 那确实 openclaw 更合适"
      }
    ]
  },
  {
    "id": "day-2026-03-13",
    "date": "2026-03-13",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 190,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:56",
        "text": "有四种水果，苹果，耙耙柑，弥猴桃，水仙芒，为了新鲜，我才选特快的，让女朋友别太在意。[愉快]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:03",
        "text": "阿姨太贴心了，北京这几天干燥，我本来打算晚上回去买，动心起念之间，阿姨精挑细选的水果就要到了，还考虑到了同学，谢谢阿姨😁，嘿嘿"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "她不知道有同学"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "没事哈哈"
      }
    ]
  },
  {
    "id": "day-2026-03-14",
    "date": "2026-03-14",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 203,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:03",
        "text": "反应一下"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:04",
        "text": "谢谢阿姨的特快，很新鲜，包装也很好，每个水果看着都品质很好，吃起来也甜，一口气吃了1/3，[捂脸]怪不好意思的，以后有机会我们几个一起吃，独乐乐不如众乐乐，那会儿我来买单~"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:04",
        "text": "咦你还没回去是吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:04",
        "text": "我在拉屎，信号不好"
      }
    ]
  },
  {
    "id": "day-2026-03-15",
    "date": "2026-03-15",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 65,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:12",
        "text": "和去年的开心还是不一样的开心"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:13",
        "text": "去年的开心是能有人一起陪我看演唱会的开心。今年的开心是我们的感情经历了时间和事情的历练的开心"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:44",
        "text": "你回家了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:44",
        "text": "论文完成了吗"
      }
    ]
  },
  {
    "id": "day-2026-03-16",
    "date": "2026-03-16",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 122,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:12",
        "text": "我的Claude 不稳定"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:12",
        "text": "估计过段时间那个账号会被封，毕竟一直没给钱，但是还在专业计划"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "你登陆我的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "我们的"
      }
    ]
  },
  {
    "id": "day-2026-03-17",
    "date": "2026-03-17",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 87,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:54",
        "text": "我现在开心做内容是我唯一开心的理由，不然我早走了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:58",
        "text": "一开始在疯狂批判只有两个人的市场部创收不够，说苏苏姐低效，说我不饱和，把我和她都数落一顿，然后我们开始反驳，然后他又开始说理解和辛苦了，无语"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:04",
        "text": "唱完白脸唱红脸"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:28",
        "text": "我先继续修改一下哈"
      }
    ]
  },
  {
    "id": "day-2026-03-18",
    "date": "2026-03-18",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 153,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "感觉是 ZProject 从 LLM 领域过渡到了 Agent 领域"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "ZProject 是我们之前在上海做的一个项目"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:17",
        "text": "就是豆包主站的一堆功能"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:18",
        "text": "嗯嗯我知道那个"
      }
    ]
  },
  {
    "id": "day-2026-03-19",
    "date": "2026-03-19",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 234,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:59",
        "text": "我以为他们都已经开始用了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:00",
        "text": "我都用它来工作了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:00",
        "text": "一开始以为我热点蹭晚了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:00",
        "text": "结果我发现我蹭早了"
      }
    ]
  },
  {
    "id": "day-2026-03-20",
    "date": "2026-03-20",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 235,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:53",
        "text": "今天也没有心情工作"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:53",
        "text": "上午一直开会中午没有睡觉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:53",
        "text": "下午精神一般"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:54",
        "text": "没事一会就下班了"
      }
    ]
  },
  {
    "id": "day-2026-03-21",
    "date": "2026-03-21",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 65,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:12",
        "text": "呜呜呜呜"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:12",
        "text": "但其实我应该去吃饭了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:07",
        "text": "我正在重新调整房间布局"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:44",
        "text": "收拾好了"
      }
    ]
  },
  {
    "id": "day-2026-03-22",
    "date": "2026-03-22",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 122,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:12",
        "text": "笑飞了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:12",
        "text": "人家缺一个用智能体搭建工作流的人"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:32",
        "text": "搭什么"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:33",
        "text": "给100个账号批量发内容"
      }
    ]
  },
  {
    "id": "day-2026-03-23",
    "date": "2026-03-23",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 315,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:24",
        "text": "干到4.15就会决定去留"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:24",
        "text": "这是现在 nature 的工作空间"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:24",
        "text": "一团乱麻哎"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:24",
        "text": "又要养死了慢慢"
      }
    ]
  },
  {
    "id": "day-2026-03-24",
    "date": "2026-03-24",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 198,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:39",
        "text": "养 AI 本身还是需要一些时间的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:44",
        "text": "我把我今天写的 skill 放到 nature 上面了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:52",
        "text": "好耶"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:53",
        "text": "有技术支持就是好"
      }
    ]
  },
  {
    "id": "day-2026-03-25",
    "date": "2026-03-25",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 241,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:15",
        "text": "所以我现在没什么感觉，当然也和我自身状态相关"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:16",
        "text": "其实没感觉是因为我们从小到大面对的问题不一样，，我想想我从小选专业真的是太影响发展了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "我刚刚看了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "我先吃饭，吃完再接着看"
      }
    ]
  },
  {
    "id": "day-2026-03-26",
    "date": "2026-03-26",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 199,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:49",
        "text": "幸好幸好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:58",
        "text": "早安，酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:02",
        "text": "刚刚看了一个视频"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:11",
        "text": "我在去学校路上"
      }
    ]
  },
  {
    "id": "day-2026-03-27",
    "date": "2026-03-27",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 149,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "6800拿下17pm 美版"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "你让我想到当年好像我们有几天没联系，因为你没手机"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "是的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "给我难受的"
      }
    ]
  },
  {
    "id": "day-2026-03-28",
    "date": "2026-03-28",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 81,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "我在屏幕这头笑飞了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:57",
        "text": "以后你就是我们创业公司的发言人"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:36",
        "text": "我都能想象"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:46",
        "text": "哈哈哈哈哈，酱酱太懂我了"
      }
    ]
  },
  {
    "id": "day-2026-03-29",
    "date": "2026-03-29",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 64,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:08",
        "text": "你看吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:09",
        "text": "不好意思，辛苦酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:10",
        "text": "还挺有趣的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:20",
        "text": "嘿嘿酱酱"
      }
    ]
  },
  {
    "id": "day-2026-03-30",
    "date": "2026-03-30",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 195,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:49",
        "text": "酱酱，我5月学校还有课"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:52",
        "text": "哦哦那怎么说我们换一个房子？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:53",
        "text": "我要留在北京找短期转租的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:53",
        "text": "行，你了解一下"
      }
    ]
  },
  {
    "id": "day-2026-03-31",
    "date": "2026-03-31",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 129,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:35",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:35",
        "text": "晚安酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:35",
        "text": "运动结束后趴一会儿就困了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:35",
        "text": "果然太累了"
      }
    ]
  },
  {
    "id": "day-2026-04-01",
    "date": "2026-04-01",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 393,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:43",
        "text": "我一直支持你离职，酱酱，所以没事，"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:49",
        "text": "我们的nature会进化吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:23",
        "text": "这应该是cc内置的拓麻歌子"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:28",
        "text": "竟然这都能发小红书"
      }
    ]
  },
  {
    "id": "day-2026-04-02",
    "date": "2026-04-02",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 207,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:22",
        "text": "我刚睡醒"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:40",
        "text": "nature在工作吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:41",
        "text": "应该是你撤回了两条，但它还是会运行的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:43",
        "text": "原来如此"
      }
    ]
  },
  {
    "id": "day-2026-04-03",
    "date": "2026-04-03",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 275,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:23",
        "text": "被浪费在琐碎的工作中"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:24",
        "text": "我感觉那种什么工作经验，做出了什么成绩，这些无非是建立上的话，但是如果你不一直在这个体系里面卷，它什么都无法带来"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:25",
        "text": "我不会干太久的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:26",
        "text": "我不看命盘了"
      }
    ]
  },
  {
    "id": "day-2026-04-04",
    "date": "2026-04-04",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 120,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:35",
        "text": "不哭不哭，幸好玩了这个游戏"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:39",
        "text": "我睡觉了酱酱，午安我眼睛累了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:56",
        "text": "睡吧酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:09",
        "text": "健哥会写的很少见的一类歌曲，以快乐的节奏衬悲伤的故事，酱酱醒了可以听听"
      }
    ]
  },
  {
    "id": "day-2026-04-05",
    "date": "2026-04-05",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 125,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:43",
        "text": "酱酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:22",
        "text": "我刚刚在睡觉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:22",
        "text": "好不容易睡着被那个满了的自动猫砂盆吵醒"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:22",
        "text": "一看手机发现有两条内容需要投流"
      }
    ]
  },
  {
    "id": "day-2026-04-06",
    "date": "2026-04-06",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 123,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "03:03",
        "text": "我确实也不应该去解释这个课程，这种说服的确让你更厌倦了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "03:11",
        "text": "我找到我的问题了，晚安酱酱，你别因为我今天的无知而生气了，我一回去我就来找你哈，爱你酱酱！"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "03:40",
        "text": "酱酱！我找到你可以去的地方了！"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:34",
        "text": "我睡醒好一点了"
      }
    ]
  },
  {
    "id": "day-2026-04-07",
    "date": "2026-04-07",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 194,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:35",
        "text": "然后派我到你身边，给你带来希望，让你不要放弃"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:37",
        "text": "Woc这竟然是我们医院"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "03:53",
        "text": "我继续睡觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:56",
        "text": "好呀"
      }
    ]
  },
  {
    "id": "day-2026-04-08",
    "date": "2026-04-08",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 322,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:11",
        "text": "我睡一会了，刚把东西收拾完"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:11",
        "text": "嗯嗯，好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:11",
        "text": "我买的牙膏好像被没收了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:11",
        "text": "[流泪][流泪]"
      }
    ]
  },
  {
    "id": "day-2026-04-09",
    "date": "2026-04-09",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 208,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:33",
        "text": "我想请假回家了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:46",
        "text": "其实无所谓了，我不用nature也行，我担心我们共用账号容易被封号"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:47",
        "text": "你在用，我也在用，会被识别出来的吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:54",
        "text": "我晚上跟你解释"
      }
    ]
  },
  {
    "id": "day-2026-04-10",
    "date": "2026-04-10",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 200,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "04:06",
        "text": "“其实我刚刚在想，我们之前说一起养猫，是默认以后住在一起的。但现在你好像暂时不打算过来，我有点好奇你现在是怎么想这件事的？”"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:48",
        "text": "我会照顾好nature 的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:54",
        "text": "酱酱，你看抖音，最新的一条，好像和你想的有点沾边"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:05",
        "text": "哦是的"
      }
    ]
  },
  {
    "id": "day-2026-04-11",
    "date": "2026-04-11",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 287,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:15",
        "text": "眼睛累了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:15",
        "text": "我们都睡觉觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:18",
        "text": "想念酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:18",
        "text": "想念nature"
      }
    ]
  },
  {
    "id": "day-2026-04-12",
    "date": "2026-04-12",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 185,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:26",
        "text": "我还是太有良心"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:27",
        "text": "Nature过来了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:28",
        "text": "早就过去了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:28",
        "text": "2.30就带着了"
      }
    ]
  },
  {
    "id": "day-2026-04-13",
    "date": "2026-04-13",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 219,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:28",
        "text": "想你了酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:37",
        "text": "我感觉每天都睡不饱，一工作就难受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:38",
        "text": "所以我在家吃饭"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:38",
        "text": "啊？"
      }
    ]
  },
  {
    "id": "day-2026-04-14",
    "date": "2026-04-14",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 217,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:48",
        "text": "我月经快要来了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:48",
        "text": "我想好好休息，我们51见吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:49",
        "text": "酱酱你先休息😴我们晚上聊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:18",
        "text": "酱酱你下班了吗"
      }
    ]
  },
  {
    "id": "day-2026-04-15",
    "date": "2026-04-15",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 71,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:33",
        "text": "你真巧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:34",
        "text": "酱酱快到家的时候给我说我就出发回去"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:35",
        "text": "想吃什么呀"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:35",
        "text": "我买饭"
      }
    ]
  },
  {
    "id": "day-2026-04-16",
    "date": "2026-04-16",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 60,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:23",
        "text": "没有"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:33",
        "text": "我们明天2点10出发去看电影，看到5点，然后去吃九色菌火锅，他们7点到，中间两个小时，有可能排队，有可能没人，我们自行安排，酱酱可以刷题之类的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:33",
        "text": "我请假一天"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:34",
        "text": "啊明天我们还要看电影呢"
      }
    ]
  },
  {
    "id": "day-2026-04-17",
    "date": "2026-04-17",
    "phase": "异地·并肩",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 31,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:23",
        "text": "创业板ETF易方达（159915）易方达创业板ETF联接基金（A/C/Y：110026/004744/022907）"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:23",
        "text": "1000字内，然后前面的篇幅里要提到一次产品，最后再提到一次"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:20",
        "text": "酱酱找到厕所了吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:22",
        "text": "找到了"
      }
    ]
  },
  {
    "id": "day-2026-04-18",
    "date": "2026-04-18",
    "phase": "异地·并肩",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 20,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:07",
        "text": "好呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:59",
        "text": "我稍微听一会儿会儿"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:02",
        "text": "额我觉得讲得有一点浅，可能参会的人都不是深度做 infra 的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:04",
        "text": "我觉得丁老师来可能会降维打击"
      }
    ]
  },
  {
    "id": "day-2026-04-19",
    "date": "2026-04-19",
    "phase": "异地·并肩",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 5,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:38",
        "text": "我到北交流"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:34",
        "text": "我又白来了"
      }
    ]
  },
  {
    "id": "day-2026-04-20",
    "date": "2026-04-20",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 74,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:56",
        "text": "然后酱酱4号线直达30分钟"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:05",
        "text": "主要是酱酱要上班，如果我要着急上班，我也把你送到地铁"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:46",
        "text": "酱酱我给你点麦当劳？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:49",
        "text": "我给你买了哈？"
      }
    ]
  },
  {
    "id": "day-2026-04-21",
    "date": "2026-04-21",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 90,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:12",
        "text": "中午正常吃完饭，躺床上就秒睡了，醒来到公司工作了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:13",
        "text": "没事，我们很快又会见面的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:14",
        "text": "我以前不会觉得孤单"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:26",
        "text": "有小nature陪伴酱酱"
      }
    ]
  },
  {
    "id": "day-2026-04-22",
    "date": "2026-04-22",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 119,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:45",
        "text": "我没酱酱，被窝都变冷了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:59",
        "text": "抱抱酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:25",
        "text": "我这是被禁了呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:27",
        "text": "感觉是 model 挂了"
      }
    ]
  },
  {
    "id": "day-2026-04-23",
    "date": "2026-04-23",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 116,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:07",
        "text": "我在改简历中"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:22",
        "text": "我回去吃饭睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:33",
        "text": "AI 应用负责人"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:33",
        "text": "棒棒酱"
      }
    ]
  },
  {
    "id": "day-2026-04-24",
    "date": "2026-04-24",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 180,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:39",
        "text": "怎么这么牛"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:39",
        "text": "因为司法案件太多，上海的某法院，不接其他的了，就光拼多多的都堆到了明年"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:40",
        "text": "[破涕为笑]我昨天也刷到了，还觉得666"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:40",
        "text": "拼多多这太可怕了"
      }
    ]
  },
  {
    "id": "day-2026-04-25",
    "date": "2026-04-25",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 48,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:11",
        "text": "哈哈哈去吃"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:21",
        "text": "我来吃饭了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:50",
        "text": "吃完了，还在聊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:13",
        "text": "我刚吃完"
      }
    ]
  },
  {
    "id": "day-2026-04-26",
    "date": "2026-04-26",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 175,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:17",
        "text": "今天还有两个第二题，马上练完"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:17",
        "text": "练完吃饭，晚上看 HARD 题"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:18",
        "text": "原来如此"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:46",
        "text": "第二题，这次用了半小时，但是我看答案了"
      }
    ]
  },
  {
    "id": "day-2026-04-27",
    "date": "2026-04-27",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 153,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:31",
        "text": "哈哈哈确实"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:44",
        "text": "每天想酱酱，想小nature"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:57",
        "text": "我看到了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:57",
        "text": "现在去买"
      }
    ]
  },
  {
    "id": "day-2026-04-28",
    "date": "2026-04-28",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:20",
        "text": "去上班"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:45",
        "text": "为什么牛客会有上海AI Lab招聘"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:46",
        "text": "牛客本来就老牌求职刷题平台"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "08:52",
        "text": "抱抱酱"
      }
    ]
  },
  {
    "id": "day-2026-04-29",
    "date": "2026-04-29",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 83,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:48",
        "text": "酱酱我到家啦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:49",
        "text": "海底捞的火锅牛排好吃"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:52",
        "text": "海底捞还有牛排？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:52",
        "text": "我刚刚完成作业"
      }
    ]
  },
  {
    "id": "day-2026-04-30",
    "date": "2026-04-30",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 142,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:53",
        "text": "Woc健哥5.24在北京哪"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:53",
        "text": "我们不是要去上海吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:54",
        "text": "就是一说"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:54",
        "text": "那你看吧，能改成北京也行"
      }
    ]
  },
  {
    "id": "day-2026-05-01",
    "date": "2026-05-01",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 201,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:05",
        "text": "超声刀的700-1200"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:06",
        "text": "公猫在西安200多就嘎了，北京×3倍"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:06",
        "text": "真离谱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:54",
        "text": "辛苦酱酱！"
      }
    ]
  },
  {
    "id": "day-2026-05-02",
    "date": "2026-05-02",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 67,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:51",
        "text": "我现在在工作"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:56",
        "text": "好你工作吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "酱酱你看一下"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:57",
        "text": "顺丰开始寄了吗"
      }
    ]
  },
  {
    "id": "day-2026-05-03",
    "date": "2026-05-03",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 104,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:31",
        "text": "晚安"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:31",
        "text": "晚安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:30",
        "text": "酱酱AI用得多"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:31",
        "text": "我出去吃饭了"
      }
    ]
  },
  {
    "id": "day-2026-05-04",
    "date": "2026-05-04",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 37,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:25",
        "text": "我刚又睡了一会儿"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:46",
        "text": "宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:46",
        "text": "怎么了酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:46",
        "text": "突然叫到你了"
      }
    ]
  },
  {
    "id": "day-2026-05-05",
    "date": "2026-05-05",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 58,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:35",
        "text": "午安酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:35",
        "text": "午安小nature"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:50",
        "text": "午安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:50",
        "text": "怎么会像我呢"
      }
    ]
  },
  {
    "id": "day-2026-05-06",
    "date": "2026-05-06",
    "phase": "异地·并肩",
    "title": "把你照顾好",
    "theme": "care",
    "count": 174,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:10",
        "text": "我在刷抖音"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:59",
        "text": "我也是"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:59",
        "text": "没事，今天好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:17",
        "text": "啊 4 月 24 就出了"
      }
    ]
  },
  {
    "id": "day-2026-05-07",
    "date": "2026-05-07",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 267,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:53",
        "text": "一时半会不知道怎么修"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:53",
        "text": "啊，那我们明天顺便去修一下下？找上次买的那个人"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:54",
        "text": "我网购d"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "我跟他聊聊？"
      }
    ]
  },
  {
    "id": "day-2026-05-08",
    "date": "2026-05-08",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 54,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "我们去吃大盘鸡吧晚上"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:13",
        "text": "好呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:14",
        "text": "我来找你等你下班然后我买了一个券"
      }
    ]
  },
  {
    "id": "day-2026-05-09",
    "date": "2026-05-09",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 182,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:29",
        "text": "你可以点量少点一些，我可以跟你 share 一下"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:54",
        "text": "我们晚上去看电影"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:54",
        "text": "如果你有空的话"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:55",
        "text": "看什么呀"
      }
    ]
  },
  {
    "id": "day-2026-05-10",
    "date": "2026-05-10",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 80,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:16",
        "text": "我到了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:23",
        "text": "是不是那个猫粮变质了呀，刚刚nature拼命朝我叫，我给了一根猫条它吃的干干净净"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:23",
        "text": "狼吞虎咽"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:23",
        "text": "我4月3号卖的"
      }
    ]
  },
  {
    "id": "day-2026-05-11",
    "date": "2026-05-11",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 97,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:59",
        "text": "热的受不了了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:28",
        "text": "我们马上去吃吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:28",
        "text": "不急"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:28",
        "text": "饿了再去"
      }
    ]
  },
  {
    "id": "day-2026-05-12",
    "date": "2026-05-12",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 98,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:57",
        "text": "换了一个人来面的我"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:57",
        "text": "好，我现在下班回来听你讲"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:58",
        "text": "我服了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:03",
        "text": "我们去吃饭吧"
      }
    ]
  },
  {
    "id": "day-2026-05-13",
    "date": "2026-05-13",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 57,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:56",
        "text": "理解"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:58",
        "text": "我给nature喂个罐头吃了，那个水也出不来了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:05",
        "text": "可以用常规方式 把煮泡面的碗倒满"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:06",
        "text": "倒满矿泉水"
      }
    ]
  },
  {
    "id": "day-2026-05-14",
    "date": "2026-05-14",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 159,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:27",
        "text": "这个用勺子吃比较方便，徒手拨开还是没必要"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:32",
        "text": "我的天呐 人家猫吃的那么好吗 我好像亏待nature了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:32",
        "text": "下个月 给它买点新的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:45",
        "text": "没事"
      }
    ]
  },
  {
    "id": "day-2026-05-15",
    "date": "2026-05-15",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 119,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:38",
        "text": "我现在收拾一下，下楼"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:42",
        "text": "酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:42",
        "text": "我到门口了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:15",
        "text": "#北京海鲜自助#北京海鲜市场#北京海鲜餐厅推荐#北京海鲜自助餐推荐#北京海鲜火锅"
      }
    ]
  },
  {
    "id": "day-2026-05-16",
    "date": "2026-05-16",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 12,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:55",
        "text": "酱酱明天把 APP 的制作进度 建立一个 github 把我拉进去，然后我们就可以一起开发了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:44",
        "text": "看起来很清淡"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:44",
        "text": "酱酱吃吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:58",
        "text": "转把仪和右脚踏"
      }
    ]
  },
  {
    "id": "day-2026-05-17",
    "date": "2026-05-17",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 49,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:42",
        "text": "酱酱下大雨我不出去吃了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:42",
        "text": "我们就在家煮火锅吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:49",
        "text": "酱酱带伞了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:49",
        "text": "还有多久回来"
      }
    ]
  },
  {
    "id": "day-2026-05-18",
    "date": "2026-05-18",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 165,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:37",
        "text": "酱酱，我现在回来"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:50",
        "text": "我们去吃饭吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:19",
        "text": "车到了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:23",
        "text": "不好意思酱酱，下午没有耳机用了"
      }
    ]
  },
  {
    "id": "day-2026-05-19",
    "date": "2026-05-19",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 136,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:28",
        "text": "酱酱还在吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:29",
        "text": "服了 我63.5"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:51",
        "text": "酱酱晚安 我睡觉啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:51",
        "text": "刚刚洗涑完"
      }
    ]
  },
  {
    "id": "day-2026-05-20",
    "date": "2026-05-20",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 199,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:36",
        "text": "哈哈哈正常吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:36",
        "text": "以后可得按时睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:36",
        "text": "我是1点醒来后睡不着的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:02",
        "text": "我还在开会"
      }
    ]
  },
  {
    "id": "day-2026-05-21",
    "date": "2026-05-21",
    "phase": "异地·并肩",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 80,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:05",
        "text": "我一会儿拿到酸奶就走人"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:31",
        "text": "我吃火锅还从没有痛过"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:51",
        "text": "酱酱我刚刚去理发了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:51",
        "text": "现在去洗澡"
      }
    ]
  },
  {
    "id": "day-2026-05-22",
    "date": "2026-05-22",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 110,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "我赔你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "怎么我们现在都是猫猫"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "所以他说他宁愿给我们高价票都不愿意赔钱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:46",
        "text": "看我的背景图多么应景"
      }
    ]
  },
  {
    "id": "day-2026-05-23",
    "date": "2026-05-23",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 137,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:43",
        "text": "不行了我要睡了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:48",
        "text": "晚安，酱酱自己找找照片吧，我生成的感觉太正式了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:49",
        "text": "好的酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:49",
        "text": "我这边3月的ARR有点问题"
      }
    ]
  },
  {
    "id": "day-2026-05-24",
    "date": "2026-05-24",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 103,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:51",
        "text": "酱酱我睡午觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:02",
        "text": "我们可以来学溜冰"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:51",
        "text": "酱酱在睡觉吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:58",
        "text": "酱酱在吗"
      }
    ]
  },
  {
    "id": "day-2026-05-25",
    "date": "2026-05-25",
    "phase": "异地·并肩",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 199,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:25",
        "text": "都没加成"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:26",
        "text": "小猫可以在你怀里"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:29",
        "text": "不行，我试了很多次都不行呜呜呜"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:37",
        "text": "生成是能生成出来，但是阿里那边人人机检测不通过"
      }
    ]
  },
  {
    "id": "day-2026-05-26",
    "date": "2026-05-26",
    "phase": "异地·并肩",
    "title": "想念有了回声",
    "theme": "love",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "20:01",
        "text": "辛苦了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:21",
        "text": "我要睡觉了 拜拜 正好我也不吃饭了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:21",
        "text": "你接电话啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:21",
        "text": "不要"
      }
    ]
  },
  {
    "id": "day-2026-05-27",
    "date": "2026-05-27",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 249,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:18",
        "text": "酱酱早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:19",
        "text": "昨晚你状态很不好，今天上班先别给自己压力了，我们中午一起说说？"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:27",
        "text": "能回句话吗？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:32",
        "text": "在公司"
      }
    ]
  },
  {
    "id": "day-2026-05-28",
    "date": "2026-05-28",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 162,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:20",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:20",
        "text": "以后你回去的早可以先睡一觉然后起来在跟我视频，哈哈"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:21",
        "text": "我今天回去得跟你说说，我今天 woc 太感慨了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:03",
        "text": "提交成功了"
      }
    ]
  },
  {
    "id": "day-2026-05-29",
    "date": "2026-05-29",
    "phase": "异地·并肩",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 180,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:43",
        "text": "但是你需要培养出自己的领导力，你只要有把握，自然的会透出自信和掌控感"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:27",
        "text": "酱酱我们之后要慢慢吃火锅了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:27",
        "text": "我最近经常食道灼伤的痛"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:28",
        "text": "我今天中午不打算吃饭"
      }
    ]
  },
  {
    "id": "day-2026-05-30",
    "date": "2026-05-30",
    "phase": "异地·并肩",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 109,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:42",
        "text": "30多公里"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:42",
        "text": "我妈早上9:16从上海松江站回，我们看一下时间。你现在就你做完之后，就正常回来就行了。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:42",
        "text": "你给她那边安排一个房间吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:43",
        "text": "也行"
      }
    ]
  },
  {
    "id": "day-2026-05-31",
    "date": "2026-05-31",
    "phase": "异地·并肩",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 21,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:27",
        "text": "笑死我了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "07:05",
        "text": "起来了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:10",
        "text": "嗯嗯"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "07:10",
        "text": "刚刚醒"
      }
    ]
  },
  {
    "id": "day-2026-06-01",
    "date": "2026-06-01",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 169,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:24",
        "text": "美丽刑具"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:51",
        "text": "我发现他们用了 Agent 之后，Agent 写的笔记，只有 AI 能看，人看真难受啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:52",
        "text": "无法知道这个人的 idea 和 motivation 到底是什么，脉络非常不清晰"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:53",
        "text": "我看一下午看的头都疼了"
      }
    ]
  },
  {
    "id": "day-2026-06-02",
    "date": "2026-06-02",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 97,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "我今晚给你开"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:42",
        "text": "行，可以用deepseek 的api 我想把苏苏姐加进去，或者创立一个新的窗口，让她能完成一些运营工作，去多拉客户，这样这个月就能先稳住"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:42",
        "text": "deepseek api :sk-ead840bad10a48378661d4d073ef8b7b"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:46",
        "text": "可以是可以，但是同时回复两个不同的人可能会乱，我晚上需要调试一下"
      }
    ]
  },
  {
    "id": "day-2026-06-03",
    "date": "2026-06-03",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 86,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:29",
        "text": "上班不能看猫猫"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:29",
        "text": "看猫猫就想到小nature"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:09",
        "text": "有没有必要试试呢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:19",
        "text": "我觉得你可以试试"
      }
    ]
  },
  {
    "id": "day-2026-06-04",
    "date": "2026-06-04",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 111,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:59",
        "text": "酱酱！"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:12",
        "text": "或者你新建一个只有她的群？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:12",
        "text": "和nature的群？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:14",
        "text": "没懂"
      }
    ]
  },
  {
    "id": "day-2026-06-05",
    "date": "2026-06-05",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 204,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:34",
        "text": "离职更不高了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:34",
        "text": "但我们现在 nature 也是 codex 的 api 哦"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:35",
        "text": "换了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:35",
        "text": "我来换是吧"
      }
    ]
  },
  {
    "id": "day-2026-06-06",
    "date": "2026-06-06",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 81,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "07:34",
        "text": "昨天晚上在用电脑跑视频生成 早上一醒 看到nature正在如此"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "07:35",
        "text": "我使了一个眼色，他赶紧跑了 幸好早上我醒了 不然电脑屏幕遭殃了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:03",
        "text": "谢谢啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:22",
        "text": "杭州在下暴雨"
      }
    ]
  },
  {
    "id": "day-2026-06-07",
    "date": "2026-06-07",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 51,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:41",
        "text": "酱酱早"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:41",
        "text": "我现在出发去拍照"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:41",
        "text": "[破涕为笑][破涕为笑]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:50",
        "text": "有点点不满意"
      }
    ]
  },
  {
    "id": "day-2026-06-08",
    "date": "2026-06-08",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 119,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:40",
        "text": "脚脚出来了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:50",
        "text": "会的，小猫也会做梦，也可能会做不太舒服的梦。 睡着时爪爪、胡须、耳朵轻轻抽一下很常见，多半是在快速眼动睡眠里，不一定是噩梦。只要呼吸平稳、醒来正常，就不用太担心，轻轻陪着它睡就好。"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:50",
        "text": "我不担心"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:50",
        "text": "小猫咪的睡姿和我一样"
      }
    ]
  },
  {
    "id": "day-2026-06-09",
    "date": "2026-06-09",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 228,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:18",
        "text": "好了，明天你在给我提供修改意见，我再改"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:18",
        "text": "辛苦酱酱，我现在去洗漱睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:45",
        "text": "早上好酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:45",
        "text": "这是啥"
      }
    ]
  },
  {
    "id": "day-2026-06-10",
    "date": "2026-06-10",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 183,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:44",
        "text": "其实主要是如果你的领导只是希望你做这个，但是对这个不了解，以及没有给到比较好的应用场景，那你做得再好其实就没什么意义"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:45",
        "text": "比如你优化了 skill 和工作流，只能让你这条线变得更 fancy，但是没办法直接产生效益"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:46",
        "text": "她希望我这边能做一条区别于传统运营的全自动化陆，就我和她承担所有业务"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:50",
        "text": "鹅腿阿姨事情发酵了 估计要进牢里了"
      }
    ]
  },
  {
    "id": "day-2026-06-11",
    "date": "2026-06-11",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 168,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:38",
        "text": "飞机高铁报销"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "我昨天晚上做梦梦见 有一个长的大大胖胖的保安，要护送我从北京到南京再到上海，给我发了一个机票信息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "然后我说不对啊，我要去杭州啊，你护送我到上海干什么"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:41",
        "text": "我们竟然算心有灵犀了吗"
      }
    ]
  },
  {
    "id": "day-2026-06-12",
    "date": "2026-06-12",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 239,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:09",
        "text": "虽然有可能失败，但是经济有拖底啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:10",
        "text": "但是你留下来要处理的是搬家 + 跟老板沟通正式工怎么离职 + 接受老板后续可能的压榨 + 找工作的难受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:10",
        "text": "确实"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:10",
        "text": "我只是希望你精力聚焦到一个问题上"
      }
    ]
  },
  {
    "id": "day-2026-06-13",
    "date": "2026-06-13",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 65,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:51",
        "text": "哦还吃不了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:51",
        "text": "这是4D电影"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:13",
        "text": "嗯嗯 我睡醒了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:16",
        "text": "北京这几天一点都不热"
      }
    ]
  },
  {
    "id": "day-2026-06-14",
    "date": "2026-06-14",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 81,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:16",
        "text": "坟头睡觉"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:03",
        "text": "我到家了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:13",
        "text": "我还在下文献"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:44",
        "text": "西班牙面包是啥啊"
      }
    ]
  },
  {
    "id": "day-2026-06-15",
    "date": "2026-06-15",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 131,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:40",
        "text": "我只写了3篇文案"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "我看好像只剩 44% 了。如果不够用我们要不开到 300 刀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "没事我早上一直在用"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "两台机器一直用"
      }
    ]
  },
  {
    "id": "day-2026-06-16",
    "date": "2026-06-16",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 154,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:09",
        "text": "海投的都不准"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:09",
        "text": "咱不跟认知比我们低的人置气"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:09",
        "text": "我要么还是继续金融领域要么科技赛道"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:09",
        "text": "教培我都感觉没钱挣"
      }
    ]
  },
  {
    "id": "day-2026-06-17",
    "date": "2026-06-17",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 223,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:38",
        "text": "要不我来北京看酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:40",
        "text": "酱酱每天下班那么晚，周末就好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:41",
        "text": "好像昨天突然做梦梦到酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:41",
        "text": "想来看酱酱"
      }
    ]
  },
  {
    "id": "day-2026-06-18",
    "date": "2026-06-18",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 254,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:44",
        "text": "然后一次性包车花1300-1500，把部分东西和猫运到杭州"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:44",
        "text": "因为我们nature 没有疫苗本，也没有接种狂犬，所以飞机和高铁都不行"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:44",
        "text": "啊？"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:45",
        "text": "到杭州必须接种！"
      }
    ]
  },
  {
    "id": "day-2026-06-19",
    "date": "2026-06-19",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "22:50",
        "text": "另外 Apple Watch可以检测到房颤"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:50",
        "text": "我决定以后睡觉还是把手表带好"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:58",
        "text": "今天是新周期的第一片，这个周期结束后，停药试试"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:20",
        "text": "天啊"
      }
    ]
  },
  {
    "id": "day-2026-06-20",
    "date": "2026-06-20",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 72,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:49",
        "text": "好吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:50",
        "text": "咱们nature就这一张图，说明了他为什么能在一堆病猫里活下来"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:50",
        "text": "但凡是猫疱疹猫瘟 直接就died了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:51",
        "text": "估计母体给他带了抗体"
      }
    ]
  },
  {
    "id": "day-2026-06-21",
    "date": "2026-06-21",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 127,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "04:36",
        "text": "收到"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "04:38",
        "text": "我职业发展很迷茫，我决定要开展副业，在于我需要一个能替我抗周期，恢复创造的东西"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "04:38",
        "text": "而我恰好擅长做内容"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "04:38",
        "text": "只是不愿意承担失败的风险"
      }
    ]
  },
  {
    "id": "day-2026-06-22",
    "date": "2026-06-22",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 167,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:26",
        "text": "看英语没睡着"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:26",
        "text": "额 酱酱回复我不会给你工作压力吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:26",
        "text": "我这都要走了，明天就走了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:26",
        "text": "今天纯交接"
      }
    ]
  },
  {
    "id": "day-2026-06-23",
    "date": "2026-06-23",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 213,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:14",
        "text": "一个其他部门的负责人，在我离职前，试图把我自己从零搭建的个人工作系统，用‘平台化’的名义，无偿地、连每一步隐形判断都打包带走，凭什么"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:26",
        "text": "你的价值不靠藏住这些东西证明。 你把能交的交出去，也不会变得可替代。 你真正不可复制的，是你还能在下一份工作里重新搭出更好的东西。"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:29",
        "text": "gpt滚远点"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:29",
        "text": "躲进床底"
      }
    ]
  },
  {
    "id": "day-2026-06-24",
    "date": "2026-06-24",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 105,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:09",
        "text": "李健琴箱被猫尿了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:10",
        "text": "刚才还很和谐，我们nature就去打小猫 无语"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:12",
        "text": "还欺软怕硬"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:43",
        "text": "后来我吧nature带回家了"
      }
    ]
  },
  {
    "id": "day-2026-06-25",
    "date": "2026-06-25",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 89,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:06",
        "text": "还有只小黑"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "03:31",
        "text": "一只金渐层和一只暹罗猫"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "03:31",
        "text": "确实可爱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:50",
        "text": "小酱酱"
      }
    ]
  },
  {
    "id": "day-2026-06-26",
    "date": "2026-06-26",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 104,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:20",
        "text": "我刚刚开那个布偶猫的视频，他全是布偶猫挂在树上，竟然有这么多播放量"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:20",
        "text": "我们要不做一个 agent 直播，模拟小 nature 跟弹幕交流"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:21",
        "text": "哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:21",
        "text": "哈哈哈可以呀"
      }
    ]
  },
  {
    "id": "day-2026-06-27",
    "date": "2026-06-27",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 95,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "03:36",
        "text": "我以后也能去坑蒙拐骗 就这个水平 唉 我一共花了199+12=211"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "03:37",
        "text": "说的都错了……"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "05:36",
        "text": "早醒了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "06:43",
        "text": "唉认知的局限，即使强如uzi，频繁断播然后把钱都花完了"
      }
    ]
  },
  {
    "id": "day-2026-06-28",
    "date": "2026-06-28",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 124,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:04",
        "text": "嘿嘿小nature"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:05",
        "text": "那你吃饭看电影 我睡觉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:05",
        "text": "谢谢酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:20",
        "text": "真紧跟实事啊"
      }
    ]
  },
  {
    "id": "day-2026-06-29",
    "date": "2026-06-29",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 64,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:34",
        "text": "挺喜欢这个up"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:39",
        "text": "可怜酱酱，幸好衣服有帽子，以后公司常备一把伞吧"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:39",
        "text": "我中午睡了很久，空调喷水，现在恢复了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:02",
        "text": "黏人 没饭了"
      }
    ]
  },
  {
    "id": "day-2026-06-30",
    "date": "2026-06-30",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 179,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:00",
        "text": "我就喜欢傻傻"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:01",
        "text": "nature可能更爱你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:01",
        "text": "哈哈哈"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:02",
        "text": "嗯嗯"
      }
    ]
  },
  {
    "id": "day-2026-07-01",
    "date": "2026-07-01",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 151,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:22",
        "text": "太多了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:23",
        "text": "我觉得我们猫爬架还是要放卧室，要不然 nature 看不到我们睡的不安心啊"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:25",
        "text": "那你考虑高度"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:28",
        "text": "我回家看看今晚上"
      }
    ]
  },
  {
    "id": "day-2026-07-02",
    "date": "2026-07-02",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 84,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:46",
        "text": "我在吃西瓜"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:47",
        "text": "1688 有一个严选猫砂"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:47",
        "text": "这次的我已经买了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:47",
        "text": "你下次再买吧"
      }
    ]
  },
  {
    "id": "day-2026-07-03",
    "date": "2026-07-03",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 61,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:08",
        "text": "我在担心专业能力不够被拒"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:39",
        "text": "很多时候我并不愿意把所有归结到无常的命运上，我认为是我做出了这样的选择，我想了解金融，于是整个念头和未来的可能性发生了链接，于是我遇到了这样的公司，起初我也以为很好，干劲满满，但实质只有自己体验了才知道"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:40",
        "text": "所以人生其实如果没有社会结构规定的目标的话，其实意义就在于体验各种，其中也包括失败，但是不能被失败战胜"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:58",
        "text": "酱酱也到了人生新节点，该经历的一个都不会少，就看我们自己怎么面对，酱酱如果需要我的意见我会讲，最终酱酱要自己做决定，而我会和你一起面对"
      }
    ]
  },
  {
    "id": "day-2026-07-04",
    "date": "2026-07-04",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 90,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:31",
        "text": "学生酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:32",
        "text": "猫砂盆太重了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:32",
        "text": "确实"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:08",
        "text": "猫砂盆 ready"
      }
    ]
  },
  {
    "id": "day-2026-07-05",
    "date": "2026-07-05",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 10,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:23",
        "text": "感觉我们的毫宅的甲醛有点重"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:24",
        "text": "估计要散几天才能用"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:24",
        "text": "找个通风的地方，放几天"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:24",
        "text": "嗯嗯"
      }
    ]
  },
  {
    "id": "day-2026-07-06",
    "date": "2026-07-06",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 11,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:53",
        "text": "Nature在外面还是好，一下睡舒服了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:30",
        "text": "猫砂盆到了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:48",
        "text": "哈哈哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:07",
        "text": "好 等我一下下"
      }
    ]
  },
  {
    "id": "day-2026-07-07",
    "date": "2026-07-07",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 12,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "08:25",
        "text": "这是信任的表现"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:25",
        "text": "在守护我"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:27",
        "text": "它刚刚趴我头顶，又走了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:30",
        "text": "取件码 32-3-2164 菜鸟驿站 | 杭州滨江齐虹雅园店"
      }
    ]
  },
  {
    "id": "day-2026-07-08",
    "date": "2026-07-08",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 34,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:49",
        "text": "你换头像了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:50",
        "text": "小nature怎么这么可爱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:50",
        "text": "你把它抱上去的吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:51",
        "text": "嗯嗯 我抱上去的"
      }
    ]
  },
  {
    "id": "day-2026-07-09",
    "date": "2026-07-09",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 132,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:47",
        "text": "我现在没劲儿了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:47",
        "text": "好的，好好休息"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:34",
        "text": "我没做完[皱眉]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:34",
        "text": "中午要加班了"
      }
    ]
  },
  {
    "id": "day-2026-07-10",
    "date": "2026-07-10",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 41,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:37",
        "text": "但我不是小孩子了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:37",
        "text": "你这样摸摸nature 把"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:37",
        "text": "身体本能还存在[阴险]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:52",
        "text": "我俩生出来的孩子会更聪明"
      }
    ]
  },
  {
    "id": "day-2026-07-11",
    "date": "2026-07-11",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 1,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "05:05",
        "text": "你的梦话：真的假的 投一个脑玩癌 家家户户投这个不知道有没有用"
      }
    ]
  },
  {
    "id": "day-2026-07-13",
    "date": "2026-07-13",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 84,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:09",
        "text": "我带小nature去洗澡洗澡要2h"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:09",
        "text": "洗完我们去把nature接回家"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:09",
        "text": "你得看着"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:10",
        "text": "要不然不知道会怎么样酱酱"
      }
    ]
  },
  {
    "id": "day-2026-07-14",
    "date": "2026-07-14",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 76,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:22",
        "text": "我打算饿的时候热一下"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:22",
        "text": "汉堡很容易坏，我之前在上海的时候中午点两个汉堡，一个放冰箱晚上就会拉肚子"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:22",
        "text": "因为是熟的肉"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:22",
        "text": "那不吃了"
      }
    ]
  },
  {
    "id": "day-2026-07-15",
    "date": "2026-07-15",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 60,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "07:13",
        "text": "酱酱我吃过早饭了，不用给我买午饭，爱你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:18",
        "text": "我们以后别吃剩菜了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:18",
        "text": "呜呜呜我可不想你很早得肠道疾病"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:09",
        "text": "太难了，昨晚一晚上跑掉了一千块"
      }
    ]
  },
  {
    "id": "day-2026-07-16",
    "date": "2026-07-16",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 80,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:30",
        "text": "哇外边真热 我现在出发"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:30",
        "text": "我还没出发，我10 分钟以后出发"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:30",
        "text": "你要是去了可以先取号"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:30",
        "text": "辛苦酱酱"
      }
    ]
  },
  {
    "id": "day-2026-07-17",
    "date": "2026-07-17",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 165,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:15",
        "text": "好的酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:16",
        "text": "4.不要把你工作那套带到我的作品里 你可以提出优化点，但是主思考由我自己完成，我不接受任何动摇我核心给我标准让我松弛的建议"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:17",
        "text": "5.我不是在表演，我只是在建立一个过程，同时保持自己的安全性，其次，我在过的过程中已经思绪纷飞，剪辑配乐调节奏，表达形式和文案，每一个都想过，不要教我做东西"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:18",
        "text": "好的小酱酱"
      }
    ]
  },
  {
    "id": "day-2026-07-18",
    "date": "2026-07-18",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 3,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:48",
        "text": "酱酱呢"
      }
    ]
  },
  {
    "id": "day-2026-07-20",
    "date": "2026-07-20",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 9,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:01",
        "text": "我一医保一共有850"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:10",
        "text": "酱酱你那边要是吵，可以到我房间"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:22",
        "text": "我刚刚带了耳机"
      }
    ]
  },
  {
    "id": "day-2026-07-21",
    "date": "2026-07-21",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 61,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:34",
        "text": "今天下雨我跑去吃麦麦了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:35",
        "text": "下午工作代码跑上我就去改简历了，改了一下午"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:50",
        "text": "我也要想想做点职业履历有积累的事情"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:25",
        "text": "等你回来"
      }
    ]
  },
  {
    "id": "day-2026-07-22",
    "date": "2026-07-22",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 108,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:30",
        "text": "酱酱太多了就很重口味"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:30",
        "text": "我更担心我们要排很久队"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:30",
        "text": "我想要清淡一点的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:30",
        "text": "工作日应该还好"
      }
    ]
  },
  {
    "id": "day-2026-07-23",
    "date": "2026-07-23",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 43,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:58",
        "text": "只能我偷偷吃"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:59",
        "text": "那我们去大米先生点两个饭菜？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:00",
        "text": "可以"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:00",
        "text": "那我现在出发"
      }
    ]
  },
  {
    "id": "day-2026-07-24",
    "date": "2026-07-24",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:12",
        "text": "好的酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:25",
        "text": "我们小nature真乖"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:25",
        "text": "太好了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:37",
        "text": "好好好"
      }
    ]
  },
  {
    "id": "day-2026-07-25",
    "date": "2026-07-25",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 8,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:26",
        "text": "你有什么想法吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "21:26",
        "text": "想怎么搞发型"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:26",
        "text": "一会儿回去睡觉呀"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:26",
        "text": "男士发型我不懂呀"
      }
    ]
  },
  {
    "id": "day-2026-07-27",
    "date": "2026-07-27",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 56,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:39",
        "text": "[大哭]"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:40",
        "text": "这波是求职压力带来的，初步了解了一下就业市场，感觉自己要更新自己找工作的方式和重新做选择"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:43",
        "text": "那给你带两个牛奶一个酸奶"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:59",
        "text": "酱酱都开始健身了"
      }
    ]
  },
  {
    "id": "day-2026-07-28",
    "date": "2026-07-28",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "17:29",
        "text": "我大概也是六点出报告，复查结束"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:33",
        "text": "我一个想法是我们 6 点去吃饭。还有一个想法是我们 6 点稍微垫一垫，10 点去吃海底捞，捞完了正好看电影"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:33",
        "text": "可以"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:34",
        "text": "那我一会儿回去喝牛奶"
      }
    ]
  },
  {
    "id": "day-2026-07-30",
    "date": "2026-07-30",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 57,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:53",
        "text": "那个啥吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:53",
        "text": "影响你上班啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:53",
        "text": "那个海鲜吗？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:55",
        "text": "会不会太奢侈了"
      }
    ]
  },
  {
    "id": "day-2026-07-31",
    "date": "2026-07-31",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 53,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:08",
        "text": "从事情上来说，我当时是觉得她没有 get 到我的点。但是她其实也没有义务一定要 get 到我的点，也并不需要来帮我，这个点我忽略掉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:11",
        "text": "你看我今天和我这个新加坡的姐姐聊天，我感觉是我在大厂上班以后做事变得只在乎高效，不在乎人情味了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:15",
        "text": "10.37说帮问，10.51就问清了还打字回复了，就很好很高效"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:21",
        "text": "因为我不想这件事情一直占据我的大脑"
      }
    ]
  },
  {
    "id": "day-2026-08-01",
    "date": "2026-08-01",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 5,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "22:08",
        "text": "取件码 33-3-0572 菜鸟驿站 | 杭州滨江齐虹雅园店"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:09",
        "text": "取件码 34-3-9714 菜鸟驿站 | 杭州滨江齐虹雅园店"
      }
    ]
  },
  {
    "id": "day-2026-08-02",
    "date": "2026-08-02",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 7,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:51",
        "text": "每天2-3颗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:53",
        "text": "这个药最好饭后吃，不要空腹"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:53",
        "text": "一次一颗，一天2-3次"
      }
    ]
  },
  {
    "id": "day-2026-08-03",
    "date": "2026-08-03",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 25,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:07",
        "text": "其实我不知道我自己要做什么"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:08",
        "text": "聊聊天？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:08",
        "text": "主要是聊天 了解公司和创始人和ip人的想法"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:08",
        "text": "主要是看重我的ai技术链能力"
      }
    ]
  },
  {
    "id": "day-2026-08-04",
    "date": "2026-08-04",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 4,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:46",
        "text": "杭州滨江齐虹雅园店 齐虹雅园北门大厅 取件码：35-1-5023"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:47",
        "text": "出去吃完饭回来再拿卫生纸"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "22:20",
        "text": "BCoffer03"
      }
    ]
  },
  {
    "id": "day-2026-08-05",
    "date": "2026-08-05",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 89,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:15",
        "text": "大厂流程就是会很快"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:20",
        "text": "我下午面完就直接打车去找你吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:20",
        "text": "我们吃潮汕牛肉火锅"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "14:20",
        "text": "中南游乐城"
      }
    ]
  },
  {
    "id": "day-2026-08-06",
    "date": "2026-08-06",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 103,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:46",
        "text": "可以、"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:22",
        "text": "有个同事问我我们家猫玩具的链接"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:38",
        "text": "我服了，这个黄老师的团队，还在研发语音大模型"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:39",
        "text": "产品demo 还没有出来"
      }
    ]
  },
  {
    "id": "day-2026-08-07",
    "date": "2026-08-07",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 74,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:39",
        "text": "我愿称之为今年最打动我的播客"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:03",
        "text": "现在收拾出发"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:03",
        "text": "我今天先完成了一条"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:56",
        "text": "酱酱"
      }
    ]
  },
  {
    "id": "day-2026-08-10",
    "date": "2026-08-10",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 45,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:52",
        "text": "请假"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:52",
        "text": "辛苦了酱酱 今晚不打扰你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:52",
        "text": "撑到现在已经是极限了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:54",
        "text": "我一进厨房就看到了"
      }
    ]
  },
  {
    "id": "day-2026-08-11",
    "date": "2026-08-11",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 133,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "20:58",
        "text": "车是上海南，我看错了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:59",
        "text": "好吧，那你现在去上海南来得及吗"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:59",
        "text": "我去上海南需要40分钟，赶不上，所以改签了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "20:59",
        "text": "能到"
      }
    ]
  },
  {
    "id": "day-2026-08-13",
    "date": "2026-08-13",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 172,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:09",
        "text": "可恶的天使轮，面了我一个小时，套我经验呢"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:24",
        "text": "这不是问不问的问题，我觉得你父母有他们的逻辑"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:24",
        "text": "也不是说这个逻辑就不好，但是事实上我们俩以后才是过日子的人"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:25",
        "text": "但是不要叫太多了"
      }
    ]
  },
  {
    "id": "day-2026-08-14",
    "date": "2026-08-14",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 64,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "12:55",
        "text": "太猖狂了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:42",
        "text": "酱酱等你去北京我们去二刷奥德赛"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:51",
        "text": "酱酱在上海住的怎么样"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:51",
        "text": "睡觉舒服吗"
      }
    ]
  },
  {
    "id": "day-2026-08-15",
    "date": "2026-08-15",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 48,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:34",
        "text": "对。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:34",
        "text": "但是就是发烧+无力"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:52",
        "text": "我也拉肚子"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:03",
        "text": "太尴尬了"
      }
    ]
  },
  {
    "id": "day-2026-08-16",
    "date": "2026-08-16",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 3,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:13",
        "text": "天啊"
      }
    ]
  },
  {
    "id": "day-2026-08-17",
    "date": "2026-08-17",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 22,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:49",
        "text": "先回来吃药睡一觉，可能就好了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:49",
        "text": "[生病]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:49",
        "text": "不好推了，得推到下周又要请假"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:55",
        "text": "感冒很严重吗"
      }
    ]
  },
  {
    "id": "day-2026-08-18",
    "date": "2026-08-18",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 41,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:51",
        "text": "是啊"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:39",
        "text": "简单的和这个老板聊了一下，他做的主要是国际电商领域，提供商家定制服务，给商家提供策略和辅助，主要是调用api 和mcp服务，内部做数据清洗和一些员工经验整合，辅助商家做决策"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:46",
        "text": "这个有意思"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:49",
        "text": "其实一部分 AI 商家已经开始，但是具体员工经验整合啥的我没太理解，感觉跟中午说的好像不是一回事"
      }
    ]
  },
  {
    "id": "day-2026-08-19",
    "date": "2026-08-19",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 35,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:38",
        "text": "话说我们就改成一个月以后退房"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:38",
        "text": "怎么样"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:59",
        "text": "可以"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:59",
        "text": "反正我9.1入职"
      }
    ]
  },
  {
    "id": "day-2026-08-20",
    "date": "2026-08-20",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 21,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:00",
        "text": "我一会儿喝包感冒药"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "酱酱辛苦了头晕还工作"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:01",
        "text": "你也感冒了🤒"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:40",
        "text": "才开完会"
      }
    ]
  },
  {
    "id": "day-2026-08-21",
    "date": "2026-08-21",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 9,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:26",
        "text": "codex 开源了"
      }
    ]
  },
  {
    "id": "day-2026-08-22",
    "date": "2026-08-22",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 13,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:50",
        "text": "只是教唱歌吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:50",
        "text": "你还打算学点啥。。"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:52",
        "text": "我以为你唱得已经够好，不需要再学习"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:52",
        "text": "没想到你还需要学习"
      }
    ]
  },
  {
    "id": "day-2026-08-23",
    "date": "2026-08-23",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 6,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:18",
        "text": "我也要学"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:53",
        "text": "酱酱你忙完回来吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:25",
        "text": "我9点左右到家"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:25",
        "text": "我们结束的好早啊"
      }
    ]
  },
  {
    "id": "day-2026-08-24",
    "date": "2026-08-24",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 5,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:04",
        "text": "我吃过饭了，酱酱不用给我买"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:49",
        "text": "酱酱空了给我转3500房子定金"
      }
    ]
  },
  {
    "id": "day-2026-08-25",
    "date": "2026-08-25",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 89,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:59",
        "text": "酱酱在摸鱼"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:01",
        "text": "晚上教你"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:04",
        "text": "我们从 匈牙利 -> 奥地利 -> 捷克 -> 德国 -> 瑞士 -> 法国 -> 回去"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:04",
        "text": "去六个国家怎么样"
      }
    ]
  },
  {
    "id": "day-2026-08-26",
    "date": "2026-08-26",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 56,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:51",
        "text": "今天下午六点面试"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:04",
        "text": "对话完就没啥了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:05",
        "text": "我本来想说，会不会原来公司背调你然后把你开了。但是我想你都租房子了，应该已经定了。"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:06",
        "text": "北京那个公司还没有给 offer 吗"
      }
    ]
  },
  {
    "id": "day-2026-08-27",
    "date": "2026-08-27",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 90,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:59",
        "text": "我过一会儿会儿"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:59",
        "text": "我们以后每周约个时间聊"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:59",
        "text": "不然太影响你了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:15",
        "text": "没事"
      }
    ]
  },
  {
    "id": "day-2026-08-28",
    "date": "2026-08-28",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 108,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:52",
        "text": "我已经在回公司路上了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:35",
        "text": "酱酱，我妈反复跟我说这个钱不用还，我觉得酱酱在北京工作，不要在经济方面有太多顾虑，咱如果这个组干的不开心很内耗的话，该换还是换，这样你也许会松弛一些"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:07",
        "text": "我打算为了简历干的久一点"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:07",
        "text": "先干着再说吧"
      }
    ]
  },
  {
    "id": "day-2026-08-29",
    "date": "2026-08-29",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 57,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:23",
        "text": "小互动"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:24",
        "text": "哈哈哈，小nature终于有人交互了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:35",
        "text": "酱酱我药吃完了，我要继续睡觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:36",
        "text": "我在发疯"
      }
    ]
  },
  {
    "id": "day-2026-08-30",
    "date": "2026-08-30",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 57,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:28",
        "text": "早上好呀，我醒了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:28",
        "text": "我现在出发去找甲锋吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:36",
        "text": "我送了甲锋一个泡泡玛特盲盒"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:41",
        "text": "那万一抽得不好呢"
      }
    ]
  },
  {
    "id": "day-2026-08-31",
    "date": "2026-08-31",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 98,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "05:46",
        "text": "小酱酱，我忙完了，真累，我要睡觉啦"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:52",
        "text": "洗衣机拆开了，很脏，看着像几年没洗过，突然觉得全拆清洁270值得了，加上空调清洁，一共花了360"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:44",
        "text": "好啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "09:44",
        "text": "喊人来洗了是吧"
      }
    ]
  },
  {
    "id": "day-2026-09-01",
    "date": "2026-09-01",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 125,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:57",
        "text": "其实可以 6 点去吃个饭，然后 7 点下班"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:58",
        "text": "嗯嗯，我也是这样想的，我昨晚没睡多久，中午也没睡觉，下午就很困"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:58",
        "text": "嗯嗯你最近看看工作能不能拉一下你的作息"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:38",
        "text": "得酱酱真传了"
      }
    ]
  },
  {
    "id": "day-2026-09-02",
    "date": "2026-09-02",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 35,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:55",
        "text": "工作一下矫正我的生物钟了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:55",
        "text": "我已经到公司了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:57",
        "text": "那确实很累啊"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:32",
        "text": "我中午不回去了"
      }
    ]
  },
  {
    "id": "day-2026-09-03",
    "date": "2026-09-03",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 58,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:19",
        "text": "下班了，我要回去"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:21",
        "text": "辛苦啦酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:35",
        "text": "路上遇到了一个小胖"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:35",
        "text": "我看到交警来了，赶紧戴上了头盔"
      }
    ]
  },
  {
    "id": "day-2026-09-04",
    "date": "2026-09-04",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 122,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:56",
        "text": "买的颜色和它花色还挺搭好看"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:56",
        "text": "晚安酱酱我睡了，辛苦你了要熬夜"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:57",
        "text": "好呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:58",
        "text": "我还在改呢，但一看其实没啥可改的了"
      }
    ]
  },
  {
    "id": "day-2026-09-05",
    "date": "2026-09-05",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 88,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:17",
        "text": "我开始吃饭"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:01",
        "text": "我出发了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:11",
        "text": "我刚好睡醒了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:04",
        "text": "他们怎么都有充气沙发"
      }
    ]
  },
  {
    "id": "day-2026-09-06",
    "date": "2026-09-06",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 92,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "16:04",
        "text": "我也不回复了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:10",
        "text": "我们以后各过各的吧，你根本不会经营感情"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:12",
        "text": "你等我5点15给你打"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:21",
        "text": "你去学学怎么经营感情，异地的交流应该是怎样的吧，我实在受不了了，不管你是向gpt学习还是向谁学习，我不想和你讲了"
      }
    ]
  },
  {
    "id": "day-2026-09-07",
    "date": "2026-09-07",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 87,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:00",
        "text": "宝宝酱，我要睡了，过度思考头会晕，我爱你，我也需要酱酱好好的，希望酱酱能让我偶尔不那么强"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:27",
        "text": "好呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:27",
        "text": "你睡了吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:27",
        "text": "这个图好像小nature"
      }
    ]
  },
  {
    "id": "day-2026-09-08",
    "date": "2026-09-08",
    "phase": "未来·同行",
    "title": "两座城市之间",
    "theme": "journey",
    "count": 142,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:45",
        "text": "确实想到了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:45",
        "text": "我也想你 不知道你来北京我的房间和我一起睡觉会发生什么"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:45",
        "text": "我现在还没下班呢"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:45",
        "text": "还有一个小时"
      }
    ]
  },
  {
    "id": "day-2026-09-09",
    "date": "2026-09-09",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 125,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:21",
        "text": "Nature跟你说晚安"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:22",
        "text": "晚安 不下床的nature"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:10",
        "text": "酱酱早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:10",
        "text": "现在有个小问题，就是确实匈牙利签证可能是下不来的"
      }
    ]
  },
  {
    "id": "day-2026-09-10",
    "date": "2026-09-10",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 79,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:39",
        "text": "你直接跟她沟通好了，实在不好意思，我今天没带宽了[衰] 爱你宝宝酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:13",
        "text": "小酱酱，今天下午沟通还好吗？申根签的文件发给酱酱了吗？辛苦酱酱又要上班又要做材料"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:20",
        "text": "这个是我的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:20",
        "text": "给我写的就是旅游"
      }
    ]
  },
  {
    "id": "day-2026-09-11",
    "date": "2026-09-11",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 136,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "14:58",
        "text": "nature好奇了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "14:59",
        "text": "Nature会弹琴"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:11",
        "text": "看我头像"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:11",
        "text": "[呲牙]"
      }
    ]
  },
  {
    "id": "day-2026-09-12",
    "date": "2026-09-12",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 39,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:32",
        "text": "那个小酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:32",
        "text": "最近nature 好像有点拉稀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:33",
        "text": "可能给它每天吃的太好了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:40",
        "text": "我一个周才一次"
      }
    ]
  },
  {
    "id": "day-2026-09-13",
    "date": "2026-09-13",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 66,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "17:37",
        "text": "啊？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:54",
        "text": "我们都会过日子"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:04",
        "text": "我最近觉得我还挺幸运的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:04",
        "text": "酱酱真能接住我"
      }
    ]
  },
  {
    "id": "day-2026-09-14",
    "date": "2026-09-14",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 107,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "09:54",
        "text": "gpt 的图片设计的越来越好了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:00",
        "text": "我就知道脑脑会做我们之前想的这玩意"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:16",
        "text": "很神奇，讲的就是我们昨天晚上讨论的事情，但是昨天跟你手机聊天我就是听不进去；但是这个我就能看的津津有味；而且其实我们开会议以后很多内容其实就真的听进去了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:17",
        "text": "可能这是亲密关系中很难的一个问题"
      }
    ]
  },
  {
    "id": "day-2026-09-15",
    "date": "2026-09-15",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 139,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:47",
        "text": "我现在开始喜欢看一些文科生的文章了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:56",
        "text": "但我们要知道，所谓的个人失败，其实某种程度上是结构的分配，所谓正确的道路，也不过是这个时代暂时占上风的一套叙事而已。"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:56",
        "text": "酱酱真不容易"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:56",
        "text": "你能感受到人文的美了"
      }
    ]
  },
  {
    "id": "day-2026-09-16",
    "date": "2026-09-16",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 118,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:36",
        "text": "我睡了酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:28",
        "text": "酱酱感冒了难受了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:29",
        "text": "一般工作一个月左右和离职那会儿会生病"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:29",
        "text": "因为心力交瘁结束了"
      }
    ]
  },
  {
    "id": "day-2026-09-17",
    "date": "2026-09-17",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 196,
    "featured": true,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "11:39",
        "text": "记住了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:40",
        "text": "其实昨天你说到各花各的钱，其实是不太可能的，如果我们结婚以后，如果你这边现金流断了，我必须马上给你接上，除非你这边现金流很充足，那倒是有可能"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:40",
        "text": "还得我努力赚钱提升收入啊"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:40",
        "text": "[苦涩]"
      }
    ]
  },
  {
    "id": "day-2026-09-18",
    "date": "2026-09-18",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 86,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "早上好"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:21",
        "text": "我在和同事吃饭"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:23",
        "text": "好呀 我到家了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "17:36",
        "text": "好大的月饼"
      }
    ]
  },
  {
    "id": "day-2026-09-19",
    "date": "2026-09-19",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 91,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:51",
        "text": "酱酱晚安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:12",
        "text": "晚安小酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:19",
        "text": "早啊宝宝[亲亲]"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:30",
        "text": "哎哟"
      }
    ]
  },
  {
    "id": "day-2026-09-20",
    "date": "2026-09-20",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 92,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:43",
        "text": "对，所以到时候你要记得来"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:43",
        "text": "因为我想那几天参会，我们也得吃饭啊哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:44",
        "text": "好呀好呀，已经期待了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "16:45",
        "text": "你一个人出去吃饭，有点太尴尬了"
      }
    ]
  },
  {
    "id": "day-2026-09-21",
    "date": "2026-09-21",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 136,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:44",
        "text": "然后，他还说，他们这个问题平台什么多好多好。我操，我要被无语到了，然后我刚刚"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:55",
        "text": "哈哈哈以后我们都线上先了解"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:55",
        "text": "我涂过了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:56",
        "text": "现在感受到大腿和胳膊的肌肉也开始疼了"
      }
    ]
  },
  {
    "id": "day-2026-09-22",
    "date": "2026-09-22",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 67,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "21:05",
        "text": "我没睡"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "21:05",
        "text": "我要开始工作了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "22:27",
        "text": "真神奇，我平时觉得 10 点半就是现在还很早因为刚下班我可能还在打游戏，现在觉得好晚啊我都想睡觉了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:11",
        "text": "发现一个很有趣的 GPT 的语法问题"
      }
    ]
  },
  {
    "id": "day-2026-09-23",
    "date": "2026-09-23",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 89,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "15:12",
        "text": "可恶的工资下月10号才发"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "15:13",
        "text": "为什么感觉工作这么的无趣，都让我不想动脑了"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:14",
        "text": "没睡好吧"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:15",
        "text": "哦是因为酱酱对工作的理解又上升了一个维度"
      }
    ]
  },
  {
    "id": "day-2026-09-24",
    "date": "2026-09-24",
    "phase": "未来·同行",
    "title": "各自忙，也彼此惦记",
    "theme": "daily",
    "count": 148,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "10:22",
        "text": "刷到九点哄自己上班"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "10:23",
        "text": "哄自己上班哈哈"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:33",
        "text": "今天特别凉爽"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:34",
        "text": "过了一会儿下雨了"
      }
    ]
  },
  {
    "id": "day-2026-09-25",
    "date": "2026-09-25",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 94,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "18:02",
        "text": "我也看看"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "18:11",
        "text": "我妈问你国庆到家吃还是出去吃"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:12",
        "text": "到家吃？"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "18:13",
        "text": "其实都行"
      }
    ]
  },
  {
    "id": "day-2026-09-26",
    "date": "2026-09-26",
    "phase": "未来·同行",
    "title": "把你照顾好",
    "theme": "care",
    "count": 194,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "13:57",
        "text": "好的 酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:58",
        "text": "不行，一天见不到nature我浑身难受"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "13:58",
        "text": "为什么我没这样过"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "13:59",
        "text": "因为我比你爱nature"
      }
    ]
  },
  {
    "id": "day-2026-09-27",
    "date": "2026-09-27",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 177,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:08",
        "text": "所以才会有这个习惯"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "11:08",
        "text": "小猫咪喜欢钻被子"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "11:09",
        "text": "看到一个洞就想往里面钻"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "12:21",
        "text": "看着就好吃"
      }
    ]
  },
  {
    "id": "day-2026-09-28",
    "date": "2026-09-28",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 135,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:52",
        "text": "好呀 酱酱可以卸下来我明天看"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:12",
        "text": "我打算吃药抑制一下"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:14",
        "text": "另外还要找一家国庆能接 nature 的店，我们要放那边 5 天"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "12:33",
        "text": "吃了吗酱酱"
      }
    ]
  },
  {
    "id": "day-2026-09-29",
    "date": "2026-09-29",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 96,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:05",
        "text": "酱酱你那个东西下单一下，然后你能帮我买点猫粮吗"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:05",
        "text": "我们家好像猫粮不太够了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:26",
        "text": "买了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:30",
        "text": "谢谢酱酱"
      }
    ]
  },
  {
    "id": "day-2026-09-30",
    "date": "2026-09-30",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 99,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "00:22",
        "text": "酱酱能和我一起共建现实，互相承载，吵架不是为了分离而是为了靠近"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "00:23",
        "text": "晚安，我现在交给AI跑了，我要睡觉了，明早我6点要起来收拾"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:29",
        "text": "你卡了酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:33",
        "text": "酱酱有电话吗"
      }
    ]
  },
  {
    "id": "day-2026-10-01",
    "date": "2026-10-01",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 47,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "19:55",
        "text": "我说不明白你再去解释"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "23:42",
        "text": "我们明天有啥安排啊小酱酱"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:43",
        "text": "随遇而安，睡醒再说"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "23:43",
        "text": "大概率是中午农家乐吃午饭"
      }
    ]
  },
  {
    "id": "day-2026-10-02",
    "date": "2026-10-02",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 19,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:51",
        "text": "和家里河水的声音很像"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:28",
        "text": "小酱酱，突然觉得是不是我们在家待时间太短了，酱酱都不能和父母好好待会呀"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:29",
        "text": "是我想的太自私了有点[快哭了][快哭了]应该晚几天再走的"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "03:06",
        "text": "有点睡不着呜呜呜"
      }
    ]
  },
  {
    "id": "day-2026-10-03",
    "date": "2026-10-03",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 2,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "23:05",
        "text": "小酱酱，晚安，早点睡觉"
      }
    ]
  },
  {
    "id": "day-2026-10-04",
    "date": "2026-10-04",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 3,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:45",
        "text": "小酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:45",
        "text": "家里停水了你晚上上厕所注意点，不好冲"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "02:37",
        "text": "[跳跳]"
      }
    ]
  },
  {
    "id": "day-2026-10-05",
    "date": "2026-10-05",
    "phase": "未来·同行",
    "title": "有 Nature 的家",
    "theme": "home",
    "count": 146,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:35",
        "text": "我昨天说3个半小时你还不信"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "15:59",
        "text": "我觉得nature眼神变冷漠了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "尾巴竖的高高的"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "16:01",
        "text": "在重装环境呢"
      }
    ]
  },
  {
    "id": "day-2026-10-06",
    "date": "2026-10-06",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 74,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "19:12",
        "text": "用顺丰，学生认证有优惠"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "19:13",
        "text": "秋冬了，我给我们两个买了睡衣和棉拖，等你 11 月来"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:26",
        "text": "酱酱"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "20:26",
        "text": "好的酱"
      }
    ]
  },
  {
    "id": "day-2026-10-07",
    "date": "2026-10-07",
    "phase": "未来·同行",
    "title": "我们聊到以后",
    "theme": "future",
    "count": 140,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:10",
        "text": "我觉得他确实是很会表达，而表达本身就是一种营销，这是我觉得他能积累到这么多用户的原因"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:12",
        "text": "其实包括你上次跟我谈到的，我们当时开了一个腾讯会议讨论的，如何记录历史，如何防止自己忘记过去的经验的感受，这些都成为了产品设计中的一些小巧思"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:12",
        "text": "然后把这些内容给串起来"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:33",
        "text": "你要做的和他要做的不一样"
      }
    ]
  },
  {
    "id": "day-2026-10-08",
    "date": "2026-10-08",
    "phase": "未来·同行",
    "title": "想念有了回声",
    "theme": "love",
    "count": 66,
    "featured": false,
    "lines": [
      {
        "speaker": "我",
        "side": "self",
        "time": "01:09",
        "text": "没事，那个屏幕不重要，就是看着帅"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "01:09",
        "text": "我要睡觉觉了，晚安"
      },
      {
        "speaker": "shmily",
        "side": "him",
        "time": "01:18",
        "text": "爱你爱你爱你爱你"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "09:58",
        "text": "早上好，我到公司了"
      }
    ]
  },
  {
    "id": "day-2026-10-09",
    "date": "2026-10-09",
    "phase": "未来·同行",
    "title": "普通的一天，也被留下",
    "theme": "quiet",
    "count": 26,
    "featured": false,
    "lines": [
      {
        "speaker": "shmily",
        "side": "him",
        "time": "00:26",
        "text": "酱酱你睡吧，我在看恐怖片"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:48",
        "text": "早上好"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "08:48",
        "text": "酱酱开始喜欢看恐怖片了"
      },
      {
        "speaker": "我",
        "side": "self",
        "time": "10:10",
        "text": "我到公司了"
      }
    ]
  }
];
