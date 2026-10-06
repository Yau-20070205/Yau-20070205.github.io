// ===============================================
// 收藏页数据文件 —— 想加条目就照着格式抄一段。
// 每个条目: title=名字, img=封面图(可选,放 /images/ 下), link=外链(可选),
//           meta=一行小字(作者/年份等,可选), thoughts=点开详情里你的想法(必填最有趣!)
//           rating=评分 0~5(可小数,卡片显示星星,可选), tags=["标签"] (可选)
//           video=B站视频链接(https://www.bilibili.com/video/BVxxxx)——详情弹窗内直接内嵌播放;其他视频网站则显示为跳转按钮
// music 条目额外支持: free=[{label:"网易云",url:"..."}] 免费收听链接
// ===============================================
window.COLLECTIONS_DATA = {

  books: [
    { title: "(示例)《三体》", meta: "刘慈欣 · 示例条目,可删", img: "/images/covers/santi.webp", rating: 5, tags: ["科幻", "小说"], thoughts: "这里是写你对这本书的想法的地方。把这段文字换成你的读后感,或者直接删掉这个条目。加新书就照这个格式再抄一段。" },
  ],

  games: [
    { title: "荒野大镖客：救赎 2", img: "/images/games/rdr2.jpg", link: "https://store.steampowered.com/app/1174180/", meta: "⭐ 本命 · Rockstar", thoughts: "" },
    { title: "赛博朋克 2077", img: "/images/games/cyberpunk.jpg", link: "https://store.steampowered.com/app/1091500/", meta: "⭐ 本命 · CDPR", thoughts: "" },
    { title: "Counter-Strike 2", img: "/images/games/cs2.jpg", link: "https://store.steampowered.com/app/730/", meta: "⭐ 本命 · 常年在线", thoughts: "" },
    { title: "霍格沃茨之遗", img: "/images/games/hogwarts.jpg", link: "https://store.steampowered.com/app/990080/", meta: "", thoughts: "" },
    { title: "艾尔登法环", img: "/images/games/eldenring.jpg", link: "https://store.steampowered.com/app/1245620/", meta: "", thoughts: "" },
    { title: "潜水员戴夫", img: "/images/games/dave.jpg", link: "https://store.steampowered.com/app/1868140/", meta: "", thoughts: "" },
    { title: "东方：平野孤鸿", img: "/images/games/touhou.jpg", link: "https://store.steampowered.com/app/2656540/", meta: "", thoughts: "" },
    { title: "黑神话：悟空", img: "/images/games/wukong.jpg", link: "https://store.steampowered.com/app/2358720/", meta: "", thoughts: "" },
    { title: "绝地潜兵 2", img: "/images/games/helldivers.jpg", link: "https://store.steampowered.com/app/553850/", meta: "常驻联机", thoughts: "" },
    { title: "Discounty", img: "/images/games/discounty.jpg", link: "https://store.steampowered.com/app/2274620/", meta: "", thoughts: "" },
    { title: "Hades", img: "/images/games/hades.jpg", link: "https://store.steampowered.com/app/1145360/", meta: "", thoughts: "" },
    { title: "KARDS", img: "/images/games/kards.jpg", link: "https://store.steampowered.com/app/544810/", meta: "", thoughts: "" },
    { title: "只狼：影逝二度", img: "/images/games/sekiro.jpg", link: "https://store.steampowered.com/app/814380/", meta: "", thoughts: "" },
  ],

  movies: [
    { title: "(示例)《星际穿越》", meta: "Nolan · 2014 · 示例条目,可删", img: "/images/covers/interstellar.webp", rating: 4.5, tags: ["科幻", "太空"], thoughts: "把这段换成你对这部电影的想法。" },
  ],

  music: [
    { title: "陈奕迅 Eason Chan", meta: "Eason Chan · 华语流行", img: "/images/artists/eason.webp", songs: ["十年", "浮夸", "富士山下", "孤勇者"], rating: 5, free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=陈奕迅"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=陈奕迅"}], thoughts: "K歌之王,华语情歌的浓度天花板,如今连小学生都会吼一句《孤勇者》。" },
      { title: "崔健", meta: "中国摇滚教父", img: "/images/artists/cuijian.webp", songs: ["一无所有", "花房姑娘", "快让我在雪地上撒点野"], rating: 5, free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=崔健"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=崔健"}], thoughts: "《一无所有》开口即是时代。" },
      { title: "赛博朋克 2077 原声带", meta: "游戏原声 · Samurai / Rosa Walton", img: "/images/games/cyberpunk.jpg", songs: ["Never Fade Away", "I Really Want to Stay at Your House", "Bells of Laguna Bend"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=Cyberpunk 2077 OST"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=Cyberpunk 2077 OST"}], thoughts: "夜之城的背景音——《I Really Want to Stay at Your House》是 David 和 Lucy 的名字,听过的都懂。" },
      { title: "万能青年旅店", meta: "华北平原的摇滚史诗", img: "/images/artists/wnqlvdian.webp", songs: ["杀死那个石家庄人", "十万嬉皮", "秦皇岛"], rating: 5, free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=万能青年旅店"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=万能青年旅店"}], thoughts: "唢呐一响,谁都不服。" },
      { title: "Beyond", meta: "香港 · 粤语摇滚", img: "/images/artists/beyond.webp", songs: ["海阔天空", "光辉岁月", "真的爱你"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=Beyond"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=Beyond"}], thoughts: "理想主义永不散场。" },
      { title: "Queen", meta: "英国 · 摇滚", img: "/images/artists/queen.webp", songs: ["Bohemian Rhapsody", "We Will Rock You", "We Are the Champions"], rating: 5, free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=Queen"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=Queen band"}], thoughts: "摇滚歌剧,六分钟走完一生。" },
      { title: "Duvet · bôa", meta: "英国 · 《玲音》OP", img: "", songs: ["Duvet", "Twilight"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=Duvet boa"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=Duvet bôa"}], thoughts: "赛博空间的世纪金曲,and you don't seem to understand……" },
      { title: "逃跑计划", meta: "中国 · 摇滚", img: "", songs: ["夜空中最亮的星", "一万次悲伤"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=逃跑计划"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=逃跑计划"}], thoughts: "中文摇滚里最会写大合唱的乐队,前奏一响全场手机灯就亮。" },
      { title: "邓紫棋 G.E.M.", meta: "华语流行天后", img: "/images/artists/gem.webp", songs: ["光年之外", "泡沫", "句号"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=邓紫棋"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=邓紫棋"}], thoughts: "铁肺唱功,流行度与实力兼备。" },
      { title: "李健", meta: "音乐诗人", img: "/images/artists/lijian.webp", songs: ["贝加尔湖畔", "传奇"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=李健"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=李健"}], thoughts: "干净克制,像贝加尔湖的风。" },
      { title: "张雨生", meta: "永远的宝藏男孩", img: "/images/artists/zhangyusheng.webp", songs: ["大海", "我的未来不是梦"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=张雨生"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=张雨生"}], thoughts: "高音穿越时代的才子,经典至今不过时。" },
      { title: "罗大佑", meta: "华语流行乐教父", img: "/images/artists/luodayou.webp", songs: ["童年", "光阴的故事", "恋曲1990"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=罗大佑"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=罗大佑"}], thoughts: "写尽了时代与童年。" },
      { title: "朴树", meta: "民谣摇滚", img: "", songs: ["平凡之路", "那些花儿", "生如夏花"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=朴树"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=朴树"}], thoughts: "少年感与沧桑感的矛盾体,十年磨一首歌也值。" },
      { title: "吴青峰", meta: "苏打绿主唱", img: "/images/artists/wuqingfeng.webp", songs: ["小情歌", "无与伦比的美丽"], free: [{"label": "网易云", "url": "https://music.163.com/#/search/m/?s=吴青峰"}, {"label": "B站", "url": "https://search.bilibili.com/all?keyword=吴青峰"}], thoughts: "嗓音辨识度拉满的词曲才子。" },
      { title: "🎵 待认领歌单 · 推荐曲", meta: "记忆里的他们,从主打歌开始补票", img: "", songs: ["孙燕姿《遇见》", "梁静茹《暖暖》", "汪峰《北京北京》", "王菲《红豆》", "窦唯《高级动物》", "周传雄《黄昏》", "周杰伦《晴天》", "郭顶《水星记》", "梁博《男孩》", "赵雷《成都》(成都人必听)", "宋冬野《安和桥》", "李志《天空之城》"], tags: ["推荐"], thoughts: "记忆里可能有他们——从主打歌开始补票,一首首认回来。" },
  ],

  tech: [
    { title: "EchoChange", link: "https://arxiv.org/abs/2608.01856", meta: "AAAI 2027 在投 · 扩散语言模型 × 遥感变化描述", thoughts: "多模态扩散语言模型,把变化描述建模成迭代式掩码去噪,双通道重掩码修草稿。项目主页:sundongwei.github.io/EchoChange_Project" },
    { title: "CoEvolve", link: "https://arxiv.org/abs/2610.01710", meta: "arXiv 2610.01710 · 构造—编辑式视觉定位", thoughts: "RER + 双向去噪精修(BDR),9B 主干比肩 241B 模型;单次精修框重叠 +27pp。项目主页:sundongwei.github.io/CoEvolve_Project" },
  ],

  drinks: [
    { title: "(示例)冰美式", meta: "示例条目,可删", img: "/images/covers/icedamericano.webp", rating: 4, thoughts: "把这段换成你对这款饮料的锐评。" },
  ],

  people: [
    { title: "(示例)一个朋友", meta: "示例条目,可删", thoughts: "想写谁就写谁——注意公开场合下别人的隐私,写之前最好想一下 TA 介不介意。" },
  ],

  smokes: [
    { title: "(示例)某款焦香型", meta: "示例条目,可删", thoughts: "口味、口感、场合——把这段换成你的烟评。未成年人不该吸烟,也请注意健康。" },
  ],

  digital: [
    { title: "(示例)某个键盘/耳机/显卡", meta: "示例条目,可删", img: "", thoughts: "设备、参数、踩坑、真香点,都写在这。" },
  ],

  videos: [
    { title: "(示例)一个视频", meta: "UP主/频道 · 示例条目,可删", free: [{ label: "免费观看", url: "https://www.bilibili.com/" }], thoughts: "把这段换成你对这个视频的安利或锐评;free 里放能直接看的链接。" },
  ],

  courses: [
    { title: "(示例)CS144 计算机网络", meta: "Stanford · 示例条目,可删", link: "https://cs144.github.io/", rating: 5, tags: ["课程", "网络"], thoughts: "听课感受、作业强度、推荐指数——写在这。你做过 CS144 的 minnow lab,正好补一篇。" },
  ],

  resources: [
    { title: "(示例)一个资源", meta: "工具/软件/资料 · 示例条目,可删", link: "", thoughts: "好用的工具、软件、学习资料——链接放 link 里,想法写这。只分享有合法授权的资源。" },
  ],

  // 主播区(18+)—— 名单与评价由站主自行填写;注意把握尺度(GitHub Pages 政策)
  streamers: [],

  photos: [],
};
