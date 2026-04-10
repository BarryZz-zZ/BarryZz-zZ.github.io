const dimensions = {
  pathing: {
    label: "压层 / 探宝",
    left: "探宝",
    right: "压层",
    summary: {
      negative: "你看见问号、商店、宝箱和删牌机会就会心动，觉得地图不是拿来打穿的，是拿来经营的。",
      positive: "你更像会主动找战斗和精英的人，遗物、卡牌奖励和篝火强化在你眼里才是硬通货。",
      neutral: "你不是固定走一种图，而是会按血量、金币、遗物和队友状态临场调路线。"
    }
  },
  combat: {
    label: "攻哈 / 防哈",
    left: "防哈",
    right: "攻哈",
    summary: {
      negative: "你更在乎血线健康和回合稳定，能少掉一点血，就愿意多打一轮。",
      positive: "你会优先想怎么让怪物少出一次手，哪怕付出一点血量也愿意换更快结束战斗。",
      neutral: "你既不是纯莽夫，也不是纯乌龟，更多是看手牌和怪意图决定今天要不要凶一点。"
    }
  },
  engine: {
    label: "无限 / 曲线",
    left: "曲线",
    right: "无限",
    summary: {
      negative: "你更信任抽到就能打的高质量单卡和顺滑费用曲线，不喜欢为了梦想连锁把普通回合过成 PPT。",
      positive: "你会主动盯减费、过牌、回手、加费和洗牌循环，只要闻到一点无限味就会开始做梦。",
      neutral: "你不会对无限盲目信教，也不会完全拒绝，更多是看这把到底配不配你动数学。"
    }
  },
  coop: {
    label: "独核 / 团辅",
    left: "独核",
    right: "团辅",
    summary: {
      negative: "联机里你更倾向先把自己做成主核，觉得只有自己先稳定成型，后面才谈得上救别人。",
      positive: "你愿意拿团队卡、让关键遗物、喂队友资源，看到全队一起起飞会比自己独胡还爽。",
      neutral: "你不会无脑自私，也不会无脑奉献，通常会先看谁最缺资源、谁最值得让。"
    }
  }
};

const questions = [
  {
    text: "第一层开图，你同时看到了“双精英接篝火”和“问号商店宝箱连连看”两条路线，你第一反应是？",
    options: [
      {
        label: "双精英那条",
        hint: "活着出来我就是神。",
        effects: { pathing: 2, combat: 1 }
      },
      {
        label: "问号商店线",
        hint: "先把牌库修顺再谈别的。",
        effects: { pathing: -2, engine: 1 }
      },
      {
        label: "看职业再决定",
        hint: "机器人和契约师敢一点，别的先做人。",
        effects: {}
      },
      {
        label: "看队友状态",
        hint: "联机先选一条少救两次人的路。",
        effects: { coop: 1, combat: -1 }
      }
    ]
  },
  {
    text: "问号事件弹出一个“超赚效果，但附带诅咒”的选项，你会怎么按？",
    options: [
      {
        label: "直接拿",
        hint: "未来的我会想办法删掉它。",
        effects: { pathing: -2, engine: 1 }
      },
      {
        label: "先看删牌窗口",
        hint: "有商店就签字，没商店就算了。",
        effects: { pathing: -1, engine: 1 }
      },
      {
        label: "不拿",
        hint: "牌库已经不是垃圾桶了。",
        effects: { engine: -1, combat: -1 }
      },
      {
        label: "怂恿队友点",
        hint: "出事就说我只是建议。",
        effects: { coop: -2, pathing: -1 }
      }
    ]
  },
  {
    text: "商店里刷出了“异蛇之油”，效果是抽几张牌并让牌随机变成 0 到 3 费。你会？",
    options: [
      {
        label: "立刻买",
        hint: "随机费用也是一种艺术。",
        effects: { engine: 2 }
      },
      {
        label: "坚决不买",
        hint: "我的回合已经够乱了。",
        effects: { engine: -2 }
      },
      {
        label: "买给做无限的队友",
        hint: "世界终于能安静一点了。",
        effects: { coop: -2, engine: -1 }
      },
      {
        label: "边骂边下单",
        hint: "我知道这东西离谱，但抽牌真的香。",
        effects: { engine: 1, pathing: -1 }
      }
    ]
  },
  {
    text: "联机宝箱开出一堆大家都想要的遗物，你最像哪种人？",
    options: [
      {
        label: "石头剪刀布",
        hint: "赢的人就是天命。",
        effects: { coop: -2 }
      },
      {
        label: "看谁最适合",
        hint: "少演宫斗戏，直接分。",
        effects: { coop: 2 }
      },
      {
        label: "先报 build",
        hint: "能讲道理就不出拳。",
        effects: { coop: 1, engine: 1 }
      },
      {
        label: "先截图发群",
        hint: "证明友谊在遗物面前不值一提。",
        effects: { coop: -1 }
      }
    ]
  },
  {
    text: "第二层前半段血量一般，前面一边是精英接篝火，一边是问号接商店。你会？",
    options: [
      {
        label: "还是打精英",
        hint: "遗物比睡觉香。",
        effects: { pathing: 2, combat: 1 }
      },
      {
        label: "先休息保血",
        hint: "别被第三层 boss 看笑话。",
        effects: { combat: -2 }
      },
      {
        label: "走问号商店",
        hint: "顺便看看能不能删诅咒修牌。",
        effects: { pathing: -2, engine: 1 }
      },
      {
        label: "看队友能不能带",
        hint: "别人已经胡了，我负责别送。",
        effects: { coop: 1, combat: -1 }
      }
    ]
  },
  {
    text: "第一只精英开场，你的默认思路更像哪一种？",
    options: [
      {
        label: "先狠狠干血线",
        hint: "少一轮怪意图就少一轮风险。",
        effects: { combat: 2 }
      },
      {
        label: "先起盾",
        hint: "别为了帅在第一层见祖宗。",
        effects: { combat: -2 }
      },
      {
        label: "看手牌和怪意图",
        hint: "能斩就斩，不能就蹲。",
        effects: {}
      },
      {
        label: "我先扛一下",
        hint: "如果队友能补刀，我愿意演前排。",
        effects: { coop: 1, combat: -1 }
      }
    ]
  },
  {
    text: "卡牌奖励里放着一张大攻击、一张稳防牌和一张过牌/能量组件，你会怎么拿？",
    options: [
      {
        label: "拿大攻击",
        hint: "boss 血不会自己掉。",
        effects: { combat: 2 }
      },
      {
        label: "拿稳防牌",
        hint: "活着比数字大重要。",
        effects: { combat: -2 }
      },
      {
        label: "拿过牌或能量件",
        hint: "前面两张以后都得给它打工。",
        effects: { engine: 2 }
      },
      {
        label: "直接跳过",
        hint: "牌库不是垃圾填埋场。",
        effects: { engine: -1, pathing: -1 }
      }
    ]
  },
  {
    text: "你对药水最常见的态度是？",
    options: [
      {
        label: "现在就喝",
        hint: "药水放着只会跟我一起通关。",
        effects: { combat: 2 }
      },
      {
        label: "先囤着",
        hint: "再难受也许 boss 更需要它。",
        effects: { combat: -2 }
      },
      {
        label: "给更需要的人",
        hint: "队友比我更可能靠这瓶起飞。",
        effects: { coop: 2 }
      },
      {
        label: "先算收益",
        hint: "能不能少打一轮，才是重点。",
        effects: { combat: 1, engine: 1 }
      }
    ]
  },
  {
    text: "血量一般，但前面有一只精英。你的脑子里先冒出来的是？",
    options: [
      {
        label: "打",
        hint: "赢了就是遗物和故事。",
        effects: { pathing: 2, combat: 1 }
      },
      {
        label: "绕",
        hint: "今天的 KPI 是活到 boss 面前。",
        effects: { pathing: -1, combat: -1 }
      },
      {
        label: "看离启动差多远",
        hint: "只差一张牌我就赌。",
        effects: { engine: 1, pathing: 1 }
      },
      {
        label: "让队友先上",
        hint: "我负责在语音里说“稳一点”。",
        effects: { coop: 1, combat: -1 }
      }
    ]
  },
  {
    text: "你怎么看“蛇咬”这张牌？",
    options: [
      {
        label: "不强，但我要硬吹",
        hint: "乐子大于强度。",
        effects: { coop: 1 }
      },
      {
        label: "不强，除非已经胡了",
        hint: "得配件离谱到不像话。",
        effects: { engine: -1 }
      },
      {
        label: "我要唱反调",
        hint: "强不强不重要，先抬杠。",
        effects: { coop: -1 }
      },
      {
        label: "能咬死就叫神卡",
        hint: "这回合有用就够了。",
        effects: { combat: 1 }
      }
    ]
  },
  {
    text: "看到减费、回手、过牌、加费这些组件时，你通常会怎么想？",
    options: [
      {
        label: "闻到无限味了",
        hint: "先拿再说，数学之后再补。",
        effects: { engine: 2 }
      },
      {
        label: "先别做梦",
        hint: "当前回合强度才是硬道理。",
        effects: { engine: -2 }
      },
      {
        label: "先看删牌数",
        hint: "不瘦身，再多组件也是 PPT。",
        effects: { engine: 1 }
      },
      {
        label: "让队友先拿",
        hint: "他比我更快成型。",
        effects: { coop: 2, engine: 1 }
      }
    ]
  },
  {
    text: "你对“每回合 3 费该怎么花”这件事，更接近哪句话？",
    options: [
      {
        label: "花满 3 费最安心",
        hint: "顺滑曲线就是幸福。",
        effects: { engine: -2 }
      },
      {
        label: "这回合空点也没事",
        hint: "下回合能开转就值。",
        effects: { engine: 1 }
      },
      {
        label: "为了循环可以忍",
        hint: "只要后面能连起来，现在少打一张也行。",
        effects: { engine: 2 }
      },
      {
        label: "一卡顶一回合最好",
        hint: "少算一步少掉头发。",
        effects: { engine: -1, combat: 1 }
      }
    ]
  },
  {
    text: "你对“回合结束后打出的牌和没打出的手牌都会先去弃牌堆，再靠洗牌重新回来”这件事的态度更像？",
    options: [
      {
        label: "我很爱算这个",
        hint: "能洗回来就还有明天。",
        effects: { engine: 2 }
      },
      {
        label: "知道归知道",
        hint: "但我还是更想抽到就狠狠干活。",
        effects: { engine: -1, combat: 1 }
      },
      {
        label: "队友一提洗牌我就警觉",
        hint: "八成又要开始做无限了。",
        effects: { coop: 1, engine: 1 }
      },
      {
        label: "太累了不想算",
        hint: "多拿两张朴素神卡更实际。",
        effects: { engine: -2 }
      }
    ]
  },
  {
    text: "商店里你的钱只够在“删打击”“买稀有大牌”“买奇怪遗物”里三选一，你会？",
    options: [
      {
        label: "删打击",
        hint: "牌库薄，天地宽。",
        effects: { engine: 1, pathing: -1 }
      },
      {
        label: "买稀有大牌",
        hint: "抽到它那回合就是高潮。",
        effects: { engine: -1, combat: 1 }
      },
      {
        label: "买奇怪遗物",
        hint: "副作用以后再说。",
        effects: { pathing: -1, engine: 1 }
      },
      {
        label: "先算循环收益",
        hint: "能和弃牌堆、回手、减费闹事我就买。",
        effects: { engine: 2 }
      }
    ]
  },
  {
    text: "你对无限的底线，大概是下面哪一种？",
    options: [
      {
        label: "看到苗头就做",
        hint: "做不出来也要先幻想五分钟。",
        effects: { engine: 2 }
      },
      {
        label: "不影响普通回合才做",
        hint: "做人要留保底。",
        effects: {}
      },
      {
        label: "能正常过关何必数学",
        hint: "一刀一盾已经很幸福了。",
        effects: { engine: -2 }
      },
      {
        label: "队友做我负责报数",
        hint: "“还没打完吗”是我的团队贡献。",
        effects: { coop: -1, engine: 1 }
      }
    ]
  },
  {
    text: "联机里刷出一张团队卡，你更像哪类人？",
    options: [
      {
        label: "我拿",
        hint: "牌位这种东西本来就是拿来燃烧的。",
        effects: { coop: 2 }
      },
      {
        label: "谁最不吃牌位谁拿",
        hint: "最好别是我。",
        effects: { coop: -2 }
      },
      {
        label: "我胡了就拿",
        hint: "这时候装大方最不痛。",
        effects: { coop: 1 }
      },
      {
        label: "先看强不强",
        hint: "垃圾团队卡别拿道德绑架我。",
        effects: {}
      }
    ]
  },
  {
    text: "队友眼看就要做出无限了，你会？",
    options: [
      {
        label: "狠狠干喂资源",
        hint: "让他打一小时我也认了。",
        effects: { coop: 2, engine: 1 }
      },
      {
        label: "买异蛇之油干扰",
        hint: "一回合打半小时也得有报应。",
        effects: { coop: -2, engine: 1 }
      },
      {
        label: "嘴上支持，心里抢遗物",
        hint: "我承认我很坏。",
        effects: { coop: -1 }
      },
      {
        label: "先把自己做强",
        hint: "免得他断了大家一起坐牢。",
        effects: { coop: -2, combat: 1 }
      }
    ]
  },
  {
    text: "联机时队友残血，而你手上有能保命的资源。你更像？",
    options: [
      {
        label: "先救他",
        hint: "别还没到 boss 就少个人。",
        effects: { coop: 2, combat: -1 }
      },
      {
        label: "先保自己",
        hint: "我倒了你们更难打。",
        effects: { coop: -2 }
      },
      {
        label: "先看是谁",
        hint: "如果他刚抢过我遗物，那得另说。",
        effects: { coop: -1 }
      },
      {
        label: "主 C 就救",
        hint: "我很现实，但也很专业。",
        effects: { coop: 1 }
      }
    ]
  },
  {
    text: "遗物分配时，你最像哪种人？",
    options: [
      {
        label: "谁拿提升最大谁拿",
        hint: "效率优先，别演。",
        effects: { coop: 2 }
      },
      {
        label: "谁赢猜拳谁拿",
        hint: "把公平交给命运。",
        effects: { coop: -2 }
      },
      {
        label: "先给当前层最需要的人",
        hint: "能过眼前这关比什么都重要。",
        effects: { coop: 1, combat: 1 }
      },
      {
        label: "你们先选",
        hint: "但我会死盯着自己最想要那件。",
        effects: { coop: -1 }
      }
    ]
  },
  {
    text: "第三层 boss 前，队友说“这把稳了”。你第一反应通常是？",
    options: [
      {
        label: "稳个屁，再打一只精英",
        hint: "能贪一点是一点。",
        effects: { pathing: 2, combat: 1 }
      },
      {
        label: "先去商店",
        hint: "把牌修漂亮了再稳。",
        effects: { pathing: -1, engine: 1 }
      },
      {
        label: "那我继续做梦",
        hint: "也许还能再转一层无限。",
        effects: { engine: 2 }
      },
      {
        label: "那我拿团队卡",
        hint: "稳了就有资格当工具人。",
        effects: { coop: 2 }
      }
    ]
  }
];

const archetypes = {
  "1111": {
    name: "全队都给我转起来",
    hook: "你是一边压精英一边做无限，顺手还想把队友一起喂进爆发回合的人。",
    summary: "你不是只想赢，你是想把整局打成集锦。自己要转，全队最好也跟着转。",
    signature: "压层 + 攻哈 + 无限 + 团辅",
    strengths: ["上限嗅觉特别灵", "自己能演，还能喂别人一起演", "一旦顺起来节目效果和通关率一起涨"],
    pitfalls: ["精英、启动、团队卡会被你一次贪三样", "会把队友默认成能跟上你节奏的人", "关键件不来时嘴硬值会迅速升高"],
    advice: ["每层最多同时贪两件事", "先确认谁是真主核再喂资源", "给自己留一套做不出无限时也能过回合的牌"]
  },
  "1110": {
    name: "单人回合制取消者",
    hook: "你最大的理想不是过塔，是让怪物完全失去参与感。",
    summary: "你压层、攻哈、做无限，而且资源优先喂自己。只要能打出那种离谱一回合，你就觉得前面受的苦都值。",
    signature: "压层 + 攻哈 + 无限 + 独核",
    strengths: ["主核欲望极强", "敢把资源压在高上限线路上", "成型后经常把 boss 打成观众"],
    pitfalls: ["普通回合保底可能烂得惊人", "联机时很容易忘记别人也在这局里", "特别怕诅咒、卡手和异蛇之油"],
    advice: ["梦想件之外先保证能活过前两轮", "删牌和过牌别总给大梦让路", "偶尔也分一点资源，不然朋友会先打你"]
  },
  "1101": {
    name: "军火批发商",
    hook: "你喜欢一路找怪拿战力，顺手把全队装备也补齐。",
    summary: "你更信任快节奏压层和高质量曲线，不太依赖花里胡哨的连锁，但很会把战斗奖励和联机分工用到极致。",
    signature: "压层 + 攻哈 + 曲线 + 团辅",
    strengths: ["前中期战力来得快", "看得懂谁最缺什么资源", "联机里很像会发军备的人"],
    pitfalls: ["有时会低估爆发组件的天花板", "容易为了整体节奏牺牲自己成长", "看到队友犹豫会想替他出牌"],
    advice: ["稳归稳，也别错过明显抬上限的稀有牌", "分资源时记得给自己留终结手段", "别把全队的问题都接到自己身上"]
  },
  "1100": {
    name: "见怪就砍派",
    hook: "你玩的不是花活，是看见怪就想上去狠狠干两下。",
    summary: "你爱压层、爱攻哈、爱简单粗暴的高质量单卡。能少一轮怪意图，就懒得多算一轮数学。",
    signature: "压层 + 攻哈 + 曲线 + 独核",
    strengths: ["战力落地快", "不需要太多组件就能过图", "路线和拿牌都非常直接"],
    pitfalls: ["后期如果不补成长会突然掉速", "容易看不上问号和商店的细活", "联机里常默认自己先吃资源"],
    advice: ["攻哈不等于全塞攻击，工具牌还是要有", "第二层开始记得补一点 boss 战成长", "偶尔让一件遗物并不会削弱你的锋芒"]
  },
  "1011": {
    name: "先起盾再开演",
    hook: "你会先把战斗活下来，再把费用和抽牌滚成一台大家都能搭车的机器。",
    summary: "你不靠裸冲上限，而是靠稳血、起防和引擎慢慢转起来。等你真开演时，通常全队都已经坐稳了。",
    signature: "压层 + 防哈 + 无限 + 团辅",
    strengths: ["长战和 boss 战适应度很高", "能把保命和引擎一起拼出来", "队友跟着你打通常会很安心"],
    pitfalls: ["前期压层时可能因为节奏偏慢多吃伤害", "太想稳会漏斩杀窗口", "资源让出去后自己可能成型偏晚"],
    advice: ["打精英前先确认自己前两轮不会裸死", "防哈流也得有收尾手段", "让利之前先算清自己缺的关键件"]
  },
  "1010": {
    name: "苟着苟着就无限了",
    hook: "你是那种看起来在乌龟，结果突然就开始一回合打不停的人。",
    summary: "你偏爱稳定起防和资源循环，愿意为了后面的超长回合忍受前期慢热，是典型的单核慢启动病人。",
    signature: "压层 + 防哈 + 无限 + 独核",
    strengths: ["长战上限很高", "容错足，劣势也能慢慢拖回来", "对弃牌堆和洗牌循环非常敏感"],
    pitfalls: ["前几层很容易被高压精英狠狠干血", "会沉迷做完美机器", "关键组件被诅咒卡住时会异常痛苦"],
    advice: ["引擎件之外先补几张立刻能救命的牌", "路线危险时先保命再做梦", "别为了理论无限放弃已经能赢的构筑"]
  },
  "1001": {
    name: "队伍保安队长",
    hook: "你是联机里最像“别慌我来兜底”的那个人。",
    summary: "你敢打精英，但不会拿全队血线开玩笑。你信任稳防、顺滑曲线和靠谱分配，是非常像正经队长的玩法。",
    signature: "压层 + 防哈 + 曲线 + 团辅",
    strengths: ["稳健得很少离谱暴毙", "很会补队友短板", "boss 前准备通常很完整"],
    pitfalls: ["可能把明显的高上限路线也稳掉", "有时会拿太多功能相似的牌", "队里没人冲的时候容易一起变慢"],
    advice: ["看到真能抬上限的牌别总拒绝", "你兜底的时候也给自己留输出口", "别把所有脏活都默认归你"]
  },
  "1000": {
    name: "朴素过塔大师",
    hook: "你会用最像正常人的方式把塔一层层过掉，然后把乐子人看得很急。",
    summary: "你偏好压层、防哈、曲线和独立成型，不迷信奇迹，也不依赖复杂连锁，核心理念就是少失误。",
    signature: "压层 + 防哈 + 曲线 + 独核",
    strengths: ["路线清晰，失误率低", "血量和篝火管理很扎实", "对精英和 boss 的保底表现好"],
    pitfalls: ["上限可能被自己稳没了", "对高波动遗物和怪事接受度低", "联机里偶尔显得有点硬"],
    advice: ["基础够稳时可以主动赌一次高收益节点", "掉一点血不等于犯罪", "偶尔让别人拿一次关键遗物，世界不会塌"]
  },
  "0111": {
    name: "问号许愿池主理人",
    hook: "你热爱事件、商店、宝箱和奇怪遗物，觉得地图上最香的从来不是普通怪。",
    summary: "你擅长从问号和商店里拼收益，再把这些零碎资源变成全队爆发。你像在许愿池里运营一局牌。",
    signature: "探宝 + 攻哈 + 无限 + 团辅",
    strengths: ["很会利用事件和商店", "敢拿高波动收益", "能把奇怪资源变成团队大节奏"],
    pitfalls: ["前期战斗奖励不足时可能会发虚", "容易为了事件价值把路线走飘", "太相信拼图成功会忽略血线"],
    advice: ["探宝也得保证每层有足够战斗强度", "拿诅咒收益前先想好怎么清理", "别把所有钱都花在整活上"]
  },
  "0110": {
    name: "诅咒收藏家",
    hook: "你会笑着点开可疑事件，也会笑着捡起带副作用的离谱遗物。",
    summary: "你是典型的高波动单核玩家，爱事件、爱商店、爱拼无限，也很敢把整个构筑压在少数关键件上。",
    signature: "探宝 + 攻哈 + 无限 + 独核",
    strengths: ["很能从问号里挖出离谱收益", "删牌、买件、做梦方向极明确", "一旦胡了就会非常夸张"],
    pitfalls: ["诅咒和卡手会狠狠干你", "前期容易贪过头", "联机里会让队友提早开始护遗物"],
    advice: ["每次接副作用前先想好谁付代价", "别把金币全留给梦想件", "这条路越贪，越需要朴素保底牌"]
  },
  "0101": {
    name: "商店购物车战神",
    hook: "你看见商店就像看见第二个家，删牌、买牌、修曲线才是你的快乐源泉。",
    summary: "你偏爱探宝、攻哈和顺滑曲线，不执着无限，更擅长把一套快攻或中速牌库修得又薄又狠。",
    signature: "探宝 + 攻哈 + 曲线 + 团辅",
    strengths: ["商店规划很强", "前中期战力落地快", "联机里很会做实用分配"],
    pitfalls: ["过于依赖商店可能错过精英节奏", "后期长战成长偶尔不够", "有时会把金币全花在小修小补上"],
    advice: ["商店不是只买贵卡，删牌同样神", "快攻也要留一点 boss 战后手", "真顺的时候可以更敢打一只精英"]
  },
  "0100": {
    name: "删牌快攻怪",
    hook: "你边逛边修边砍，最享受的就是牌库越变越薄、怪物越死越快。",
    summary: "你喜欢靠问号和商店把牌修干净，再用高质量输出来缩短战斗，是很纯粹的独立快攻派。",
    signature: "探宝 + 攻哈 + 曲线 + 独核",
    strengths: ["节奏直接，拿牌果断", "删牌思路很清晰", "对杂兵战和精英战通常很早就有感觉"],
    pitfalls: ["太少打精英时中后期遗物可能偏弱", "有些副作用事件会让你很难受", "联机里默认自己先顺手拿东西的概率偏高"],
    advice: ["探宝路线别完全躲精英", "快攻牌库也要准备一点长战后手", "看见队友更吃的遗物时偶尔收手一次"]
  },
  "0011": {
    name: "全队拼图后勤",
    hook: "你把问号、商店、删牌、团队卡和弃牌堆都看成拼图块。",
    summary: "你重视结构整理、费用循环和团队容错，不急着抢伤害，而是喜欢把整队慢慢修到舒服区间。",
    signature: "探宝 + 防哈 + 无限 + 团辅",
    strengths: ["很会从零碎资源里拼出体系", "联机分配意识强", "后期成长和团队收益都不错"],
    pitfalls: ["前期输出可能不够硬", "太想把拼图拼完整时会拖节奏", "如果队友也偏慢，全队会一起坐牢"],
    advice: ["第一层至少要有能过精英的即时战力", "团辅不代表什么都让", "当拼图已经够用时优先补落地强度"]
  },
  "0010": {
    name: "后期无敌你先别急",
    hook: "你最常说的一句话，大概是“再给我一层，我真无敌了”。",
    summary: "你偏爱探宝、防哈和引擎构筑，更看重牌库完整度和后期安全感，是标准的慢热型单核选手。",
    signature: "探宝 + 防哈 + 无限 + 独核",
    strengths: ["牌库整理能力强", "长战处理通常很成熟", "特别会从删牌和循环里攒质变"],
    pitfalls: ["前两层慢热过头就会直接没后期", "太吃关键件和删牌点", "路线一旦被迫连续打架会掉血超预期"],
    advice: ["先活到后期，你的理论上限才有意义", "精简本身就是强度，别什么都留", "问号和商店很香，但战斗奖励也得打"]
  },
  "0001": {
    name: "联机老妈子",
    hook: "你不是在爬塔，你是在一边爬塔一边照顾三个会乱跑的小孩。",
    summary: "你偏好探宝、防哈、曲线和团辅，擅长管理血量、金币和后续准备，是联机里最像后勤部长的人。",
    signature: "探宝 + 防哈 + 曲线 + 团辅",
    strengths: ["地图规划很清楚", "血线和资源管理扎实", "队友通常会觉得有你在真好"],
    pitfalls: ["容易把自己的成长放到最后", "队伍没人敢冲时会显得过于保守", "常把别人的锅默默背了"],
    advice: ["不是所有好东西都该让出去", "路线很安全时也要主动争一件抬上限的东西", "你可以兜底，但别替所有人过人生"]
  },
  "0000": {
    name: "塔学档案管理员",
    hook: "你像把每一层地图、每次删牌和每件遗物价值都记在小本本上的人。",
    summary: "你是最典型的稳图、防哈、曲线、独核玩家。你不靠奇迹吃饭，而是靠纪律、结构和少犯错。",
    signature: "探宝 + 防哈 + 曲线 + 独核",
    strengths: ["稳定得几乎不会离谱崩盘", "对商店、删牌和血量特别敏感", "很会把普通牌组修成能过塔的样子"],
    pitfalls: ["上限可能被自己稳掉", "对高波动乐子接受度不高", "联机里偶尔显得不够愿意让利"],
    advice: ["每层至少问自己一次最值得赌的窗口在哪", "稳图不是不打精英，是挑能赢的时机打", "基础够稳时允许一两张离谱牌进组"]
  }
};

const state = {
  currentIndex: 0,
  answers: Array(questions.length).fill(null)
};

const dimensionMaxScores = Object.fromEntries(
  Object.keys(dimensions).map((key) => [key, 0])
);

questions.forEach((question) => {
  Object.keys(dimensions).forEach((key) => {
    const localMax = Math.max(
      ...question.options.map((option) => Math.abs(option.effects[key] || 0))
    );
    dimensionMaxScores[key] += localMax;
  });
});

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
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";

    if (currentAnswer === index) {
      button.classList.add("selected");
    }

    button.innerHTML = `<strong>${option.label}</strong><span>${option.hint}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = index;
      renderQuestion();
    });
    choiceList.appendChild(button);
  });

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.disabled = currentAnswer === null;
  nextBtn.textContent = state.currentIndex === questions.length - 1 ? "查看病历" : "下一题";
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
    const answerIndex = state.answers[index];
    const selectedOption = question.options[answerIndex];

    Object.entries(selectedOption.effects).forEach(([key, value]) => {
      scores[key] += value;
    });
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

function describeScore(score, meta, key) {
  const max = dimensionMaxScores[key] || 1;
  const ratio = Math.abs(score) / max;

  if (ratio < 0.15) {
    return meta.summary.neutral;
  }

  return score >= 0 ? meta.summary.positive : meta.summary.negative;
}

function normalizeScore(score, key) {
  const max = dimensionMaxScores[key] || 1;
  return ((score + max) / (max * 2)) * 100;
}

function renderDimensionCard(key, score) {
  const meta = dimensions[key];
  const max = dimensionMaxScores[key] || 1;
  const ratio = Math.abs(score) / max;
  const strongSide = score >= 0 ? meta.right : meta.left;
  let tone = "轻微发作";

  if (ratio >= 0.66) {
    tone = "重度发作";
  } else if (ratio >= 0.33) {
    tone = "中度发作";
  }

  const wrapper = document.createElement("article");
  wrapper.className = "dimension-card";
  wrapper.innerHTML = `
    <div class="dimension-head">
      <h4>${meta.label}</h4>
      <span class="dimension-score">${strongSide} · ${tone}</span>
    </div>
    <div class="dimension-bar">
      <div class="dimension-marker" style="left: ${normalizeScore(score, key)}%;"></div>
    </div>
    <div class="dimension-poles">
      <span>${meta.left}</span>
      <span>${meta.right}</span>
    </div>
    <p class="dimension-copy">${describeScore(score, meta, key)}</p>
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
    `我的杀戮尖塔2怪人测试结果：${archetype.name}`,
    archetype.hook,
    `玩法定位：${archetype.summary}`,
    `病情标签：${archetype.signature}`,
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
