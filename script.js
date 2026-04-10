const dimensions = {
  pathing: {
    label: "压层 / 探宝",
    left: "探宝",
    right: "压层",
    summary: {
      negative: "你会更多把路线给问号、商店、宝箱和删牌机会，愿意靠事件收益与路线运营慢慢把一把牌修漂亮。",
      positive: "你会主动找战斗和精英，用卡牌奖励、早期遗物和篝火强化把整层节奏直接压快。",
      neutral: "你不是纯压层或纯探宝，而是会按血量、金币、遗物和关底需求灵活决定这层该怎么走。"
    }
  },
  combat: {
    label: "攻哈 / 防哈",
    left: "防哈",
    right: "攻哈",
    summary: {
      negative: "你更重视健康血线、稳定格挡和续航能力，宁愿多打一两回合，也不想把战斗打得太悬。",
      positive: "你会优先想怎么缩短敌人出手机会，愿意用掉一点血来换更快的斩杀线和更低的总战损。",
      neutral: "你不是单纯的莽或苟，而是会按敌人意图、当前血量和构筑形态切换攻防比例。"
    }
  },
  engine: {
    label: "无限 / 曲线",
    left: "曲线",
    right: "无限",
    summary: {
      negative: "你更相信高质量单卡、顺滑费用曲线和抽到就能打的稳定性，不喜欢为了梦想连锁牺牲普通回合。",
      positive: "你会主动给减费、加费、过牌、回手和循环部件留位置，只要看见连锁或无限窗口就会认真经营。",
      neutral: "你既看重普通回合的保底，也会在真有条件时尝试做启动，不会轻易被某一种玩法绑死。"
    }
  },
  coop: {
    label: "独核 / 团辅",
    left: "独核",
    right: "团辅",
    summary: {
      negative: "联机时你会优先确保自己的牌库和遗物收益成型，认为先做出一个稳定主核，才有资格谈怎么带队友。",
      positive: "你愿意拿团队卡、让关键遗物、分节奏资源，目标不是自己单飞，而是让整队更快进入舒服区间。",
      neutral: "你不是绝对自私或绝对奉献，而是会看当前谁最缺启动、谁最吃资源，再决定要不要让利。"
    }
  }
};

const questions = [
  {
    text: "第一层如果能多打一只精英换早期遗物，我通常愿意少一个安稳节点去换它。",
    dimension: "pathing",
    direction: 1
  },
  {
    text: "看到连续问号接商店的路线，我常会觉得这把更有操作空间。",
    dimension: "pathing",
    direction: -1
  },
  {
    text: "只要当前血量还健康，我更想多打战斗拿卡牌奖励，而不是一路绕开怪。",
    dimension: "pathing",
    direction: 1
  },
  {
    text: "即使事件可能塞诅咒，只要收益够高，我还是很爱走问号线。",
    dimension: "pathing",
    direction: -1
  },
  {
    text: "我规划路线时，会优先看能不能把精英、宝箱和篝火强化串成一条压层线。",
    dimension: "pathing",
    direction: 1
  },
  {
    text: "如果一条路线能稳定经过商店、休息点和问号，我通常会更愿意把它当保底路线。",
    dimension: "pathing",
    direction: -1
  },
  {
    text: "选牌时我很看重“这张能不能把敌人的下一轮意图直接掐掉”。",
    dimension: "combat",
    direction: 1
  },
  {
    text: "比起提前斩杀，我更想先把格挡、减伤或续航工具补齐。",
    dimension: "combat",
    direction: -1
  },
  {
    text: "面对小怪或精英时，我通常接受一点掉血来换更快结束战斗。",
    dimension: "combat",
    direction: 1
  },
  {
    text: "只要血量能稳住，我不介意一场战斗多拖几回合慢慢滚雪球。",
    dimension: "combat",
    direction: -1
  },
  {
    text: "我会优先拿能压血线、清杂兵、缩短 boss 阶段数的牌。",
    dimension: "combat",
    direction: 1
  },
  {
    text: "对我来说，健康血量和稳定起防往往比华丽斩杀更重要。",
    dimension: "combat",
    direction: -1
  },
  {
    text: "看到减费、加费、过牌、回手这些部件时，我会主动围着它们拼启动。",
    dimension: "engine",
    direction: 1
  },
  {
    text: "我更喜欢每回合顺着 3 点费用自然出牌，而不是等几张关键牌同回合凑齐。",
    dimension: "engine",
    direction: -1
  },
  {
    text: "只要看见有机会做出无限或超长连打，我愿意为那条线提前埋卡位。",
    dimension: "engine",
    direction: 1
  },
  {
    text: "我不太喜欢卡组为了连锁而塞太多单体组件，宁愿保证单卡抽到就能用。",
    dimension: "engine",
    direction: -1
  },
  {
    text: "商店里如果出现关键启动件或删牌窗口，我会愿意改路线甚至存钱等它。",
    dimension: "engine",
    direction: 1
  },
  {
    text: "比起爆一回合，我更偏爱每轮都能稳定交出像样的输出和防御。",
    dimension: "engine",
    direction: -1
  },
  {
    text: "联机时如果团队卡很关键，我可以接受牺牲自己的牌位去拿。",
    dimension: "coop",
    direction: 1
  },
  {
    text: "宝箱开出我也很想要的遗物时，我会先想谁拿了对全队提升最大。",
    dimension: "coop",
    direction: 1
  },
  {
    text: "只要队友这把的核心还没成型，我愿意先拿能补团队短板的牌、药水或遗物。",
    dimension: "coop",
    direction: 1
  },
  {
    text: "联机里我更想先把自己做成稳稳能 carry 的主核，团队加成之后再说。",
    dimension: "coop",
    direction: -1
  },
  {
    text: "我不介意把过牌、能量或其他节奏资源让给更适合启动的队友。",
    dimension: "coop",
    direction: 1
  },
  {
    text: "如果我这套还没成型，我通常会优先抢对自己直接增益最大的奖励。",
    dimension: "coop",
    direction: -1
  }
];

const options = [
  { label: "非常像我", value: 2, hint: "这基本就是我的默认打法。" },
  { label: "比较像我", value: 1, hint: "大多数局里我会这么做。" },
  { label: "不太像我", value: -1, hint: "偶尔会，但不是主风格。" },
  { label: "完全不像我", value: -2, hint: "我通常不会这么爬塔。" }
];

const archetypes = {
  "1111": {
    name: "团队连锁先锋",
    hook: "你会主动找精英、抢节奏做启动，联机里还愿意拿团队卡，把整队一起拉进爆发回合。",
    summary: "你的快乐点是把路线、出牌顺序和资源供给全部接成一条线：前期靠压层拿遗物，中期靠过牌减费做引擎，联机里还能顺手托起队友。",
    signature: "压层 + 攻哈 + 无限 + 团辅",
    strengths: ["识别高上限路线很快", "会把费用、抽牌和输出窗口连起来", "愿意为全队的爆发做牺牲"],
    pitfalls: ["过早贪精英或贪启动件会让血线崩得快", "容易把全队都按你的节奏要求", "关键部件迟到时，前几回合会明显发虚"],
    advice: ["第一层别同时贪太多，精英、删牌、梦想件至少放一个", "联机时先确认谁是主核，再决定团队卡给谁拿", "做无限前先保证打不过时也有普通回合可过"]
  },
  "1110": {
    name: "独狼无限猎手",
    hook: "你最爱的是把自己做成一台单回合停不下来的机器，然后让精英和 boss 直接跳过表演时间。",
    summary: "你倾向靠战斗奖励和关键引擎件快速成型，目标不是稳过，而是尽早把自己堆成能独自接管整局的核心。",
    signature: "压层 + 攻哈 + 无限 + 独核",
    strengths: ["独立成型欲望强，拿牌方向很明确", "敢为高上限路线承担掉血和空过风险", "一旦成型，清层速度极快"],
    pitfalls: ["会低估普通回合的保底质量", "联机时容易忽略队友节奏", "过度围绕单一 combo 时会很怕诅咒和卡手"],
    advice: ["每次贪启动件都问一句，这张不来时我怎么过精英第一轮", "别把所有金币都留给梦想件，删牌同样重要", "联机里至少保留一个能共享的资源节点，别完全单打独斗"]
  },
  "1101": {
    name: "前排军需官",
    hook: "你喜欢用稳定前压把整队往上推，路线敢打，出牌不飘，联机时很像会发军备的人。",
    summary: "你更信任结实的费用曲线和稳定斩杀线，不太迷信无限，但非常擅长靠战斗奖励、遗物和团队分工把一层层压过去。",
    signature: "压层 + 攻哈 + 曲线 + 团辅",
    strengths: ["路线稳准，敢拿精英但不乱贪", "很会补强杂兵战和精英战的关键缺口", "联机里能看见谁最需要什么"],
    pitfalls: ["可能低估单回合爆发的上限", "会为了整体节奏牺牲交太多自己的成长", "对犹豫型队友的耐心有限"],
    advice: ["保留你的稳，但别错过明显能抬高天花板的稀有牌", "团队卡拿得多时记得补自己的输出窗口", "boss 前检查自己有没有明确的终结手段"]
  },
  "1100": {
    name: "精英速斩者",
    hook: "你走的是最经典也最硬的一条线：找怪、拿卡、压血线、快点杀。",
    summary: "你偏爱靠高质量单卡和费用曲线狠狠干净每一层，不太依赖花哨组合，核心目标是减少敌人出手机会。",
    signature: "压层 + 攻哈 + 曲线 + 独核",
    strengths: ["前中期战力来得快", "不需要太多组件就能稳定过图", "路线和拿牌决策非常直接"],
    pitfalls: ["后期如果没补成长，可能在长 boss 战掉速", "容易轻视问号和商店里的结构价值", "联机里会默认自己先吃资源"],
    advice: ["攻哈不等于只拿攻击，至少保留几张能过 boss 机制的工具牌", "如果第一层太顺，第二层要提前补成长件", "别把每一件遗物都当成自己必须拿"]
  },
  "1011": {
    name: "盾墙供能官",
    hook: "你会先把战斗活下来，再把费用和过牌越滚越顺，最后带着全队一起进入安全爆发。",
    summary: "你敢打精英，但不是靠裸冲，而是靠稳血、起防、拖到引擎转起来；联机中你常是那个愿意让队友先吃收益的人。",
    signature: "压层 + 防哈 + 无限 + 团辅",
    strengths: ["对长战和 boss 战适应度高", "能把引擎与保命工具一起拼起来", "团队里容错率很高"],
    pitfalls: ["前期压层时可能因为节奏不够快而多吃伤害", "太想保血时会漏掉斩杀窗口", "把资源让出去后自己可能成型偏慢"],
    advice: ["第一层打精英前，先确认有没有能撑过前两回合的底盘", "防哈流也要准备收尾手段，别只会活不会赢", "联机里让利前先算清自己的关键节点"]
  },
  "1010": {
    name: "壁垒永动机",
    hook: "你喜欢把牌库转成一台不容易死，而且一旦转起来就很难停下来的机器。",
    summary: "你偏爱稳定起防、减伤和资源循环，愿意为了未来的超长回合忍受前期的慢热，是典型的单核引擎玩家。",
    signature: "压层 + 防哈 + 无限 + 独核",
    strengths: ["长战上限很高", "容错足，容易把劣势拖成可操作局", "对费用和过牌的理解会越来越深"],
    pitfalls: ["前期太慢时容易被高压精英狠狠干血", "会沉迷做最完美的机器，导致战力落地偏晚", "关键组件被诅咒或状态牌卡住时会很难受"],
    advice: ["引擎件之外，至少准备两张能马上挡伤害的实用牌", "当路线已经很危险时，先拿保命再拿梦想件", "别为了理论无限放弃一套已经能赢的中速构筑"]
  },
  "1001": {
    name: "稳层保驾者",
    hook: "你是联机里最让人安心的那种人，敢打精英，但不会拿全队血线开玩笑。",
    summary: "你重视稳定曲线、健康血量和团队整体过层率，喜欢用扎实的卡牌与遗物把每一层的风险压到最低。",
    signature: "压层 + 防哈 + 曲线 + 团辅",
    strengths: ["稳健，极少莫名暴毙", "善于补团队短板", "boss 前的准备通常很充分"],
    pitfalls: ["容易错过高上限路线", "有时为了保稳会拿太多功能相似的牌", "当全队都保守时可能缺少爆发点"],
    advice: ["遇到明显能改变上限的稀有牌时，别总用稳把它拒掉", "压层成功时要敢于把一部分资源转成成长", "联机里别把所有脏活都默认分给自己"]
  },
  "1000": {
    name: "钢铁压层者",
    hook: "你玩的不是花活，是一层层稳定推进到 boss 面前，然后用最朴素的硬度把它拿下。",
    summary: "你偏好战斗路线、起防保血和高质量单卡，不迷信问号奇迹，也不依赖复杂连锁，是标准的稳定过塔派。",
    signature: "压层 + 防哈 + 曲线 + 独核",
    strengths: ["路线清晰，失误率低", "很会管理血量和休息点价值", "对精英和 boss 的保底表现好"],
    pitfalls: ["可能缺少爆发和惊喜牌", "过于谨慎时会少打遗物节奏", "联机中容易显得过于强硬"],
    advice: ["第二层开始主动找能拉开上限的遗物或稀有牌", "别把每一次掉血都当成失败，有时那是换节奏的成本", "如果队友明显更适合某个遗物，可以试着让一次"]
  },
  "0111": {
    name: "事件炼金师",
    hook: "你擅长从问号、商店和奇怪遗物里拆出路线，然后在关键战斗里突然让全队一起爆掉。",
    summary: "你不靠一路找怪堆战力，而是喜欢从事件收益、删牌、关键遗物和启动件里拼出爆发结构，联机时还愿意共享资源。",
    signature: "探宝 + 攻哈 + 无限 + 团辅",
    strengths: ["很会利用商店和事件改造牌库", "对诅咒收益和高波动遗物接受度高", "能把奇怪资源变成团队爆发"],
    pitfalls: ["前期若战斗奖励不足，可能会火力虚", "容易为了事件价值走得太飘", "太相信拼图成功时会忽略血线"],
    advice: ["探宝路线也要保证每层有足够战斗奖励支撑 boss", "拿诅咒收益前先确认删牌与净化手段", "团队资源分出去前，先确保自己还有基本启动速度"]
  },
  "0110": {
    name: "诅咒淘金客",
    hook: "你会笑着点开问号，也会笑着拿走那件带副作用的离谱遗物，只要它能把你送上天。",
    summary: "你是最典型的高波动单核玩家之一：爱事件、爱商店、爱拼无限，也敢把整个构筑压在少数关键件上。",
    signature: "探宝 + 攻哈 + 无限 + 独核",
    strengths: ["很会在非战斗节点找高收益", "删牌、买件、找组合的方向极明确", "成型后往往很夸张"],
    pitfalls: ["诅咒、状态牌和卡手会把你克得很痛", "容易在第一层战力还没起来时就贪过头", "联机里对资源和遗物的占有欲偏强"],
    advice: ["每次接副作用前都想清楚谁来处理代价", "别把所有钱都留给梦想件，必要时先买保命", "单核路线越贪，越要让普通战的过关手段足够朴素"]
  },
  "0101": {
    name: "商店快攻师",
    hook: "你最舒服的节奏，是靠商店修牌、靠问号找补强，再用干净利落的斩杀线把团队推过每个战点。",
    summary: "你不执着无限，更重视删牌、找高质量单卡、拿顺手遗物，把一套节奏流畅的快攻或中速牌库修得很漂亮。",
    signature: "探宝 + 攻哈 + 曲线 + 团辅",
    strengths: ["商店和路线规划能力强", "前中期战力落地快", "联机里擅长把资源分配得很实用"],
    pitfalls: ["如果过度依赖商店，可能会错过精英遗物节奏", "后期遇到超长战可能成长不够", "偶尔会把太多金币花在优化而不是突破上"],
    advice: ["商店路线的核心是修结构，不只是买贵卡", "快攻也要预留一点 boss 战成长", "当全队都很顺时，可以更敢打精英换遗物"]
  },
  "0100": {
    name: "问号斩杀号",
    hook: "你喜欢边逛边补、边补边杀，找到机会就用最直接的火力把战斗压短。",
    summary: "你偏好靠事件和商店把牌库修薄、修顺，再用高质量输出和简洁费用曲线打出快速结算，是很纯粹的独立快攻派。",
    signature: "探宝 + 攻哈 + 曲线 + 独核",
    strengths: ["节奏直接，拿牌很果断", "很擅长通过删牌和购物提高牌库质量", "对杂兵战和精英战有不错的前期表现"],
    pitfalls: ["太少打精英时中后期遗物可能偏弱", "对副作用事件的抵抗力一般", "联机里容易默认自己优先拿最顺手的东西"],
    advice: ["第一层探宝路线别完全躲精英，至少争取一到两件关键遗物", "快攻牌库也要留一条处理长战的后手", "如果队友更吃某件遗物，别总按自己顺手来分"]
  },
  "0011": {
    name: "共享拼图师",
    hook: "你会把问号、商店、删牌和团队卡都当成拼图块，慢慢拼出一台全队都能受益的机器。",
    summary: "你重视结构整理、费用循环和团队容错，不急着抢伤害，而是偏爱通过探宝路线把构筑一点点修成高精度引擎。",
    signature: "探宝 + 防哈 + 无限 + 团辅",
    strengths: ["很会从商店与事件里找关键拼图", "联机里资源分配意识很强", "后期成长和团队收益都不错"],
    pitfalls: ["前期战斗输出可能不够硬", "太想把拼图拼完整时会拖慢节奏", "如果队友也偏慢，全队容易一起坐牢"],
    advice: ["确保第一层至少有能稳定过精英的即时强度", "团辅不代表全让，关键启动件还是要拿", "当拼图已经够用时，优先补落地强度而不是继续贪完美"]
  },
  "0010": {
    name: "遗物拼图师",
    hook: "你看到遗物、删牌和关键组件时就像看到藏宝图，愿意慢慢把整套牌库拧成最顺的样子。",
    summary: "你偏爱探宝、防哈和引擎构筑，更看重单局后期的精密度与安全感，是典型的高完整度单核慢热玩家。",
    signature: "探宝 + 防哈 + 无限 + 独核",
    strengths: ["牌库整理能力强", "长战处理和资源循环很成熟", "很能从看似零散的收益里攒出质变"],
    pitfalls: ["容易在前两层慢热过头", "太吃关键遗物和删牌节点", "一旦路线被迫多打战斗，掉血可能超预期"],
    advice: ["慢热构筑第一优先级永远是活到引擎成型", "别把每张功能牌都留着，精简本身就是强度", "商店和问号很香，但别忘了战斗奖励才会补基础数值"]
  },
  "0001": {
    name: "稳图后勤官",
    hook: "你是那种会先把全队血线、金币和后续 boss 准备都算进去的人，玩法非常像一名真正的后勤官。",
    summary: "你偏好探宝、商店、删牌和健康血量，联机里愿意做让利与补位的人，不追求花哨，而追求全队都稳稳上塔。",
    signature: "探宝 + 防哈 + 曲线 + 团辅",
    strengths: ["地图规划清楚", "资源和血线管理非常扎实", "联机里补位意识极强"],
    pitfalls: ["可能把自己的成长放得太后", "队伍如果没人敢冲，你会显得有点保守", "容易承担太多分配和判断压力"],
    advice: ["不是所有好东西都该让出去，先保住自己的关键节点", "当路线已经很安全时，可以主动争取一件改变上限的遗物", "后勤流最怕全程只保底，不给团队创造赢法"]
  },
  "0000": {
    name: "档案型塔学家",
    hook: "你像会记住每层地图、每次删牌和每件遗物价值的人，靠纪律和结构把一把牌打得越来越稳。",
    summary: "你是最典型的稳图、防哈、曲线、独核玩家：路线偏保守、拿牌讲质量、出牌讲费用效率，目标是把失误率压到最低。",
    signature: "探宝 + 防哈 + 曲线 + 独核",
    strengths: ["稳定，几乎不会莫名崩盘", "对删牌、商店和血量管理很敏感", "很擅长把普通牌组修成扎实能过塔的样子"],
    pitfalls: ["上限可能被自己保守掉", "对高波动稀有牌与奇遇收益接受度低", "联机里可能显得不够愿意让资源"],
    advice: ["每层至少问自己一次，这把最值得赌的窗口在哪里", "稳图不是不打精英，而是挑能打赢的时机打", "当基础已经够稳时，允许一两张高波动牌进组抬天花板"]
  }
};

const state = {
  currentIndex: 0,
  answers: Array(questions.length).fill(null)
};

const introPanel = document.getElementById("introPanel");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");
const progressChip = document.getElementById("progressChip");
const progressFill = document.getElementById("progressFill");
const resultName = document.getElementById("resultName");
const resultHook = document.getElementById("resultHook");
const resultSummary = document.getElementById("resultSummary");
const resultSignature = document.getElementById("resultSignature");
const dimensionList = document.getElementById("dimensionList");
const strengthList = document.getElementById("strengthList");
const pitfallList = document.getElementById("pitfallList");
const adviceList = document.getElementById("adviceList");

function startQuiz() {
  introPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  state.currentIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const currentAnswer = state.answers[state.currentIndex];

  questionTitle.textContent = `第 ${state.currentIndex + 1} 题`;
  questionText.textContent = question.text;
  progressChip.textContent = `${state.currentIndex + 1} / ${questions.length}`;
  progressFill.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;

  choiceList.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    if (currentAnswer === option.value) {
      button.classList.add("selected");
    }

    button.innerHTML = `<strong>${option.label}</strong><span>${option.hint}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = option.value;
      renderQuestion();
    });
    choiceList.appendChild(button);
  });

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.disabled = currentAnswer === null;
  nextBtn.textContent = state.currentIndex === questions.length - 1 ? "查看结果" : "下一题";
}

function goNext() {
  if (state.answers[state.currentIndex] === null) {
    return;
  }

  if (state.currentIndex === questions.length - 1) {
    renderResult();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function goPrev() {
  if (state.currentIndex === 0) {
    return;
  }

  state.currentIndex -= 1;
  renderQuestion();
}

function scoreQuiz() {
  const scores = {
    pathing: 0,
    combat: 0,
    engine: 0,
    coop: 0
  };

  questions.forEach((question, index) => {
    const answer = state.answers[index];
    scores[question.dimension] += answer * question.direction;
  });

  return scores;
}

function buildArchetypeKey(scores) {
  return [
    scores.pathing >= 0 ? 1 : 0,
    scores.combat >= 0 ? 1 : 0,
    scores.engine >= 0 ? 1 : 0,
    scores.coop >= 0 ? 1 : 0
  ].join("");
}

function describeScore(score, meta) {
  if (score > 2) {
    return meta.summary.positive;
  }

  if (score < -2) {
    return meta.summary.negative;
  }

  return meta.summary.neutral;
}

function normalizeScore(score) {
  const min = -12;
  const max = 12;
  return ((score - min) / (max - min)) * 100;
}

function renderDimensionCard(key, score) {
  const meta = dimensions[key];
  const strongSide = score >= 0 ? meta.right : meta.left;
  const intensity = Math.abs(score);
  let tone = "轻度倾向";

  if (intensity >= 8) {
    tone = "非常鲜明";
  } else if (intensity >= 4) {
    tone = "中度倾向";
  }

  const wrapper = document.createElement("article");
  wrapper.className = "dimension-card";
  wrapper.innerHTML = `
    <div class="dimension-head">
      <h4>${meta.label}</h4>
      <span class="dimension-score">${strongSide} · ${tone}</span>
    </div>
    <div class="dimension-bar">
      <div class="dimension-marker" style="left: ${normalizeScore(score)}%;"></div>
    </div>
    <div class="dimension-poles">
      <span>${meta.left}</span>
      <span>${meta.right}</span>
    </div>
    <p class="dimension-copy">${describeScore(score, meta)}</p>
  `;

  return wrapper;
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function buildCopyText(archetype, scores) {
  const dimensionLines = Object.entries(scores).map(([key, score]) => {
    const meta = dimensions[key];
    const side = score >= 0 ? meta.right : meta.left;
    return `${meta.label}: ${side}（${score > 0 ? "+" : ""}${score}）`;
  });

  return [
    `我的杀戮尖塔2爬塔人格结果：${archetype.name}`,
    archetype.hook,
    `玩法定位：${archetype.summary}`,
    `本次判定：${archetype.signature}`,
    ...dimensionLines
  ].join("\n");
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

function renderResult() {
  const scores = scoreQuiz();
  const archetypeKey = buildArchetypeKey(scores);
  const archetype = archetypes[archetypeKey];

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  resultName.textContent = archetype.name;
  resultHook.textContent = archetype.hook;
  resultSummary.textContent = archetype.summary;
  resultSignature.textContent = archetype.signature;

  dimensionList.innerHTML = "";
  Object.entries(scores).forEach(([key, score]) => {
    dimensionList.appendChild(renderDimensionCard(key, score));
  });

  renderList(strengthList, archetype.strengths);
  renderList(pitfallList, archetype.pitfalls);
  renderList(adviceList, archetype.advice);

  copyBtn.onclick = async () => {
    const text = buildCopyText(archetype, scores);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else if (!fallbackCopyText(text)) {
        throw new Error("Clipboard unavailable");
      }

      copyBtn.textContent = "已复制";
      setTimeout(() => {
        copyBtn.textContent = "复制结果摘要";
      }, 1600);
    } catch (error) {
      copyBtn.textContent = "复制失败";
      setTimeout(() => {
        copyBtn.textContent = "复制结果摘要";
      }, 1600);
    }
  };
}

function restartQuiz() {
  state.answers = Array(questions.length).fill(null);
  state.currentIndex = 0;
  resultPanel.classList.add("hidden");
  introPanel.classList.remove("hidden");
}

startBtn.addEventListener("click", startQuiz);
prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restartQuiz);
