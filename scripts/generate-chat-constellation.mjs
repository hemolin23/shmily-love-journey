import {writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {execFileSync} from 'node:child_process';

const [, , databasePath, outputArg = 'src/data/chat-constellation.ts'] = process.argv;
if (!databasePath) throw new Error('Usage: node scripts/generate-chat-constellation.mjs <wechat-index.sqlite> [output.ts]');

const chatId = 'wxid_1j3282qftd0622';
const databaseUri = `file:${databasePath}?mode=ro&immutable=1`;
const query = (sql) => JSON.parse(execFileSync('sqlite3', ['-readonly', '-json', databaseUri, sql], {encoding: 'utf8', maxBuffer: 128 * 1024 * 1024}) || '[]');
const counts = query(`SELECT substr(sent_at,1,10) AS date, COUNT(*) AS total FROM messages WHERE chat_id='${chatId}' GROUP BY date ORDER BY date`);
const rows = query(`
  SELECT id, sent_at, sent_at_unix, is_self, message_type, text
  FROM messages
  WHERE chat_id='${chatId}' AND message_type='wechat:1' AND length(text) BETWEEN 2 AND 110 AND text NOT LIKE '<%'
  ORDER BY sent_at_unix, id
`);

const sensitive = /(?:https?:\/\/|www\.|wxid_|[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:^|\D)1[3-9]\d{9}(?:\D|$)|\b\d{7,}\b|\b\d{15,18}[xX]?\b|(?:密码|验证码|身份证|银行卡|收货地址|详细地址)|(?:省|市|区|街道|弄|小区|栋|单元|室).{0,12}\d)/i;
const machine = /^(?:<|\[?(?:图片|语音|视频|表情|文件|链接)\]?|\{)/;
const warmWords = ['想你', '爱你', '抱抱', '陪着', '支持你', '灵魂伴侣', '见面', '晚安', '早安', '到家', '辛苦', '好好休息', '心疼', '宝宝酱'];
const lifeWords = ['Nature', 'nature', '猫', '吃饭', '火锅', '睡觉', '工作', '上班', '健身', '电影'];
const journeyWords = ['机场', '飞机', '落地', '北京', '上海', '南京', '新加坡', '回国', '出发'];
const careWords = ['手术', '生病', '发烧', '恢复', '医院', '休息', '难受', '睡不好'];
const futureWords = ['以后', '未来', '结婚', '一直', '我们', '计划'];
const allSignals = [...warmWords, ...lifeWords, ...journeyWords, ...careWords, ...futureWords];
const featuredDates = new Set(['2025-08-01', '2025-08-07', '2025-08-19', '2025-10-06', '2025-11-17', '2026-09-17']);

function clean(row) {
  if (row.message_type !== 'wechat:1') return null;
  const text = String(row.text ?? '').replace(/\s+/g, ' ').trim();
  if (text.length < 2 || text.length > 110 || machine.test(text) || sensitive.test(text)) return null;
  return {...row, text};
}

function messageScore(item, index, list) {
  let score = Math.min(item.text.length, 46) / 16;
  for (const word of allSignals) if (item.text.includes(word)) score += 3.3;
  if (/[!！?？]/.test(item.text)) score += .7;
  if (index > 0 && list[index - 1].is_self !== item.is_self) score += 1.3;
  if (index < list.length - 1 && list[index + 1].is_self !== item.is_self) score += 1.3;
  if (/^(?:好|哦|嗯|啊|哈哈|行|是)$/.test(item.text)) score -= 5;
  return score;
}

function themeFor(messages) {
  const joined = messages.map((item) => item.text).join(' ');
  if (journeyWords.some((word) => joined.includes(word))) return {title: '两座城市之间', theme: 'journey'};
  if (careWords.some((word) => joined.includes(word))) return {title: '把你照顾好', theme: 'care'};
  if (joined.includes('Nature') || joined.includes('nature') || joined.includes('猫')) return {title: '有 Nature 的家', theme: 'home'};
  if (futureWords.some((word) => joined.includes(word))) return {title: '我们聊到以后', theme: 'future'};
  if (warmWords.some((word) => joined.includes(word))) return {title: '想念有了回声', theme: 'love'};
  if (lifeWords.some((word) => joined.includes(word))) return {title: '各自忙，也彼此惦记', theme: 'daily'};
  return {title: '普通的一天，也被留下', theme: 'quiet'};
}

function phaseFor(date) {
  if (date < '2025-09-01') return '初见·靠近';
  if (date < '2025-11-01') return '远行·相见';
  if (date < '2026-02-01') return '日常·成家';
  if (date < '2026-06-01') return '异地·并肩';
  return '未来·同行';
}

const grouped = new Map(counts.map(({date, total}) => [date, {total, safe: []}]));
for (const raw of rows) {
  const date = String(raw.sent_at).slice(0, 10);
  const bucket = grouped.get(date) ?? {total: 0, safe: []};
  const item = clean(raw);
  if (item) bucket.safe.push(item);
  grouped.set(date, bucket);
}

const stars = [];
for (const [date, bucket] of grouped) {
  if (!bucket.safe.length) continue;
  let center = 0;
  let best = -Infinity;
  bucket.safe.forEach((item, index) => {
    const score = messageScore(item, index, bucket.safe);
    if (score > best) { best = score; center = index; }
  });
  const start = Math.max(0, Math.min(center - 1, bucket.safe.length - 4));
  let excerpt = bucket.safe.slice(start, start + 4);
  if (excerpt.length < 3) excerpt = bucket.safe.slice(0, 4);
  if (!excerpt.some((item) => item.is_self === 0) || !excerpt.some((item) => item.is_self === 1)) {
    const other = bucket.safe.find((item) => item.is_self !== bucket.safe[center].is_self);
    if (other && !excerpt.includes(other)) excerpt = [...excerpt.slice(0, 3), other].sort((a, b) => a.sent_at_unix - b.sent_at_unix);
  }
  const {title, theme} = themeFor(excerpt);
  stars.push({
    id: `day-${date}`,
    date,
    phase: phaseFor(date),
    title,
    theme,
    count: bucket.total,
    featured: featuredDates.has(date),
    lines: excerpt.map((item) => ({
      speaker: item.is_self ? '我' : 'shmily',
      side: item.is_self ? 'self' : 'him',
      time: String(item.sent_at).slice(11, 16),
      text: item.text,
    })),
  });
}

const totalMessages = counts.reduce((sum, item) => sum + item.total, 0);
const phases = [...new Set(stars.map((star) => star.phase))];
const source = `export type MemoryStar = {\n  id: string;\n  date: string;\n  phase: string;\n  title: string;\n  theme: string;\n  count: number;\n  featured: boolean;\n  lines: Array<{speaker: '\u6211' | 'shmily'; side: 'self' | 'him'; time: string; text: string}>;\n};\n\nexport const CHAT_MESSAGE_TOTAL = ${totalMessages};\nexport const CHAT_INDEXED_DAY_TOTAL = ${grouped.size};\nexport const CHAT_DAY_TOTAL = ${stars.length};\nexport const CHAT_PHASES = ${JSON.stringify(phases, null, 2)} as const;\nexport const memoryStars: MemoryStar[] = ${JSON.stringify(stars, null, 2)};\n`;
writeFileSync(resolve(outputArg), source);
console.log(JSON.stringify({totalMessages, indexedDays: grouped.size, visibleStars: stars.length, first: stars.at(0)?.date, last: stars.at(-1)?.date}, null, 2));
