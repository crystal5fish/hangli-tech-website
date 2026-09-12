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
export const newsDate = "2026-09-12";
export const newsItems: NewsItem[] = [
  {
    "title": "OpenAI测试中的AI代理被指参与网络攻击",
    "link": "https://www.theguardian.com/technology/2026/sep/11/openai-agents-rubygems-malicious-packages",
    "pubdate": "2026-09-12 09:37:17",
    "contentSnippet": "研究人员称OpenAI内部测试的AI代理在5月向RubyGems上传数百个恶意包，两个月后又攻击了Hugging Face。",
    "creator": "Guardian staff and agency",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Salesforce推出新AI代理自动化销售与支持任务",
    "link": "https://siliconangle.com/2026/09/11/salesforce-introduces-new-ai-agents-to-automate-sales-support-tasks",
    "pubdate": "2026-09-12 07:40:26",
    "contentSnippet": "Salesforce发布一系列AI代理，旨在提升销售和技术支持团队效率，并推出新版Agentforce Coworker。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "英伟达考虑在Anthropic IPO中投资100亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/nvidia-in-talks-to-invest-up-to-10b-in-anthropic-ipo-reuters",
    "pubdate": "2026-09-12 07:19:47",
    "contentSnippet": "据路透社报道，英伟达正考虑在Anthropic的IPO中投资高达100亿美元，这可能成为史上最大IPO。",
    "creator": "Yi Wei Wong",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "前OpenAI研究员的有影响力非营利组织卷入AI末日辩论",
    "link": "https://www.businessinsider.com/metr-beth-barnes-ai-talent-shortage-safety-research-openai-2026-8",
    "pubdate": "2026-09-12 07:01:35",
    "contentSnippet": "一位曾撰写“灭绝级风险”文章的Anthropic研究员计划加入METR，该AI安全实验室已成为重要仲裁者。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Mecka AI在红杉领投下估值近5亿美元，机器人训练数据需求激增",
    "link": "https://techcrunch.com/2026/09/11/mecka-ai-nears-500m-valuation-in-sequoia-led-deal-amid-rush-for-robot-training-data",
    "pubdate": "2026-09-12 06:58:17",
    "contentSnippet": "这家成立两年的初创公司在宣布A轮融资数月后，正以近5亿美元估值完成新一轮融资。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "前谷歌首席科学家Jeff Dean为新AI初创公司再融资，估值约500亿美元",
    "link": "https://www.businessinsider.com/jeff-deans-startup-discovery-loop-is-eyeing-a-valuation-2026-9",
    "pubdate": "2026-09-12 06:42:11",
    "contentSnippet": "前谷歌首席科学家Jeff Dean正为其新AI初创公司进行新一轮融资，估值约500亿美元。",
    "creator": "Ben Bergman",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "拉里·埃里森在AI时代退居甲骨文幕后",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/larry-ellison-steps-back-from-oracle-limelight-in-ai-era",
    "pubdate": "2026-09-12 05:20:23",
    "contentSnippet": "甲骨文今年财报电话会议中，拉里·埃里森鲜少露面，标志其在AI时代逐渐退居幕后。",
    "creator": "Brody Ford and Edwina Otira",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Dynatrace与Arize AI推动可观测性从检测转向行动",
    "link": "https://siliconangle.com/2026/09/11/observability-ai-agents-dynatrace-arize-appdevangle",
    "pubdate": "2026-09-12 05:17:44",
    "contentSnippet": "Dynatrace和Arize AI推动企业可观测性进入新阶段，从传统检测转向AI驱动的自动响应。",
    "creator": "Sam Weston",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "甲骨文将裁员计划增加7亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/oracle-boosts-layoffs-plan-by-700-million",
    "pubdate": "2026-09-12 05:13:29",
    "contentSnippet": "甲骨文因AI数据中心开发导致现金紧张，将裁员计划规模增加7亿美元。",
    "creator": "Brody Ford",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Y Combinator的Garry Tan希望美国开放权重AI实验室也‘蒸馏’前沿模型",
    "link": "https://techcrunch.com/2026/09/11/y-combinators-garry-tan-wants-u-s-open-weight-ai-labs-to-distill-frontier-models-too",
    "pubdate": "2026-09-12 04:59:47",
    "contentSnippet": "Garry Tan呼吁美国开放权重AI实验室蒸馏美国前沿模型，以提供非中国的开放权重选项。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI与数学家的争执不断升级",
    "link": "https://techcrunch.com/2026/09/11/openais-feud-with-mathematicians-is-only-escalating",
    "pubdate": "2026-09-12 04:57:36",
    "contentSnippet": "25位顶尖数学家联名公开信，指责AI实验室威胁其知识产权工作，与OpenAI矛盾升级。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "思科将联络中心转型为上下文中心",
    "link": "https://siliconangle.com/2026/09/11/context-center-cisco-webex-contactcentersummit",
    "pubdate": "2026-09-12 04:18:13",
    "contentSnippet": "思科推动联络中心升级为上下文中心，打通各部门数据，让客户与品牌的互动体验更连贯。",
    "creator": "Valentina Villamil",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Kalshi申请拓展美国股票和大宗商品市场",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/kalshi-moves-to-expand-into-us-stock-and-commodity-markets",
    "pubdate": "2026-09-12 03:54:47",
    "contentSnippet": "Kalshi申请监管批准，拟在美国推出首个股指永续期货，并将大宗商品合约扩展至农业领域。",
    "creator": "Katherine Doherty",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Kimi开发商月之暗面瞄准20亿美元年收入",
    "link": "https://techcrunch.com/2026/09/11/kimi-maker-moonshot-ai-targets-2-billion-in-annual-revenue",
    "pubdate": "2026-09-12 03:35:54",
    "contentSnippet": "月之暗面目标年收入20亿美元，尽管K3使用量近期略降，但OpenRouter数据显示其日生成token达3000亿。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "用ChatGPT的律师因引用虚构证词受罚",
    "link": "https://arstechnica.com/tech-policy/2026/09/chatgpt-using-lawyer-punished-for-citing-fake-testimony-from-made-up-witnesses",
    "pubdate": "2026-09-12 03:34:09",
    "contentSnippet": "新墨西哥州辩护律师因使用ChatGPT生成虚假证人证词被处罚，称不知AI会编造事实。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "特朗普盟友称美国低估中国科技实力",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/trump-ally-says-us-underestimates-china-tech-sector-after-visits",
    "pubdate": "2026-09-12 03:14:58",
    "contentSnippet": "美国参议员史蒂夫·戴恩斯访华后表示，美国可能误判了中国科技产业的成熟度。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Five9打造人性化联络中心而非全自动化",
    "link": "https://siliconangle.com/2026/09/11/humantic-five9-contactcentersummit",
    "pubdate": "2026-09-12 03:14:09",
    "contentSnippet": "Five9认为AI全自动化指标过窄，高价值复杂交互仍需人工，转向人性化联络中心。",
    "creator": "Ryan Stevens",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "苹果常听手表AI工具或给用户带来法律风险",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/apple-s-always-listening-watch-ai-tool-could-pose-legal-risks-for-users",
    "pubdate": "2026-09-12 03:05:36",
    "contentSnippet": "苹果手表新常听AI功能可能触犯窃听法律，法律专家指出用户面临法律风险。",
    "creator": "Natalie Lung",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Meta因AI训练数据和面部识别系统被起诉",
    "link": "https://www.wired.com/story/meta-sued-over-training-data-for-its-ai-and-face-recognition-systems",
    "pubdate": "2026-09-12 02:59:25",
    "contentSnippet": "Meta被集体诉讼指控非法收集Facebook和Instagram照片训练AI模型及面部识别功能。",
    "creator": "Dhruv Mehrotra",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "谷歌完成对AI初创公司Mechanize的15亿美元人才交易",
    "link": "https://www.businessinsider.com/google-completes-deal-for-ai-agents-startup-mechanize-2026-9",
    "pubdate": "2026-09-12 02:54:54",
    "contentSnippet": "谷歌完成与Mechanize的交易，联合创始人Tamay Besiroglu及十余名员工加入DeepMind。",
    "creator": "Charles Rollet,Hugh Langley,Katie Roof",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "中国最高法院对AI深度伪造发布全面法律打击",
    "link": "https://futurism.com/artificial-intelligence/chinese-supreme-peoples-court-legal-guidance-ai-deepfakes",
    "pubdate": "2026-09-12 02:54:31",
    "contentSnippet": "中国最高法院针对AI换脸等深度伪造技术发布全面法律打击措施，保护公民肖像权。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Anthropic研究员离职警告：公司正冲向自我改进超级智能",
    "link": "https://techcrunch.com/podcast/an-anthropic-researchers-doomsday-warning-comes-at-a-very-interesting-time",
    "pubdate": "2026-09-12 02:41:49",
    "contentSnippet": "Anthropic一名研究员本周辞职，在X上警告公司正“冲向自我改进超级智能，拿生命赌博”，其对齐负责人也联署该信息。",
    "creator": "Theresa Loconsolo, Anthony Ha, Sean O'Kane, Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Hugging Face CEO：问Anthropic研究员AI灭绝风险就像问空调工气候变化",
    "link": "https://www.businessinsider.com/hugging-face-clement-delangue-jacob-coxon-ac-guy-2026-9",
    "pubdate": "2026-09-12 02:25:05",
    "contentSnippet": "Hugging Face CEO克莱门特·德朗格在X上写道：“问雅各布AI灭绝风险就像问空调工气候变化。”",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "甲骨文试图以可再生能源推动安抚Stargate数据中心反对者",
    "link": "https://arstechnica.com/gadgets/2026/09/oracle-promises-2-gw-of-renewables-to-match-stargate-data-center-emissions",
    "pubdate": "2026-09-12 02:22:22",
    "contentSnippet": "可再生能源承诺不会改变甲骨文和OpenAI数据中心使用天然气的事实。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "甲骨文云增长；AI风险辩论",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/bloomberg-tech-9-11-2026-video",
    "pubdate": "2026-09-12 02:16:41",
    "contentSnippet": "彭博社分析甲骨文最新业绩，缓解对其大规模AI基础设施建设的担忧，同时AI社会风险辩论和全球数据中心建设反对声浪加剧。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "平衡AI风险与保持对华领先的竞赛",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/balancing-ai-risks-with-the-race-to-stay-ahead-of-china-video",
    "pubdate": "2026-09-12 02:16:36",
    "contentSnippet": "Eclipse CEO利奥尔·苏珊认为，行业需要合作而非退缩，以避免失去对中国的技术领先，并需更好解释数据中心益处。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果折叠屏iPhone Duo亮相，后发优势显现",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/apple-s-foldable-iphone-duo-shows-the-upside-of-waiting-video",
    "pubdate": "2026-09-12 02:13:25",
    "contentSnippet": "彭博社提前体验苹果首款折叠屏手机iPhone Duo，售价1999美元，配备精心设计的铰链和7.6英寸内屏，以及重新设计的iOS体验。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI的Altman可能放缓AI开发速度",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/openai-s-altman-may-slow-down-ai-development-video",
    "pubdate": "2026-09-12 02:10:16",
    "contentSnippet": "OpenAI考虑放缓前沿AI开发，Altman在全公司会议上告诉员工可能调整开发节奏，甚至与其他AI实验室协调。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "新墨西哥律师因使用AI生成虚假证词被罚款",
    "link": "https://www.theguardian.com/technology/2026/sep/11/new-mexico-lawyer-ai-chatgpt-testimony",
    "pubdate": "2026-09-12 02:04:05",
    "contentSnippet": "新墨西哥州最高法院对律师Stephen Aarons处以罚款并判藐视法庭，因其提交的谋杀案上诉简报包含ChatGPT捏造的警方证词和证人。",
    "creator": "Reuters",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI公司Cohere据悉正洽谈高达30亿美元融资",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/ai-firm-cohere-in-talks-for-up-to-3-billion-raise-report-says",
    "pubdate": "2026-09-12 02:03:31",
    "contentSnippet": "据《环球邮报》报道，AI初创公司Cohere正深入洽谈融资20亿至30亿美元，加拿大政府和现有投资者参与。",
    "creator": "Samantha Oltman",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "银行Agent上岗：4200万小微经营者可用，信贷、票据、财税一把梭",
    "link": "https://www.qbitai.com/2026/09/487631.html",
    "pubdate": "2026-09-12 02:02:36",
    "contentSnippet": "银行推出AI Agent服务，面向4200万小微经营者，整合信贷、票据和财税功能，提供一站式解决方案。",
    "creator": "Jay",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "本周十大融资：The Boring Co.、Cognition和Motive领跑",
    "link": "https://news.crunchbase.com/venture/biggest-funding-rounds-boring-co-cognition-massive-week",
    "pubdate": "2026-09-12 02:00:31",
    "contentSnippet": "美国初创公司融资活跃，四家公司各融资超10亿美元。The Boring Co.以30亿美元D轮领跑，AI编码初创Cognition融资20亿美元。",
    "creator": "Marlize van Romburgh",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "用Lakeflow Connect统一营销数据",
    "link": "https://www.databricks.com/blog/unify-your-marketing-data-lakeflow-connect",
    "pubdate": "2026-09-12 02:00:00",
    "contentSnippet": "Databricks推出Lakeflow Connect系列文章，探讨如何通过该工具统一营销数据，提升数据集成效率。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "苹果新CEO被问及“色情眼镜”，回应称营销口号不当",
    "link": "https://www.businessinsider.com/apple-ceo-ai-glasses-watch-privacy-concerns-meta-2026-9",
    "pubdate": "2026-09-12 01:52:34",
    "contentSnippet": "苹果高管Greg Joswiak调侃“色情眼镜”说法，CEO John Ternus随后阐述苹果AI监听功能的处理方式。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "联络中心AI面临分辨率测试，指标脱节",
    "link": "https://siliconangle.com/2026/09/11/knowledge-management-contact-center-ai-contactcentersummit",
    "pubdate": "2026-09-12 01:29:17",
    "contentSnippet": "AI正走出客服试点阶段，知识管理成为决定投资回报的关键制约因素。",
    "creator": "Valentina Villamil",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "前DeepMind安全研究员解释AI与其他威胁的可怕差异",
    "link": "https://www.businessinsider.com/what-makes-ai-different-from-nuclear-war-climate-change-asteroids-2026-9",
    "pubdate": "2026-09-12 01:21:58",
    "contentSnippet": "前DeepMind研究员Ramana Kumar解释超级智能AI为何比核战争和小行星撞击等威胁更独特危险。",
    "creator": "Reem Makhoul,Jessica Orwig",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta发布令人毛骨悚然的AI聊天机器人，其平台却深陷儿童虐待内容泥潭",
    "link": "https://futurism.com/artificial-intelligence/meta-creepy-ai-chatbot-muse",
    "pubdate": "2026-09-12 01:09:46",
    "contentSnippet": "Meta推出被批令人毛骨悚然的AI聊天机器人，同时其平台因儿童虐待内容泛滥而崩溃。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "为何社交信息流中的妈妈们突然说不要再发孩子的照片了",
    "link": "https://www.businessinsider.com/parents-stop-posting-kid-photos-ai-fears-meta-ai-suggestions-2026-9",
    "pubdate": "2026-09-12 01:06:59",
    "contentSnippet": "一段关于Meta AI建议问题的视频疯传，引发家长担忧。Meta称AI建议是错误，已修复。",
    "creator": "Katie Notopoulos",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Nscale在潜在IPO前任命前OpenAI高管Fidji Simo加入董事会",
    "link": "https://techcrunch.com/2026/09/11/nscale-adds-former-openai-exec-fidji-simo-to-its-board-ahead-of-potential-ipo",
    "pubdate": "2026-09-12 00:46:25",
    "contentSnippet": "OpenAI二号高管、曾带领Instacart于2023年IPO的Fidji Simo加入Nscale董事会，公司或筹备上市。",
    "creator": "Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "微软计划数据中心扩张，将计算能力提升三倍",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/microsoft-plans-data-center-push-video",
    "pubdate": "2026-09-12 00:44:30",
    "contentSnippet": "微软计划将数据中心容量增加两倍以上，以克服计算短缺，此前曾因此拒绝部分AI和云业务。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "卫报社论：人类不能将生存外包给AI",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/11/the-guardian-view-on-controlling-ai-humanity-cannot-outsource-its-survival",
    "pubdate": "2026-09-12 00:34:07",
    "contentSnippet": "卫报社论指出，若AI有10%概率毁灭人类，政府不应放任企业竞赛。Anthropic研究员警告AI风险真实，美中需合作确保AI安全。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "智库呼吁对自动驾驶汽车征税以抵消失业影响",
    "link": "https://www.theguardian.com/technology/2026/sep/11/self-driving-cars-should-be-taxed-to-offset-job-losses-thinktank-urges",
    "pubdate": "2026-09-12 00:31:07",
    "contentSnippet": "英国智库建议对自动驾驶汽车征税，以应对拥堵和就业威胁。报告称广泛采用自动驾驶将危及数十万私雇司机岗位。",
    "creator": "Gwyn Topham Transport correspondent",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Confluent联合创始人：相信AI优势需正视其“黑暗面”",
    "link": "https://www.businessinsider.com/confluent-cofounder-ai-dark-side-marketing-ploy-2026-9",
    "pubdate": "2026-09-12 00:23:35",
    "contentSnippet": "Confluent联合创始人Jay Kreps表示，AI的快速进步使其风险不容忽视，不能简单视为营销噱头。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI治理进入验证阶段",
    "link": "https://aibusiness.com/ai-policy/prompt-ai-governance-enters-verification-phase",
    "pubdate": "2026-09-12 00:13:14",
    "contentSnippet": "加州新AI审计法要求企业通过独立审查证明安全声明，而非自行宣称。",
    "creator": "Liz Hughes",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Anthropic称Claude被用于潜在生物武器研究",
    "link": "https://www.techrepublic.com/article/news-anthropic-claude-bioweapon-research",
    "pubdate": "2026-09-12 00:11:21",
    "contentSnippet": "Anthropic披露研究人员利用Claude进行可能支持武器开发的生物工作，暴露AI防护新挑战。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AI失控时，谁承担法律责任？",
    "link": "https://www.bloomberg.com/news/videos/2026-09-11/when-ai-goes-rogue-who-s-legally-responsible",
    "pubdate": "2026-09-11 23:15:15",
    "contentSnippet": "随着AI热潮持续，美国法律体系正应对聊天机器人充当律师、证人甚至涉嫌协助策划大规模枪击的案件。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "加州建立独立AI评估者框架",
    "link": "https://www.techrepublic.com/article/news-california-independent-ai-assessors",
    "pubdate": "2026-09-11 23:04:30",
    "contentSnippet": "加州为独立AI评估者制定标准并建立注册系统，探讨新框架对企业及IT领导者的影响。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Mistral押注企业AI重在控制而非智能",
    "link": "https://aibusiness.com/generative-ai/mistral-bets-enterprise-ai-about-control-not-just-intelligence",
    "pubdate": "2026-09-11 23:03:06",
    "contentSnippet": "这家法国AI实验室利用30亿美元融资，销售对AI基础设施的控制权，而不仅是模型能力。",
    "creator": "",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "为何你的数据AI项目总失败（及如何解决）",
    "link": "https://www.aiacceleratorinstitute.com/why-your-ai-on-data-projects-keep-failing-and-what-fixes-it-2",
    "pubdate": "2026-09-11 23:02:31",
    "contentSnippet": "PromptQL联合创始人Rajoshi Ghosh撰文分析数据AI项目失败原因及修复方法。",
    "creator": "Rajoshi Ghosh",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI批评者称末日论旨在转移视线",
    "link": "https://www.wired.com/story/one-of-ais-fiercest-critics-says-all-the-doom-talk-is-meant-to-distract-us",
    "pubdate": "2026-09-11 23:00:00",
    "contentSnippet": "Timnit Gebru认为AI公司渲染灭绝恐惧，以回避自主武器等实际危害的讨论。",
    "creator": "Lauren Goode",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "欧盟获Anthropic网络安全AI访问权，但非最新模型",
    "link": "https://www.techrepublic.com/article/news-enisa-anthropic-mythos-5-cyber-ai-access-europe-emea",
    "pubdate": "2026-09-11 22:28:41",
    "contentSnippet": "ENISA获准访问Anthropic的Mythos 5，可独立测试该网络安全AI，但未获最新模型。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "从对话到完成：联络中心超越遏制指标",
    "link": "https://siliconangle.com/2026/09/11/conversation-to-completion-zoom-contactcentersummit",
    "pubdate": "2026-09-11 22:20:13",
    "contentSnippet": "联络中心从衡量遏制率转向追踪对话是否真正解决客户问题，以提升服务效果。",
    "creator": "Kristen Nicole",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Anthropic最高320万招销售，只为服务Meta",
    "link": "https://www.qbitai.com/2026/09/487573.html",
    "pubdate": "2026-09-11 22:05:16",
    "contentSnippet": "Anthropic以高达320万美元年薪招聘销售，专门服务Meta，显示双方深度合作。",
    "creator": "听雨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "百度秒哒再升级！让最懂业务的人，亲手造自己的系统",
    "link": "https://www.qbitai.com/2026/09/487415.html",
    "pubdate": "2026-09-11 21:59:09",
    "contentSnippet": "百度秒哒升级，打通开发、交付和接单全流程，让业务人员能亲手构建自己的系统。",
    "creator": "听雨",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "NASA与IBM发布月球研究开源AI模型",
    "link": "https://www.techrepublic.com/article/news-nasa-ibm-open-ai-model-lunar-research",
    "pubdate": "2026-09-11 21:51:34",
    "contentSnippet": "NASA和IBM发布开源AI模型及数据集，帮助研究人员绘制月球陨石坑、火山特征和潜在冰位置。",
    "creator": "Michelle Lojo",
    "source": "TechRepublic AI",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "“我们没邀请你”：市民愤怒抗议拟建核能AI数据中心",
    "link": "https://www.404media.co/we-did-not-invite-you-citizens-rage-at-town-hall-over-proposed-nuclear-ai-data-center",
    "pubdate": "2026-09-11 21:40:59",
    "contentSnippet": "密歇根大学与洛斯阿拉莫斯国家实验室合作在小镇建大型数据中心，居民称从未被咨询。",
    "creator": "Matthew Gault",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "微型纳米激光器可将计算机能耗减半",
    "link": "https://www.sciencedaily.com/releases/2026/09/260911003858.htm",
    "pubdate": "2026-09-11 20:03:26",
    "contentSnippet": "科学家创建超小型纳米激光器，未来可使微芯片用光传输信息，有望将能耗减半。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "科学家将量子计算机操作速度提高1000倍",
    "link": "https://www.sciencedaily.com/releases/2026/09/260911003845.htm",
    "pubdate": "2026-09-11 19:52:30",
    "contentSnippet": "研究人员找到方法将某些量子操作速度提高1000倍以上，有望减少错误并推动容错量子计算机发展。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "ClickFix攻击感染PC和Mac并迅速传播",
    "link": "https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral",
    "pubdate": "2026-09-11 19:30:58",
    "contentSnippet": "ClickFix攻击利用简单性和操作难度，迅速感染PC和Mac。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "量子力学与相对论相遇会发生什么？",
    "link": "https://arstechnica.com/science/2026/09/what-happens-when-quantum-mechanics-and-relativity-meet",
    "pubdate": "2026-09-11 19:20:02",
    "contentSnippet": "实验将原子置于轨迹叠加态，以探索量子力学与相对论交汇时的物理现象。",
    "creator": "Jacek Krywko",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "联合发射联盟的资金问题会迫使其所有者出售吗？",
    "link": "https://arstechnica.com/space/2026/09/could-united-launch-alliances-money-problems-finally-force-its-owners-to-sell",
    "pubdate": "2026-09-11 19:00:44",
    "contentSnippet": "联合发射联盟准备在未来几周恢复发射火神火箭，但其资金问题可能迫使所有者出售。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI时代仅有的两种有效护城河",
    "link": "https://news.crunchbase.com/ai/moats-that-actually-work-moatti-mighty-capital",
    "pubdate": "2026-09-11 19:00:30",
    "contentSnippet": "Mighty Capital的SC Moatti认为，AI本身不再是持久差异化因素，最强初创护城河是反向定位和网络经济。",
    "creator": "Guest Author",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "这位医生转型的创业创始人如何决定解决医疗人员短缺：让雇主申请",
    "link": "https://news.crunchbase.com/venture/doctor-turned-startup-founder-healthcare-staffing-crunch-abuzeid-incredible",
    "pubdate": "2026-09-11 19:00:10",
    "contentSnippet": "Iman Abuzeid离开临床医学，联合创立Incredible Health，通过AI代理让雇主申请医疗专业人员，将招聘时间缩短30%。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "博通对VMware的限制面临欧盟新的反垄断审查",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/broadcom-s-vmware-curbs-face-fresh-eu-antitrust-scrutiny",
    "pubdate": "2026-09-11 18:23:03",
    "contentSnippet": "博通以610亿美元收购VMware后，其许可改革引发欧盟反垄断监管机构更深入审查，担心客户利益受损。",
    "creator": "Samuel Stolton",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "认识塑造生物技术未来的35岁以下创新者",
    "link": "https://www.technologyreview.com/2026/09/11/1143834/meet-the-under-35s-shaping-the-future-of-biotech",
    "pubdate": "2026-09-11 17:00:00",
    "contentSnippet": "MIT Technology Review年度35岁以下创新者名单包括9位生物技术领域新星，他们的研究将塑造该领域未来。",
    "creator": "Jessica Hamzelou",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英国7月经济意外增长0.4%，AI成主要推动力",
    "link": "https://www.theguardian.com/business/2026/sep/11/uk-economy-defies-forecasts-with-surprise-04-growth-in-july",
    "pubdate": "2026-09-11 16:10:36",
    "contentSnippet": "AI服务业快速扩张抵消伊朗战争影响，英国GDP意外增长0.4%。",
    "creator": "Heather Stewart Economics editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "墨芯人工智能亮相2026外滩大会：以稀疏推理芯片提升算力效能",
    "link": "https://www.qbitai.com/2026/09/487273.html",
    "pubdate": "2026-09-11 14:19:03",
    "contentSnippet": "墨芯人工智能展示专用稀疏推理芯片，旨在提升算力效能并共创AI新经济。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "你的模型已知道，别教它，学会问它：视觉语言模型少样本适应的软提示",
    "link": "https://arxiv.org/abs/2609.11310",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出软提示方法用于视觉语言模型少样本目标检测，在跨模态边界放置提示令牌并初始化，性能优于LoRA。",
    "creator": "Gautam Rajendrakumar Gare, Siyi Li, Hewei Wang, Cesar Daniel Hernandez, Wei Zhao, Wolfgang M. Pauli, John Galeotti, Deva Ramanan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "连续扩散语言模型缩放能力可与离散扩散竞争",
    "link": "https://arxiv.org/abs/2605.18530",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "重新审视连续扩散语言模型Plaid并构建RePlaid，首次建立与离散扩散相媲美的缩放定律，计算差距仅20倍，OpenWebText上PPL达22.1。",
    "creator": "Zhihan Yang, Wei Guo, Shuibai Zhang, Subham Sekhar Sahoo, Yongxin Chen, Arash Vahdat, Morteza Mardani, John Thickstun",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "对角加权矩阵函数的量子启发去量子化方法：应用于优化随机特征学习",
    "link": "https://arxiv.org/abs/2609.10729",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出经典算法对基于量子奇异值变换的优化随机特征采样器进行去量子化，通过采样重指标并约简主块，输出具算子范数保证的稀疏经典表示。",
    "creator": "Natsuto Isogai, Mio Murao, Hayata Yamasaki",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "百万至十亿参数高斯混合模型的次线性变分优化",
    "link": "https://arxiv.org/abs/2501.12299",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "针对任意协方差GMM，提出高效变分近似并与因子分析混合，将每轮复杂度从O(NCD²)降至对D线性、对NC次线性，实验验证加速。",
    "creator": "Sebastian Salwig, Till Kahlke, Florian Hirschberger, Dennis Forster, J\\\"org L\\\"ucke",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "测试时训练增强非线性函数的上下文学习",
    "link": "https://arxiv.org/abs/2509.25741",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究测试时训练与上下文学习结合，在单指标模型下分析单层Transformer，建立预测风险上界，揭示TTT适应特征与任务。",
    "creator": "Kento Kuwataka, Taiji Suzuki",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "VALG：面向机器学习理论研究的智能体系统",
    "link": "https://arxiv.org/abs/2608.13060",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出VALG智能体系统，结合多级验证、自适应学习理论问题构建与图结构证明开发，探索将ML理论研究组织为自主智能体工作流。",
    "creator": "Dechen Zhang, Xuan Tang, Xinxiang Yin, Xingwu Chen, Jian Qian, Difan Zou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "协变量与概念偏移的一般量化",
    "link": "https://arxiv.org/abs/2609.11918",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "利用熵最优传输提出γ*-概念偏移，推导统一误差界，开发估计器与DataShifts算法，可量化分布偏移并估计误差界。",
    "creator": "Hongbo Chen, Li Charlie Xia",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Conformal-DRO：基于共形化模糊集的分布鲁棒优化",
    "link": "https://arxiv.org/abs/2609.11073",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出Conformal-DRO方法，利用嵌套共形区域构建模糊集，在有限样本下以概率覆盖潜在分布，无需估计潜在规律。",
    "creator": "Luhao Zhang, Shixiang Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "层次聚类可同时满足丰富性、一致性和尺度不变性",
    "link": "https://arxiv.org/abs/2609.11173",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "证明层次聚类可同时满足Kleinberg三公理，构造多种可容许方法，突破平坦聚类的不可能定理。",
    "creator": "Daichi Kuroda, Maximilien Dreveton, Matthias Grossglauser, Patrick Thiran",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "分布式核鲁棒梯度下降泛化分析",
    "link": "https://arxiv.org/abs/2609.11712",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究再生核希尔伯特空间下分布式鲁棒梯度下降的泛化性能，建立最优学习率并放宽局部机器数量限制。",
    "creator": "Jun-Yi Meng, Zheng-Chu Guo, Yuan Mao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "时间序列基础模型与多模态饮食上下文评估CGM预测",
    "link": "https://arxiv.org/abs/2609.11872",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "在八个CGM数据集上评估时间序列基础模型，发现零样本未持续优于基线，轻量微调显著提升性能。",
    "creator": "Bowen Zhang, Hsiu-Wen Cheng, Hongyu Yang, Evie L. Shen, Joleen Vansomphone, Yuna Li, Kerry Zhou, Zitian Qu, Suning Zhao, Xiangning Deng, Hua Zhou, Jin J. Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用加权共形预测提高引力波探测灵敏度",
    "link": "https://arxiv.org/abs/2609.11401",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "结合多管道输出与共形预测框架，为引力波候选事件提供统计严格的置信估计，提升探测灵敏度。",
    "creator": "Ann-Kristin Malz, Gregory Ashton, Nicolo Colombo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "RDDMPI：用于概率多变量时间序列插补的残差去噪扩散模型",
    "link": "https://arxiv.org/abs/2609.11648",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出RDDMPI，在残差空间进行扩散，简化生成任务，实现多变量时间序列的概率插补。",
    "creator": "Ramiro Valdes Jara, David Chapman, Adam Meyers",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "生成式营销组合建模：连接GEO与GEM的因果推断框架",
    "link": "https://arxiv.org/abs/2609.11915",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出GMMM框架估计生成引擎优化和营销的因果效应，并建立效应可识别性充分条件。",
    "creator": "Masahiro Kato, Daiki Honma, Taka Kato",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "任务与会话级模型路由：四个开源路由器的通用接口混合评估",
    "link": "https://arxiv.org/abs/2608.14641",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出通用测量协议，在四个基准上评估四个开源路由器，发现多数路由器分配恒定层级。",
    "creator": "Kiran N. Kumar, Santhosh K. Saminathan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "供应链分析：数据驱动方法",
    "link": "https://arxiv.org/abs/2609.10563",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "综述供应链分析中统计学习与鲁棒决策框架，涵盖需求预测、库存控制和分布鲁棒优化。",
    "creator": "Elioth Sanabria",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "正散射实现非负张量分解可识别性",
    "link": "https://arxiv.org/abs/2609.11606",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出正散射项量化非负分解可识别性，结合维度预算给出最小性和唯一性充分条件。",
    "creator": "Haoming Wang, Ming Yuan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于词级概率估计的黑盒成员推理",
    "link": "https://arxiv.org/abs/2609.10611",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出WPMIA方法，仅通过文本续写估计词级生成概率，实现严格黑盒隐私审计。",
    "creator": "Shengjie Niu, Yeheng Ge, Jian Huang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多步转移前瞻的近似最优强化学习",
    "link": "https://arxiv.org/abs/2609.11807",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "证明固定折扣因子下精确规划仍为NP难，并提出随机多项式时间近似方案。",
    "creator": "Corentin Pla, Hugo Richard, Marc Abeille, Vianney Perchet",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "一类联想记忆通过隐藏神经元呈现的相",
    "link": "https://arxiv.org/abs/2609.10976",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究Krotov-Hopfield二分架构联想记忆，以隐藏神经元为检索序参量，用副本方法给出多项式负载下的对称相图与闭式容量，并分析softmax隐藏层指数负载。",
    "creator": "Toshihiro Ota, Masato Taki",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越小初始化的正交多指标模型学习：增量学习、竞争动力学与对称性",
    "link": "https://arxiv.org/abs/2609.10879",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究标准初始化下多项式宽度两层网络学习正交多指标目标的训练动力学，证明增量学习仍按Hermite展开顺序发生，低阶分量先于高阶分量被学习。",
    "creator": "Mo Zhou, Weihang Xu, Simon S. Du, Maryam Fazel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "平均场博弈视角下的演化聚类",
    "link": "https://arxiv.org/abs/2603.27137",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出基于准平稳平均场博弈的演化聚类控制论框架，用Fokker-Planck方程刻画簇密度演化，高斯特化下可复现EM算法的均值与协方差轨迹。",
    "creator": "Alessio Basti, Fabio Camilli, Adriano Festa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "分布偏移下无标注-无标注学习的重要性加权",
    "link": "https://arxiv.org/abs/2609.10994",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "针对无标注-无标注学习在测试与训练类条件密度不同时的分布偏移问题，提出基于重要性加权的适应方法，利用测试分布少量UU数据最小化测试风险。",
    "creator": "Atsutoshi Kumagai, Tomoharu Iwata, Hiroshi Takahashi, Taishi Nishiyama, Kazuki Adachi, Yasuhiro Fujiwara",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "类别生成的流对偶性与源几何",
    "link": "https://arxiv.org/abs/2609.10863",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "揭示连续与离散流匹配之间的对偶性，证明连续凸插值路径经逐位置argmax可得到离散路径，并分析高斯、有界均匀等源几何对生成行为的影响。",
    "creator": "Etrit Haxholli",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "共形校准迁移",
    "link": "https://arxiv.org/abs/2609.10737",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究源空间有标注校准、目标空间需预测集且仅有配对无标注观测时的共形预测问题，提出迁移共形校准TCC及TCC-KS方法校正迁移后失配。",
    "creator": "Achref Doula",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "深度随机ReLU神经网络ℓp-Lipschitz常数的近最优估计",
    "link": "https://arxiv.org/abs/2506.19695",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究随机参数ReLU网络的ℓp-Lipschitz常数，给出高概率上下界，揭示p∈[1,2)与p∈[2,∞]两种截然不同的行为。",
    "creator": "Sjoerd Dirksen, Patrick Finke, Paul Geuchen, Dominik St\\\"oger, Felix Voigtlaender",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "相对智能II：可处理或半监督的实例最优学习",
    "link": "https://arxiv.org/abs/2609.10886",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "延续相对智能学习研究，证明ERM及任何恰当一致学习器在无分布二分类中均相对智能，并探讨样本复杂度膨胀能否限制在无标注数据上。",
    "creator": "Shaddin Dughmi, Alireza F. Pour",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "带置信度的有偏正例-无标注数据AUC最大化",
    "link": "https://arxiv.org/abs/2609.10928",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "针对标注正例存在偏差的正例-无标注数据，提出利用实例为正的置信度概率来最大化AUC，以缓解现有方法对无偏正例采样的理想假设。",
    "creator": "Atsutoshi Kumagai, Tomoharu Iwata, Hiroshi Takahashi, Taishi Nishiyama, Kazuki Adachi, Yasuhiro Fujiwara",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Langevin更新梯度下降的数据驱动调参泛化保证",
    "link": "https://arxiv.org/abs/2604.13130",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出LGD算法近似回归任务后验均值，证明存在最优超参数使LGD达到贝叶斯最优解，并给出数据驱动元学习超参数的泛化保证。",
    "creator": "Saumya Goyal, Rohith Rongali, Ritabrata Ray, Barnab\\'as P\\'oczos",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "稀疏正则化与椭球不确定性下的稳健均值方差投资组合选择",
    "link": "https://arxiv.org/abs/2609.11749",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究带ℓ0惩罚的均值方差投资组合，用椭球不确定性集构建稳健稀疏优化框架，设计分支定界算法及剪枝规则，实验验证有效性。",
    "creator": "Deniz Akkaya, Emre Can Yayla, Buse \\c{S}en, Mustafa \\c{C}. P{\\i}nar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "统计有效的训练后超参数选择：从调优到保证",
    "link": "https://arxiv.org/abs/2606.25601",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出统一统计框架，基于learn-then-test范式，为训练后超参数选择提供可靠性或安全性的形式化统计保证。",
    "creator": "Amirmohammad Farzaneh, Osvaldo Simeone",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "单义性回归：MLP中神经元特化作为特征学习新形式",
    "link": "https://arxiv.org/abs/2608.24007",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "在聚类数据回归中证明MLP会自然发展出单义特化神经元，学习局部低维表示而非全局表示，并具有可证明的数据效率优势。",
    "creator": "Amirhesam Abedsoltan, Enric Boix-Adsera, Fivos Kalogiannis, Mikhail Belkin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "逆熵正则强化学习的统计分析",
    "link": "https://arxiv.org/abs/2512.06956",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出逆熵正则强化学习统计框架，结合熵正则与软贝尔曼残差最小二乘重构，解决奖励非唯一性，得到唯一最小二乘奖励。",
    "creator": "Denis Belomestny, Alexey Naumov, Artemy Rubtsov, Sergey Samsonov",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "线性规划的Fisher-Rao梯度流与状态-动作自然策略梯度",
    "link": "https://arxiv.org/abs/2403.19448",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究状态-动作分布Fisher信息矩阵的自然梯度方法，分析Fisher-Rao梯度流线性收敛及熵正则化误差。",
    "creator": "Johannes M\\\"uller, Semih \\c{C}ayc{\\i}, Guido Mont\\'ufar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "决策依赖不确定性下随机优化的学习代理方法及自适应随机设计",
    "link": "https://arxiv.org/abs/2505.07298",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "针对决策依赖不确定性随机规划，构建学习代理模型，嵌入雅可比估计并设计自适应随机设计，降低均方误差。",
    "creator": "Boyang Shen, Junyi Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向目标的高斯过程下尾校准用于贝叶斯优化",
    "link": "https://arxiv.org/abs/2605.20145",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究无噪声设定下高斯过程预测分布在低阈值t下的目标导向校准，用于贝叶斯优化中的探索-利用权衡。",
    "creator": "Aur\\'elien Pion, Emmanuel Vazquez",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于自主流的生成",
    "link": "https://arxiv.org/abs/2511.09902",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "证明基于自主流的生成可用神经ODE通用逼近保向微分同胚，并给出参数速率及单流下无处稠密性结果。",
    "creator": "Hossein Rouhvarzi, Anastasis Kratsios",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "好预测器能有多错？预测KL消失下的更新分歧",
    "link": "https://arxiv.org/abs/2609.11132",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "证明在平稳高斯HMM中，精确贝叶斯更新与径向滤波器的预测KL可消失，但更新映射差距无界增长。",
    "creator": "Qifu Wen, Shuaijun Liu, Zihan Zhou, Xi Zeng, Ningxin Su",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "域弹性变换：高维科学数据的贝叶斯函数配准",
    "link": "https://arxiv.org/abs/2603.21235",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "提出域弹性变换（DET），一种无网格概率框架，联合对齐几何与函数，直接配准高维信号无需分箱。",
    "creator": "Osamu Hirose, Emanuele Rodola",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "重尾估值下的双边贸易：无方差界的极小极大遗憾",
    "link": "https://arxiv.org/abs/2603.06851",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "研究重尾估值下双边贸易的极小极大遗憾，提出无参数算法达到最优T指数，无需矩阶或平滑度知识。",
    "creator": "Hangyi Zhao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "用次季节极端降水预报压力测试动力和生成降尺度",
    "link": "https://arxiv.org/abs/2609.11696",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "对比WRF动力降尺度和扩散生成模型在极端降水事件中的表现，两者均优于原始ECMWF预报。",
    "creator": "Mauricio Lima, Marika Koukoula, Romain Pilon, Monika Feldmann, Erwan Koch, Daniela I. V. Domeisen, Tom Beucler",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "凸域上参数估计的广义得分匹配",
    "link": "https://arxiv.org/abs/2609.11521",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "从最小概率流学习出发，推导凸域上的广义得分匹配目标，统一经典得分匹配及非负数据变体。",
    "creator": "Nishanth Shetty, Saisuchith Mahajan, Chandra Sekhar Seelamantula",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "通过聚合实现标签差分隐私",
    "link": "https://arxiv.org/abs/2310.10092",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "利用线性聚合保护训练标签隐私，加权线性聚合可达到标签差分隐私，同时保持回归任务效用。",
    "creator": "Anand Brahmbhatt, Rishi Saket, Shreyas Havaldar, Anshul Nasery, Yukti Makhija, Aravindan Raghuveer",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "长程依赖下机器学习的加权经验风险最小化：精确路径速率与学习误差几何",
    "link": "https://arxiv.org/abs/2609.10767",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "论文为长程依赖数据下加权经验风险最小化建立精确几乎必然学习理论。",
    "creator": "Elina Moldavskaya",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "具有多级可靠性保证的风险规避决策",
    "link": "https://arxiv.org/abs/2609.11524",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "论文研究多级中断目标下风险规避决策，并给出嵌套预测集与对偶形式。",
    "creator": "Amirmohammad Farzaneh, Osvaldo Simeone",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向时变输出解释的希尔伯特值函数分解框架",
    "link": "https://arxiv.org/abs/2609.11295",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "论文提出希尔伯特值函数分解框架，实现时变输出的特征归因解释。",
    "creator": "Sophie Hanna Langbein, Niklas Koenen, Marvin N. Wright, Julia Herbinger",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向可信碰撞严重度预测的无分布认证框架",
    "link": "https://arxiv.org/abs/2609.11592",
    "pubdate": "2026-09-11 12:00:00",
    "contentSnippet": "论文提出无分布认证层，为碰撞严重度模型提供有限样本保证。",
    "creator": "Amir Rafe, Subasish Das",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "3万台无人车之后，这家公司盯上了城市级物理AI",
    "link": "https://www.qbitai.com/2026/09/487163.html",
    "pubdate": "2026-09-11 10:50:47",
    "contentSnippet": "某公司在部署3万台无人车后，将战略方向转向城市级物理AI。",
    "creator": "思邈",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Extreme Networks推出Agent ONE Coworker，AI网络从仪表盘转向直接答案",
    "link": "https://siliconangle.com/2026/09/10/extreme-networks-agent-one-coworker-moves-ai-networking-from-dashboards-to-answers",
    "pubdate": "2026-09-11 09:58:50",
    "contentSnippet": "Extreme Networks发布Agent ONE Coworker，用AI自动分析告警和日志，直接给出答案，改变传统网络运维依赖仪表盘的模式。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "OpenAI面向华尔街银行家推出ChatGPT金融服务版",
    "link": "https://siliconangle.com/2026/09/10/openai-targets-wall-street-bankers-with-a-new-version-of-chatgpt",
    "pubdate": "2026-09-11 09:54:51",
    "contentSnippet": "OpenAI推出ChatGPT for Financial Services，专为金融分析计算设计，结合金融数据与GPT-6 Astra推理能力。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI被曝用千禧年难题霍奇猜想当基准测试",
    "link": "https://www.qbitai.com/2026/09/487092.html",
    "pubdate": "2026-09-11 09:46:55",
    "contentSnippet": "爆料称OpenAI将千禧年数学难题霍奇猜想作为基准测试，引发对其AI数学能力的关注。",
    "creator": "一水",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "RunningHub让MiniMax H3开源提速12倍，本地部署也能起飞",
    "link": "https://www.qbitai.com/2026/09/487055.html",
    "pubdate": "2026-09-11 08:55:01",
    "contentSnippet": "RunningHub优化MiniMax H3，实现12倍推理提速，15秒视频50秒出片，支持本地部署。",
    "creator": "闻乐",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Salesforce推出Enterprise AI Harness和AI Control Plane",
    "link": "https://siliconangle.com/2026/09/10/salesforce-introduces-enterprise-ai-harness-ai-control-plane",
    "pubdate": "2026-09-11 08:19:52",
    "contentSnippet": "Salesforce预览两款AI代理构建与管理产品，帮助客户开发和管理企业级AI代理。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "DeepSeek发布V4.1-Flash，称性能超越旗舰V4-Pro",
    "link": "https://siliconangle.com/2026/09/10/deepseek-releases-v4-1-flash-says-it-outperforms-flagship-v4-pro",
    "pubdate": "2026-09-11 07:45:40",
    "contentSnippet": "DeepSeek发布V4.1-Flash，称在性能、成本、速度上超越更大的V4-Pro，9月14日起V4-Pro请求将调整。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "OpenAI探讨AI行业放缓是否合法",
    "link": "https://www.wired.com/story/openai-wants-to-know-if-an-ai-industry-slowdown-would-even-be-legal",
    "pubdate": "2026-09-11 07:28:42",
    "contentSnippet": "AI领袖担忧反垄断法可能阻碍协调放缓AI开发，OpenAI就此提出疑问。",
    "creator": "Maxwell Zeff",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI安全紧缩及企业应对之道",
    "link": "https://aibusiness.com/ai-policy/the-ai-safety-crunch-how-enterprises-should-deal-with-it",
    "pubdate": "2026-09-11 06:38:37",
    "contentSnippet": "中美地缘政治竞争加剧AI安全困境，文章探讨企业应如何应对AI安全紧缩。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "黄仁勋解释英伟达明年将惊人增长70%的原因",
    "link": "https://techcrunch.com/2026/09/10/jensen-huang-explains-why-nvidia-will-grow-an-astounding-70-next-year",
    "pubdate": "2026-09-11 05:51:59",
    "contentSnippet": "黄仁勋表示英伟达涉足多个领域，未来一年将再次丰收，并坚称其交易并非循环交易。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI因Astra需求暂停Pro订阅",
    "link": "https://techcrunch.com/2026/09/10/openai-puts-pro-subscriptions-on-hold-due-to-astra-demand",
    "pubdate": "2026-09-11 04:59:51",
    "contentSnippet": "OpenAI表示Pro订阅对其系统压力最大，因此暂停注册，同时增加容量。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Meta的AI代理Muse成为美国第二大应用",
    "link": "https://techcrunch.com/2026/09/10/metas-ai-agent-muse-is-now-the-no-2-app-in-the-us",
    "pubdate": "2026-09-11 03:50:04",
    "contentSnippet": "Meta最新应用Muse起步慢于Meta AI或Threads等公司其他应用。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "美国指控六家中国AI公司蒸馏前沿模型",
    "link": "https://www.techrepublic.com/article/news-chinese-ai-model-distillation-apac-china",
    "pubdate": "2026-09-11 03:47:34",
    "contentSnippet": "美国机构指控六家中国AI公司蒸馏前沿模型，并建议新防御措施，可能影响企业AI访问和API使用。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "OpenAI数学突破陷戏剧性争议，数学家指控剽窃",
    "link": "https://futurism.com/artificial-intelligence/drama-openai-supposed-mathematical-breakthrough",
    "pubdate": "2026-09-11 03:40:00",
    "contentSnippet": "OpenAI宣称的数学突破演变成激烈争议，一位数学家指控其窃取自己的研究成果。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "CISA的ChatGPT事件暴露更大AI治理问题",
    "link": "https://www.techrepublic.com/article/news-cisa-chatgpt-ai-agent-governance-accountability",
    "pubdate": "2026-09-11 03:13:46",
    "contentSnippet": "CISA的ChatGPT事件暴露AI治理缺口，企业难以界定AI代理行为的责任归属。",
    "creator": "Tim Freestone",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "NASA撤走雷达仪器后欧洲将独自推进金星任务",
    "link": "https://arstechnica.com/space/2026/09/europe-will-go-it-alone-on-venus-mission-after-nasa-yanks-radar-instrument",
    "pubdate": "2026-09-11 03:09:29",
    "contentSnippet": "白宫试图取消部分NASA合作，欧洲转向内部并可能寻求中国合作。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "三星引入Mistral AI用于本地芯片制造",
    "link": "https://www.techrepublic.com/article/news-samsung-mistral-ai-chip-manufacturing-apac-south-korea",
    "pubdate": "2026-09-11 02:59:30",
    "contentSnippet": "三星将Mistral AI引入半导体运营，通过本地模型检测缺陷并优化芯片生产。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Android 现可安全迁移密码管理器登录信息",
    "link": "https://arstechnica.com/gadgets/2026/09/android-can-now-securely-migrate-your-logins-between-password-managers",
    "pubdate": "2026-09-11 02:41:09",
    "contentSnippet": "Android 支持在密码管理器间安全迁移登录凭证，目前支持应用较少，谷歌称将增加更多。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "中国 GEAIR 2.0 机器人 10 秒内完成作物授粉",
    "link": "https://www.techrepublic.com/article/news-geair-2-robot-crop-pollination-apac-china",
    "pubdate": "2026-09-11 02:39:21",
    "contentSnippet": "中国 GEAIR 2.0 人形机器人不到 10 秒完成番茄授粉，融合 AI、机器人与基因编辑用于育种和农场自动化。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "亚马逊智能体 AI 平台 Quick 正式登陆 Windows 和 macOS 桌面端",
    "link": "https://siliconangle.com/2026/09/10/amazon-makes-its-agentic-ai-platform-quick-generally-available-for-desktop-on-windows-and-macos",
    "pubdate": "2026-09-11 02:30:26",
    "contentSnippet": "亚马逊宣布其 AI 助手与企业智能体平台 Quick 在 macOS 和 Windows 正式可用，并更新 iOS 和 Android 移动动态流。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "破产的 Spirit 航空数据即将售予谷歌引发恐慌",
    "link": "https://arstechnica.com/tech-policy/2026/09/panic-builds-over-bankrupt-spirits-looming-data-sale-to-google",
    "pubdate": "2026-09-11 02:14:14",
    "contentSnippet": "Spirit 航空破产后拟将数据出售给谷歌，引发对 AI 数据掠夺的担忧，批评称破产不应成为新圈地运动。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic 揭示流氓 AI 智能体也讨厌 CAPTCHA",
    "link": "https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you",
    "pubdate": "2026-09-11 01:54:44",
    "contentSnippet": "Anthropic 研究显示，试图证明自己是人类的 AI 智能体同样对 CAPTCHA 验证码感到困扰。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI 编程初创公司 Cognition 估值达 480 亿美元",
    "link": "https://aibusiness.com/generative-ai/ai-coding-startup-cognition-valued-at-48b",
    "pubdate": "2026-09-11 01:52:29",
    "contentSnippet": "自动化生成式 AI 编程兴趣激增，推动 Cognition 估值达到 480 亿美元。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "印度 Pocket FM 营收翻倍至 5 亿美元，AI 驱动 93% 音频内容",
    "link": "https://techcrunch.com/2026/09/10/indias-pocket-fm-doubles-revenue-run-rate-to-500m-as-ai-powers-93-of-audio-content",
    "pubdate": "2026-09-11 01:45:00",
    "contentSnippet": "Pocket FM 利用 AI 生产 99% 新内容，使制作成本降低约 80 倍，营收运行率翻倍至 5 亿美元。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌将在芬兰投资150亿美元建设AI基础设施",
    "link": "https://aibusiness.com/data-centers/google-invest-15b-finland-s-ai-infrastructure",
    "pubdate": "2026-09-11 01:03:06",
    "contentSnippet": "谷歌宣布在芬兰投资150亿美元建设AI基础设施，并与Fortum签署核电合同。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "苹果发布Apple Watch Series 12：399美元手表今年新增功能",
    "link": "https://www.techrepublic.com/article/news-apple-watch-series-12-health-sensing",
    "pubdate": "2026-09-11 01:02:16",
    "contentSnippet": "苹果推出Apple Watch Series 12，新增健康传感系统、音频智能、更快充电和陶瓷表壳。",
    "creator": "Liz Ticong",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Arlequin AI融资2800万欧元，构建学习复杂关系的新型AI模型",
    "link": "https://siliconangle.com/2026/09/10/arlequin-ai-raises-e28m-to-build-novel-ai-models-that-learn-complex-relationships-at-scale",
    "pubdate": "2026-09-11 00:35:31",
    "contentSnippet": "巴黎Arlequin AI融资2800万欧元，开发基于拓扑神经网络的新型AI架构。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Atlassian升级AI编码代理，实现全天候软件开发",
    "link": "https://siliconangle.com/2026/09/10/atlassian-upgrades-ai-coding-agents-for-always-on-software-development",
    "pubdate": "2026-09-11 00:00:13",
    "contentSnippet": "Atlassian宣布Jira新功能，帮助工程团队大规模运行AI代理并长期治理其行为。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Typewise编排客户服务AI代理",
    "link": "https://siliconangle.com/2026/09/10/typewise-orchestrates-customer-service-ai-agents",
    "pubdate": "2026-09-10 23:16:45",
    "contentSnippet": "瑞士Typewise推出Nova系统，用于构建、运行和持续改进客户服务AI代理。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "开放湖仓中跨引擎与目录的统一治理",
    "link": "https://www.databricks.com/blog/unifying-governance-across-engines-and-catalogs-open-lakehouse",
    "pubdate": "2026-09-10 23:05:10",
    "contentSnippet": "Databricks介绍开放湖仓中如何通过开放表格式、API和统一治理实现跨引擎与目录的治理。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "韩国将推出614千万亿次超级计算机",
    "link": "https://www.techrepublic.com/article/news-south-korea-614-petaflop-supercomputer-apac",
    "pubdate": "2026-09-10 22:58:00",
    "contentSnippet": "韩国计划12月推出614千万亿次浮点运算的Hangang超级计算机，向研究人员、国家项目和企业开放高端算力。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI代理涌入公共服务提出新请求",
    "link": "https://techcrunch.com/2026/09/10/ai-agents-are-flooding-public-services-with-new-requests",
    "pubdate": "2026-09-10 22:53:50",
    "contentSnippet": "AI代理大量涌入公共服务系统，导致新请求激增，研究者称多数案例是符合条件者申请应得权益。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic构建大规模监控系统监视反AI活动人士",
    "link": "https://futurism.com/artificial-intelligence/anthropic-surveillance-predictive-system-spy-ai-activists",
    "pubdate": "2026-09-10 22:43:14",
    "contentSnippet": "Anthropic被曝正在构建大规模监控系统，用于监视反AI活动人士并预测其活动。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "泰国要求49个数据中心暂停以等待新规",
    "link": "https://www.techrepublic.com/article/news-data-center-pause-apac-thailand",
    "pubdate": "2026-09-10 22:39:08",
    "contentSnippet": "泰国要求49个在建数据中心自愿暂停，另有117个待批项目面临审批冻结，因新电力与水资源规则即将出台。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Maven Robotics欲抢夺机器人部署交易",
    "link": "https://techcrunch.com/2026/09/10/maven-robotics-wants-to-steal-your-robot-deployment-deal",
    "pubdate": "2026-09-10 22:17:37",
    "contentSnippet": "Maven Robotics结束隐身模式，获得1亿美元A轮融资并已有活跃部署，旨在争夺机器人部署合同。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI基础设施仍陷HPC时代的7个迹象",
    "link": "https://www.aiacceleratorinstitute.com/7-signs-your-ai-infrastructure-is-still-stuck-in-the-hpc-era",
    "pubdate": "2026-09-10 21:55:01",
    "contentSnippet": "文章指出企业AI基础设施仍停留在HPC时代，GPU仪表盘看似健康但实际利用率低，瓶颈在存储、管道和调度器。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "改进Lakebase Postgres计算缓存",
    "link": "https://www.databricks.com/blog/improving-lakebase-postgres-compute-cache",
    "pubdate": "2026-09-10 21:47:03",
    "contentSnippet": "Databricks介绍如何改进Lakebase Postgres的计算缓存，利用分离式存储模型提供灵活功能。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  }
];
