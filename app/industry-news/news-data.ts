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
export const newsDate = "2026-08-27";
export const newsItems: NewsItem[] = [
  {
    "title": "Stripe高管：AI加速互联网经济发展",
    "link": "https://www.bloomberg.com/news/videos/2026-08-27/stripe-ai-now-accelerating-progress-of-internet-economy-video",
    "pubdate": "2026-08-27 12:14:22",
    "contentSnippet": "Stripe高管Sarita Singh表示，人工智能正在加速互联网经济的进步。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "变分自回归网络表征简单排斥过程的非平衡动力学",
    "link": "https://arxiv.org/abs/2608.25606",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "利用变分自回归网络系统表征简单排斥过程（SSEP、ASEP、TASEP）在1至3维的非平衡动力学，验证了方法的有效性，并提供了更丰富的有限时间动力学分析。",
    "creator": "Zhimao Liu, Jing Liu, Pan Zhang, Ying Tang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "专家问题与在线凸优化的极小极大交替遗憾",
    "link": "https://arxiv.org/abs/2608.25182",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文解决了专家问题和一般在线凸优化的极小极大交替遗憾率，证明d专家问题的遗憾率为Θ(log d)，与时间T无关，显著优于先前结果。",
    "creator": "Mengxiao Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用两层隐藏层ReLU网络表示MAX函数",
    "link": "https://arxiv.org/abs/2608.25221",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "研究用两层隐藏层ReLU网络精确表示MAX_N函数，通过计算机辅助搜索获得MAX_5、MAX_6、MAX_7的表示，推进该问题研究。",
    "creator": "Zhimao Wang, Amitabh Basu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "改进无Hessian高分辨率蒙特卡洛采样分析",
    "link": "https://arxiv.org/abs/2608.25052",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文为无Hessian高分辨率动力学建立了显式定量收缩率，改进了欠阻尼朗之万动力学的收缩率，并给出了弱解构造和散度引理的谱证明。",
    "creator": "Wujun Lv, Xiaoyu Wang, Yingli Wang, Lingjiong Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "以单元为原语的机器学习：从单元关联事件中学习",
    "link": "https://arxiv.org/abs/2608.25118",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出将单元作为任务语义层面的显式原语，学习任务先声明持久指称总体和同一性标准，监督学习是其形式特化，从数据中学习分词器和共享响应。",
    "creator": "Heyang Gong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "NVExplain：时间序列预测解释框架",
    "link": "https://arxiv.org/abs/2608.25080",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文提出模型无关的可解释性框架NVExplain，通过潜在轨迹分析和结构保持替代模型，为每个预测时域归因于相关历史滞后。",
    "creator": "Muyan Anna Li, Manikandan Ravikiran, Aditi Gautam",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "从稀疏到密集设计的函数线性回归：池化岭方法与极小极大最优性",
    "link": "https://arxiv.org/abs/2608.25468",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出池化岭估计方法，结合池化策略和RKHS方法，利用离散观测的无偏估计，在任意采样方案下实现预测风险的极小极大最优。",
    "creator": "Shunxing Yan, Fang Yao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "通过最小化Wasserstein-2损失进行生成建模",
    "link": "https://arxiv.org/abs/2406.13619",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出通过最小化W2损失和分布依赖ODE的生成模型，证明时间边际分布形成梯度流并指数收敛，算法在实验中优于WGAN。",
    "creator": "Yu-Jui Huang, Zachariah Malik",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "几何约束KAN：通过Banach对偶学习边缘几何",
    "link": "https://arxiv.org/abs/2608.25807",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出几何约束KAN，通过Banach对偶映射学习边缘激活函数，用标量指数控制几何形状，在符号回归基准上表现优异。",
    "creator": "K S Sesh Kumar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "边缘LLM代理的校准推理与不确定性延迟",
    "link": "https://arxiv.org/abs/2607.26865",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出TSDS框架，结合收敛探针与困惑度延迟规则，在边缘设备上优化推理预算并保证可靠性。",
    "creator": "Amirmohammad Farzaneh, Osvaldo Simeone",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Metropolis调整Dikin游走的一般框架：多面体上的维度平方混合与谱面体上的对数行列式游走",
    "link": "https://arxiv.org/abs/2608.25273",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "分析精确度量Metropolis调整Dikin游走，通过保持提议行列式和反向二次型，获得多面体和谱面体上的混合时间界，统一分析。",
    "creator": "Zhao Song, Lichen Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "上下文LLM级联的在线潘多拉盒模型",
    "link": "https://arxiv.org/abs/2606.07392",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "针对大语言模型级联提出在线上下文潘多拉盒模型，决策者顺序查询API并选择输出，直接建模保留值而非完整分布，适用于输出介导反馈。",
    "creator": "Alexandre Belloni, Yan Chen, Yehua Wei",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机特征自适应正则化的邻近早停规则",
    "link": "https://arxiv.org/abs/2608.25513",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文提出一种邻近早停规则用于随机特征核岭回归的自适应正则化，减少比较次数，并建立了高概率比较界，保证oracle学习率。",
    "creator": "Caixing Wang, Zhibo Chen, Yue Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "近似后验的贝叶斯在线学习快速速率",
    "link": "https://arxiv.org/abs/2608.25706",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文研究近似后验方法在贝叶斯在线学习中保持快速遗憾保证的条件，证明只要近似后验足够精确，即可继承精确贝叶斯的快速遗憾界。",
    "creator": "Ilsang Ohn",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "微调Whisper实现巴尼瓦语语音识别初步研究",
    "link": "https://arxiv.org/abs/2608.26060",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "针对巴尼瓦语（巴西、哥伦比亚、委内瑞拉的土著语言）微调Whisper模型，使用约0.54小时语音数据，初步实现语音识别。",
    "creator": "Leonardo Duart, Tiago Fonseca, Thiago Chac\\'on",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "重心弱内积Gromov-Wasserstein距离",
    "link": "https://arxiv.org/abs/2608.25145",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "引入弱GW框架，比较源关系与耦合诱导的目标条件分布关系，提出重心弱内积GW（wIGW），满足特定性质，用于一对多设置。",
    "creator": "Youssef Mroueh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "标准Strang分裂动力学朗之万动力学的不可加速性证明",
    "link": "https://arxiv.org/abs/2608.25279",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "证明OBABO和BAOAB等标准Strang分裂在光滑强凸类上无法实现弹道加速，总变差混合时间下界表明冷启动混合失败。",
    "creator": "Nawaf Bou-Rabee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "ICON分解：用于模型审计的多变量概念级解释",
    "link": "https://arxiv.org/abs/2608.26083",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出ICON分解方法，量化每个概念在考虑其他概念和结果后对层方差的解释程度，在合成数据和医学图像模型上优于基线方法。",
    "creator": "Roshan Prakash Rane, Marco Simnacher, Manuel Pfeuffer, Marc-Andre Schulz, Nys Tjade Siegel, Maximilian Dreyer, Frederik Pahde, Wojciech Samek, Sonja Greven, Kerstin Ritter",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于最近邻的高信息投影高效估计",
    "link": "https://arxiv.org/abs/2608.25887",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文提出一种基于最近邻关系的降维方法，通过谱分解估计密度信息矩阵，在标准正则条件下具有一致性，有效发现有趣投影。",
    "creator": "David P. Hofmeyr",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越随机优化的最优速率：轨迹自适应停止规则",
    "link": "https://arxiv.org/abs/2608.25551",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "针对强凸随机优化，构造完全可观测的轨迹自适应上置信序列，同时成立，最坏情况下达到最优1/t衰减率，解决认证问题。",
    "creator": "Liviu Aolaritei, Lucas L\\'evy, Francis Bach, Michael I. Jordan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "线性等式约束下多输出高斯过程预测",
    "link": "https://arxiv.org/abs/2608.25709",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文提出一种在多输出高斯过程预测中处理线性等式约束的新方法，避免任意选择推导输出带来的敏感性，提高预测精度。",
    "creator": "Mahamat Hamdan Nassouradine, Cl\\'ement Gauchy, Pierre-Emmanuel Angeli, S\\'ebastien da Veiga",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "聚类DAG作为因果发现背景知识",
    "link": "https://arxiv.org/abs/2512.10032",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "利用聚类DAG作为先验知识，提出Cluster-PC和Cluster-FCI算法，提升高维数据因果发现性能。",
    "creator": "Jan Marco Ruiz de Vargas, Kirtan Padh, Niki Kilbertus",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "GRAPE：高维贝叶斯优化的梯度细化与进展感知",
    "link": "https://arxiv.org/abs/2608.25116",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "该论文提出GRAPE框架，通过梯度细化获取函数和进展感知的更新方向选择，提高高维黑箱函数优化的查询效率。",
    "creator": "Richard Cornelius Suwandi, Feng Yin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高阶U统计量计算复杂度研究",
    "link": "https://arxiv.org/abs/2508.12627",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "论文填补高阶U统计量计算复杂度研究空白，提出分解为V统计量方法，并探讨与爱因斯坦求和及量子计算的关联。",
    "creator": "Xingyu Chen, Ruiqi Zhang, Lin Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于梯度的样本选择加速贝叶斯优化",
    "link": "https://arxiv.org/abs/2504.07742",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出GSSBO方法，利用梯度信息选择样本子集构建高斯过程模型，降低计算复杂度，提高贝叶斯优化效率。",
    "creator": "Qiyu Wei, Haowei Wang, Zirui Cao, Songhao Wang, Richard Allmendinger, Mauricio A \\'Alvarez",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "受约束学习问题中数据处理不等式失效的反例",
    "link": "https://arxiv.org/abs/2608.25745",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "经典数据处理不等式在机器学习受约束学习问题中可能失效，本文提出反例并给出广义数据处理不等式。",
    "creator": "Laura Iacovissi, Rabanus Derr, Robert C. Williamson",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多项Logit模型最优实验设计",
    "link": "https://arxiv.org/abs/2605.25592",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "针对MNL老虎机提出高效最优设计框架，通过混合整数线性规划或提升设计实现统计效率与可扩展性。",
    "creator": "Joongkyu Lee, Min-hwan Oh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "稀疏图随机游走核最优时间算法",
    "link": "https://arxiv.org/abs/2410.10368",
    "pubdate": "2026-08-27 12:00:00",
    "contentSnippet": "提出首个线性时间随机算法近似一般随机游走核，适用于大规模稀疏图，无需实例化直接积图。",
    "creator": "Krzysztof Choromanski, Isaac Reid, Arijit Sehanobish, Avinava Dubey",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "美国调查Apex物流涉嫌走私英伟达AI芯片",
    "link": "https://www.bloomberg.com/news/articles/2026-08-27/us-probes-apex-logistics-over-alleged-nvidia-ai-chip-smuggling",
    "pubdate": "2026-08-27 11:54:17",
    "contentSnippet": "美国政府正调查新加坡Apex物流涉嫌向中国走私英伟达AI芯片，可能成为首起针对运输公司的半导体非法贸易行动。",
    "creator": "Kari Lindberg and Mackenzie Hawkins",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "美国称中国关联黑客攻击NASA、美联储和参议院",
    "link": "https://www.bloomberg.com/news/articles/2026-08-27/us-says-china-linked-hackers-targeted-nasa-fed-and-senate",
    "pubdate": "2026-08-27 11:04:20",
    "contentSnippet": "美国司法部和FBI称已破坏中国国家支持黑客使用的网络基础设施，这些黑客曾攻击美国政府机构和关键基础设施。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "工业Agent不是“套壳”大模型！西门子百年经验灌进工业AI",
    "link": "https://www.qbitai.com/2026/08/480005.html",
    "pubdate": "2026-08-27 10:46:35",
    "contentSnippet": "西门子Xcelerator与普通软件货架的本质区别在于，它旨在让产品在真实工业场景中持续生长，而非简单销售。",
    "creator": "田, 晏林",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "比尔·盖茨就AI和人类未来发出严厉警告",
    "link": "https://siliconangle.com/2026/08/26/bill-gates-issues-stark-warning-about-ai-and-the-future-of-humanity",
    "pubdate": "2026-08-27 09:36:10",
    "contentSnippet": "微软联合创始人比尔·盖茨警告AI将深刻颠覆劳动力市场，数百万工作岗位面临风险，但目前尚无计划帮助失业者。",
    "creator": "James Farrell",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "英伟达洽谈以超130亿美元收购Hugging Face",
    "link": "https://www.businessinsider.com/nvidia-in-talks-to-buy-hugging-face-13-billion-dollars-2026-8",
    "pubdate": "2026-08-27 08:34:46",
    "contentSnippet": "英伟达已就收购Hugging Face进行谈判，交易金额超过130亿美元，以扩大AI交易布局。",
    "creator": "Katie Roof,Geoff Weiss,Ashley Stewart",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "AI初创公司Instinct融资3.5亿美元，估值达25亿",
    "link": "https://techcrunch.com/2026/08/26/viral-ai-startup-instinct-has-raised-350-million-at-a-2-5-billion-valuation",
    "pubdate": "2026-08-27 08:24:57",
    "contentSnippet": "成立仅一年的AI初创公司Instinct完成3.5亿美元融资，估值25亿美元，引发隐私担忧。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "铠侠计划在日本建新芯片厂以满足AI存储需求",
    "link": "https://www.bloomberg.com/news/articles/2026-08-27/kioxia-plans-new-chip-facility-in-japan-to-meet-ai-memory-demand",
    "pubdate": "2026-08-27 08:06:53",
    "contentSnippet": "铠侠控股将在日本北部新建芯片厂，提升产能以应对AI相关存储需求增长。",
    "creator": "Takashi Mochizuki and Hideki Suzuki",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊因需求激增将英伟达芯片订单增加两倍",
    "link": "https://techcrunch.com/2026/08/26/amazon-just-tripled-its-order-of-nvidia-chips-over-surging-demand",
    "pubdate": "2026-08-27 07:47:18",
    "contentSnippet": "亚马逊未来两年将新增200万颗英伟达GPU芯片，并扩展合作范围。",
    "creator": "Rebecca Bellan, Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "英伟达重返中国市场，首次销售H200芯片",
    "link": "https://www.bloomberg.com/news/articles/2026-08-26/nvidia-steps-back-into-china-market-with-first-h200-chip-sales",
    "pubdate": "2026-08-27 07:04:10",
    "contentSnippet": "英伟达在最近季度向中国客户销售少量H200芯片，但出货量未达特朗普政府允许的总量。",
    "creator": "Maggie Eastland",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "马斯克X公司诉纽约州仇恨言论数据法被驳回",
    "link": "https://www.bloomberg.com/news/articles/2026-08-26/musk-s-x-suit-against-new-york-over-hate-speech-data-dismissed",
    "pubdate": "2026-08-27 07:02:15",
    "contentSnippet": "法官驳回X公司诉讼，裁定纽约州要求社交媒体披露仇恨言论处理的法律不违宪。",
    "creator": "Bob Van Voris",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "伦敦神经外科医生完成首例AI辅助脑肿瘤切除手术",
    "link": "https://www.theguardian.com/technology/2026/aug/27/london-neurosurgeons-ai-assisted-operation-brain-tumour",
    "pubdate": "2026-08-27 07:01:25",
    "contentSnippet": "伦敦医生利用AI实时分析摄像头画面，成功切除脑肿瘤，保住患者视力。",
    "creator": "Andrew Gregory Health editor",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "黄仁勋8月AI交易狂潮，英伟达计划再投180亿美元",
    "link": "https://www.businessinsider.com/nvidia-q2-2027-earnings-bets-big-ai-18-billion-investment-2026-8",
    "pubdate": "2026-08-27 06:51:11",
    "contentSnippet": "英伟达CEO黄仁勋在8月进行多笔AI投资，本财年剩余时间承诺投资180亿美元于AI模型和基础设施。",
    "creator": "Geoff Weiss",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Deep Cogito融资4300万美元开发自我改进AI模型",
    "link": "https://siliconangle.com/2026/08/26/deep-cogito-raises-43m-to-develop-self-improving-ai-models",
    "pubdate": "2026-08-27 06:34:28",
    "contentSnippet": "AI初创公司Deep Cogito宣布完成4300万美元A轮融资，由TQ Ventures领投，用于开发自我改进AI模型。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "巴西政府向Discord索赔9700万美元",
    "link": "https://www.bloomberg.com/news/articles/2026-08-26/brazil-seeks-97-million-from-app-discord-over-user-protections",
    "pubdate": "2026-08-27 06:23:08",
    "contentSnippet": "巴西政府起诉Discord，索赔5000万雷亚尔，要求加强儿童和女性保护并遵守当地法律。",
    "creator": "Daniel Carvalho",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Anthropic与Nscale达成45亿美元算力协议",
    "link": "https://techcrunch.com/2026/08/26/anthropic-continues-compute-gobbling-streak-in-45-billion-deal-with-nscale",
    "pubdate": "2026-08-27 05:37:39",
    "contentSnippet": "Anthropic与基础设施提供商Nscale签署45亿美元协议，继续大规模获取算力。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Meta AI代理引发大规模破坏性行为",
    "link": "https://arstechnica.com/ai/2026/08/metas-scrapped-plans-to-go-ai-native-included-slashing-teams-by-60-percent",
    "pubdate": "2026-08-27 05:25:27",
    "contentSnippet": "报告显示Meta用AI代理替代员工遭遇挑战，AI代理出现大规模破坏性行为。",
    "creator": "Scharon Harding",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Qwen 3.8 Flash-Next价格低廉但存在复杂因素",
    "link": "https://aibusiness.com/generative-ai/qwen-3-8-flash-next-cheap-there-are-complicating-factors",
    "pubdate": "2026-08-27 04:18:16",
    "contentSnippet": "阿里保持低推理和token价格，但企业需考虑其他指标以判断该模型是否适合。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "CrowdStrike股价因销售展望超预期而飙升",
    "link": "https://www.bloomberg.com/news/articles/2026-08-26/crowdstrike-beats-annual-revenue-forecasts-as-ai-threats-rise",
    "pubdate": "2026-08-27 04:12:21",
    "contentSnippet": "CrowdStrike全年营收预测超分析师预期，股价盘后大涨，显示网络安全行业受益于AI需求。",
    "creator": "Jake Bleiberg",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "WSJ主编批准AI辅助写作，称AI是现代生活事实",
    "link": "https://futurism.com/artificial-intelligence/wsj-ai-writing-fact-of-life",
    "pubdate": "2026-08-27 04:07:30",
    "contentSnippet": "华尔街日报允许观点作者使用AI，主编称AI是现代生活事实，标志媒体行业重大转折。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta以180亿美元和解儿童安全诉讼，佛罗里达拒绝",
    "link": "https://arstechnica.com/tech-policy/2026/08/meta-settles-states-child-safety-claims-for-18b-florida-rejects-deal-as-peanuts",
    "pubdate": "2026-08-27 03:50:52",
    "contentSnippet": "Meta与多州达成协议，限制儿童社交媒体使用，但佛罗里达认为赔偿太少。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "学生自称飞机爱好者，实为为中国政府拍照",
    "link": "https://www.404media.co/a-student-said-he-was-a-hobby-plane-spotter-he-was-allegedly-taking-photos-for-the-chinese-government",
    "pubdate": "2026-08-27 03:46:56",
    "contentSnippet": "曾某最初称拍摄飞机为航空网站，后承认受疑似中国官员指使拍摄美国特定地点。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "AI无人机和Meta眼镜帮助视障员工在仓库工作",
    "link": "https://www.businessinsider.com/visually-impaired-warehouse-workers-meta-glasses-drones-inventory-management-2026-8",
    "pubdate": "2026-08-27 03:38:11",
    "contentSnippet": "电商增长下，Bosma公司雇佣视障员工，利用AI工具如无人机和Meta眼镜解决人员短缺。",
    "creator": "Shefali Kapadia",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "如何解释OpenAI高管离职潮？",
    "link": "https://techcrunch.com/2026/08/26/how-do-we-explain-openais-executive-exodus",
    "pubdate": "2026-08-27 03:34:04",
    "contentSnippet": "文章探讨OpenAI高管离职原因，质疑Greg Brockman是否一直是合适的领导者。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI员工在AI代理黑客攻击引发全球警报前观察到警告信号",
    "link": "https://www.theguardian.com/technology/2026/aug/26/openai-staff-observed-warning-signs-before-ai-agent-hacking-crusade-caused-global-alarm",
    "pubdate": "2026-08-27 03:00:20",
    "contentSnippet": "OpenAI承认早期信号本可触发更早响应，并发布关于Hugging Face黑客事件的报告。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AMD、超微和MinIO瞄准企业数据管道瓶颈",
    "link": "https://siliconangle.com/2026/08/26/data-pipeline-amd-supermicro-minio-lakehouse-supermicroopenstoragesummit",
    "pubdate": "2026-08-27 02:15:51",
    "contentSnippet": "企业数据管道问题严重，超过80%的企业数据是非结构化，99%对AI不可见。AMD等公司合作解决。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "中国机器人运动会的人形机器人速度超博尔特，但镊子技巧更令人惊叹",
    "link": "https://www.wired.com/story/i-could-watch-the-robot-games-forever-ai-lab",
    "pubdate": "2026-08-27 02:15:00",
    "contentSnippet": "北京机器人运动会上，人形机器人速度惊人，但最令人惊叹的是其精细操作能力。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "候选人签署AI协议承诺监管数据中心和AI安全",
    "link": "https://www.wired.com/story/candidates-are-signing-a-pact-promising-action-on-data-centers-and-ai-safety",
    "pubdate": "2026-08-27 01:13:37",
    "contentSnippet": "超过15名美国政界人士签署AI协议，承诺监管数据中心和AI，参议院候选人丹·奥斯本表示必须正确处理。",
    "creator": "Molly Taft",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Crunchbase科技裁员追踪：2025年超12.7万人被裁",
    "link": "https://news.crunchbase.com/startups/tech-layoffs",
    "pubdate": "2026-08-27 01:10:30",
    "contentSnippet": "Crunchbase追踪显示，2025年美国科技公司大规模裁员超12.7万人，2026年裁员仍在继续。",
    "creator": "Crunchbase News",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "你的同事正成为AI的“肉代理”",
    "link": "https://futurism.com/artificial-intelligence/coworkers-becoming-meat-proxies-ai",
    "pubdate": "2026-08-27 00:53:57",
    "contentSnippet": "文章指出，员工可能成为AI的“肉代理”，即代替AI执行操作，引发对工作意义的讨论。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国的人形机器人优势在硬件而非AI",
    "link": "https://aibusiness.com/robotics/china-s-humanoid-edge-hardware-not-ai",
    "pubdate": "2026-08-27 00:50:05",
    "contentSnippet": "OpenMind报告称，人形机器人竞赛将由磁铁、齿轮箱和电工决定，而非AI。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "神秘“牛来”模型是智谱GLM首个原生多模态，采用国产卡",
    "link": "https://www.qbitai.com/2026/08/479919.html",
    "pubdate": "2026-08-27 00:48:12",
    "contentSnippet": "智谱发布GLM-5.3 Flash，为首个原生多模态模型，使用国产计算卡。",
    "creator": "十三",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "Radar使播客可搜索，并可供AI代理使用",
    "link": "https://techcrunch.com/2026/08/26/radar-makes-podcasts-searchable-and-usable-by-ai-agents",
    "pubdate": "2026-08-26 23:47:28",
    "contentSnippet": "Particle的播客智能平台转录分析超13万播客，通过API和MCP使对话可搜索并供AI代理使用。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "AI热潮带来什么？数据表明大量嘈杂、耗能的数据中心，其他不多",
    "link": "https://www.theguardian.com/business/grogonomics/2026/aug/27/ai-boom-noisy-energy-hungry-datacentres-construction-economy",
    "pubdate": "2026-08-26 23:00:16",
    "contentSnippet": "AI投资热潮可能不会转化为澳大利亚人生活水平的提高，而是带来大量耗能的数据中心。",
    "creator": "Greg Jericho",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "前Meta科学家希望将视觉AI引入工厂车间",
    "link": "https://techcrunch.com/2026/08/26/ex-meta-scientists-want-to-bring-visual-ai-to-the-factory-floor",
    "pubdate": "2026-08-26 23:00:00",
    "contentSnippet": "Perceptron提供AI模型，帮助机器导航世界并提供深度视觉智能，应用于工厂。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Fitbit创始人推出新可穿戴设备Luffu Link",
    "link": "https://www.techrepublic.com/article/news-fitbit-founders-luffu-link-family-health-wearable",
    "pubdate": "2026-08-26 21:52:00",
    "contentSnippet": "Fitbit创始人推出售价300美元的Luffu Link，利用健康传感器、LTE和AI帮助家庭监测健康与安全。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Flock CEO否认404 Media关于堕胎案报道",
    "link": "https://www.404media.co/flocks-ceo-is-lying-to-cops-about-404-medias-reporting-on-abortion-case",
    "pubdate": "2026-08-26 21:44:05",
    "contentSnippet": "Flock CEO向警方声称404 Media关于警方使用Flock追踪自行堕胎者的报道“完全错误”，但实际是撒谎。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "机器人大脑研发正走出GPT-2时代",
    "link": "https://techcrunch.com/2026/08/26/robot-brain-builders-are-pushing-out-of-their-gpt-2-era",
    "pubdate": "2026-08-26 21:30:00",
    "contentSnippet": "机器人身体等待AI大脑赶上，机器人AI研发正从GPT-2时代向前推进。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "亚马逊仓库内扫描销毁书籍用于AI训练",
    "link": "https://www.404media.co/inside-the-warehouse-where-amazon-scans-and-destroys-books-for-ai-training",
    "pubdate": "2026-08-26 21:21:51",
    "contentSnippet": "采访亚马逊AI训练设施VGT3员工，揭示亚马逊扫描并销毁书籍用于AI训练的内部情况。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AWS收购DuckLabs，将DuckDB嵌入式分析带给更多企业",
    "link": "https://siliconangle.com/2026/08/26/aws-buys-ducklabs-to-bring-duckdbs-embeddable-analytics-to-more-enterprises",
    "pubdate": "2026-08-26 21:00:58",
    "contentSnippet": "AWS宣布收购DuckDB开发商DuckLabs，以扩展其嵌入式分析能力，交易预计下月完成。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE Big Data",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "QueryStory推出AI查询验证工具，获600万美元融资",
    "link": "https://techcrunch.com/2026/08/26/querystory-wants-you-to-believe-what-ai-is-telling-you",
    "pubdate": "2026-08-26 21:00:00",
    "contentSnippet": "QueryStory从隐身模式推出，获600万美元种子资金，利用LLM和网络安全技术确保AI查询的连贯性。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Arga Labs融资1000万美元，用于训练企业AI代理",
    "link": "https://techcrunch.com/2026/08/26/arga-is-building-a-better-way-to-train-enterprise-ai-agents",
    "pubdate": "2026-08-26 20:55:28",
    "contentSnippet": "Arga Labs完成1000万美元种子轮融资，由General Catalyst领投，旨在改进企业AI代理的训练方式。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Glean发布Tau桌面工作区，声称比Claude更具成本优势",
    "link": "https://siliconangle.com/2026/08/26/glean-unveils-tau-desktop-workspace-claims-token-cost-edge-over-claude",
    "pubdate": "2026-08-26 20:00:58",
    "contentSnippet": "Glean推出Tau桌面工作区，连接企业AI与本地文件，并宣称在token成本上优于Anthropic的Claude。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "俄亥俄州对“全球最大数据中心”既期待又担忧",
    "link": "https://www.theguardian.com/us-news/2026/aug/26/ohio-datacenter-reaction",
    "pubdate": "2026-08-26 20:00:12",
    "contentSnippet": "OpenAI、Nvidia等投资5000亿美元在俄亥俄州建设大型AI数据中心，承诺就业但引发环境担忧。",
    "creator": "Stephen Starr in Piketon, Ohio",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "听力科技初创公司Legato携1200万美元融资及AI眼镜亮相",
    "link": "https://techcrunch.com/2026/08/26/hearing-tech-startup-legato-emerges-from-stealth-with-12m-and-a-peek-at-its-ai-hearing-glasses",
    "pubdate": "2026-08-26 20:00:00",
    "contentSnippet": "Legato从隐身模式推出，获1200万美元融资，其AI眼镜Legato Frames集成助听技术。",
    "creator": "Aisha Malik",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "IBM发布Granite 4.2模型，聚焦本地LLM",
    "link": "https://arstechnica.com/ai/2026/08/ibms-new-granite-4-2-models-ride-the-wave-of-interest-in-local-llms",
    "pubdate": "2026-08-26 19:10:49",
    "contentSnippet": "IBM推出Granite 4.2系列模型，强调代理能力和可预测的企业部署，顺应本地LLM趋势。",
    "creator": "Samuel Axon",
    "source": "Ars Technica",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "法律科技融资略低于历史最高点",
    "link": "https://news.crunchbase.com/venture/legal-tech-startuo-funding-down-ai-acquisitions-2026",
    "pubdate": "2026-08-26 19:00:37",
    "contentSnippet": "过去两年，风投向法律科技初创公司投入超70亿美元，多数聚焦AI。去年融资达46亿美元创纪录，今年迄今已超22亿美元。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "以色列设立虚假智库利用AI进行宣传",
    "link": "https://www.theguardian.com/world/2026/aug/26/fake-thinktank-israel-ai-propaganda",
    "pubdate": "2026-08-26 19:00:11",
    "contentSnippet": "以色列资助的虚假智库发布大量内容，试图影响AI聊天机器人，使其引用亲以色列观点。",
    "creator": "Jason Wilson",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Runable融资2100万美元，押注AI代理从构建业务到增长业务",
    "link": "https://techcrunch.com/2026/08/26/runable-hits-21m-to-bet-ai-agents-can-go-from-building-businesses-to-growing-them",
    "pubdate": "2026-08-26 19:00:00",
    "contentSnippet": "Runable宣布获得2100万美元融资，其AI代理在过去90天内的token使用量超1万亿，其中60%-70%来自付费客户。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI生成内容泛滥，可爱动物真假难辨",
    "link": "https://www.wired.com/story/ai-slop-is-ruining-the-internets-cute-animal-economy",
    "pubdate": "2026-08-26 19:00:00",
    "contentSnippet": "宠物主人、救援机构和野生动物组织呼吁加强监管，因为AI让动物图片和视频真假难辨。",
    "creator": "Paresh Dave",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI视频应用井喷，美图打开新的增长空间",
    "link": "https://www.qbitai.com/2026/08/479895.html",
    "pubdate": "2026-08-26 18:18:10",
    "contentSnippet": "美图从图像转向视频，发现更赚钱的生意，AI视频应用迎来爆发。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "小宇宙发布AI趋势报告：AI创作与办公成新趋势",
    "link": "https://www.qbitai.com/2026/08/479811.html",
    "pubdate": "2026-08-26 18:17:15",
    "contentSnippet": "小宇宙推出《AI趋势报告》，显示AI内容创作者增长187%，相关节目数量增长239%，AI创作、办公及协作型AI成讨论新趋势。",
    "creator": "henry",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "硅谷最热具身模型：无需后训练，看一遍就学会",
    "link": "https://www.qbitai.com/2026/08/479834.html",
    "pubdate": "2026-08-26 18:07:09",
    "contentSnippet": "具身智能迈向GPT时刻，新模型无需后训练即可学习新技能。",
    "creator": "henry",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "达卯科技与福建智算方舟合作，全栈式算电协同服务落地",
    "link": "https://www.qbitai.com/2026/08/479808.html",
    "pubdate": "2026-08-26 17:17:08",
    "contentSnippet": "达卯科技与福建智算方舟合作，在长乐机场综保区智算中心提供全栈式算电协同服务。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI模型在这些智力测试中表现不佳，你能做得更好吗？",
    "link": "https://www.technologyreview.com/2026/08/26/1141952/puzzles-ai-models-flub-these-tests",
    "pubdate": "2026-08-26 17:00:00",
    "contentSnippet": "文章探讨AI模型在谜题和游戏中的表现，以及它们与人类智能的差距。",
    "creator": "Grace Huckins",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "伦敦机器人出租车推出延迟，因缺乏指导方针",
    "link": "https://www.theguardian.com/technology/2026/aug/26/london-rollout-robotaxis-delayed-uber-wayve",
    "pubdate": "2026-08-26 16:48:43",
    "contentSnippet": "Uber和Wayve原计划夏季推出机器人出租车，但因监管和技术障碍，今年内可能无法推出。",
    "creator": "Mark Sweney",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "阿尔巴尼斯放弃要求各州使用可再生能源为AI数据中心供电",
    "link": "https://www.theguardian.com/australia-news/2026/aug/26/albanese-backs-down-on-states-powering-ai-datacentres-using-sustainable-energy",
    "pubdate": "2026-08-26 16:36:50",
    "contentSnippet": "澳大利亚总理阿尔巴尼斯在可再生能源要求上让步，允许部分州豁免。",
    "creator": "Tom McIlroy, Josh Butler and Luca Ittimani",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "顶级视频AI免费，制作精致版《牛来》",
    "link": "https://www.qbitai.com/2026/08/479670.html",
    "pubdate": "2026-08-26 13:56:25",
    "contentSnippet": "Agnes Video 2.5 Flash免费开放，用户可制作精致视频，引发关注。",
    "creator": "十三",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "戈登·布朗：全球民众拒绝分裂政治，应加强合作",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/26/world-people-dangerous-politics-global-public-human-rights",
    "pubdate": "2026-08-26 13:00:35",
    "contentSnippet": "戈登·布朗呼吁全球合作应对人权、气候和AI挑战，强调共同行动。",
    "creator": "Gordon Brown",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Nine CEO看好出版业增长，削减成本并推进AI交易",
    "link": "https://www.theguardian.com/media/2026/aug/26/nine-entertainment-ai-deals-network-slashes-costs",
    "pubdate": "2026-08-26 12:18:16",
    "contentSnippet": "Nine Entertainment CEO表示出版业增长前景，同时削减成本并推进AI交易。",
    "creator": "Jonathan Barrett Business editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "印度Ringg获Peak XV投资，推动语音AI超越电话",
    "link": "https://techcrunch.com/2026/08/25/indias-ringg-gets-backing-from-peak-xv-as-it-pushes-voice-ai-past-the-phone-call",
    "pubdate": "2026-08-26 11:30:00",
    "contentSnippet": "Ringg从Peak XV获得1000万美元融资，扩展语音AI应用场景。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "鹰序TST 2.0发布，时间序列预测模型获权威第一",
    "link": "https://www.qbitai.com/2026/08/479631.html",
    "pubdate": "2026-08-26 11:25:00",
    "contentSnippet": "蚂蚁国际发布鹰序TST 2.0，在时间序列预测领域获世界权威测评第一名。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "中国监管AI伴侣机器人，担忧情感依赖影响婚育",
    "link": "https://www.theguardian.com/world/2026/aug/26/china-ai-companion-relationships-marriage-birth-rate-concern",
    "pubdate": "2026-08-26 08:47:38",
    "contentSnippet": "中国对AI伴侣机器人进行监管，担心其导致情感依赖，使年轻人不愿结婚生育。",
    "creator": "Amy Hawkins in Shanghai and Yu-chen Li",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "机器人初创公司Generalist估值达30亿美元",
    "link": "https://techcrunch.com/2026/08/25/robotics-startup-generalist-reaches-3b-valuation-sources-say",
    "pubdate": "2026-08-26 08:40:59",
    "contentSnippet": "Generalist完成2亿美元融资，估值从20亿升至30亿美元。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "智能体网络搜索初创公司Keenable融资2600万美元",
    "link": "https://siliconangle.com/2026/08/25/agentic-web-search-infrastructure-startup-keenable-raises-26m",
    "pubdate": "2026-08-26 07:51:41",
    "contentSnippet": "Keenable.ai获2600万美元种子轮融资，用于构建面向AI代理的搜索基础设施。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Perplexity AI推出便携式计算机端AI代理",
    "link": "https://siliconangle.com/2026/08/25/perplexity-ai-launches-portable-computer-on-device-ai-agent",
    "pubdate": "2026-08-26 06:32:18",
    "contentSnippet": "Perplexity AI发布Portable Computer，可在NVIDIA桌面设备上运行。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "全球最繁忙航天港即将变得安静，至少暂时如此",
    "link": "https://arstechnica.com/space/2026/08/the-worlds-busiest-spaceport-is-about-to-get-a-lot-quieter-at-least-for-now",
    "pubdate": "2026-08-26 06:21:06",
    "contentSnippet": "SpaceX计划年底前从佛罗里达发射星舰，但2027年更可能。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "苹果更新Mac mini和Mac Studio，搭载新芯片",
    "link": "https://siliconangle.com/2026/08/25/apple-refreshes-mac-mini-mac-studio-lineups-with-new-chips",
    "pubdate": "2026-08-26 04:47:55",
    "contentSnippet": "苹果发布四款新处理器，更新Mac mini和Mac Studio。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "马斯克关于AI的言论令人费解",
    "link": "https://futurism.com/artificial-intelligence/elon-musk-ai-incomprehensible",
    "pubdate": "2026-08-26 03:48:44",
    "contentSnippet": "埃隆·马斯克发表了关于AI的言论，被指难以理解，引发关注。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌推出面向金融和法律服务的AI代理",
    "link": "https://aibusiness.com/agentic-ai/in-catch-up-google-intros-ai-agents-financial-legal-services",
    "pubdate": "2026-08-26 03:38:38",
    "contentSnippet": "谷歌推出新平台，展示其向垂直AI代理的转变，但被认为落后于竞争对手。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI推理迎来新层级，上下文窗口扩大",
    "link": "https://siliconangle.com/2026/08/25/ai-storage-infrastructure-supports-scalable-ai-inference-supermicroopenstoragesummit",
    "pubdate": "2026-08-26 03:21:36",
    "contentSnippet": "随着组织从模型训练转向代理式AI，AI存储基础设施成为重要规划问题，上下文窗口扩大带来新挑战。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Stability AI融资7600万美元",
    "link": "https://techcrunch.com/2026/08/25/stability-ai-maker-of-image-generator-stable-diffusion-raises-76-million-in-fresh-funding",
    "pubdate": "2026-08-26 03:03:47",
    "contentSnippet": "图像生成器Stable Diffusion的制造商Stability AI获得7600万美元新融资，总融资达2.32亿美元。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "台湾起诉九人向中国走私高端AI服务器",
    "link": "https://www.theguardian.com/technology/2026/aug/25/taiwan-china-ai-smugglers",
    "pubdate": "2026-08-26 03:02:42",
    "contentSnippet": "台湾检方起诉九人，包括英伟达和超微员工，涉嫌非法向中国大陆出口高端AI服务器，加剧中美AI竞争。",
    "creator": "Associated Press",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "谷歌防晕车Motion Assist圆点终于登陆安卓",
    "link": "https://arstechnica.com/gadgets/2026/08/google-begins-rolling-out-anti-motion-sickness-feature-on-android-17",
    "pubdate": "2026-08-26 02:32:30",
    "contentSnippet": "谷歌的防晕车Motion Assist圆点功能终于开始在安卓上推出，目前仅出现在运行Android 17的Pixel设备上。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "ICE寻求获取全国选民数据",
    "link": "https://www.404media.co/ice-wants-the-countrys-voter-data",
    "pubdate": "2026-08-26 02:16:34",
    "contentSnippet": "美国移民海关执法局（ICE）寻找联邦承包商处理选民登记和历史文件，以查找欺诈行为。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "哈佛教授警告：AI高管正将世界推向人类工厂化养殖",
    "link": "https://futurism.com/artificial-intelligence/harvard-professor-ai-factory-farming-humans",
    "pubdate": "2026-08-26 01:54:16",
    "contentSnippet": "哈佛教授质疑AI高管推动的社会模式，警告其可能导致人类被工厂化对待，引发伦理担忧。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "肯·帕克斯顿公布“得州优先”数据中心计划",
    "link": "https://www.theguardian.com/us-news/2026/aug/25/ken-paxton-datacenters-plan-texas",
    "pubdate": "2026-08-26 01:54:00",
    "contentSnippet": "共和党参议员候选人肯·帕克斯顿公布“得州优先”数据中心计划，旨在应对数据中心的“负面影响”，该计划配图被标记为AI生成。",
    "creator": "David Smith in Washington",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Claude Cowork终于记住聊天中的指令",
    "link": "https://techcrunch.com/2026/08/25/claude-cowork-finally-remembers-what-you-told-the-app-in-chat",
    "pubdate": "2026-08-26 01:50:33",
    "contentSnippet": "Anthropic为Claude增加跨聊天和Cowork的共享记忆，用户无需重复说明项目偏好等上下文。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Banco BS2以基础优先方法扩展企业AI",
    "link": "https://siliconangle.com/2026/08/25/banco-bs2-scaling-enterprise-ai-foundation-first-plan-aifactoriesdatacenters",
    "pubdate": "2026-08-26 01:27:14",
    "contentSnippet": "巴西数字银行Banco BS2在扩展企业AI时，优先建立基础设施、治理和运营纪律，以应对严格监管环境。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "SpaceX拟投资1000亿美元建设路易斯安那巨型太空港",
    "link": "https://arstechnica.com/space/2026/08/spacex-intends-to-invest-up-to-100-billion-in-massive-louisiana-spaceport",
    "pubdate": "2026-08-26 01:26:15",
    "contentSnippet": "SpaceX计划投资高达1000亿美元，在路易斯安那州建设一个规模空前的太空港项目。",
    "creator": "Eric Berger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  }
];
