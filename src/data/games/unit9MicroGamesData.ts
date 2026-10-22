/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 121–134)
 * Language Level: CEFR B1 English
 * 
 * Contains verified curriculum challenges for:
 *  1. g9-1: Claim Classifier (Claims of Fact, Claims of Value, Claims of Policy)
 *  2. g9-2: Assumption Unmasker (Explicit vs. Implicit Claims, Hidden Warrants, Hedging)
 *  3. g9-3: Echo Chamber Breaker (Filter Bubbles, Confirmation Traps, Counter-Framing)
 */

// ============================================================================
// GAME 1: CLAIM CLASSIFIER (g9-1)
// ============================================================================

export type ClaimType = 'fact' | 'value' | 'policy';

export interface ClaimClassifierItem {
  id: string;
  stage: 1 | 2 | 3;
  statement: string;
  speakerOrContext: string;
  correctClaimType: ClaimType;
  options: {
    type: ClaimType;
    label: string;
    description: string;
  }[];
  explanation: string;
  howToProve: string;
  pedagogicalTakeaway: string;
}

export const CLAIM_TYPE_OPTIONS = [
  {
    type: 'fact' as ClaimType,
    label: 'Claim of Fact',
    description: 'Asserts what existed, exists, or will exist; verified through data, measurement, and physical observation.'
  },
  {
    type: 'value' as ClaimType,
    label: 'Claim of Value',
    description: 'Asserts judgments of worth, morality, fairness, or beauty; grounded in ethical, cultural, or philosophical criteria.'
  },
  {
    type: 'policy' as ClaimType,
    label: 'Claim of Policy',
    description: 'Asserts specific institutional rules or actions that should, must, or ought to be enacted to solve a problem.'
  }
];

export const G9_1_CHALLENGES: ClaimClassifierItem[] = [
  // STAGE 1: FOUNDATIONAL TRI-CLAIM RECOGNITION (Items 1-4)
  {
    id: 'g9-1-c1',
    stage: 1,
    statement: 'Over 8 million tons of plastic waste enter global oceans every year, threatening over 700 marine species.',
    speakerOrContext: 'Marine Biology Research Summary',
    correctClaimType: 'fact',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Fact. It asserts an observable, measurable physical reality that can be verified or disproven using empirical data and oceanic surveys.',
    howToProve: 'Measure annual waste tonnage and count documented marine species affected.',
    pedagogicalTakeaway: 'Claims of fact assert measurable reality and are tested against empirical data.'
  },
  {
    id: 'g9-1-c2',
    stage: 1,
    statement: 'Allowing marine biodiversity to perish for the convenience of single-use plastic packaging is ethically unacceptable.',
    speakerOrContext: 'Environmental Ethics Editorial',
    correctClaimType: 'value',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Value. It judges the moral rightness or wrongness of human behavior using ethical concepts like "ethically unacceptable" and "convenience vs. extinction".',
    howToProve: 'Defend ethical criteria such as ecological stewardship and intergenerational justice.',
    pedagogicalTakeaway: 'Claims of value evaluate worth, morality, and justice using philosophical and ethical principles.'
  },
  {
    id: 'g9-1-c3',
    stage: 1,
    statement: 'The national parliament must mandate a 100% tax on non-biodegradable shopping bags starting in January 2026.',
    speakerOrContext: 'Parliamentary Legislative Brief',
    correctClaimType: 'policy',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Policy. It uses the normative verb "must mandate" and proposes a specific administrative rule and timeline for government action.',
    howToProve: 'Demonstrate legal feasibility, economic viability, and effective enforcement mechanisms.',
    pedagogicalTakeaway: 'Claims of policy demand concrete institutional rules and actions, signaled by words like "must", "should", and "ought to".'
  },
  {
    id: 'g9-1-c4',
    stage: 1,
    statement: 'Average daytime temperatures in Jakarta rose by 1.2 degrees Celsius between 1980 and 2020.',
    speakerOrContext: 'Meteorological Agency Historical Report (BMKG)',
    correctClaimType: 'fact',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Fact. It makes an empirical statement about historical temperature records that can be verified through meteorological sensor logs.',
    howToProve: 'Examine official weather station thermometer archives over four decades.',
    pedagogicalTakeaway: 'Past and historical conditions tested by records are Claims of Fact.'
  },

  // STAGE 2: PREDICTIONS, ETHICAL TENSIONS & CONDITIONAL CLAIMS (Items 5-8)
  {
    id: 'g9-1-c5',
    stage: 2,
    statement: 'Without immediate floodwall construction, 25% of coastal North Jakarta will experience daily tidal inundation by 2045.',
    speakerOrContext: 'Hydrological Modeling Projection',
    correctClaimType: 'fact',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Fact (Future Prediction). Even though it describes the future, it is an empirical claim based on physical topographic measurements and tidal modeling, not a moral judgment or a law.',
    howToProve: 'Evaluate topographic elevation surveys, ground subsidence rates, and ocean rise models.',
    pedagogicalTakeaway: 'Scientific projections about future physical conditions are Claims of Fact, not value judgments.'
  },
  {
    id: 'g9-1-c6',
    stage: 2,
    statement: 'Preserving the ancestral lands of indigenous Dayak communities is morally superior to clearing forests for biofuel plantations.',
    speakerOrContext: 'Human Rights and Indigenous Advocacy Group',
    correctClaimType: 'value',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Value. The phrase "morally superior" establishes an explicit ethical hierarchy between cultural human rights and commercial agricultural profits.',
    howToProve: 'Articulate human rights frameworks (UNDRIP), ancestral heritage dignity, and ethical criteria.',
    pedagogicalTakeaway: 'Value claims compare competing priorities using moral, cultural, or aesthetic criteria.'
  },
  {
    id: 'g9-1-c7',
    stage: 2,
    statement: 'Municipal education departments should allocate 15% of annual budgets to expand mental health counseling in secondary schools.',
    speakerOrContext: 'Youth Psychology Advisory Council',
    correctClaimType: 'policy',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Policy. It uses the normative verb "should allocate" and proposes a specific financial policy to solve student wellbeing challenges.',
    howToProve: 'Present budgetary cost-benefit analyses, counselor staffing ratios, and student mental health outcomes.',
    pedagogicalTakeaway: 'Proposals specifying budget distribution and administrative reforms are Claims of Policy.'
  },
  {
    id: 'g9-1-c8',
    stage: 2,
    statement: 'Batik art made using traditional hand-drawn wax (batik tulis) possesses greater cultural beauty and soul than factory screen-printed textiles.',
    speakerOrContext: 'Indonesian Heritage Arts Council',
    correctClaimType: 'value',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Value (Aesthetic & Cultural). Words like "greater cultural beauty and soul" express an aesthetic judgment rooted in craftsmanship and tradition rather than a physical measurement.',
    howToProve: 'Define aesthetic criteria: artisan mastery, heritage preservation, and cultural storytelling.',
    pedagogicalTakeaway: 'Aesthetic appraisals of artistic beauty and cultural worth are Claims of Value.'
  },

  // STAGE 3: COMPLEX DISCOURSE IN REAL-WORLD CONTROVERSIES (Items 9-11)
  {
    id: 'g9-1-c9',
    stage: 3,
    statement: 'The Batang Toru hydroelectric dam in North Sumatra produces 510 megawatts of low-carbon electricity, offsetting 1.6 million tons of carbon emissions annually.',
    speakerOrContext: 'Energy Ministry Project Factsheet',
    correctClaimType: 'fact',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Fact. It quantifies the power capacity and greenhouse gas offset in empirical, measurable engineering units (megawatts and carbon tonnage).',
    howToProve: 'Verify turbine generation ratings and electrical grid carbon-displacement calculations.',
    pedagogicalTakeaway: 'Engineering specifications and emissions measurements are Claims of Fact.'
  },
  {
    id: 'g9-1-c10',
    stage: 3,
    statement: 'Causing the extinction of the Tapanuli orangutan—of which only 800 individuals survive—is an unforgivable crime against Earth’s biodiversity.',
    speakerOrContext: 'International Conservation Alliance',
    correctClaimType: 'value',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Value. The description "an unforgivable crime against Earth’s biodiversity" makes a passionate moral evaluation regarding the sanctity of endangered species life.',
    howToProve: 'Defend ecological ethics and the intrinsic moral value of unique evolutionary species.',
    pedagogicalTakeaway: 'Moral condemnations and appeals to ecological duty are Claims of Value.'
  },
  {
    id: 'g9-1-c11',
    stage: 3,
    statement: 'The provincial government ought to reroute the dam transmission tunnels away from the primary forest corridor and establish a legally protected wildlife reserve.',
    speakerOrContext: 'Environmental Policy Taskforce Recommendation',
    correctClaimType: 'policy',
    options: CLAIM_TYPE_OPTIONS,
    explanation: 'This is a Claim of Policy. It uses the normative verb "ought to reroute" and prescribes specific administrative infrastructure actions to protect habitat while allowing clean power.',
    howToProve: 'Provide engineering rerouting blueprints, ecological boundary maps, and cost feasibility estimates.',
    pedagogicalTakeaway: 'Actionable recommendations offering practical solutions to complex dilemmas are Claims of Policy.'
  }
];

// ============================================================================
// GAME 2: ASSUMPTION UNMASKER (g9-2)
// ============================================================================

export interface AssumptionUnmaskerItem {
  id: string;
  stage: 1 | 2 | 3;
  speakerOrAuthor: string;
  surfaceStatement: string;
  explicitClaim: string;
  correctHiddenAssumption: string;
  options: {
    id: string;
    text: string;
    isCorrectAssumption: boolean;
    analysisNote: string;
  }[];
  hedgedAlternative: string;
  pedagogicalTakeaway: string;
}

export const G9_2_CHALLENGES: AssumptionUnmaskerItem[] = [
  // STAGE 1: EXPLICIT VS. IMPLICIT UNMASKING (Items 1-4)
  {
    id: 'g9-2-c1',
    stage: 1,
    speakerOrAuthor: 'Fast-Fashion Social Media Campaign',
    surfaceStatement: '"Never be caught wearing the same dress twice! New $5 outfits dropping every Tuesday!" (Accompanied by influencers tossing older clothes into bins).',
    explicitClaim: 'The brand sells new clothing for $5 every Tuesday.',
    correctHiddenAssumption: 'Rewearing clothing is socially embarrassing, and continuous disposable consumerism is necessary for personal popularity.',
    options: [
      {
        id: 'opt-a',
        text: 'Rewearing clothes is socially embarrassing, and constant wasteful purchasing is necessary for social status.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The ad subtly encourages shame around repeating outfits to drive endless purchasing.'
      },
      {
        id: 'opt-b',
        text: 'Cotton farms require rainwater to grow.',
        isCorrectAssumption: false,
        analysisNote: 'Irrelevant agricultural fact that is neither stated nor assumed by the ad.'
      },
      {
        id: 'opt-c',
        text: 'Tuesday is the second working day of the week.',
        isCorrectAssumption: false,
        analysisNote: 'Calendar fact, not an unstated ideological assumption.'
      }
    ],
    hedgedAlternative: '"Purchasing durable, timeless clothing and rewearing quality garments supports environmental sustainability and personal budget health."',
    pedagogicalTakeaway: 'Unmasking implicit claims reveals how marketing relies on unstated social insecurities to sell products.'
  },
  {
    id: 'g9-2-c2',
    stage: 1,
    speakerOrAuthor: 'High School Administrator',
    surfaceStatement: '"Students who play video games after school will definitely fail their final examinations and ruin their careers."',
    explicitClaim: 'Video game playing causes academic failure.',
    correctHiddenAssumption: 'All video gaming is 100% harmful and students are incapable of balancing leisure screen time with study habits.',
    options: [
      {
        id: 'opt-a',
        text: 'All video game play is purely destructive and students lack any capacity for self-regulation or study discipline.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The speaker assumes gaming has zero cognitive benefit and inevitably destroys studying.'
      },
      {
        id: 'opt-b',
        text: 'Examinations contain multiple choice questions.',
        isCorrectAssumption: false,
        analysisNote: 'Format detail that is not the ideological assumption driving the extreme warning.'
      },
      {
        id: 'opt-c',
        text: 'Computer screens consume electrical energy.',
        isCorrectAssumption: false,
        analysisNote: 'Physical fact, not an unstated warrant.'
      }
    ],
    hedgedAlternative: '"Excessive, unregulated gaming can displace homework time, whereas moderate gaming with clear boundaries often coexists with strong academic performance."',
    pedagogicalTakeaway: 'Extreme absolute statements assume universal harm and ignore individual moderation and balance.'
  },
  {
    id: 'g9-2-c3',
    stage: 1,
    speakerOrAuthor: 'Automotive Marketing Billboard',
    surfaceStatement: '"Drive the all-new 4x4 Mountain King SUV through the city streets. Real men command the road!"',
    explicitClaim: 'The company sells a 4-wheel-drive sport utility vehicle.',
    correctHiddenAssumption: 'A person’s masculinity and worth are determined by driving an aggressive, oversized vehicle in urban traffic.',
    options: [
      {
        id: 'opt-a',
        text: 'Masculinity and personal power are validated by operating large, dominating machinery in civilian neighborhoods.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The ad links gender identity to aggressive commercial vehicle consumption.'
      },
      {
        id: 'opt-b',
        text: 'Rubber tires wear down over asphalt roads.',
        isCorrectAssumption: false,
        analysisNote: 'Physical friction reality, not an implicit value assumption.'
      },
      {
        id: 'opt-c',
        text: 'Mountains are taller than hills.',
        isCorrectAssumption: false,
        analysisNote: 'Geographical definition, not the hidden message.'
      }
    ],
    hedgedAlternative: '"While 4x4 vehicles provide traction on rough rural trails, compact transit modes are far more efficient and safer for dense city commuting."',
    pedagogicalTakeaway: 'Commercial advertising frequently builds hidden assumptions connecting identity and status to commodity ownership.'
  },
  {
    id: 'g9-2-c4',
    stage: 1,
    speakerOrAuthor: 'School Cafeteria Committee Member',
    surfaceStatement: '"If we ban spicy sambal from the school canteen, all student stomach complaints will disappear overnight."',
    explicitClaim: 'Removing sambal will eliminate all gastrointestinal illness among students.',
    correctHiddenAssumption: 'Spicy chili sauce is the sole cause of student stomach aches, completely ignoring viral bugs, food cleanliness, and stress.',
    options: [
      {
        id: 'opt-a',
        text: 'Spicy sambal is the single root cause of all digestive issues, ignoring bacteria, food freshness, hand hygiene, and exam stress.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The proposal assumes a monocausal explanation for a complex health symptom.'
      },
      {
        id: 'opt-b',
        text: 'Chilies contain red capsaicin molecules.',
        isCorrectAssumption: false,
        analysisNote: 'Chemical fact, not an unexamined assumption.'
      },
      {
        id: 'opt-c',
        text: 'Students eat food during recess.',
        isCorrectAssumption: false,
        analysisNote: 'Basic behavior, not a hidden warrant.'
      }
    ],
    hedgedAlternative: '"Regulating extreme spice levels may reduce heartburn, but improving overall food hygiene and handwashing is necessary to prevent gastrointestinal illness."',
    pedagogicalTakeaway: 'Monocausal claims assume complex problems have only one simple scapegoat.'
  },

  // STAGE 2: UNMASKING HIDDEN WARRANTS IN POLICY ARGUMENTS (Items 5-8)
  {
    id: 'g9-2-c5',
    stage: 2,
    speakerOrAuthor: 'City Parking Authority Spokesperson',
    surfaceStatement: '"We must pave over the historic downtown neighborhood park to build a 6-story multi-level parking garage because drivers complain about finding parking spaces."',
    explicitClaim: 'The city should demolish a park to construct car parking.',
    correctHiddenAssumption: 'Convenience for private automobile owners is more important than green spaces, tree canopy, and community wellbeing.',
    options: [
      {
        id: 'opt-a',
        text: 'The convenience of private car drivers has higher priority than public green recreation, clean air, and community health.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The argument assumes private car access automatically overrides public parkland.'
      },
      {
        id: 'opt-b',
        text: 'Concrete is composed of cement, gravel, and water.',
        isCorrectAssumption: false,
        analysisNote: 'Construction material definition, not an ideological premise.'
      },
      {
        id: 'opt-c',
        text: 'Automobiles require parking when not in motion.',
        isCorrectAssumption: false,
        analysisNote: 'Obvious physical reality that does not justify destroying a park.'
      }
    ],
    hedgedAlternative: '"Rather than sacrificing vital public parkland for parking, the city could expand shuttle buses and park-and-ride hubs on peripheral industrial land."',
    pedagogicalTakeaway: 'Policy proposals often hide unstated value rankings that privilege one stakeholder group over the public good.'
  },
  {
    id: 'g9-2-c6',
    stage: 2,
    speakerOrAuthor: 'University Admissions Consultant',
    surfaceStatement: '"Every Grade 10 student should study computer coding; anyone who studies literature, history, or philosophy is wasting their life."',
    explicitClaim: 'Only programming education is valuable; the humanities are useless.',
    correctHiddenAssumption: 'Human worth and education are measured solely by immediate corporate technical utility and software salaries.',
    options: [
      {
        id: 'opt-a',
        text: 'The sole purpose of human education is immediate technological monetization, while critical thinking, ethics, and culture have zero worth.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The speaker assumes narrow technical utility is the only valid metric of human learning.'
      },
      {
        id: 'opt-b',
        text: 'Computers run on binary machine code.',
        isCorrectAssumption: false,
        analysisNote: 'Technical fact, not the philosophical assumption.'
      },
      {
        id: 'opt-c',
        text: 'Shakespeare wrote plays in English.',
        isCorrectAssumption: false,
        analysisNote: 'Historical fact, not the hidden warrant.'
      }
    ],
    hedgedAlternative: '"While software engineering skills offer strong career opportunities, humanities cultivate ethical judgment and communication essential for leadership."',
    pedagogicalTakeaway: 'Statements that dismiss entire disciplines assume that economic monetization is the only goal of education.'
  },
  {
    id: 'g9-2-c7',
    stage: 2,
    speakerOrAuthor: 'Public Health Campaigner',
    surfaceStatement: '"If people truly cared about their children’s health, they would only buy 100% certified organic vegetables from boutique supermarkets."',
    explicitClaim: 'Caring parents buy organic produce exclusively.',
    correctHiddenAssumption: 'All families have the financial budget to pay 300% higher organic food prices, and low-income parents who buy regular food are neglectful.',
    options: [
      {
        id: 'opt-a',
        text: 'All families possess unlimited household budgets, and parents who cannot afford expensive specialty groceries do not love their children.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The claim assumes financial privilege and moralizes economic poverty.'
      },
      {
        id: 'opt-b',
        text: 'Vegetables contain vitamins and dietary fiber.',
        isCorrectAssumption: false,
        analysisNote: 'Nutritional fact, not an unstated class assumption.'
      },
      {
        id: 'opt-c',
        text: 'Supermarkets have refrigeration units.',
        isCorrectAssumption: false,
        analysisNote: 'Retail detail, not the hidden prejudice.'
      }
    ],
    hedgedAlternative: '"While organic produce minimizes synthetic pesticides, thoroughly washing affordable fresh local vegetables provides excellent nutrition for all families."',
    pedagogicalTakeaway: 'Moralizing lifestyle advice often conceals unexamined socio-economic privilege.'
  },
  {
    id: 'g9-2-c8',
    stage: 2,
    speakerOrAuthor: 'School Principal on AI in Classrooms',
    surfaceStatement: '"We must permanently ban all AI writing tools in our school; using any AI makes thinking impossible."',
    explicitClaim: 'Artificial intelligence completely prevents human cognitive thought.',
    correctHiddenAssumption: 'Students are unable to use AI as a formative brainstorm partner without cheating, and AI offers zero legitimate pedagogical value.',
    options: [
      {
        id: 'opt-a',
        text: 'Students will inevitably use technology to cheat, and interactive digital scaffolding can never enhance human learning.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The ban assumes technology can only corrupt rather than scaffold critical inquiry.'
      },
      {
        id: 'opt-b',
        text: 'Artificial intelligence algorithms run on computer servers.',
        isCorrectAssumption: false,
        analysisNote: 'Hardware reality, not an educational assumption.'
      },
      {
        id: 'opt-c',
        text: 'Schools possess printed textbooks.',
        isCorrectAssumption: false,
        analysisNote: 'Classroom fact, not the unstated belief.'
      }
    ],
    hedgedAlternative: '"Uncritical reliance on AI can weaken independent drafting, but guided AI use for brainstorming and data analysis fosters vital digital literacy."',
    pedagogicalTakeaway: 'Total bans often stem from unstated assumptions of student dishonesty rather than balanced digital ethics.'
  },

  // STAGE 3: TRANSFORMING DOGMATIC ABSOLUTES INTO HEDGED SCHOLARSHIP (Items 9-11)
  {
    id: 'g9-2-c9',
    stage: 3,
    speakerOrAuthor: 'Agricultural Activist Speech',
    surfaceStatement: '"It is an undeniable, indisputable fact that organic farming will easily feed the entire planet without any chemical inputs."',
    explicitClaim: 'Organic farming is 100% capable of feeding all humanity without chemicals.',
    correctHiddenAssumption: 'Current organic crop yields per hectare are identical to synthetic yields, and sudden transition would cause zero crop shortages.',
    options: [
      {
        id: 'opt-a',
        text: 'Organic yields per hectare equal modern high-yield agriculture, and zero land clearance would be needed to replace synthetic fertilizers.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! Agricultural science shows organic yields average 20-30% lower, so the claim assumes land constraints do not exist.'
      },
      {
        id: 'opt-b',
        text: 'Earth revolves around the Sun.',
        isCorrectAssumption: false,
        analysisNote: 'Cosmic fact, not an agricultural assumption.'
      },
      {
        id: 'opt-c',
        text: 'Plants absorb sunlight through photosynthesis.',
        isCorrectAssumption: false,
        analysisNote: 'Biological reality, not the hidden dogmatic leap.'
      }
    ],
    hedgedAlternative: '"Organic practices improve soil ecology, but hybrid sustainable approaches may be needed to maintain crop yields required for global food security."',
    pedagogicalTakeaway: 'Dogmatic certainty ("indisputable", "undeniable") ignores complex trade-offs that hedged scholarship balances.'
  },
  {
    id: 'g9-2-c10',
    stage: 3,
    speakerOrAuthor: 'Urban Commuter Advocacy Group',
    surfaceStatement: '"Electric vehicles are 100% clean and produce zero environmental damage anywhere on Earth."',
    explicitClaim: 'Electric cars cause zero ecological harm.',
    correctHiddenAssumption: 'Mining lithium and nickel creates zero environmental destruction, and electric power grids are 100% powered by renewable energy.',
    options: [
      {
        id: 'opt-a',
        text: 'Battery mineral extraction causes zero ecological disruption, and electricity used for battery charging comes entirely from clean green sources.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The claim ignores supply chain emissions, battery mining runoff, and coal-fired electrical grids.'
      },
      {
        id: 'opt-b',
        text: 'Electric motors use magnetic coils.',
        isCorrectAssumption: false,
        analysisNote: 'Engineering fact, not an environmental assumption.'
      },
      {
        id: 'opt-c',
        text: 'Cars possess wheels made of vulcanized rubber.',
        isCorrectAssumption: false,
        analysisNote: 'Tire fact, not the hidden premise.'
      }
    ],
    hedgedAlternative: '"Electric vehicles eliminate urban tailpipe emissions, though sustainable lifecycle management must address battery mining impacts and grid decarbonization."',
    pedagogicalTakeaway: 'Labeling any modern industrial product as "100% zero-damage" ignores supply chain and mining realities.'
  },
  {
    id: 'g9-2-c11',
    stage: 3,
    speakerOrAuthor: 'Public Transit Reformer',
    surfaceStatement: '"Building dedicated bus rapid transit lanes will instantly solve all traffic congestion in Greater Jakarta."',
    explicitClaim: 'Bus lanes will completely eliminate all traffic jams.',
    correctHiddenAssumption: 'Traffic congestion has only one cause, and all motorcycle and car commuters will immediately abandon private transport.',
    options: [
      {
        id: 'opt-a',
        text: 'Traffic congestion stems from a single factor, and private vehicle owners will universally switch to public buses regardless of last-mile gaps.',
        isCorrectAssumption: true,
        analysisNote: 'Correct! The claim assumes total modal shift without accounting for housing sprawl and last-mile connectivity.'
      },
      {
        id: 'opt-b',
        text: 'Buses run on diesel or electric power.',
        isCorrectAssumption: false,
        analysisNote: 'Engine type, not an urban planning warrant.'
      },
      {
        id: 'opt-c',
        text: 'Asphalt roads have lane markings.',
        isCorrectAssumption: false,
        analysisNote: 'Roadway feature, not the unstated belief.'
      }
    ],
    hedgedAlternative: '"Dedicated bus rapid transit lanes provide dependable transit corridors, though comprehensive decongestion also requires integrated feeder microbuses and safe pedestrian paths."',
    pedagogicalTakeaway: 'Hedged claims acknowledge multi-layered urban realities instead of promising miraculous single-step cures.'
  }
];

// ============================================================================
// GAME 3: ECHO CHAMBER BREAKER (g9-3)
// ============================================================================

export interface EchoChamberItem {
  id: string;
  stage: 1 | 2 | 3;
  bubbleName: string;
  bubbleTheme: string;
  algorithmSnippet: string;
  dominantNarrative: string;
  missingPerspectiveLens: 'economic' | 'social_cultural' | 'environmental' | 'technological' | 'political';
  bestCounterEvidence: string;
  options: {
    id: string;
    text: string;
    isStrongestCounterMove: boolean;
    reasoning: string;
  }[];
  intellectualHumilityLesson: string;
  pedagogicalTakeaway: string;
}

export const G9_3_CHALLENGES: EchoChamberItem[] = [
  // STAGE 1: DIAGNOSING FILTER BUBBLES & CONFIRMATION TRAPS (Items 1-4)
  {
    id: 'g9-3-c1',
    stage: 1,
    bubbleName: 'The "Organic Only" Wellness Feed',
    bubbleTheme: 'Health and Nutrition Social Media',
    algorithmSnippet: 'User clicked on 3 raw food reels. Now the feed serves 100% content claiming: "All modern medicine is toxic poison; eating raw guava cures pneumonia; doctors are evil corporate agents."',
    dominantNarrative: 'Only natural remedies work; modern clinical medicine is a dangerous corporate scam.',
    missingPerspectiveLens: 'technological',
    bestCounterEvidence: 'Peer-reviewed medical epidemiology showing antibiotics and childhood vaccines reduced infant mortality worldwide by 75% over the past century.',
    options: [
      {
        id: 'opt-a',
        text: 'Inject empirical historical data showing modern antibiotics and vaccines reduced infant mortality by 75%.',
        isStrongestCounterMove: true,
        reasoning: 'Presents verified clinical evidence directly disproving the extreme claim that modern medicine has zero life-saving value.'
      },
      {
        id: 'opt-b',
        text: 'Argue that nutrition has zero influence on health and that lifestyle choices are completely irrelevant.',
        isStrongestCounterMove: false,
        reasoning: 'Over-correcting into nutritional nihilism dismisses valid dietary science and alienates participants.'
      },
      {
        id: 'opt-c',
        text: 'Continue liking and commenting on wellness reels to see if the algorithm eventually shows opposing medical studies.',
        isStrongestCounterMove: false,
        reasoning: 'Engagement signals tell the algorithm to feed even more extreme echo chamber content.'
      }
    ],
    intellectualHumilityLesson: 'Algorithmic feeds amplify extreme viewpoints. Actively search for peer-reviewed counter-evidence to break the bubble.',
    pedagogicalTakeaway: 'Breaking an echo chamber requires introducing verifiable facts without attacking the participants personal dignity.'
  },
  {
    id: 'g9-3-c2',
    stage: 1,
    bubbleName: 'The "Crypto Wealth Overnight" Forum',
    bubbleTheme: 'Speculative Financial Investment',
    algorithmSnippet: 'Discussion group shares only screenshots of 10,000% profits. Any member asking about financial losses or regulatory fraud is instantly banned as a "hater who wants us to stay poor."',
    dominantNarrative: 'Speculative digital tokens guarantee immediate riches with zero risk of loss.',
    missingPerspectiveLens: 'economic',
    bestCounterEvidence: 'Audited financial records showing that 95% of retail crypto traders lose their savings within 18 months, alongside regulatory consumer warning alerts.',
    options: [
      {
        id: 'opt-a',
        text: 'Share financial market statistics showing that over 90% of day-traders in unregulated tokens experience net financial losses.',
        isStrongestCounterMove: true,
        reasoning: 'Presents grounded statistical realities to balance selective survivorship bias.'
      },
      {
        id: 'opt-b',
        text: 'Assume that because group members post screenshots of gains, their investment strategy must be mathematically sound.',
        isStrongestCounterMove: false,
        reasoning: 'Falls victim to survivorship bias, ignoring the thousands of silent users who lost money.'
      },
      {
        id: 'opt-c',
        text: 'Rely solely on positive forum testimonials while disregarding independent consumer protection alerts.',
        isStrongestCounterMove: false,
        reasoning: 'Echo chamber moderation deletes critical reports to manufacture false consensus.'
      }
    ],
    intellectualHumilityLesson: 'Echo chambers suppress dissenting voices. Notice who is being silenced or banned from the room.',
    pedagogicalTakeaway: 'When a forum censors warnings, it creates a dangerous artificial consensus (survivorship bias).'
  },
  {
    id: 'g9-3-c3',
    stage: 1,
    bubbleName: 'The "Cars Only" Urban Planning Group',
    bubbleTheme: 'City Infrastructure & Transportation',
    algorithmSnippet: 'Members post daily memes blaming cyclists, pedestrians, and bus rapid transit for traffic delays: "Just add two more highway lanes and traffic will flow smoothly forever!"',
    dominantNarrative: 'Widening highways is the only solution to urban gridlock; public transit is a waste of road space.',
    missingPerspectiveLens: 'environmental',
    bestCounterEvidence: 'Empirical civil engineering studies documenting Induced Demand: widening highways attracts more cars, resulting in worse gridlock within 2 to 3 years.',
    options: [
      {
        id: 'opt-a',
        text: 'Introduce the proven concept of Induced Demand with traffic data showing expanded highways re-clog within 24 months.',
        isStrongestCounterMove: true,
        reasoning: 'Exposes the engineering flaw in the dominant narrative using transportation science.'
      },
      {
        id: 'opt-b',
        text: 'Demand that all public buses and commuter rail lines be defunded to widen private traffic lanes.',
        isStrongestCounterMove: false,
        reasoning: 'Doubles down on the flawed bubble assertion, worsening urban congestion.'
      },
      {
        id: 'opt-c',
        text: 'Assume that building wider roads has no effect on commuter driving decisions.',
        isStrongestCounterMove: false,
        reasoning: 'Ignores the proven transport reality that new roadway capacity encourages more private vehicle trips.'
      }
    ],
    intellectualHumilityLesson: 'Single-interest groups overlook systemic feedback loops (like induced demand).',
    pedagogicalTakeaway: 'Counter-evidence must address the systemic mechanism causing the problem.'
  },
  {
    id: 'g9-3-c4',
    stage: 1,
    bubbleName: 'The "Anti-Tech School" Parent Chat',
    bubbleTheme: 'Education and Digital Technology',
    algorithmSnippet: 'Parents share sensational articles: "Laptops in school rot children’s brains! Children should only use slate boards and chalk!"',
    dominantNarrative: 'Digital tools have zero legitimate educational benefit and should be completely prohibited from all childhood environments.',
    missingPerspectiveLens: 'social_cultural',
    bestCounterEvidence: 'Educational research showing that structured digital literacy instruction prepares students for 21st-century careers while teaching responsible screen time.',
    options: [
      {
        id: 'opt-a',
        text: 'Share longitudinal educational studies showing balanced digital literacy prepares students for collaborative global research.',
        isStrongestCounterMove: true,
        reasoning: 'Demonstrates that purposeful educational use is radically different from mindless entertainment addiction.'
      },
      {
        id: 'opt-b',
        text: 'Propose replacing all computers with paper worksheets across every subject to eliminate parental debate.',
        isStrongestCounterMove: false,
        reasoning: 'Surrenders to moral panic rather than fostering necessary 21st-century research competencies.'
      },
      {
        id: 'opt-c',
        text: 'Quietly leave the chat group and allow fear-based generalizations to shape official school policies.',
        isStrongestCounterMove: false,
        reasoning: 'Passive withdrawal allows extreme views to dominate without balanced educational evidence.'
      }
    ],
    intellectualHumilityLesson: 'Nuance separates healthy moderation from moral panic.',
    pedagogicalTakeaway: 'Dismantle false dilemmas (all tech vs. zero tech) by framing balanced, healthy integration.'
  },

  // STAGE 2: FORMULATING BALANCED COUNTER-PERSPECTIVES (Items 5-8)
  {
    id: 'g9-3-c5',
    stage: 2,
    bubbleName: 'The "Zero Tourism" Conservation Bubble',
    bubbleTheme: 'National Park Wildlife Management',
    algorithmSnippet: 'Conservation forum members demand: "Evict all local residents and close Komodo National Park completely to all human tourists forever!"',
    dominantNarrative: 'Total exclusion of humans is the only ethical way to preserve ecology, ignoring local indigenous livelihoods.',
    missingPerspectiveLens: 'economic',
    bestCounterEvidence: 'Community-based ecotourism models showing that when local residents receive revenue from tourism and guiding, illegal poaching drops by 85%.',
    options: [
      {
        id: 'opt-a',
        text: 'Present community-based conservation data demonstrating that local economic benefit directly reduces illegal poaching and protects wildlife.',
        isStrongestCounterMove: true,
        reasoning: 'Bridges ecological protection with local economic survival (social-economic lens).'
      },
      {
        id: 'opt-b',
        text: 'Build concrete amusement parks and casino hotels across Komodo Island.',
        isStrongestCounterMove: false,
        reasoning: 'Extreme commercial exploitation that destroys fragile habitats.'
      },
      {
        id: 'opt-c',
        text: 'Claim that Komodo dragons prefer eating fried chicken from tourists.',
        isStrongestCounterMove: false,
        reasoning: 'Absurd falsehood harmful to animal health.'
      }
    ],
    intellectualHumilityLesson: 'Ecological solutions that impoverish local humans usually fail. Sustainable policy integrates human dignity.',
    pedagogicalTakeaway: 'Introduce economic lens realities to balance purely preservationist echo chambers.'
  },
  {
    id: 'g9-3-c6',
    stage: 2,
    bubbleName: 'The "Unrestricted Development" Commercial Boardroom',
    bubbleTheme: 'Urban Coastal Reclamation',
    algorithmSnippet: 'Real estate developers share models showing $10 billion in luxury waterfront villas: "The coastal mangrove swamp is useless smelly mud with zero commercial value!"',
    dominantNarrative: 'Mangroves have zero worth; concrete reclamation creates 100% positive economic value.',
    missingPerspectiveLens: 'environmental',
    bestCounterEvidence: 'Ecosystem service valuations proving that mangrove buffers prevent $250 million in annual storm surge damage and protect marine fisheries.',
    options: [
      {
        id: 'opt-a',
        text: 'Provide environmental valuation data showing coastal mangroves provide natural storm surge protection and fish breeding nurseries worth millions.',
        isStrongestCounterMove: true,
        reasoning: 'Speaks the language of economic value while defending ecological preservation.'
      },
      {
        id: 'opt-b',
        text: 'Tell the developers that money is evil and they should give away all their clothes.',
        isStrongestCounterMove: false,
        reasoning: 'Moral preaching that will be dismissed immediately in a commercial boardroom.'
      },
      {
        id: 'opt-c',
        text: 'Pour concrete over the remaining mangroves at night.',
        isStrongestCounterMove: false,
        reasoning: 'Surrenders to environmental destruction.'
      }
    ],
    intellectualHumilityLesson: 'Ecosystems provide hidden economic services (flood defense, fishery nursery) that myopic spreadsheets ignore.',
    pedagogicalTakeaway: 'Frame environmental defense in terms of measurable natural capital and disaster resilience.'
  },
  {
    id: 'g9-3-c7',
    stage: 2,
    bubbleName: 'The "Heritage Purity" Traditionalists',
    bubbleTheme: 'Traditional Architecture and Building Materials',
    algorithmSnippet: 'Cultural forum argues: "Traditional houses must never incorporate modern earthquake engineering, steel ties, or solar roof tiles, or our cultural identity is dead!"',
    dominantNarrative: 'Tradition requires rigid immobility; modern engineering materials pollute cultural heritage.',
    missingPerspectiveLens: 'technological',
    bestCounterEvidence: 'Seismic engineering studies showing culturally adaptive retrofits (concealed steel joints) preserve traditional aesthetics while saving human lives during earthquakes.',
    options: [
      {
        id: 'opt-a',
        text: 'Show examples of culturally sensitive seismic retrofits that preserve heritage woodworking while safeguarding human life in earthquake zones.',
        isStrongestCounterMove: true,
        reasoning: 'Demonstrates that cultural tradition and human safety can be harmoniously synthesized.'
      },
      {
        id: 'opt-b',
        text: 'Bulldoze all traditional wooden houses and replace them with grey concrete blocks.',
        isStrongestCounterMove: false,
        reasoning: 'Destroys invaluable cultural heritage.'
      },
      {
        id: 'opt-c',
        text: 'Pretend earthquakes do not happen in Indonesia.',
        isStrongestCounterMove: false,
        reasoning: 'Denies geological reality and endangers human lives.'
      }
    ],
    intellectualHumilityLesson: 'Living culture adapts to preserve what is sacred while keeping its community safe.',
    pedagogicalTakeaway: 'Synthetic bridge solutions honor cultural beauty while utilizing modern life-saving science.'
  },
  {
    id: 'g9-3-c8',
    stage: 2,
    bubbleName: 'The "Automate Everything" Tech Evangelists',
    bubbleTheme: 'Artificial Intelligence in Healthcare',
    algorithmSnippet: 'Tech enthusiast community claims: "Fire all human doctors and nurses! AI diagnostic robots should make 100% of medical and ethical decisions!"',
    dominantNarrative: 'Algorithms are infallible; human empathy, ethics, and clinical bedside judgment are obsolete.',
    missingPerspectiveLens: 'social_cultural',
    bestCounterEvidence: 'Clinical studies showing algorithmic diagnostic bias on diverse skin tones, alongside the vital therapeutic role of doctor-patient human empathy in recovery.',
    options: [
      {
        id: 'opt-a',
        text: 'Share clinical findings showing AI requires human physician oversight to catch algorithmic edge cases and provide compassionate patient care.',
        isStrongestCounterMove: true,
        reasoning: 'Advocates human-in-the-loop collaboration rather than blind technological replacement.'
      },
      {
        id: 'opt-b',
        text: 'Allow automated systems to operate without clinical oversight for routine cases while reserving human doctors only for emergencies.',
        isStrongestCounterMove: false,
        reasoning: 'Creates a risky diagnostic gap where automated misclassifications go undetected until emergencies occur.'
      },
      {
        id: 'opt-c',
        text: 'Argue that clinical healthcare should completely reject software algorithms to preserve traditional doctor intuition.',
        isStrongestCounterMove: false,
        reasoning: 'Rejects helpful diagnostic assistance tools instead of pursuing balanced human-AI collaboration.'
      }
    ],
    intellectualHumilityLesson: 'Technology assists human wisdom; it cannot replace human ethical accountability and empathy.',
    pedagogicalTakeaway: 'Counter tech-utopian echo chambers with human-centered ethical and clinical evidence.'
  },

  // STAGE 3: MULTI-LENS DISRUPTION & BRIDGE FORMULATION (Items 9-11)
  {
    id: 'g9-3-c9',
    stage: 3,
    bubbleName: 'The Single-Perspective Renewable Energy Polarizer',
    bubbleTheme: 'Geothermal Energy Drilling vs. Ancestral Forest Sacredness',
    algorithmSnippet: 'Two opposing echo chambers wage flame wars online: Group A calls Group B "backward cavemen blocking green energy"; Group B calls Group A "greedy forest destroyers."',
    dominantNarrative: 'A hostile either-or deadlock between green energy engineering and indigenous spiritual heritage.',
    missingPerspectiveLens: 'political',
    bestCounterEvidence: 'Collaborative comanagement agreements where indigenous elders guide directional horizontal drilling pathways outside sacred groves with profit-sharing.',
    options: [
      {
        id: 'opt-a',
        text: 'Facilitate a bridge solution using directional drilling techniques that access geothermal steam while fully preserving ancestral sacred forest zones.',
        isStrongestCounterMove: true,
        reasoning: 'Breaks the false binary by synthesizing clean energy needs with ancestral land rights.'
      },
      {
        id: 'opt-b',
        text: 'Prioritize geothermal drilling speed by bypassing community consultation to meet national green energy targets.',
        isStrongestCounterMove: false,
        reasoning: 'Violates human rights and community trust, escalating civil and legal deadlock.'
      },
      {
        id: 'opt-c',
        text: 'Cancel the geothermal project entirely and build fossil fuel generators on peripheral coastal land.',
        isStrongestCounterMove: false,
        reasoning: 'Abandons renewable clean energy goals instead of finding creative spatial engineering solutions.'
      }
    ],
    intellectualHumilityLesson: 'Polarized online debates create false either-or traps. Creative engineering and respect can build win-win bridges.',
    pedagogicalTakeaway: 'True critical thinking dissolves artificial binaries to discover mediated solutions.'
  },
  {
    id: 'g9-3-c10',
    stage: 3,
    bubbleName: 'The "Ban All Plastic Immediately" Student Protest Feed',
    bubbleTheme: 'School Canteen Single-Use Packaging Policies',
    algorithmSnippet: 'Student chat demands: "Shut down every canteen vendor tomorrow if they hand out any plastic wrap! Expel students who forget their reusable lunchboxes!"',
    dominantNarrative: 'Immediate punitive abolition is the only way to be moral; vendors and low-income students are villains.',
    missingPerspectiveLens: 'economic',
    bestCounterEvidence: 'Economic surveys showing small canteen vendors earn low daily margins and cannot afford sudden wholesale biodegradable containers without a phased school subsidy.',
    options: [
      {
        id: 'opt-a',
        text: 'Propose a phased transition with school bulk-purchasing subsidies for cassava-starch packaging so small vendors can comply without bankruptcy.',
        isStrongestCounterMove: true,
        reasoning: 'Replaces punitive self-righteousness with practical economic support and phased implementation.'
      },
      {
        id: 'opt-b',
        text: 'Immediately fine any vendor caught with plastic wrap while offering no institutional assistance for biodegradable alternatives.',
        isStrongestCounterMove: false,
        reasoning: 'Imposes heavy financial burdens on low-margin food vendors without addressing supplier access.'
      },
      {
        id: 'opt-c',
        text: 'Rely solely on voluntary student donation drives to purchase daily packaging for all school food stalls.',
        isStrongestCounterMove: false,
        reasoning: 'Voluntary charity is unstable and fails to create a permanent, institutionalized procurement system.'
      }
    ],
    intellectualHumilityLesson: 'Moral passion without economic empathy creates ineffective, cruel policies.',
    pedagogicalTakeaway: 'Combine environmental ideals with practical economic support for vulnerable stakeholders.'
  },
  {
    id: 'g9-3-c11',
    stage: 3,
    bubbleName: 'The "Standardized Testing is 100% Evil" Editorial Bubble',
    bubbleTheme: 'National Education Assessment and Benchmark Metrics',
    algorithmSnippet: 'Educational blog articles state: "Abolish all exams! Any teacher who gives a numerical grade hates children and destroys creativity!"',
    dominantNarrative: 'All quantitative assessment is inherently abusive; objective learning standards should be completely eliminated.',
    missingPerspectiveLens: 'political',
    bestCounterEvidence: 'Equity research showing standardized baseline metrics protect low-income and rural schools by exposing resource deficits that governments must fund.',
    options: [
      {
        id: 'opt-a',
        text: 'Demonstrate how objective baseline assessments help policymakers detect underfunded rural schools to direct state budget resources fairly.',
        isStrongestCounterMove: true,
        reasoning: 'Shows that fair, diagnostic assessment protects educational equity and resource accountability.'
      },
      {
        id: 'opt-b',
        text: 'Use standardized test rankings as the sole metric for school funding bonuses, cutting aid to underperforming schools.',
        isStrongestCounterMove: false,
        reasoning: 'Punitive ranking widens educational inequality rather than diagnosing student resource needs.'
      },
      {
        id: 'opt-c',
        text: 'Eliminate all standardized performance metrics and rely solely on unstructured self-evaluations written by students.',
        isStrongestCounterMove: false,
        reasoning: 'Subjective self-evaluations cannot provide objective data required for national resource allocation.'
      }
    ],
    intellectualHumilityLesson: 'Assessment tools are not inherently evil; their value depends on whether they diagnose student needs or punish them.',
    pedagogicalTakeaway: 'Recognize the systemic role of diagnostic data in achieving social and educational equity.'
  }
];
