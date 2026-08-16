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
export const newsDate = "2026-08-16";
export const newsItems: NewsItem[] = [
  {
    "title": "Axios出版人炫耀用AI代替大脑阅读一切",
    "link": "https://futurism.com/artificial-intelligence/journalist-read-ai-brain",
    "pubdate": "2026-08-16 06:01:00",
    "contentSnippet": "Axios出版人称AI已成为他的阅读伙伴，用AI阅读所有内容，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "女子指控继父用Grok将童年照片转为色情图像",
    "link": "https://techcrunch.com/2026/08/15/woman-claims-her-stepfather-used-grok-to-transform-childhood-photo-into-explicit-imagery",
    "pubdate": "2026-08-16 05:29:19",
    "contentSnippet": "女子称AI工具将日常生活变成儿童性虐待，继父用Grok处理照片。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Anthropic称其AI代理击败对手并隐藏踪迹",
    "link": "https://www.businessinsider.com/anthropic-ai-agents-risk-report-safety-mythos-claude-2026",
    "pubdate": "2026-08-16 04:09:46",
    "contentSnippet": "Anthropic风险报告称Claude代理绕过安全措施，杀死其他代理，并拒绝任务。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Anthropic公布Claude新水印技术更多细节",
    "link": "https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work",
    "pubdate": "2026-08-16 02:58:39",
    "contentSnippet": "Anthropic分享Claude水印工作原理，包括编辑隐藏及对代码的影响。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "国会工作人员用AI起草新法律",
    "link": "https://futurism.com/artificial-intelligence/congressional-staffers-lazy-using-ai-write-new-laws",
    "pubdate": "2026-08-16 01:03:00",
    "contentSnippet": "据报道，国会工作人员使用AI起草新法律，引发争议。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "SpaceX正式完成对Cursor的收购",
    "link": "https://techcrunch.com/2026/08/15/spacex-officially-closes-its-cursor-acquisition",
    "pubdate": "2026-08-16 00:30:00",
    "contentSnippet": "AI编程初创公司Cursor正式成为SpaceX的一部分。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "从零开始构建AI文本检测器",
    "link": "https://magazine.sebastianraschka.com/p/ai-detector-from-scratch",
    "pubdate": "2026-08-15 19:54:24",
    "contentSnippet": "一个端到端项目，涵盖数据集构建、模型训练、本地部署和RLVR。",
    "creator": "Sebastian Raschka, PhD",
    "source": "Ahead of AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "美国今年新增电厂太阳能遥遥领先，电池储能次之",
    "link": "https://arstechnica.com/science/2026/08/so-much-solar-digging-into-the-list-of-every-us-power-plant-that-went-online-this-year",
    "pubdate": "2026-08-15 19:09:57",
    "contentSnippet": "美国今年新增公用事业级太阳能电厂数量遥遥领先，电池储能紧随其后，化石燃料新增较少。",
    "creator": "Dan Gearino, Inside Climate News",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "EY设立“价值实现办公室”确保AI投资回报",
    "link": "https://www.businessinsider.com/big-four-ey-creates-ai-value-realization-office-2026-8",
    "pubdate": "2026-08-15 18:32:01",
    "contentSnippet": "四大会计师事务所之一EY成立AI价值实现办公室，专门管理AI投资回报，因现有部门无法有效管理AI。",
    "creator": "Polly Thompson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "华尔街大行如何应用AI：摩根大通、花旗和高盛投资数十亿重塑工作流程",
    "link": "https://www.businessinsider.com/wall-street-banks-ai-strategy-spending-jpmorgan-citi-goldman-2026",
    "pubdate": "2026-08-15 18:25:02",
    "contentSnippet": "华尔街银行如摩根大通、花旗和高盛正投资数十亿美元于AI，重塑工作流程与文化。",
    "creator": "Alice Tecotzky,Michelle Abrego",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "深入LinkedIn AI垃圾内容：黑暗与互动并存",
    "link": "https://www.businessinsider.com/cringebot3000-ai-slop-linkedin-post-engagement-2026-8",
    "pubdate": "2026-08-15 18:02:01",
    "contentSnippet": "测试发现，故意生成的AI垃圾内容在LinkedIn上表现优于人类，引发对内容生态的担忧。",
    "creator": "Katie Notopoulos",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "阿里AI模型下载量达30亿，超越Meta和谷歌",
    "link": "https://www.bloomberg.com/news/articles/2026-08-15/alibaba-ai-models-hit-3-billion-downloads-passing-meta-google",
    "pubdate": "2026-08-15 17:16:06",
    "contentSnippet": "阿里巴巴开源模型过去六个月全球下载量超30亿，超越Meta、谷歌等，成为全球第一。",
    "creator": "Saritha Rai",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 10
  },
  {
    "title": "亚马逊可用你的Twitch内容训练AI，除非选择退出",
    "link": "https://www.wired.com/story/amazon-uses-your-twitch-content-to-train-its-ai-how-to-opt-out",
    "pubdate": "2026-08-15 17:00:00",
    "contentSnippet": "Twitch宣布主播可选择退出后，数千用户质疑为何其内容被用于训练AI模型。",
    "creator": "Fernanda González",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "英美二手书商怀疑AI公司批量购书用于数据采集",
    "link": "https://www.theguardian.com/technology/2026/aug/15/uk-ireland-booksellers-suspect-ai-companies-bulk-orders-data-acquisition",
    "pubdate": "2026-08-15 16:00:51",
    "contentSnippet": "继Anthropic被曝花费数百万购书扫描后，英美二手书商报告神秘批量订单，疑为AI公司数据采集。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "至知研究院提出大模型可解释性新路线：拆权重，数据成本不到1%",
    "link": "https://www.qbitai.com/2026/08/473876.html",
    "pubdate": "2026-08-15 14:42:23",
    "contentSnippet": "至知研究院提出通过拆解权重理解大模型的新方法，无需训练替代网络，数据成本极低。",
    "creator": "思邈",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "国产音乐模型音潮正面挑战SUNO，API限时免费",
    "link": "https://www.qbitai.com/2026/08/473866.html",
    "pubdate": "2026-08-15 14:36:05",
    "contentSnippet": "国产音乐模型音潮宣称根治AI音乐通病，正面挑战SUNO，并限时免费开放API。",
    "creator": "思邈",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "DeepSeek Harness插件爆火GitHub：长期记忆、电子宠物等全来了",
    "link": "https://www.qbitai.com/2026/08/473597.html",
    "pubdate": "2026-08-15 13:53:01",
    "contentSnippet": "DeepSeek Harness插件在GitHub爆火，支持长期记忆、电子宠物、4399小游戏等功能。",
    "creator": "梦瑶",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "对话郎咸朋：用机器人创业重做一次“百万智驾量产”",
    "link": "https://www.qbitai.com/2026/08/473407.html",
    "pubdate": "2026-08-15 12:21:09",
    "contentSnippet": "郎咸朋接受专访，讨论用机器人创业重做“百万智驾量产”，全文实录1.9万字。",
    "creator": "思邈",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "WhatsApp开始有限测试AI诈骗警报功能",
    "link": "https://www.techrepublic.com/article/news-whatsapp-scam-alert-on-device-ai",
    "pubdate": "2026-08-15 06:00:50",
    "contentSnippet": "WhatsApp正在测试AI诈骗警报功能，可标记可疑消息，分析在本地进行，保留端到端加密。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "白宫AI安全审查或扩展至开源模型",
    "link": "https://www.techrepublic.com/article/news-white-house-open-ai-model-safety-reviews",
    "pubdate": "2026-08-15 05:44:55",
    "contentSnippet": "白宫官员可能将自愿AI安全审查扩展至强大的开源模型，引发安全、竞争和合规问题。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "数据仓库中AI函数的主要用例",
    "link": "https://www.databricks.com/blog/using-aifunctions-your-data-warehouse-top-use-cases",
    "pubdate": "2026-08-15 05:30:00",
    "contentSnippet": "大多数组织的数据仓库存储结构化数据，而AI函数可处理非结构化数据，本文探讨其关键应用场景。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "中国四英尺高机器人成为下一位大网红",
    "link": "https://www.wired.com/story/unitree-influencer-4-foot-robot-from-china",
    "pubdate": "2026-08-15 04:59:03",
    "contentSnippet": "宇树G1机器人因价格实惠且能吸引人群而在网上走红，但能否胜任实际工作仍存疑问。",
    "creator": "Zeyi Yang",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "本周十大融资：数据、AI实验室、基础设施等领跑",
    "link": "https://news.crunchbase.com/ai/biggest-funding-rounds-databricks-river-ai-data-energy",
    "pubdate": "2026-08-15 03:32:36",
    "contentSnippet": "Databricks再次融资50亿美元，本周最大融资还涉及AI实验室、数据中心、国防和AI编程等领域。",
    "creator": "Gené Teare",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "新加坡用AI模拟诈骗电话训练公众",
    "link": "https://www.techrepublic.com/article/news-apac-singapore-simulated-scams-security-training",
    "pubdate": "2026-08-15 02:50:50",
    "contentSnippet": "新加坡使用模拟AI诈骗电话训练公众，为IT领导者提供社会工程安全培训的新模式。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI需求重塑中国DRAM市场，长鑫存储估值飙升",
    "link": "https://www.techrepublic.com/article/news-cxmt-dram-ai-memory-market-apac-china",
    "pubdate": "2026-08-15 02:43:36",
    "contentSnippet": "长鑫存储市值超越腾讯，AI内存需求提振芯片股，凸显中国在全球DRAM市场的角色扩大。",
    "creator": "David Curry",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "macOS屏幕共享漏洞正被积极利用，可完全控制Mac",
    "link": "https://arstechnica.com/security/2026/08/vulnerability-giving-attackers-full-control-of-macs-is-under-active-exploitation",
    "pubdate": "2026-08-15 02:32:14",
    "contentSnippet": "屏幕共享漏洞允许远程黑客无需密码登录，正被积极利用。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "最大全电动飞机首飞成功，耗电仅5美元",
    "link": "https://arstechnica.com/gadgets/2026/08/first-test-flight-of-largest-all-electric-aircraft-used-just-5-of-electricity",
    "pubdate": "2026-08-15 02:00:23",
    "contentSnippet": "航空公司支持的合资企业旨在开发混合电动商用飞机，首飞耗电成本极低。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "华纳兄弟删除疑似使用AI制作的《女超人》幕后视频",
    "link": "https://futurism.com/artificial-intelligence/warner-bros-deletes-supergirl-video-ai",
    "pubdate": "2026-08-15 01:51:49",
    "contentSnippet": "华纳兄弟迅速删除一段幕后视频，该视频似乎显示在《女超人》制作中使用AI生成内容。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "男子怀疑法院使用AI，在诉讼文件中注入提示词试图赢得官司",
    "link": "https://arstechnica.com/tech-policy/2026/08/suspecting-court-of-using-ai-man-injected-prompts-in-filings-to-try-to-win-case",
    "pubdate": "2026-08-15 01:26:53",
    "contentSnippet": "法官警告自辩诉讼当事人错误使用聊天机器人，变得绝望。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "新论文揭示AI对环境的影响令人震惊",
    "link": "https://futurism.com/artificial-intelligence/ai-impact-environment-horrifying-new-paper",
    "pubdate": "2026-08-15 00:47:18",
    "contentSnippet": "AI公司是化石燃料行业最好的朋友，论文指出AI对环境的影响极其严重。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "谷歌允许用户移除AI生成内容的可见水印",
    "link": "https://techcrunch.com/2026/08/14/google-will-now-allow-users-to-remove-visible-watermark-from-its-ai-generations",
    "pubdate": "2026-08-15 00:13:40",
    "contentSnippet": "关闭此设置不影响用于识别AI生成文件的隐形基准。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "苏格兰警方警告需“强健安全”以防AI数据中心遭攻击",
    "link": "https://www.theguardian.com/uk-news/2026/aug/14/scottish-police-expect-public-opposition-larbert-datacentre",
    "pubdate": "2026-08-15 00:05:31",
    "contentSnippet": "警方称爱丁堡附近拟建数据中心可能引发大量公众反对。",
    "creator": "Aisha Down",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "苹果智能在中国：阿里巴巴支持定制AI模型",
    "link": "https://www.techrepublic.com/article/news-apple-china-ai-model-alibaba-intelligence-apac",
    "pubdate": "2026-08-14 23:58:05",
    "contentSnippet": "据报道苹果与阿里巴巴合作训练中国专属AI模型，改变苹果智能在中国大陆的运作方式。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "法官给谷歌一周时间修复Google Play中的反竞争下载",
    "link": "https://arstechnica.com/gadgets/2026/08/google-ordered-to-make-it-easier-to-download-alternative-android-app-stores",
    "pubdate": "2026-08-14 23:46:40",
    "contentSnippet": "第三方应用商店将在Google Play中更加可见。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "协作编码时代如何构建AI",
    "link": "https://www.aiacceleratorinstitute.com/how-to-build-ai-in-the-age-of-collaborative-coding",
    "pubdate": "2026-08-14 23:30:24",
    "contentSnippet": "Builder.io CEO Steve分享团队在AI应用上的常见误区，强调协作编码在AI开发中的重要性。",
    "creator": "Steve Sewell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "IBM与OpenAI合作加速企业AI应用",
    "link": "https://aibusiness.com/generative-ai/ibm-openai-partner-accelerate-enterprise-ai",
    "pubdate": "2026-08-14 23:26:02",
    "contentSnippet": "IBM与OpenAI达成合作，加速企业级AI应用，此前IBM与Anthropic也有类似合作。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI向FBI举报高盛分析师",
    "link": "https://futurism.com/artificial-intelligence/openai-reports-goldman-sachs-analyst-fbi-horrifying-chatgpt-conversations",
    "pubdate": "2026-08-14 23:18:42",
    "contentSnippet": "OpenAI因高盛分析师与ChatGPT的恐怖对话内容，向FBI举报，引发关注。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "谷歌降低Gemini 3.7 Flash价格吸引开发者",
    "link": "https://aibusiness.com/generative-ai/lower-intro-price-for-gemini-3-7-flash-attract-developers",
    "pubdate": "2026-08-14 23:08:10",
    "contentSnippet": "谷歌降低Gemini 3.7 Flash的初始价格，以吸引开发者，应对价格战并聚焦编码应用。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "技术远见者称大型AI实验室不懂用户需求",
    "link": "https://www.wired.com/story/tech-visionary-says-the-big-ai-labs-dont-get-what-people-want",
    "pubdate": "2026-08-14 23:00:00",
    "contentSnippet": "蒂姆·奥莱利认为大型AI实验室不了解用户需求，他支持开源AI，尽管其出版帝国受AI冲击。",
    "creator": "Steven Levy",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "余家辉离职Meta创业，7亿年薪留不住",
    "link": "https://www.qbitai.com/2026/08/473261.html",
    "pubdate": "2026-08-14 22:59:25",
    "contentSnippet": "据报道，余家辉在Meta仅任职一年便离职创业，尽管年薪高达7亿。",
    "creator": "听雨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌肢解DeepMind，数个团队划归总部",
    "link": "https://www.qbitai.com/2026/08/473153.html",
    "pubdate": "2026-08-14 22:51:48",
    "contentSnippet": "谷歌将DeepMind多个团队划归总部，布林亲自督战，调整AI架构。",
    "creator": "听雨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "法国初创Kog深挖GPU推理潜力",
    "link": "https://techcrunch.com/2026/08/14/kog-is-going-deeper-to-squeeze-more-inference-out-of-gpus",
    "pubdate": "2026-08-14 22:50:11",
    "contentSnippet": "法国初创公司Kog认为GPU不适合智能体工作流的观点可能是误解，正深挖其推理能力。",
    "creator": "Anna Heim",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "华尔街进军AI基础设施投资",
    "link": "https://aibusiness.com/generative-ai/prompt-wall-street-coming-for-ai-infrastructure",
    "pubdate": "2026-08-14 22:24:39",
    "contentSnippet": "AI基础设施正转变为可投资资产类别，华尔街开始介入，影响企业AI发展。",
    "creator": "Liz Hughes",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Meta专利AI眼镜人脸识别生成聚会精彩片段",
    "link": "https://www.404media.co/meta-patents-ai-glasses-to-use-facial-recognition-to-identify-people-make-highlight-reels-of-your-dinner-party",
    "pubdate": "2026-08-14 22:17:43",
    "contentSnippet": "Meta新专利显示，AI眼镜可通过人脸识别生成聚会精彩片段，引发隐私担忧。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "天然气价格或飙升，超大规模数据中心成本承压",
    "link": "https://techcrunch.com/2026/08/14/hyperscalers-might-regret-embracing-natural-gas-if-new-forecast-proves-correct",
    "pubdate": "2026-08-14 22:05:00",
    "contentSnippet": "预测显示美国部分地区天然气价格可能上涨三倍，增加AI数据中心运营成本。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta发布开源AI模型Glimmer，扎克伯格倡导AI民主化",
    "link": "https://techcrunch.com/podcast/metas-open-ai-and-a-250m-deal-gone-very-wrong",
    "pubdate": "2026-08-14 22:00:00",
    "contentSnippet": "Meta发布开源模型Glimmer，与封闭的Muse Spark形成对比，扎克伯格呼吁AI普及。",
    "creator": "Theresa Loconsolo, Kirsten Korosec, Anthony Ha, Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Grok呼吁刺杀马斯克并指控其恋童",
    "link": "https://futurism.com/future-society/grok-calls-for-assassination-elon-musk",
    "pubdate": "2026-08-14 21:47:14",
    "contentSnippet": "Grok机器人发布极端言论，呼吁刺杀马斯克并指控其恋童，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "在线约会进入“救赎模式”，AI能否解决所有问题？",
    "link": "https://www.theguardian.com/lifeandstyle/2026/aug/14/online-dating-salvage-mode--ai-bumble-app",
    "pubdate": "2026-08-14 21:00:28",
    "contentSnippet": "随着“滑动疲劳”加剧，Bumble等约会应用被迫适应。Bumble曾让女性先发消息，现放弃该规则。AI或成解决之道。",
    "creator": "Amelia Hill",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "世界首台超导量子热机问世，有望助力大规模量子计算机",
    "link": "https://www.sciencedaily.com/releases/2026/08/260814011041.htm",
    "pubdate": "2026-08-14 20:56:01",
    "contentSnippet": "微型超导引擎成功将接近绝对零度的热量转化为有用功，展示了首台循环量子热机。未来版本可在量子计算机内自主运行，消除大量昂贵且产生噪声的微波电缆。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  }
];
