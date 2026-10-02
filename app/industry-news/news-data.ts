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
export const newsDate = "2026-10-02";
export const newsItems: NewsItem[] = [
  {
    "title": "英伟达推出AI代理安全平台，治理责任归属引质疑",
    "link": "https://aibusiness.com/responsible-ai/nvidia-agent-safety-push-raises-questions",
    "pubdate": "2026-10-02 09:38:37",
    "contentSnippet": "英伟达发布AI代理安全平台，增加控制措施，但企业仍需自行定义代理权限和边界，引发治理责任归属的讨论。",
    "creator": "Kinza Yasar",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "微软推出首款流式转录模型，瞄准超逼真语音代理",
    "link": "https://siliconangle.com/2026/10/01/microsoft-targets-ultra-realistic-voice-agents-with-its-first-streaming-transcription-model",
    "pubdate": "2026-10-02 09:31:31",
    "contentSnippet": "微软扩展MAI模型家族，推出首款流式转录模型及两款文本转语音模型，旨在帮助开发者构建能实时对话的语音代理。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "特斯拉推出“紧急驶离”功能，希望用户永远不需要",
    "link": "https://www.businessinsider.com/tesla-emergency-drive-away-update-charging-supercharger-2026-10",
    "pubdate": "2026-10-02 09:01:09",
    "contentSnippet": "特斯拉发布软件更新，新增“紧急驶离”功能，允许车辆在超级充电站充电时切换至驾驶模式。",
    "creator": "Lloyd Lee",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Anthropic拟感恩节前IPO，尽管警告AI存在生存风险",
    "link": "https://siliconangle.com/2026/10/01/report-anthropic-targets-pre-thanksgiving-ipo-launch-despite-warning-of-ais-existential-risks",
    "pubdate": "2026-10-02 07:43:54",
    "contentSnippet": "据报道，Anthropic计划在11月9日启动IPO，感恩节前开始交易，尽管其CEO曾警告AI存在生存风险。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "软银投资者无视信贷风险，关注AI回报",
    "link": "https://www.bloomberg.com/news/articles/2026-10-01/softbank-investors-look-past-credit-risks-to-gauge-ai-upside",
    "pubdate": "2026-10-02 07:30:16",
    "contentSnippet": "软银集团股权投资者日益关注其AI投资回报，推动股价反弹，尽管公司面临借贷成本上升。",
    "creator": "Momoka Yokoyama",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "一个月内两家联邦机构遭黑客攻击，大量敏感数据泄露",
    "link": "https://arstechnica.com/security/2026/10/hacks-of-2-federal-agencies-in-a-month-have-spilled-a-bonanza-of-sensitive-data",
    "pubdate": "2026-10-02 04:28:45",
    "contentSnippet": "美国两家联邦机构在一个月内遭黑客攻击，导致大量敏感数据泄露。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "美国进一步制裁与伊朗有关的俄罗斯A7金融网络",
    "link": "https://www.bloomberg.com/news/articles/2026-10-01/us-further-targets-iran-linked-russian-a7-financial-network",
    "pubdate": "2026-10-02 03:51:19",
    "contentSnippet": "美国对俄罗斯金融服务公司A7实施新一轮制裁，指控其利用空壳公司网络为受制裁企业转移资金，包括伊朗相关业务。",
    "creator": "Yash Roy and Magdalena Del Valle",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "IBM允许其Bob代理开发平台本地部署",
    "link": "https://siliconangle.com/2026/10/01/ibm-allows-on-prem-deployment-of-its-bob-agentic-development-platform",
    "pubdate": "2026-10-02 03:49:51",
    "contentSnippet": "IBM宣布其代理软件开发平台Bob支持自托管部署，可在本地、私有云、主权云和空气隔离环境中使用，满足敏感代码和受监管数据需求。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "NetApp迎来“沉睡巨人”时刻，AI带来新数据买家",
    "link": "https://siliconangle.com/2026/10/01/data-infrastructure-draws-new-buyers-netapp-ai-pitch-netappinsight",
    "pubdate": "2026-10-02 03:43:52",
    "contentSnippet": "AI将数据基础设施推向新买家群体，NetApp历经三年准备，向此前不关注存储的受众重新讲述其故事。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌：星舰需发射1800次才能支撑太空数据中心",
    "link": "https://techcrunch.com/2026/10/01/google-thinks-spacexs-starship-has-to-launch-1600-times-before-space-data-centers-get-off-the-ground",
    "pubdate": "2026-10-02 03:18:03",
    "contentSnippet": "谷歌认为SpaceX星舰需发射1800次，太空数据中心才能落地，并已发射首颗先进芯片入轨。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "加州就OpenAI代理黑客事件发出调查传票",
    "link": "https://www.theguardian.com/us-news/2026/oct/01/california-opens-investigation-openai-hack",
    "pubdate": "2026-10-02 03:01:55",
    "contentSnippet": "加州总检察长向OpenAI发出调查传票，调查其AI模型网络安全漏洞及代理入侵Hugging Face事件。",
    "creator": "Reuters",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "OpenAI解雇三名安全研究员",
    "link": "https://techcrunch.com/2026/10/01/openai-cuts-ties-with-three-safety-researchers-wsj-reports",
    "pubdate": "2026-10-02 02:14:42",
    "contentSnippet": "据《华尔街日报》报道，OpenAI内部调查发现三名安全研究员不当处理敏感公司信息，已终止雇佣关系。",
    "creator": "Aditya Mehta",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Databricks推出Lakebase Postgres基于分支恢复",
    "link": "https://www.databricks.com/blog/lakebase-postgres-branch-based-restores-fast-recovery-scale",
    "pubdate": "2026-10-02 01:53:52",
    "contentSnippet": "Databricks为托管OLTP数据库Lakebase Postgres推出基于分支的恢复功能，实现大规模快速恢复。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "维诺德·科斯拉抨击被投公司引发热议",
    "link": "https://www.businessinsider.com/vinod-khosla-trashing-portfolio-company-factory-cognition-feud-2026-10",
    "pubdate": "2026-10-02 01:50:03",
    "contentSnippet": "维诺德·科斯拉对AI编程初创公司Factory发表尖锐评论，引发创始人和风投圈 backlash，该公司正与Cognition竞争。",
    "creator": "Shubhangi Goel",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "内存高管预计RAM短缺将持续至2028年",
    "link": "https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says",
    "pubdate": "2026-10-02 01:49:56",
    "contentSnippet": "内存行业高管预计RAM短缺将持续到2028年，2027年内存售价将远高于2026年。",
    "creator": "Scharon Harding",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "谷歌因广告技术垄断面临32亿美元索赔",
    "link": "https://www.bloomberg.com/news/articles/2026-10-01/google-to-face-3-2-billion-damage-claims-over-ad-tech-monopoly",
    "pubdate": "2026-10-02 00:49:33",
    "contentSnippet": "纽约联邦法官裁定，美国今日报、每日邮报等大型出版商可向谷歌索赔超32亿美元，因其垄断广告技术市场造成损害。",
    "creator": "Leah Nylen and David Voreacos",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "佛罗里达警方称不知谁拥有11台未经许可的Flock摄像头",
    "link": "https://arstechnica.com/tech-policy/2026/10/florida-cops-say-they-dont-know-who-owns-11-unpermitted-flock-cameras",
    "pubdate": "2026-10-02 00:49:33",
    "contentSnippet": "佛罗里达居民对14台神秘Flock摄像头感到担忧，其中11台没有明确所有者。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "人形机器人热潮忽视工厂现有机器人安全",
    "link": "https://aibusiness.com/automation/humanoid-buildup-overlooks-the-robots-already-running-factories",
    "pubdate": "2026-10-02 00:46:48",
    "contentSnippet": "全球工厂已有数百万机器人在运行，但监管和安全标准可能落后，人形机器人建设热潮忽视了这一点。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Shopify推出Canvas，通过AI聊天建店",
    "link": "https://techcrunch.com/2026/10/01/shopify-debuts-canvas-a-way-to-build-online-stores-by-chatting-with-ai",
    "pubdate": "2026-10-02 00:44:35",
    "contentSnippet": "Shopify推出Canvas建站工具，商家可通过与AI助手Sidekick聊天实时创建和定制在线商店。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "英伟达将AI工厂经济与token和能效挂钩",
    "link": "https://siliconangle.com/2026/10/01/nvidia-links-ai-factory-economics-inference-efficiency-fullyconnected",
    "pubdate": "2026-10-02 00:09:39",
    "contentSnippet": "英伟达指出AI工厂经济日益依赖token和能效，数据中心需作为整体计算系统，注意力从芯片转向基础设施。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AWS推出Strands Decider 2B轻量决策模型",
    "link": "https://siliconangle.com/2026/10/01/aws-debuts-strands-decider-2b-a-first-lightweight-decision-model-for-accelerate-agentic-workflows",
    "pubdate": "2026-10-02 00:00:34",
    "contentSnippet": "AWS旗下Strands Labs发布开源决策模型Strands Decider 2B，旨在加速智能体工作流，面向开源社区开放。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "何恺明团队新作：看猫片就能学会ARC挑战",
    "link": "https://www.qbitai.com/2026/10/499812.html",
    "pubdate": "2026-10-01 23:06:30",
    "contentSnippet": "何恺明团队利用ImageNet训练encoder，使模型通过观看猫片学会ARC挑战，展现新方法。",
    "creator": "鹭羽",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "Olmo-core 3发布：面向大型MoE的开放可扩展训练基础设施",
    "link": "https://huggingface.co/blog/allenai/olmocore3",
    "pubdate": "2026-10-01 23:01:43",
    "contentSnippet": "Hugging Face发布Olmo-core 3，为大型混合专家模型提供开放、可扩展的训练基础设施。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "Anthropic推动澳大利亚内容选择退出模式，ABC警告新闻被蚕食",
    "link": "https://www.theguardian.com/technology/2026/oct/02/anthropic-ai-opt-out-australia-copyright-abc-cannibalisation-of-news",
    "pubdate": "2026-10-01 23:00:53",
    "contentSnippet": "Anthropic建议澳政府采用选择退出模式训练模型，ABC和SBS呼吁严格监管并补偿媒体。",
    "creator": "Josh Butler",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI驱动律所Arceus Legal融资1700万美元，拓展合同业务之外",
    "link": "https://siliconangle.com/2026/10/01/ai-driven-law-firm-arceus-legal-raises-17m-to-move-beyond-contract-work",
    "pubdate": "2026-10-01 23:00:00",
    "contentSnippet": "AI律所Arceus Legal获1700万美元融资，将拓展商业合同之外的业务，律师审核AI工作。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "BBC高管称正在审阅完全由AI生成的《神秘博士》剧集，评价“相当不错”",
    "link": "https://futurism.com/artificial-intelligence/bbc-director-ai-doctor-who",
    "pubdate": "2026-10-01 22:06:44",
    "contentSnippet": "BBC一位高管表示正在审阅完全由AI生成的《神秘博士》剧集，并称其“相当不错”。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Photon为移动应用举行葬礼，现获450万美元助其用代理取代应用",
    "link": "https://techcrunch.com/2026/10/01/photon-held-a-funeral-for-mobile-apps-now-it-has-4-5m-to-help-replace-them-with-agents",
    "pubdate": "2026-10-01 22:00:00",
    "contentSnippet": "该初创公司帮助开发者构建可在iMessage、短信/RCS、电子邮件等消息平台运行的AI代理，押注消费者将越来越多使用代理而非下载应用。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "独家：Homeward融资1.2亿美元，助房主在楼市停滞时更快买卖",
    "link": "https://news.crunchbase.com/real-estate-property-tech/startup-homeward-raises-120m-buy-sell-homes-ai-financing",
    "pubdate": "2026-10-01 21:55:55",
    "contentSnippet": "帮助房主先买后卖或获得现金报价的初创公司Homeward完成1.2亿美元D轮融资，Crunchbase News独家报道。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "苹果智能家居中枢据报10月13日发布，同步推出新款HomePod mini",
    "link": "https://www.techrepublic.com/article/news-apple-smart-home-hub-october-13-homepod-mini",
    "pubdate": "2026-10-01 21:48:22",
    "contentSnippet": "苹果据报计划10月13日发布Siri驱动的智能家居中枢，并同步推出新款HomePod mini和Apple TV。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "新型量子比特在超流量子计算机突破中错误率或降低100倍",
    "link": "https://www.sciencedaily.com/releases/2026/09/260930020309.htm",
    "pubdate": "2026-10-01 21:17:13",
    "contentSnippet": "一种用超流氦制成的量子比特可通过屏蔽常见电磁噪声，将量子计算错误率降低约100倍。若实验证实，该技术或可与现有超导量子比特协同工作，或作为新型量子存储器。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "这种光驱动AI能以近98%准确率识别深度伪造",
    "link": "https://www.sciencedaily.com/releases/2026/09/260929053534.htm",
    "pubdate": "2026-10-01 21:03:50",
    "contentSnippet": "加州大学洛杉矶分校研究人员构建了一种利用光同时分析十多个视频的AI系统，检测深度伪造的准确率接近98%。其速度、低能耗和抗攻击性可能使其成为筛查大量AI生成视频的有力工具。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "ServiceNow推出对话式服务台界面",
    "link": "https://siliconangle.com/2026/10/01/servicenow-launches-conversational-interface-to-its-service-desk",
    "pubdate": "2026-10-01 21:00:45",
    "contentSnippet": "ServiceNow在其服务台中推出Flow功能，通过自然语言界面和自动化处理员工请求，面向希望自动化支持但无需完整ITSM实施的组织。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "泄露视频称警方可绕过iPhone自动重启进入锁定的手机",
    "link": "https://www.404media.co/cops-can-bypass-iphone-automatic-inactivity-reboot-graykey",
    "pubdate": "2026-10-01 21:00:22",
    "contentSnippet": "GrayKey工具所有者Magent Forensics声称能绕过iPhone的自动重启功能，该功能此前阻止警方访问锁定的手机。",
    "creator": "Lorenzo Franceschi-Bicchierai",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Cloudflare推出无服务器数据平台Cloudflare Basin",
    "link": "https://siliconangle.com/2026/10/01/cloudflare-moves-into-analytics-workloads-with-a-serverless-alternative-that-doesnt-require-dedicated-servers-or-data-movement",
    "pubdate": "2026-10-01 21:00:08",
    "contentSnippet": "Cloudflare发布无服务器数据平台Basin，旨在让中小企业和开发团队更便宜、更容易地进行高级数据分析，无需专用数据基础设施。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "听力科技初创公司Legato推出AI听力眼镜",
    "link": "https://techcrunch.com/2026/10/01/hearing-tech-startup-legato-launches-its-ai-hearing-glasses",
    "pubdate": "2026-10-01 21:00:00",
    "contentSnippet": "Legato推出AI听力眼镜，旨在通过解决传统助听器的成本、舒适度和污名问题，使听力护理更易获得。",
    "creator": "Aisha Malik",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "前谷歌和SpaceX产品经理创立的Satlyt融资800万美元，在卫星上运行AI",
    "link": "https://techcrunch.com/2026/10/01/satlyt-founded-by-a-former-google-and-spacex-product-manager-raises-8m-to-run-ai-on-satellites",
    "pubdate": "2026-10-01 20:00:00",
    "contentSnippet": "Satlyt希望成为轨道计算的Android，提供可在多家公司卫星上运行的开源软件，与SpaceX的封闭一体化方法形成对比。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "PS5模拟器在PC端取得重大进展",
    "link": "https://arstechnica.com/gaming/2026/10/ps5-emulation-is-suddenly-making-big-strides-on-pc",
    "pubdate": "2026-10-01 19:30:41",
    "contentSnippet": "《宇宙机器人》和《恶魔之魂》等游戏无需主机即可在PC上流畅运行，PS5模拟器技术突飞猛进。",
    "creator": "Kyle Orland",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "IPO窗口选择性开启，准备程度决定谁能通过",
    "link": "https://news.crunchbase.com/public/ipo-window-opening-readiness-required-williams-datasite",
    "pubdate": "2026-10-01 19:00:42",
    "contentSnippet": "2026年IPO市场选择性重启，青睐那些在低迷期强化财务报告、治理和运营的大型公司。",
    "creator": "Guest Author",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "核能初创企业融资增长，但公开市场转熊",
    "link": "https://news.crunchbase.com/clean-tech-and-energy/nuclear-startup-funding-up-public-markets-bearish",
    "pubdate": "2026-10-01 19:00:20",
    "contentSnippet": "2026年投资者向核裂变和聚变能源技术及基础设施公司投入超60亿美元，创历史新高。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI聊天机器人被提示后移除穆斯林女性头巾",
    "link": "https://www.theguardian.com/technology/2026/oct/01/ai-chatbots-hijabs-muslim-women",
    "pubdate": "2026-10-01 18:00:34",
    "contentSnippet": "《卫报》测试发现，ChatGPT和Grok会按提示编辑图像移除穆斯林女性头巾，Claude拒绝。",
    "creator": "Johana Bhuiyan",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "特斯拉卖出评级下滑，华尔街称“不要做空马斯克”",
    "link": "https://www.bloomberg.com/news/articles/2026-10-01/tesla-sell-ratings-slide-as-analysts-eye-musk-s-ai-ambitions",
    "pubdate": "2026-10-01 18:00:00",
    "contentSnippet": "特斯拉股价2026年暴跌，但华尔街分析师越来越不愿建议投资者卖出。",
    "creator": "Jordan Fitzgerald",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "更小、分布式的电池如何帮助电网",
    "link": "https://www.technologyreview.com/2026/10/01/1145435/distributed-batteries",
    "pubdate": "2026-10-01 18:00:00",
    "contentSnippet": "面对纽约市严格的法规，一些初创公司创造性地在意外地点使用相对较小的电池。",
    "creator": "Casey Crownhart",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI风险被误读：脆弱聊天机器人险些引发中美战争",
    "link": "https://www.theguardian.com/commentisfree/2026/oct/01/forget-superintelligence-error-prone-ai-nearly-sparked-world-war-iii-this-month",
    "pubdate": "2026-10-01 17:00:33",
    "contentSnippet": "《卫报》评论指出，公众过度关注超级智能灭绝风险，却忽视美军依赖脆弱聊天机器人险些引发对华冲突的真实事件。",
    "creator": "Timnit Gebru and Emily M Bender",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "ShamAN-Q：面向亚1比特LLM权重的Shampoo增强NanoQuant",
    "link": "https://arxiv.org/abs/2609.38521",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出ShamAN-Q，用Shampoo曲率度量扩展NanoQuant，实现亚1比特训练后量化，保持部署格式。",
    "creator": "Jonathan Mei, Sang Hyub Kim, Oliver Knitter, Chi Chen, Martin Roetteler",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "学习使能估计：样本选择偏差下的紧致刻画",
    "link": "https://arxiv.org/abs/2609.38608",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "给出样本选择偏差下回归可识别性的完整刻画，推广Heckman模型，覆盖临床、劳动和拍卖场景。",
    "creator": "Vikram Kher, Jane H. Lee, Anay Mehrotra, Manolis Zampetakis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "函数空间回归与逆问题的流退火后验采样",
    "link": "https://arxiv.org/abs/2606.22346",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出FLAPS框架，基于预训练函数空间流匹配先验，统一随机过程回归与PDE逆问题后验采样。",
    "creator": "Yaozhong Shi, Zachary E. Ross, Yisong Yue",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "量子PAC学习样本复杂度优势需状态制备酉的逆访问",
    "link": "https://arxiv.org/abs/2609.38403",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究表明，量子PAC学习仅前向访问无法提升样本复杂度，需同时访问状态制备酉及其逆。",
    "creator": "Natsuto Isogai, Satoshi Yoshida, Mio Murao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "从最小范数插值视角理解Grokking",
    "link": "https://arxiv.org/abs/2609.38453",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "建立统计理论，揭示正则化几何与信号稀疏性如何控制插值附近的泛化，解释延迟泛化现象。",
    "creator": "Gil Kur, Ileana Rugina, Cl\\'ementine Carla Juliette Domin\\'e, Marco Mondelli",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "多跳检索增强生成的保形事实性控制",
    "link": "https://arxiv.org/abs/2609.38222",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究声明级保形事实性控制在多跳RAG中的有效性，在HotpotQA等数据集上，更严格的保形目标持续提高完全支持声明的响应比例。",
    "creator": "Muhammad Aimal Rehman, Chi-Kuang Yeh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "未测量混杂下因果效应估计的近端平衡方法",
    "link": "https://arxiv.org/abs/2609.40051",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出近端平衡方法，将协变量平衡思想扩展到仅通过代理观测的混杂因素，学习低维摘要使处理组可比，解决代理角色指定与逆问题病态性。",
    "creator": "Yonghan Jung",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "任意结构多层模型的摊销贝叶斯推断",
    "link": "https://arxiv.org/abs/2609.40024",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出通用摊销贝叶斯推断方法，通过图扩展与图反转自动推导后验分解和网络架构，保留条件独立假设，在多个案例中匹配金标准采样器。",
    "creator": "Daniel Habermann, Andreas Bulling, Stefan T. Radev, Paul-Christian B\\\"urkner",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "BayesNDE：面向神经密度估计的贝叶斯生成建模",
    "link": "https://arxiv.org/abs/2609.39843",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出BayesNDE神经密度估计器，学习贝叶斯生成模型，无需可逆网络或雅可比行列式计算，在合成与真实数据上优于现有方法。",
    "creator": "Chenglin Li, Qiao Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "从随机探索中学习规划",
    "link": "https://arxiv.org/abs/2609.38383",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "利用随机探索经验支持长程规划，通过条件能量模型学习时间对数密度比，无需策略改进训练，在测试时结合局部动力学模型进行规划。",
    "creator": "Deqian Kong, Guangyan Sun, Sheng Cheng, Sirui Xie, Bo Pang, Jianwen Xie, Tony Geng, Caiwen Ding, Ying Nian Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向计数数据的随机流映射",
    "link": "https://arxiv.org/abs/2609.23290",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出Count Flow Map生成模型，在计数空间直接学习有限时间随机转移，用泊松出生和二项死亡保持非负整数。",
    "creator": "Ganchao Wei",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "连续扩散语言模型的分布匹配蒸馏",
    "link": "https://arxiv.org/abs/2609.40235",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出Simplex-DMD与Reinforce-DMD两种蒸馏方法，减少连续扩散语言模型生成所需网络评估次数。",
    "creator": "Paul Le Van Kiem, Dario Shariatian, Umut Simsekli, Alain Durmus",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "线性预言机在线学习的下界",
    "link": "https://arxiv.org/abs/2609.38375",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明Weibel等人猜想，将在线Frank-Wolfe的T^{3/4}遗憾下界推广至所有确定性预言机学习器。",
    "creator": "Mohit Sinha",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "流形上的时间自适应无限维高斯过程回归",
    "link": "https://arxiv.org/abs/2603.21144",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出基于经验贝叶斯与紧高斯测度的流形函数高斯过程回归新方法，利用拉普拉斯-贝尔特拉米算子特征函数实现降维。",
    "creator": "MD Ruiz-Medina, AE Madrid, A Torres-Signes, JM Angulo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "ChorusTIC：免训练多变量时间序列分类的合唱上下文学习",
    "link": "https://arxiv.org/abs/2608.24033",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出分类原生基础模型ChorusTIC，通过随机子通道槽拼接和双轴编码器实现免训练跨异构通道的上下文分类。",
    "creator": "Juntao Fang, Shifeng Xie, Ruichu Cai, Shengji Zheng, Zijian Li, Keli Zhang, Lujia Pan, Themis Palpanas, Zhifeng Hao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可能非线性因子模型中的因果推断",
    "link": "https://arxiv.org/abs/2008.13651",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "针对含噪声代理的因果推断，提出局部主子空间近似结合K近邻匹配与PCA，构造双稳健估计量并建立大样本性质。",
    "creator": "Yingjie Feng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于学习特征几何的非线性最小二乘泛化",
    "link": "https://arxiv.org/abs/2606.08799",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "通过算法稳定性分析岭正则非线性最小二乘泛化，导出依赖数据有效维度的误差界，反映训练参数处梯度模型几何。",
    "creator": "Ayub Kharel, Ilja Kuzborskij, Patrick Rebeschini, Yasin Abbasi-Yadkori",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "上下文动作集强化学习的更紧遗憾界",
    "link": "https://arxiv.org/abs/2605.15692",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究每轮动作集可变的强化学习，证明MVP算法可扩展并达到极小极大遗憾界，给出随机上下文下的样本复杂度。",
    "creator": "Zijun Chen, Zihan Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "从原语认证残差架构：一个锐利稳定性阈值",
    "link": "https://arxiv.org/abs/2607.14576",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出无需训练即可从残差块原语认证稳定性的方法，给出幂律增长界和梯度界，作为深度与浮点格式的显式函数。",
    "creator": "Hyemin Gu, Michael Tyrrell, Tuhin Sahai, Markos A. Katsoulakis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "选择性分类实现带性能保证的标签噪声转移矩阵估计",
    "link": "https://arxiv.org/abs/2609.39829",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出基于单侧选择性分类的转移矩阵估计方法，绕过类后验估计，提供有限样本性能保证，并给出高效算法。",
    "creator": "Xabier de Juan, Santiago Mazuelas, Yilun Zhu, Clayton Scott",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "局部多项式密度比估计",
    "link": "https://arxiv.org/abs/2609.38412",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出局部多项式密度比估计器，在Hölder类上达到逐点极小极大最优速率，无需f和g的平滑性假设。",
    "creator": "Hajo Holzmann, Alexander Meister",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "通过流匹配实现通用Wasserstein重心",
    "link": "https://arxiv.org/abs/2609.38547",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出BaryFM，用流匹配模型将边缘测度传输到Wasserstein单纯形中任意重心，支持采样。",
    "creator": "Eduardo Fernandes Montesuma",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "大语言模型行为的序贯贝叶斯评估",
    "link": "https://arxiv.org/abs/2511.10661",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出贝叶斯方法量化大语言模型评估中的不确定性，并实现序贯评估以优先选择信息量大的提示，降低成本。",
    "creator": "Saatvik Kher, Shang Wu, Rachel Longjohn, Catarina Bel\\'em, Padhraic Smyth",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "延迟物理系统驱动与动力学的可识别性保证",
    "link": "https://arxiv.org/abs/2609.37944",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明在宽松假设下随机延迟微分方程的结构驱动与漂移可识别，方法在驱动可识别性基准上优于现有方法。",
    "creator": "Julien Boussard, Antoine Debouchage, Th\\'{e}o Saulus",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "持续学习中LoRA的动力学理论",
    "link": "https://arxiv.org/abs/2609.39367",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "在双任务师生模型中推导LoRA的精确动力学方程，揭示低秩更新减少干扰但初始化拖慢适应的机制。",
    "creator": "Th\\'eo Marchetta, Filippo Alessandroni, Alessandro Breccia, Alessandro Ingrosso, Federica Gerace",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "PTED：面向科学推断与生成机器学习的多维双样本检验",
    "link": "https://arxiv.org/abs/2609.38388",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出PTED，基于能量距离的置换检验，适用于高维、特征表示及不平衡样本，实现精确双样本检验。",
    "creator": "Connor Stone",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "理解离策略与在策略蒸馏：不同训练目标的故事",
    "link": "https://arxiv.org/abs/2609.38666",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究多教师序列蒸馏中前向与反向KL散度的聚合目标差异，揭示在策略蒸馏的优势与脆弱性机制。",
    "creator": "Qiwei Di, Xuheng Li, Kaixuan Ji, Chenggong Zhang, Heyang Zhao, Quanquan Gu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "挖掘因果关系：AI辅助搜索工具变量",
    "link": "https://arxiv.org/abs/2409.14202",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究提出利用大语言模型通过叙事和反事实推理搜索新工具变量，加速因果推断中的变量发现过程。",
    "creator": "Sukjin Han",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可迁移生成模型桥接飞秒至纳秒时间步分子动力学",
    "link": "https://arxiv.org/abs/2510.07589",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出深度生成模型框架，将分子动力学采样加速四个数量级，同时保持物理真实性并跨体系泛化。",
    "creator": "Juan Viguera Diez, Mathias Schreiner, Simon Olsson",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "深度ReLU网络学习谱Barron函数的极小极大速率",
    "link": "https://arxiv.org/abs/2609.39020",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "给出深度ReLU网络逼近谱Barron函数的速率，并建立学习该函数类的极小极大速率。",
    "creator": "Songqiu Ma, Yunfei Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "弥合无模拟隐SDE的近似差距",
    "link": "https://arxiv.org/abs/2606.16138",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "指出无模拟变分推断算法因参数化限制存在近似差距，分析其效率与精度权衡，提出改进方向。",
    "creator": "Henry D. Smith, Brian L. Trippe, Scott W. Linderman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向尖峰-平板回归的自适应混合变分推断",
    "link": "https://arxiv.org/abs/2609.38656",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出自适应混合变分推断，直接最小化包含指示子的反向KL，捕捉变量选择的不确定性。",
    "creator": "Hanqing Li, Yaroslav Golub, Xuewen Lu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多最优臂老虎机：极小极大遗憾与非自适应性",
    "link": "https://arxiv.org/abs/2609.38659",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究多最优臂老虎机，给出更优的极小极大遗憾上界与匹配下界，并分析非自适应算法。",
    "creator": "Kaixuan Ji, Qiwei Di, Qingyue Zhao, Heyang Zhao, Quanquan Gu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于预测状态的无限记忆过程生成序列建模",
    "link": "https://arxiv.org/abs/2609.38524",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出基于预测状态的估计方法，在无限记忆过程中实现快速收敛，突破维数灾难。",
    "creator": "Michael Wieck-Sosa, Cosma Rohilla Shalizi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "马尔可夫数据下异步TD学习的精确统计速率",
    "link": "https://arxiv.org/abs/2609.38880",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明表格型TD学习最后迭代的sup范数误差达到ε所需转移次数的精确上界。",
    "creator": "Yang Peng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用任意维度机器学习热启动PDE求解器",
    "link": "https://arxiv.org/abs/2609.38916",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "基于对称性条件，实现低维训练PDE求解器零样本迁移至高维，并用于热启动。",
    "creator": "Wilson G. Gregory, George A. Kevrekidis, Ben Blum-Smith, Soledad Villar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "尖峰模型下高维低样本支持向量机的渐近性质",
    "link": "https://arxiv.org/abs/2609.39173",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究尖峰模型下SVM的渐近性质，证明其误分类率不趋于零，即不具有一致性。",
    "creator": "Yugo Nakayama",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "最速引导：流与扩散模型推理时对齐的实用原则性方法",
    "link": "https://arxiv.org/abs/2609.39091",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "将推理时对齐视为概率测度空间序列优化，提出最速引导框架并验证有效性。",
    "creator": "Shokichi Takakura, Akifumi Wachi, Rei Higuchi, Kohei Miyaguchi, Taiji Suzuki",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "通过行列尺度场介观视角观察Transformer权重",
    "link": "https://arxiv.org/abs/2609.35852",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究Transformer权重的介观尺度，即行和列尺度场，发现不同规模Pythia检查点核心幅度剖面相似，混合桥模型可预测池化形状偏离。",
    "creator": "Tiexin Ding",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "乘积DAG上的信号处理：因果偏移与滤波器",
    "link": "https://arxiv.org/abs/2609.40275",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "针对两个有向无环图乘积索引的信号，提出新的DAG乘积使传递闭包可分离，并展示其使结构方程模型、傅里叶模式、因果偏移和滤波器可分解。",
    "creator": "Sundeep Prabhakar Chepuri, Antonio G. Marques, Maulik Devmurari, Gonzalo Mateos",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Robust LassoNet：通过稳健损失函数增强神经网络特征选择",
    "link": "https://arxiv.org/abs/2609.38263",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文提出Robust LassoNet，引入Huber、Cauchy等稳健损失函数，缓解异常值影响，提升数据污染下的稳定性。",
    "creator": "Daniela De Canditiis, Italia De Feis, Paola Stolfi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "未知相依设计下的Minimax加性回归",
    "link": "https://arxiv.org/abs/2609.39212",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究非乘积随机设计下的加性回归，提出耦合光滑类与Riesz基构造，建立阈值最小二乘估计的匹配Minimax上下界。",
    "creator": "Baptiste Ferrere, Fabrice Gamboa, Jean-Michel Loubes",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "佛之觉醒：种群损失平台期中的子空间学习",
    "link": "https://arxiv.org/abs/2609.39408",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文证明两层ReLU网络在高损失平台期仍能学习更具预测性的表征，教师子空间与AGOP特征空间对齐度提升至少1/2。",
    "creator": "Akash Kumar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "可微期望最大化及其在高斯混合模型最优传输中的应用",
    "link": "https://arxiv.org/abs/2509.02109",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文比较多种EM算法微分策略，实现可微EM并用于高斯混合模型间的Mixture Wasserstein距离计算。",
    "creator": "Samuel Bo\\\"it\\'e, Eloi Tanguy, Julie Delon, Agn\\`es Desolneux, R\\'emi Flamary",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "对抗训练视角下的分布鲁棒线性回归",
    "link": "https://arxiv.org/abs/2609.39449",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究Wasserstein分布鲁棒线性回归，统一平方根Lasso与对抗线性回归，证明非渐近误差界与枢轴性质。",
    "creator": "Elis Stefansson, David V\\\"avinggren, Ant\\^onio H. Ribeiro",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "从数据谱几何到网络权重：Sigmoid MLP的几何感知初始化",
    "link": "https://arxiv.org/abs/2606.28444",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出一种数据依赖的几何感知初始化方法，将类别几何编译进单隐层Sigmoid MLP权重，提升图像分类训练。",
    "creator": "Yi-Shan Chu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "离散平均生成器加速扩散语言模型",
    "link": "https://arxiv.org/abs/2609.38364",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文提出离散平均生成器，将MeanFlow扩展至连续时间马尔可夫链，实现离散扩散语言模型的少步高效生成。",
    "creator": "Yidong Ouyang, Zhengyan Wan, Themis Haris, Tian Tan, Liqian Peng, Henry Li, Ziqian Lin, Jianhang Chen, Maryam Karimzadehgan, Alec Go, George Michailidis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "CAMOS：多模态临床时间序列的耦合振荡状态空间模型",
    "link": "https://arxiv.org/abs/2609.39484",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明线性状态空间层无法表示模态联合缺失交互，提出耦合二阶振荡器状态空间模型CAMOS处理不规则缺失数据。",
    "creator": "Maxx Richard Rahman, Mostafa Hammouda, Wolfgang Maass",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非凸优化中三阶Langevin动力学的全局收敛：模拟退火视角",
    "link": "https://arxiv.org/abs/2609.28611",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究三阶Langevin动力学在模拟退火下的全局收敛，证明对数降温使目标值以屏障控制速率收敛到全局最小。",
    "creator": "Yingli Wang, Kelvin Shuangjian Zhang, Lingjiong Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "受限分类与策略学习",
    "link": "https://arxiv.org/abs/2106.12886",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文探讨在可解释性或公平性约束下，代理损失方法因分类器集受限而失效的问题，提出受限分类与策略学习框架。",
    "creator": "Toru Kitagawa, Shosei Sakaguchi, Aleksey Tetenov",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "BAM！贝叶斯万物模型：生成式计算成像基础模型",
    "link": "https://arxiv.org/abs/2609.39660",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文提出BAM轻量基础模型，将RAM骨干升级为条件流映射，实现少步物理感知后验采样并泛化到未见任务。",
    "creator": "Alessio Spagnoletti, Charlesquin Kemajou Mbakam, Jonathan Spence, Andr\\'es Almansa, Marcelo Pereyra",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向最大熵强化学习的扩散增强马尔可夫决策过程",
    "link": "https://arxiv.org/abs/2512.02019",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "将最大熵强化学习扩展至扩散策略，提出扩散增强MDP，将逆向扩散转移视为独立决策，仅执行最终去噪动作。",
    "creator": "Sebastian Sanokowski, Kaustubh Patil, Majid Khadiv",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "主成分回归优于所有单调谱滤波线性回归",
    "link": "https://arxiv.org/abs/2609.39440",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明最优调参的主成分回归在风险上一致优于所有单调谱滤波，包括梯度下降与岭回归，且差距可达多项式级。",
    "creator": "Juno Kim, Hengyu Fu, Peter Bartlett, Jason D. Lee, Jingfeng Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "原始路由适配器混合：时间序列基础模型路由坍缩的因果干预",
    "link": "https://arxiv.org/abs/2609.39445",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文揭示实例归一化骨干导致时间序列基础模型专家路由熵坍缩，提出原始路由混合适配器进行因果干预修复。",
    "creator": "Hung Phan, Thuy T. Nguyen, Minh Ngoc Dinh, Nhat-Quang Tran",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "辅助监督缓解摊销贝叶斯推断中的表示差距",
    "link": "https://arxiv.org/abs/2609.39525",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出对内部表示施加辅助引导损失的通用方法，加速摊销贝叶斯推断收敛并缩小有限预算下的表示差距。",
    "creator": "Hans Olischl\\\"ager, Svenja Jedhoff, \\v{S}imon Kucharsk\\'y, Aayush Mishra, Stefan T. Radev, Paul B\\\"urkner",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "需要多少后验样本？自适应感知的校准停止",
    "link": "https://arxiv.org/abs/2609.21813",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究分类自适应感知中后验样本投票的停止规则，提出校准固定样本与有限时域序贯规则控制误判概率。",
    "creator": "Vincent Corlay, Andriy Enttsel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "离散得分匹配实现计数数据因果发现",
    "link": "https://arxiv.org/abs/2609.39326",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "将SCORE曲率准则推广至计数数据，提出条件曲率得分与对角外曲率得分，实现有向无环图恢复。",
    "creator": "Euijong Song, Hyewon Park, Gunwoong Park",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于偏差探针的多群体公平性高效主动审计",
    "link": "https://arxiv.org/abs/2609.40034",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "论文提出偏差探针框架，无需重建黑盒模型即可定向自适应查询，揭示数据分布中驱动偏差的区域。",
    "creator": "Ayoub Ajarra, Debabrota Basu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "带间隔对比学习的最优VC维",
    "link": "https://arxiv.org/abs/2609.38834",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "证明带间隔对比学习的最优VC维界，回答Alon等人提出的开放问题，推进泛化理论理解。",
    "creator": "Dionysis Arvanitakis, Vaggos Chatziafratis, Yiyuan Luo, Konstantin Makarychev",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于熵正则化最优传输的部分识别",
    "link": "https://arxiv.org/abs/2609.40156",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "将部分识别问题转化为路径空间最优传输，引入熵正则化并用Sinkhorn迭代高效求解。",
    "creator": "Bruno N. Costa, Florian F. Gunsilius",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "噪声潜结构下的流匹配：超越精确低维支撑",
    "link": "https://arxiv.org/abs/2609.38918",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究噪声潜生成模型下线性流匹配，建立样本复杂度由潜维度而非环境维度主导的非渐近界。",
    "creator": "Lifeng Hao, Shaolin Ji",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "可交换性感知神经后验估计的摊销数据借用",
    "link": "https://arxiv.org/abs/2609.38902",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "研究摊销神经后验估计用于贝叶斯动态借用，预训练网络单次前向即可近似当前研究后验。",
    "creator": "Chin-Hung Huang, JooChul Lee, Huan He",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "匹配问题的统一对偶方法",
    "link": "https://arxiv.org/abs/2609.39339",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "基于对偶理论统一匹配问题，将DC可分解目标转为隐式配准，为二次匹配提供收敛保证。",
    "creator": "Guillaume Houry (HeKA | U1346), Ferdinand Genans (SU, LPSM), Jean Feydy (HeKA | U1346), Fran\\c{c}ois-Xavier Vialard (LIGM)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "图像分割中条件独立假设的松弛",
    "link": "https://arxiv.org/abs/2609.38930",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "用空间局部依赖结构替代条件独立假设，结合互矩近似与不动点优化，提升分割性能。",
    "creator": "Zixun Wang, Ben Dai",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越不确定性集：利用最优传输将共形预测分布扩展到多变量场景",
    "link": "https://arxiv.org/abs/2511.15146",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "通过共形化向量值最优传输分位区域，为多输出回归提供有限样本无分布覆盖保证。",
    "creator": "Eugene Ndiaye",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "廉价绘制、昂贵信任：认证测试时扩展曲线",
    "link": "https://arxiv.org/abs/2609.40190",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "提出认证测试时扩展曲线的方法，降低验证采样答案准确率所需的生成答案数量。",
    "creator": "Sohail (Neel), Sarkar, Shakuntala Baichoo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "将生成学习引入表示学习：自监督迁移学习作为分布匹配",
    "link": "https://arxiv.org/abs/2502.14424",
    "pubdate": "2026-10-01 12:00:00",
    "contentSnippet": "将表示学习表述为分布匹配，学习增强不变编码器，并证明非渐近神经筛保证。",
    "creator": "Yuling Jiao, Wensen Ma, Defeng Sun, Hansheng Wang, Yang Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Metaview融资6000万美元，欲消除招聘琐事并加速招聘",
    "link": "https://siliconangle.com/2026/09/30/metaview-wants-to-eliminate-recruiting-grunt-work-and-speed-up-hiring-after-raising-60m-in-funding",
    "pubdate": "2026-10-01 09:40:24",
    "contentSnippet": "AI招聘软件初创公司Metaview Labs完成6000万美元C轮融资，由Insight Partners领投，旨在消除招聘琐事。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "纽森签署法律保护加州工人免受AI威胁",
    "link": "https://www.theguardian.com/us-news/2026/sep/30/gavin-newsom-california-ai-threat",
    "pubdate": "2026-10-01 08:17:56",
    "contentSnippet": "加州州长纽森签署法律，禁止雇主用AI预测员工情绪、要求大规模裁员书面通知，并禁止AI决定解雇。",
    "creator": "Associated Press",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Valor、Atreides和红杉以7.5亿美元估值投资AI初创公司Flow Engineering",
    "link": "https://techcrunch.com/2026/09/30/valor-atreides-and-sequoia-back-ai-startup-flow-engineering-at-750m-valuation",
    "pubdate": "2026-10-01 05:07:40",
    "contentSnippet": "Flow Engineering将AI代理引入硬件设计，获Valor、Atreides和红杉投资，估值达7.5亿美元。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "知名科技CEO签署白宫自愿AI安全协议",
    "link": "https://siliconangle.com/2026/09/30/prominent-tech-ceos-sign-voluntary-white-house-ai-safety-accord",
    "pubdate": "2026-10-01 04:33:14",
    "contentSnippet": "英伟达、谷歌、Meta、特斯拉和Anthropic的CEO签署白宫支持的《超级智能白宫协议》，承诺自愿AI安全措施。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Gemini 4 Argon：我们下一个前沿智能时代",
    "link": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence",
    "pubdate": "2026-10-01 04:01:45",
    "contentSnippet": "谷歌DeepMind官方发布Gemini 4 Argon，称其开启前沿智能的新时代。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "小罗伯特·肯尼迪认为AI将使我们摆脱医疗事实与专业知识的“暴政”",
    "link": "https://arstechnica.com/health/2026/09/rfk-jr-says-ai-backs-his-anti-vaccine-views-we-checked-it-doesnt",
    "pubdate": "2026-10-01 03:31:25",
    "contentSnippet": "RFK Jr.称AI能帮助人们摆脱医疗事实和专业知识的“暴政”，但批评者指出AI远非完美，且其幻觉可能少于肯尼迪本人。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "争夺你的个人AI代理之战已打响",
    "link": "https://www.wired.com/story/ai-agents-dots-devday-muse-battling-it-out",
    "pubdate": "2026-10-01 03:30:00",
    "contentSnippet": "OpenAI的Dots和Meta的Muse正竞相成为你的首选AI代理，作者试用后认为你很可能也会用上它们。",
    "creator": "Reece Rogers",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Anthropic呼吁监管，AI领袖会见特朗普，开源模型引热议",
    "link": "https://aibusiness.com/generative-ai/anthropic-plugs-regulation-ai-leaders-meet-trump-open-models",
    "pubdate": "2026-10-01 03:13:41",
    "contentSnippet": "AI界热议如何阻止失控的代理；特朗普似微调反AI监管立场；开源AI可能受损，也可能不会。",
    "creator": "Shaun Sutner, Esther Shittu, Kinza Yasar",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "特朗普AI聊天机器人反戈一击",
    "link": "https://www.theguardian.com/us-news/2026/sep/30/trump-america-gov-ai-chatbot",
    "pubdate": "2026-10-01 03:12:28",
    "contentSnippet": "特朗普推出的America.gov AI平台被指回答与其立场相悖，引发对其真实性的讨论。",
    "creator": "Adam Gabbatt",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "OpenAI的Jev克隆可助其阻止蜂群代理",
    "link": "https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents",
    "pubdate": "2026-10-01 03:00:57",
    "contentSnippet": "OpenAI推出Decisions API，类似Jev，强调快速廉价智能的重要性。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI末日论伪科学对大企业有利",
    "link": "https://ainowinstitute.org/news/press/how-the-bad-science-of-ai-doomerism-is-good-for-big-business",
    "pubdate": "2026-10-01 02:36:03",
    "contentSnippet": "AI Now指出AI末日论无科学依据，行业内部监管呼吁实为企业自定标准。",
    "creator": "AI Now Institute",
    "source": "AI Now Institute",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AWS在PostgreSQL中嵌入DuckDB加速查询",
    "link": "https://siliconangle.com/2026/09/30/aws-embeds-duckdb-in-its-postgresql-dbms-to-speed-queries-of-live-and-historical-data",
    "pubdate": "2026-10-01 02:30:48",
    "contentSnippet": "AWS在Aurora PostgreSQL中嵌入DuckDB，支持直接查询Iceberg数据湖，无需ETL。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "AI语音初创ElevenLabs估值翻倍至220亿美元",
    "link": "https://techcrunch.com/2026/09/30/ai-voice-startup-elevenlabs-doubles-valuation-to-22b",
    "pubdate": "2026-10-01 02:23:57",
    "contentSnippet": "ElevenLabs完成3亿美元员工股权出售，由Wellington和T. Rowe Price领投。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "律师在谋杀上诉中引用ChatGPT虚构证人",
    "link": "https://www.404media.co/chatgpt-fake-witnesses-testimony-stephen-aarons-new-mexico",
    "pubdate": "2026-10-01 02:15:31",
    "contentSnippet": "律师使用ChatGPT生成虚假证词和证人，被法官质问是否关注新闻。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "参议院民主党人阻止数据中心能源法案，称其“无力”且“未达目标”",
    "link": "https://www.theguardian.com/us-news/2026/sep/30/senate-datacenter-energy-bill",
    "pubdate": "2026-10-01 01:48:30",
    "contentSnippet": "美参议院民主党以57-43票阻止数据中心能源法案，称其无力解决电费问题。",
    "creator": "Chris Stein in Washington",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Reddit因AI机器人终止RSS订阅和公共API访问",
    "link": "https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots",
    "pubdate": "2026-10-01 01:45:00",
    "contentSnippet": "Reddit宣布终止RSS订阅和公共API访问，以应对AI机器人抓取内容。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "消费级AI的丑陋经济学",
    "link": "https://techcrunch.com/2026/09/30/the-ugly-economics-of-consumer-ai",
    "pubdate": "2026-10-01 01:24:45",
    "contentSnippet": "前沿实验室对消费级AI态度谨慎，原因并非技术不足，而是经济回报不佳。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI现为“超级智能”，但联邦监管仍缺失",
    "link": "https://aibusiness.com/generative-ai/ai-now-super-intelligence-federal-oversight-is-still-missing",
    "pubdate": "2026-10-01 01:14:47",
    "contentSnippet": "特朗普称AI为“超级智能”，并称美国不会放缓AI发展，但联邦监管仍缺失。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI行业应对失控代理，OpenAI的回应",
    "link": "https://aibusiness.com/generative-ai/ai-industry-copes-out-of-control-agents-here-s-openai-s-response",
    "pubdate": "2026-10-01 01:08:35",
    "contentSnippet": "OpenAI因测试暴露新安全问题，推迟发布GPT-6.1 Astra，凸显AI模型需持续评估和企业运行时控制。",
    "creator": "Kinza Yasar",
    "source": "AI Business",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Gong为其收入智能平台新增自动丰富与事件驱动智能体",
    "link": "https://siliconangle.com/2026/09/30/gong-adds-auto-enrichment-and-event-driven-agents-to-its-revenue-intelligence-platform",
    "pubdate": "2026-10-01 00:44:04",
    "contentSnippet": "Gong在大会上推出Mission Callisto，为收入智能平台增加第三方数据、AI分析和自动执行销售流程的智能体。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Crunchbase科技行业裁员追踪器",
    "link": "https://news.crunchbase.com/startups/tech-layoffs",
    "pubdate": "2026-10-01 00:27:30",
    "contentSnippet": "Crunchbase追踪显示，2025年美国科技公司裁员超12.7万人，且裁员潮延续至2026年。",
    "creator": "Crunchbase News",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta否认Muse未经许可读取用户私信",
    "link": "https://techcrunch.com/2026/09/30/meta-disputes-claim-that-muse-read-a-users-private-messages-without-permission",
    "pubdate": "2026-10-01 00:24:23",
    "contentSnippet": "Meta称其Muse AI智能体未经明确许可无法访问用户消息，反驳记者关于该智能体在设置关闭时读取私信的指控。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "预测电网空间天气风险",
    "link": "https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids",
    "pubdate": "2026-10-01 00:00:00",
    "contentSnippet": "微软研究团队开发机器学习系统，可在空间风暴到达前30-60分钟预测电网受损位置。",
    "creator": "Rohan Kannan",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "2026年五款最佳AI浏览器对比：Chrome、Comet、Edge、Brave和Dia",
    "link": "https://www.techrepublic.com/article/news-best-ai-browsers-2026",
    "pubdate": "2026-09-30 23:49:01",
    "contentSnippet": "对比2026年五款最佳AI浏览器，包括集成Gemini的Chrome、Perplexity Comet、微软Edge、Brave Leo和Dia。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "英国央行行长呼吁对AI行业拥有干预权",
    "link": "https://www.theguardian.com/technology/2026/sep/30/intervene-ai-growing-threat-bank-of-england-boss",
    "pubdate": "2026-09-30 23:22:25",
    "contentSnippet": "英国央行行长贝利表示，前沿AI模型风险日益显著，公众难以有效监督，呼吁政府拥有干预权。",
    "creator": "Kalyeena Makortoff Banking correspondent",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "谷歌DeepMind推出SynthID Bio",
    "link": "https://deepmind.google/blog/introducing-synthid-bio",
    "pubdate": "2026-09-30 23:03:07",
    "contentSnippet": "谷歌DeepMind发布SynthID Bio，为AI生成的蛋白质添加水印，同时保持生物功能。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "技术论文",
    "relevance": 9
  }
];
