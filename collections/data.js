// ===============================================
// 收藏页数据文件 —— 想加条目就照着格式抄一段。
// 每个条目: title=名字, img=封面图(可选,放 /images/ 下), link=外链(可选),
//           meta=一行小字(作者/年份/评分等,可选), thoughts=点开详情里你的想法(必填最有趣!)
// music 条目额外支持: free=[{label:"网易云",url:"..."}] 免费收听链接
// ===============================================
window.COLLECTIONS_DATA = {

  books: [
    { title: "(示例)《三体》", meta: "刘慈欣 · 示例条目,可删", thoughts: "这里是写你对这本书的想法的地方。把这段文字换成你的读后感,或者直接删掉这个条目。加新书就照这个格式再抄一段。" },
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
    { title: "(示例)《星际穿越》", meta: "Nolan · 2014 · 示例条目,可删", thoughts: "把这段换成你对这部电影的想法。" },
  ],

  music: [
    { title: "(示例)《夜空中最亮的星》", meta: "逃跑计划 · 示例条目,可删", free: [{ label: "免费收听", url: "https://music.163.com/" }], thoughts: "音乐区你说自己添加:照这个格式加歌,free 里放免费听的链接(网易云/YouTube 都行)。" },
  ],

  tech: [
    { title: "EchoChange", link: "https://arxiv.org/abs/2608.01856", meta: "AAAI 2027 在投 · 扩散语言模型 × 遥感变化描述", thoughts: "多模态扩散语言模型,把变化描述建模成迭代式掩码去噪,双通道重掩码修草稿。项目主页:sundongwei.github.io/EchoChange_Project" },
    { title: "CoEvolve", link: "https://arxiv.org/abs/2610.01710", meta: "arXiv 2610.01710 · 构造—编辑式视觉定位", thoughts: "RER + 双向去噪精修(BDR),9B 主干比肩 241B 模型;单次精修框重叠 +27pp。项目主页:sundongwei.github.io/CoEvolve_Project" },
  ],

  drinks: [
    { title: "(示例)冰美式", meta: "示例条目,可删", thoughts: "把这段换成你对这款饮料的锐评。" },
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

  photos: [],
};
