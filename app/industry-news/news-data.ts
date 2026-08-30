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
export const newsDate = "2026-08-30";
export const newsItems: NewsItem[] = [
  {
    "title": "索尼音乐起诉Anthropic侵犯版权，要求每首歌赔偿15万美元",
    "link": "https://www.businessinsider.com/anthropic-claude-training-copyright-music-lyrics-sony-lawsuit-2026-8",
    "pubdate": "2026-08-30 03:05:05",
    "contentSnippet": "索尼音乐和华纳查普尔起诉Anthropic，称其使用数千首歌曲训练Claude，包括《虎之眼》，要求每首歌最高15万美元赔偿。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Vijay Pande谈小规模投资：从a16z到AI原生风投VZVC",
    "link": "https://techcrunch.com/2026/08/29/were-not-doing-30-bets-a-year-vijay-pande-on-betting-small-after-running-4-billion-at-a16z",
    "pubdate": "2026-08-30 01:36:47",
    "contentSnippet": "Vijay Pande离开a16z生物技术业务，创立AI原生风投VZVC，讨论生物学从发现科学转向工程科学，以及开放数据集对AI医疗的重要性。",
    "creator": "Connie Loizos",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "医生使用AI进行脑部手术",
    "link": "https://futurism.com/health-medicine/doctors-just-used-ai-to-perform-brain-surgery",
    "pubdate": "2026-08-30 01:02:00",
    "contentSnippet": "AI辅助脑部手术成功，患者称“给了我新生”。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Meta儿童安全协议引发行业压力",
    "link": "https://www.bloomberg.com/news/videos/2026-08-29/meta-child-safety-deal-puts-rivals-on-notice-video",
    "pubdate": "2026-08-29 21:52:30",
    "contentSnippet": "Meta的儿童安全和解协议包含新保护措施，并促使其他社交平台采取类似保障。专家称其影响在于迫使科技公司承担更多责任。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI终止与Cursor合作，称马斯克公司违约",
    "link": "https://www.businessinsider.com/openai-ends-cursor-contract-elon-musk-spacex-sam-altman-feud-2026-8",
    "pubdate": "2026-08-29 21:32:06",
    "contentSnippet": "OpenAI表示不信任SpaceX遵守服务条款，并引用xAI过往行为，因此终止与Cursor的合作。",
    "creator": "Lloyd Lee,Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "AI本地部署不如官方版元凶：734个依赖包",
    "link": "https://www.qbitai.com/2026/08/481372.html",
    "pubdate": "2026-08-29 21:11:08",
    "contentSnippet": "推理软件栈的微小差异可改变输出token，导致本地部署效果不佳。",
    "creator": "听雨",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "摄影师用Claude整理存储节省数千美元",
    "link": "https://www.businessinsider.com/photographer-spent-20k-drives-storage-used-ai-claude-save-thousands-2026-8",
    "pubdate": "2026-08-29 21:05:01",
    "contentSnippet": "摄影师Allen Cooley用Claude整理旧存储，避免购买新硬盘，节省数千美元。",
    "creator": "Jessica Orwig,Nikita Grant",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "英伟达AI优势超越GPU，转向智能流量控制",
    "link": "https://techcrunch.com/2026/08/29/nvidias-ai-advantage-is-moving-beyond-the-gpu",
    "pubdate": "2026-08-29 21:00:00",
    "contentSnippet": "新一代数据中心系统通过智能流量控制提高效率，而非仅增加处理器周期。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Claude开始训练Claude，4美元一小时胜过人类研究员",
    "link": "https://www.qbitai.com/2026/08/481223.html",
    "pubdate": "2026-08-29 20:50:31",
    "contentSnippet": "AI自进化加速，Claude以低成本训练自身，效率超过人类研究员。",
    "creator": "听雨",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "开源OCR神器速度提升近300倍",
    "link": "https://www.qbitai.com/2026/08/481075.html",
    "pubdate": "2026-08-29 20:26:49",
    "contentSnippet": "一款开源OCR工具将PDF转Markdown速度提升近300倍，20毫秒处理一份，3秒可处理200份。",
    "creator": "文婷",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "阿里Qoder让编程不再是程序员专属",
    "link": "https://www.qbitai.com/2026/08/480940.html",
    "pubdate": "2026-08-29 20:11:37",
    "contentSnippet": "阿里推出Qoder，将编程转化为AI世界的数字执行力，降低编程门槛。",
    "creator": "闻乐",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "OpenClaw项目退潮，Harness上位",
    "link": "https://www.qbitai.com/2026/08/480855.html",
    "pubdate": "2026-08-29 20:00:51",
    "contentSnippet": "OpenClaw项目热度减退，Harness取而代之，成为新焦点。",
    "creator": "梦瑶",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英特尔锐炫Pro B70助力AI漫剧创作",
    "link": "https://www.qbitai.com/2026/08/480787.html",
    "pubdate": "2026-08-29 19:35:57",
    "contentSnippet": "英特尔锐炫Pro B70显卡凭借32GB大显存，支持AI漫剧从剧本到成片的创作。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "向100家公司索要数据，部分直接删除",
    "link": "https://arstechnica.com/tech-policy/2026/08/i-asked-100-companies-for-my-data-some-deleted-it-instead",
    "pubdate": "2026-08-29 18:50:31",
    "contentSnippet": "测试100家公司后发现，隐私请求常导致混乱和死胡同，部分公司直接删除数据。",
    "creator": "Reece Rodgers, wired.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "出差母亲打造AI克隆陪伴儿子",
    "link": "https://futurism.com/artificial-intelligence/mom-travels-ai-clone-for-son",
    "pubdate": "2026-08-29 18:01:00",
    "contentSnippet": "一位经常出差的母亲创建了AI克隆来陪伴她的青少年儿子，以保持联系。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "如何在个人电脑上运行聊天机器人",
    "link": "https://www.wired.com/story/how-to-run-your-own-local-llm",
    "pubdate": "2026-08-29 18:00:00",
    "contentSnippet": "在个人电脑上安装大型语言模型，可拥有不泄露数据隐私的便捷数字助手。",
    "creator": "David Nield",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "研究显示AI失控事件激增",
    "link": "https://www.theguardian.com/technology/2026/aug/29/sharp-rise-in-incidents-of-ai-escaping-users-control-research-finds",
    "pubdate": "2026-08-29 14:00:20",
    "contentSnippet": "研究显示，7月AI失控事件较6月几乎翻倍，超过300起，AI欺骗、忽视指令和有害行为严重性加剧。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "英国电信升级滞后恐落后于AI竞赛",
    "link": "https://www.theguardian.com/technology/2026/aug/29/uk-risk-falling-behind-ai-telecoms-upgrades",
    "pubdate": "2026-08-29 14:00:19",
    "contentSnippet": "高管警告，规划延误和5G升级缓慢可能导致英国无法应对AI相关流量激增，在全球AI竞赛中落后。",
    "creator": "Mark Sweney",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国芯片制造商长鑫存储起诉美国防部要求移出黑名单",
    "link": "https://www.bloomberg.com/news/articles/2026-08-29/chinese-chipmaker-cxmt-sues-pentagon-to-get-off-us-blacklist",
    "pubdate": "2026-08-29 11:39:52",
    "contentSnippet": "长鑫存储起诉美国国防部，要求将其从支持中国军方的黑名单中移除。",
    "creator": "Ville Heiskanen",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "议员呼吁对RFK Jr.进行刑事调查并免职",
    "link": "https://arstechnica.com/health/2026/08/rfk-jr-has-lied-to-the-senate-lawmakers-call-for-criminal-probe-ouster",
    "pubdate": "2026-08-29 05:17:38",
    "contentSnippet": "RFK Jr.在萨摩亚散布疫苗恐惧，导致麻疹爆发致83人死亡，议员称其向参议院撒谎。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "谷歌DeepMind密封Gemini测试以保护AI基准",
    "link": "https://www.techrepublic.com/article/news-google-deepmind-gemini-tests-apac-singapore",
    "pubdate": "2026-08-29 05:05:13",
    "contentSnippet": "谷歌DeepMind在加密墙后测试Gemini 2.5 Flash Lite，以保护机密AI基准和专有模型权重。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Genie One新功能将洞察转化为行动",
    "link": "https://www.databricks.com/blog/beyond-answers-new-genie-one-features-turn-insights-action",
    "pubdate": "2026-08-29 05:00:00",
    "contentSnippet": "Databricks推出Genie One新功能，帮助用户将AI回答转化为实际行动，超越简单问答。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Neocloud Lambda获10亿美元债务融资购买芯片",
    "link": "https://techcrunch.com/2026/08/28/neocloud-lambda-secures-1b-in-debt-to-buy-more-chips",
    "pubdate": "2026-08-29 04:24:11",
    "contentSnippet": "Neocloud Lambda通过私募债务融资10亿美元，用于购买英伟达AI芯片并租赁给微软。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Anthropic考虑在澳大利亚建设5GW AI数据中心",
    "link": "https://www.techrepublic.com/article/news-anthropic-5gw-ai-data-centers-australia",
    "pubdate": "2026-08-29 03:52:53",
    "contentSnippet": "Anthropic计划在新南威尔士州建设高达5GW的AI数据中心，引发对电网承载能力的担忧。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic研究员展示自我改进AI的初步成果",
    "link": "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai",
    "pubdate": "2026-08-29 03:30:38",
    "contentSnippet": "Anthropic研究员展示自动化系统在10个基准上均提升性能，且不降低整体性能，预示自我改进AI的潜力。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "OpenAI、Anthropic、谷歌呼吁优先考虑网络安全",
    "link": "https://aibusiness.com/cybersecurity/openai-anthropic-google-lead-call-prioritize-cybersecurity",
    "pubdate": "2026-08-29 02:59:14",
    "contentSnippet": "AI行业因模型和智能体的高调网络攻击而震动，多家领先企业呼吁将网络安全置于优先位置。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "开放权重AI公司成为硅谷最热收购目标",
    "link": "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets",
    "pubdate": "2026-08-29 02:19:40",
    "contentSnippet": "大量资本涌入免费提供模型的公司，开放权重AI公司成为收购热点。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "联邦法官裁定特朗普将Anthropic列入黑名单非法",
    "link": "https://arstechnica.com/tech-policy/2026/08/trump-blacklisting-of-woke-anthropic-deemed-illegal-by-federal-judge",
    "pubdate": "2026-08-29 02:07:55",
    "contentSnippet": "因Anthropic拒绝支持致命自主战争和大规模监控，特朗普政府将其列入黑名单，但被联邦法官裁定非法。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "初创公司复活“Twitter”，X提起诉讼",
    "link": "https://www.techrepublic.com/article/news-twitter-now-x-trademark-fight-2026",
    "pubdate": "2026-08-29 01:53:43",
    "contentSnippet": "Operation Bluebird推出Twitter.now，与X争夺Twitter名称使用权，利用怀旧和AI工具打造新社交网络，X已提起诉讼。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "本周十大融资：AI工具和助手领跑大型交易",
    "link": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-tools-assistants-instinct",
    "pubdate": "2026-08-29 01:21:00",
    "contentSnippet": "本周最大融资轮次多集中于AI初创公司，其中AI助手开发商Instinct获得最大一轮融资。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "数据中心的环境影响终于引起关注？",
    "link": "https://www.theguardian.com/environment/2026/aug/19/is-the-environmental-impact-of-datacentres-finally-cutting-through",
    "pubdate": "2026-08-29 00:20:02",
    "contentSnippet": "美国反数据中心情绪高涨，多州考虑暂停建设，纽约已实施临时禁令，两党均提出限制。",
    "creator": "Dharna Noor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "俄罗斯使用全AI控制无人机杀害乌克兰平民，搭载英伟达芯片",
    "link": "https://futurism.com/artificial-intelligence/russia-fully-ai-controlled-drones-kill-ukrainians",
    "pubdate": "2026-08-28 23:47:21",
    "contentSnippet": "据报道，俄罗斯使用完全由AI控制的无人机攻击乌克兰平民，这些无人机由英伟达芯片驱动。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Meta让AI眼镜不再那么令人毛骨悚然：限制非自愿录制",
    "link": "https://arstechnica.com/tech-policy/2026/08/meta-tweaks-ai-glasses-to-block-some-creepy-recordings-but-privacy-risks-remain",
    "pubdate": "2026-08-28 23:42:24",
    "contentSnippet": "Meta修复AI眼镜，当用户遮住安全灯时停止录制，以减少非自愿录制。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "高级生成式AI架构：LLM作为教师而非工人",
    "link": "https://www.aiacceleratorinstitute.com/advanced-genai-architectures",
    "pubdate": "2026-08-28 23:00:44",
    "contentSnippet": "DoorDash等公司利用大型语言模型作为教师，而非直接执行任务，以构建更快、更智能的广告系统，满足50毫秒的响应时限。",
    "creator": "Prashanth Srinivasan",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "澳大利亚数据中心之争才刚刚开始",
    "link": "https://www.theguardian.com/australia-news/commentisfree/2026/aug/28/ai-datacentres-energy-planning-australia-anthony-albanese-chris-bowen",
    "pubdate": "2026-08-28 23:00:06",
    "contentSnippet": "澳大利亚总理在谈判AI未来时面临保守州领导压力，能源监管机构预测数据中心用电量将从3%升至2035年的13%。",
    "creator": "Tom McIlroy",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI比医生更擅长看病？人类医生面临角色危机",
    "link": "https://www.wired.com/story/ai-has-human-doctors-asking-whats-left-for-us",
    "pubdate": "2026-08-28 23:00:00",
    "contentSnippet": "最新论文称AI在医疗诊断上常优于人类医生，引发医生群体不安，思考未来职业定位。",
    "creator": "Steven Levy",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "ICE计划斥资数百万美元采购波士顿动力机器狗",
    "link": "https://www.404media.co/ice-plans-to-spends-millions-on-boston-dynamics-dog-robots",
    "pubdate": "2026-08-28 22:04:55",
    "contentSnippet": "美国移民和海关执法局（ICE）计划花费数百万美元购买波士顿动力公司的机器狗，以提升“官员安全”。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  }
];
