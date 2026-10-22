/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: PERSPECTIVE SWITCHER (CANONICAL MICRO-GAME g1-1)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 6–21)
 * Core Concept: Four Analytical Lenses (Cultural, Economic, Political, Social)
 * CEFR Target: B1 English for Indonesian High School Learners
 */

export type LensType = 'cultural' | 'economic' | 'political' | 'social';

export interface LensDefinition {
  id: LensType;
  title: string;
  iconName: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  lightBg: string;
  shortDefinition: string;
  investigativeQuestion: string;
  keyConcerns: string;
  coreIndicators: string[];
}

export const LENS_DEFINITIONS: Record<LensType, LensDefinition> = {
  cultural: {
    id: 'cultural',
    title: 'Cultural Lens',
    iconName: 'Sparkles',
    colorBg: 'bg-amber-600',
    colorBorder: 'border-amber-300',
    colorText: 'text-amber-800',
    lightBg: 'bg-amber-50',
    shortDefinition: 'Beliefs, heritage, religion, traditions, languages, and moral customs.',
    investigativeQuestion: 'Does this project respect or affect shared customs, faith, or ancestral identity?',
    keyConcerns: 'Preserving traditions, local identity, sacred heritage, dietary customs, community rituals.',
    coreIndicators: ['tradition', 'faith', 'heritage', 'customs', 'identity', 'sacred', 'rituals', 'ancestral']
  },
  economic: {
    id: 'economic',
    title: 'Economic Lens',
    iconName: 'TrendingUp',
    colorBg: 'bg-emerald-600',
    colorBorder: 'border-emerald-300',
    colorText: 'text-emerald-800',
    lightBg: 'bg-emerald-50',
    shortDefinition: 'Financial costs, resource allocation, jobs, trade, income, and business viability.',
    investigativeQuestion: 'What are the financial costs, revenue trade-offs, and impacts on livelihoods?',
    keyConcerns: 'Job creation, household income, business profits, investment costs, commercial trade.',
    coreIndicators: ['jobs', 'costs', 'income', 'trade', 'revenue', 'livelihood', 'business', 'prices']
  },
  political: {
    id: 'political',
    title: 'Political Lens',
    iconName: 'Landmark',
    colorBg: 'bg-blue-600',
    colorBorder: 'border-blue-300',
    colorText: 'text-blue-800',
    lightBg: 'bg-blue-50',
    shortDefinition: 'Laws, government power, state regulations, rights, permits, and official policy.',
    investigativeQuestion: 'Who holds legal authority? What government laws, permits, or policies apply?',
    keyConcerns: 'Government legislation, legal compliance, regulatory enforcement, state power, treaties.',
    coreIndicators: ['laws', 'regulations', 'government', 'permits', 'policy', 'council', 'treaty', 'rights']
  },
  social: {
    id: 'social',
    title: 'Social Lens',
    iconName: 'Users',
    colorBg: 'bg-purple-600',
    colorBorder: 'border-purple-300',
    colorText: 'text-purple-800',
    lightBg: 'bg-purple-50',
    shortDefinition: 'Human well-being, community equity, healthcare access, education, and vulnerable groups.',
    investigativeQuestion: 'How does this decision affect human quality of life, equality, and vulnerable groups?',
    keyConcerns: 'Protecting low-income families, health access, public safety, disability access, social cohesion.',
    coreIndicators: ['equity', 'well-being', 'vulnerable', 'healthcare', 'families', 'community life', 'safety']
  }
};

export interface SwitcherItem {
  id: string;
  stage: 1 | 2 | 3;
  situationContext: string;
  speakerRole: string;
  statement: string;
  correctLens: LensType;
  primaryClueExplanation: string;
  misconceptionAlert?: {
    temptingLens: LensType;
    warning: string;
  };
}

// Stage 1: Warm-Up (Clear recognition of dominant lens)
export const STAGE_1_ITEMS: SwitcherItem[] = [
  {
    id: 's1-q1',
    stage: 1,
    situationContext: 'A historic coastal town considers opening an artisanal fish market for tourists.',
    speakerRole: 'Local Village Elder',
    statement: 'Our ancestors have passed down the traditional way of salting fish and blessing fishing boats for two centuries. We must ensure this sacred heritage is not forgotten.',
    correctLens: 'cultural',
    primaryClueExplanation: 'The viewpoint centers on ancestral customs, sacred rituals, and generational heritage, which makes it a Cultural perspective.',
    misconceptionAlert: {
      temptingLens: 'social',
      warning: 'While the community shares this practice, the speaker is directly defending ancestral heritage, rituals, and sacred identity (Cultural Lens).'
    }
  },
  {
    id: 's1-q2',
    stage: 1,
    situationContext: 'A town council evaluates installing solar panels across community school roofs.',
    speakerRole: 'Municipal Finance Officer',
    statement: 'Installing solar panels will reduce our monthly school electricity expenses by 35% and free up budget funds to purchase new classroom laptops.',
    correctLens: 'economic',
    primaryClueExplanation: 'This statement evaluates financial expenses, percentage cost reductions, and budget reallocation, which is the definition of an Economic perspective.',
    misconceptionAlert: {
      temptingLens: 'political',
      warning: 'Even though a municipal officer is speaking, the argument itself is solely focused on financial savings and budget numbers.'
    }
  },
  {
    id: 's1-q3',
    stage: 1,
    situationContext: 'A city reviews a proposal to restrict heavy diesel trucks from entering residential streets.',
    speakerRole: 'City Legal Director',
    statement: 'Under Municipal Bylaw No. 14, our regional transport authority holds the official power to impose fines and revoke operating permits for violating vehicle weight rules.',
    correctLens: 'political',
    primaryClueExplanation: 'The argument is grounded in legal bylaws, statutory authority, official fines, and regulatory permit enforcement—a Political perspective.',
    misconceptionAlert: {
      temptingLens: 'social',
      warning: 'Although residents may benefit from less traffic, the speaker is strictly arguing from the standpoint of legal power, bylaws, and government enforcement.'
    }
  }
];

// Stage 2: Switch the Lens (Contextual scenarios with nuanced overlap)
export const STAGE_2_ITEMS: SwitcherItem[] = [
  {
    id: 's2-q1',
    stage: 2,
    situationContext: 'A provincial government plans an elevated toll road connecting two major farming districts.',
    speakerRole: 'District Clinic Doctor',
    statement: 'Currently, pregnant mothers and injured farmers wait up to three hours over broken roads to reach an emergency room. A reliable road directly protects human survival and reduces maternal mortality.',
    correctLens: 'social',
    primaryClueExplanation: 'The doctor focuses on human life, healthcare access, emergency medical survival, and community well-being—a Social perspective.',
    misconceptionAlert: {
      temptingLens: 'economic',
      warning: 'Toll roads involve construction costs, but this speaker evaluates human healthcare access and emergency survival (Social Lens).'
    }
  },
  {
    id: 's2-q2',
    stage: 2,
    situationContext: 'An international fast-food franchise (Burger Bliss) prepares to open in Central Java.',
    speakerRole: 'Franchise Supply Chain Manager',
    statement: 'We must secure contracts with local poultry farms and spice distributors to guarantee our chicken burger patties can be sold at a competitive price point while maintaining healthy profit margins.',
    correctLens: 'economic',
    primaryClueExplanation: 'This viewpoint analyzes supplier contracts, retail pricing competitiveness, production costs, and commercial profit margins—an Economic perspective.',
    misconceptionAlert: {
      temptingLens: 'cultural',
      warning: 'Food can be cultural, but this specific speaker is discussing supply contracts, costs, and profit margins.'
    }
  },
  {
    id: 's2-q3',
    stage: 2,
    situationContext: 'A regional parliament debates a bill requiring all consumer food packaging to display clear sugar warning labels.',
    speakerRole: 'Ministry of Health Representative',
    statement: 'The proposed legislation would legally mandate standardized label sizes and grant inspectors the authority to seize non-compliant products from store shelves.',
    correctLens: 'political',
    primaryClueExplanation: 'The focus is on official legislation, legal mandates, and state enforcement authority over food manufacturers—a Political perspective.',
    misconceptionAlert: {
      temptingLens: 'social',
      warning: 'Sugar affects health, but this speaker is strictly addressing legal mandates, regulatory authority, and product seizure laws.'
    }
  },
  {
    id: 's2-q4',
    stage: 2,
    situationContext: 'A mountain village debates welcoming eco-tourists to their annual harvest celebration.',
    speakerRole: 'Community Cultural Custodian',
    statement: 'Our traditional songs and dance costumes embody the spiritual story of our ancestors. If tourists record and sell these without understanding our sacred rituals, our community identity will be degraded.',
    correctLens: 'cultural',
    primaryClueExplanation: 'The argument defends spiritual customs, ancestral narratives, sacred rituals, and the preservation of community identity—a Cultural perspective.',
    misconceptionAlert: {
      temptingLens: 'social',
      warning: 'The concern is not just community gathering, but the protection of sacred spiritual rituals and ancestral traditions from commercial disrespect.'
    }
  },
  {
    id: 's2-q5',
    stage: 2,
    situationContext: 'A municipality upgrades its public bus fleet to low-floor electric vehicles.',
    speakerRole: 'Disability Rights Advocate',
    statement: 'Low-floor buses with automated boarding ramps ensure wheelchair users, elderly citizens, and parents with baby strollers can move independently without relying on charity.',
    correctLens: 'social',
    primaryClueExplanation: 'The core concern is human dignity, accessibility for vulnerable groups, and equal inclusion in public infrastructure—a Social perspective.',
    misconceptionAlert: {
      temptingLens: 'political',
      warning: 'Public transit is government-run, but this viewpoint advocates for human equity, dignity, and accessibility for vulnerable citizens.'
    }
  }
];

// Stage 3: Mixed Perspectives (Deep contextual dilemma with multi-lens tensions)
export const STAGE_3_ITEMS: SwitcherItem[] = [
  {
    id: 's3-q1',
    stage: 3,
    situationContext: 'A coastal city plans to replace an old traditional market with a modern multi-story shopping mall.',
    speakerRole: 'Association of Traditional Market Vendors',
    statement: 'Over 400 micro-entrepreneurs earn their daily bread here. If stall rents jump five-fold in the new mall, these family micro-businesses will collapse and leave hundreds of households without income.',
    correctLens: 'economic',
    primaryClueExplanation: 'The argument focuses on daily income, vendor rents, family business survival, and financial hardship caused by commercial restructuring.',
    misconceptionAlert: {
      temptingLens: 'social',
      warning: 'Families are affected, but the primary argument is financial: stall rents, household income, and business viability.'
    }
  },
  {
    id: 's3-q2',
    stage: 3,
    situationContext: 'A coastal city plans to replace an old traditional market with a modern multi-story shopping mall.',
    speakerRole: 'Neighborhood Family Spokesperson',
    statement: 'This traditional market is where three generations of neighbors meet every morning to talk, check on elderly vendors, and sustain our neighborhood gotong-royong spirit. A sterile commercial mall destroys that social bond.',
    correctLens: 'social',
    primaryClueExplanation: 'The statement emphasizes social bonding, neighborly relations, caring for elderly residents, and gotong-royong community cohesion.',
    misconceptionAlert: {
      temptingLens: 'cultural',
      warning: 'While gotong-royong has cultural roots, the speaker focuses on daily human relationships, mutual neighbor care, and community cohesion.'
    }
  },
  {
    id: 's3-q3',
    stage: 3,
    situationContext: 'A coastal city plans to replace an old traditional market with a modern multi-story shopping mall.',
    speakerRole: 'City Planning Board Member',
    statement: 'The building permit requires approval under Zoning Regulation 2024. The mayor has the executive prerogative to designate this parcel as a mixed-use commercial development zone through official decree.',
    correctLens: 'political',
    primaryClueExplanation: 'The speaker references official zoning regulations, mayoral executive decrees, legal building permits, and state urban planning authority.',
    misconceptionAlert: {
      temptingLens: 'economic',
      warning: 'Urban planning affects development, but the argument relies on executive decrees, regulations, and legal authority.'
    }
  },
  {
    id: 's3-q4',
    stage: 3,
    situationContext: 'A coastal city plans to replace an old traditional market with a modern multi-story shopping mall.',
    speakerRole: 'Local Heritage Preservationist',
    statement: 'The architecture of this open-air bazaar reflects Dutch-colonial and Javanese timber craftsmanship from 1928. Demolishing it destroys an irreplaceable chapter of our city’s living cultural heritage.',
    correctLens: 'cultural',
    primaryClueExplanation: 'The statement champions architectural heritage, historical craftsmanship, and the protection of irreplaceable cultural history.',
    misconceptionAlert: {
      temptingLens: 'political',
      warning: 'The speaker wants historic designation, but their fundamental justification is the historic, aesthetic, and cultural value of the 1928 craftsmanship.'
    }
  },
  {
    id: 's3-q5',
    stage: 3,
    situationContext: 'A national debate on introducing artificial intelligence tutoring in public high schools.',
    speakerRole: 'Public School Parent Council',
    statement: 'Wealthy private school students already have private human tutors. If public schools do not provide free AI tools, rural and low-income students will fall even further behind, widening educational inequality.',
    correctLens: 'social',
    primaryClueExplanation: 'The core argument addresses educational fairness, bridging the gap between rich and poor, and protecting low-income students from systemic inequality.',
    misconceptionAlert: {
      temptingLens: 'economic',
      warning: 'Although private tutors cost money, the primary concern is fairness, equal educational opportunity, and preventing social inequality.'
    }
  }
];

// Final Synthesis Challenge: One situation, four simultaneous viewpoints to classify
export interface FinalSynthesisChallenge {
  situationTitle: string;
  situationContext: string;
  viewpoints: {
    id: string;
    speaker: string;
    statement: string;
    correctLens: LensType;
    explanation: string;
  }[];
}

export const FINAL_SYNTHESIS_CHALLENGE: FinalSynthesisChallenge = {
  situationTitle: 'A Municipality Introduces 100% Electric Rapid Transit Buses',
  situationContext: 'A growing metropolitan city plans to replace all diesel public minibuses with a centralized, zero-emission electric bus network over the next three years. Four stakeholders share their viewpoints:',
  viewpoints: [
    {
      id: 'final-vp-1',
      speaker: 'Informal Minibus Drivers Union',
      statement: 'Private informal drivers have purchased their own vehicles with personal loans. If the city bans private minibuses, hundreds of driver families will default on bank debts and lose their primary livelihood.',
      correctLens: 'economic',
      explanation: 'Focuses on driver bank loans, vehicle debt defaults, and family livelihood income.'
    },
    {
      id: 'final-vp-2',
      speaker: 'City Council Transport Committee',
      statement: 'The city council is empowered under National Clean Air Act Section 12 to enact binding emission ceilings and revoke non-compliant commercial road licenses.',
      correctLens: 'political',
      explanation: 'Appeals to statutory Clean Air Acts, legislative authority, and regulatory license revocation.'
    },
    {
      id: 'final-vp-3',
      speaker: 'Suburban Commuters Alliance',
      statement: 'Clean, reliable electric buses will reduce asthma and respiratory illness among children and seniors waiting at roadside stops, creating a healthier living environment for all families.',
      correctLens: 'social',
      explanation: 'Centers on public health outcomes, childhood asthma reduction, and vulnerable family well-being.'
    },
    {
      id: 'final-vp-4',
      speaker: 'Local Urban Heritage Historian',
      statement: 'The colorful hand-painted decorations on local minibuses have been an iconic part of our city’s popular street culture for fifty years. Standardized corporate buses will erase that unique artistic expression.',
      correctLens: 'cultural',
      explanation: 'Defends popular street art, creative grassroots identity, and fifty years of unique cultural expression.'
    }
  ]
};
