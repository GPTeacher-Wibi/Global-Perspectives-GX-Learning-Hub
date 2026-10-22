/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: BURGER BLISS GLOBAL EXPANSION (CANONICAL MICRO-GAME g1-3)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 8–16)
 * Unit 1 Case Study: Section 1.1 (pp. 8–9) "When Global Business Meets Local Reality"
 * Core Theme: Cross-Perspective Interaction, Lenses, Scales, Trade-offs & Common Ground
 * CEFR Target: B1 English for Indonesian High School Learners
 */

export type LensType = 'cultural' | 'economic' | 'political' | 'social';
export type ScaleLevel = 'personal' | 'local' | 'national' | 'global';

export interface StakeholderProfile {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarIcon: string;
  coreInterest: string;
  dominantLens: LensType;
  primaryScale: ScaleLevel;
  quote: string;
}

export const STAKEHOLDERS: Record<string, StakeholderProfile> = {
  corporateDirector: {
    id: 'corporateDirector',
    name: 'Marcus Vance',
    role: 'Global Expansion Director, Burger Bliss HQ',
    location: 'Corporate Headquarters, Chicago',
    avatarIcon: 'Briefcase',
    coreInterest: 'Rapid revenue growth, standardized operational efficiency, brand consistency.',
    dominantLens: 'economic',
    primaryScale: 'global',
    quote: '“Our signature supersized beef burger is a global bestseller. High volume, quick counter turnover, and identical ingredients keep costs predictable.”'
  },
  localWarungOwner: {
    id: 'localWarungOwner',
    name: 'Ibu Ratna',
    role: 'Traditional Food Stall (Warung Makan) Owner',
    location: 'Jalan Merdeka, Bandung',
    avatarIcon: 'Store',
    coreInterest: 'Sustaining family livelihood, preserving local culinary traditions, customer loyalty.',
    dominantLens: 'economic',
    primaryScale: 'local',
    quote: '“I have served warm rice, ayam goreng, and fresh sambal to students for twenty years. If a huge foreign chain opens next door with million-dollar advertising, my family business could close.”'
  },
  studentCustomer: {
    id: 'studentCustomer',
    name: 'Farhan',
    role: 'Grade 10 High School Student & Youth Consumer',
    location: 'Bandung High School',
    avatarIcon: 'GraduationCap',
    coreInterest: 'Affordable meals, modern social hangout spaces with Wi-Fi, religious dietary trust.',
    dominantLens: 'social',
    primaryScale: 'personal',
    quote: '“My friends want a cool, air-conditioned place to study and hang out after school, but we must be 100% sure the meat is officially Halal certified and prices fit our student allowance.”'
  },
  cityPlanningOfficer: {
    id: 'cityPlanningOfficer',
    name: 'Pak Dedi',
    role: 'Municipal Urban Planning & Sanitation Officer',
    location: 'Bandung City Hall',
    avatarIcon: 'Landmark',
    coreInterest: 'Enforcing municipal business zoning, managing street traffic congestion, controlling packaging waste.',
    dominantLens: 'political',
    primaryScale: 'local',
    quote: '“The city welcomes new investment and tax revenue, but fast-food drive-throughs cause traffic jams, and mountains of single-use plastic wrappers will clog our drainage canals.”'
  },
  poultryFarmer: {
    id: 'poultryFarmer',
    name: 'Pak Wayan',
    role: 'Regional Poultry Farmers Cooperative Leader',
    location: 'West Java Agricultural District',
    avatarIcon: 'Truck',
    coreInterest: 'Securing stable domestic wholesale contracts, fair supplier purchase prices, local farmer jobs.',
    dominantLens: 'economic',
    primaryScale: 'national',
    quote: '“If Burger Bliss imports frozen beef from Australia, our domestic farmers gain nothing. But if they add chicken with local rice, our 400 cooperative farming families can thrive.”'
  }
};

export interface ScenarioQuestion {
  id: string;
  stage: 1 | 2 | 3 | 4;
  title: string;
  contextSituation: string;
  activeStakeholder?: StakeholderProfile;
  prompt: string;
  options: {
    id: string;
    text: string;
    isBestChoice: boolean;
    feedback: string;
    revealedLens?: LensType;
    revealedScale?: ScaleLevel;
  }[];
  pedagogicalKey: string;
  misconceptionAlert?: {
    label: string;
    explanation: string;
  };
}

// ============================================================================
// STAGE 1: THE SITUATION (4 Items — Establishing Context & Blind Spots)
// ============================================================================
export const STAGE_1_ITEMS: ScenarioQuestion[] = [
  {
    id: 'bb-s1-q1',
    stage: 1,
    title: 'The Expansion Plan & The Blind Spot',
    contextSituation: 'Burger Bliss announces plans to open 25 identical fast-food branches across major Indonesian cities, featuring their flagship Western menu: double beef patties, French fries, and solo counter service.',
    prompt: 'According to Cambridge Global Perspectives Unit 1 (Slide 12), what is the primary "perspective blind spot" in Burger Bliss’s initial corporate strategy?',
    options: [
      {
        id: 'opt-1a',
        text: 'The executives assumed that customer dining habits and preferences in New York or London are universal across Southeast Asia.',
        isBestChoice: true,
        feedback: 'Correct! The textbook identifies this as a classic perspective failure: assuming your own cultural habits and fast-food routines are universal.',
        revealedLens: 'cultural',
        revealedScale: 'global'
      },
      {
        id: 'opt-1b',
        text: 'The executives forgot to calculate the exact currency exchange rate between US dollars and Indonesian rupiah.',
        isBestChoice: false,
        feedback: 'Incorrect. While currency calculations matter in business, the core perspective flaw was ignoring cultural differences in food traditions and dining social habits.'
      },
      {
        id: 'opt-1c',
        text: 'The executives did not hire enough interior decorators to paint the restaurant walls with Western flags.',
        isBestChoice: false,
        feedback: 'Incorrect. Store decoration is secondary. The fundamental issue is assuming that fast, solo beef consumption fits every country’s eating culture.'
      }
    ],
    pedagogicalKey: 'Perspectives filter information: assuming your own habits are universal leads to major blind spots.',
    misconceptionAlert: {
      label: 'Misconception: Perspective = Universal Fact',
      explanation: 'What seems "natural and normal" to one culture (eating beef burgers quickly alone) is often completely unnatural in another context.'
    }
  },
  {
    id: 'bb-s1-q2',
    stage: 1,
    title: 'The Dining Experience: Individual vs. Social',
    contextSituation: 'Burger Bliss designed its restaurants with tiny single-seat counters so office workers could eat alone in 10 minutes. However, during the first month in Bandung, groups of 4 to 8 students and extended families arrived together.',
    prompt: 'How does the local dining perspective differ from the corporate model regarding dining culture?',
    options: [
      {
        id: 'opt-2a',
        text: 'Local dining is viewed primarily as a social and communal event, requiring comfortable shared seating and family-style meals.',
        isBestChoice: true,
        feedback: 'Correct! In Southeast Asia, dining out is frequently a communal activity where families and friends eat together, directly conflicting with solo counter seating.',
        revealedLens: 'social',
        revealedScale: 'local'
      },
      {
        id: 'opt-2b',
        text: 'Local customers wanted the restaurant to stay open 24 hours only for solo online gamers.',
        isBestChoice: false,
        feedback: 'Incorrect. The key cultural pattern is communal and family dining, not solo late-night gaming.'
      },
      {
        id: 'opt-2c',
        text: 'Local customers preferred eating standing up outside the restaurant on the street sidewalk.',
        isBestChoice: false,
        feedback: 'Incorrect. Customers wanted comfortable indoor group seating to socialize together.'
      }
    ],
    pedagogicalKey: 'Social dining values vary dramatically: individual convenience vs. communal connection.',
    misconceptionAlert: {
      label: 'Misconception: Food is only a physical product',
      explanation: 'Food is never just physical calories; dining spaces carry deep social meaning about hospitality, friendship, and family bonding.'
    }
  },
  {
    id: 'bb-s1-q3',
    stage: 1,
    title: 'The Dietary Imperative: Religious Trust',
    contextSituation: 'A national consumer advocacy group notes that Burger Bliss imports pre-packaged beef patties without formal certification from the Indonesian Halal Product Assurance Organizing Body (BPJPH).',
    prompt: 'Through which analytical lens and scale must Burger Bliss address the demand for Halal certification?',
    options: [
      {
        id: 'opt-3a',
        text: 'Cultural & Religious Lens at the National Scale (meeting statutory religious dietary laws for the country’s majority population).',
        isBestChoice: true,
        feedback: 'Correct! Halal compliance in Indonesia is both a Cultural/Religious lens (faith and dietary morals) and a National scale issue (state certification laws).',
        revealedLens: 'cultural',
        revealedScale: 'national'
      },
      {
        id: 'opt-3b',
        text: 'Economic Lens at the Personal Scale (helping one single customer count daily carbohydrate intake).',
        isBestChoice: false,
        feedback: 'Incorrect. Halal is not an individual diet fad; it is a fundamental faith-based requirement governed by nationwide standards.'
      },
      {
        id: 'opt-3c',
        text: 'Political Lens at the Global Scale (asking the United Nations General Assembly to vote on burger ingredients).',
        isBestChoice: false,
        feedback: 'Incorrect. Halal certification in Indonesia is governed by Indonesian national regulatory agencies, not the UN.'
      }
    ],
    pedagogicalKey: 'Religious dietary trust is essential for consumer confidence and legal market entry.',
    misconceptionAlert: {
      label: 'Misconception: Halal is just a menu label',
      explanation: 'Halal assurance requires rigorous end-to-end supply chain verification, ingredient purity, and respect for religious identity.'
    }
  },
  {
    id: 'bb-s1-q4',
    stage: 1,
    title: 'The Staple Food Reality: Bread vs. Rice',
    contextSituation: 'Customer surveys reveal that while teens enjoyed trying a burger once out of curiosity, adults complained: “If I have not eaten warm rice, I do not feel like I have had a real lunch!” Sales dropped 40% after the opening week.',
    prompt: 'What core lesson from Unit 1 explains why sales plummeted after initial curiosity faded?',
    options: [
      {
        id: 'opt-4a',
        text: 'Curiosity drove one-off trial, but long-term eating habits are anchored in cultural staple foods like rice and savory chicken.',
        isBestChoice: true,
        feedback: 'Correct! As Slide 14 notes, novelty attracts first-time visitors, but sustainable business requires aligning with deep-seated culinary habits.',
        revealedLens: 'cultural',
        revealedScale: 'local'
      },
      {
        id: 'opt-4b',
        text: 'Customers decided that they would never eat any food prepared inside an air-conditioned building.',
        isBestChoice: false,
        feedback: 'Incorrect. Customers love comfortable air-conditioned spaces; the barrier was the lack of culturally satisfying staple foods like rice.'
      },
      {
        id: 'opt-4c',
        text: 'The government banned all sandwiches nationwide by presidential emergency decree.',
        isBestChoice: false,
        feedback: 'Incorrect. There was no government ban; customer dietary preference was the natural economic driver.'
      }
    ],
    pedagogicalKey: 'Long-term adoption depends on cultural staple food traditions, not temporary novelty.',
    misconceptionAlert: {
      label: 'Misconception: Novelty equals permanent success',
      explanation: 'First-day long queues often represent curiosity, not permanent cultural acceptance.'
    }
  }
];

// ============================================================================
// STAGE 2: SEE THROUGH DIFFERENT EYES (5 Items — Stakeholder Perspectives)
// ============================================================================
export const STAGE_2_ITEMS: ScenarioQuestion[] = [
  {
    id: 'bb-s2-q1',
    stage: 2,
    title: 'The Global Executive: Standardization Focus',
    contextSituation: 'Marcus Vance, the Corporate Expansion Director, argues in a regional video conference: “If we change our recipes in every country, our brand loses its identity and our bulk packaging costs will surge by 25%.”',
    activeStakeholder: STAKEHOLDERS.corporateDirector,
    prompt: 'What primary perspective drives Marcus Vance’s reasoning?',
    options: [
      {
        id: 'opt-1a',
        text: 'An Economic perspective at the Global scale, prioritizing worldwide brand consistency and bulk supply-chain cost savings.',
        isBestChoice: true,
        feedback: 'Correct! Marcus is focused on corporate cost control, global brand uniformity, and worldwide supply chain efficiency.',
        revealedLens: 'economic',
        revealedScale: 'global'
      },
      {
        id: 'opt-1b',
        text: 'A Cultural perspective at the Local scale, defending traditional Sundanese culinary heritage in West Java.',
        isBestChoice: false,
        feedback: 'Incorrect. Marcus is a Western corporate executive who does not focus on local Sundanese cultural heritage.'
      },
      {
        id: 'opt-1c',
        text: 'A Social perspective at the Personal scale, worrying about individual student pocket money in Bandung.',
        isBestChoice: false,
        feedback: 'Incorrect. His focus is corporate profitability and global supply chain predictability.'
      }
    ],
    pedagogicalKey: 'Corporate perspectives prioritize standardization, predictability, and multinational economies of scale.',
    misconceptionAlert: {
      label: 'Misconception: Corporate views are purely greedy',
      explanation: 'Standardization is a rational operational priority that keeps large companies efficient and solvent, even if it creates local blind spots.'
    }
  },
  {
    id: 'bb-s2-q2',
    stage: 2,
    title: 'The Warung Owner: Small Business Vulnerability',
    contextSituation: 'Ibu Ratna operates a small warung 50 meters away: “My profit margin is small. Burger Bliss offers free soda promotions and toy giveaways. If students stop coming here for lunch, I cannot pay my children’s school fees.”',
    activeStakeholder: STAKEHOLDERS.localWarungOwner,
    prompt: 'How should a researcher deconstruct Ibu Ratna’s perspective?',
    options: [
      {
        id: 'opt-2a',
        text: 'An Economic & Social perspective at the Local and Personal scale, centered on family livelihood security and small business survival.',
        isBestChoice: true,
        feedback: 'Correct! Ibu Ratna’s concern is directly about her household budget (Personal) and the local neighborhood economy (Local).',
        revealedLens: 'economic',
        revealedScale: 'local'
      },
      {
        id: 'opt-2b',
        text: 'A Political perspective at the Global scale, seeking to rewrite international maritime trade pacts.',
        isBestChoice: false,
        feedback: 'Incorrect. Her concerns are local neighborhood livelihood and family income, not international shipping treaties.'
      },
      {
        id: 'opt-2c',
        text: 'A purely aesthetic perspective, complaining that Burger Bliss uses yellow and red corporate logos.',
        isBestChoice: false,
        feedback: 'Incorrect. Her core concern is economic survival and family school expenses.'
      }
    ],
    pedagogicalKey: 'Small local business owners face existential livelihood risks from multinational corporate competition.',
    misconceptionAlert: {
      label: 'Misconception: Economic perspective is always national',
      explanation: 'A family food stall’s daily cash flow is a vital economic perspective operating at the personal and local scale.'
    }
  },
  {
    id: 'bb-s2-q3',
    stage: 2,
    title: 'The Youth Consumer: Dual Priorities',
    contextSituation: 'Farhan, a local high school student, states: “We love fast-food outlets because they provide clean air-conditioned tables with electrical outlets for our laptop homework. But we cannot spend 75,000 rupiah on a burger; our daily allowance is 30,000.”',
    activeStakeholder: STAKEHOLDERS.studentCustomer,
    prompt: 'What tension does Farhan’s consumer perspective highlight?',
    options: [
      {
        id: 'opt-3a',
        text: 'A desire for modern social study spaces vs. strict personal financial budget constraints.',
        isBestChoice: true,
        feedback: 'Correct! Farhan’s perspective balances the social benefit of a clean study space against the personal economic reality of student allowances.',
        revealedLens: 'social',
        revealedScale: 'personal'
      },
      {
        id: 'opt-3b',
        text: 'A demand that fast-food restaurants only hire university professors to flip burgers.',
        isBestChoice: false,
        feedback: 'Incorrect. Farhan is concerned with social hangouts, Wi-Fi, and affordable meal prices.'
      },
      {
        id: 'opt-3c',
        text: 'A demand that Burger Bliss sell expensive imported motorbikes alongside French fries.',
        isBestChoice: false,
        feedback: 'Incorrect. His focus is student-friendly pricing and communal hangout spaces.'
      }
    ],
    pedagogicalKey: 'Consumers hold multi-dimensional perspectives balancing social lifestyle desires with personal financial limits.',
    misconceptionAlert: {
      label: 'Misconception: Students only care about trendy brands',
      explanation: 'Youth consumers evaluate practical utility: comfortable study space, social connection, and affordable pricing.'
    }
  },
  {
    id: 'bb-s2-q4',
    stage: 2,
    title: 'The City Planning Officer: Public Goods & Externalities',
    contextSituation: 'Pak Dedi at City Hall notes: “The new drive-through branch created vehicle traffic that backed up three intersections. Furthermore, our city waste department collected 1.2 tons of single-use paper cups and plastic burger wraps in one week.”',
    activeStakeholder: STAKEHOLDERS.cityPlanningOfficer,
    prompt: 'What analytical lens and scale best characterize Pak Dedi’s governance responsibility?',
    options: [
      {
        id: 'opt-4a',
        text: 'Political & Social Lens at the Local scale, safeguarding public infrastructure, municipal traffic flow, and urban waste management.',
        isBestChoice: true,
        feedback: 'Correct! Municipal authorities must manage public externalities (traffic, trash, street safety) affecting the entire local community.',
        revealedLens: 'political',
        revealedScale: 'local'
      },
      {
        id: 'opt-4b',
        text: 'Cultural Lens at the Global scale, tracking worldwide television ratings.',
        isBestChoice: false,
        feedback: 'Incorrect. City hall’s primary duties are urban order, public roads, and municipal environmental management.'
      },
      {
        id: 'opt-4c',
        text: 'Personal Lens, trying to reserve a parking spot only for his personal car.',
        isBestChoice: false,
        feedback: 'Incorrect. His perspective represents his public official duty to manage city infrastructure for all citizens.'
      }
    ],
    pedagogicalKey: 'Local government perspectives focus on public goods, municipal order, and environmental externalities.',
    misconceptionAlert: {
      label: 'Misconception: Government view = Personal view of officials',
      explanation: 'City officers evaluate issues based on their statutory duty to protect public safety, roads, and municipal sanitation.'
    }
  },
  {
    id: 'bb-s2-q5',
    stage: 2,
    title: 'The Regional Farmer: Supply Chain Linkages',
    contextSituation: 'Pak Wayan of the Poultry Farmers Cooperative says: “Burger Bliss is flying in frozen beef patties from overseas. If they partnered with our Indonesian chicken and rice growers instead, thousands of farming families would earn stable monthly contracts.”',
    activeStakeholder: STAKEHOLDERS.poultryFarmer,
    prompt: 'What strategic opportunity does the farmers cooperative’s perspective reveal?',
    options: [
      {
        id: 'opt-5a',
        text: 'An opportunity to build a National Economic linkage, substituting imported beef with domestic poultry to support local rural livelihoods.',
        isBestChoice: true,
        feedback: 'Correct! By sourcing chicken and rice domestically, the restaurant creates positive economic multiplier effects for national agriculture.',
        revealedLens: 'economic',
        revealedScale: 'national'
      },
      {
        id: 'opt-5b',
        text: 'A plan to convince Burger Bliss to completely stop serving any hot food and sell raw wheat seeds instead.',
        isBestChoice: false,
        feedback: 'Incorrect. The farmers want to supply fresh chicken and rice for popular localized fast-food items.'
      },
      {
        id: 'opt-5c',
        text: 'A suggestion that Indonesian farmers abandon agriculture and become corporate advertising models.',
        isBestChoice: false,
        feedback: 'Incorrect. Their interest is stable agricultural purchasing contracts and fair market prices.'
      }
    ],
    pedagogicalKey: 'Supply chains connect global corporate menus with national rural livelihoods.',
    misconceptionAlert: {
      label: 'Misconception: Supply chains are purely logistical',
      explanation: 'Where a restaurant buys its ingredients determines who prospers: foreign industrial conglomerates or local farming families.'
    }
  }
];

// ============================================================================
// STAGE 3: PERSPECTIVE CONFLICT & TRADE-OFFS (4 Items — Analyzing Tensions)
// ============================================================================
export const STAGE_3_ITEMS: ScenarioQuestion[] = [
  {
    id: 'bb-s3-q1',
    stage: 3,
    title: 'Tension 1: Global Speed vs. Local Sourcing',
    contextSituation: 'Burger Bliss HQ prefers importing standardized frozen beef in shipping containers because it requires zero recipe testing. However, local poultry cooperatives offer fresh, Halal-certified chicken that is 30% cheaper but requires changing kitchen cooking fryers.',
    prompt: 'What genuine trade-off must corporate management weigh in this decision?',
    options: [
      {
        id: 'opt-1a',
        text: 'Operational standardization and global recipe uniformity vs. lower food production costs and higher local customer acceptance.',
        isBestChoice: true,
        feedback: 'Correct! Keeping 100% Western beef preserves corporate standardization, but adopting local poultry lowers costs and satisfies local dietary preferences.',
        revealedLens: 'economic',
        revealedScale: 'national'
      },
      {
        id: 'opt-1b',
        text: 'Deciding whether workers should speak five languages or only sign language.',
        isBestChoice: false,
        feedback: 'Incorrect. Language skills are unrelated to the core menu trade-off between standardization and localized sourcing.'
      },
      {
        id: 'opt-1c',
        text: 'Choosing whether restaurant tables should be painted green or purple.',
        isBestChoice: false,
        feedback: 'Incorrect. The dilemma is about menu ingredients, kitchen equipment investment, and supply chain trade-offs.'
      }
    ],
    pedagogicalKey: 'Trade-off: Global corporate uniformity vs. localized cost efficiency and cultural fit.',
    misconceptionAlert: {
      label: 'Misconception: There is one easy "correct" choice',
      explanation: 'Both choices carry real costs: changing fryers costs capital, but ignoring local preferences causes sales collapse.'
    }
  },
  {
    id: 'bb-s3-q2',
    stage: 3,
    title: 'Tension 2: Commercial Competition vs. Small Business Coexistence',
    contextSituation: 'Burger Bliss plans a massive “Rp 15,000 Combo” marketing blitz for the next 6 months to dominate the lunchtime market. Ibu Ratna and six neighboring food stall owners submit a petition to the municipal district office warning of impending bankruptcies.',
    prompt: 'How should a Global Perspectives researcher analyze this conflict of interests?',
    options: [
      {
        id: 'opt-2a',
        text: 'As a structural tension between multinational market power and vulnerable informal local livelihoods, where both sides pursue valid economic goals.',
        isBestChoice: true,
        feedback: 'Correct! The corporation seeks commercial growth, while local vendors defend their family survival. Recognizing both viewpoints is the foundation of perspective analysis.',
        revealedLens: 'economic',
        revealedScale: 'local'
      },
      {
        id: 'opt-2b',
        text: 'By declaring that small street food stalls are outdated and should be legally banned across the city.',
        isBestChoice: false,
        feedback: 'Incorrect. Global Perspectives researchers avoid biased moral judgments and instead analyze the underlying socio-economic impact on communities.'
      },
      {
        id: 'opt-2c',
        text: 'By claiming that Burger Bliss is evil and that foreign companies should never be allowed to do business anywhere.',
        isBestChoice: false,
        feedback: 'Incorrect. Demonizing one side is simplistic; the goal is finding sustainable policies that encourage investment while protecting vulnerable livelihoods.'
      }
    ],
    pedagogicalKey: 'Perspective analysis balances competing legitimate claims rather than declaring heroes and villains.',
    misconceptionAlert: {
      label: 'Misconception: Perspective analysis is picking a side',
      explanation: 'Cambridge researchers must understand the economic mechanisms on BOTH sides to propose balanced, workable solutions.'
    }
  },
  {
    id: 'bb-s3-q3',
    stage: 3,
    title: 'Tension 3: Packaging Convenience vs. Municipal Waste',
    contextSituation: 'To maximize counter turnover, Burger Bliss serves all dine-in and takeaway food in single-use plastic laminate wrappers and disposable plastic cups. City Hall threatens to impose heavy landfill penalty fees unless 40% of packaging is compostable or recyclable.',
    prompt: 'What dynamic change occurs when municipal regulations introduce waste penalties?',
    options: [
      {
        id: 'opt-3a',
        text: 'An environmental externality (Social/Environmental lens) transforms into a direct operational financial cost (Economic lens) for the business.',
        isBestChoice: true,
        feedback: 'Correct! Perspectives are interconnected: local municipal environmental rules create a direct financial incentive for corporate operational reform.',
        revealedLens: 'political',
        revealedScale: 'local'
      },
      {
        id: 'opt-3b',
        text: 'The restaurant immediately closes all stores and sells its buildings to foreign airlines.',
        isBestChoice: false,
        feedback: 'Incorrect. Companies adapt to environmental rules by changing packaging, not by liquidating their entire international business.'
      },
      {
        id: 'opt-3c',
        text: 'Customers are required to bring their own ceramic plates from home in their school backpacks.',
        isBestChoice: false,
        feedback: 'Incorrect. Sustainable packaging reform is implemented by restaurant management, not by placing unrealistic burdens on customers.'
      }
    ],
    pedagogicalKey: 'Interconnectedness: Municipal regulatory policies can align corporate profit incentives with community environmental needs.',
    misconceptionAlert: {
      label: 'Misconception: Business and environment are separate',
      explanation: 'Legal regulations bridge the gap between private business operations and shared community public health.'
    }
  },
  {
    id: 'bb-s3-q4',
    stage: 3,
    title: 'Tension 4: Dynamic Information — The Indonesian Market Reality',
    contextSituation: 'A new market study by an Indonesian business university reveals that successful international fast-food chains in Indonesia (such as KFC and McDonald’s) generate over 75% of their total revenue from crispy chicken with warm rice and sambal, not beef burgers.',
    prompt: 'Why is this study a prime example of "dynamic perspectives" in research?',
    options: [
      {
        id: 'opt-4a',
        text: 'New empirical evidence forces decision-makers to revise their prior assumptions and adapt their business strategy to real local consumer behavior.',
        isBestChoice: true,
        feedback: 'Correct! Unit 1 teaches that perspectives are dynamic: when reliable evidence contradicts initial beliefs, researchers and leaders must update their view.',
        revealedLens: 'cultural',
        revealedScale: 'national'
      },
      {
        id: 'opt-4b',
        text: 'It proves that corporate executives should never read research reports or listen to local university studies.',
        isBestChoice: false,
        feedback: 'Incorrect. High-quality empirical research is exactly what prevents catastrophic business failure in foreign markets.'
      },
      {
        id: 'opt-4c',
        text: 'It means that fast-food companies should only sell burgers in cold winter countries.',
        isBestChoice: false,
        feedback: 'Incorrect. The lesson is adaptation to local culinary customs, not abandoning warm-climate markets.'
      }
    ],
    pedagogicalKey: 'Perspectives are dynamic: evidence-based research enables rational adaptation.',
    misconceptionAlert: {
      label: 'Misconception: Strong leaders never change their minds',
      explanation: 'Rigidly clinging to disproven assumptions is failure. Updating strategy based on local evidence is strong leadership.'
    }
  }
];

// ============================================================================
// STAGE 4: STRATEGIC DECISION-MAKING (3 Items — Policy Choices & Trade-offs)
// ============================================================================
export const STAGE_4_ITEMS: ScenarioQuestion[] = [
  {
    id: 'bb-s4-q1',
    stage: 4,
    title: 'Decision 1: The Menu & Cultural Strategy',
    contextSituation: 'Burger Bliss executive committee must decide how to remodel its Indonesian store menu. Three strategic directions are proposed.',
    prompt: 'Which strategy best balances corporate viability with local cultural and religious realities?',
    options: [
      {
        id: 'opt-1a',
        text: 'Obtain official Halal certification, retain signature beef burgers for brand identity, but add localized options: crispy chicken, warm steamed rice, and regional chili sambal.',
        isBestChoice: true,
        feedback: 'Correct! This dual approach (often called "glocalization") preserves brand identity while fully respecting local dietary traditions and family dining habits.',
        revealedLens: 'cultural',
        revealedScale: 'national'
      },
      {
        id: 'opt-1b',
        text: 'Double the size of beef burgers, raise prices by 50%, and remove all chicken and rice from the menu completely.',
        isBestChoice: false,
        feedback: 'Incorrect. This doubles down on the original blind spot and would guarantee massive commercial failure in Indonesia.'
      },
      {
        id: 'opt-1c',
        text: 'Stop selling food completely and turn the restaurant into a Western textbook bookstore.',
        isBestChoice: false,
        feedback: 'Incorrect. The restaurant is a food business; it must adapt its core culinary offering to local consumer demand.'
      }
    ],
    pedagogicalKey: 'Glocalization: Combining global brand consistency with localized cultural adaptation.',
    misconceptionAlert: {
      label: 'Misconception: Adaptation means losing your identity',
      explanation: 'Successful global brands adapt their menu locally (rice and chicken in Indonesia) without losing their core corporate brand identity.'
    }
  },
  {
    id: 'bb-s4-q2',
    stage: 4,
    title: 'Decision 2: Local Sourcing & Agricultural Integration',
    contextSituation: 'Corporate procurement must decide between continuing to ship 100% frozen beef from overseas or restructuring their supply chain to include Indonesian agricultural producers.',
    prompt: 'What policy achieves the most sustainable multi-scale economic benefit?',
    options: [
      {
        id: 'opt-2a',
        text: 'Establish long-term supply contracts with Indonesian poultry and rice farming cooperatives, meeting strict quality and Halal standards.',
        isBestChoice: true,
        feedback: 'Correct! Sourcing chicken and rice domestically reduces shipping emissions, lowers ingredient costs, and injects economic revenue into local rural farming communities.',
        revealedLens: 'economic',
        revealedScale: 'national'
      },
      {
        id: 'opt-2b',
        text: 'Import all chicken and rice from thousands of miles away by air cargo regardless of local availability.',
        isBestChoice: false,
        feedback: 'Incorrect. Air-freighting staple ingredients is economically wasteful and ecologically damaging when excellent local farms exist nearby.'
      },
      {
        id: 'opt-2c',
        text: 'Refuse to pay farmers and demand that local suppliers donate all meat and vegetables for free.',
        isBestChoice: false,
        feedback: 'Incorrect. Sustainable business partnerships require fair wholesale pricing and legally binding mutual contracts.'
      }
    ],
    pedagogicalKey: 'Inclusive supply chains turn multinational expansion into a catalyst for domestic rural development.',
    misconceptionAlert: {
      label: 'Misconception: Foreign investment only takes wealth out',
      explanation: 'When foreign companies buy from local farmers, foreign capital supports domestic agricultural livelihoods and jobs.'
    }
  },
  {
    id: 'bb-s4-q3',
    stage: 4,
    title: 'Decision 3: Coexistence with Local Food Vendors',
    contextSituation: 'To resolve neighborhood tensions with street food vendors and municipal officials, Burger Bliss considers its community relations policy.',
    prompt: 'Which community partnership model represents the most thoughtful common-ground approach?',
    options: [
      {
        id: 'opt-3a',
        text: 'Establish a designated "Culinary Heritage Alley" adjacent to the store for licensed local warungs, implement joint neighborhood cleanups, and avoid predatory price dumping.',
        isBestChoice: true,
        feedback: 'Correct! This creates cooperative synergy: the modern store attracts foot traffic while respecting and supporting informal local food heritage.',
        revealedLens: 'social',
        revealedScale: 'local'
      },
      {
        id: 'opt-3b',
        text: 'Hire private security guards to chase away all traditional food carts and construct high concrete walls around the parking lot.',
        isBestChoice: false,
        feedback: 'Incorrect. Hostile exclusion creates severe community resentment, protests, and municipal regulatory pushback.'
      },
      {
        id: 'opt-3c',
        text: 'Offer to buy out and demolish all neighboring houses to build a giant private golf course.',
        isBestChoice: false,
        feedback: 'Incorrect. This escalates social conflict and destroys neighborhood cohesion.'
      }
    ],
    pedagogicalKey: 'Coexistence: Modern retail centers can synergize with informal vendors to foster vibrant, inclusive public spaces.',
    misconceptionAlert: {
      label: 'Misconception: Modern business must destroy traditional business',
      explanation: 'Inclusive urban planning integrates modern amenities with traditional cultural vendors to create vibrant, balanced districts.'
    }
  }
];

// ============================================================================
// STAGE 5: COMMON GROUND & BALANCED SYNTHESIS (Final Challenge Task)
// ============================================================================
export interface FinalSynthesisTask {
  title: string;
  scenarioBrief: string;
  taskPrompt: string;
  synthesisOptions: {
    id: string;
    label: string;
    summary: string;
    strengths: string[];
    weaknesses: string[];
    isBalancedSolution: boolean;
    analysisFeedback: string;
  }[];
}

export const FINAL_SYNTHESIS_TASK: FinalSynthesisTask = {
  title: 'The Master Expansion Blueprint: Crafting Common Ground',
  scenarioBrief: 'Burger Bliss has concluded its 6-month Indonesian market investigation. Corporate executives, local street vendors, student consumers, municipal planners, and agricultural cooperatives have presented their demands. The board of directors will vote on the final strategic expansion charter.',
  taskPrompt: 'Evaluate the three comprehensive strategic proposals below. Select the blueprint that best synthesizes cultural respect, economic viability, local livelihoods, and environmental governance across all four scales:',
  synthesisOptions: [
    {
      id: 'plan-a',
      label: 'Proposal A: The Standardized Global Model',
      summary: 'Maintain 100% Western beef burgers, single-seat counter dining, imported packaging, and zero menu adaptation. Rely on aggressive price promotions to outcompete local street stalls.',
      strengths: [
        'Absolute global brand uniformity and identity (Cultural / Global)',
        'Zero kitchen retooling costs for corporate headquarters (Economic / Global)'
      ],
      weaknesses: [
        'Ignores religious Halal requirements and local staple diet (Cultural / National)',
        'Creates severe economic friction with local street food vendors (Social / Local)',
        'Incurs heavy municipal waste fines and landfill penalties (Political / Local)',
        'High commercial risk of customer boycott and sales collapse (Economic / National)'
      ],
      isBalancedSolution: false,
      analysisFeedback: 'Proposal A repeats the original perspective blind spot. It favors only the Corporate Global perspective while alienating host-country cultural norms, community vendors, and municipal environmental regulations.'
    },
    {
      id: 'plan-b',
      label: 'Proposal B: The Glocal Integration Charter',
      summary: '1. Official BPJPH Halal certification.\n2. Dual menu: signature burgers alongside crispy chicken, warm rice, and local sambal.\n3. Communal seating with study spaces and Wi-Fi for youth.\n4. Direct supply contracts with Indonesian poultry and rice farming cooperatives.\n5. Biodegradable packaging and shared neighborhood recycling hubs.\n6. Dedicated pedestrian plaza supporting neighboring local food artisans.',
      strengths: [
        'Respects religious and cultural dietary norms (Cultural / National)',
        'Supports domestic farmers and fair small business coexistence (Economic / Local)',
        'Provides modern student social amenities and study spaces (Social / Personal)',
        'Complies with municipal waste and traffic regulations (Political / Local)',
        'Protects corporate profitability through high sales volume (Economic / Global)'
      ],
      weaknesses: [
        'Requires initial capital investment in kitchen fryers and local supply audits (Economic / Global)',
        'Demands ongoing coordination and conflict management with neighborhood food committees (Social / Local)'
      ],
      isBalancedSolution: true,
      analysisFeedback: 'Outstanding! Proposal B exemplifies master-level Global Perspectives synthesis. Rather than picking a single winner, it balances the core needs of all five stakeholders: corporate viability, student socialization, vendor coexistence, farming livelihoods, and municipal environmental compliance across Personal, Local, National, and Global scales.'
    },
    {
      id: 'plan-c',
      label: 'Proposal C: The Complete Market Withdrawal Strategy',
      summary: 'Cancel all expansion plans, shut down all Indonesian branches, and declare that foreign businesses should not operate in Southeast Asia.',
      strengths: [
        'Immediately eliminates corporate commercial competition for local warungs (Social / Local)'
      ],
      weaknesses: [
        'Creates zero formal employment opportunities for local Indonesian youth (Economic / Personal)',
        'Provides no supply contracts for Indonesian poultry and rice farmers (Economic / National)',
        'Deprives student consumers of modern social study amenities (Social / Personal)',
        'Surrenders potential municipal tax revenues and urban planning partnerships (Political / Local)'
      ],
      isBalancedSolution: false,
      analysisFeedback: 'Proposal C represents complete avoidance rather than perspective synthesis. While it removes commercial competition, it also eliminates all opportunities for mutual economic investment, youth employment, agricultural partnerships, and intercultural learning.'
    }
  ]
};
