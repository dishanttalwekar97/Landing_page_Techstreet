/**
 * Trading Techstreet — Enhanced Central Content Repository (Industry-Level Pro Edition)
 * Founder: Akhand Pratap Singh
 * Brand: Trading Techstreet
 * Tone: Educational, disciplined, confidence-building. Never get-rich-quick.
 */

export const BRAND_INFO = {
  name: 'Trading Techstreet',
  founder: 'Akhand Pratap Singh',
  founderTitle: 'Professional Trader & Trading Educator',
  experience: '5+ Years Active Market Experience',
  studentsTaught: '5,000+',
  youtubeSubscribers: '950K+',
  youtubeViews: '28M+',
  videosCount: '500+',
  awardsCount: '3+ Excellence Awards',
  tagline: 'Master the Markets. Trade With Confidence.',
  subheadline: 'Institutional-grade price action, scalping strategies, and risk discipline engineered for serious traders navigating Equities, F&O, Crypto, and Forex.'
};

export const TICKER_ITEMS = [
  { symbol: 'NIFTY 50', price: '24,840.60', change: '+0.85%', isPositive: true, category: 'Index' },
  { symbol: 'BANKNIFTY', price: '51,320.15', change: '+1.12%', isPositive: true, category: 'Index' },
  { symbol: 'XAU/USD (Gold)', price: '$2,485.40', change: '+0.42%', isPositive: true, category: 'Commodity' },
  { symbol: 'BTC/USDT', price: '$64,250.00', change: '+2.15%', isPositive: true, category: 'Crypto' },
  { symbol: 'EUR/USD', price: '1.0924', change: '-0.18%', isPositive: false, category: 'Forex' },
  { symbol: 'CRUDE OIL', price: '$76.80', change: '-0.65%', isPositive: false, category: 'Commodity' },
  { symbol: 'S&P 500', price: '5,540.20', change: '+0.68%', isPositive: true, category: 'Global' },
  { symbol: 'ETH/USDT', price: '$2,780.50', change: '+1.94%', isPositive: true, category: 'Crypto' }
];

export const TRUST_METRICS = [
  {
    id: 'yt-community',
    value: 950,
    suffix: 'K+',
    label: 'YouTube Community',
    subtext: 'Active market learners & subscribers',
    icon: 'Youtube'
  },
  {
    id: 'students',
    value: 5000,
    suffix: '+',
    label: 'Students Mentored',
    subtext: 'Graduated through live cohorts',
    icon: 'GraduationCap'
  },
  {
    id: 'experience',
    value: 5,
    suffix: '+',
    label: 'Years Market Experience',
    subtext: 'Full-time trader & educator',
    icon: 'TrendingUp'
  },
  {
    id: 'videos',
    value: 500,
    suffix: '+',
    label: 'Educational Lessons',
    subtext: 'Free in-depth technical breakdowns',
    icon: 'Video'
  }
];

export const ABOUT_CONTENT = {
  heading: 'Learn Trading From Experience.',
  badge: 'Our Core Philosophy',
  paragraph1:
    'Trading Techstreet is founded on a singular principle: sustainable market profitability is not about predicting the future — it is about executing high-probability setups with uncompromising risk management and emotional discipline. We dismantle the noise of complex lagging indicators and teach you how to read the raw heartbeat of price action.',
  paragraph2:
    'Whether your focus is intraday Scalping on 1-minute charts, positional Price Action in equities, options hedging, or decoding Institutional Smart Money Footprints, our curriculum provides a clear, rule-based execution roadmap engineered to safeguard your capital while cultivating an unshakeable trader mindset.',
  pillars: [
    {
      title: 'Structured Progression',
      desc: 'Linear mastery roadmap from market microstructure to multi-timeframe strategy execution.',
      icon: 'Layers',
      highlight: 'Zero Gaps'
    },
    {
      title: 'Raw Price Action',
      desc: 'Read pure candlestick dynamics, institutional order flow, and genuine liquidity sweeps without indicator clutter.',
      icon: 'CandlestickChart',
      highlight: 'Pure Structure'
    },
    {
      title: 'Mathematical Risk Control',
      desc: 'Position sizing algorithms, capital preservation guardrails, and asymmetric 1:2+ risk-to-reward setups.',
      icon: 'ShieldCheck',
      highlight: 'Capital First'
    },
    {
      title: 'Psychological Mastery',
      desc: 'Systematic frameworks to eliminate fear, greed, FOMO, and catastrophic revenge trading.',
      icon: 'Brain',
      highlight: 'Mindset Edge'
    }
  ]
};

export const COURSES_CATEGORIES = ['All Programs', 'Price Action', 'Options (F&O)', 'Institutional SMC', 'Forex & Crypto'];

export const COURSES_DATA = [
  {
    id: 'price-action',
    title: 'Price Action Trading Masterclass',
    category: 'Price Action',
    level: 'Comprehensive',
    difficulty: 75,
    duration: '18+ Hours • 32 Modules',
    description: 'Master raw market structure, price momentum, key supply-demand zones, and high-probability candlestick confirmations without lagging indicators.',
    tags: ['Market Structure', 'Support & Resistance', 'Candlestick Patterns', 'Breakouts'],
    icon: 'TrendingUp',
    features: ['32 Video Modules', 'Live Chart Exercises', 'Cheat Sheet PDF', 'Certificate of Completion'],
    curriculum: [
      'Anatomy of Price Action & Candlestick Dynamics',
      'Identifying Institutional Support and Resistance Zones',
      'Trend Identification, Higher Highs/Lows & Transition Phases',
      'Breakout vs False Breakout (Liquidity Traps)',
      'Multi-Timeframe Confluence Framework',
      'Trade Journaling & Execution Checklist'
    ]
  },
  {
    id: 'scalping',
    title: 'Precision Scalping Framework',
    category: 'Price Action',
    level: 'Intermediate to Pro',
    difficulty: 85,
    duration: '12+ Hours • 24 Modules',
    description: 'High-speed intraday trading concepts, 1-minute to 5-minute setups, fast order execution, and strict tick-level risk containment rules.',
    tags: ['1-Min Setups', 'Momentum Bursts', 'Fast Execution', 'Tight Risk'],
    icon: 'Zap',
    features: ['24 Strategy Modules', 'VWAP Setups', 'Tick Risk Guide', 'Live Scalping Replays'],
    curriculum: [
      'High-Speed Scalping Rules & Market Conditions',
      'VWAP & Micro Level Reversal Setups',
      'Managing Execution Slippage & Spread Optimization',
      'Daily Target & Maximum Loss Guardrails',
      'Psychological Speed & Trade Exit Discipline'
    ]
  },
  {
    id: 'options-trading',
    title: 'Options Trading & Derivatives',
    category: 'Options (F&O)',
    level: 'All Levels',
    difficulty: 80,
    duration: '20+ Hours • 36 Modules',
    description: 'Master option chain dynamics, Option Greeks (Delta, Theta, Vega), directional buying strategies, and risk-defined option selling models.',
    tags: ['Option Chain', 'Greeks', 'Buying & Selling', 'Hedging'],
    icon: 'Layers',
    features: ['36 In-depth Modules', 'Greeks Calculator', 'Hedging Blueprints', 'OI Analysis Guide'],
    curriculum: [
      'Options Terminology, ITM/ATM/OTM Analysis',
      'The Option Greeks: Delta, Gamma, Theta Decay, Vega',
      'Option Buying vs Option Selling Setups',
      'Open Interest (OI) & PCR Market Trend Analysis',
      'Non-Directional Spreads & Risk-Defined Hedging'
    ]
  },
  {
    id: 'smart-money-concepts',
    title: 'Smart Money Concepts (SMC)',
    category: 'Institutional SMC',
    level: 'Advanced',
    difficulty: 90,
    duration: '16+ Hours • 28 Modules',
    description: 'Decode how institutional liquidity operates. Master Fair Value Gaps (FVG), Order Blocks, liquidity sweeps, and premium/discount market equilibrium.',
    tags: ['Liquidity Sweeps', 'Order Blocks', 'FVG', 'Inducement'],
    icon: 'Target',
    features: ['28 Advanced Modules', 'Order Block Templates', 'FVG Identification', 'Institutional Case Studies'],
    curriculum: [
      'Internal vs External Liquidity Framework',
      'Fair Value Gaps (FVG) and Imbalance Fill Rules',
      'Breaker Blocks, Mitigation Blocks, & Order Flow',
      'Identifying Institutional Manipulation (Judas Swing)',
      'High-Timeframe Bias to Low-Timeframe Entry Sniper'
    ]
  },
  {
    id: 'crypto-trading',
    title: 'Crypto Market Dynamics & Trading',
    category: 'Forex & Crypto',
    level: 'Intermediate',
    difficulty: 70,
    duration: '14+ Hours • 22 Modules',
    description: 'Navigate 24/7 high-volatility crypto markets with proven technical setups, funding rate analysis, leverage guardrails, and risk protocols.',
    tags: ['24/7 Volatility', 'Funding Rates', 'Leverage Discipline', 'BTC & ETH'],
    icon: 'Coins',
    features: ['22 Modules', 'Funding Rate Strategy', 'Leverage Safeguards', 'Altcoin Setups'],
    curriculum: [
      'Crypto Market Dynamics & Bitcoin Dominance Cycles',
      'Perpetual Futures vs Spot Trading Mechanics',
      'Funding Rates & Open Interest Interpretations',
      'Strict Leverage Limits & Capital Protection',
      'Exchange Security & Risk Allocation'
    ]
  },
  {
    id: 'forex-and-gold',
    title: 'Forex & Gold (XAUUSD) Mastery',
    category: 'Forex & Crypto',
    level: 'All Levels',
    difficulty: 75,
    duration: '15+ Hours • 26 Modules',
    description: 'Fundamentals of trading major currency pairs and Gold (XAUUSD). Learn session timing (London/NY overlap), DXY correlation, and news volatility trading.',
    tags: ['XAUUSD', 'London/NY Session', 'DXY Correlation', 'Macro News'],
    icon: 'Compass',
    features: ['26 Modules', 'Session Overlap Map', 'XAUUSD Volatility Model', 'Economic Calendar Playbook'],
    curriculum: [
      'Forex Session Timings & High-Liquidity Windows',
      'Gold (XAUUSD) Volatility & Intraday Traps',
      'Understanding US Dollar Index (DXY) Correlation',
      'Economic Calendar Risk Management (NFP, CPI, FOMC)',
      'Risk Calculation for Multi-Currency Portfolios'
    ]
  }
];

export const YOUTUBE_VIDEOS = [
  {
    id: 'yt-1',
    title: 'Complete Price Action Masterclass: Support, Resistance & Market Structure',
    duration: '34:18',
    views: '1.4M views',
    topic: 'Price Action',
    badge: 'Flagship Masterclass',
    summary: 'A deep dive into reading raw price charts without indicators, understanding trend reversals, and spotting high-probability support/resistance breaks.',
    altText: 'Akhand Pratap Singh Price Action Masterclass Video Thumbnail'
  },
  {
    id: 'yt-2',
    title: 'Scalping Strategy That Actually Works: 1-Minute Chart Framework',
    duration: '22:45',
    views: '890K views',
    topic: 'Scalping',
    badge: 'High-Speed Setup',
    summary: 'Step-by-step breakdown of high-speed intraday scalping setups, entry triggers, stop-loss placement, and emotional trade management.',
    altText: 'Scalping Strategy 1-Minute Framework Video Thumbnail'
  },
  {
    id: 'yt-3',
    title: 'Smart Money Concepts Explained: How Institutions Hunt Liquidity',
    duration: '28:12',
    views: '1.1M views',
    topic: 'Smart Money Concepts',
    badge: 'Institutional Flow',
    summary: 'Learn why retail breakout traders often get trapped and how to spot institutional order blocks and liquidity sweeps before entering.',
    altText: 'Smart Money Concepts and Liquidity Hunting Thumbnail'
  },
  {
    id: 'yt-4',
    title: 'Options Trading for Beginners: Greeks, Buying vs Selling, Strike Selection',
    duration: '41:05',
    views: '940K views',
    topic: 'Options Trading',
    badge: 'F&O Deep Dive',
    summary: 'Clear foundational guide to Option Greeks, calculating risk-reward on calls and puts, and avoiding the common trap of buying far OTM options.',
    altText: 'Options Trading Comprehensive Beginner Guide Thumbnail'
  },
  {
    id: 'yt-5',
    title: 'The Risk Management Formula Every Profitable Trader Uses',
    duration: '18:50',
    views: '620K views',
    topic: 'Risk Management',
    badge: 'Capital Protection',
    summary: 'Calculated mathematical position sizing, maximum daily drawdown rules, and risk-to-reward ratios that protect your trading account from ruin.',
    altText: 'Trading Risk Management Formula Video Thumbnail'
  },
  {
    id: 'yt-6',
    title: 'Trading Psychology: Overcoming Fear, Greed, and Revenge Trading',
    duration: '25:30',
    views: '750K views',
    topic: 'Trading Psychology',
    badge: 'Emotional Edge',
    summary: 'Practical frameworks for developing emotional resilience, maintaining a trade journal, and accepting losses as normal business operating costs.',
    altText: 'Trading Psychology and Emotional Discipline Video Thumbnail'
  }
];

export const FOUNDER_INFO = {
  name: 'Akhand Pratap Singh',
  role: 'Professional Trader & Trading Educator',
  bio: 'Akhand Pratap Singh is a full-time trader and the founder of Trading Techstreet. With over 5 years of active market experience navigating equities, derivatives, forex, and commodities, Akhand has built one of the most respected trading education communities in India. His mission is to dismantle get-rich-quick fallacies and equip serious traders with institutional-grade technical frameworks, ruthless risk discipline, and psychological resilience.',
  quote: '"The market is not a lottery; it is an arena of probability and discipline. Master your risk before you ever seek your reward."',
  stats: [
    { label: 'Market Experience', val: '5+ Years' },
    { label: 'Students Mentored', val: '5,000+' },
    { label: 'Industry Recognitions', val: '3+ Awards' }
  ],
  milestones: [
    'Founded Trading Techstreet with a vision of indicator-free trading',
    'Grew YouTube educational channel to over 950K+ dedicated subscribers',
    'Conducted 100+ live chart breakdown workshops and cohort masterclasses',
    'Mentored 5,000+ students across India and global financial hubs'
  ]
};

export const WHY_US_CARDS = [
  {
    title: 'Practical, Real-Market Learning',
    desc: 'Zero theoretical filler. Every strategy is demonstrated on live candlestick charts, real execution replays, and verifiable market setups.',
    icon: 'CheckCircle2',
    stat: '100% Actionable'
  },
  {
    title: 'Systematic Linear Education',
    desc: 'A progressive curriculum that builds solid foundations before introducing advanced order flow and liquidity engineering.',
    icon: 'Layers',
    stat: 'Step-by-Step'
  },
  {
    title: 'Multi-Market Applicability',
    desc: 'Universal price action and SMC principles valid across Indian Equities, BankNifty Options, Crypto, Gold, and Global Forex.',
    icon: 'Globe2',
    stat: 'Universal Edge'
  },
  {
    title: 'Mathematical Risk Discipline',
    desc: 'Position sizing formulas, max daily drawdown caps, and 1:2+ minimum Risk-to-Reward rules hardcoded into every system.',
    icon: 'ShieldCheck',
    stat: 'Capital First'
  },
  {
    title: 'Trader Mindset & Psychology',
    desc: 'Specialized modules tackling loss acceptance, eliminating revenge trading, overcoming FOMO, and maintaining a strict journal.',
    icon: 'Brain',
    stat: 'Mental Fortitude'
  },
  {
    title: 'Vibrant 950K+ Community',
    desc: 'Collaborate with thousands of disciplined traders sharing daily chart analysis, trade reviews, and continuous peer motivation.',
    icon: 'Users',
    stat: '950K+ Strong'
  }
];

export const FAQS_DATA = [
  {
    question: 'How is Trading Techstreet different from generic indicator courses?',
    answer: 'Most retail courses rely on lagging indicators (RSI, MACD, Moving Average crossovers) which often generate late or false signals. At Trading Techstreet, we teach you to read pure Price Action, Support & Resistance dynamics, and Institutional Smart Money Concepts (liquidity sweeps, order blocks). You learn how to understand why price is moving, not just react to delayed signals.'
  },
  {
    question: 'Are these courses suitable for complete beginners?',
    answer: 'Yes. Our curriculum is structured in progressive tiers. Complete beginners start with core market structure, candlestick anatomy, and risk fundamentals before progressing into advanced concepts like scalping, options Greeks, or Smart Money Concepts.'
  },
  {
    question: 'Does Trading Techstreet guarantee trading profits?',
    answer: 'No, and any platform promising guaranteed returns is misleading you. Trading financial markets inherently involves risk of capital loss. Our mission is to provide you with high-probability execution frameworks, disciplined risk management, and the emotional tools necessary to navigate the market as a skilled professional.'
  },
  {
    question: 'How much starting capital do I need to begin trading?',
    answer: 'We recommend starting with paper trading (simulated practice) until you demonstrate consistency. When transitioning to live markets, we emphasize risking only 1% to 2% of your capital per trade, ensuring you can withstand normal drawdowns without psychological panic.'
  },
  {
    question: 'Do I get access to mobile app and community discussions?',
    answer: 'Yes! All enrolled students gain access to our dedicated mobile application (iOS & Android) with offline video downloads, course quizzes, and access to our private community groups for ongoing chart breakdowns and mentor Q&A.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    name: 'Aman Sharma',
    role: 'Course Student • Price Action Cohort',
    rating: 5,
    quote: 'The Price Action Masterclass completely transformed how I analyze BankNifty. Before Trading Techstreet, I was cluttered with 5 different indicators. Akhand Sir taught me how to trade clean candlesticks with strict 1:2 risk-reward.',
    verified: true,
    verifiedLocation: 'Mumbai, India'
  },
  {
    id: 'test-2',
    name: 'Pooja Verma',
    role: 'Course Student • Options Program',
    rating: 5,
    quote: 'The Smart Money Concepts and Options Greeks modules cleared up all my confusion around liquidity sweeps. The focus on capital preservation saved me from countless retail bull-traps.',
    verified: true,
    verifiedLocation: 'Bengaluru, India'
  },
  {
    id: 'test-3',
    name: 'Rohan Mehta',
    role: 'Course Student • Scalping Masterclass',
    rating: 5,
    quote: 'Akhand Sir is one of the very few educators who speaks the harsh truth about trading psychology. His position sizing formulas and daily max loss rules gave me the real discipline I lacked for 2 years.',
    verified: true,
    verifiedLocation: 'Delhi NCR, India'
  }
];

export const COMMUNITY_CHANNELS = [
  {
    name: 'YouTube',
    handle: '@TradingTechstreet',
    stat: '950K+ Subscribers',
    desc: 'Free in-depth market analysis, live strategy breakdowns, and weekly masterclass video lessons.',
    icon: 'Youtube',
    accentColor: '#FF0000',
    buttonText: 'Subscribe Channel',
    url: 'https://youtube.com/@tradingtechstreet'
  },
  {
    name: 'Telegram',
    handle: 'Trading Techstreet Official',
    stat: '120K+ Members',
    desc: 'Real-time market observations, educational chart case studies, and live webinar announcements.',
    icon: 'Send',
    accentColor: '#229ED9',
    buttonText: 'Join Telegram Channel',
    url: 'https://telegram.org'
  },
  {
    name: 'Instagram',
    handle: '@tradingtechstreet',
    stat: '250K+ Followers',
    desc: 'Bite-sized candlestick cheat sheets, market psychology insights, and daily trader motivation.',
    icon: 'Instagram',
    accentColor: '#E1306C',
    buttonText: 'Follow on Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'Course App',
    handle: 'iOS & Android App',
    stat: '50K+ Active Users',
    desc: 'Access your enrolled masterclasses, offline lesson downloads, interactive quizzes, and resources.',
    icon: 'Smartphone',
    accentColor: '#F59E0B',
    buttonText: 'Download Course App',
    url: '#'
  }
];

export const FOOTER_TOPICS = [
  'Price Action Trading',
  'Scalping Strategies',
  'Options Trading',
  'Smart Money Concepts (SMC)',
  'Technical Analysis',
  'Trading Psychology',
  'Risk Management',
  'Position Sizing Math',
  'Candlestick Patterns',
  'Crypto Trading',
  'Gold (XAUUSD)',
  'Forex Trading',
  'Liquidity Sweeps',
  'Order Flow Dynamics'
];
