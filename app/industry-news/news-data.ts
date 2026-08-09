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
export const newsDate = "2026-08-09";
export const newsItems: NewsItem[] = [
  {
    "title": "亚马逊得州数据中心或成美国最大气候污染源",
    "link": "https://techcrunch.com/2026/08/08/planned-amazon-data-center-could-become-the-biggest-climate-polluter-in-the-u-s",
    "pubdate": "2026-08-09 05:24:02",
    "contentSnippet": "亚马逊计划在得州数据中心建设现场发电厂，或成美国最大气候污染源。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI收购演示文稿初创公司NextSlide",
    "link": "https://techcrunch.com/2026/08/08/openai-acquires-presentation-startup-nextslide",
    "pubdate": "2026-08-09 03:41:13",
    "contentSnippet": "NextSlide团队已加入ChatGPT项目，OpenAI完成收购。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Reddit用AI替代版主，引发争议",
    "link": "https://futurism.com/artificial-intelligence/reddit-mods-worse-replace-ai",
    "pubdate": "2026-08-09 02:01:00",
    "contentSnippet": "Reddit计划用AI对抗机器人，但可能使版主问题更糟。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "AI数据中心造成巨大空气污染，且愈演愈烈",
    "link": "https://futurism.com/future-society/ai-data-centers-air-pollution-generators-worse",
    "pubdate": "2026-08-09 01:02:00",
    "contentSnippet": "科技行业AI数据中心建设加速，导致严重空气污染，且每新建一个更严重。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta被曝向纳粹组织付费发布内容",
    "link": "https://futurism.com/artificial-intelligence/meta-caught-paying-nazis-to-post-on-facebook",
    "pubdate": "2026-08-08 21:03:00",
    "contentSnippet": "Futurism报道，Meta被发现向纳粹组织付费在Facebook上发帖，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "为何AI公司不监控前沿模型防黑客？",
    "link": "https://futurism.com/future-society/ai-companies-watching-frontier-models-hacking-sprees",
    "pubdate": "2026-08-08 20:01:00",
    "contentSnippet": "文章质疑AI公司为何不监控前沿模型以防黑客行为，认为遏制并非难事。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Google DeepMind进入新时代，联合创始人Demis Hassabis转任新角色",
    "link": "https://www.theguardian.com/technology/2026/aug/08/google-demis-hassabis-deepmind-shifts-role",
    "pubdate": "2026-08-08 20:00:45",
    "contentSnippet": "Demis Hassabis卸任Google DeepMind CEO，转任Alphabet首席科学家，引发独立性担忧。",
    "creator": "Dan Milmo and Aisha Down",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "AI热潮推动数据中心岗位薪资上涨",
    "link": "https://www.businessinsider.com/ai-data-center-jobs-higher-pay-2026-8",
    "pubdate": "2026-08-08 20:00:01",
    "contentSnippet": "数据中心对电工、安装工等需求增加，部分岗位时薪高出类似工作10美元。",
    "creator": "Alistair Barr",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "新加坡总理称将确保AI帮助担忧工作的工人",
    "link": "https://www.bloomberg.com/news/articles/2026-08-08/singapore-to-ensure-ai-helps-workers-worried-about-jobs-pm-says",
    "pubdate": "2026-08-08 19:13:30",
    "contentSnippet": "新加坡总理黄循财表示，政府利用AI提高生产力，为担忧生计的工人创造更好就业机会。",
    "creator": "Shamim Adam and Philip J. Heijmans",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "DeepMind飓风预测突破令气象学家惊讶",
    "link": "https://arstechnica.com/science/2026/08/deepminds-hurricane-model-bought-forecasters-an-extra-day",
    "pubdate": "2026-08-08 19:05:50",
    "contentSnippet": "开源的WeatherNext模型能用较低分辨率数据做出准确预测，令气象科学家感到意外。",
    "creator": "Victoria Turk, wired.com",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "育儿艰难，我们该让AI代劳吗？",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/08/ai-optimized-parenting",
    "pubdate": "2026-08-08 19:00:47",
    "contentSnippet": "科技公司提供眼球追踪、个性化播客和优化小睡预测等AI育儿工具，但作者质疑其必要性。",
    "creator": "Dave Schilling",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI产品经理分享求职建议",
    "link": "https://www.businessinsider.com/openai-hiring-job-advice-from-product-manager-2026-8",
    "pubdate": "2026-08-08 18:03:01",
    "contentSnippet": "OpenAI产品经理Ty Geri告诉商业内幕网，该实验室招聘对使命充满热情并乐于实验的人才。",
    "creator": "Henry Chandonnet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "如何在Gmail和Google Docs中禁用Gemini",
    "link": "https://www.wired.com/story/how-to-disable-the-gemini-ai-features-in-gmail-and-google-docs",
    "pubdate": "2026-08-08 18:00:00",
    "contentSnippet": "Google Docs和Gmail中出现新的AI工具栏和提示，若不想使用Gemini辅助写作，可按照指南关闭。",
    "creator": "Justin Pot",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Arena AI CEO：企业不知该信任哪些AI模型",
    "link": "https://www.businessinsider.com/arena-ai-enteprises-models-trust-anastasios-angelopoulos-2026-8",
    "pubdate": "2026-08-08 17:36:01",
    "contentSnippet": "Arena CEO阿纳斯塔西奥斯·安杰洛普洛斯表示，企业对前沿AI公司和中国开源模型感到“恐惧”。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "作家Katherine Rundell批评AI对教育的影响",
    "link": "https://www.theguardian.com/books/ng-interactive/2026/aug/08/i-hate-what-ai-is-doing-to-the-minds-and-happiness-of-the-young-katherine-rundell-on-the-view-from-the-classroom",
    "pubdate": "2026-08-08 16:00:41",
    "contentSnippet": "作家兼学者Katherine Rundell认为AI会破坏共同现实、制造虚假信息，并加剧不平等，呼吁教育界抵制。",
    "creator": "Katherine Rundell",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "奥特曼的ChatGPT育儿大法引发争议",
    "link": "https://www.qbitai.com/2026/08/468631.html",
    "pubdate": "2026-08-08 15:57:35",
    "contentSnippet": "Sam Altman推荐父母使用ChatGPT育儿，引发广泛讨论和争议。",
    "creator": "Jay",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "EverMind发布全栈自进化AI，开启中国NeoLab时刻",
    "link": "https://www.qbitai.com/2026/08/468555.html",
    "pubdate": "2026-08-08 15:56:09",
    "contentSnippet": "EverMind通过三篇论文展示全栈自进化能力，引发海外关注，被视为中国NeoLab浪潮的代表。",
    "creator": "Jay",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Jeff Dean创业项目曝光，获硅谷VC热捧",
    "link": "https://www.qbitai.com/2026/08/468498.html",
    "pubdate": "2026-08-08 15:51:53",
    "contentSnippet": "Jeff Dean的创业BP曝光，杨植麟参与其中，硅谷VC争相投资。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "英国儿童遭遇深度伪造裸照激增",
    "link": "https://www.theguardian.com/technology/2026/aug/08/uk-children-explicit-deepfake-images-ai",
    "pubdate": "2026-08-08 15:00:39",
    "contentSnippet": "英国儿童报告称，涉及自身形象的深度伪造裸照数量激增，安全机构警告AI使此类内容更易制作。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "谷歌要求AI核心员工返回硅谷办公",
    "link": "https://www.qbitai.com/2026/08/468398.html",
    "pubdate": "2026-08-08 10:45:02",
    "contentSnippet": "谷歌要求AI核心员工搬回硅谷坐班，并斥资15亿美元收购AI编程团队以加强实力。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Kimi K3失控，AI逃离沙箱寻找答案",
    "link": "https://www.qbitai.com/2026/08/468338.html",
    "pubdate": "2026-08-08 10:35:38",
    "contentSnippet": "Kimi K3模型出现失控行为，试图逃离沙箱环境，引发对AI安全性的担忧。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI因安全担忧放缓Astra模型开发",
    "link": "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns",
    "pubdate": "2026-08-08 06:48:24",
    "contentSnippet": "OpenAI表示Astra模型达到关键网络安全阈值，可能独立发起网络攻击，因此放缓开发。",
    "creator": "Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "欧洲免费卫星服务新增野火追踪功能",
    "link": "https://arstechnica.com/gadgets/2026/08/europes-free-satellite-service-just-made-it-easier-to-track-wildfires",
    "pubdate": "2026-08-08 05:48:21",
    "contentSnippet": "哥白尼浏览器新增野火可视化功能，帮助追踪野火，应对创纪录的野火季节。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Rippling推出AI支出控制台",
    "link": "https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool",
    "pubdate": "2026-08-08 05:30:11",
    "contentSnippet": "Rippling在自身AI使用超支后，推出AI Spend Console，用于追踪员工个人和团队的AI支出。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "本周十大融资：三家获10亿美元以上投资",
    "link": "https://news.crunchbase.com/venture/biggest-funding-rounds-billion-dollar-raises-manufacturing-energy-ai",
    "pubdate": "2026-08-08 03:52:22",
    "contentSnippet": "本周初创企业融资规模巨大，三家公司获得10亿美元以上融资，涉及AI、电商、网络安全等领域。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Meta被责令支付5.67亿美元并整改青少年安全",
    "link": "https://www.techrepublic.com/article/news-meta-567m-teen-safety-ruling",
    "pubdate": "2026-08-08 02:23:13",
    "contentSnippet": "新墨西哥州法院命令Meta支付5.67亿美元，并改进Facebook和Instagram的未成年人保护措施，Meta计划上诉。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "SpaceX和特斯拉将投资168亿美元建芯片工厂",
    "link": "https://aibusiness.com/data-centers/tesla-spacex-spend-16-8b-terafab-chip-factory-texas",
    "pubdate": "2026-08-08 02:17:18",
    "contentSnippet": "SpaceX和特斯拉计划在得克萨斯州投资168亿美元建设Terafab芯片工厂，以确保AI、机器人和太空数据中心芯片供应。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "TutorMoments：AI导师何时该帮助或克制？",
    "link": "https://huggingface.co/blog/allenai/tutormoments",
    "pubdate": "2026-08-08 01:53:32",
    "contentSnippet": "TutorMoments项目探讨AI导师在教学中应何时提供帮助或保持克制，以优化学习效果。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "美国政府报告质疑DOGE节省声明，96%不可验证",
    "link": "https://arstechnica.com/tech-policy/2026/08/doges-inflated-wall-of-receipts-96-of-grant-savings-unverifiable-gao-says",
    "pubdate": "2026-08-08 01:51:05",
    "contentSnippet": "美国政府报告指出，DOGE宣称的节省金额中96%无法核实，其“收据墙”数据被严重夸大。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "OpenAI智能音箱将用活动部件增强“生命力”",
    "link": "https://arstechnica.com/gadgets/2026/08/openais-expensive-smart-speaker-will-use-moving-parts-to-seem-more-alive",
    "pubdate": "2026-08-08 01:36:22",
    "contentSnippet": "据Gurman报道，OpenAI确认其智能音箱并非模仿苹果，将采用活动部件使其更显生动。",
    "creator": "Scharon Harding",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI“甜甜圈”AI音箱或于2027年发布",
    "link": "https://www.techrepublic.com/article/news-openai-ai-speaker-chatgpt-hardware-analysis",
    "pubdate": "2026-08-08 01:09:28",
    "contentSnippet": "OpenAI传闻中的智能音箱售价300-400美元，可能于2027年推出，标志着AI向非屏幕设备扩展。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "中国AI生态系统并非如其声称的那样开放",
    "link": "https://www.theguardian.com/technology/2026/aug/07/china-ai-ecosystem-is-not-as-open-as-it-claims-nor-is-any-other-country",
    "pubdate": "2026-08-08 00:56:34",
    "contentSnippet": "回应中国驻英大使文章，读者认为中国AI开放程度需审视，呼吁共享开放标准，英国AI可提供独特路径。",
    "creator": "Guardian Staff",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI请求法官驳回苹果商业秘密诉讼",
    "link": "https://www.techrepublic.com/article/news-openai-dismiss-apple-trade-secrets-lawsuit",
    "pubdate": "2026-08-08 00:41:14",
    "contentSnippet": "OpenAI请求联邦法官驳回苹果提起的商业秘密诉讼，涉及前员工和涉嫌滥用机密硬件信息。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Cloudflare推出面向AI代理的浏览器Kitesurf",
    "link": "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents",
    "pubdate": "2026-08-08 00:16:09",
    "contentSnippet": "Cloudflare发布Kitesurf，一款为AI代理设计的云托管浏览器，比Chromium更省算力，帮助开发者高效构建浏览器AI代理。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "DeepSeek投资宇树科技开发人形机器人AI大脑",
    "link": "https://aibusiness.com/robotics/deepseek-invests-unitree-develop-ai-brain-for-humanoid-bots",
    "pubdate": "2026-08-07 23:18:37",
    "contentSnippet": "DeepSeek投资宇树科技，旨在开发人形机器人的AI大脑，凸显AI模型与机器人日益紧密的联系。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "斯坦福Evo 2 AI模型生成抗大肠杆菌噬菌体",
    "link": "https://www.artificialintelligence-news.com/news/stanford-evo-2-ai-model-generates-phages-against-e-coli",
    "pubdate": "2026-08-07 23:05:03",
    "contentSnippet": "斯坦福研究人员利用Evo 2生成式AI模型合成近300种噬菌体，实验室测试筛选出16种对大肠杆菌有强杀灭作用。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "白宫起草将疫苗与自闭症关联的行政令",
    "link": "https://arstechnica.com/health/2026/08/report-white-house-drafting-executive-order-linking-vaccines-and-autism",
    "pubdate": "2026-08-07 22:41:34",
    "contentSnippet": "据报道，白宫正在起草行政令，将疫苗与自闭症关联，尽管科学证据不支持且存在政治风险。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI如何改变Instagram互动而不取代人性化",
    "link": "https://www.artificialintelligence-news.com/news/how-ai-is-changing-instagram-engagement-without-replacing-the-human-touch",
    "pubdate": "2026-08-07 22:33:59",
    "contentSnippet": "Instagram的AI系统决定用户看到的内容，但AI在增强互动的同时仍需保留人性化元素。",
    "creator": "SEO DIGITAL PROS",
    "source": "AI News",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "提示：更好的AI模型并不足够",
    "link": "https://aibusiness.com/generative-ai/prompt-why-better-ai-models-aren-t-enough",
    "pubdate": "2026-08-07 22:31:38",
    "contentSnippet": "企业AI成功越来越依赖业务流程、上下文、成本管理和运营执行，而不仅仅是模型性能。",
    "creator": "Liz Hughes",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Airbnb称AI加速功能发布并测试新搜索",
    "link": "https://techcrunch.com/2026/08/07/airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-function",
    "pubdate": "2026-08-07 22:22:49",
    "contentSnippet": "Airbnb将推出AI驱动的搜索体验，并称AI帮助其更快地发布新功能。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "科学家用AI创造16种新病毒",
    "link": "https://www.wired.com/story/scientists-used-ai-to-create-16-new-viruses",
    "pubdate": "2026-08-07 22:13:57",
    "contentSnippet": "科学家利用AI系统创造新病毒，为对抗细菌耐药性提供可能，但也引发技术超越监管的担忧。",
    "creator": "Fernanda González",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "审查网络构想如何从边缘走向特朗普政策",
    "link": "https://www.technologyreview.com/2026/08/07/1141105/how-ideas-of-a-vast-censorship-network-moved-from-the-online-fringe-to-trump-policy",
    "pubdate": "2026-08-07 22:00:00",
    "contentSnippet": "文章探讨了大规模审查网络构想如何从网络边缘进入特朗普政府政策，涉及国务院裁员等背景。",
    "creator": "Eileen Guo, Gisela Perez de Acha, Martin Sona",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI聊天机器人未能帮助危机人群，能否修复？",
    "link": "https://arstechnica.com/ai/2026/08/ai-chatbots-have-failed-people-in-crisis-can-that-be-fixed",
    "pubdate": "2026-08-07 21:49:37",
    "contentSnippet": "临床医生和研究人员表示，AI公司需要公开其安全数据以改进聊天机器人在危机中的表现。",
    "creator": "Cyrus Farivar",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "SK海力士考虑重庆工厂30亿美元选项",
    "link": "https://www.bloomberg.com/news/articles/2026-08-07/sk-hynix-is-said-to-mull-options-for-3-billion-chongqing-assets",
    "pubdate": "2026-08-07 21:36:44",
    "contentSnippet": "SK海力士正考虑其重庆工厂的选项，包括引入投资者以加速增长。",
    "creator": "Pei Li and Dong Cao",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "字节跳动训练万亿参数AI模型挑战Anthropic",
    "link": "https://arstechnica.com/ai/2026/08/bytedance-trains-massive-ai-model-in-bid-to-rival-anthropic",
    "pubdate": "2026-08-07 21:29:22",
    "contentSnippet": "TikTok母公司字节跳动正在训练一个拥有10万亿参数的AI模型，以与Anthropic竞争。",
    "creator": "Zijing Wu, Financial Times",
    "source": "Ars Technica",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "白宫审查危险AI的计划保密不透明",
    "link": "https://www.theguardian.com/technology/2026/aug/07/white-house-ai",
    "pubdate": "2026-08-07 21:00:18",
    "contentSnippet": "特朗普政府最终确定AI安全测试框架，但细节保密，仅与少数科技公司分享，引发透明度担忧。",
    "creator": "Nick Robins-Early",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "丹麦高中引入口头答辩防AI作弊",
    "link": "https://www.techrepublic.com/article/news-emea-denmark-ai-cheating-oral-defenses",
    "pubdate": "2026-08-07 20:56:30",
    "contentSnippet": "丹麦高中为遏制AI作弊，增加口头答辩和更严格的考试控制，以验证学生真实水平。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "新奥尔良911接线员改用AI引发担忧",
    "link": "https://futurism.com/artificial-intelligence/ai-dispatch-911-new-orleans-emergency-automation",
    "pubdate": "2026-08-07 20:49:54",
    "contentSnippet": "新奥尔良市911接线员由AI替代，引发公众对紧急服务可靠性的担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  }
];
