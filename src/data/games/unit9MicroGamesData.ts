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
        text: 'Fast-fashion brands manufacture synthetic polyester textile garments in high-volume industrial facilities.',
        isCorrectAssumption: false,
        analysisNote: 'Factual manufacturing detail, not the hidden psychological value assumption about personal popularity.'
      },
      {
        id: 'opt-b',
        text: 'Rewearing clothing is socially embarrassing, and continuous disposable consumerism is required for personal status.',
        isCorrectAssumption: true,
        analysisNote: 'Underlying unstated premise: consumer worth depends on non-stop disposable apparel purchases.'
      },
      {
        id: 'opt-c',
        text: 'Modern digital social networks allow global retail influencers to broadcast short-form streaming video clips.',
        isCorrectAssumption: false,
        analysisNote: 'Technical media platform observation, not the underlying consumerism assumption.'
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
        text: 'Video games operate on digital computer graphics cards and require household electrical current to function.',
        isCorrectAssumption: false,
        analysisNote: 'Physical engineering fact, not the hidden educational assumption about student behavioral balance.'
      },
      {
        id: 'opt-b',
        text: 'Secondary school curricula require students to take cumulative standardized academic examinations in term two.',
        isCorrectAssumption: false,
        analysisNote: 'Standard schooling administrative fact, not the unexamined assumption about gaming causing failure.'
      },
      {
        id: 'opt-c',
        text: 'All video gaming is universally destructive, and adolescents cannot balance recreation with academic study.',
        isCorrectAssumption: true,
        analysisNote: 'Extreme absolute premise: ignores moderation, self-regulation, and educational games.'
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
        text: 'Personal masculinity, respect, and social authority are demonstrated by driving an aggressive, oversized vehicle.',
        isCorrectAssumption: true,
        analysisNote: 'Hidden marketing warrant: artificially linking gender identity to commercial vehicle ownership.'
      },
      {
        id: 'opt-b',
        text: 'Four-wheel-drive vehicles contain dual differentials designed to distribute motor torque across all axles.',
        isCorrectAssumption: false,
        analysisNote: 'Mechanical automotive engineering specification, not the cultural status assumption.'
      },
      {
        id: 'opt-c',
        text: 'Dense urban traffic corridors feature multi-lane paved municipal road networks and automated traffic signals.',
        isCorrectAssumption: false,
        analysisNote: 'Urban infrastructure description, not the unstated gender status premise.'
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
        text: 'Traditional Indonesian chili sambal condiments contain capsaicin compounds that stimulate taste buds.',
        isCorrectAssumption: false,
        analysisNote: 'Culinary chemistry fact, not the monocausal scapegoating assumption.'
      },
      {
        id: 'opt-b',
        text: 'Spicy chili sauce is the sole cause of stomach illness, while hygiene, food bacteria, and stress play zero role.',
        isCorrectAssumption: true,
        analysisNote: 'Single-cause fallacy: assuming an isolated dietary factor explains all gastrointestinal symptoms.'
      },
      {
        id: 'opt-c',
        text: 'School canteens serve warm cooked meals to students and teachers during scheduled lunchtime recess periods.',
        isCorrectAssumption: false,
        analysisNote: 'Everyday operational school detail, not the underlying medical assumption.'
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
        text: 'Modern multi-story vehicle garages are constructed using reinforced concrete pillars and asphalt driveways.',
        isCorrectAssumption: false,
        analysisNote: 'Structural civil engineering detail, not the urban policy priority assumption.'
      },
      {
        id: 'opt-b',
        text: 'Downtown commercial business districts experience peak vehicle traffic during morning and evening rush hours.',
        isCorrectAssumption: false,
        analysisNote: 'Observed traffic pattern, not the normative assumption prioritizing drivers over park users.'
      },
      {
        id: 'opt-c',
        text: 'Convenience for private automobile commuters takes priority over community parkland, canopy shade, and health.',
        isCorrectAssumption: true,
        analysisNote: 'Unexamined value premise: prioritizing driver convenience over shared ecological and community welfare.'
      }
    ],
    hedgedAlternative: '"Building satellite park-and-ride lots connected to rapid transit expands parking access while preserving irreplaceable urban green spaces."',
    pedagogicalTakeaway: 'Hidden value priorities often favor vehicle convenience over community health and green spaces.'
  },
  {
    id: 'g9-2-c6',
    stage: 2,
    speakerOrAuthor: 'Tech Industry Lobbyist',
    surfaceStatement: '"Every Grade 10 student should study computer coding; anyone who studies literature, history, or philosophy is wasting their life."',
    explicitClaim: 'All students should study coding and humanities are useless.',
    correctHiddenAssumption: 'Human worth and education are measured solely by immediate corporate technical utility and software salaries.',
    options: [
      {
        id: 'opt-a',
        text: 'Human worth and educational validity are measured exclusively by corporate technical utility and tech salaries.',
        isCorrectAssumption: true,
        analysisNote: 'Narrow economic instrumentalism: assuming liberal arts and critical humanities have zero human value.'
      },
      {
        id: 'opt-b',
        text: 'Software developers write program code in languages such as Python and JavaScript to build mobile applications.',
        isCorrectAssumption: false,
        analysisNote: 'Computer science programming description, not the philosophical assumption about educational purpose.'
      },
      {
        id: 'opt-c',
        text: 'High school academic libraries maintain physical collections of printed literature anthologies and history books.',
        isCorrectAssumption: false,
        analysisNote: 'Library archive fact, not the underlying educational value premise.'
      }
    ],
    hedgedAlternative: '"Digital literacy prepares students for technology careers, while studying humanities cultivates ethical discernment, empathy, and critical citizenship."',
    pedagogicalTakeaway: 'Technical education claims often presuppose narrow economic instrumentalism over holistic human development.'
  },
  {
    id: 'g9-2-c7',
    stage: 2,
    speakerOrAuthor: 'Organic Grocery Influencer',
    surfaceStatement: '"If people truly cared about their children’s health, they would only buy 100% certified organic vegetables from boutique supermarkets."',
    explicitClaim: 'Good parents only buy certified organic produce.',
    correctHiddenAssumption: 'All families have the financial budget to pay 300% higher organic food prices, and low-income parents who buy regular food are neglectful.',
    options: [
      {
        id: 'opt-a',
        text: 'Certified organic vegetables are cultivated without synthetic nitrogen fertilizers or chemical insecticides.',
        isCorrectAssumption: false,
        analysisNote: 'Agronomic agricultural definition, not the moralizing socio-economic assumption.'
      },
      {
        id: 'opt-b',
        text: 'All families possess the household income to afford luxury groceries, and cheaper food purchases reflect neglect.',
        isCorrectAssumption: true,
        analysisNote: 'Class-blind assumption: ignoring severe family budget constraints and equating poverty with lack of love.'
      },
      {
        id: 'opt-c',
        text: 'Supermarket retailers arrange fresh leafy green vegetables on chilled refrigerated display shelves each morning.',
        isCorrectAssumption: false,
        analysisNote: 'Grocery store merchandising fact, not the underlying moralizing assumption.'
      }
    ],
    hedgedAlternative: '"Washing conventionally farmed produce thoroughly provides affordable, vital nutrition for children across diverse family income levels."',
    pedagogicalTakeaway: 'Moralizing lifestyle choices masks deep socio-economic inequalities and budget constraints.'
  },
  {
    id: 'g9-2-c8',
    stage: 2,
    speakerOrAuthor: 'School Board Traditionalist',
    surfaceStatement: '"We must permanently ban all AI writing tools in our school; using any AI makes thinking impossible."',
    explicitClaim: 'Using AI makes thinking impossible and must be banned.',
    correctHiddenAssumption: 'Students are unable to use AI as a formative brainstorm partner without cheating, and AI offers zero legitimate pedagogical value.',
    options: [
      {
        id: 'opt-a',
        text: 'Generative machine learning models process text tokens using statistical transformer neural network algorithms.',
        isCorrectAssumption: false,
        analysisNote: 'Computer science algorithm description, not the educational deficit assumption.'
      },
      {
        id: 'opt-b',
        text: 'Secondary schools establish academic integrity guidelines governing formal examination and essay submissions.',
        isCorrectAssumption: false,
        analysisNote: 'Institutional policy rule, not the unstated pedagogical premise.'
      },
      {
        id: 'opt-c',
        text: 'Students lack all critical agency to use AI formatively, and automated digital tools offer zero learning value.',
        isCorrectAssumption: true,
        analysisNote: 'Technological panic assumption: assuming learners have zero metacognition and cannot learn ethical integration.'
      }
    ],
    hedgedAlternative: '"Restricting unmonitored AI during exams prevents academic fraud, while guided AI critique in class strengthens evaluative critical reasoning."',
    pedagogicalTakeaway: 'Technological moral panics assume users lack critical agency and cannot develop ethical usage protocols.'
  },

  // STAGE 3: SYNTHESIS & HEDGED REFLECTION (Items 9-11)
  {
    id: 'g9-2-c9',
    stage: 3,
    speakerOrAuthor: 'Eco-Enthusiast Pamphlet',
    surfaceStatement: '"It is an undeniable, indisputable fact that organic farming will easily feed the entire planet without any chemical inputs."',
    explicitClaim: 'Organic farming can feed the world without chemicals.',
    correctHiddenAssumption: 'Current organic crop yields per hectare are identical to synthetic yields, and sudden transition would cause zero crop shortages.',
    options: [
      {
        id: 'opt-a',
        text: 'Organic crop yields per hectare equal conventional farming immediately, with zero transition calorie deficits.',
        isCorrectAssumption: true,
        analysisNote: 'Unexamined agronomic premise: ignoring documented 20-30% yield gaps and global food distribution limits.'
      },
      {
        id: 'opt-b',
        text: 'Agricultural compost recycling converts discarded organic food waste into rich soil nutrient amendments.',
        isCorrectAssumption: false,
        analysisNote: 'Soil science composting fact, not the unstated global food security yield assumption.'
      },
      {
        id: 'opt-c',
        text: 'The United Nations Food and Agriculture Organization monitors worldwide grain production and crop reserves.',
        isCorrectAssumption: false,
        analysisNote: 'International agency function, not the hidden agronomic yield premise.'
      }
    ],
    hedgedAlternative: '"Expanding agro-ecological organic methods enhances biodiversity and soil health, though balanced hybrid fertilizers may remain necessary for staple crop yield security in dense regions."',
    pedagogicalTakeaway: 'Unquestioned ecological claims ignore agronomic yield trade-offs and global distribution realities.'
  },
  {
    id: 'g9-2-c10',
    stage: 3,
    speakerOrAuthor: 'Automotive Marketing Executive',
    surfaceStatement: '"Electric vehicles are 100% clean and produce zero environmental damage anywhere on Earth."',
    explicitClaim: 'Electric vehicles produce zero environmental damage.',
    correctHiddenAssumption: 'Mining lithium and nickel creates zero environmental destruction, and electric power grids are 100% powered by renewable energy.',
    options: [
      {
        id: 'opt-a',
        text: 'Electric passenger cars utilize lithium-ion battery cells connected to alternating-current electric motors.',
        isCorrectAssumption: false,
        analysisNote: 'Automotive hardware engineering fact, not the unexamined supply chain lifecycle assumption.'
      },
      {
        id: 'opt-b',
        text: 'Mining nickel and lithium causes zero ecological damage, and regional power grids generate 100% green energy.',
        isCorrectAssumption: true,
        analysisNote: 'Zero-damage fallacy: overlooking upstream mineral extraction impacts and fossil-fuel grid emissions.'
      },
      {
        id: 'opt-c',
        text: 'Municipal charging stations connect to local electrical transmission lines to deliver battery power refills.',
        isCorrectAssumption: false,
        analysisNote: 'Charging infrastructure fact, not the hidden ecological lifecycle assumption.'
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
        text: 'Congestion has only one cause, and commuters will universally switch to buses regardless of last-mile gaps.',
        isCorrectAssumption: true,
        analysisNote: 'Single-cause fallacy: assumes dedicated bus lanes eliminate traffic without solving housing sprawl or suburban feeders.'
      },
      {
        id: 'opt-b',
        text: 'Public transit buses operate on diesel combustion or electric battery motor systems.',
        isCorrectAssumption: false,
        analysisNote: 'Automotive vehicle engineering detail, not the urban planning behavioral assumption.'
      },
      {
        id: 'opt-c',
        text: 'Paved municipal arterial roadways feature painted lane dividers and pedestrian crosswalks.',
        isCorrectAssumption: false,
        analysisNote: 'Civil roadway engineering feature, not the unstated transit adoption belief.'
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
        id: 'opt-b',
        text: 'Argue that dietary nutrition has zero influence on clinical disease outcomes and ignore all preventative medical guidance.',
        isStrongestCounterMove: false,
        reasoning: 'Over-correcting into nutritional nihilism dismisses valid dietary science and alienates participants'
      },
      {
        id: 'opt-a',
        text: 'Inject empirical historical data showing modern antibiotics and vaccines reduced infant mortality by 75%.',
        isStrongestCounterMove: true,
        reasoning: 'Presents verified clinical evidence directly disproving the extreme claim that modern medicine has zero life-saving value.'
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
      },
      {
        id: 'opt-a',
        text: 'Share financial market statistics showing that over 90% of day-traders in unregulated tokens experience net financial losses.',
        isStrongestCounterMove: true,
        reasoning: 'Presents grounded statistical realities to balance selective survivorship bias.'
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
        reasoning: 'Exposes the engineering flaw in the dominant narrative using transportation science'
      },
      {
        id: 'opt-b',
        text: 'Demand that all municipal public buses and regional commuter rail lines be defunded to widen private traffic lanes.',
        isStrongestCounterMove: false,
        reasoning: 'Doubles down on the flawed bubble assertion, worsening urban congestion.'
      },
      {
        id: 'opt-c',
        text: 'Assume that adding new expressway lanes has zero influence on commuter automobile travel habits and route choices.',
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
        id: 'opt-b',
        text: 'Propose replacing all computers with paper worksheets across every subject to eliminate parental debate.',
        isStrongestCounterMove: false,
        reasoning: 'Surrenders to moral panic rather than fostering necessary 21st-century research competencies'
      },
      {
        id: 'opt-a',
        text: 'Share longitudinal educational studies showing balanced digital literacy prepares students for collaborative global research.',
        isStrongestCounterMove: true,
        reasoning: 'Demonstrates that purposeful educational use is radically different from mindless entertainment addiction.'
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
        id: 'opt-b',
        text: 'Develop high-density commercial resort infrastructure across Komodo Island to maximize regional municipal tax revenue regardless of habitat disturbance.',
        isStrongestCounterMove: false,
        reasoning: 'Extreme commercial exploitation that destroys fragile habitats.'
      },
      {
        id: 'opt-c',
        text: 'Close all park borders permanently with armed patrols while offering no economic alternatives or compensation to indigenous resident fishermen.',
        isStrongestCounterMove: false,
        reasoning: 'Absurd falsehood harmful to animal health.'
      },
      {
        id: 'opt-a',
        text: 'Present community-based conservation data demonstrating that local economic benefit directly reduces illegal poaching and protects wildlife.',
        isStrongestCounterMove: true,
        reasoning: 'Bridges ecological protection with local economic survival (social-economic lens).'
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
        reasoning: 'Speaks the language of economic value while defending ecological preservation'
      },
      {
        id: 'opt-b',
        text: 'Dismiss commercial profits entirely and lecture real estate developers that corporate commerce is unethical during municipal zoning sessions.',
        isStrongestCounterMove: false,
        reasoning: 'Moral preaching that will be dismissed immediately in a commercial boardroom.'
      },
      {
        id: 'opt-c',
        text: 'Pave over remaining coastal mangrove greenbelts immediately to accelerate waterfront luxury housing construction across intertidal mudflats.',
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
        id: 'opt-b',
        text: 'Demolish historic wooden homes and replace them with standard unreinforced concrete blocks to simplify municipal building permit compliance.',
        isStrongestCounterMove: false,
        reasoning: 'Destroys invaluable cultural heritage'
      },
      {
        id: 'opt-a',
        text: 'Show examples of culturally sensitive seismic retrofits that preserve heritage woodworking while safeguarding human life in earthquake zones.',
        isStrongestCounterMove: true,
        reasoning: 'Demonstrates that cultural tradition and human safety can be harmoniously synthesized.'
      },
      {
        id: 'opt-c',
        text: 'Disregard geological seismic hazards completely and insist that traditional wood construction requires no structural evaluation or maintenance.',
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
      },
      {
        id: 'opt-a',
        text: 'Share clinical findings showing AI requires human physician oversight to catch algorithmic edge cases and provide compassionate patient care.',
        isStrongestCounterMove: true,
        reasoning: 'Advocates human-in-the-loop collaboration rather than blind technological replacement.'
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
        reasoning: 'Breaks the false binary by synthesizing clean energy needs with ancestral land rights'
      },
      {
        id: 'opt-b',
        text: 'Bypass indigenous community consultations entirely and accelerate geothermal drilling pipelines to satisfy urgent national green energy quotas.',
        isStrongestCounterMove: false,
        reasoning: 'Violates human rights and community trust, escalating civil and legal deadlock.'
      },
      {
        id: 'opt-c',
        text: 'Cancel the geothermal project permanently and construct new diesel power plants on coastal land away from indigenous territory.',
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
        id: 'opt-b',
        text: 'Immediately fine any vendor caught with plastic wrap while offering no institutional assistance for biodegradable alternatives.',
        isStrongestCounterMove: false,
        reasoning: 'Imposes heavy financial burdens on low-margin food vendors without addressing supplier access.'
      },
      {
        id: 'opt-a',
        text: 'Propose a phased transition with school bulk-purchasing subsidies for cassava-starch packaging so small vendors can comply without bankruptcy.',
        isStrongestCounterMove: true,
        reasoning: 'Replaces punitive self-righteousness with practical economic support and phased implementation.'
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
