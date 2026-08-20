/* ==========================================================================
   Rise - 21天分手愈合与自我关怀之旅 核心交互逻辑
   ========================================================================== */

// 21天自关怀愈合课程数据集
const CURRICULUM = [
  // Week 1: 接纳与释怀 (Days 1–7)
  {
    day: 1,
    title: "允许眼泪，给悲伤一个落脚处",
    desc: "面对突如其来的失去，感到心碎、无助甚至麻木是大脑和身体在保护你。今天，我们不需要强颜欢笑。疗愈的第一步，不是强求立刻好起来，而是允许所有的眼泪 and 痛楚如其所是地流淌。",
    prompt: "闭上眼睛，感受胸口和喉咙的温度。现在，你内心深处最真实的难过是什么？试着不带任何评判，把这些痛苦无保留地写下来，给它一个流淌的出口。",
    tasks: [
      "为自己倒一杯温水，双手握住杯壁感受温暖，慢慢喝下。",
      "做3次深长、缓慢的腹式呼吸，吸气时抚摸胸口，呼气时对自己说：‘我允许自己现在很难过。’",
      "放下手机，闭目静坐5分钟，给自己的心一个不被打扰的安全角落。"
    ]
  },
  {
    day: 2,
    title: "温柔的盾牌：为脆弱构筑安全边界",
    desc: "分别之后，对方的只言片语或社交头像都可能瞬间勾起你防不胜防的急性痛苦。建立数字边界，不是出于怨恨，而是为了给尚未愈合的心构筑一面温柔的盾牌，提供安稳的心理距离。",
    prompt: "有哪些行为（如反复看聊天记录、搜索动态）最容易刺痛你？为了保护自己，你今天愿意采取什么微小但坚定的退避行动？",
    tasks: [
      "将前任的社交媒体账号开启免打扰、归档或移出视线，把聊天记录备份并归档到不显眼处。",
      "连续3个小时将手机屏幕朝下或放在另一个房间，主动切断信息的拉扯。",
      "在纸上写下并对自己朗读：‘这道防线，是我在用行动温柔地保护我自己。’"
    ]
  },
  {
    day: 3,
    title: "抱持身体：倾听每一处紧绷与酸痛",
    desc: "心碎的痛苦不仅停留在脑海，更会沉淀在身体里——可能是胸口的压迫感、肩膀的僵硬或太阳穴的跳痛。今天，让我们用最温和的方式抚慰这具饱受压力的身体。",
    prompt: "闭上眼，由上至下扫描你的身体。你觉得哪里最沉重、紧绷或隐隐作痛？如果这个部位会说话，它想告诉你什么？",
    tasks: [
      "跟随舒缓的音乐，做5分钟温和的颈肩拉伸，让紧绷的肌肉得到物理上的释放。",
      "洗一个温暖的热水澡，闭上眼，专注体会温热的水流抚摸皮肤、带走疲惫的感觉。",
      "今天选择吃一份清淡、无负担的温热食物，好好犒劳脾惫的胃。"
    ]
  },
  {
    day: 4,
    title: "无处寄达的信：释放心底未完的余音",
    desc: "心里还堆积着无数想质问、想解释、或者想倾诉的言语，压得你喘不过气。今天，我们把它们写下来，但绝不发送给对方。这是你与自己的一场和解，把执念还给纸笔。",
    prompt: "想象对方就在你面前，将所有委屈、不甘、爱意或愤怒尽情宣泄在信里。别担心逻辑，也别修饰文字，尽情写下。（写完后，你可以将它粘贴到“倾诉阀门”中将其彻底粉碎）。",
    tasks: [
      "在下方日记区或纸上，毫无保留地写下一封绝对不会寄出去的信。",
      "将写好的信粘贴到“倾诉阀门”页面，点击粉碎，看它们消散。",
      "在文字彻底粉碎消逝后，将双手交叠铺在胸口，深深呼吸3次，将注意力带回安全的当下。"
    ]
  },
  {
    day: 5,
    title: "感官滋养：寻找重回当下的锚点",
    desc: "在急性的思绪混乱中，我们容易迷失在过去的漩涡里。大自然和我们周遭的物理环境提供了最坚固的定力锚点。通过视觉、听觉和触觉的温柔滋养，安抚你受惊的神经系统。",
    prompt: "环顾四周，有什么微小的事物能让你感到安心？是一个毛茸茸的抱枕、一杯热气腾腾的茶，还是一缕温柔的光？写下它给你的感受。",
    tasks: [
      "用双手握住一杯温热的燕麦奶或无咖啡因热茶，闭眼嗅吸热气，慢慢品尝。",
      "穿上最柔软干净的居家服，用温暖的毯子把自己包裹起来，静躺或静坐15分钟。",
      "挑选一首没有任何歌词的纯音乐，专注聆听其中乐器的起伏，让它成为你内心的背景音。"
    ]
  },
  {
    day: 6,
    title: "爱的抱持：靠近无条件接纳你的港湾",
    desc: "感到悲伤时，我们本能地想自我封闭，但这会加深孤独的幻觉。今天，不需要假装好起来，去靠近那些能无条件抱持你、听你倾诉或仅仅是安静陪伴你的温暖港湾。",
    prompt: "在你的人际网中，有谁（或哪只宠物）让你感到完全的安全与接纳？试着写下你们相处时一个让你感到放松的微小瞬间。",
    tasks: [
      "给一位让你感到踏实、温暖的朋友或家人发一条简单的问候，仅仅是感知联结的存在。",
      "如果不抗拒，向对方坦诚：‘我最近状态有些脆弱，可能不太想多说话，但有你在感觉很安心。’",
      "如果只想独处，请为自己写下3个你曾经给他人带来温暖的瞬间，重新建立自我的善意联结。"
    ]
  },
  {
    day: 7,
    title: "夺回缰绳：安于此时此地的微小掌控",
    desc: "我们无法改写已经发生的过去，也无法左右对方的决定，这些失控感是痛苦的根源。但我们可以夺回当下的缰绳。今天，让我们从眼前那些小小的、可控的微行动开始，重新找回笃定感。",
    prompt: "试着写下3件让你感到无能为力的陈年旧事，然后写下3件你今天完全可以独立决定、并且对你有益的微小事情。",
    tasks: [
      "在没有手机打扰的情况下，在有阳光或绿植的地方慢步走上10分钟，踩实大地的触觉。",
      "在自然或房间里寻找并记录3个美丽的细节：树叶随风摆动的弧度、杯中茶水反射的光、或者书脊的颜色。",
      "完成第一周的里程碑，对自己微笑并说：‘谢谢你陪我走过这七天，你真的很不容易，辛苦了。’"
    ]
  },
  // Week 2: 重塑与净化 (Days 8–14)
  {
    day: 8,
    title: "清理物理与数字能量锚点",
    desc: "分手后的遗留物不仅是物件，更是不停向你脑部发射“旧日多巴胺”信号的强信号源。今天，我们不强求你狠心丢弃，而是通过“物理与数字的双重隔离”，提升触碰旧物的心理门槛，为大脑腾出清静的运行内存。",
    prompt: "环顾你的房间 and 手机，哪个旧物或聊天截图、合影最容易瞬间击穿你的防线？你打算如何将它们安置在“心理不可见”的安全距离之外？",
    tasks: [
      "“数字隔离”：将聊天截图和旧相片备份导入隐藏或加密相册，从社交首屏隐藏或关闭前任的入口。",
      "“物理封箱”：将所有承载旧情谊的物理物件（衣物、礼物、纪念品）装箱封好，存放在视线无法触及的储物间或衣柜最深处。",
      "“空间重构”：彻底清洁并改变卧室书桌或床头柜的摆设，通过调整物品的位置来打破原有的生活视觉惯性。"
    ]
  },
  {
    day: 9,
    title: "识别依恋警报与数字阻断",
    desc: "断联初期，体内的皮质醇激增，会驱使你通过“视奸前任动态”或“翻看聊天记录”来寻求短暂缓解。这本质上是创伤依恋在拉响警报。今天，我们要建立绝对的数字红线，用清醒的认知阻断这种强迫性重复。",
    prompt: "当你想打探对方消息的渴望升起时，你的身体与情绪会发生怎样的变化（如心慌、胃部紧缩、呼吸变浅）？写下你在那一刻可以对自己说的一句清醒暗示。",
    tasks: [
      "“切断视线监视”：关闭对前任社交账号的“特别关注”或将其加入黑名单/屏蔽，承诺今天绝对不主动搜寻对方的任何ID。",
      "“依恋警报演练”：在强迫性窥探的念头升起时，立刻闭眼进行3组“4-4-4-4”箱式正念呼吸，允许这种生理冲动自然退潮。",
      "“寻找安全容器”：如果满腔话语无处宣泄，在下方的日记中毫无保留地写下，或在“倾诉阀门”中打字后一键粉碎，绝不用短信或电话试探彼此。"
    ]
  },
  {
    day: 10,
    title: "拆解生理性“戒断反应”",
    desc: "戒断期对前任的思念，在神经学上与戒瘾的生理反应高度相似。你的大脑正经历多巴胺断崖式下跌带来的失落。请记住，痛苦只是生理化学反应，它不是“余情未了”的借口，也不是“离不开他”的铁证。",
    prompt: "试着将你的悲痛与思念“客体化”为一种单纯的神经系统反应（例如“这只是多巴胺受体在挨饿”）。请在日记中客观地记录你此刻身体正在经历的各种不适感。",
    tasks: [
      "“多巴胺健康代偿”：通过吃一块高浓度黑巧克力、晒太阳10分钟或洗个温水澡，给身体提供温和的、非关系的化学抚慰。",
      "“戒断警示贴”：在纸上写下“这只是大脑在重建多巴胺水平的阶段性反应”，并将其拍照作为手机壁纸或存在备忘录置顶。",
      "“运动内啡肽替代”：出门快走或慢跑20分钟，利用身体运动产生的内啡肽和神经递质来对抗情绪戒断带来的焦虑感。"
    ]
  },
  {
    day: 11,
    title: "阻断受害者幻想与假设",
    desc: "我们的大脑为了逃避未知的空虚，会强迫性地重演过去，陷入“如果当初我不这样做关系就会好起来”的自责和幻想。这本质上是依恋未断带来的虚假控制感。今天，我们要学会为脑海中的遗憾剧场画上休止符。",
    prompt: "写下一个最近在脑海里反复折磨你的“如果当初……”遗憾场景。你如何用“这就是当时的局限，已经发生，无法更改”来跟这个幻想妥协？",
    tasks: [
      "“幻想阻断练习”：每次大脑开始重演过去或幻想对方回头时，在心中大喊“停止！”，并用力揉搓双手感受物理摩擦的温度。",
      "“现实确认清单”：写下这段关系中3个最无法妥协、导致分手的根本原因，在美化过去时拿出来逐字阅读以唤醒理智。",
      "“无条件自我拥抱”：双手交叉环抱自己，轻轻抚摸肩膀，对自己说：“我已经尽力做到了当时能做的一切，我原谅自己了。”"
    ]
  },
  {
    day: 12,
    title: "夺回日常时间的主导权",
    desc: "在关系存续时，你们习惯的作息、聊天节点构成了一种生活惯性。失去关系后，这些特定的时间窗口会变成“情感空洞”。今天，我们要重新设计这些高危时间段，用专属于你个人的新生活秩序填补空白。",
    prompt: "在一天的哪个特定时段（如早晨刚醒来、下班路上、或深夜临睡前），你最容易感到空虚和焦虑？你打算用怎样的新惯性去填补这一时间黑洞？",
    tasks: [
      "“重塑晨间第一分钟”：早晨醒来的第一件事绝不是触碰手机看新消息，而是做5次深长的腹式呼吸，然后下床为自己倒一杯温水。",
      "“高危时段生活替代”：在原先习惯高频沟通的时段安排专属个人的日常，例如泡脚听播客、手写日记、或看一章严肃书籍。",
      "“设计‘我的一天’日程”：在一张白纸上写下明天的专属安排，特意在空虚时段填入能够带来微小秩序与掌控感的事情。"
    ]
  },
  {
    day: 13,
    title: "重建以自我为中心的心理边界",
    desc: "长期依恋会让我们把对方的反馈当成确认自身价值的唯一镜子，从而在分手后产生“因为我不够好才被放弃”的自尊坍塌。今天，我们要学会把自己的价值判断与对方的评价或态度彻底解耦，夺回自我定义权。",
    prompt: "在那段关系中，对方曾对你做过什么让你自尊受挫的负面评价？你会如何在心理边界内，以客观的视角去驳斥这一主观定论？",
    tasks: [
      "“解耦负面评价”：在纸上写下前任对你的一句指责，并在旁边用红笔写上一句基于事实的、客观理性的自我肯定性描述。",
      "“阻断第三方能量消耗”：如果朋友或熟人想要向你透露前任的近况或八卦，温和但坚定地告诉对方：“我正处于断联期，请不要告诉我关于他的任何消息。”",
      "“确立自我所有权”：对着镜子看着自己的眼睛，大声对自己承诺：“我的价值本自具足，它不需要任何人的停留和肯定来证明。”"
    ]
  },
  {
    day: 14,
    title: "两周里程碑：重建个人认同起点",
    desc: "恭喜你！你已经成功跨越了最艰难的两周。断联 the 14天，是依恋能量开始逐渐回流到你自身的分水岭。今天，我们不去追逐新的亲密关系来填补寂寞，而是向内扎根，为独立的个人身份认同举行一个微小的奠基仪式。",
    prompt: "对比第一天的心力交瘁，回顾你在面对联系冲动、戒断焦虑时所展现出的坚韧。你觉得你内心深处那个独立的自己，正在哪个角落慢慢苏醒？",
    tasks: [
      "“梳理自我性格魅力”：写下3个完全不依赖关系、只属于你个人的核心品质或优势（如：执行力强、充满好奇心、对朋友真诚）。",
      "“两周半程仪式”：为自己点一盏蜡烛或香薰，听一首充满力量但非关爱情的纯轻音乐，在安静中向过去两周勇敢的自己致敬。",
      "“开启下半程期许”：在日记里，郑重写下你对未来独立生活、发展兴趣边界的3个微小愿望，带着完整的自己向第三周迈进。"
    ]
  },
  // Week 3: 重建未来 (Days 15–21)
  {
    day: 15,
    title: "【寻回本气】探寻本命五行之源",
    desc: "关系的结束，往往是旧有磁场的失衡。今天我们通过察觉五行，寻找你生命本源的“本气”。无论你是甲乙木的仁慈、丙丁火的明亮、戊己土的厚重、庚辛金的刚毅，还是壬癸水的聪慧，今天都要重回本命的中心，不再被外物消耗。",
    prompt: "如果将你自己的生命能量比作一种五行元素（木、火、土、金、水），你觉得自己最亲近哪一种？你感到现在它是在被消耗，还是在被滋养？试着写下你可以通过哪些生活细节来补充这股“本命本气”。",
    tasks: [
      "闭眼静坐5分钟，吸气入丹田，意想本命之气如暖流充盈全身，静心修己。",
      "找出一样代表自己最亲近五行属性的小物（如绿植、陶器等）放在案头，调理磁场。",
      "对自己说：“我身本具足，不假外求，此心即是本源。”"
    ]
  },
  {
    day: 16,
    title: "【木气萌发】播下破土重生的种苗",
    desc: "五行之中，木主仁、主生发。人在失意低迷时，往往是体内木气郁结、生机受阻。今天我们顺应木气萌发的规律，不求一步登天，只为自己种下一个微小的、代表生发与成长的能量种子，让生命力重新向上破土。",
    prompt: "在接下来的日子里，有什么非常简单、不费心力的小愿望或新尝试，能让你感到生命力在“微微探头”？不为成败，只为体验萌芽的喜悦，请写下你的木气萌发计划。",
    tasks: [
      "在阳台或窗前种下一颗植物种子，或者温柔地为一株已有绿植浇水、修剪枯叶以舒缓木气。",
      "到户外寻找一棵高大的树木，静静站立其下，吸纳大树进取向上的木气能量。",
      "为自己定一个今晚23点（子时）前入睡的计划，顺应子时一阳生，养护木胆之气。"
    ]
  },
  {
    day: 17,
    title: "【火之明曜】照亮内心的神明",
    desc: "火主礼、主光明、主内心的“神明”。过度依恋他人，会将自己的火光寄托于外。今天，我们通过回归独处，点燃自己心底那一团温煦的火，照亮被阴霾笼罩的心房。你不需要别人做你的光，你本就是发光体。",
    prompt: "当没有了外界的评判和期待，唯你一人时，有哪些事能让你感到内心的火花被悄然点燃、感到温暖而笃定？写下你的“独处高光时刻”。",
    tasks: [
      "独自去空旷明亮、阳光充足的地方，闭目晒背10分钟，吸收太阳纯阳之火。",
      "傍晚时分，为自己点燃一支无烟香薰蜡烛，静静凝视烛火跳动2分钟，以火净化杂念。",
      "独自享用一顿不看手机、不理琐事的午餐，感受温暖食物对脾胃的温煦。"
    ]
  },
  {
    day: 18,
    title: "【土以载物】化解怨怼的包容之力",
    desc: "土主信、主承载与化育。万物皆由土生，亦由土归。失恋的委屈与不甘，如同尖锐的石子，若放在水里会激起风浪，若放在火里会加剧焦躁，唯有托付给厚德载物的“土”元素，才能被大地无声转化，变成未来成长的养分。",
    prompt: "把那些让你感到痛楚、愤怒或委屈的纠缠念头，写在纸上。如果土地能够容纳这一切，你愿意将这些情绪埋藏并托付给大地，转化为滋养自己明天的沃土吗？写下你对这股能量的交托与告别。",
    tasks: [
      "赤脚在草地、泥土或干净的地面上踩踏或散步，与大地进行“接地气”的心灵联结，排遣浊气。",
      "用双手整理一些陶器、沙石或泥土，或者整理一下抽屉，感受物质被安稳归置的重量感以安定心神。",
      "闭上眼深呼吸，意想所有情绪尘埃随呼吸落入尘土，归于平静与安稳。"
    ]
  },
  {
    day: 19,
    title: "【金气肃降】慧剑斩断执念纠缠",
    desc: "金主义、主肃降与收敛。如果说爱意是春木生发，那么放手就需要秋金的决断。在八字命理中，刑冲克害常因气机纠缠而起。今天，我们借庚辛金的刚毅之气，化身慧剑，斩断无谓的纠缠和自损的执念，为自己的能量场画上一道不可逾越的金色边界。",
    prompt: "在当下的生活或人际关系中，有哪些人在消耗你的元气？你需要在哪里用金气的决断，为自己设立清晰、不可侵犯的能量边界？写下你的金气宣言。",
    tasks: [
      "整理并删减手机中冗余的联系人、退群或整理杂乱的邮件，实行社交能量“断舍离”以聚精会神。",
      "面对镜子，目光坚定地对自己说：“我的能量是宝贵的，我拒绝任何无谓的消耗，收回我的神气。”",
      "深呼吸，呼气时观想吸入一道银白色的庚辛金气，在身体四周形成一层坚固的保护罩。"
    ]
  },
  {
    day: 20,
    title: "【水之圆融】顺流而下的生命智慧",
    desc: "水主智、主润下与圆融。水是世间最坚韧也最柔软的存在，避高趋下，随物赋形。强留一段缘分，如同逆流而上，必遭拍打；而顺应运势的流转，如同顺流而下，终会汇入宽阔的海洋。今天，我们体悟水的智慧，接纳生命的不确定，静水流深。",
    prompt: "回首过去，有多少次你以为“绝对过不去的坎”，最终都被时间这江春水悄然带走？写下你生命中体现如水般韧性、在逆境中依然能随圆就方的时刻。",
    tasks: [
      "倒一杯温水，静静看着水面，对自己说：“我如水般柔软，也如水般不可摧毁。”然后缓缓喝下以润泽体内气血。",
      "听一段纯净的溪流、海浪或雨声的白噪音，闭目随水声呼吸，感受情绪被水冲刷干净。",
      "用温水泡脚20分钟（可在水中加少许盐），引火下行，温煦肾水，滋养本元。"
    ]
  },
  {
    day: 21,
    title: "【阴阳和合】顺应天时，乾坤自转",
    desc: "你已经走过了21天的调理与复元。阴阳和合，是天道运化之妙。人生的起伏，不过是干支在大运流年中的交替流转。关系的散场，往往预示着旧的五行失衡即将结束，新的阴阳平衡正在重塑。今天，我们顺应天时，重归乾坤自转的从容。",
    prompt: "经历了这21天五行本气的调理与释怀，你感受到了自己生命磁场发生了什么变化？给未来的自己写一封承诺信，承诺将始终顺应自己的本心与天时，不再强求，从容自渡。",
    tasks: [
      "整理一下发型和衣装，露出额头（额头为火，主运势与光明），以崭新、清爽的面貌迎接新的一天。",
      "走到户外，双手手掌朝上微微张开，深吸一口天地之间的浩然正气，滋养自身元气。",
      "对天空微笑着说一句：“顺应天时，修己以敬。我的好运，正顺流而来。”"
    ]
  }
];

// 五行无限修持任务
const INFINITE_TASKS = {
  wood: [
    "子时（23点）前关灯入睡养护胆气",
    "为一株绿植浇水或漫步于树林间",
    "闭目静坐5分钟观想生发之力"
  ],
  fire: [
    "去阳光充足处晒背10分钟吸收阳能",
    "点燃一支无烟香薰或专注凝视烛光2分钟",
    "享用一顿温热脾胃、不看手机的餐食"
  ],
  earth: [
    "赤脚在草地或干净地面散步接地气",
    "整理并归置房间内的一处杂物或抽屉",
    "意想所有负面情绪落入尘土归于安稳"
  ],
  metal: [
    "清理手机冗余群聊或实行社交能量断舍离",
    "面对镜子大声宣誓：‘我收回我的神气，拒绝内耗’",
    "观想一道坚固的金气防护罩将自己包围"
  ],
  water: [
    "用温水泡脚20分钟，引火下行，温煦肾水",
    "听一段雨声或海浪白噪音，随水声呼吸",
    "对自己说：‘我如水般柔软，也如水般不可摧毁’"
  ]
};

// Curated comfort quotes in Chinese
const COMFORT_QUOTES = [
  { text: "坍塌的不是你的生活，而是那个已经无法容纳你继续成长的旧秩序。", author: "佚名" },
  { text: "疗愈是一场漫长的放手：放下过去，接纳当下，并对未来依然怀有微小的期待。", author: "佚名" },
  { text: "你必须关上那些你不再属于的房间的门，不是出于愤怒，而是出于自尊。", author: "佚名" },
  { text: "悲伤不过是无处安放的爱。让它流淌，让它沉淀，它终将凝结成你前行的智慧。", author: "佚名" },
  { text: "你没有破碎，你只是在痛苦的缝隙中不断扩张，直到能盛放一个更丰盈的自己。", author: "佚名" }
];

// Web Audio API Sound Synthesizer (100% Offline)
class SoundSynthesizer {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.bgmAudio = null;
    this.bgmStopTimeout = null;
    this.bgmMasterGain = null;
  }

  init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playBowl() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.12, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 5.5);
      masterGain.connect(this.audioCtx.destination);

      const frequencies = [220, 443, 662, 885, 1210];
      const amplitudes = [0.8, 0.4, 0.25, 0.15, 0.08];
      const decays = [5.0, 3.8, 2.8, 1.8, 1.2];

      frequencies.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq + (Math.random() - 0.5) * 1.5, now + decays[idx]);

        gain.gain.setValueAtTime(amplitudes[idx], now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + decays[idx]);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + decays[idx] + 0.1);
      });
    } catch (e) {
      console.error("Bowl sound error", e);
    }
  }

  playPop() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.07);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.error("Pop sound error", e);
    }
  }

  playTabClick() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.02);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {
      console.error("Tab click sound error", e);
    }
  }

  playSuccessChime() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      const notes = [659.25, 987.77]; // E5, B5
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.06, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.6);
      });
    } catch (e) {
      console.error("Success chime sound error", e);
    }
  }

  playMeow() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.22);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {
      console.error("Meow sound error", e);
    }
  }

  playBark() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      [0, 0.11].forEach((delay) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(550, now + delay);
        osc.frequency.exponentialRampToValueAtTime(220, now + delay + 0.05);

        gain.gain.setValueAtTime(0.05, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.05);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.07);
      });
    } catch (e) {
      console.error("Bark sound error", e);
    }
  }

  playTrot() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.audioCtx.currentTime;
      [0, 0.14].forEach((delay) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now + delay);
        osc.frequency.exponentialRampToValueAtTime(45, now + delay + 0.03);

        gain.gain.setValueAtTime(0.08, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.03);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.04);
      });
    } catch (e) {
      console.error("Trot sound error", e);
    }
  }

  playBGM() {
    try {
      this.init();
      const now = this.audioCtx.currentTime;

      // Cancel any pending stop triggers
      if (this.bgmStopTimeout) {
        clearTimeout(this.bgmStopTimeout);
        this.bgmStopTimeout = null;
      }

      if (!this.bgmAudio) {
        this.bgmAudio = new Audio('audio/bgm.mp3');
        this.bgmAudio.loop = true;
        
        this.bgmMasterGain = this.audioCtx.createGain();
        this.bgmMasterGain.gain.setValueAtTime(0, now); // Start from silent
        
        const source = this.audioCtx.createMediaElementSource(this.bgmAudio);
        source.connect(this.bgmMasterGain);
        this.bgmMasterGain.connect(this.audioCtx.destination);
      } else {
        this.bgmMasterGain.gain.cancelScheduledValues(now);
        this.bgmMasterGain.gain.setValueAtTime(this.bgmMasterGain.gain.value, now);
      }
      
      // Smoothly fade in over 1.5 seconds
      this.bgmMasterGain.gain.linearRampToValueAtTime(0.28, now + 1.5);
      
      this.bgmAudio.play().catch(e => console.error("BGM play error", e));
    } catch (e) {
      console.error("BGM start error", e);
    }
  }

  stopBGM() {
    if (this.bgmAudio && this.bgmMasterGain) {
      try {
        const now = this.audioCtx.currentTime;
        const currentGain = this.bgmMasterGain;
        const currentAudio = this.bgmAudio;
        
        currentGain.gain.cancelScheduledValues(now);
        currentGain.gain.setValueAtTime(currentGain.gain.value, now);
        currentGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
        
        if (this.bgmStopTimeout) clearTimeout(this.bgmStopTimeout);
        
        // Pause audio element after fade-out finishes to prevent popping
        this.bgmStopTimeout = setTimeout(() => {
          try {
            currentAudio.pause();
          } catch (e) {}
        }, 1300);
      } catch (e) {}
    }
  }
}

// Local Storage State Coordinator
class StateManager {
  constructor() {
    this.storageKey = 'rise_recovery_state_zh';
    this.state = this.loadState();
  }

  loadState() {
    const defaultState = {
      initialized: false,
      currentDay: 1,
      furthestUnlocked: 1,
      completedDays: {},
      journals: {},
      moods: {},
      checklistStates: {},
      infiniteMode: false,
      infiniteDayCount: 22,
      selectedElement: 'wood',
      selectedPet: 'cat'
    };
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? { ...defaultState, ...JSON.parse(data) } : defaultState;
    } catch (e) {
      console.error("无法读取本地存储，使用临时状态", e);
      return defaultState;
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error("保存状态至本地失败", e);
    }
  }

  completeDay(dayNum) {
    this.state.completedDays[dayNum] = true;
    if (dayNum === this.state.furthestUnlocked && this.state.furthestUnlocked < 21) {
      this.state.furthestUnlocked = dayNum + 1;
      this.state.currentDay = dayNum + 1;
    }
    this.save();
  }

  saveJournal(dayNum, text) {
    this.state.journals[dayNum] = text;
    this.save();
  }

  saveMood(dayNum, mood) {
    this.state.moods[dayNum] = mood;
    this.save();
  }

  saveChecklist(dayNum, index, checked) {
    if (!this.state.checklistStates[dayNum]) {
      this.state.checklistStates[dayNum] = [];
    }
    this.state.checklistStates[dayNum][index] = checked;
    this.save();
  }

  reset() {
    localStorage.removeItem(this.storageKey);
    this.state = this.loadState();
    this.save();
  }
}

// Main App Controller
class App {
  constructor() {
    this.stateManager = new StateManager();
    this.synth = new SoundSynthesizer();
    
    // UI Selectors
    this.tabs = document.querySelectorAll('.nav-item');
    this.tabContents = document.querySelectorAll('.tab-content');
    
    this.onboardingView = document.getElementById('onboarding-view');
    this.tabJourney = document.getElementById('tab-journey');
    
    // Journey Dashboard Elements
    this.currentDayLabel = document.getElementById('current-day-label');
    this.currentDayTitle = document.getElementById('current-day-title');
    this.daySwitchText = document.getElementById('day-switch-text');
    this.currentDayDesc = document.getElementById('current-day-desc');
    this.currentDayTasks = document.getElementById('current-day-tasks');
    this.currentDayPrompt = document.getElementById('current-day-prompt');
    this.journalInput = document.getElementById('journal-input');
    this.wordCountLabel = document.getElementById('word-count');
    this.saveStatusLabel = document.getElementById('save-status');
    
    this.btnPrevDay = document.getElementById('btn-prev-day');
    this.btnNextDay = document.getElementById('btn-next-day');
    this.btnCompleteDay = document.getElementById('btn-complete-day');
    
    this.celebrationDialog = document.getElementById('celebration-dialog');
    this.btnCloseCelebration = document.getElementById('btn-close-celebration');
    
    this.settingsDialog = document.getElementById('settings-dialog');
    this.btnConfirmReset = document.getElementById('btn-confirm-reset');
    this.btnCancelReset = document.getElementById('btn-cancel-reset');
    
    this.progressPercentage = document.getElementById('progress-percentage');
    this.progressBar = document.getElementById('progress-bar');
    
    this.btnStartJourney = document.getElementById('btn-start-journey');
    
    // Component Initiators
    this.initTabs();
    this.initOnboarding();
    this.initDayController();
    this.initJournalAutoSave();
    this.initBreathingWidget();
    this.initMoodCheckin();
    this.initReleaseValve();
    this.initSafeHarborQuotes();
    this.initEmergencyUrge();
    this.initSelfLoveWinJar();
    this.initElementSelector();
    this.initLunarSync();
    this.initEscapeCabin();
    this.initBgmController();
    
    this.renderProgress();
    this.renderActiveDay();
  }

  initBgmController() {
    const btnBgm = document.getElementById('btn-toggle-bgm');
    if (!btnBgm) return;
    
    let isPlaying = false;
    
    btnBgm.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        btnBgm.textContent = "⏸️ 暂停音乐";
        btnBgm.classList.add('music-playing');
        this.synth.playBGM();
      } else {
        btnBgm.textContent = "🎵 开启音乐";
        btnBgm.classList.remove('music-playing');
        this.synth.stopBGM();
        this.synth.playTabClick();
      }
    });
  }

  initTabs() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (!this.stateManager.state.initialized) {
          return;
        }

        // Play tactile click
        this.synth.playTabClick();

        this.tabs.forEach(t => t.classList.remove('active'));
        this.tabContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        const targetTab = document.getElementById(`tab-${tab.dataset.tab}`);
        if (targetTab) {
          targetTab.classList.add('active');
        }
        
        if (tab.dataset.tab === 'roadmap') {
          this.renderRoadmap();
        } else if (tab.dataset.tab === 'moods') {
          this.renderMoodDashboard();
        } else if (tab.dataset.tab === 'release') {
          window.dispatchEvent(new Event('resize'));
        }
      });
    });
  }

  initOnboarding() {
    if (!this.stateManager.state.initialized) {
      this.onboardingView.classList.add('active');
      this.tabJourney.style.display = 'none';
      this.tabs.forEach(tab => tab.setAttribute('disabled', 'true'));
    } else {
      this.onboardingView.classList.remove('active');
      this.tabJourney.style.display = 'block';
    }

    this.btnStartJourney.addEventListener('click', () => {
      this.stateManager.state.initialized = true;
      this.stateManager.save();
      
      this.synth.playSuccessChime();
      this.onboardingView.classList.remove('active');
      this.tabJourney.style.display = 'block';
      this.tabs.forEach(tab => tab.removeAttribute('disabled'));
      this.renderProgress();
      this.renderActiveDay();
    });
  }

  renderProgress() {
    const state = this.stateManager.state;
    if (state.infiniteMode) {
      const percentage = (state.infiniteDayCount % 100) || 100;
      const container = document.querySelector('.progress-text');
      if (container) {
        container.innerHTML = `<span>无限新生 · 百日筑基中</span> <strong>累计打卡第 ${state.infiniteDayCount} 天</strong>`;
      }
      this.progressBar.style.width = `${percentage}%`;
    } else {
      const completedCount = Object.keys(state.completedDays).length;
      const percentage = Math.round((completedCount / 21) * 100);
      this.progressPercentage.textContent = `${percentage}%`;
      this.progressBar.style.width = `${percentage}%`;
    }
  }

  renderActiveDay() {
    const state = this.stateManager.state;
    const dayIndex = state.currentDay - 1;
    const dayData = CURRICULUM[dayIndex];
    if (!dayData) return;

    const selectorContainer = document.getElementById('element-selector-container');

    if (state.infiniteMode && state.currentDay === 21) {
      this.currentDayLabel.textContent = `筑基`;
      this.currentDayTitle.textContent = "无限新生 · 培元自渡";
      this.daySwitchText.textContent = `无限新生 · 第 ${state.infiniteDayCount} 天`;
      this.currentDayDesc.textContent = "在无限期的陪伴中，每天选择一种五行元素进行自我能量培植。调理本命元气，顺应天地运转。";
      this.currentDayPrompt.textContent = "思考引导：今天有什么体悟或自省？写下此刻脑海里的思绪，给它一个安稳的寄存处。";
      
      if (selectorContainer) {
        selectorContainer.classList.remove('hidden');
        document.querySelectorAll('.element-btn').forEach(btn => {
          if (btn.dataset.element === state.selectedElement) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }

      this.btnCompleteDay.removeAttribute('disabled');
      this.btnCompleteDay.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="display:inline; vertical-align:middle; margin-right:4px;">
          <polyline points="20 6 9 17 4 12"/>
        </svg> 存入今日元气
      `;
      
      this.btnPrevDay.disabled = false;
      this.btnNextDay.disabled = true;
    } else {
      this.currentDayLabel.textContent = `Day ${dayData.day}`;
      this.currentDayTitle.textContent = dayData.title;
      this.daySwitchText.textContent = `第 ${dayData.day} 天 / 21天`;
      this.currentDayDesc.textContent = dayData.desc;
      this.currentDayPrompt.textContent = `思考引导：${dayData.prompt}`;

      if (selectorContainer) {
        selectorContainer.classList.add('hidden');
      }

      if (state.completedDays[dayData.day]) {
        this.btnCompleteDay.setAttribute('disabled', 'true');
        this.btnCompleteDay.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="display:inline; vertical-align:middle; margin-right:4px;">
            <polyline points="20 6 9 17 4 12"/>
          </svg> 今日已打卡
        `;
      } else {
        this.btnCompleteDay.removeAttribute('disabled');
        this.btnCompleteDay.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="display:inline; vertical-align:middle; margin-right:4px;">
            <polyline points="20 6 9 17 4 12"/>
          </svg> 打卡完成今日
        `;
      }

      this.btnPrevDay.disabled = dayData.day <= 1;
      
      if (state.infiniteMode) {
        this.btnNextDay.disabled = state.currentDay >= 21;
      } else {
        this.btnNextDay.disabled = dayData.day >= state.furthestUnlocked;
      }
    }

    const journalText = state.journals[dayData.day] || "";
    this.journalInput.value = journalText;
    this.updateWordCount(journalText);

    // Render tasks list
    this.currentDayTasks.innerHTML = "";
    const checklistStates = state.checklistStates[dayData.day] || [];
    
    const currentTasksList = (state.infiniteMode && state.currentDay === 21) 
      ? INFINITE_TASKS[state.selectedElement] 
      : dayData.tasks;

    currentTasksList.forEach((taskText, idx) => {
      const isChecked = checklistStates[idx] || false;
      const li = document.createElement('li');
      li.className = `task-item ${isChecked ? 'completed' : ''}`;
      li.innerHTML = `
        <div class="task-checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span class="task-label">${taskText}</span>
      `;

      li.addEventListener('click', () => {
        const currentlyChecked = li.classList.contains('completed');
        if (currentlyChecked) {
          li.classList.remove('completed');
          this.stateManager.saveChecklist(dayData.day, idx, false);
          this.synth.playTabClick();
        } else {
          li.classList.add('completed');
          this.stateManager.saveChecklist(dayData.day, idx, true);
          this.synth.playSuccessChime();
        }
      });

      this.currentDayTasks.appendChild(li);
    });

    const activeMood = this.stateManager.state.moods[dayData.day];
    document.querySelectorAll('.mood-btn').forEach(btn => {
      if (btn.dataset.mood === activeMood) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
  }

  initDayController() {
    this.btnPrevDay.addEventListener('click', () => {
      if (this.stateManager.state.currentDay > 1) {
        this.stateManager.state.currentDay -= 1;
        this.stateManager.save();
        this.synth.playTabClick();
        this.renderActiveDay();
      }
    });

    this.btnNextDay.addEventListener('click', () => {
      const state = this.stateManager.state;
      const limit = state.infiniteMode ? 21 : state.furthestUnlocked;
      if (state.currentDay < limit) {
        state.currentDay += 1;
        this.stateManager.save();
        this.synth.playTabClick();
        this.renderActiveDay();
      }
    });

    this.btnCompleteDay.addEventListener('click', () => {
      const state = this.stateManager.state;
      const activeDay = state.currentDay;
      
      if (state.infiniteMode && activeDay === 21) {
        state.infiniteDayCount += 1;
        state.checklistStates[21] = [false, false, false];
        
        state.journals[21] = "";
        this.journalInput.value = "";
        this.updateWordCount("");
        
        if (this.triggerStarDrop) {
          this.triggerStarDrop();
        }
        
        this.stateManager.save();
        this.synth.playSuccessChime();
        this.renderProgress();
        this.renderActiveDay();
        
        const infinitePhrases = [
          "今日元气已存入！你的本源磁场正在一步步稳固。",
          "百日筑基，贵在坚持。今日培元已完成！",
          "元气满满！自爱之星已落入你的储蓄罐。",
          "顺应天时，每日修己。今日份元气已封存！"
        ];
        const randPhrase = infinitePhrases[Math.floor(Math.random() * infinitePhrases.length)];
        document.getElementById('celebration-message').textContent = randPhrase;
        this.celebrationDialog.showModal();
        
      } else {
        const dayData = CURRICULUM[activeDay - 1];
        dayData.tasks.forEach((_, idx) => {
          this.stateManager.saveChecklist(activeDay, idx, true);
        });

        this.stateManager.completeDay(activeDay);
        this.synth.playSuccessChime();
        this.renderProgress();
        this.renderActiveDay();

        if (activeDay === 21) {
          document.getElementById('celebration-message').textContent = "恭喜你完成了21天基础愈合挑战！这只是自我重建的起点。你已解锁‘无限新生·百日筑基’修行模式。接下来，你可以在这里进行无限期的心情记录、写横格日记，并自由选择每日的五行培元清单。";
        } else {
          const phrases = [
            "你今天又向前迈进了一步，请为你内心的坚韧感到骄傲。",
            "又前行了一天，离内心的安宁又近了一点。你做得很棒。",
            "一个微小的打卡，是心灵重建的基石。继续温柔对待自己。",
            "成长无声，但力量无穷。今晚，请让自己好好放松。",
            "你完成了今天的全部关怀任务。深吸一口气，晚安。"
          ];
          const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
          document.getElementById('celebration-message').textContent = randomPhrase;
        }
        
        this.celebrationDialog.showModal();
      }
    });

    this.btnCloseCelebration.addEventListener('click', () => {
      this.synth.playTabClick();
      this.celebrationDialog.close();
      const state = this.stateManager.state;
      if (state.currentDay === 21 && !state.infiniteMode) {
        state.infiniteMode = true;
        this.stateManager.save();
        this.renderProgress();
      }
      this.renderActiveDay();
    });
  }

  initJournalAutoSave() {
    let timeout = null;
    this.journalInput.addEventListener('input', (e) => {
      const activeDay = this.stateManager.state.currentDay;
      const text = e.target.value;
      
      this.updateWordCount(text);
      this.saveStatusLabel.className = "save-status visible saving";

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.stateManager.saveJournal(activeDay, text);
        this.saveStatusLabel.className = "save-status visible";
      }, 800);
    });

    // 绑定一键情绪标签与白卷留白交互
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const activeDay = this.stateManager.state.currentDay;
        const tag = btn.dataset.tag;
        let text = this.journalInput.value;

        // Play click feedback
        this.synth.playTabClick();

        if (tag === '只想留白 🌸') {
          text = "🌸 今天我给自己放假，允许大脑发空。";
        } else {
          if (text.trim() === "") {
            text = `【今天情绪：${tag}】`;
          } else {
            if (text.endsWith('\n') || text.endsWith(' ')) {
              text += `【今天情绪：${tag}】`;
            } else {
              text += `\n【今天情绪：${tag}】`;
            }
          }
        }
        
        this.journalInput.value = text;
        this.updateWordCount(text);
        
        this.saveStatusLabel.className = "save-status visible saving";
        this.stateManager.saveJournal(activeDay, text);
        setTimeout(() => {
          this.saveStatusLabel.className = "save-status visible";
        }, 500);
      });
    });
  }

  updateWordCount(text) {
    const count = text.trim() === "" ? 0 : text.trim().length;
    this.wordCountLabel.textContent = `${count} 字`;
  }

  renderRoadmap() {
    const grid = document.getElementById('roadmap-grid');
    grid.innerHTML = "";
    
    const state = this.stateManager.state;
    
    CURRICULUM.forEach((dayData) => {
      const dayBox = document.createElement('div');
      
      let statusClass = "locked";
      let iconMarkup = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="roadmap-status-icon">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      `;

      if (state.completedDays[dayData.day]) {
        statusClass = "completed";
        iconMarkup = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="roadmap-status-icon">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        `;
      } else if (dayData.day === state.currentDay) {
        statusClass = "active-day";
        iconMarkup = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="roadmap-status-icon">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        `;
      } else if (dayData.day <= state.furthestUnlocked) {
        statusClass = "unlocked";
        iconMarkup = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="roadmap-status-icon">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        `;
      }

      dayBox.className = `roadmap-day ${statusClass}`;
      dayBox.innerHTML = `
        <span class="roadmap-day-num">${dayData.day}</span>
        ${iconMarkup}
      `;

      if (statusClass !== "locked") {
        dayBox.addEventListener('click', () => {
          this.synth.playTabClick();
          state.currentDay = dayData.day;
          this.stateManager.save();
          this.renderActiveDay();
          
          document.getElementById('btn-journey').click();
        });
      }

      grid.appendChild(dayBox);
    });
  }

  initBreathingWidget() {
    const btnToggle = document.getElementById('btn-toggle-breath');
    const breathCircle = document.getElementById('breath-circle');
    const countdown = document.getElementById('breath-countdown');
    const instruction = document.getElementById('breath-instruction');
    const dots = document.querySelectorAll('.pattern-indicator .p-dot');
    
    let isBreathing = false;
    let timer = null;
    let currentPhaseIdx = 0;
    let phaseSeconds = 4;

    const phases = [
      { name: "inhale", text: "缓缓吸气...", scale: "1.3" },
      { name: "hold1", text: "保持屏息...", scale: "1.3" },
      { name: "exhale", text: "慢慢呼气...", scale: "0.7" },
      { name: "hold2", text: "保持空肺屏息...", scale: "0.7" }
    ];

    const stepBreath = () => {
      if (phaseSeconds === 0) {
        phaseSeconds = 4;
        currentPhaseIdx = (currentPhaseIdx + 1) % phases.length;
      }

      const phase = phases[currentPhaseIdx];
      
      instruction.textContent = phase.text;
      
      const targetScale = `scale(${phase.scale})`;
      if (breathCircle.style.transform !== targetScale) {
        breathCircle.style.transition = "transform 4s cubic-bezier(0.4, 0, 0.2, 1)";
        breathCircle.style.transform = targetScale;
      }
      
      dots.forEach(dot => {
        if (dot.dataset.phase === phase.name) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      countdown.textContent = phaseSeconds;
      phaseSeconds -= 1;
    };

    btnToggle.addEventListener('click', () => {
      this.synth.playTabClick();
      if (isBreathing) {
        isBreathing = false;
        clearInterval(timer);
        btnToggle.textContent = "开始深呼吸";
        btnToggle.className = "btn btn-secondary btn-sm";
        countdown.textContent = "4";
        instruction.textContent = "点击开始";
        breathCircle.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        breathCircle.style.transform = "scale(0.7)";
        dots.forEach((d, i) => {
          if (i === 0) d.classList.add('active');
          else d.classList.remove('active');
        });
      } else {
        isBreathing = true;
        btnToggle.textContent = "暂停呼吸";
        btnToggle.className = "btn btn-primary btn-sm";
        currentPhaseIdx = 0;
        phaseSeconds = 4;
        
        stepBreath();
        timer = setInterval(stepBreath, 1000);
      }
    });
  }

  initMoodCheckin() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const activeDay = this.stateManager.state.currentDay;
        const mood = btn.dataset.mood;
        
        this.stateManager.saveMood(activeDay, mood);
        this.synth.playSuccessChime();
        
        document.querySelectorAll('.mood-btn').forEach(b => {
          b.classList.remove('selected');
        });
        btn.classList.add('selected');
        
        const originalText = this.saveStatusLabel.innerHTML;
        this.saveStatusLabel.innerHTML = "<span class='indicator-dot'></span> 心情已记录";
        this.saveStatusLabel.className = "save-status visible";
        
        setTimeout(() => {
          this.saveStatusLabel.className = "save-status visible";
          this.saveStatusLabel.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  renderMoodDashboard() {
    const timeline = document.getElementById('mood-timeline');
    const breakdownList = document.getElementById('mood-breakdown-list');
    const state = this.stateManager.state;
    
    timeline.innerHTML = "";
    
    const currentDay = state.currentDay;
    const startDay = Math.max(1, currentDay - 3);
    const endDay = Math.min(21, startDay + 6);
    
    const moodEmojis = {
      grieving: "😢",
      angry: "😠",
      anxious: "😰",
      numb: "😶",
      peaceful: "😌",
      hopeful: "🌅"
    };

    const moodNamesZh = {
      grieving: "悲痛",
      angry: "愤怒",
      anxious: "焦虑",
      numb: "木然",
      peaceful: "平静",
      hopeful: "期待"
    };

    for (let d = startDay; d <= endDay; d++) {
      const dayNode = document.createElement('div');
      const mood = state.moods[d];
      
      dayNode.className = "timeline-day";
      if (mood) {
        dayNode.setAttribute('data-mood', mood);
        dayNode.innerHTML = `
          <span class="timeline-day-num">Day ${d}</span>
          <span class="timeline-emoji">${moodEmojis[mood] || "🌱"}</span>
          <span class="timeline-label">${moodNamesZh[mood]}</span>
        `;
      } else {
        dayNode.innerHTML = `
          <span class="timeline-day-num">Day ${d}</span>
          <div class="timeline-empty-dot"></div>
          <span class="timeline-label">—</span>
        `;
      }
      timeline.appendChild(dayNode);
    }

    const counts = { grieving: 0, angry: 0, anxious: 0, numb: 0, peaceful: 0, hopeful: 0 };
    let totalLogs = 0;
    
    Object.values(state.moods).forEach(m => {
      if (counts[m] !== undefined) {
        counts[m] += 1;
        totalLogs += 1;
      }
    });

    breakdownList.innerHTML = "";
    Object.keys(counts).forEach(m => {
      const count = counts[m];
      const percent = totalLogs > 0 ? Math.round((count / totalLogs) * 100) : 0;
      
      const item = document.createElement('div');
      item.className = "breakdown-item";
      item.innerHTML = `
        <div class="breakdown-info">
          <div class="breakdown-label-group">
            <span>${moodEmojis[m]}</span>
            <span>${moodNamesZh[m]}</span>
          </div>
          <span>${percent}% (${count}天)</span>
        </div>
        <div class="breakdown-bar-bg">
          <div class="breakdown-bar-fill ${m}" style="width: ${percent}%;"></div>
        </div>
      `;
      breakdownList.appendChild(item);
    });
  }

  initReleaseValve() {
    const canvas = document.getElementById('release-canvas');
    const ctx = canvas.getContext('2d');
    const overlay = document.getElementById('release-overlay');
    const input = document.getElementById('release-input');
    const btnDissolve = document.getElementById('btn-dissolve-text');

    let particles = [];
    let animationFrame = null;
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
      const words = text.split("");
      let line = '';
      const lines = [];
      
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n];
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          lines.push(line);
          line = words[n];
        } else {
          line = testLine;
        }
      }
      lines.push(line);
      
      let startY = y - ((lines.length - 1) * lineHeight) / 2;
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, startY + (i * lineHeight));
      }
    };

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2 + 1;
        
        this.vx = (Math.random() - 0.5) * 2.2;
        this.vy = -(Math.random() * 2.2 + 0.8);
        this.alpha = 1;
        this.decay = Math.random() * 0.008 + 0.004;
        
        this.windAngle = Math.random() * Math.PI * 2;
        this.windSpeed = Math.random() * 0.15 + 0.05;
        this.gravity = 0.025;
      }

      update() {
        const currentGravity = this.gravity + (Math.random() - 0.5) * 0.006;
        this.vy += currentGravity;
        this.vx *= 0.985;
        this.vy *= 0.985;
        this.x += this.vx;
        this.y += this.vy;
        this.windAngle += (Math.random() - 0.5) * 0.15 + 0.05;
        const currentWindSpeed = this.windSpeed + (Math.random() - 0.5) * 0.03;
        this.x += Math.sin(this.windAngle) * currentWindSpeed;
        this.alpha -= this.decay;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const animateDissolution = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      let alive = false;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.alpha > 0) {
          p.update();
          p.draw(ctx);
          alive = true;
        }
      }

      if (alive) {
        animationFrame = requestAnimationFrame(animateDissolution);
      } else {
        particles = [];
        ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
        
        overlay.classList.remove('hidden');
        input.value = "";
      }
    };

    btnDissolve.addEventListener('click', () => {
      const rawText = input.value.trim();
      if (rawText === "") return;

      this.synth.playSuccessChime();
      overlay.classList.add('hidden');

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "italic 400 1.2rem 'Newsreader', serif";

      const maxTextWidth = Math.min(width - 60, 360);
      wrapText(ctx, rawText, width / 2, height / 2, maxTextWidth, 28);

      const dpr = window.devicePixelRatio || 1;
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;

      ctx.clearRect(0, 0, width, height);

      const palette = ["#F5A3B7", "#B2E2D2", "#ffb74d", "#ba68c8", "#64b5f6", "#ffffff"];

      particles = [];
      const step = 4;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const idx = (y * canvas.width + x) * 4;
          const alpha = pixels[idx + 3];
          
          if (alpha > 120) {
            const posX = x / dpr;
            const posY = y / dpr;
            
            const color = palette[Math.floor(Math.random() * palette.length)];
            particles.push(new Particle(posX, posY, color));
          }
        }
      }

      if (particles.length === 0) {
        overlay.classList.remove('hidden');
        input.value = "";
        return;
      }

      if (animationFrame) cancelAnimationFrame(animationFrame);
      animateDissolution();
    });

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.preset;
        if (!text) return;
        
        input.value = text;
        btnDissolve.click();
      });
    });
  }

  initSafeHarborQuotes() {
    const textEl = document.getElementById('quote-display');
    const authorEl = document.getElementById('quote-author');
    const dotsEl = document.getElementById('quote-dots');
    
    let activeIdx = 0;

    const renderQuote = (idx) => {
      const q = COMFORT_QUOTES[idx];
      
      textEl.style.opacity = 0;
      authorEl.style.opacity = 0;

      setTimeout(() => {
        textEl.textContent = `“${q.text}”`;
        authorEl.textContent = `— ${q.author}`;
        
        textEl.style.opacity = 1;
        authorEl.style.opacity = 1;
        
        document.querySelectorAll('.quote-dots .quote-dot').forEach((dot, i) => {
          if (i === idx) dot.classList.add('active');
          else dot.classList.remove('active');
        });
      }, 300);
    };

    dotsEl.innerHTML = "";
    COMFORT_QUOTES.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `quote-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        this.synth.playTabClick();
        activeIdx = idx;
        renderQuote(idx);
      });
      dotsEl.appendChild(dot);
    });

    setInterval(() => {
      activeIdx = (activeIdx + 1) % COMFORT_QUOTES.length;
      renderQuote(activeIdx);
    }, 8000);
  }

  initEmergencyUrge() {
    const btnUrge = document.getElementById('btn-emergency-urge');
    const dialog = document.getElementById('emergency-dialog');
    
    const step1 = document.getElementById('emergency-step-1');
    const step2 = document.getElementById('emergency-step-2');
    const step3 = document.getElementById('emergency-step-3');
    
    const btnSkip = document.getElementById('btn-skip-breath');
    const btnOath = document.getElementById('btn-confirm-oath');
    const btnClose = document.getElementById('btn-close-emergency');
    
    const timerEl = document.getElementById('emergency-timer');
    const breathTxt = document.getElementById('emergency-breath-txt');
    
    let countdown = 60;
    let timer = null;
    let breathPhaseInterval = null;
    
    const resetDialog = () => {
      clearInterval(timer);
      clearInterval(breathPhaseInterval);
      countdown = 60;
      timerEl.textContent = "60";
      breathTxt.textContent = "准备吸气...";
      btnSkip.disabled = true;
      btnSkip.textContent = "请专注呼吸 60 秒";
      
      const circle = document.querySelector('.emergency-breath-circle');
      if (circle) {
        circle.style.animation = 'none';
        circle.offsetHeight;
        circle.style.animation = 'emergencyBreathAnim 8s ease-in-out infinite';
      }
      
      step1.classList.remove('hidden');
      step2.classList.add('hidden');
      step3.classList.add('hidden');
    };
    
    const startBreathingTimer = () => {
      timer = setInterval(() => {
        countdown--;
        timerEl.textContent = countdown;
        if (countdown <= 0) {
          clearInterval(timer);
          clearInterval(breathPhaseInterval);
          btnSkip.disabled = false;
          btnSkip.textContent = "继续理智宣誓 (Step 2)";
          breathTxt.textContent = "呼吸完成，你可以点击下一步了";
        }
      }, 1000);
      
      let breathSec = 0;
      breathPhaseInterval = setInterval(() => {
        breathSec++;
        if (breathSec % 8 < 4) {
          breathTxt.textContent = "缓缓吸气...";
        } else {
          breathTxt.textContent = "慢慢呼气...";
        }
      }, 1000);
    };

    if (btnUrge && dialog) {
      btnUrge.addEventListener('click', () => {
        this.synth.playSuccessChime();
        resetDialog();
        dialog.showModal();
        startBreathingTimer();
      });
      
      btnSkip.addEventListener('click', () => {
        this.synth.playTabClick();
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
      });
      
      btnOath.addEventListener('click', () => {
        this.synth.playSuccessChime();
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
      });
      
      btnClose.addEventListener('click', () => {
        this.synth.playTabClick();
        clearInterval(timer);
        clearInterval(breathPhaseInterval);
        dialog.close();
      });
      
      dialog.addEventListener('close', () => {
        clearInterval(timer);
        clearInterval(breathPhaseInterval);
      });
    }
  }

  initSelfLoveWinJar() {
    const winInput = document.getElementById('win-input');
    const btnSave = document.getElementById('btn-save-win');
    const starCountEl = document.getElementById('jar-star-count');
    const latestWinEl = document.getElementById('jar-latest-win');
    const jarContainer = document.getElementById('jar-stars-container');
    
    const storageKey = 'rise_self_love_wins';
    
    const getWins = () => {
      try {
        const data = localStorage.getItem(storageKey);
        return data ? JSON.parse(data) : [];
      } catch (e) {
        return [];
      }
    };
    
    const saveWin = (text) => {
      const wins = getWins();
      wins.push({ text, date: new Date().toISOString() });
      localStorage.setItem(storageKey, JSON.stringify(wins));
      return wins.length;
    };
    
    const renderStar = (isFalling = false, customTop = null, customLeft = null, customAngle = null) => {
      const star = document.createElement('div');
      star.className = 'jar-star';
      
      const targetTop = customTop !== null ? customTop : (Math.random() * 40 + 125);
      const targetLeft = customLeft !== null ? customLeft : (Math.random() * 110 + 15);
      const targetAngle = customAngle !== null ? customAngle : (Math.random() * 60 - 30);
      
      star.style.setProperty('--target-top', `${targetTop}px`);
      star.style.setProperty('--target-left', `${targetLeft}px`);
      star.style.setProperty('--target-angle', `${targetAngle}deg`);
      
      if (isFalling) {
        star.classList.add('falling');
        star.addEventListener('animationend', () => {
          star.classList.remove('falling');
          star.style.top = `${targetTop}px`;
          star.style.left = `${targetLeft}px`;
          star.style.transform = `translate(-50%, 0) rotate(${targetAngle}deg)`;
        });
      } else {
        star.style.top = `${targetTop}px`;
        star.style.left = `${targetLeft}px`;
        star.style.transform = `translate(-50%, 0) rotate(${targetAngle}deg)`;
      }
      
      jarContainer.appendChild(star);
    };
    
    const renderAllStars = () => {
      jarContainer.innerHTML = '';
      const wins = getWins();
      starCountEl.textContent = wins.length;
      
      if (wins.length > 0) {
        latestWinEl.textContent = `最新：${wins[wins.length - 1].text}`;
      } else {
        latestWinEl.textContent = '';
      }
      
      wins.forEach(() => {
        renderStar(false);
      });
    };
    
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const text = winInput.value.trim();
        if (text === '') return;
        
        this.synth.playSuccessChime();
        const newCount = saveWin(text);
        winInput.value = '';
        starCountEl.textContent = newCount;
        latestWinEl.textContent = `最新：${text}`;
        
        renderStar(true);
      });
    }
    
    if (winInput) {
      winInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          btnSave.click();
        }
      });
    }

    // 绑定一键自爱气泡投掷交互
    document.querySelectorAll('.bubble-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.bubble;
        if (!text) return;
        
        this.synth.playSuccessChime();
        const newCount = saveWin(text);
        if (winInput) winInput.value = '';
        starCountEl.textContent = newCount;
        latestWinEl.textContent = `最新：${text}`;
        
        renderStar(true);
      });
    });
    
    renderAllStars();
    
    this.triggerStarDrop = () => {
      renderStar(true);
    };
    
    const originalReset = this.stateManager.reset;
    this.stateManager.reset = () => {
      originalReset.call(this.stateManager);
      localStorage.removeItem(storageKey);
    };
  }

  initElementSelector() {
    const buttons = document.querySelectorAll('.element-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const state = this.stateManager.state;
        state.selectedElement = btn.dataset.element;
        state.checklistStates[21] = [false, false, false];
        this.stateManager.save();
        
        this.synth.playTabClick();

        buttons.forEach(b => {
          if (b.dataset.element === state.selectedElement) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        
        this.renderActiveDay();
      });
    });
  }

  initLunarSync() {
    const iconEl = document.getElementById('lunar-icon');
    const nameEl = document.getElementById('lunar-name');
    const titleEl = document.getElementById('lunar-phase-title');
    const descEl = document.getElementById('lunar-phase-desc');
    
    if (!iconEl) return;
    
    const getLunarAge = (date) => {
      const baseDate = new Date('1999-08-11T19:08:00');
      const diffMs = date.getTime() - baseDate.getTime();
      const synodicMonthMs = 29.530588853 * 24 * 60 * 60 * 1000;
      const age = (diffMs % synodicMonthMs) / (24 * 60 * 60 * 1000);
      return age;
    };
    
    const age = getLunarAge(new Date());
    
    let icon = "🌑";
    let name = "新月";
    let title = "新月期（播种自爱）";
    let desc = "当前月亮微光初萌。宜在日记本中写下你对未来新生活的自我期许，播下专注自我的种子。";
    
    if (age < 1.5 || age >= 28) {
      icon = "🌑";
      name = "新月";
      title = "新月期（播种自爱）";
      desc = "当前月亮微光初萌。宜在日记本中写下你对未来新生活的自我期许，播下专注自我的种子。";
    } else if (age >= 1.5 && age < 6.5) {
      icon = "🌒";
      name = "峨眉月";
      title = "盈月期（培植元气）";
      desc = "月光逐渐丰满。宜努力践行五行任务，为体内小宇宙注入饱满生机。";
    } else if (age >= 6.5 && age < 9.5) {
      icon = "🌓";
      name = "上弦月";
      title = "盈月期（培植元气）";
      desc = "半月当空，力量上升。宜努力践行五行任务，为体内小宇宙注入饱满生机。";
    } else if (age >= 9.5 && age < 13.5) {
      icon = "🌔";
      name = "盈凸月";
      title = "盈月期（培植元气）";
      desc = "明亮而充沛。宜努力践行五行任务，为体内小宇宙注入饱满生机。";
    } else if (age >= 13.5 && age < 16.5) {
      icon = "🌕";
      name = "满月";
      title = "满月期（断念释怀）";
      desc = "能量达到峰值，潮汐引力最大。最适合将过去那些顽固的执念、悲痛写在“倾诉阀门”里一键粉碎，彻底放手。";
    } else if (age >= 16.5 && age < 21.5) {
      icon = "🌖";
      name = "亏凸月";
      title = "残月期（净化休整）";
      desc = "光芒开始收敛。宜多泡脚、早睡，静默洗涤身心，调整内在节奏。";
    } else if (age >= 21.5 && age < 24.5) {
      icon = "🌗";
      name = "下弦月";
      title = "残月期（净化休整）";
      desc = "半月低垂，万物沉寂。宜多泡脚、睡觉，静默休整。";
    } else {
      icon = "🌘";
      name = "残月";
      title = "残月期（净化休整）";
      desc = "月影将尽，宜收敛心神。宜多泡脚、睡觉，静默休整，迎接新的循环。";
    }
    
    iconEl.textContent = icon;
    nameEl.textContent = name;
    titleEl.textContent = title;
    descEl.textContent = desc;
  }

  initEscapeCabin() {
    const btnToggle = document.getElementById('btn-toggle-escape');
    const escapeSection = document.getElementById('escape-cabin');
    
    // Selectors for pet sanctuary
    const petDisplay = document.getElementById('pet-display');
    const petSpeechText = document.getElementById('pet-speech-text');
    const petTabBtns = document.querySelectorAll('.pet-tab-btn');

    const bubbleWrapGrid = document.getElementById('bubble-wrap-grid');
    const btnResetBubbles = document.getElementById('btn-reset-bubbles');
    const fragmentText = document.getElementById('fragment-text');
    const btnNextFragment = document.getElementById('btn-next-fragment');

    // Selectors for new elements
    const bowlTrigger = document.getElementById('bowl-trigger');
    const bowlElement = document.getElementById('bowl-element');
    const btnBowlSound = document.getElementById('btn-bowl-sound');
    
    const auraHalo = document.getElementById('aura-halo');
    const auraBreathInstruction = document.getElementById('aura-breath-instruction');
    const auraBtns = document.querySelectorAll('.aura-btn');

    const btnSendWish = document.getElementById('btn-send-wish');
    const wishInput = document.getElementById('fireplace-wish-input');
    
    // 1. World Gentle Fragments Data
    const fragments = [
      "“踩在秋天干燥落叶上，发出咔嚓咔嚓的声响。”",
      "“早晨阳光透过窗帘缝隙，斜斜照在木地板上的那束光。”",
      "“夏夜刚下过雨后，空气里混着泥土与青草的潮湿香气。”",
      "“刚烤出炉的面包，散发着麦芽和黄油的温热甜香。”",
      "“冬日里双手捧着热茶杯，热气扑在脸上的那一瞬间。”",
      "“小猫踩奶时，喉咙里发出呼噜呼噜的震动声。”"
    ];

    // 2. Pet Speech & Dialogues Data
    const petSpeeches = {
      cat: [
        "“今天在海外很冷吧？别逼自己努力了，累了就去被窝里躺着，你呼吸着、存在着就超级棒了。”",
        "“外面的世界很吵，但这个房间现在很安全。去喝口热水，小猫会一直在这里陪着你。”",
        "“不要想过去，也不要在意未来。看，壁炉里的火苗跳得多开心啊，放空一会儿吧。”",
        "“你不需要向任何人证明自己。现在的你，就已经是非常了不起的英雄了。”",
        "“如果今天很难过，就早点闭上眼睛睡觉。明天的太阳，会照样升起。”",
        "“小猫把小手叠起来了，它在默默祝福你今晚能睡个好觉。”",
        "“不要指责自己今天没做什么努力。在难过的时候，允许自己什么都不做，也是一种勇敢。”",
        "“抱抱你，辛苦了。现在把所有沉重的包裹放下吧，只听听风声就好。”"
      ],
      dog: [
        "“汪！今天辛苦啦！不管世界怎么变，小狗都会全心全意地最喜欢你哦！摇尾巴~”",
        "“难过的时候就来摸摸小狗的毛吧！小狗的肚子软绵绵的，只给你一个人躺着。”",
        "“汪汪！今天有没有好好吃饭呀？多吃一口好吃的，小狗就会开心地转三个圈！”",
        "“不要回头看啦，前方的草地更大更绿！小狗会陪你一直往前跑，把悲伤都丢在风里！”",
        "“你做得很棒啦，小狗可以作证！快闭上眼好好休息，小狗今晚守在床边保护你。”",
        "“汪！不管别人怎么评价，在小狗心里，你就是全宇宙最完美、最温柔的人！”"
      ],
      horse: [
        "“生命是一场广阔的旅程，慢慢走，每一步都算数。小马会驮着你的疲惫，陪你跨过这片泥泞。”",
        "“感受脚下大地的稳固吧。风会吹过旷野，带走昨日的阴霾，我们只需安静蓄力。”",
        "“别着急，走得慢也是在前进。小马会用温和、沉稳的步伐，伴你踏出新生活的每一步。”",
        "“把那些沉重的包袱都卸给小马吧。现在的你，只负责自由地呼吸、看着远方的路就好。”",
        "“当你觉得心慌时，听听小马沉稳的蹄声。嗒、嗒、嗒，我们一步一个脚印，非常安全。”",
        "“旷野的朝阳终会升起，照亮新生的路途。小马会一直在你身边，见证你重整旗鼓。”"
      ]
    };

    // Bowl sound trigger
    if (btnBowlSound) {
      btnBowlSound.addEventListener('click', () => {
        this.synth.enabled = !this.synth.enabled;
        if (this.synth.enabled) {
          btnBowlSound.textContent = "🔊 开启钵声";
          btnBowlSound.style.opacity = "1";
        } else {
          btnBowlSound.textContent = "🔇 静音钵声";
          btnBowlSound.style.opacity = "0.6";
        }
      });
    }

    if (bowlTrigger && bowlElement) {
      bowlTrigger.addEventListener('click', () => {
        this.synth.playBowl();

        bowlElement.classList.remove('ringing');
        bowlElement.offsetHeight; // trigger reflow
        bowlElement.classList.add('ringing');

        for (let i = 0; i < 2; i++) {
          setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.className = 'bowl-ripple';
            bowlTrigger.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
          }, i * 350);
        }

        const words = ["静水流深", "万事随缘", "本自具足", "自爱自渡", "安于当下", "此心光明", "顺应天时", "清心定志", "安然自若"];
        const wordText = words[Math.floor(Math.random() * words.length)];
        const floatWord = document.createElement('div');
        floatWord.className = 'float-word';
        floatWord.textContent = wordText;
        floatWord.style.left = `${Math.random() * 40 + 30}%`;
        floatWord.style.top = `${Math.random() * 20 + 35}%`;
        bowlTrigger.appendChild(floatWord);
        floatWord.addEventListener('animationend', () => floatWord.remove());
      });
    }

    // 4. Aura Shield Breathing loop
    const auraPhases = ["吸气...", "屏息...", "呼气...", "屏息..."];
    let currentAuraPhaseIdx = 0;
    let auraTimer = null;

    const startAuraBreathing = () => {
      if (auraTimer) clearInterval(auraTimer);
      currentAuraPhaseIdx = 0;
      if (auraBreathInstruction) {
        auraBreathInstruction.textContent = auraPhases[0];
        auraTimer = setInterval(() => {
          currentAuraPhaseIdx = (currentAuraPhaseIdx + 1) % auraPhases.length;
          auraBreathInstruction.textContent = auraPhases[currentAuraPhaseIdx];
        }, 4000); // Syncs with 16s breathing cycle
      }
    };

    const stopAuraBreathing = () => {
      if (auraTimer) {
        clearInterval(auraTimer);
        auraTimer = null;
      }
    };

    if (auraBtns) {
      auraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.synth.playTabClick();
          const auraType = btn.dataset.aura;
          if (auraHalo) {
            auraHalo.setAttribute('data-element', auraType);
          }
          auraBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }

    // Fireplace Particle variables
    const canvas = document.getElementById('fireplace-canvas');
    let fireplaceCtx = null;
    let fireplaceAnimationFrame = null;
    let fireplaceParticles = [];
    let fireplaceMeteors = [];
    let isFireplaceRunning = false;

    if (canvas) {
      fireplaceCtx = canvas.getContext('2d');
    }

    const resizeFireplaceCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    class FireParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = -(Math.random() * 2 + 1);
        const colors = ["rgba(255, 200, 0, ", "rgba(255, 120, 0, ", "rgba(230, 60, 10, ", "rgba(255, 230, 100, "];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1.0;
        this.decay = Math.random() * 0.015 + 0.008;
      }

      update() {
        this.speedX += (Math.random() - 0.5) * 0.18;
        this.speedX *= 0.96;
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.baseColor + Math.max(0, this.alpha) + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Shooting Star / Wish class for Fireplace Canvas
    class Meteor {
      constructor(text, startX, startY) {
        this.text = text;
        this.x = startX;
        this.y = startY;
        this.speed = Math.random() * 2.5 + 3.5;
        this.vx = -this.speed;
        this.vy = this.speed * 0.65;
        this.alpha = 1.0;
        this.trail = [];
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 12) {
          this.trail.shift();
        }
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 60 || this.y > 170) {
          this.alpha -= 0.04;
        }
      }

      draw(ctx) {
        ctx.save();
        for (let i = 0; i < this.trail.length; i++) {
          const pt = this.trail[i];
          const ratio = i / this.trail.length;
          ctx.globalAlpha = ratio * this.alpha * 0.35;
          ctx.fillStyle = `rgba(245, 163, 187, ${ratio})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, ratio * 2.5 + 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#F5A3B7";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (this.text) {
          ctx.save();
          ctx.globalAlpha = this.alpha * 0.85;
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.font = "italic 400 0.72rem 'Newsreader', serif";
          ctx.fillText(this.text, this.x - 20, this.y + 14);
          ctx.restore();
        }
      }
    }

    const animateFireplace = () => {
      if (!isFireplaceRunning || !canvas || !fireplaceCtx) return;

      fireplaceCtx.clearRect(0, 0, canvas.width, canvas.height);

      const spawnCount = 2;
      for (let i = 0; i < spawnCount; i++) {
        const spawnX = Math.random() * canvas.width;
        const spawnY = canvas.height - 10;
        fireplaceParticles.push(new FireParticle(spawnX, spawnY));
      }

      fireplaceParticles = fireplaceParticles.filter(p => p.alpha > 0 && p.size > 0.2);
      fireplaceParticles.forEach(p => {
        p.update();
        p.draw(fireplaceCtx);
      });

      fireplaceMeteors = fireplaceMeteors.filter(m => m.alpha > 0 && m.x > -40 && m.y < canvas.height + 40);
      fireplaceMeteors.forEach(m => {
        m.update();
        m.draw(fireplaceCtx);
      });

      fireplaceAnimationFrame = requestAnimationFrame(animateFireplace);
    };

    const startFireplace = () => {
      if (isFireplaceRunning) return;
      isFireplaceRunning = true;
      resizeFireplaceCanvas();
      fireplaceParticles = [];
      fireplaceMeteors = [];
      animateFireplace();
      startAuraBreathing();
    };

    const stopFireplace = () => {
      isFireplaceRunning = false;
      if (fireplaceAnimationFrame) {
        cancelAnimationFrame(fireplaceAnimationFrame);
        fireplaceAnimationFrame = null;
      }
      if (fireplaceCtx && canvas) {
        fireplaceCtx.clearRect(0, 0, canvas.width, canvas.height);
      }
      stopAuraBreathing();
    };

    const triggerWish = () => {
      if (!wishInput || !canvas) return;
      const text = wishInput.value.trim();
      if (text === "") return;

      this.synth.playSuccessChime();
      const startX = canvas.width + 10;
      const startY = Math.random() * 40 + 10;

      fireplaceMeteors.push(new Meteor(text, startX, startY));
      wishInput.value = "";
    };

    if (btnSendWish) {
      btnSendWish.addEventListener('click', triggerWish);
    }
    if (wishInput) {
      wishInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          triggerWish();
        }
      });
    }

    // Toggle sanctuary mode handler
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        this.synth.playTabClick();
        const isEscape = document.body.classList.toggle('escape-mode');
        if (isEscape) {
          btnToggle.textContent = "🔙 返回旅程";
          btnToggle.className = "btn btn-primary btn-sm";
          
          let currentFrag = fragmentText.textContent;
          let nextFrag = currentFrag;
          while (nextFrag === currentFrag) {
            nextFrag = fragments[Math.floor(Math.random() * fragments.length)];
          }
          fragmentText.textContent = nextFrag;

          startFireplace();
          setTimeout(resizeFireplaceCanvas, 100);
        } else {
          btnToggle.textContent = "🏠 进入放空小屋";
          btnToggle.className = "btn btn-secondary btn-sm";
          stopFireplace();
        }
      });
    }

    window.addEventListener('resize', () => {
      if (document.body.classList.contains('escape-mode')) {
        resizeFireplaceCanvas();
      }
    });

    // 4. Pet Sanctuary Tab & Speech Controller
    const renderActivePet = () => {
      const selectedPet = this.stateManager.state.selectedPet || 'cat';
      
      // Update tabs style
      petTabBtns.forEach(btn => {
        if (btn.dataset.pet === selectedPet) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update pet display emoji
      const emojis = { cat: "🐱", dog: "🐶", horse: "🐴" };
      petDisplay.textContent = emojis[selectedPet] || "🐱";
      
      // Reset speech bubble text
      const greetings = {
        cat: "“今天辛苦啦，点点我，有话对你说。”",
        dog: "“汪！点点我，小狗有话对你说！”",
        horse: "“旅人，点点我，小马有话对我说。”"
      };
      petSpeechText.textContent = greetings[selectedPet] || greetings.cat;
    };

    petTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const petType = btn.dataset.pet;
        this.stateManager.state.selectedPet = petType;
        this.stateManager.save();
        
        this.synth.playTabClick();
        renderActivePet();
      });
    });

    // Load initial active pet companion
    renderActivePet();

    if (petDisplay && petSpeechText) {
      petDisplay.addEventListener('click', () => {
        const selectedPet = this.stateManager.state.selectedPet || 'cat';
        
        petDisplay.classList.remove('wiggle', 'bounce-anim', 'sway-anim');
        petDisplay.offsetHeight; // trigger reflow
        
        // Trigger pet audio and animation
        if (selectedPet === 'cat') {
          this.synth.playMeow();
          petDisplay.classList.add('wiggle');
        } else if (selectedPet === 'dog') {
          this.synth.playBark();
          petDisplay.classList.add('bounce-anim');
        } else if (selectedPet === 'horse') {
          this.synth.playTrot();
          petDisplay.classList.add('sway-anim');
        }
        
        // Trigger speaking text bubble
        const speechList = petSpeeches[selectedPet] || petSpeeches.cat;
        let currentSpeech = petSpeechText.textContent;
        let nextSpeech = currentSpeech;
        while (nextSpeech === currentSpeech) {
          nextSpeech = speechList[Math.floor(Math.random() * speechList.length)];
        }
        
        petSpeechText.style.opacity = 0;
        setTimeout(() => {
          petSpeechText.textContent = nextSpeech;
          petSpeechText.style.opacity = 1;
        }, 150);
      });
    }

    // 5. Bubble Wrap Game logic with particle burst upgrade
    const createBubbles = () => {
      if (!bubbleWrapGrid) return;
      bubbleWrapGrid.innerHTML = '';
      
      for (let i = 0; i < 24; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        bubble.addEventListener('click', () => {
          if (bubble.classList.contains('popped')) return;
          bubble.classList.add('popped');

          // Play pop sound
          this.synth.playPop();
          
          // Glowing pop shockwave
          const popRing = document.createElement('div');
          popRing.className = 'bubble-pop-ring';
          popRing.style.left = '50%';
          popRing.style.top = '50%';
          bubble.appendChild(popRing);
          popRing.addEventListener('animationend', () => popRing.remove());

          // Particle burst
          const palette = ["#F5A3B7", "#B2E2D2", "#ffb74d", "#ba68c8", "#64b5f6"];
          for (let k = 0; k < 8; k++) {
            const particle = document.createElement('div');
            particle.className = 'bubble-pop-particle';
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 25 + 15;
            const dx = Math.cos(angle) * dist;
            const dy = Math.sin(angle) * dist;

            particle.style.setProperty('--dx', `${dx}px`);
            particle.style.setProperty('--dy', `${dy}px`);
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];

            bubble.appendChild(particle);
            particle.addEventListener('animationend', () => particle.remove());
          }

          const popText = document.createElement('span');
          popText.className = 'pop-text';
          popText.textContent = 'Pop!';
          bubble.appendChild(popText);
          
          setTimeout(() => {
            popText.remove();
          }, 500);
        });
        
        bubbleWrapGrid.appendChild(bubble);
      }
    };

    createBubbles();
    if (btnResetBubbles) {
      btnResetBubbles.addEventListener('click', () => {
        this.synth.playTabClick();
        createBubbles();
      });
    }

    // 6. Gentle Fragments Navigation
    if (btnNextFragment && fragmentText) {
      btnNextFragment.addEventListener('click', () => {
        this.synth.playTabClick();
        let currentFrag = fragmentText.textContent;
        let nextFrag = currentFrag;
        while (nextFrag === currentFrag) {
          nextFrag = fragments[Math.floor(Math.random() * fragments.length)];
        }
        
        fragmentText.style.opacity = 0;
        setTimeout(() => {
          fragmentText.textContent = nextFrag;
          fragmentText.style.opacity = 1;
        }, 150);
      });
    }
  }
}

// Dialog events binding & settings reset hooks
document.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new App();

  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.altKey && e.code === 'KeyR') {
      const dialog = document.getElementById('settings-dialog');
      if (dialog) dialog.showModal();
    }
  });

  const btnConfirmReset = document.getElementById('btn-confirm-reset');
  const btnCancelReset = document.getElementById('btn-cancel-reset');
  const dialog = document.getElementById('settings-dialog');

  if (btnConfirmReset && btnCancelReset && dialog) {
    btnConfirmReset.addEventListener('click', () => {
      window.appInstance.stateManager.reset();
      dialog.close();
      window.location.reload();
    });

    btnCancelReset.addEventListener('click', () => {
      dialog.close();
    });
  }
});
