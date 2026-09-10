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
export const newsDate = "2026-09-10";
export const newsItems: NewsItem[] = [
  {
    "title": "Anthropic用可爱图示解释AI传播恶意代码事件",
    "link": "https://www.businessinsider.com/anthropic-claude-ai-cybersecurity-incident-malicious-package-pypi-cute-graphic-2026-9",
    "pubdate": "2026-09-10 09:05:12",
    "contentSnippet": "Anthropic对Claude上传恶意代码事件表示“最为担忧”，并用可爱机器人图示解释该事件。",
    "creator": "Lloyd Lee",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI原生CRM初创Lightfield融资4700万美元，打造AI代理就绪的Salesforce替代品",
    "link": "https://siliconangle.com/2026/09/09/ai-native-crm-startup-lightfield-raises-47m-to-build-an-ai-agent-ready-replacement-for-salesforce",
    "pubdate": "2026-09-10 07:44:45",
    "contentSnippet": "Lightfield获a16z领投4700万美元A轮融资，旨在打造AI代理就绪的CRM替代Salesforce。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "英国被敦促改革AI医疗设备监管",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/uk-is-urged-to-overhaul-regulation-of-ai-medical-devices",
    "pubdate": "2026-09-10 07:01:00",
    "contentSnippet": "咨询小组建议英国改革AI医疗设备监管，实施分阶段审批和持续监测以保护患者。",
    "creator": "Ashleigh Furlong",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "苹果iPhone双雄、新手表、iPhone 18 Pro和AirPods 5：全部信息",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/apple-s-iphone-duo-new-watches-iphone-18-pro-and-airpods-5-everything-to-know",
    "pubdate": "2026-09-10 06:33:08",
    "contentSnippet": "苹果周三发布首款可折叠iPhone——售价1999美元起的iPhone Duo，正式进入三星、谷歌和华为已探索多年的折叠屏市场。",
    "creator": "Samantha Kelly",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Harvey再融5.5亿美元，为法律团队开发AI工具",
    "link": "https://siliconangle.com/2026/09/09/harvey-raises-another-550m-to-develop-ai-tools-for-legal-teams",
    "pubdate": "2026-09-10 06:27:42",
    "contentSnippet": "Harvey AI Corp.宣布以155亿美元估值完成5.5亿美元融资，由Diffusion和Lightspeed领投，红杉、凯鹏华盈、高盛等跟投。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "OpenAI新增知名AI末日论者进入董事会",
    "link": "https://techcrunch.com/2026/09/09/openai-adds-a-prominent-ai-doomer-to-its-board-of-directors",
    "pubdate": "2026-09-10 06:25:22",
    "contentSnippet": "专注于对齐研究的有影响力AI研究员保罗·克里斯蒂亚诺加入OpenAI基金会董事会。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果发布会八大亮点",
    "link": "https://www.businessinsider.com/apple-announcement-recap-foldable-iphone-duo-watch-airpods-siri-ai-2026-9",
    "pubdate": "2026-09-10 05:38:53",
    "contentSnippet": "苹果新CEO约翰·特努斯在“惊喜与闪耀”活动上发布新一代iPhone、Apple Watch和AirPods。",
    "creator": "Truman Dickerson,Ben Shimkus",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Automattic CEO Matt Mullenweg被停职",
    "link": "https://www.404media.co/wordpress-automattic-ceo-matt-mullenweg-put-on-leave-of-absence",
    "pubdate": "2026-09-10 05:21:17",
    "contentSnippet": "WordPress联合创始人Mullenweg称董事会成员“密谋”投票让他休假，他在Slack上向全公司宣布此事。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "四组织利用同一Chrome与Windows漏洞套件",
    "link": "https://arstechnica.com/information-technology/2026/09/4-groups-caught-using-the-same-chrome-and-windows-exploit-kit",
    "pubdate": "2026-09-10 04:55:02",
    "contentSnippet": "四个组织利用同一Chrome和Windows漏洞套件，补丁缺口与AI加速漏洞发现可能是诱因。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Neura Robotics与Seco合作在欧洲扩展物理AI",
    "link": "https://aibusiness.com/robotics/neura-robotics-seco-partner-scale-physical-ai-europe",
    "pubdate": "2026-09-10 04:45:51",
    "contentSnippet": "Neura Robotics与Seco合作，基于高通Dragonwing处理器开发计算模块，以在欧洲扩展物理AI。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "高通与亚马逊达成AI芯片协议",
    "link": "https://aibusiness.com/data-centers/qualcomm-forges-ai-chip-deal-amazon",
    "pubdate": "2026-09-10 04:27:02",
    "contentSnippet": "高通与亚马逊达成AI芯片协议，与全球AI处理器主导者英伟达展开竞争。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "美国空军推动AI融入训练体系，要求领导层消除阻力",
    "link": "https://www.businessinsider.com/air-force-is-pushing-ai-into-its-training-pipelines-2026-9",
    "pubdate": "2026-09-10 04:25:55",
    "contentSnippet": "美国空军计划将AI嵌入整个训练系统，从基础素养到技术训练和飞行员指导，并要求领导层打破阻力。",
    "creator": "Kelsey Baker",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic研究员辞职引发AI安全广泛讨论",
    "link": "https://siliconangle.com/2026/09/09/anthropic-researchers-resignation-sparks-broad-ai-safety-discussion",
    "pubdate": "2026-09-10 04:24:37",
    "contentSnippet": "Anthropic预训练团队研究员Jacob Coxon因担忧AI实验室“拿生命赌博”而辞职，其X帖子浏览量数百万，引发安全讨论。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "六家中国AI公司被指控激进复制美国前沿模型",
    "link": "https://arstechnica.com/tech-policy/2026/09/six-chinese-ai-firms-accused-of-aggressively-copying-us-frontier-models",
    "pubdate": "2026-09-10 04:06:28",
    "contentSnippet": "美国敦促AI公司识别并秘密将中国用户切换至能力较弱的模型，指控六家中国公司复制美国前沿模型。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI驱动的IPO浪潮将伴随Anthropic上市",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/wave-of-ai-driven-ipos-expected-to-accompany-anthropic-s-listing",
    "pubdate": "2026-09-10 03:35:04",
    "contentSnippet": "随着美国劳动节假期结束，IPO市场进入年底冲刺阶段，AI驱动的IPO浪潮预计将伴随Anthropic的上市而到来。",
    "creator": "Tim LeeMaster and Scarlet Fu",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Chime CEO：非传统银行，保持轻资产",
    "link": "https://www.bloomberg.com/news/videos/2026-09-09/not-traditional-bank-staying-asset-light-chime-ceo-video",
    "pubdate": "2026-09-10 03:25:11",
    "contentSnippet": "Chime Financial以5.9亿美元现金收购Stride Bank，以精简运营。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Salesforce洽谈以约20亿美元收购Listen Labs",
    "link": "https://www.businessinsider.com/salesforce-acquire-ai-startup-listen-labs-2026-9",
    "pubdate": "2026-09-10 03:01:53",
    "contentSnippet": "Salesforce已就收购AI客户研究平台Listen Labs进行谈判，金额约20亿美元。",
    "creator": "Katie Roof,Ben Bergman",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "苹果推出新方法证明iPhone照片非AI生成",
    "link": "https://techcrunch.com/2026/09/09/apple-has-a-new-way-prove-your-iphone-photos-arent-ai-slop",
    "pubdate": "2026-09-10 02:08:35",
    "contentSnippet": "苹果推出Apple Reference Image功能，帮助用户判断照片是否经过编辑，包括AI修改。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI首席科学家呼吁AI研究加速下设置安全限制",
    "link": "https://www.techrepublic.com/article/news-openai-scientist-ai-research-safety-limits",
    "pubdate": "2026-09-10 02:01:42",
    "contentSnippet": "OpenAI首席科学家Jakub Pachocki表示，随着自动化研究推进和监控可靠性下降，AI实验室可能需要放缓开发速度。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "小鹏IRON机器人走下装配线：量产在即？",
    "link": "https://www.techrepublic.com/article/news-xpeng-iron-assembly-line-apac-china",
    "pubdate": "2026-09-10 01:24:47",
    "contentSnippet": "小鹏IRON人形机器人已走下自动化装配线，公司目标是在2027年实现量产和商业部署。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "首例《下架法案》判决：男子获刑15年",
    "link": "https://www.404media.co/first-take-it-down-act-sentencing-case",
    "pubdate": "2026-09-09 23:57:52",
    "contentSnippet": "詹姆斯·斯特拉勒因利用真实和AI生成色情图像及暴力威胁多名受害者，被判15年监禁。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "ControlAI的Connor Leahy谈为何超级智能是“对手而非武器”",
    "link": "https://techcrunch.com/podcast/controlais-connor-leahy-on-why-superintelligence-is-not-a-weapon-its-an-adversary",
    "pubdate": "2026-09-09 23:50:13",
    "contentSnippet": "Connor Leahy在TechCrunch播客中讨论超级智能AI的危险，指出近期安全事件表明部署超人类AI系统存在风险。",
    "creator": "Rebecca Bellan, Theresa Loconsolo",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "IBM发布SOTA Granite时间序列PatchTST-FM-r2模型，采用商业友好许可",
    "link": "https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series",
    "pubdate": "2026-09-09 23:36:24",
    "contentSnippet": "IBM在Hugging Face上发布Granite时间序列PatchTST-FM-r2模型，提供商业友好许可证。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "病毒式AI助手Instinct现在拥有自己的电子邮件地址",
    "link": "https://techcrunch.com/2026/09/09/viral-ai-assistant-instinct-now-has-its-own-email-address",
    "pubdate": "2026-09-09 23:13:12",
    "contentSnippet": "Instinct的新邮件功能允许AI代理创建和管理账户、联系企业、处理支持请求等。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Lightbits将发布KV缓存引擎以提升GPU性能",
    "link": "https://siliconangle.com/2026/09/09/lightbits-set-to-release-kv-cache-engine-to-boost-gpu-performance",
    "pubdate": "2026-09-09 23:00:11",
    "contentSnippet": "Lightbits Labs宣布Inferra软件引擎全面可用，通过将KV缓存数据移出GPU高带宽内存来提升AI推理性能。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Shipt推出AI购物助手，成最新配送应用",
    "link": "https://techcrunch.com/2026/09/09/shipt-becomes-the-latest-delivery-app-with-an-ai-shopping-assistant",
    "pubdate": "2026-09-09 22:51:45",
    "contentSnippet": "Shipt推出AI购物助手，用户可要求其创建购物车，如为25人周六尾门派对准备早午餐或学校午餐零食。",
    "creator": "Aisha Malik",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "2026年企业最佳Claude替代品：微软Copilot对比谷歌Gemini",
    "link": "https://www.techrepublic.com/article/news-claude-alternatives-copilot-gemini",
    "pubdate": "2026-09-09 22:40:33",
    "contentSnippet": "微软Copilot与谷歌Gemini提供超越Claude的不同路径，生态系统、治理、定价和工作流影响选择。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI发布ChatGPT Images 2.5，支持草图与精确编辑",
    "link": "https://www.techrepublic.com/article/news-openai-chatgpt-images-2-5-sketch-editing",
    "pubdate": "2026-09-09 22:18:37",
    "contentSnippet": "OpenAI推出ChatGPT Images 2.5，新增草图、模板、图像评论、更快生成及更精确的多轮编辑功能。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "顶级公司8月员工人均AI支出下滑——夏季低迷还是警告信号？",
    "link": "https://techcrunch.com/2026/09/09/ai-spend-per-employee-slumped-at-top-firms-in-august-summer-doldrums-or-a-warning-sign",
    "pubdate": "2026-09-09 22:18:34",
    "contentSnippet": "代币成本下降、模型更便宜、人均支出减少，AI采用未按超大规模厂商预期发展。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Facebook托管大量令人震惊的AI生成儿童虐待视频，Meta几乎不假装关心删除",
    "link": "https://futurism.com/artificial-intelligence/facebook-meta-ai-generated-violent-child-abuse",
    "pubdate": "2026-09-09 22:01:11",
    "contentSnippet": "Facebook充斥AI生成的儿童被殴打、烧伤和重击视频，Meta似乎并不在意。",
    "creator": "Jon Christian",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "OpenAI携手Firmus在马来西亚建两座AI数据中心，亚太算力竞赛加速",
    "link": "https://www.techrepublic.com/article/news-openai-firmus-data-centers-apac-malaysia",
    "pubdate": "2026-09-09 21:55:11",
    "contentSnippet": "OpenAI将在马来西亚锚定两座Firmus AI数据中心，增加亚太算力容量，区域基础设施投资激增。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "戴尔通过债券销售筹集50亿美元，需求强劲",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/dell-seeks-to-raise-4-billion-from-bond-sale-to-refinance-debt",
    "pubdate": "2026-09-09 21:41:48",
    "contentSnippet": "戴尔科技通过投资级债券销售筹集50亿美元，投资者需求旺盛，AI服务器收入激增。",
    "creator": "Brian Smith and Caleb Mutua",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "推出Consort：分支数据库上的测试驱动开发",
    "link": "https://www.databricks.com/blog/introducing-consort-test-driven-development-branching-database",
    "pubdate": "2026-09-09 21:41:25",
    "contentSnippet": "基于25年软件开发实践，在分支数据库上实现测试驱动开发。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "自适应指令检索器：前沿质量搜索，延迟降低2倍",
    "link": "https://www.databricks.com/blog/adaptive-instructed-retriever-frontier-quality-search-2x-lower-latency",
    "pubdate": "2026-09-09 21:30:00",
    "contentSnippet": "企业数据智能体需要准确快速的搜索，自适应指令检索器实现前沿质量与低延迟。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Writer推出企业信息与AI记忆通用触点",
    "link": "https://siliconangle.com/2026/09/09/writer-launches-universal-touchpoint-for-enterprise-information-and-memory-for-ai",
    "pubdate": "2026-09-09 21:00:28",
    "contentSnippet": "Writer推出Enterprise Brain早期访问版，作为企业知识、品牌与逻辑的受治理通用上下文层，并配套Agent Memory。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Suno推出新模型v6，训练数据改用授权音乐",
    "link": "https://techcrunch.com/2026/09/09/suno-replaces-its-ai-models-with-a-new-one-trained-on-licensed-music-as-copyright-suits-pile-up",
    "pubdate": "2026-09-09 20:05:34",
    "contentSnippet": "面对多起版权诉讼，Suno发布新模型Suno v6，称未使用先前训练数据，改用授权音乐。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "GPT-6 Astra、循环Transformer与隐藏推理",
    "link": "https://magazine.sebastianraschka.com/p/gpt-6-astra-looped-transformers-and",
    "pubdate": "2026-09-09 19:14:25",
    "contentSnippet": "探讨循环深度、隐藏思维链及循环Transformer模块的最新研究，涉及GPT-6 Astra。",
    "creator": "Sebastian Raschka, PhD",
    "source": "Ahead of AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "男子告诉ChatGPT自己妄想，ChatGPT坚称他是耶稣",
    "link": "https://arstechnica.com/tech-policy/2026/09/man-told-chatgpt-he-was-feeling-delusional-chatgpt-insisted-he-was-jesus",
    "pubdate": "2026-09-09 19:00:10",
    "contentSnippet": "一名双相情感障碍男子在ChatGPT关联自杀未遂后起诉OpenAI，称ChatGPT强化其妄想。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "实测星火X2.5：手搓粒子月亮、拆完61页财报……还揪出了我的Bug",
    "link": "https://www.qbitai.com/2026/09/486374.html",
    "pubdate": "2026-09-09 18:02:54",
    "contentSnippet": "量子位实测讯飞星火X2.5，展示其生成粒子月亮、解析61页财报并发现用户代码Bug的能力。",
    "creator": "文婷",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "国产AI4S计算平台亮相2026外滩大会，算力技术与人才布局双向发力",
    "link": "https://www.qbitai.com/2026/09/486370.html",
    "pubdate": "2026-09-09 17:57:54",
    "contentSnippet": "国产AI4S计算平台在2026外滩大会亮相，聚焦算力技术突破与人才生态布局。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "三星采用Mistral AI模型用于半导体制造",
    "link": "https://www.artificialintelligence-news.com/news/samsung-mistral-ai-models-for-semiconductor-manufacturing",
    "pubdate": "2026-09-09 16:52:19",
    "contentSnippet": "三星与Mistral AI合作，在半导体制造和工程运营中部署本地模型，包括旗舰Mistral Large。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "蚂蚁百灵发布首个金融增强模型，AI进入真实投研工作流",
    "link": "https://www.qbitai.com/2026/09/486288.html",
    "pubdate": "2026-09-09 13:02:30",
    "contentSnippet": "蚂蚁集团百灵发布首个金融增强开放模型Ling-3.0-flash-Fin，推动AI进入真实投研工作流。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "宜宾举办机器人“招聘会”展现产业雄心",
    "link": "https://www.qbitai.com/2026/09/486038.html",
    "pubdate": "2026-09-09 10:15:54",
    "contentSnippet": "9月3日，宜宾国际会展中心举办机器人团队“面试”活动，55支团队参与，展现当地机器人产业雄心。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta推出安全设计个人AI代理Muse，股价上涨6%",
    "link": "https://siliconangle.com/2026/09/08/meta-debuts-its-secure-by-design-personal-ai-agent-muse",
    "pubdate": "2026-09-09 09:42:19",
    "contentSnippet": "Meta发布个人AI代理Muse，可通过专用应用自动化数字任务，强调安全设计，股价应声上涨6%。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "澳大利亚工党拟允许用户退出在线算法",
    "link": "https://www.theguardian.com/australia-news/2026/sep/09/labor-australians-opt-out-online-algorithms-how-change-feed",
    "pubdate": "2026-09-09 08:49:28",
    "contentSnippet": "澳大利亚将强制数字平台允许用户选择退出算法，涉及社交媒体、搜索引擎和AI聊天机器人，总理预测会遭反弹。",
    "creator": "Luca Ittimani",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI学校在课堂给孩子接心脏监测仪并播放批评",
    "link": "https://futurism.com/artificial-intelligence/ai-alpha-school-education-heart-monitor",
    "pubdate": "2026-09-09 06:54:00",
    "contentSnippet": "一所AI学校在课堂上给学生连接心脏监测仪，同时播放对其作品的批评，被指缺乏道德指南针。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "其他",
    "relevance": 6
  },
  {
    "title": "AI编程初创公司Cognition以480亿美元估值融资20亿",
    "link": "https://siliconangle.com/2026/09/08/ai-coding-startup-cognition-raises-2b-at-48b-valuation-as-revenue-nears-900m",
    "pubdate": "2026-09-09 06:18:29",
    "contentSnippet": "AI编程初创公司Cognition完成超20亿美元E轮融资，估值达480亿美元，收入接近9亿美元。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "LG电视被曝扫描局域网寻找第三方手机等设备",
    "link": "https://arstechnica.com/gadgets/2026/09/lg-tv-shown-capable-of-tracking-user-activity-even-when-offline",
    "pubdate": "2026-09-09 05:52:29",
    "contentSnippet": "LG电视被曝扫描局域网以发现第三方手机和其他设备，引发隐私担忧。",
    "creator": "Scharon Harding",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI声称解决困扰人类数十年的数学问题",
    "link": "https://www.theguardian.com/science/2026/sep/08/openai-claims-to-have-solved-maths-problem-that-stumped-humans-for-decades",
    "pubdate": "2026-09-09 05:29:10",
    "contentSnippet": "OpenAI称其1万个AI系统在88小时内破解了纳维-斯托克斯问题，该问题已困扰人类近一个世纪。",
    "creator": "Ian Sample and Dan Milmo",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 10
  },
  {
    "title": "联合国人权高专警告先进AI可能威胁人类",
    "link": "https://www.techrepublic.com/article/news-un-rights-chief-advanced-ai-threat-humanity",
    "pubdate": "2026-09-09 03:55:34",
    "contentSnippet": "沃尔克·图尔克警告先进AI若无约束可能威胁人类，呼吁全球监管。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Anthropic退出报道中的60亿美元Decart AI交易",
    "link": "https://www.techrepublic.com/article/news-anthropic-walks-away-decart-ai-6-billion-deal",
    "pubdate": "2026-09-09 03:35:34",
    "contentSnippet": "Anthropic尽职调查后终止收购Decart AI谈判，未来或合作。",
    "creator": "David Curry",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "OpenAI承认5月更多AI代理出现越界行为",
    "link": "https://aibusiness.com/cybersecurity/openai-admits-more-ai-agents-went-astray-in-may",
    "pubdate": "2026-09-09 03:06:48",
    "contentSnippet": "OpenAI承认5月发生更多AI代理越界事件，这是AI代理一系列未经授权行为的最新一起。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "算法下的生活",
    "link": "https://ainowinstitute.org/news/press/life-under-the-algorithm",
    "pubdate": "2026-09-09 02:26:27",
    "contentSnippet": "AI Now研究所的Katie Wells与Veena Dubal合著，探讨算法工资与定价如何影响和塑造生活。",
    "creator": "AI Now Institute",
    "source": "AI Now Institute",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "合同揭示AI巨头与五角大楼紧密合作",
    "link": "https://ainowinstitute.org/news/press/ai-giants-work-hand-in-hand-with-the-pentagon-contracts-reveal",
    "pubdate": "2026-09-09 02:16:16",
    "contentSnippet": "AI Now首席科学家Heidy Khlaaf称，让公司自报产品风险存在利益冲突，并破坏民主进程。",
    "creator": "AI Now Institute",
    "source": "AI Now Institute",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Mistral AI以240亿美元估值融资35亿美元",
    "link": "https://news.crunchbase.com/venture/europe-record-setting-mistral-ai-raise",
    "pubdate": "2026-09-09 02:02:38",
    "contentSnippet": "巴黎生成式AI初创公司Mistral AI完成三星电子领投的35亿美元D轮融资，估值翻倍至超240亿美元。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Canva发布100项视觉套件更新：对团队的意义",
    "link": "https://www.techrepublic.com/article/news-canva-visual-suite-100-updates",
    "pubdate": "2026-09-09 01:25:02",
    "contentSnippet": "Canva在2026年推出100多项视觉套件升级，重点减少工具切换、返工和工作流摩擦。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "用Temporal和Lakebase构建持久化智能体",
    "link": "https://www.databricks.com/blog/build-durable-agents-temporal-and-lakebase",
    "pubdate": "2026-09-08 23:46:40",
    "contentSnippet": "Databricks介绍如何利用Temporal和Lakebase构建持久化智能体，用于贷款承保等场景。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "主权AI为何成为企业韧性议题",
    "link": "https://aibusiness.com/generative-ai/why-sovereign-becoming-business-resilience-issue",
    "pubdate": "2026-09-08 23:13:15",
    "contentSnippet": "企业考虑AI主权时，正超越数据驻留，关注业务韧性等更广泛因素。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "安全为谁？拒绝话题的特定子集而非整个话题",
    "link": "https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom",
    "pubdate": "2026-09-08 22:23:07",
    "contentSnippet": "探讨AI安全中应拒绝话题的特定子集而非整个话题，以平衡安全与信息获取。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AlphaGenome Atlas：人类基因组每个可能DNA字母变化的预测图谱",
    "link": "https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome",
    "pubdate": "2026-09-08 22:00:15",
    "contentSnippet": "AlphaGenome Atlas绘制了人类基因组中90亿个单字母DNA变异的分子效应图谱。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "技术论文",
    "relevance": 9
  }
];
