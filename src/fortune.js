const ZODIAC_RANGES = [
  ["摩羯座", 101, 119],
  ["水瓶座", 120, 218],
  ["双鱼座", 219, 320],
  ["白羊座", 321, 419],
  ["金牛座", 420, 520],
  ["双子座", 521, 621],
  ["巨蟹座", 622, 722],
  ["狮子座", 723, 822],
  ["处女座", 823, 922],
  ["天秤座", 923, 1023],
  ["天蝎座", 1024, 1122],
  ["射手座", 1123, 1221],
  ["摩羯座", 1222, 1231],
];

const FOCUS = {
  general: {
    label: "整体趋势",
    verbs: ["整理节奏", "看清优先级", "把精力放回自己手里"],
  },
  love: {
    label: "感情与关系",
    verbs: ["说清边界", "放慢回应", "让真诚先于猜测"],
  },
  career: {
    label: "事业与学业",
    verbs: ["推进关键事项", "减少分心", "用结果确认方向"],
  },
  money: {
    label: "财富与机会",
    verbs: ["控制冲动", "复盘资源", "给机会设定成本线"],
  },
};

const MOODS = {
  steady: "稳定",
  curious: "好奇",
  tired: "疲惫",
  hopeful: "期待",
};

const CARDS = [
  {
    name: "愚者",
    element: "风",
    upright: "新的入口已经出现，轻装上阵比过度准备更重要。",
    reversed: "别把鲁莽误认为勇气，先确认脚下的第一步。",
  },
  {
    name: "魔术师",
    element: "火",
    upright: "你手边的资源足够启动，把想法变成可见动作。",
    reversed: "能力分散时容易消耗，先选一个最该完成的目标。",
  },
  {
    name: "女祭司",
    element: "水",
    upright: "直觉正在给出线索，安静观察会比急着表态更有用。",
    reversed: "信息不全时别过度脑补，向事实多走一步。",
  },
  {
    name: "皇后",
    element: "土",
    upright: "滋养关系和作品会带来回报，慢慢长出的东西很可靠。",
    reversed: "照顾别人之前，先把自己的电量补回来。",
  },
  {
    name: "皇帝",
    element: "火",
    upright: "秩序感会成为你的优势，适合定规则、排期限。",
    reversed: "控制欲可能让局面变硬，留一点弹性给变化。",
  },
  {
    name: "恋人",
    element: "风",
    upright: "选择的核心是价值一致，别只看短期甜度。",
    reversed: "摇摆来自标准不清，写下真正不能妥协的部分。",
  },
  {
    name: "战车",
    element: "火",
    upright: "行动力回升，集中推进会打开近期局面。",
    reversed: "方向太多会彼此拉扯，先停一条路线。",
  },
  {
    name: "力量",
    element: "火",
    upright: "柔和但坚定的表达，会比硬碰硬更有穿透力。",
    reversed: "别用逞强遮住疲惫，恢复也是实力的一部分。",
  },
  {
    name: "隐者",
    element: "土",
    upright: "独处能帮你听见答案，适合复盘而不是追赶。",
    reversed: "不要把退后变成逃避，找一个可信的人对齐现实。",
  },
  {
    name: "命运之轮",
    element: "风",
    upright: "变化正在转向，顺势调整比固守旧计划更聪明。",
    reversed: "重复的问题需要新反应，否则会继续循环。",
  },
  {
    name: "正义",
    element: "风",
    upright: "公平、契约和清晰记录会保护你。",
    reversed: "别拖延该说明的责任，模糊会放大误会。",
  },
  {
    name: "倒吊人",
    element: "水",
    upright: "暂停不是失败，换个角度会看到隐藏出口。",
    reversed: "一直等待不会自动带来答案，需要设定截止点。",
  },
  {
    name: "死神",
    element: "水",
    upright: "旧阶段正在结束，真正的轻松来自愿意放手。",
    reversed: "越抗拒改变，越容易被旧消耗拖住。",
  },
  {
    name: "节制",
    element: "水",
    upright: "平衡感回归，适合修复、协调和长期安排。",
    reversed: "节奏失衡时先减量，不要同时承担所有事情。",
  },
  {
    name: "星星",
    element: "风",
    upright: "希望感会回来，微小进展也值得认真保存。",
    reversed: "不要用一次低潮否定长期方向，先照亮最近的一步。",
  },
  {
    name: "月亮",
    element: "水",
    upright: "情绪会放大不确定，慢一点判断就能少走弯路。",
    reversed: "迷雾开始散开，真实动机会浮出水面。",
  },
  {
    name: "太阳",
    element: "火",
    upright: "能量明亮，适合展示成果、主动邀约和确认好消息。",
    reversed: "别因为想表现得轻松而忽略细节。",
  },
  {
    name: "审判",
    element: "火",
    upright: "一次清醒的决定会让你从旧评价中走出来。",
    reversed: "自我批判过强时，先看证据而不是情绪判词。",
  },
  {
    name: "世界",
    element: "土",
    upright: "一个阶段接近收束，适合交付、发布、完成闭环。",
    reversed: "最后一小步也需要认真做完，别让临门一脚松掉。",
  },
  {
    name: "权杖王牌",
    element: "火",
    upright: "灵感正在变热，抓住一个可以立即试验的点。",
    reversed: "火花还小，别急着承诺过大的计划。",
  },
  {
    name: "圣杯六",
    element: "水",
    upright: "熟悉的人或旧经验会带来温柔支持。",
    reversed: "怀旧可以安慰你，但不能替你做现在的选择。",
  },
  {
    name: "星币九",
    element: "土",
    upright: "自律带来余裕，近期适合享受已积累的成果。",
    reversed: "别用消费感填补安全感，先确认真实需求。",
  },
];

const POSITIONS = ["能量底色", "正在显现", "行动建议"];

export function getZodiacFromDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "白羊座";

  const monthDay = (date.getMonth() + 1) * 100 + date.getDate();
  const match = ZODIAC_RANGES.find(([, start, end]) => {
    return monthDay >= start && monthDay <= end;
  });
  return match ? match[0] : "白羊座";
}

export function buildReading(input) {
  const normalized = normalizeInput(input);
  const focus = FOCUS[normalized.focus] ?? FOCUS.general;
  const rng = mulberry32(hashSeed(JSON.stringify(normalized)));
  const cards = drawCards(rng).map((card, index) => {
    const reversed = rng() > 0.62;
    return {
      ...card,
      position: POSITIONS[index],
      orientation: reversed ? "逆位" : "正位",
      message: reversed ? card.reversed : card.upright,
    };
  });

  const primary = cards[1];
  const tone = toneFrom(cards, normalized.mood);
  const action = focus.verbs[Math.floor(rng() * focus.verbs.length)];

  return {
    ...normalized,
    focusLabel: focus.label,
    moodLabel: MOODS[normalized.mood] ?? MOODS.steady,
    cards,
    score: Math.round(64 + rng() * 28),
    summary: `${normalized.zodiac}近日的${focus.label}偏向${tone}：${primary.name}${primary.orientation}提示你${primary.message}`,
    advice: `建议把关键词放在“${action}”。未来三天先做一件能被看见的小事，再决定是否加速。`,
    lucky: {
      color: pick(["琥珀金", "雾蓝", "松石绿", "酒红", "月白"], rng),
      hour: pick(["09:00-11:00", "14:00-16:00", "19:00-21:00", "21:00-23:00"], rng),
      number: 1 + Math.floor(rng() * 9),
    },
  };
}

function normalizeInput(input) {
  const birthDate = input.birthDate || "2000-03-21";
  return {
    name: (input.name || "旅人").trim(),
    zodiac: input.zodiac || getZodiacFromDate(birthDate),
    birthDate,
    focus: input.focus || "general",
    mood: input.mood || "steady",
    seedDate: input.seedDate || new Date().toISOString().slice(0, 10),
  };
}

function drawCards(rng) {
  const deck = [...CARDS];
  const cards = [];
  while (cards.length < 3) {
    const index = Math.floor(rng() * deck.length);
    cards.push(deck.splice(index, 1)[0]);
  }
  return cards;
}

function toneFrom(cards, mood) {
  const fireCount = cards.filter((card) => card.element === "火").length;
  const waterCount = cards.filter((card) => card.element === "水").length;
  if (mood === "tired") return waterCount >= 1 ? "修复与降噪" : "稳步回收能量";
  if (mood === "hopeful") return fireCount >= 1 ? "主动展开" : "温和上扬";
  if (mood === "curious") return "探索新线索";
  return "稳定推进";
}

function pick(items, rng) {
  return items[Math.floor(rng() * items.length)];
}

function hashSeed(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return () => {
    let value = (seed += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}
