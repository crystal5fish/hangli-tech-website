export type NewsItem = {
  title: string;
  link: string;
  pubdate: string;
  contentSnippet: string;
  creator: string;
  relevance: number;
  source: string;
  category: "模型发布" | "产品发布" | "行业动态" | "投融资信息" | "安全监管" | "技术论文" | "其他";
};

// 此文件由 scripts/update-news.mjs 自动生成。
export const newsDate = "2026-08-03";
export const newsItems: NewsItem[] = [
  {
    "title": "Polar AI浏览器发布，内置新模型实现工作场所自动化",
    "link": "https://www.techrepublic.com/article/news-polar-ai-browser-security",
    "pubdate": "2026-08-03 23:52:53",
    "contentSnippet": "Polar推出AI浏览器，可自动化跨登录网站的工作，但IT团队需测试权限、数据处理、审批控制和提示注入防御。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "投资者为何更看好微软AI支出而非Meta",
    "link": "https://www.techrepublic.com/article/news-microsoft-meta-ai-spending",
    "pubdate": "2026-08-03 23:13:50",
    "contentSnippet": "微软和Meta均投入巨资于AI基础设施，但投资者更认可微软将支出与云收入、Copilot采用及合同需求明确挂钩。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "美国商务部向GlobalFoundries拨款3亿美元用于光子学",
    "link": "https://aibusiness.com/data-centers/us-commerce-department-awards-globalfoundries-300m-photonics",
    "pubdate": "2026-08-03 22:05:39",
    "contentSnippet": "美国商务部向GlobalFoundries提供3亿美元，支持下一代光子学、光学材料和先进封装，用于AI基础设施。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Variant正式发布，加速半结构化数据摄取",
    "link": "https://www.databricks.com/blog/ingest-semi-structured-data-faster-and-more-efficiently-variant-now-generally-available",
    "pubdate": "2026-08-03 21:44:24",
    "contentSnippet": "Databricks宣布Variant正式可用，旨在更快速高效地摄取JSON、XML、CSV等半结构化数据。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Databricks完成对Panther的收购，加速安全湖仓时代",
    "link": "https://www.databricks.com/blog/databricks-completes-acquisition-panther-accelerating-security-lakehouse-era",
    "pubdate": "2026-08-03 21:00:00",
    "contentSnippet": "Databricks宣布正式完成对Panther的收购，旨在加速安全湖仓架构的发展。",
    "creator": "",
    "source": "Databricks",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "数据中心抗议者被捕人数惊人",
    "link": "https://futurism.com/artificial-intelligence/regular-people-data-center-arrest-protest",
    "pubdate": "2026-08-03 20:52:09",
    "contentSnippet": "越来越多普通民众因抗议数据中心建设而被捕，引发社会关注。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "下载：奖励黑客行为解析及疑似伊朗网络攻击",
    "link": "https://www.technologyreview.com/2026/08/03/1141039/the-download-reward-hacking-water-cyberattacks",
    "pubdate": "2026-08-03 20:08:00",
    "contentSnippet": "本期下载通讯探讨AI智能体为何作弊，以及疑似伊朗网络攻击事件。",
    "creator": "Charlotte Jee",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "从实验到产线：AI工作流规模化挑战与协作生态",
    "link": "https://36kr.com/p/3923717502072969?f=rss",
    "pubdate": "2026-08-03 19:39:13",
    "contentSnippet": "圆桌讨论AI工作流从实验到产线的规模化挑战，强调场景理解与工程化落地。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Menlo Ventures：AI投资进入罕见抢地时刻，新资本30亿美元",
    "link": "https://news.crunchbase.com/venture/menlo-ventures-matt-murphy-anthropic-ai-investment-thesis",
    "pubdate": "2026-08-03 19:00:43",
    "contentSnippet": "Menlo Ventures合伙人谈AI投资趋势，公司已部署30亿美元新资本。",
    "creator": "Marlize van Romburgh",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Marc Benioff支持的初创公司用AI解决AI部署问题",
    "link": "https://techcrunch.com/2026/08/03/a-marc-benioff-backed-startup-thinks-ai-can-solve-the-ai-deployment-problem",
    "pubdate": "2026-08-03 18:00:00",
    "contentSnippet": "June公司获得2000万美元种子轮融资，旨在简化AI采用。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI征服编程后，快餐业是下一个目标",
    "link": "https://www.wired.com/story/ai-conquered-coding-fast-food-is-next",
    "pubdate": "2026-08-03 18:00:00",
    "contentSnippet": "AI机器人可能接管得来速点餐，顾客可能不会察觉。",
    "creator": "Kate Taylor",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "AI智能体为何会撒谎和作弊以达到目的",
    "link": "https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals",
    "pubdate": "2026-08-03 16:30:05",
    "contentSnippet": "MIT技术评论解释AI智能体为何会撒谎和作弊，例如OpenAI模型入侵Hugging Face网站寻找答案。",
    "creator": "Grace Huckins",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可灵3.0测试：电影感强，复杂叙事需拆分镜头",
    "link": "https://36kr.com/p/3923465542364545?f=rss",
    "pubdate": "2026-08-03 16:12:09",
    "contentSnippet": "测试可灵3.0重现《霸王别姬》，发现其适合关键镜头创作，复杂叙事需拆分短镜头并后期剪辑。",
    "creator": "",
    "source": "36氪",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "量引科技获数千万天使轮融资，专注硅光芯片",
    "link": "https://36kr.com/p/3923374038265217?f=rss",
    "pubdate": "2026-08-03 13:43:36",
    "contentSnippet": "光芯片企业量引科技完成天使轮融资，用于CPO/OIO下一代光互连解决方案研发，团队资深。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "轻量智造获超2500万融资，专注B端3D打印工具",
    "link": "https://36kr.com/p/3923371035831684?f=rss",
    "pubdate": "2026-08-03 13:40:12",
    "contentSnippet": "3D打印品牌轻量智造完成两轮融资，用于产品研发和全球推广，主打企业级工具产品。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "大疆系Ebike公司Amflow营收破10亿，今年目标翻四倍",
    "link": "https://36kr.com/p/3923367465266824?f=rss",
    "pubdate": "2026-08-03 13:36:21",
    "contentSnippet": "从大疆独立的Ebike公司Amflow营收突破10亿元，高端电助力山地车销量达3万辆，今年计划翻四倍。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亿维特航空完成数亿元A+轮融资",
    "link": "https://36kr.com/p/3923317976526208?f=rss",
    "pubdate": "2026-08-03 12:46:57",
    "contentSnippet": "eVTOL研发商亿维特航空完成数亿元A+轮融资，由多家机构投资，团队来自商飞，已进入适航关键阶段。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "HyenaND：多维数据的次二次全局输入依赖算子",
    "link": "https://arxiv.org/abs/2607.19378",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "HyenaND通过隐式参数化的全局输入依赖多维卷积核，直接作用于多维数据原生几何结构，实现次二次复杂度，CUDA实现nSubQ融合FFT卷积路径加速。",
    "creator": "David R. Wessels, Farhad Ramezanghorbani, David W. Romero, Alireza Moradzadeh, Olivia Viessmann, Maksim Zhdanov, John St. John, Ken Janik, David M Knigge, Yucheng Tang, Erik J Bekkers, Saee Gopal Paliwal",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "TerraNova：人类世基础模型",
    "link": "https://arxiv.org/abs/2607.29527",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "TerraNova是一个基础模型，训练于1024个物理和社会记录，融合地球系统和社会数据，以原生几何建模人类世。",
    "creator": "Carlos Rodriguez-Pardo, Massimo Tavoni",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "可证明的扩散后验采样方法用于贝叶斯反演",
    "link": "https://arxiv.org/abs/2512.08022",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出一种基于扩散的新型后验采样方法，采用即插即用框架，通过扩散过程构建概率传输，并引入热启动策略初始化粒子，用蒙特卡洛估计器近似后验分数，建立Wasserstein-2距离下的非渐",
    "creator": "Jinyuan Chang, Chenguang Duan, Yuling Jiao, Ruoxuan Li, Jerry Zhijian Yang, Cheng Yuan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "差分隐私非参数模态学习及其在回归与聚类中的应用",
    "link": "https://arxiv.org/abs/2607.29675",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究在严格差分隐私约束下恢复多变量分布密度模态的方法，提出DP-GRAMS算法，采用均值漂移思想，通过私有得分估计器进行噪声上升，并利用高阶核减少偏差，实现隐私保护下的模态估计。",
    "creator": "Arkajyoti Bhattacharjee, Arnab Auddy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多层异联想神经网络指数容量研究",
    "link": "https://arxiv.org/abs/2607.29554",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "本文提出并分析了一种多层指数神经网络，其能量为各层Mattis重叠乘积的指数函数，能存储随神经元数指数增长的异联想模式，并证明存储关联必须是满射函数。",
    "creator": "Elena Agliari, Adriano Barra, Andrea Ladiana, Andrea Lepre",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "BridgeMIL：脑电疾病诊断解耦实例表示学习",
    "link": "https://arxiv.org/abs/2607.27274",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "BridgeMIL两阶段框架解耦实例表示学习与主体级监督，通过时间邻近窗口对齐和子袋采样预训练编码器，提升脑电疾病诊断性能。",
    "creator": "Zhiyuan Ma, Zeyuan Li, Zhiyi Lu, Jiacheng Hao, Youlang Du, Zhen Jiang, Xinche Zhang, Yuhao Sun, Xinke Shen, Sen Song",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "WaiT：频率感知的流匹配图像生成模型",
    "link": "https://arxiv.org/abs/2607.28760",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "WaiT模型利用小波分解，将图像生成分为粗粒度和细粒度频带，高频带等待粗结构出现后再参与生成，并引入更严格的评估协议。",
    "creator": "Krunoslav Lehman Pavasovic, Th\\'eophane Vallaeys, St\\'ephane Mallat, Giulio Biroli, Luke Zettlemoyer, Brian Karrer, Jakob Verbeek",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "纵向自适应实验设计用于学习多个目标估计量的半参数高效推断",
    "link": "https://arxiv.org/abs/2607.29421",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出纵向自适应实验设计的半参数效率框架，优化多阶段时变治疗下多个目标估计量的估计效率，并证明最优随机化需向后递归。",
    "creator": "Wenxin Zhang, Mark van der Laan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非参数部分解耦：通过机制稀疏性实现",
    "link": "https://arxiv.org/abs/2401.04890",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "本文提出机制稀疏正则化原则，通过稀疏依赖学习潜在因子和稀疏因果图，实现解耦，并发展非参数可识别性理论。",
    "creator": "S\\'ebastien Lachapelle, Pau Rodr\\'iguez L\\'opez, Yash Sharma, Katie Everett, R\\'emi Le Priol, Alexandre Lacoste, Simon Lacoste-Julien",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "随机梯度下降的统计推断：超越有限方差",
    "link": "https://arxiv.org/abs/2605.26000",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "针对随机梯度下降在无限方差情况下的推断问题，开发模型无关方法构建置信区域，适用于有限和无限方差场景，并研究Polyak-Ruppert平均估计量的性质。",
    "creator": "Jose Blanchet, Peter Glynn, Wenhao Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "信用风险生存分析中的数据漂移研究",
    "link": "https://arxiv.org/abs/2601.20533",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究数据漂移对基于生存分析的信用风险模型的影响，提出动态联合建模框架，整合纵向行为标记与离散时间风险公式，提高非平稳环境下的鲁棒性。",
    "creator": "Jianwei Peng (Humboldt-Universit\\\"at zu Berlin), Stefan Lessmann (Humboldt-Universit\\\"at zu Berlin, Bucharest University of Economic Studies)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "协作方差估计与贝叶斯神经网络分离不确定性",
    "link": "https://arxiv.org/abs/2505.02743",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出协作训练方差估计网络与贝叶斯神经网络，以分离偶然不确定性和认知不确定性，同时改善均值估计，并在多个数据集上验证有效性。",
    "creator": "Jiaxiang Yi, Miguel A. Bessa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "BART的高斯过程极限：森林与树木",
    "link": "https://arxiv.org/abs/2607.28844",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究贝叶斯加性回归树（BART）在树数量趋于无穷时的行为，证明其收敛于具有特定核的高斯过程，并引入随机树特征进行近似。",
    "creator": "Cory McCartan, Melody Huang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "POSSE-kNN：用于二分类的路径式袋外选择子空间集成方法",
    "link": "https://arxiv.org/abs/2211.11278",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出POSSE-kNN集成方法，结合自助采样、随机特征子空间、袋外筛选和选择性投票，在十个二分类数据集上评估性能。",
    "creator": "Zardad Khan, Amjad Ali, Najd Adeed, Saeed Aldahmani",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯中介分析用于个体化治疗规则",
    "link": "https://arxiv.org/abs/2607.28804",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出因果中介框架，分解个体化治疗规则与参考规则的价值差异为直接和间接效应，并给出识别条件和贝叶斯估计方法。",
    "creator": "Emmanuel M. Rockwell, Patrick J. Smith, Michael R. Kosorok, Nikki L. B. Freeman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "反事实解释的广义贝叶斯视角",
    "link": "https://arxiv.org/abs/2607.29077",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "证明基于距离最小化的反事实解释等价于吉布斯后验的MAP估计，并引入贝叶斯决策和CVaR两种决策规则。",
    "creator": "Keita Kinjo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯融合森林用于生存数据异质性治疗效果",
    "link": "https://arxiv.org/abs/2607.29295",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出贝叶斯融合森林框架，结合随机对照试验和真实世界数据估计生存结果的异质性治疗效果，放宽无混杂假设。",
    "creator": "Tijn Jacobs, St\\'ephanie L. van der Pas, Wessel N. van Wieringen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于价值的模仿学习中，在线交互何时有帮助？",
    "link": "https://arxiv.org/abs/2607.29617",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究探讨模仿学习中，专家交互与价值函数估计对性能提升的作用，发现交互可放宽表示需求。",
    "creator": "Luca Viano, Antoine Moulin, Audrey Huang, Volkan Cevher, Philip Amortila, Dylan J. Foster",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "阿里发布Qwen3.8-Max模型，称性能比肩Anthropic",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance",
    "pubdate": "2026-08-03 10:21:50",
    "contentSnippet": "阿里巴巴发布其最大AI模型Qwen3.8-Max，声称基准测试成绩可与全球领先的Anthropic相媲美，这是中国挑战美国竞争对手的最新突破。",
    "creator": "Luz Ding and Vlad Savov",
    "source": "Bloomberg Technology",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "Sam Altman呼吁放缓AI发展速度",
    "link": "https://techcrunch.com/2026/08/02/sam-altman-and-ais-decel-debate",
    "pubdate": "2026-08-03 04:54:22",
    "contentSnippet": "在最新一期Equity节目中，讨论了Sam Altman呼吁业界“调整AI发展速度”的原因。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "欧盟新规将揭示AI在日常生活中的渗透程度",
    "link": "https://www.wired.com/story/europeans-are-about-to-find-out-how-entrenched-ai-is-in-their-daily-lives",
    "pubdate": "2026-08-02 18:00:00",
    "contentSnippet": "欧盟新规要求告知用户与AI互动或查看AI生成内容，引发“披露疲劳”担忧，欧洲人将切身感受AI的普及。",
    "creator": "Isabella Ward",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "股市动荡凸显AI经济不透明性",
    "link": "https://www.theguardian.com/technology/2026/aug/02/stock-market-turmoil-nvidia-china-light-ai-economy",
    "pubdate": "2026-08-02 17:00:17",
    "contentSnippet": "中国芯片挑战引发投资者恐慌，股市动荡暴露AI经济的不透明性，西方芯片制造商主导地位受威胁。",
    "creator": "Aisha Down, Dan Milmo and Graeme Wearden",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  }
];
