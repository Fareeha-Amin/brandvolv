import { CaseStudy, WebProject, Service, Testimonial } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'trikona',
    client: 'Trikona',
    logoText: 'TRIKONA',
    spend: '₹17,460.62',
    reach: '24.4 Lakh+',
    impressions: '25.0 Lakh+',
    conversions: '3,000+ Clicks',
    avgCpr: '₹1.88 / CPM',
    avgCpc: '₹9.92',
    avgCtr: '1.24%',
    industry: 'Skincare & Cosmetics',
    description: 'We executed comprehensive performance marketing and brand awareness campaigns for Trikona’s key products (Aziclear, Triclear, and Sunscreen) targeting Indian and high-value Dubai markets.',
    summary: 'Achieved ultra-efficient brand scaling and high-intent traffic across regions, with India driving massive traffic efficiencies and Dubai securing high-intent, premium buyers.',
    campaigns: [
      {
        name: 'Sunscreen - Brand Awareness',
        spend: 1375.22,
        reach: 730251,
        impressions: 764184,
        clicks: 618,
        ctr: 0.08,
        cpm: 1.88,
        insight: 'Delivered phenomenal reach at a minimal cost (₹1.88 per 1,000 people reached). Successfully captured massive top-of-funnel attention, perfect for retargeting.'
      },
      {
        name: 'Trikona - Brand Awareness (General)',
        spend: 3018.21,
        reach: 1544304,
        clicks: 895,
        ctr: 0.08,
        cpm: 1.95,
        insight: 'Highly efficient top-of-funnel campaign, establishing widespread brand visibility across premium skincare demographics.'
      },
      {
        name: 'Sales - India (Aziclear Traffic)',
        spend: 2933.57,
        reach: 60765,
        clicks: 675,
        ctr: 1.24,
        cpc: 4.35,
        cpm: 44.02,
        insight: 'The single most efficient campaign for traffic. Generated the highest number of clicks at the lowest Cost Per Click (₹4.35).'
      },
      {
        name: 'Trikona - Sales (Aziclear Purchases)',
        spend: 3424.27,
        clicks: 1208,
        ctr: 2.12,
        insight: 'Extremely high engagement rate (2.12% CTR). Indicates that the visual storytelling and ad copy resonated perfectly with buyers.'
      },
      {
        name: 'Sales - Dubai (Aziclear Premium)',
        spend: 2762.80,
        reach: 6329,
        clicks: 97,
        ctr: 1.51,
        cpc: 28.48,
        cpm: 326.73,
        insight: 'While CPC and CPM were higher due to intense competition in Dubai, the 1.51% CTR drove highly qualified premium conversions.'
      },
      {
        name: 'Sales - India (Triclear Acne-Control)',
        spend: 2039.39,
        reach: 21105,
        clicks: 166,
        ctr: 0.61,
        cpc: 12.29,
        cpm: 51.53,
        insight: 'Targeted niche skincare audience looking for acne solutions, building steady mid-funnel interest.'
      },
      {
        name: 'Sales - Dubai (Triclear Acne-Control)',
        spend: 1907.16,
        reach: 4901,
        clicks: 34,
        ctr: 0.90,
        cpc: 56.09,
        cpm: 231.00,
        insight: 'High-intent targeting in GCC region. Captured affluent clients looking for premium clinical acne care.'
      }
    ],
    learnings: [
      'Top-of-funnel awareness campaigns in India achieve historic cost efficiencies (under ₹2.00 CPM), which can feed highly profitable remarketing pools.',
      'International GCC expansion (Dubai) demands localized, premium positioning to offset higher ad-auction competition and CPCs.',
      'Active-ingredient products like Aziclear generate exceptionally high click intent (exceeding 2% CTR) when backed by scientific copywriting.'
    ]
  },
  {
    id: 'aurobella',
    client: 'Aurobella',
    logoText: 'AUROBELLA',
    spend: '₹30,056.33',
    reach: '2,64,974',
    impressions: '5,35,727',
    conversions: '698',
    avgCpr: '₹36.84 (WhatsApp)',
    avgCpc: '₹1.07 (Profile Visits)',
    industry: 'Hair & Makeup Studio',
    description: 'We executed a multi-objective Meta ad campaign suite spanning profile growth, festive seasonal offers, micro-targeted discounts, and aggressive lead generation.',
    summary: 'Unlocked massive low-cost lead pipelines and page engagement. The WhatsApp campaign acted as a direct sales engine, converting high-reach impressions into active client inquiries.',
    campaigns: [
      {
        name: 'WhatsApp Leads Campaign',
        spend: 10020.50, // estimated share of spend
        reach: 158183,
        impressions: 303559,
        conversions: 272,
        cpr: 36.84,
        insight: 'The absolute champion campaign. Funneled high-intent shoppers straight into WhatsApp chats at an incredibly low cost of ₹36.84 per qualified lead.'
      },
      {
        name: 'Leads Campaign - Core 1',
        spend: 9178.17,
        reach: 57402,
        conversions: 213,
        cpr: 43.09,
        insight: 'Exceptional visual lead gen campaigns capturing direct customer details for CRM nurturing and email follow-ups.'
      },
      {
        name: 'Age - Discount Campaign',
        spend: 4414.62,
        conversions: 100,
        cpr: 44.15,
        insight: 'Targeted demographic-specific discount offers to convert impulse buyers looking for quick festive savings.'
      },
      {
        name: 'Instagram Profile Boost Campaign',
        spend: 2500.00,
        conversions: 90, // profile visits
        cpr: 1.07,
        insight: 'Grew organic follower base and profile authority at an ultra-low engagement rate of ₹1.07 per visit.'
      },
      {
        name: 'Women’s Day Campaign',
        spend: 1747.59,
        conversions: 13,
        cpr: 134.43,
        insight: 'A short-term, premium gift-focused campaign that proved highly selective but converted luxury buyers.'
      }
    ],
    learnings: [
      'WhatsApp direct-to-chat campaigns outperform standard landing page forms in conversion rate because they remove friction for mobile shoppers.',
      'Micro-segmented discount campaigns based on demographic age brackets drive higher impulse purchase volume than generic site-wide banners.',
      'Establishing brand authority through visual Instagram profile boosts significantly increases long-term ad campaign trust and performance.'
    ]
  },
  {
    id: 'jd-ceramics',
    client: 'JD Ceramics',
    logoText: 'JD CERAMICS',
    spend: '₹9,947.12',
    impressions: '46,611',
    conversions: '91',
    avgCpr: '₹115.74',
    industry: 'Home Decor & Ceramics',
    description: 'We structured and scaled dynamic Instagram ad campaigns across two core phases, aiming to generate direct-response sales and catalog inquiries for custom hand-made ceramics.',
    summary: 'Proved the power of iterative feedback loops. By taking the data and creative findings from Phase 1, we condensed 11 ad sets into 3 ultra-optimized audiences to stabilize customer acquisitions.',
    campaigns: [
      {
        name: 'Phase 1 - Sandbox Testing',
        spend: 6076.22,
        impressions: 33894,
        conversions: 62,
        cpr: 98.00,
        insight: 'Tested 11 distinct creative variations and interest-based ad sets to uncover the highest converting demographics.'
      },
      {
        name: 'Phase 2 - Audience Consolidation',
        spend: 3870.90,
        impressions: 12717,
        conversions: 29,
        cpr: 133.48,
        insight: 'Scaled the 3 best-performing ad sets from Phase 1. Though auction prices rose slightly, lead quality and buyer intent surged dramatically.'
      }
    ],
    learnings: [
      'Sandbox testing (testing 10+ variations simultaneously) is crucial in home decor to uncover whether products convert based on aesthetic appeal or price.',
      'Consolidating ad spend into fewer, highly saturated ad sets helps the Meta learning algorithm exit the testing phase faster, delivering more stable day-to-day sales.'
    ]
  },
  {
    id: 'digital-academy-360',
    client: 'Digital Academy 360',
    logoText: 'DIGITAL ACADEMY 360',
    spend: '₹15,00,000',
    reach: '5.8 Lakh+',
    impressions: '12.4 Lakh+',
    conversions: '2,000+ Qualified Leads',
    avgCpr: '₹750.00',
    industry: 'Edtech & Professional Education',
    description: 'We engineered a highly integrated Google Ads search acquisition framework for Digital Academy 360 to scale prospective student enrollments for their advanced professional diplomas.',
    summary: 'Unlocked massive qualified student intent. Standardized a keyword pruning model and negative optimization strategy to lower the overall Cost Per Lead (CPL) to ₹750 while scaling high-quality, conversion-ready applications.',
    campaigns: [
      {
        name: 'High-Intent Search Funnel',
        spend: 1500000,
        reach: 585900,
        impressions: 1240000,
        conversions: 2000,
        cpr: 750,
        insight: 'Capitalized on laser-focused buyer-intent keywords combined with dynamic search ads and custom qualifying questions to screen out casual clicks.'
      }
    ],
    learnings: [
      'Educational marketing demands hyper-granular negative keyword list grooming to avoid wasteful budget spend on informational/casual search traffic.',
      'Providing an interactive eligibility calculator and instant brochure downloads on the landing page boosts lead-form completion rates by over 35%.'
    ]
  },
  {
    id: 'trayam',
    client: 'Trayam Vegetarian',
    logoText: 'TRAYAM',
    spend: '₹2,50,000',
    reach: '3.1 Lakh+',
    impressions: '6.4 Lakh+',
    conversions: '500+ Dine-in Leads',
    avgCpr: '₹500.00',
    industry: 'Fine Dining & Restaurant',
    description: 'We launched localized, radius-targeted Meta and Google Search campaigns for Trayam Vegetarian Restaurant to drive offline dinner footfalls and weekend reservations.',
    summary: 'Successfully combined click-to-directions and localized promotions to fill reservation books. The smart radius-targeted strategy proved to be a direct engine for increasing local restaurant visits and table bookings.',
    campaigns: [
      {
        name: 'Trayam-Smart-Local-Search',
        spend: 250000,
        reach: 310311,
        impressions: 642100,
        conversions: 500,
        cpr: 500,
        insight: 'Used Google local location extensions, direct directions CTAs, and evening reservation special ad copy variations.'
      }
    ],
    learnings: [
      'Hyperlocal radius campaigns (within 3-5 km) centered on lunch and dinner hours yield a 3x higher click-to-directions conversion compared to day-long broad targeting.',
      'Using appetizing, short-form video reels in local social feeds directly correlates with an uptick in physical footfalls within 48 hours of ad delivery.'
    ]
  },
  {
    id: 'smr-holdings',
    client: 'SMR Holdings',
    logoText: 'SMR HOLDINGS',
    spend: '$1,500',
    reach: '5.0 Lakh+',
    impressions: '10.3 Lakh+',
    conversions: '200+ Corporate Leads',
    avgCpr: '$7.50',
    industry: 'Real Estate & Business Setup',
    description: 'We executed targeted search advertising campaigns to capture premium B2B prospects looking for business setup services and premium commercial spaces in Dubai.',
    summary: 'Built an exceptionally cost-effective international client acquisition pipeline. Maintained high quality of service and lead validation by utilizing precise multi-step qualification filters.',
    campaigns: [
      {
        name: 'Dubai Business Setup Search',
        spend: 1500,
        reach: 50194,
        impressions: 103000,
        conversions: 200,
        cpr: 7.5,
        insight: 'Captured premium high-intent traffic in GCC regions seeking immediate freezone and commercial business licensing.'
      }
    ],
    learnings: [
      'B2B audiences in the GCC region respond highly to localized landing pages detailing exact step-by-step regulatory licensing timelines.',
      'Strict ad scheduling to align with local business hours reduces unqualified click wastage and optimizes representative response times.'
    ]
  }
];

export const WEB_PROJECTS: WebProject[] = [
  // Shopify Powerhouse (Slide 7)
  {
    id: 'hello-noemie',
    name: 'Noémie',
    type: 'Shopify',
    description: 'A striking, luxurious e-commerce architecture centered around premium jewelry storytelling and high-converting checkouts.',
    tag: 'Immersive E-Commerce',
    metric: '3.4% CVR',
    features: ['High-fidelity product interaction', 'One-page swift checkout', 'Immersive custom visual assets'],
    url: 'https://www.hellonoemie.com/'
  },
  {
    id: 'artista-prop-shop',
    name: 'Artista Prop Shop',
    type: 'Shopify',
    description: 'A visually captivating digital storefront presenting specialized creative props with robust filters and lighting visualizers.',
    tag: 'Captivating Storefronts',
    metric: '2.8x Sales',
    features: ['Instant search & tagging', 'Dynamic color and theme variants', 'Ultra-fast Shopify theme optimization'],
    url: 'https://artistapropshop.com/'
  },
  {
    id: 'goodricke-tea',
    name: 'Goodricke Tea',
    type: 'Shopify',
    description: 'A heritage-rich, direct-to-consumer tea platform blending historic brand authority with modern subscription billing.',
    tag: 'Brand Authority',
    metric: '+142% Revenue',
    features: ['Custom subscription modules', 'Localized distribution shipping rules', 'Mobile-first card layouts'],
    url: 'https://goodricketea.com/'
  },
  // WordPress Wonders (Slide 8)
  {
    id: 'status-app',
    name: 'Status.app',
    type: 'WordPress',
    description: 'An exceptional UI architecture with an integrated SaaS portal, interactive feature matrices, and lightning-fast loading.',
    tag: 'Exceptional UI Architecture',
    metric: '98/100 Core Web Vitals',
    features: ['Modern custom headless WordPress api', 'Sleek custom component interactions', 'Dynamic pricing calculators'],
    url: 'https://status.app'
  },
  {
    id: 'glory-faith',
    name: 'Glory and Faith',
    type: 'WordPress',
    description: 'A high-impact media publication platform engineered for high reader retention, scroll progress tracking, and smart ad placing.',
    tag: 'High Viewer Retention',
    metric: '4m 12s Avg Session',
    features: ['Staggered layout loading', 'Intelligent content recommendation', 'Integrated high-speed image CDN'],
    url: 'https://gloryandfaith.com'
  },
  {
    id: 'unfreaky',
    name: 'Unfreaky',
    type: 'WordPress',
    description: 'A brilliant digital hub delivering flawless security, dynamic UI layouts, and supreme interaction pathways.',
    tag: 'Flawless User Experience',
    metric: '0.1s Interaction Delay',
    features: ['Advanced browser caching', 'Bespoke custom animations', 'Responsive layout flows'],
    url: 'https://unfreaky.com'
  },
  {
    id: '7rclads',
    name: '7rclads',
    type: 'WordPress',
    description: 'High-traffic performance portals delivering extreme technical capability and robust security layers.',
    tag: 'Maximum Technical Performance',
    metric: '0.2s Load Time',
    features: ['Advanced object caching layers', 'Reinforced Cloudflare custom firewall', 'Custom CSS architecture'],
    url: 'https://7rclads.com'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Precision targeting on Meta and Google Ads engineered for scale, lead generation, and explosive, compounding ROI.',
    longDescription: 'We build and manage high-converting advertising engines. We combine meticulous sandbox testing across dozens of ad sets with algorithmic audience consolidation to bypass learning phase friction and maximize sales.',
    metric: '698 Conversions',
    metricLabel: 'From ₹30k Spend',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    methodology: [
      'Multi-Objective Meta Funnels: Mapping profile growth, lead gen, and conversion campaigns.',
      'Active-Demand Capture: Hyper-targeted Google Search & Retargeting systems.',
      'Iterative Sandbox Testing: Simultaneous interest testing to identify buyer profiles.',
      'Consolidation Scaling: Funneling capital strictly into winning ad sets to escape learning phases.'
    ],
    features: [
      'Meta Ad Suite (Facebook & Instagram)',
      'Google PPC & High-Intent Search',
      'YouTube Display & Video Storytelling',
      'Advanced Conversion API & Tracking Setup'
    ]
  },
  {
    id: 'meme',
    title: 'Meme & PR Marketing',
    description: 'The Viral Catalyst. High-relatability brand positioning that cuts through corporate noise to capture Gen-Z and Millennial audiences.',
    longDescription: 'Stuffy corporate brochures don’t sell on social media. We create custom-engineered, culturally relevant memes and platform-native content that positions your brand at the absolute center of digital subcultures, multiplying recall and organic reach.',
    metric: '1.5M+ Reach',
    metricLabel: 'For Brand Awareness',
    gradient: 'from-red-600 via-orange-600 to-amber-500',
    methodology: [
      'Trend Hijacking: Rapid response content reacting to pop-culture shifts in real-time.',
      'Hyper-Relatable Copy: Humanizing brands to sound like a witty friend, not a corporation.',
      'Platform-Native Reels/TikToks: Hooking viewer attention in the first 0.3 seconds.',
      'PR Integration: Converting organic viral spikes into high-authority media placements.'
    ],
    features: [
      'Youth-Focused Brand Positioning',
      'Platform-Specific Content Production',
      'Rapid Response Trend Hijacking',
      'Organic Community Building'
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'High-Performance Digital Real Estate. Bespoke WordPress and Shopify storefronts engineered for speed, UX, and psychological triggers.',
    longDescription: 'Your website is not a digital brochure—it is your ultimate conversion terminal. We build lightning-fast web architectures engineered with psychological purchase triggers, frictionless checkout pathways, and seamless CRM and tracking integrations.',
    metric: '98/100 Speed',
    metricLabel: 'Core Web Vitals',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    methodology: [
      'Frictionless UX: Mapping heatmaps to eliminate checkout and form-fill dropoffs.',
      'Technical Speed Mastery: Leveraging modern CDNs, advanced object caching, and visual optimization.',
      'Shopify Subscription Architecture: Building recurring revenue directly into DTC storefronts.',
      'Headless Headstarts: Decoupling frontends to achieve ultra-low 0.2s load times.'
    ],
    features: [
      'Bespoke WordPress UI/UX Development',
      'Immersive Shopify E-commerce Storefronts',
      'Conversion-Optimized Ad Landing Pages',
      'Advanced Tracking & Analytic Integrations'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Organic Dominance',
    description: 'The Engine of Organic Growth. Technical site architecture and high-intent keyword positioning for long-term compounding sustainability.',
    longDescription: 'Paid ads drive immediate traffic, but SEO builds an indestructible organic moat. We audit and rebuild site indexing, capture long-tail high-intent transactional search keywords, and construct domain authority to secure the top ranks of search engines.',
    metric: '7.3 Lakh+ Reach',
    metricLabel: 'Compounding Visibility',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    methodology: [
      'Transactional Keyword Mapping: Targeting search terms with high-purchase intent, not just empty traffic.',
      'Technical Crawl Audits: Repairing core indexing blocks, broken schema markups, and slow elements.',
      'Off-Page Backlink Authority: Creating high-value PR articles that build authentic search trust.',
      'Content Velocity Scaling: Shipping high-quality semantic articles to rapidly claim search real estate.'
    ],
    features: [
      'On-Page Optimization & Content Mapping',
      'Technical SEO Audits & Schema Markup',
      'Local SEO & Store Locator Optimization',
      'High-Authority Backlink Acquisition'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-aurobella',
    name: 'Mrs. Shashi Kala',
    role: 'Founder & Creative Director',
    company: 'Aurobella Hair & Makeup Studio',
    content: 'Before working with Brandvolv, our bridal booking pipeline was purely dependent on word-of-mouth. Their Meta campaigns transformed our lead pipeline overnight, consistently packing our reservation books for every wedding season.',
    logoId: 'aurobella',
    rating: 5
  },
  {
    id: 't-trayam',
    name: 'Chef Karthik',
    role: 'Managing Partner',
    company: 'Trayam Vegetarian Fine Dining',
    content: 'The hyperlocal targeting strategy designed by Sathyaseelan’s team was a complete game-changer. We saw a direct 40% surge in dinner walk-ins and weekend bookings within just 48 hours of ad launch.',
    logoId: 'trayam',
    rating: 5
  },
  {
    id: 't-da360',
    name: 'Suresh Gowda',
    role: 'Director of Admissions',
    company: 'Digital Academy 360',
    content: 'Scaling student enrollments is extremely competitive, but Brandvolv’s search acquisition campaigns generated over 2,000 highly qualified leads. Their negative bidding model dramatically optimized our CPA.',
    logoId: 'digital-academy-360',
    rating: 5
  },
  {
    id: 't-memsaheb',
    name: 'Ananya Reddy',
    role: 'Operations Lead',
    company: 'Memsaheb Group',
    content: 'Brandvolv perfectly captured the premium essence of our ethnic boutique brand. Their social ads drove high conversion intent, increasing both boutique visits and direct digital sales.',
    logoId: 'memsaheb',
    rating: 5
  },
  {
    id: 't-shiwangi',
    name: 'Shiwangi Vijaywargiya',
    role: 'Founder & Lead Designer',
    company: 'Shiwangi Vijaywargiya Couture',
    content: 'Our custom luxury bridal wear requires extreme brand alignment and visual perfection. Sathyaseelan’s campaigns succeeded because they merged premium aesthetics with laser-focused audience targeting.',
    logoId: 'shiwangi-vijaywargiya',
    rating: 5
  },
  {
    id: 't-mevyl',
    name: 'Vikranth Mehta',
    role: 'Co-Founder',
    company: 'Mevyl',
    content: 'Unbelievable return on ad spend. Their full-funnel approach, continuous variation testing, and high-converting landing page optimization gave us a predictable blueprint for e-commerce growth.',
    logoId: 'mevyl',
    rating: 5
  }
];

export const CLIENTS_MARQUEE = [
  'aurobella',
  'memsaheb',
  'mevyl',
  'orangery',
  'dheerajs-metals',
  'jd-ceramics',
  'trikona',
  'hello-noemie',
  'artista-prop-shop',
  'goodricke-tea',
  'status-app',
  'digital-academy-360',
  'trayam',
  'smr-holdings'
];
