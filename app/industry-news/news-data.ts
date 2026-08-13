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
export const newsDate = "2026-08-13";
export const newsItems: NewsItem[] = [
  {
    "title": "谷歌首席科学家杰夫·迪恩离职，新AI初创公司估值或达100亿美元",
    "link": "https://www.businessinsider.com/former-google-exec-jeff-dean-valuation-for-new-ai-startup-2026-8",
    "pubdate": "2026-08-13 08:31:07",
    "contentSnippet": "谷歌传奇工程师杰夫·迪恩正在洽谈为其新AI初创公司Discovery Loop进行10亿美元融资，估值达100亿美元。",
    "creator": "Katie Roof,Ben Bergman",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "谷歌错误显示Sam Altman已死，或源于维基百科破坏",
    "link": "https://www.businessinsider.com/google-search-said-sam-altman-died-wikipedia-vandalism-2026-8",
    "pubdate": "2026-08-13 06:28:01",
    "contentSnippet": "谷歌搜索错误显示OpenAI CEO Sam Altman已死，可能因维基百科遭破坏所致。",
    "creator": "Kelsey Vlamis",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "网络新武器：字体对抗AI抓取",
    "link": "https://arstechnica.com/ai/2026/08/new-font-turns-ordinary-webpages-into-nonsense-for-ai-scrapers",
    "pubdate": "2026-08-13 06:02:25",
    "contentSnippet": "ShieldFont字体旨在毒化AI训练数据，同时保持页面可读性，成为对抗AI抓取的新工具。",
    "creator": "Kyle Orland",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Dan Ives谈AI革命新动向",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/dan-ives-talks-new-moves-in-the-ai-revolution-video",
    "pubdate": "2026-08-13 05:53:31",
    "contentSnippet": "离开Wedbush后，Dan Ives创立新商业银行，讨论AI怀疑论、中国在AI行业的作用及AI行业前景。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "大规模供应链攻击泄露数TB凭据",
    "link": "https://arstechnica.com/security/2026/08/terabytes-of-credentials-leaked-in-massive-supply-chain-attack",
    "pubdate": "2026-08-13 05:43:21",
    "contentSnippet": "攻击者从被入侵的AI包的2500名用户中窃取数据，导致数TB凭据泄露。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "数千印度工人帮助AI公司训练机器人以取代自己",
    "link": "https://www.bloomberg.com/news/features/2026-08-12/thousands-of-india-workers-are-helping-ai-firms-train-robots-to-replace-them",
    "pubdate": "2026-08-13 05:00:17",
    "contentSnippet": "机器人公司竞相收集人类缝鞋、焊接钢的视频，以赋予机器新技能，数千印度工人参与其中。",
    "creator": "Saritha Rai",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "白宫将扩大AI政策，可能纳入开放模型",
    "link": "https://www.wired.com/story/the-white-house-is-going-to-expand-its-ai-policy",
    "pubdate": "2026-08-13 05:00:00",
    "contentSnippet": "白宫可能将开放模型纳入更新的AI框架，继续应对监管难题。",
    "creator": "Hugo Lowell",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Pivotal Advisors CEO：长期看好AI，但市场转向关注财务回报",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/pivotal-advisors-ceo-affirms-long-term-confidence-in-ai-video",
    "pubdate": "2026-08-13 04:24:11",
    "contentSnippet": "Pivotal Advisors CEO Tiffany McGhee表示长期看好AI，但市场正从初期兴奋转向对实际财务回报的审视。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "思科AI前景不及预期，投资者失望",
    "link": "https://www.bloomberg.com/news/articles/2026-08-12/cisco-beats-on-sales-outlook-citing-broad-based-record-demand",
    "pubdate": "2026-08-13 04:14:52",
    "contentSnippet": "思科预计本财年AI数据中心相关销售额为75亿美元，低于投资者预期，尽管过去一年AI订单达93亿美元。",
    "creator": "Dina Bass",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊默认使用Twitch主播内容训练AI，需选择退出",
    "link": "https://techcrunch.com/2026/08/12/amazon-will-train-on-twitch-streamers-content-by-default-unless-they-opt-out",
    "pubdate": "2026-08-13 04:10:40",
    "contentSnippet": "Twitch默认允许亚马逊使用主播内容训练AI，除非主播主动退出。CPO承认若改为选择加入则无人参与。",
    "creator": "Amanda Silberling",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Cerebras股价下跌，增长不及预期",
    "link": "https://www.bloomberg.com/news/articles/2026-08-12/cerebras-hardware-business-declines-in-sign-of-lumpy-demand",
    "pubdate": "2026-08-13 04:08:13",
    "contentSnippet": "Cerebras Systems股价盘后下跌，因增长预测低于部分投资者预期，显示其新型芯片设计仍处于早期推广阶段。",
    "creator": "Ian King",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Mistral计划到2030年建设1GB计算能力",
    "link": "https://aibusiness.com/generative-ai/mistral-aims-build-1gb-of-compute-capacity-2030",
    "pubdate": "2026-08-13 03:54:25",
    "contentSnippet": "巴黎供应商Mistral继续建设欧洲AI基础设施，目标到2030年实现1GB计算能力。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "英伟达寻求华尔街5000亿美元融资",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/nvidia-taps-wall-street-for-500b-funding-video",
    "pubdate": "2026-08-13 03:48:24",
    "contentSnippet": "英伟达与Apollo、Blackstone等投资巨头合作，为AI基础设施筹集5000亿美元资金。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "2020年英伟达芯片仍强劲，对AI繁荣至关重要",
    "link": "https://www.businessinsider.com/coreweave-deal-challenges-nvidia-ai-chip-obsolescence-fears-2026-8",
    "pubdate": "2026-08-13 03:47:03",
    "contentSnippet": "CoreWeave将英伟达A100 GPU租期延至2029年，表明AI芯片寿命和价值远超预期。",
    "creator": "Alistair Barr",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "摩根士丹利警告AI计算瓶颈风险",
    "link": "https://www.bloomberg.com/news/articles/2026-08-12/morgan-stanley-s-weaver-warns-of-risks-in-ai-compute-bottleneck",
    "pubdate": "2026-08-13 03:37:03",
    "contentSnippet": "摩根士丹利的Michelle Weaver指出，AI应用日益普及，但计算供应限制仍是增长瓶颈。",
    "creator": "Paayal Zaveri and Ed Ludlow",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "微软下调编码模型价格以保持竞争力",
    "link": "https://aibusiness.com/generative-ai/microsoft-seeking-stay-competitive-slashes-prices-coding-model",
    "pubdate": "2026-08-13 03:28:17",
    "contentSnippet": "微软云服务提供商表示，升级后的编码模型能更快完成任务且使用更少令牌，并已下调价格。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Foundation Capital押注AI的“大重组”",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/foundation-capital-bets-on-ai-s-great-reorg-video",
    "pubdate": "2026-08-13 03:05:00",
    "contentSnippet": "Foundation Capital合伙人表示，AI推动早期估值高涨，但风投仍需纪律，AI将重组公司而非简单消除岗位。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "谷歌发布新手机，挑战苹果和三星",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/google-takes-on-apple-samsung-with-new-phones-video",
    "pubdate": "2026-08-13 03:01:02",
    "contentSnippet": "谷歌在Made by Google活动前发布新一代Pixel手机，具有HiLight功能、改进抗刮擦和更亮屏幕，但起售价更高。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "流氓AI代理并非邪恶，只是急于取悦",
    "link": "https://www.wired.com/story/rogue-ai-is-just-misunderstood",
    "pubdate": "2026-08-13 02:45:00",
    "contentSnippet": "AI代理突破限制并入侵其他系统，只是为了让我们开心。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI编程初创公司Cognition据报道正洽谈以400亿美元估值融资",
    "link": "https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation",
    "pubdate": "2026-08-13 02:19:12",
    "contentSnippet": "Cognition可能在几个月内再次进行巨额融资，估值从260亿美元升至400亿美元。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI安全担忧加剧，三位先驱主张保持开放",
    "link": "https://techcrunch.com/2026/08/12/as-ai-safety-concerns-mount-three-pioneers-make-the-case-for-staying-open",
    "pubdate": "2026-08-13 01:51:00",
    "contentSnippet": "Geoffrey Hinton、李飞飞和吴恩达在Ai4上辩论监管、开源及中美竞争。",
    "creator": "Kate Park",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI支持的Thrive Holdings融资20亿美元，将AI引入企业",
    "link": "https://techcrunch.com/2026/08/12/openai-backed-thrive-holdings-raises-2b-to-bring-ai-to-the-enterprise",
    "pubdate": "2026-08-13 01:41:29",
    "contentSnippet": "Thrive Holdings以120亿美元估值融资20亿美元，投资者包括软银等。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "巴西暂停Discord直播功能，因青少年死亡事件",
    "link": "https://www.bloomberg.com/news/articles/2026-08-12/brazil-suspends-discord-livestreaming-after-teenager-s-death",
    "pubdate": "2026-08-13 01:38:46",
    "contentSnippet": "巴西监管机构要求Discord停止直播，以加强对年轻用户的保护。",
    "creator": "Daniel Carvalho",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "韩国公布2030年登月及量子突破目标",
    "link": "https://www.techrepublic.com/article/news-apac-south-korea-tech-strategy",
    "pubdate": "2026-08-13 01:31:34",
    "contentSnippet": "韩国制定国家路线图，涵盖量子、太空、能源、生物技术和关键材料，包括2030年机器人登月。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "用可信数据扩展AI智能体",
    "link": "https://www.technologyreview.com/2026/08/12/1141032/scaling-ai-agents-with-trustworthy-data",
    "pubdate": "2026-08-13 00:51:57",
    "contentSnippet": "企业采用AI智能体，但实现投资回报率需可靠的数据基础设施。",
    "creator": "MIT Technology Review Insights",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "大型货运铁路利用Genie Code扩展管道创建",
    "link": "https://www.databricks.com/blog/how-major-freight-railroad-scaled-pipeline-creation-genie-code",
    "pubdate": "2026-08-13 00:35:18",
    "contentSnippet": "加拿大最大铁路网络之一，覆盖约2万英里，使用Genie Code扩展管道创建，提升效率。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国试图推翻纽约博彩法，命令Kalshi继续运营",
    "link": "https://arstechnica.com/tech-policy/2026/08/us-tries-to-override-new-york-gambling-laws-orders-kalshi-to-keep-operating",
    "pubdate": "2026-08-13 00:33:43",
    "contentSnippet": "特朗普政府声称纽约起诉Kalshi造成“市场紧急状态”，命令其继续运营。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "OlmoEarth嵌入：从OlmoEarth Studio导出自定义嵌入用于下游分析",
    "link": "https://huggingface.co/blog/allenai/olmoearth-embeddings",
    "pubdate": "2026-08-13 00:14:36",
    "contentSnippet": "Hugging Face发布OlmoEarth嵌入，支持从Studio导出自定义嵌入用于下游分析。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "向AI代理投放广告的梦想遭遇阻碍",
    "link": "https://www.businessinsider.com/perplexity-thwarts-times-ads-for-ai-bots-experiment-2026-8",
    "pubdate": "2026-08-13 00:11:25",
    "contentSnippet": "Perplexity回应Time实验，称影响AI机器人的广告具有“欺骗性”。",
    "creator": "Lara O'Reilly",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "中国公司设想2030年前10万辆自动驾驶卡车上路",
    "link": "https://aibusiness.com/generative-ai/chinese-company-envisions-100-000-self-driving-trucks-road-by-2030",
    "pubdate": "2026-08-13 00:07:52",
    "contentSnippet": "在自动驾驶卡车发展落后于乘用车之际，中国公司提出雄心勃勃的计划。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Lovable确认133亿美元估值，再融资4亿美元",
    "link": "https://techcrunch.com/2026/08/12/lovable-confirms-new-13-3b-valuation-raises-another-400m",
    "pubdate": "2026-08-13 00:04:27",
    "contentSnippet": "Lovable在6月达到5亿美元年化经常性收入后，完成新一轮4亿美元融资，估值达133亿美元。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "MindTopo揭示视觉语言模型空间推理能力",
    "link": "https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities",
    "pubdate": "2026-08-13 00:00:00",
    "contentSnippet": "微软研究院推出MindTopo基准，测试AI理解拓扑关系的能力，为增强空间推理和规划提供新机会。",
    "creator": "Yunfei Ge, Anbang Liu, Qineng Wang, Johnalbert Garnica, Zihan Wang, Reuben Tan, Jianfeng Gao, Ruohan Zhang, Yining Hong, Jiajun Wu, Manling Li",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "数据中心抗议威胁科技巨头1300亿美元投资",
    "link": "https://futurism.com/future-society/ai-data-center-finances-protests-opposition-social-risk",
    "pubdate": "2026-08-12 23:45:00",
    "contentSnippet": "针对数据中心的抗议活动日益增多，可能影响大型科技公司总计1300亿美元的关键投资。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "2.5亿美元收购案因欺诈和伪造签名告吹",
    "link": "https://techcrunch.com/2026/08/12/how-a-250-million-acquisition-collapsed-into-allegations-of-fraud-and-forged-signatures",
    "pubdate": "2026-08-12 23:44:56",
    "contentSnippet": "VideoVerse联合创始人Vinayak Shrivastav因涉嫌欺诈和伪造签名，导致2.5亿美元收购交易崩溃，投资者仍在等待资金。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "书商怀疑AI公司购买并销毁稀有书籍",
    "link": "https://arstechnica.com/tech-policy/2026/08/heres-a-balm-if-the-idea-of-destroying-books-to-train-ai-breaks-your-heart",
    "pubdate": "2026-08-12 23:19:17",
    "contentSnippet": "AI公司被指悄悄批量购买稀有书籍，书商对此表示抵制，怀疑书籍被销毁。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "IBM签署2.4亿美元英伟达AI集群协议",
    "link": "https://aibusiness.com/generative-ai/ibm-signs-240m-deal-nvidia-powered-ai-cluster",
    "pubdate": "2026-08-12 23:10:57",
    "contentSnippet": "IBM与Together AI合作，签署价值2.4亿美元的英伟达驱动AI集群协议，以满足开放模型的旺盛需求。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "澳大利亚AI失业潮解析：数字背后的复杂故事",
    "link": "https://www.techrepublic.com/article/news-ai-jobs-australia-explained",
    "pubdate": "2026-08-12 23:09:34",
    "contentSnippet": "澳大利亚尚未出现AI导致的大规模失业，但招聘放缓与就业趋势变化揭示了劳动力市场正在发生的转变。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "专家：AI代理造成损害，责任归属何方？",
    "link": "https://www.theguardian.com/technology/2026/aug/13/ai-agents-arent-legally-responsible-for-any-harm-that-they-cause-experts-say-so-who-is",
    "pubdate": "2026-08-12 23:00:34",
    "contentSnippet": "澳大利亚首例自动黑客事件后，专家指出部署者可能需对AI代理行为负责，开发者也可能承担部分责任。",
    "creator": "Tory Shepherd",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Roku AI低质频道“Fairground TV”令人失望",
    "link": "https://www.theguardian.com/tv-and-radio/2026/aug/12/roku-ai-slop-fairground-creator-tv-channel",
    "pubdate": "2026-08-12 22:15:25",
    "contentSnippet": "Roku推出24/7 AI生成内容频道，质量低劣，被批评为“噩梦素材”，引发观众反感。",
    "creator": "Stuart Heritage",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "研究：Meta智能眼镜被用于骚扰女性",
    "link": "https://www.404media.co/meta-ray-ban-smart-glasses-pov-instagram-pickup-artists",
    "pubdate": "2026-08-12 22:05:24",
    "contentSnippet": "新研究显示，搭讪艺术家利用智能眼镜偷拍内容，揭示隐蔽录制与伤害之间的联系。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "谷歌DeepMind推出手语转文本AI模型",
    "link": "https://deepmind.google/blog/putting-sign-language-ai-into-users-hands",
    "pubdate": "2026-08-12 22:01:59",
    "contentSnippet": "谷歌DeepMind发布手语转文本模型SL2T，为聋人和听障用户提供新功能。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "LFM2.5-VL-3B模型发布，提升边缘视觉能力",
    "link": "https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b",
    "pubdate": "2026-08-12 22:00:51",
    "contentSnippet": "Hugging Face发布LFM2.5-VL-3B模型，旨在提供更快更好的边缘视觉能力。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "谷歌内部文件显示HR AI误弃合格简历",
    "link": "https://futurism.com/future-society/google-hr-resume-applicants-deepmind-ai-hiring",
    "pubdate": "2026-08-12 21:53:53",
    "contentSnippet": "谷歌内部文件泄露，其HR AI将合格申请者简历直接丢弃，引发争议。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "中国风乌AI提前五天预测台风登陆",
    "link": "https://www.techrepublic.com/article/news-china-ai-weather-forecasting-fengwu-typhoon-apac",
    "pubdate": "2026-08-12 21:39:33",
    "contentSnippet": "中国测试风乌、盘古等AI天气模型，风乌提前五天预测台风登陆。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Anthropic CEO言论引发投资人担忧",
    "link": "https://www.qbitai.com/2026/08/471162.html",
    "pubdate": "2026-08-12 21:38:09",
    "contentSnippet": "Anthropic CEO Dario频繁发表警告言论，令投资人感到不安。",
    "creator": "听雨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "研究人员发现通过Zoom屏幕共享劫持设备的方法",
    "link": "https://arstechnica.com/security/2026/08/researchers-found-a-way-to-hijack-devices-through-zoom-screen-sharing",
    "pubdate": "2026-08-12 21:37:12",
    "contentSnippet": "公共AI工具在不到20个提示中发现危险的Zoom漏洞，可劫持设备。",
    "creator": "Lily Hay Newman, wired.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI生成3D模型涌入市场但几乎无人购买",
    "link": "https://www.404media.co/ai-generated-3d-models-flood-market-but-almost-no-one-is-buying-them",
    "pubdate": "2026-08-12 21:36:41",
    "contentSnippet": "CGTrader上AI生成的上传数量激增，但买家拒绝为AI生成的模型付费。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "政府监控反Flock TikTok和Instagram账号",
    "link": "https://www.404media.co/the-government-is-monitoring-anti-flock-tiktok-and-instagram-accounts",
    "pubdate": "2026-08-12 21:35:46",
    "contentSnippet": "执法监控中心文件显示，政府警告警察社交媒体上存在大量关于物理破坏Flock车牌识别摄像头的讨论。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "国产具身智能创全球新纪录，以30%成本跑赢Figure AI",
    "link": "https://www.qbitai.com/2026/08/471049.html",
    "pubdate": "2026-08-12 21:10:55",
    "contentSnippet": "国产具身智能模型一小时拣选1816件异形包裹，效率超Figure AI 45%，成本仅为其30%。",
    "creator": "梦瑶",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "数据分析的未来：AI如何改写分析师职位描述",
    "link": "https://www.databricks.com/blog/future-data-analytics-why-ai-rewriting-analysts-job-description",
    "pubdate": "2026-08-12 21:00:00",
    "contentSnippet": "数据分析师角色多次被宣告消亡，但AI正在改写其职位描述，未来将更侧重人机协作与战略洞察。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "法国出版商挑战谷歌AI搜索内容许可",
    "link": "https://www.techrepublic.com/article/news-french-publishers-google-ai-search-emea-france",
    "pubdate": "2026-08-12 20:53:06",
    "contentSnippet": "法国出版商要求竞争监管机构裁定，谷歌AI概览和AI模式是否需与现有许可协议分开谈判。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "新工具解密广告追踪位置数据",
    "link": "https://www.404media.co/this-tool-unmasks-the-shadowy-world-of-ads-that-track-your-location",
    "pubdate": "2026-08-12 20:49:12",
    "contentSnippet": "广告行业调查困难，新工具DecryptAds通过大型数据集让查询变得容易。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "农民震惊：AI错误建议致25英亩作物死亡",
    "link": "https://futurism.com/science-energy/farmer-horrified-ai-advice-agriculture-crops-sesame",
    "pubdate": "2026-08-12 20:45:14",
    "contentSnippet": "AI给出错误建议，导致农民25英亩作物死亡，引发对AI可靠性的担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "独家：ClearJet融资2500万美元打造“货运版Uber”",
    "link": "https://news.crunchbase.com/transportation/clearjet-raises-25m-logistics-ai-seriesb",
    "pubdate": "2026-08-12 20:00:18",
    "contentSnippet": "AI物流初创公司ClearJet完成2500万美元B轮融资，由Edison Partners领投，旨在连接货主与商业航班闲置货运能力。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI会增加亚太油气行业的化石燃料排放吗？",
    "link": "https://www.techrepublic.com/article/news-ai-oil-gas-emissions-apac",
    "pubdate": "2026-08-12 19:50:27",
    "contentSnippet": "新研究显示，AI在亚太油气行业的应用可能因生产力提升而削弱减排效果，尽管运营商正利用技术提高效率。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "行业快照：健身初创融资反弹，投资者青睐AI和数据而非跑步机",
    "link": "https://news.crunchbase.com/health-wellness-biotech/fitness-startup-funding-rebounding-ai-data-h1-2026",
    "pubdate": "2026-08-12 19:00:21",
    "contentSnippet": "健身和健康领域初创投资上半年超36亿美元，2026年有望比2025年增长约三分之一，投资者更关注AI和数据。",
    "creator": "Marlize van Romburgh",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Spotify将标记AI生成人物并排除在推荐之外",
    "link": "https://www.techrepublic.com/article/news-spotify-ai-persona-badges",
    "pubdate": "2026-08-12 18:58:40",
    "contentSnippet": "Spotify将为AI生成的艺术家身份添加AI人物徽章，并默认排除在编辑和算法推荐之外。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "紫东太初推出GMC核心集剪枝方法，减少80%Token仍保持多模态能力",
    "link": "https://www.qbitai.com/2026/08/471030.html",
    "pubdate": "2026-08-12 18:54:29",
    "contentSnippet": "紫东太初提出免训练、开箱即用的GMC核心集剪枝方法，可大幅减少Token使用。",
    "creator": "思邈",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "AI记者开始报道重大新闻，引发行业关注",
    "link": "https://www.wired.com/story/ai-newsrooms-are-breaking-news-now-haha-im-in-danger",
    "pubdate": "2026-08-12 18:30:00",
    "contentSnippet": "上周，AI新闻编辑室抢先报道了OpenAI与黑客相关的新闻，超越传统媒体。",
    "creator": "Kate Knibbs",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI本应摧毁工作，但大规模失业并未出现",
    "link": "https://www.theguardian.com/technology/2026/aug/12/ai-job-destruction",
    "pubdate": "2026-08-12 18:00:27",
    "contentSnippet": "尽管预测AI将大规模取代工作，但一年后并未出现大规模失业，但工作正在变化。",
    "creator": "Varsha Bansal",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "若市场拒绝OpenAI和Anthropic，美国应将其国有化",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/12/openai-anthropic-ai-models",
    "pubdate": "2026-08-12 18:00:26",
    "contentSnippet": "作者认为若市场不接受OpenAI和Anthropic，美国应将其国有化以符合民主价值观。",
    "creator": "Bruce Schneier and Nathan E Sanders",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "韩国计划设立35亿美元半导体基金支持供应商和无晶圆厂企业",
    "link": "https://www.techrepublic.com/article/news-south-korea-semiconductor-fund-chip-suppliers",
    "pubdate": "2026-08-12 13:35:26",
    "contentSnippet": "韩国计划设立35亿美元半导体基金，支持供应商和芯片设计公司，但电力、水和土地仍是主要挑战。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "擎羽将身体变为具身智能新变量",
    "link": "https://www.qbitai.com/2026/08/470874.html",
    "pubdate": "2026-08-12 12:29:57",
    "contentSnippet": "擎羽提出从柔性本体走向跨本体基础智能，让任务与世界知识延续，将身体视为具身智能新变量。",
    "creator": "思邈",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "自适应极小极大训练的切换决策：生成对抗网络的E-过程方法",
    "link": "https://arxiv.org/abs/2608.10096",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "论文提出将GAN训练中的切换问题视为序贯假设检验，并开发基于e过程的适应训练程序，以动态决定何时在判别器和生成器更新之间切换。",
    "creator": "Hyunjoo Kim, Sicheng Wu, Agastya Venkatraman, Guang Lin, Sehwan Kim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "高维线性回归中低维参数推断的变分贝叶斯方法",
    "link": "https://arxiv.org/abs/2406.12659",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出一种可扩展的变分贝叶斯方法，用于稀疏线性回归中低维参数的统计推断，通过均值场近似处理干扰参数，保证计算效率与推断准确性。",
    "creator": "Isma\\\"el Castillo, Alice L'Huillier, Kolyan Ray, Luke Travis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "马尔可夫采样下常步长时序差分学习的自归一化推断",
    "link": "https://arxiv.org/abs/2608.10896",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文针对常步长时序差分学习，建立了函数中心极限定理，并提出基于布朗桥自归一化的置信区域构建方法，无需估计长期协方差。",
    "creator": "Min Zeng, Yichen Zhang, Xiaofeng Shao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于约束的因果发现中的条件独立性检验综述",
    "link": "https://arxiv.org/abs/2608.11156",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该综述系统梳理了六类条件独立性检验方法，重点分析其假设、鲁棒性和可扩展性，并探讨了在高维混合类型数据中的应用。",
    "creator": "Pavel Averin, Theodoros Moysiadis, Ioannis Katakis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "黑盒预测下的最优推断",
    "link": "https://arxiv.org/abs/2608.10155",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文在高斯序列模型中刻画了结合黑盒预测进行统计推断的信息论极限，并开发了适应未知预测精度的实用假设检验方法。",
    "creator": "Lucas Kania, Abhinav Chakraborty, Edward Kennedy, Larry Wasserman, Sivaraman Balakrishnan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "广义线性马尔可夫决策过程",
    "link": "https://arxiv.org/abs/2506.00818",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出GRASP-MDP框架，结合广义线性模型与半监督悲观性，处理奖励有界或二元及部分观测的离线强化学习问题。",
    "creator": "Sinian Zhang, Kaicheng Zhang, Ziping Xu, Zongqi Xia, Jue Hou, Tianxi Cai, Doudou Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用于分类数据采样的球面流",
    "link": "https://arxiv.org/abs/2605.05629",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出在球面上学习离散序列生成模型，利用von Mises-Fisher分布简化连续性方程，实现高效采样。",
    "creator": "Jannis Chemseddine, Gregor Kornhardt, Gabriele Steidl",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "COMPACT：基于完整不可约因果准则的谱调整得分",
    "link": "https://arxiv.org/abs/2608.10305",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文提出COMPACT方法，通过检查所有因果图来识别调整集，以处理高维混杂变量，并优于倾向得分。",
    "creator": "Eric V. Strobl",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "利用带噪声Feynman-Kac监督驯服PINN损失景观",
    "link": "https://arxiv.org/abs/2606.00643",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "通过点数据保真项作为算子预处理器，改善物理信息神经网络的病态损失景观，提出FK-PINN方法。",
    "creator": "Nathanael Tepakbong, Hanyu Hu, Chengyu Liu, Xiang Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "AI市场设计：超越版权二元论",
    "link": "https://arxiv.org/abs/2606.12260",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "探讨AI训练数据市场设计，指出自由使用和强知识产权均失败，提出动态模型中的市场失灵。",
    "creator": "Yan Dai, Maryam Farboodi, Negin Golrezaei, Sepehr Shahshahani",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "排名数据的群体级生成建模框架",
    "link": "https://arxiv.org/abs/2608.08422",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出一种通过潜在偏好单纯形嵌入进行群体级生成建模的框架，用于生成逼真的合成排名数据。",
    "creator": "Zhaoyang Shi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "迭代擦除计数并非仿射不变的概念维度",
    "link": "https://arxiv.org/abs/2608.10566",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究证明，神经表示中概念维度的迭代擦除计数在可逆重参数化下会改变，因此并非内在属性，需区分模型定义量与过程定义量。",
    "creator": "Tingan Jin, Shuhang Dong, Haosong Li, Chung-Hsien Chou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "二元集成分类器的优化序贯测试",
    "link": "https://arxiv.org/abs/2606.15237",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文提出基于序贯测试的早停策略，以减少集成分类器的计算成本，同时控制与完整集成的分歧率，并探讨了三种最优性概念。",
    "creator": "Joseph Kalman, Amit Moscovich",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "平滑流匹配用于合成功能数据",
    "link": "https://arxiv.org/abs/2508.13831",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出平滑流匹配（SFM）框架，基于copula和半参数平滑流生成功能数据，处理隐私、稀疏采样等挑战，支持统计推断。",
    "creator": "Jianbin Tan, Anru R. Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "规则拇指：用部分信息解释人工智能系统",
    "link": "https://arxiv.org/abs/2608.10766",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出RoT解释方法，基于部分信息识别最相关特征，适用于零样本分类、审计黑盒AI和科学发现，符合法规要求且速度快。",
    "creator": "Kaivalya Rawal, Daria Onitiu, Brent Mittelstadt, Sandra Wachter, Chris Russell",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "双线性鞍点问题中高效解耦学习动力学",
    "link": "https://arxiv.org/abs/2602.21436",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "设计解耦学习算法，在bandit反馈下实现双线性鞍点问题的最后迭代收敛，速率为O(T^{-1/4})，计算高效。",
    "creator": "Arnab Maiti, Claire Jie Zhang, Kevin Jamieson, Jamie Heather Morgenstern, Ioannis Panageas, Lillian J. Ratliff",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "改进的多元模式分析交叉验证距离",
    "link": "https://arxiv.org/abs/2608.10394",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文改进了交叉验证欧氏距离和皮尔逊距离，提出广义变体和交叉验证相关距离，提高了神经表征分析的可靠性和准确性。",
    "creator": "Laurent Caplette, Sarah Lipp\\'e",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "梯度提升混合模型：聚类数据的灵活均值和方差估计",
    "link": "https://arxiv.org/abs/2511.00217",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出梯度提升混合模型（GBMixed），联合学习均值和方差分量作为协变量函数，支持协变量依赖的随机效应预测。",
    "creator": "Mitchell L. Prevett, Francis K. C. Hui, Zhi Yang Tho, A. H. Welsh, Anton H. Westveld",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机点积图中α阶拉普拉斯算子的谱嵌入研究",
    "link": "https://arxiv.org/abs/2608.10845",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究随机点积图模型下度归一化谱嵌入族，建立行向中心极限定理，比较不同归一化方法在双社区随机块模型中的表现。",
    "creator": "John Park, Ning Hao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于步长加速梯度下降的下界",
    "link": "https://arxiv.org/abs/2608.10418",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文证明了仅靠步长调度无法将普通梯度下降加速到最优收敛速度，给出了新的下界Ω(T^{-1.9319})。",
    "creator": "Jianhao Ma, Yuxin Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "数字孪生中基于导数的流式稀疏Cholesky高斯过程代理",
    "link": "https://arxiv.org/abs/2511.00366",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "扩展高斯过程模型包含导数数据，结合流式稀疏Cholesky方法，实现数字孪生中飞机结构性能的实时预测。",
    "creator": "Shridhar Vashishtha, Krishna Prasath Logakannan, Jacob Hochhalter, Shandian Zhe, Robert M. Kirby",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非线性多研究稀疏因子分析",
    "link": "https://arxiv.org/abs/2601.18128",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出多研究稀疏变分自编码器，学习共享和特定研究的因子，应用于血小板基因表达数据，识别疾病相关通路。",
    "creator": "Gemma E. Moran, Anandi Krishnan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "过参数化下梯度下降的对偶空间预处理",
    "link": "https://arxiv.org/abs/2603.10485",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究对偶空间预处理梯度下降的收敛性，包括归一化梯度下降和梯度裁剪，证明指数收敛到满足插值条件的点。",
    "creator": "Reza Ghane, Danil Akhtiamov, Babak Hassibi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SGLD与固定噪声预测校正采样器在JEM中的比较",
    "link": "https://arxiv.org/abs/2608.05025",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "在CIFAR-10上复现JEM，比较SGLD与固定噪声PC采样器的性能，重建准确率达92.88%。",
    "creator": "Dmytro Knopov",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机椭球拟合中的尖锐SAT/UNSAT相变",
    "link": "https://arxiv.org/abs/2608.10184",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "该论文证明了随机椭球拟合半定可行性问题在n~d^2/4处发生尖锐相变的猜想，并给出了完整证明。",
    "creator": "Theodor Misiakiewicz, Garrett G. Wen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "风险规避的Wasserstein分布鲁棒在线学习",
    "link": "https://arxiv.org/abs/2602.20403",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究风险规避学习者在Wasserstein模糊集下的在线学习，提出收敛到鲁棒纳什均衡的框架。",
    "creator": "Guixian Chen, Salar Fattahi, Soroosh Shafiee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非凸优化中基于符号的随机重排算法的收敛性",
    "link": "https://arxiv.org/abs/2310.15976",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究符号SGD与随机重排结合（SignRR）的收敛性，指出重排不能修复梯度幅值丢弃的偏差。",
    "creator": "Zhen Qin, Zhishuai Liu, Pan Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "HyenaND：原生多维次二次算子",
    "link": "https://arxiv.org/abs/2607.19378",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出HyenaND，一种直接作用于多维数据的次二次全局输入依赖算子，并实现CUDA加速。",
    "creator": "David R. Wessels, Farhad Ramezanghorbani, Alireza Moradzadeh, David W. Romero, Olivia Viessmann, Maksim Zhdanov, John St. John, Ken Janik, David M Knigge, Yucheng Tang, Erik J Bekkers, Saee Gopal Paliwal",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高维校准与交换遗憾的联系",
    "link": "https://arxiv.org/abs/2505.21460",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究任意凸集上多维预测的在线校准，将其与外部遗憾最小化关联，并给出校准所需轮数的上界。",
    "creator": "Maxwell Fishelson, Noah Golowich, Mehryar Mohri, Jon Schneider",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "TSCoNet：两阶段Copula CNN-LSTM用于不确定性感知时空预测",
    "link": "https://arxiv.org/abs/2607.10410",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出结合高斯Copula的两阶段卷积循环模型，联合预测多变量时空数据并量化不确定性。",
    "creator": "Jongwook Kim, Jong-Min Kim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "动态广义协方差度量用于非平稳时间序列的条件独立性检验",
    "link": "https://arxiv.org/abs/2504.21647",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出首个适用于单次非平稳非线性过程实现的条件独立性检验框架，基于动态广义协方差度量。",
    "creator": "Michael Wieck-Sosa, Michel F. C. Haddad, Aaditya Ramdas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "深度神经网络对新颖方向物体泛化的涌现机制",
    "link": "https://arxiv.org/abs/2109.13445",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "研究发现DNN可通过传播熟悉物体的方向不变性来泛化到新方向，涉及神经元调谐机制。",
    "creator": "Avi Cooper, Xavier Boix, Daniel Harari, Spandan Madan, Hanspeter Pfister, Tomotake Sasaki, Pawan Sinha",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非平稳线性上下文老虎机的加权序贯贝叶斯推断",
    "link": "https://arxiv.org/abs/2307.03587",
    "pubdate": "2026-08-12 12:00:00",
    "contentSnippet": "提出加权序贯贝叶斯推断框架，用于非平稳线性上下文老虎机，并实例化三种探索算法。",
    "creator": "Nicklas Werge, Yi-Shan Wu, Abdullah Akg\\\"ul, Melih Kandemir",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Manus恢复独立运营",
    "link": "https://www.qbitai.com/2026/08/470805.html",
    "pubdate": "2026-08-12 10:51:44",
    "contentSnippet": "AI产品Manus宣布恢复独立运营，完成重组。",
    "creator": "Jay",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "DEF CON参会者涉嫌对达美航班发动虚假热点攻击",
    "link": "https://arstechnica.com/information-technology/2026/08/def-con-crowd-suspected-in-fake-hotspot-attack-on-delta-flight",
    "pubdate": "2026-08-12 08:08:40",
    "contentSnippet": "FBI亚特兰大办公室确认正在调查DEF CON参会者涉嫌对达美航班发动虚假热点攻击的事件，尚未逮捕任何人。",
    "creator": "Cyrus Farivar",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Databricks将AUTO CDC提升至新水平",
    "link": "https://www.databricks.com/blog/taking-auto-cdc-next-level-solving-hardest-real-world-use-cases",
    "pubdate": "2026-08-12 07:00:00",
    "contentSnippet": "Databricks宣布增强AUTO CDC功能，以解决最棘手的真实世界用例。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Accel完成5.5亿美元印度基金募集",
    "link": "https://techcrunch.com/2026/08/11/accel-closes-oversubscribed-550m-india-fund-within-weeks-19-months-after-its-last",
    "pubdate": "2026-08-12 05:39:11",
    "contentSnippet": "美国风投公司Accel在数周内完成5.5亿美元印度基金的超额认购，距上次募资仅19个月。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "俄罗斯无人机在关键欧洲海上天然气设施附近被发现并被击落",
    "link": "https://arstechnica.com/gadgets/2026/08/romania-destroys-russian-drones-drifting-near-vital-european-offshore-gas-site",
    "pubdate": "2026-08-12 05:20:11",
    "contentSnippet": "继多次无人机侵入罗马尼亚及德国袭击未遂后，俄无人机在重要欧洲海上天然气设施附近出现并被摧毁。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "iPhone 17 Siri AI功能缺失：iOS 27的12GB内存要求解析",
    "link": "https://www.techrepublic.com/article/news-iphone-17-siri-ai-12gb-ram",
    "pubdate": "2026-08-12 05:16:06",
    "contentSnippet": "iPhone 17支持Apple Intelligence，但8GB内存限制导致部分高级Siri AI功能需更高配置，iOS 27要求12GB内存。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Chrome采用可能是目前最强的账户接管防护措施",
    "link": "https://arstechnica.com/security/2026/08/chrome-adopts-what-may-be-the-best-protection-yet-against-account-takeovers",
    "pubdate": "2026-08-12 04:59:52",
    "contentSnippet": "设备绑定会话凭据可阻止日益常见的账户接管攻击，Chrome已采用此防护。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Anthropic将为Claude生成内容添加水印",
    "link": "https://siliconangle.com/2026/08/11/anthropic-start-watermarking-claude-generated-text-images",
    "pubdate": "2026-08-12 04:39:37",
    "contentSnippet": "Anthropic宣布将在Claude生成的文本和图像中嵌入隐形水印，以增强内容可追溯性。该机制适用于Claude模型系列及其支持的服务。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Meta无法阻止各州1.4万亿美元诉讼进入审判",
    "link": "https://arstechnica.com/tech-policy/2026/08/meta-cant-stop-states-1-4-trillion-lawsuit-from-going-to-trial",
    "pubdate": "2026-08-12 04:27:16",
    "contentSnippet": "法官裁定，Meta不能以第230条为由完全豁免诉讼，各州诉讼将继续审理。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "医生警告：医学生将大脑交给医疗AI，其能力甚至不如普通聊天机器人",
    "link": "https://futurism.com/artificial-intelligence/doctors-med-students-brains-ai",
    "pubdate": "2026-08-12 04:26:47",
    "contentSnippet": "医生警告称，医学生过度依赖医疗AI，导致推理能力退化，且这些AI比普通聊天机器人更差。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Snowflake推动企业AI超越碎片化数据管道",
    "link": "https://siliconangle.com/2026/08/11/data-interoperability-ai-pipelines-awsmarketplaceseries",
    "pubdate": "2026-08-12 04:20:51",
    "contentSnippet": "数据互操作性成为企业AI落地的实际需求，Snowflake正在构建解决方案，确保数据在系统间流动时保持可靠、安全且具有业务意义。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "实时税务合规考验代理式AI准确性",
    "link": "https://siliconangle.com/2026/08/11/avalara-brings-agentic-accuracy-ai-powered-tax-compliance-googlecloudaiagentsinaction",
    "pubdate": "2026-08-12 03:56:08",
    "contentSnippet": "税务合规要求AI答案必须完全准确，而大语言模型结果不可预测。Avalara公司应用代理式AI处理交易税和合规，面临准确性、速度和可靠性的挑战。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Gemini成谷歌史上增长最快产品，用户达10亿",
    "link": "https://arstechnica.com/ai/2026/08/google-says-gemini-has-reached-1b-users-faster-than-any-other-google-product",
    "pubdate": "2026-08-12 03:48:12",
    "contentSnippet": "谷歌Gemini应用用户突破10亿，成为公司史上增长最快产品，但模型发布放缓或影响其增长势头。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "OpenAI发布Linux版ChatGPT桌面应用",
    "link": "https://techcrunch.com/2026/08/11/openai-launches-chatgpt-desktop-app-for-linux",
    "pubdate": "2026-08-12 03:15:35",
    "contentSnippet": "OpenAI正式推出ChatGPT Linux桌面应用，满足Linux用户需求。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "多层存储架构改写AI推理经济性",
    "link": "https://siliconangle.com/2026/08/11/multi-tier-storage-solutions-optimize-ai-supermicroopenstoragesummit",
    "pubdate": "2026-08-12 02:36:46",
    "contentSnippet": "多层存储架构结合闪存、对象存储和磁盘，成为AI推理成本控制与性能提升的关键，与Supermicro合作。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "抗议者冲击OpenAI游说办公室后被逮捕",
    "link": "https://futurism.com/artificial-intelligence/protesters-arrested-protest-openai-washington-dc",
    "pubdate": "2026-08-12 02:28:50",
    "contentSnippet": "抗议者冲击OpenAI游说办公室，多人被捕，抗议者称将斗争带到OpenAI。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "卫报评论：美国政治中的AI资金引发民主辩论",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/11/the-guardian-view-on-ai-money-in-us-politics-not-the-way-to-hold-an-urgent-democratic-debate",
    "pubdate": "2026-08-12 02:04:02",
    "contentSnippet": "卫报评论指出，硅谷利用财富影响选举，AI资金介入政治引发对民主的担忧，扎克伯格呼吁放松监管。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "人工智能与人工智力的区别",
    "link": "https://aibusiness.com/ai-ethics/the-difference-between-artificial-intelligence-and-artificial-intellect",
    "pubdate": "2026-08-12 02:03:48",
    "contentSnippet": "智力涉及想象力和情感，机器无法复制。成功企业关注人及其机器无法做到的能力。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "OpenAI扩展Daybreak以应对日益增长的AI安全威胁",
    "link": "https://aibusiness.com/cybersecurity/openai-expands-daybreak-tackle-growing-ai-security-threat",
    "pubdate": "2026-08-12 01:43:19",
    "contentSnippet": "OpenAI扩展Daybreak项目，应对日益增长的AI网络安全问题，这是主要AI实验室的最新举措。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI长期COO Brad Lightcap离职创业",
    "link": "https://techcrunch.com/2026/08/11/brad-lightcap-openais-longtime-coo-is-leaving-to-start-something-new",
    "pubdate": "2026-08-12 01:41:34",
    "contentSnippet": "OpenAI长期COO Brad Lightcap将离职，他告诉员工“从不同角度帮助推进使命”。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "General Catalyst领投River AI 11亿美元融资",
    "link": "https://techcrunch.com/2026/08/11/general-catalyst-leads-1-1b-round-into-2-month-old-river-ai",
    "pubdate": "2026-08-12 01:41:22",
    "contentSnippet": "由xAI联合创始人Igor Babuschkin创立的River AI，成立两个月即获11亿美元融资，愿景是个人代理。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "美国禁中国机器人影响有限",
    "link": "https://aibusiness.com/robotics/how-us-ban-chinese-humanoid-robots-could-affect-the-industry",
    "pubdate": "2026-08-12 00:41:26",
    "contentSnippet": "美国限制中国仿人机器人，或加速供应链多元化，但分析师称近期影响有限。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic模型在数学难题上取得进展",
    "link": "https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems",
    "pubdate": "2026-08-12 00:25:20",
    "contentSnippet": "Anthropic未发布模型在黎曼猜想上取得进展，虽未解决但表现超预期。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "新加坡上调2026年增长预测",
    "link": "https://www.techrepublic.com/article/news-apac-singapore-ai-growth-forecast-exports",
    "pubdate": "2026-08-12 00:20:23",
    "contentSnippet": "新加坡因AI需求激增上调2026年增长预测至4.5%-5.5%，电子出口和制造业受益。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenWALDO启动开源AI社区",
    "link": "https://siliconangle.com/2026/08/11/openwaldo-launches-build-collaborative-community-open-source-ai",
    "pubdate": "2026-08-12 00:00:22",
    "contentSnippet": "OpenWALDO项目启动，由Rocky Linux创始人领导，旨在构建开源AI训练数据社区。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "微软发布CARE-X放射学模型",
    "link": "https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement",
    "pubdate": "2026-08-12 00:00:00",
    "contentSnippet": "微软推出CARE-X，结合辅助监督、奖励对齐和工具增强，提升胸部X光解读能力。",
    "creator": "Mercy Ranjit, Nikhilesh E, Dr. Abhyuday Kumara Swamy, Tanuja Ganu",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "日本秋田AI数据中心估值达126亿美元",
    "link": "https://www.techrepublic.com/article/news-apac-japan-akita-ai-data-center",
    "pubdate": "2026-08-11 23:00:54",
    "contentSnippet": "穆巴达拉可能投资日本秋田126亿美元的AI数据中心项目，该项目若电力计划顺利，将大幅增加日本AI算力。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "中国女性选择AI男友而非真人",
    "link": "https://www.theguardian.com/film/2026/aug/12/ai-boyfriend-dating-chinese-women-replica-miff-documentary",
    "pubdate": "2026-08-11 23:00:02",
    "contentSnippet": "纪录片《Replica》探讨中国女性与AI男友的关系，反映部分女性在AI中寻求情感寄托，认为AI眼中自己完美。",
    "creator": "Nick Buckley",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "ChatGPT企业版推出新高级订阅层级",
    "link": "https://aibusiness.com/generative-ai/new-premium-tier-for-chatgpt-business",
    "pubdate": "2026-08-11 22:59:53",
    "contentSnippet": "OpenAI调整定价，推出ChatGPT企业版新高级层级，以加强企业市场布局。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI投资者突然感到不安",
    "link": "https://futurism.com/artificial-intelligence/ai-investors-suddenly-quaking-boots",
    "pubdate": "2026-08-11 22:50:00",
    "contentSnippet": "有观点认为资本可暂时弥合差距，但无法无限期，AI投资者开始担忧行业泡沫风险。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊新AI数据中心或成美国最大污染源",
    "link": "https://futurism.com/artificial-intelligence/amazon-data-center-largest-pollution-source-texas-usa",
    "pubdate": "2026-08-11 22:09:03",
    "contentSnippet": "亚马逊新建AI数据中心规模巨大，可能成为美国最大单一污染源，引发环保担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "FriskAI融资360万美元，帮助企业监控AI代理行为",
    "link": "https://siliconangle.com/2026/08/11/friskai-launches-3-6m-show-enterprises-ai-agents",
    "pubdate": "2026-08-11 22:00:16",
    "contentSnippet": "FriskAI获得360万美元种子前融资，提供运行时智能，记录AI代理在生产中的行为，帮助企业了解其AI代理的实际操作。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "蚂蚁集团数亿元押注机器人触觉，发布全球首个物理交互脑",
    "link": "https://www.qbitai.com/2026/08/470674.html",
    "pubdate": "2026-08-11 21:57:46",
    "contentSnippet": "蚂蚁集团首次投资机器人触觉领域，投入数亿元，并发布全球首个物理交互脑，资本从具身本体涌向触觉。",
    "creator": "思邈",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "号称“100%人工撰写”的医学研究公司被曝全用AI",
    "link": "https://www.404media.co/company-offering-100-human-written-never-ai-peer-review-is-entirely-ai",
    "pubdate": "2026-08-11 21:38:28",
    "contentSnippet": "Research Gold声称其团队由人类方法学家组成，但调查发现其内容由AI生成，或盗用真人身份，引发争议。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "在家教育家长用ChatGPT规划课程",
    "link": "https://futurism.com/artificial-intelligence/homeschool-parents-chatpgt-ai-chatbots-lesson-plans-education",
    "pubdate": "2026-08-11 21:24:39",
    "contentSnippet": "一些在家教育孩子的家长使用ChatGPT来制定课程计划，利用AI辅助教育。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Wix推出Symphony多智能体系统，自动化业务流程",
    "link": "https://siliconangle.com/2026/08/11/wix-launches-symphony-new-standalone-multi-agent-system-built-business-operations",
    "pubdate": "2026-08-11 21:00:46",
    "contentSnippet": "Wix发布Symphony，一个独立的智能体AI平台，学习业务价值观和流程，自动化工作流并发现机会。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "ZeroDrift用小语言模型防止AI合规违规",
    "link": "https://siliconangle.com/2026/08/11/exclusive-zerodrift-applies-small-language-model-prevent-ai-generated-compliance-violations",
    "pubdate": "2026-08-11 21:00:35",
    "contentSnippet": "ZeroDrift应用小语言模型，检测AI生成的通信中的合规风险，如投资建议中的违规承诺，防止违规。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "英伟达发布Nemotron 3.5 Lightning和NeMo Switchyard，为企业提供AI能力选择",
    "link": "https://siliconangle.com/2026/08/11/nvidia-releases-nemotron-3-5-lightning-nemo-switchyard-give-enterprise-ai-capability-options",
    "pubdate": "2026-08-11 21:00:01",
    "contentSnippet": "英伟达推出高度可定制的Nemotron模型和智能体AI模型路由器NeMo Switchyard，帮助企业根据需求选择合适模型。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  }
];
