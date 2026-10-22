/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 5 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 66–78)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g5-1: Groupthink Buster (Symptoms: illusion of invulnerability, self-censorship, false consensus, peer pressure, devil's advocate)
 * - g5-2: Indonesian Etiquette Challenge (Musyawarah untuk Mufakat, Hormat, Rukun, Gotong Royong, constructive dissent)
 * - g5-3: SMART Goal Forge (Specific, Measurable, Achievable, Relevant, Time-bound transformations)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g5-1: GROUPTHINK BUSTER DATA
// ============================================================================

export type GroupthinkSymptom =
  | 'invulnerability'
  | 'self_censorship'
  | 'false_consensus'
  | 'peer_pressure'
  | 'healthy_critical_thinking';

export interface GroupthinkItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  meetingContext: string;
  dialogueQuote: string;
  speakerRole: string;
  correctSymptom: GroupthinkSymptom;
  options: {
    symptom: GroupthinkSymptom;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G5_1_CHALLENGES: GroupthinkItem[] = [
  // STAGE 1: SYMPTOM RECOGNITION (4 items)
  {
    id: 'g5-1-s1-q1',
    stage: 1,
    title: 'The Unanimous Chemistry App',
    meetingContext: 'Planning meeting for the Grade 10 Science Exhibition.',
    dialogueQuote: '"Our VR chemistry simulator cannot possibly fail. The judges will be so amazed by the 3D graphics that they will overlook any minor bugs or missing lab trials."',
    speakerRole: 'Confident Team Lead',
    correctSymptom: 'invulnerability',
    options: [
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Excessive optimism and blind overconfidence that leads the group to ignore clear risks and assume failure is impossible.'
      },
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship',
        description: 'Team members deliberately remaining silent about their doubts to avoid conflict or being seen as uncooperative.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Aggressively urging dissenting members to conform and stop questioning the group plan.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Balanced, rigorous assessment of technical feasibility and potential operational pitfalls.'
      }
    ],
    explanation: 'The team lead exhibits the classic Illusion of Invulnerability: assuming that because the idea sounds exciting, nothing can go wrong and judges will ignore real technical defects.',
    pedagogicalKey: 'Illusion of Invulnerability blinds teams to fatal feasibility risks.'
  },
  {
    id: 'g5-1-s1-q2',
    stage: 1,
    title: 'The Silent Programmer',
    meetingContext: 'Task estimation session for a community survey app.',
    dialogueQuote: '"I noticed the API server will cost $40 a month and our free trial expires in 3 days. But everyone else is smiling and agreeing, so I will keep my mouth shut so I do not look like a negative buzzkill."',
    speakerRole: 'Student Coder (Private Thought)',
    correctSymptom: 'self_censorship',
    options: [
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Assuming the project cannot fail regardless of external obstacles.'
      },
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship',
        description: 'Deliberately withholding valid objections or critical factual warnings to maintain pleasant social harmony.'
      },
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Assuming that silence from group members indicates 100% agreement with the leader.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Openly raising budget constraints so the team can adjust before deadlines.'
      }
    ],
    explanation: 'The student engages in Self-Censorship: withholding critical factual warnings about server costs solely out of fear of disrupting group harmony.',
    pedagogicalKey: 'Self-censorship turns private doubts into public disasters.'
  },
  {
    id: 'g5-1-s1-q3',
    stage: 1,
    title: 'Silencing the Budget Skeptic',
    meetingContext: 'Emergency budget review for school charity concert.',
    dialogueQuote: '"Come on, Rian, stop being so difficult! Everyone else has already voted yes. Why do you always have to slow us down by asking about stage rental deposits? Just get on board with the team."',
    speakerRole: 'Impatient Project Manager',
    correctSymptom: 'peer_pressure',
    options: [
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Attacking or guilt-tripping a team member who raises legitimate questions rather than answering their factual concerns.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Believing the group is immune to mistakes.'
      },
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship',
        description: 'Privately hiding one\'s own worries.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Constructively examining financial risks.'
      }
    ],
    explanation: 'Direct Peer Pressure occurs when members actively discourage questions by framing valid inquiry as disloyalty or obstructionism.',
    pedagogicalKey: 'Pressuring dissenters eliminates the team\'s early-warning defense system.'
  },
  {
    id: 'g5-1-s1-q4',
    stage: 1,
    title: 'The Silent Room Assumption',
    meetingContext: 'Final vote on school cafeteria recycling campaign.',
    dialogueQuote: '"Nobody said a word when I asked if we should launch on Monday morning. Therefore, 100% of our 6-person team is fully ready, equipped, and completely in agreement with the plan!"',
    speakerRole: 'Meeting Facilitator',
    correctSymptom: 'false_consensus',
    options: [
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Mistaking total silence or lack of vocal debate for enthusiastic, genuine agreement from all participants.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Assuming the project is too strong to fail.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Aggressively demanding compliance.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Systematically verifying each person\'s task readiness.'
      }
    ],
    explanation: 'Silence does not equal consent. The facilitator commits the Illusion of False Consensus by assuming quiet members have no unexpressed objections or missing preparations.',
    pedagogicalKey: 'Silence in meetings is often camouflage for fear or confusion, not true consensus.'
  },

  // STAGE 2: DIALOGUE AUDIT & IDENTIFICATION (4 items)
  {
    id: 'g5-1-s2-q1',
    stage: 2,
    title: 'The Assigned Skeptic',
    meetingContext: 'Red Teaming session for global climate essay proposal.',
    dialogueQuote: '"My assigned role today is Devil\'s Advocate: What happens to our conclusion if local mangrove planting data shows a 45% seedling mortality rate in saltier water? How do we defend our proposal?"',
    speakerRole: 'Appointed Devil\'s Advocate',
    correctSymptom: 'healthy_critical_thinking',
    options: [
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking (Devil\'s Advocate)',
        description: 'Deliberate, structured probing of project vulnerabilities to stress-test assumptions and prevent blind failures.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Pressuring the group to abandon their core values.'
      },
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship',
        description: 'Hiding facts to keep peace.'
      },
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Assuming everyone agrees.'
      }
    ],
    explanation: 'Assigning a Devil\'s Advocate is the textbook antidote to Groupthink: it legitimizes critical questioning so testing weaknesses is seen as valuable teamwork rather than personal attack.',
    pedagogicalKey: 'A Devil\'s Advocate protects teams from preventable blind spots.'
  },
  {
    id: 'g5-1-s2-q2',
    stage: 2,
    title: 'The Loyalty Test',
    meetingContext: 'Debating whether to inform the teacher about missing laboratory records.',
    dialogueQuote: '"If you tell Ibu Ratna that our data sample only had 4 test tubes instead of 20, you will ruin our group\'s grade. A true friend protects the team\'s reputation no matter what."',
    speakerRole: 'Peer Group Member',
    correctSymptom: 'peer_pressure',
    options: [
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure (Moral Coercion)',
        description: 'Weaponizing social relationships and personal friendship to force members to hide methodological flaws.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Overestimating the power of the team.'
      },
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Assuming silence means agreement.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Transparent reporting of sample limitations.'
      }
    ],
    explanation: 'This is severe Peer Pressure using emotional blackmail ("a true friend protects the team") to coerce unethical compliance and hide research flaws.',
    pedagogicalKey: 'Academic integrity must never be sacrificed for misplaced group loyalty.'
  },
  {
    id: 'g5-1-s2-q3',
    stage: 2,
    title: 'The Intimidated Junior Member',
    meetingContext: 'Grade 10 and Grade 11 combined research committee.',
    dialogueQuote: '"Senior Kak Dimas has won three robotics medals. Even though his proposed sensor circuit violates safety guidelines in our lab manual, who am I to challenge someone older than me?"',
    speakerRole: 'Grade 10 Member (Internal Monologue)',
    correctSymptom: 'self_censorship',
    options: [
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship (Status Deference)',
        description: 'Staying silent about verifiable safety errors due to perceived inferiority in age, title, or seniority.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Believing that senior members are magical.'
      },
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Assuming the entire school agrees.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Politely referencing the lab safety manual.'
      }
    ],
    explanation: 'Self-censorship often stems from status asymmetry: assuming that senior peers cannot make basic safety or factual errors.',
    pedagogicalKey: 'Empirical data and safety rules supersede seniority in scientific inquiry.'
  },
  {
    id: 'g5-1-s2-q4',
    stage: 2,
    title: 'The Super-Team Fantasy',
    meetingContext: 'Proposal drafting for international youth environmental summit.',
    dialogueQuote: '"Our school has never lost this competition in four years. The selection committee knows our reputation, so we do not need to bother collecting new local water samples—our theoretical model alone will win easily."',
    speakerRole: 'Veteran Team Leader',
    correctSymptom: 'invulnerability',
    options: [
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability (Resting on Past Laurels)',
        description: 'Believing past victories guarantee future success, causing teams to skip rigorous empirical legwork.'
      },
      {
        symptom: 'self_censorship',
        label: 'Self-Censorship',
        description: 'Holding back private critique.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Pressuring outliers to agree.'
      },
      {
        symptom: 'healthy_critical_thinking',
        label: 'Healthy Critical Thinking',
        description: 'Collecting fresh primary data.'
      }
    ],
    explanation: 'Past victories breed complacency and an Illusion of Invulnerability, leading teams to cut corners and produce low-rigor work.',
    pedagogicalKey: 'Past excellence never exempts a new project from current empirical proof.'
  },

  // STAGE 3: INTERVENTION & DE-BIASING STRATEGY (3 items)
  {
    id: 'g5-1-s3-q1',
    stage: 3,
    title: 'De-Biasing the Rushed Consensus',
    meetingContext: 'A 5-person team has just verbally agreed to a complex project in under 2 minutes.',
    dialogueQuote: '"Wait, before we lock this in, let us take 5 minutes of Silent Brainwriting. Everyone write down on a sticky note the single biggest obstacle that could ruin this plan, without putting your name on it."',
    speakerRole: 'Facilitator Intervention',
    correctSymptom: 'healthy_critical_thinking',
    options: [
      {
        symptom: 'healthy_critical_thinking',
        label: 'Silent Brainwriting / Anonymous Risk Audit',
        description: 'An evidence-based de-biasing technique that removes social pressure by letting members surface risks anonymously.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Forcing people to vote against their will.'
      },
      {
        symptom: 'self_censorship',
        label: 'Promoting Self-Censorship',
        description: 'Encouraging team members to hide their thoughts.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Celebrating project perfection.'
      }
    ],
    explanation: 'Anonymous brainwriting breaks false consensus and self-censorship by equalizing power and separating valid critiques from interpersonal politics.',
    pedagogicalKey: 'Structured anonymity empowers truthful risk detection.'
  },
  {
    id: 'g5-1-s3-q2',
    stage: 3,
    title: 'The Second-Chance Review',
    meetingContext: 'The group is exhausted at 5:00 PM and wants to sign off on a controversial survey design.',
    dialogueQuote: '"We are tired and probably suffering from decision fatigue. Let us sleep on this proposal tonight and hold a mandatory 15-minute Second-Chance Meeting tomorrow morning solely to air any residual second thoughts."',
    speakerRole: 'Team Captain',
    correctSymptom: 'healthy_critical_thinking',
    options: [
      {
        symptom: 'healthy_critical_thinking',
        label: 'Second-Chance Meeting Protocol',
        description: 'Deliberately pausing before final sign-off to give members time to reflect away from group conformity pressure.'
      },
      {
        symptom: 'self_censorship',
        label: 'Encouraging Self-Censorship',
        description: 'Delaying work so people forget their complaints.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Assuming rest makes everything perfect.'
      },
      {
        symptom: 'false_consensus',
        label: 'Fostering False Consensus',
        description: 'Pretending everyone agreed yesterday.'
      }
    ],
    explanation: 'Janis specifically recommends a Second-Chance meeting: a structured pause that removes late-night exhaustion and herd momentum.',
    pedagogicalKey: 'Sleeping on a decision breaks group momentum and restores critical perspective.'
  },
  {
    id: 'g5-1-s3-q3',
    stage: 3,
    title: 'Inviting External Red Teams',
    meetingContext: 'Reviewing a high-stakes community water purification proposal.',
    dialogueQuote: '"We have been looking at our own slides for three weeks and cannot see our own blind spots. Let us invite Pak Hendra from the Biology lab and two students from Group 3 to ruthlessly poke holes in our data before submission."',
    speakerRole: 'Research Coordinator',
    correctSymptom: 'healthy_critical_thinking',
    options: [
      {
        symptom: 'healthy_critical_thinking',
        label: 'External Peer Audit (Red Teaming)',
        description: 'Inviting neutral outside experts who have no emotional attachment to the project to review assumptions objectively.'
      },
      {
        symptom: 'peer_pressure',
        label: 'Direct Peer Pressure',
        description: 'Bringing in outsiders to intimidate internal members.'
      },
      {
        symptom: 'false_consensus',
        label: 'Illusion of False Consensus',
        description: 'Collecting random opinions.'
      },
      {
        symptom: 'invulnerability',
        label: 'Illusion of Invulnerability',
        description: 'Assuming outsiders will applaud.'
      }
    ],
    explanation: 'External audits dismantle insular group bubbles by testing arguments against observers who have no social stake in group harmony.',
    pedagogicalKey: 'Outside eyes see the cracks that insider pride conceals.'
  }
];

// ============================================================================
// g5-2: INDONESIAN ETIQUETTE CHALLENGE DATA
// ============================================================================

export type EtiquetteStrategy =
  | 'musyawarah_mufakat'
  | 'hormat_constructive'
  | 'rukun_preservation'
  | 'confrontational_blunt'
  | 'passive_disengagement';

export interface IndonesianEtiquetteItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  culturalContext: string;
  situationScenario: string;
  proposedAction: string;
  correctStrategy: EtiquetteStrategy;
  options: {
    strategy: EtiquetteStrategy;
    label: string;
    description: string;
  }[];
  isCulturallyAppropriate: boolean;
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G5_2_CHALLENGES: IndonesianEtiquetteItem[] = [
  // STAGE 1: CORE CULTURAL PRINCIPLES (4 items)
  {
    id: 'g5-2-s1-q1',
    stage: 1,
    title: 'Disputing a Senior Teacher\'s Data Interpretation',
    culturalContext: 'Grade 10 project meeting with a respected senior supervising teacher (Guru Pembimbing).',
    situationScenario: 'The teacher suggests that historical flood data in Semarang was caused only by heavy rainfall, overlooking recent peer-reviewed land subsidence data that you found in a university journal.',
    proposedAction: '"Mohon izin Bapak, kami sangat menghargai arahan Bapak mengenai data curah hujan. Apakah kami diperkenankan untuk memperkaya analisis dengan menyandingkan data penurunan muka tanah (subsidence) dari jurnal ITB agar kajian kita semakin komprehensif?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Hormat with Constructive Inquiry (Culturally Appropriate)',
        description: 'Expresses sincere respect for authority while introducing empirical scientific data through polite inquiry and collaborative framing.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Aggressive Direct Contradiction (Counterproductive)',
        description: 'Bluntly declaring the senior teacher wrong in front of the group, causing public loss of face (kehilangan muka).'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Passive Compliance / Silent Resignation (Uncritical)',
        description: 'Keeping silent and omitting vital peer-reviewed scientific findings to avoid any dialogue.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Superficial Harmony at All Costs',
        description: 'Agreeing verbally while planning to secretly ignore the teacher later.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'True Hormat (Respect) does not require abandoning empirical truth; it means framing scientific corrections with humility ("Mohon izin", "memperkaya analisis") so the teacher\'s dignity is honored while knowledge is advanced.',
    pedagogicalKey: 'Hormat means framing critique with dignity, not abandoning scientific rigor.'
  },
  {
    id: 'g5-2-s1-q2',
    stage: 1,
    title: 'The Impasse Over Project Topic',
    culturalContext: 'Gotong Royong team meeting with 4 classmates from diverse ethnic backgrounds.',
    situationScenario: 'Two members insist on researching traditional market waste, while two others want to study motorcycle exhaust pollution. The team is polarized 2 vs 2.',
    proposedAction: 'Initiate Musyawarah: Convene a structured deliberative circle where each side presents their community impact, assess available time and survey access together, and seek a synthesis (e.g., studying traffic pollution near traditional market transit hubs) to reach Mufakat.',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Musyawarah untuk Mufakat (Culturally Appropriate)',
        description: 'Deliberative dialogue aimed at common ground, consensus, and shared ownership, rather than a brutal majority-rules vote that leaves losers feeling alienated.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Forced Binary Majority Showdown',
        description: 'Calling an abrupt vote and telling the losing side to shut up and obey.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Group Dissolution / Walking Away',
        description: 'Refusing to speak until the teacher assigns topics.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Avoidance of Difficult Choices',
        description: 'Tossing a coin or doing half of each topic sloppily without coherence.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Musyawarah is the traditional Indonesian deliberative process that seeks Mufakat (unifying consensus) through respectful dialogue and integration of diverse concerns.',
    pedagogicalKey: 'Musyawarah creates shared ownership that outlasts raw majority votes.'
  },
  {
    id: 'g5-2-s1-q3',
    stage: 1,
    title: 'Publicly Shaming an Unprepared Peer',
    culturalContext: 'Group presentation rehearsal in the school library.',
    situationScenario: 'Budi arrived late and did not finish his assigned PowerPoint slides on renewable energy tariffs.',
    proposedAction: 'Stand up and shout at Budi in the library hallway: "Budi, you are lazy, irresponsible, and ruining our future! Get out of our group right now!"',
    correctStrategy: 'confrontational_blunt',
    options: [
      {
        strategy: 'confrontational_blunt',
        label: 'Public Humiliation / Frontal Attack (Culturally & Professionally Destructive)',
        description: 'Direct public confrontation that strips dignity, violates Rukun, and triggers defensive hostility rather than accountability.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Private Clarification & Support Protocol (Culturally Appropriate)',
        description: 'Holding a calm private discussion (Empat Mata) to understand the blocker, set a firm 24-hour milestone, and preserve working relationships.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Formal Musyawarah Deliberation',
        description: 'Gathering the whole team to calmly rebalance workload.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Complete Avoidance',
        description: 'Saying nothing and doing all of Budi\'s work for him.'
      }
    ],
    isCulturallyAppropriate: false,
    explanation: 'Public humiliation violates Indonesian cultural norms of Rukun (social harmony) and dignity. In professional project management, interpersonal accountability is conducted privately ("bicara empat mata") with concrete milestones.',
    pedagogicalKey: 'Critique performance privately; celebrate progress publicly.'
  },
  {
    id: 'g5-2-s1-q4',
    stage: 1,
    title: 'Managing Gotong Royong Fairly',
    culturalContext: 'Community clean-up and school recycling bin installation.',
    situationScenario: 'Some team members assume "Gotong Royong" means everyone shows up and randomly does whatever they feel like, leading to three people painting one sign while heavy timber stays uncarried.',
    proposedAction: 'Before starting physical work, gather in a brief Musyawarah circle to review an explicit task breakdown matrix (who carries materials, who measures wood, who paints labels, who documents photos) so mutual aid is organized and purposeful.',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Structured Gotong Royong with Role Clarity (Culturally Appropriate)',
        description: 'Combines the spirit of communal solidarity (Gotong Royong) with modern project task architecture to ensure fairness and safety.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Unstructured Free-for-All',
        description: 'Letting chaos reign in the name of friendliness.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Autocratic Dictatorship',
        description: 'One person barking orders without consulting anyone.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Passive Resignation',
        description: 'Letting one quiet student do all the heavy lifting.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Authentic Gotong Royong is organized collective action, not aimless confusion. Transparent role allocation honors everyone\'s contribution equally.',
    pedagogicalKey: 'True communal solidarity requires clear roles so effort is shared fairly.'
  },

  // STAGE 2: RESPECTFUL CRITIQUE & DISSENT (4 items)
  {
    id: 'g5-2-s2-q1',
    stage: 2,
    title: 'Questioning an Older Student Council President',
    culturalContext: 'Inter-grade planning council for School Environment Week.',
    situationScenario: 'The Grade 12 OSIS President proposes spending the entire budget on expensive plastic banners and helium balloons, which contradicts the environmental message of the week.',
    proposedAction: '"Terima kasih banyak atas gagasan kemeriahan acaranya, Kak. Kami sangat sepakat acara harus meriah. Namun, apakah kita bisa mempertimbangkan media digital dan mural bambu agar selaras dengan pesan pelestarian lingkungan sekaligus menghemat 60% anggaran?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Constructive Bridge-Building (Hormat + Alternative Proposal)',
        description: 'Affirms the positive intent of the senior (excitement and visibility) while offering an eco-friendly, cost-effective alternative backed by logical alignment.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Frontal Mockery',
        description: '"Kak, that is totally hypocritical and embarrassing. You obviously know nothing about ecology."'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Silent Compliance',
        description: 'Buying the balloons silently and complaining on Twitter later.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Blind Agreement',
        description: 'Pretending plastic balloons are biodegradable.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'This response demonstrates high cultural emotional intelligence: validating the senior\'s goal (making the event festive) while providing a constructive, budget-saving eco-alternative.',
    pedagogicalKey: 'Validate the shared intention before pivoting to an alternative solution.'
  },
  {
    id: 'g5-2-s2-q2',
    stage: 2,
    title: 'Handling Free-Riding with "Bicara Empat Mata"',
    culturalContext: 'High school research paper due in 10 days.',
    situationScenario: 'Dina has not attended the last two group meetings and has not replied to WhatsApp group chats about her section.',
    proposedAction: 'Meet Dina individually in a quiet school courtyard: "Dina, kami perhatikan kamu belum sempat bergabung di dua diskusi terakhir. Apakah ada kendala atau tugas lain yang sedang berat? Kami sangat membutuhkan bantuanmu untuk bagian analisis wawancara; mari kita lihat bagian mana yang bisa kita sesuaikan agar selesai sebelum Jumat."',
    correctStrategy: 'rukun_preservation',
    options: [
      {
        strategy: 'rukun_preservation',
        label: 'Empathic Private Accountability (Bicara Empat Mata)',
        description: 'Approaching the struggling peer with empathy and curiosity about root causes, preserving dignity while re-establishing firm task commitments.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Public Group Chat Humiliation',
        description: 'Posting screenshots of Dina\'s inactivity in a 50-person classroom group chat with clown emojis.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Total Ostracization',
        description: 'Silently removing Dina\'s name from the paper without telling her or giving her a chance to recover.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Immediate Formal Tribunal',
        description: 'Calling an emergency group trial before asking Dina if she was sick.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Bicara Empat Mata (private, one-on-one dialogue) honors personal dignity (menjaga harga diri) while uncovering real obstacles (illness, family issues) before applying project penalties.',
    pedagogicalKey: 'Seek first to understand personal obstacles before judging commitment.'
  },
  {
    id: 'g5-2-s2-q3',
    stage: 2,
    title: 'The Silent Junior Girl in the Group',
    culturalContext: 'Grade 10 physics project with 3 assertive boys and 1 shy female student (Siti).',
    situationScenario: 'The boys speak loudly and quickly, dominating the conversation. Siti sits quietly taking notes and never raises her hand, though her notebook contains excellent sketches of the experimental rig.',
    proposedAction: 'The group leader pauses the fast dialogue: "Teman-teman, mari kita jeda sejenak. Siti sudah membuat catatan dan sketsa yang sangat detail di bukunya. Mari kita dengarkan pandangan Siti mengenai desain turbin ini."',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Active Facilitation of Quiet Voices (Inclusive Deliberation)',
        description: 'Deliberately creating space and inviting quieter members to speak, honoring Rukun by ensuring all group members contribute their wisdom.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Public Put-Down of the Boys',
        description: 'Shouting at the boys: "You are all rude, sexist, and selfish!"'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Ignoring Siti Completely',
        description: 'Assuming that because Siti is quiet, she has nothing valuable to contribute.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Passive Acceptance of Dominance',
        description: 'Letting the loudest voices make all decisions to avoid awkward silences.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Inclusive leadership bridges cultural deference: polite invitation allows introverted or socially respectful members to share vital insights without feeling pushy.',
    pedagogicalKey: 'True leadership opens the floor for quiet expertise to shine.'
  },
  {
    id: 'g5-2-s2-q4',
    stage: 2,
    title: 'Addressing Religious / Cultural Scheduling Needs',
    culturalContext: 'Organizing weekend survey collection during Friday prayer time.',
    situationScenario: 'A non-Muslim group leader schedules an urgent mandatory team interview session for Friday at 12:00 PM without checking schedules.',
    proposedAction: 'Muslim team member states respectfully: "Maaf teman-teman, pada hari Jumat pukul 11.45–12.45 rekan-rekan muslim menunaikan Ibadah Shalat Jumat. Bagaimana jika kita mulai wawancara pukul 13.15 setelah ibadah dan makan siang bersama?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Respectful Scheduling Adjustment (Toleransi & Hormat)',
        description: 'Clearly communicates religious and cultural commitments while providing an immediate, practical schedule adjustment that respects all parties.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Accusatory Outrage',
        description: '"You are deliberately disrespecting our religion and you are a terrible leader!"'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Silent Truancy',
        description: 'Simply not showing up on Friday without explaining why.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Abandoning Spiritual Commitments',
        description: 'Skipping prayer to please the leader.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'In Indonesia\'s diverse society, mutual respect (Toleransi) is preserved through transparent communication and considerate rescheduling.',
    pedagogicalKey: 'Cultural scheduling sensitivity prevents needless scheduling conflicts.'
  },

  // STAGE 3: SYNTHESIS & APPLIED SCENARIOS (3 items)
  {
    id: 'g5-2-s3-q1',
    stage: 3,
    title: 'The Intercultural Village Outreach',
    culturalContext: 'Fieldwork in a traditional rural village in Central Java.',
    situationScenario: 'Students want to interview female farmers about fertilizer costs, but arrive in urban casual clothing (shorts and sleeveless tops) and start filming with smartphones without speaking to the Kepala Desa (Village Chief).',
    proposedAction: 'Halt immediately: Put on neat, modest clothing (batik/long trousers), visit the Balai Desa with the team leader to pay courtesy respects (Sowan) to the Kepala Desa and elders, explain the research purpose humbly, and request permission before conducting any community interviews.',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Traditional Sowan Protocol (Cultural Respect & Ethics)',
        description: 'Honoring local customs, community leadership, and social hierarchy before conducting empirical field research.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Arrogant Academic Entitlement',
        description: 'Demanding immediate interviews because "we have national university funding and research rights."'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Cancelling Fieldwork Completely',
        description: 'Running away because village customs seem complicated.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Covert Surveillance',
        description: 'Filming secretly from behind trees to avoid talking to the Village Chief.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Field research in Indonesian communities requires Sowan (courtesy call to community leaders) and culturally modest attire. Ignoring local protocol damages trust and invalidates field data.',
    pedagogicalKey: 'Local research access is an earned privilege rooted in respect for community elders.'
  },
  {
    id: 'g5-2-s3-q2',
    stage: 3,
    title: 'Navigating Disagreement Over Traditional Knowledge vs Scientific Data',
    culturalContext: 'Herbal medicine (Jamu) vs laboratory antibacterial testing project.',
    situationScenario: 'A local elder insists that boiling guava leaves according to ancestral lunar cycles makes them 10 times stronger. Lab tests show identical tannin concentrations regardless of lunar phase.',
    proposedAction: 'Synthesize respectfully in the final paper: "Ancestral traditions have preserved guava leaf utilization for generations as an accessible remedy. Our laboratory chemical assays confirmed high tannin efficacy across all trials, while highlighting the valuable cultural heritage that inspired this botanical inquiry."',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Respectful Synthesis (Combining Cultural Heritage & Science)',
        description: 'Acknowledges cultural tradition and historical knowledge heritage while upholding empirical lab results with scientific clarity.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Scientific Chauvinism / Ridicule',
        description: 'Writing in the report that village elders are superstitious and illiterate.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Falsifying Lab Data',
        description: 'Faking test results to match the lunar cycle myth.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Omitting Laboratory Findings',
        description: 'Hiding the lab data entirely to avoid any perceived disagreement.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Cambridge Global Perspectives teaches scholars to value traditional perspectives while maintaining empirical rigor, avoiding arrogant ridicule.',
    pedagogicalKey: 'Respect cultural heritage without compromising scientific data.'
  },
  {
    id: 'g5-2-s3-q3',
    stage: 3,
    title: 'Rebuilding Harmony After a Heated Argument',
    culturalContext: 'Post-debate reconciliation in a high school competition team.',
    situationScenario: 'Two days ago, Farhan and Kevin shouted at each other over who should deliver the opening presentation. The tension is palpable and freezing team communication.',
    proposedAction: 'The team convenes for a casual "Ngopi / Makan Bareng" (informal shared meal), where both members apologize for losing emotional control, acknowledge each other\'s strengths, and agree on a co-presentation format where Farhan delivers the hook and Kevin explains the methodology.',
    correctStrategy: 'rukun_preservation',
    options: [
      {
        strategy: 'rukun_preservation',
        label: 'Restoration of Rukun through Shared Fellowship and Shared Roles',
        description: 'Using informal social fellowship and mutual apologies to dissolve interpersonal tension and establish cooperative co-roles.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Permanent Schism',
        description: 'Demanding the teacher expel one student permanently.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Silent Cold War',
        description: 'Continuing the project without speaking to each other for the rest of the year.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Coin Toss with Zero Discussion',
        description: 'Flipping a coin while remaining bitter enemies.'
      }
    ],
    isCulturallyAppropriate: true,
    explanation: 'Restoring Rukun often requires informal fellowship ("makan bersama") where relational warmth softens wounded pride and allows healthy collaboration to resume.',
    pedagogicalKey: 'Restoring interpersonal warmth is essential for high-performing teamwork.'
  }
];

// ============================================================================
// g5-3: SMART GOAL FORGE DATA
// ============================================================================

export type SmartDefect =
  | 'lacks_specific'
  | 'lacks_measurable'
  | 'lacks_achievable'
  | 'lacks_relevant'
  | 'lacks_time_bound'
  | 'fully_smart';

export interface SmartGoalItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  projectDomain: string;
  draftGoalStatement: string;
  primaryDefect: SmartDefect;
  repairedGoalOptionA: string;
  repairedGoalOptionB: string;
  repairedGoalOptionC: string;
  correctRepairedOption: 'A' | 'B' | 'C';
  options: {
    defect: SmartDefect;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G5_3_CHALLENGES: SmartGoalItem[] = [
  // STAGE 1: DEFECT AUDIT (4 items)
  {
    id: 'g5-3-s1-q1',
    stage: 1,
    title: 'The Infinite Global Solution',
    projectDomain: 'High School Plastic Waste Initiative',
    draftGoalStatement: '"Our 4-student group will completely eliminate all plastic pollution across Southeast Asia by the end of next month."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"By November 30, our 4-person team will audit plastic waste in our high school canteen and reduce single-use plastic water bottles by 50% by installing 2 refill stations."',
    repairedGoalOptionB: '"We will write letters to world leaders asking them to ban plastic factories forever."',
    repairedGoalOptionC: '"We will eliminate all plastic waste in Indonesia by next semester."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The goal is impossibly vast given the team\'s human skills, timeline, budget, and institutional authority.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity',
        description: 'The goal does not say what topic is being addressed.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'The goal has no completion date.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'The goal meets all 5 criteria perfectly.'
      }
    ],
    explanation: 'A 4-person high school student team cannot eliminate regional plastic pollution in 30 days. Option A recalibrates the scope to their actual school canteen with realistic metrics.',
    pedagogicalKey: 'Achievable goals match real student capabilities and resources.'
  },
  {
    id: 'g5-3-s1-q2',
    stage: 1,
    title: 'The Vague Happiness Wish',
    projectDomain: 'Mental Health in Adolescence',
    draftGoalStatement: '"Our project will make Grade 10 students feel significantly happier and less stressed during the school year."',
    primaryDefect: 'lacks_measurable',
    repairedGoalOptionA: '"By October 15, we will implement a 10-minute daily mindfulness breathing protocol in Class 10-B and measure changes in self-reported stress levels using a standardized 1–5 Likert scale across 30 students."',
    repairedGoalOptionB: '"We will tell funny jokes during morning announcements so everyone smiles more."',
    repairedGoalOptionC: '"Grade 10 students will be happier sometime in the future."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'Words like "happier" or "less stressed" contain no quantifiable metrics or verification baseline.'
      },
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance',
        description: 'The topic has nothing to do with student life.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'There is no reference to school time.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'The draft goal is already sound.'
      }
    ],
    explanation: 'Without standardized metrics (e.g., Likert scale, participation rate), you can never prove whether student stress actually decreased. Option A provides verifiable indicators.',
    pedagogicalKey: 'If a goal cannot be quantified or verified, success cannot be proven.'
  },
  {
    id: 'g5-3-s1-q3',
    stage: 1,
    title: 'The Perpetual Research Project',
    projectDomain: 'Urban Public Transportation Study',
    draftGoalStatement: '"We will survey TransJakarta passengers on Bus Route 1 to determine average passenger waiting times at peak hours."',
    primaryDefect: 'lacks_time_bound',
    repairedGoalOptionA: '"Between October 1 and October 14, our team will survey 100 passengers at Harmoni station to benchmark peak-hour waiting times."',
    repairedGoalOptionB: '"We will survey passengers forever until our teacher gives us an A."',
    repairedGoalOptionC: '"We will survey passengers whenever we feel like taking the bus."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Deadline',
        description: 'The goal has no start date, no milestones, and no final deadline, making accountability impossible.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity',
        description: 'It does not identify the city or bus network.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability',
        description: 'Students cannot board buses.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'The goal is complete.'
      }
    ],
    explanation: 'Without a concrete timeframe, tasks expand indefinitely and clash with exam deadlines. Option A sets a clear 2-week observation window.',
    pedagogicalKey: 'Deadlines create urgency and protect students from last-minute panic.'
  },
  {
    id: 'g5-3-s1-q4',
    stage: 1,
    title: 'The Irrelevant Distraction',
    projectDomain: 'Inquiry into Local Renewable Solar Energy in Malang',
    draftGoalStatement: '"By December 1, our solar energy team will organize a massive campus-wide video game tournament to raise money for new gaming monitors."',
    primaryDefect: 'lacks_relevant',
    repairedGoalOptionA: '"By December 1, our team will conduct an energy audit of 12 rooftop solar panels on the science building to calculate actual kilowatt-hour savings for the school budget."',
    repairedGoalOptionB: '"By December 1, we will play solar-powered video games in the cafeteria."',
    repairedGoalOptionC: '"By December 1, we will ask the gaming club to talk about sunlight."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance to Mission',
        description: 'The activity (gaming tournament) does not advance the stated research objective (evaluating local solar energy).'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'It has no deadline.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability',
        description: 'It contains no tournament brackets.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'The goal is sound.'
      }
    ],
    explanation: 'Scope drift often disguises fun side-quests as project work. The goal must directly advance the core academic inquiry.',
    pedagogicalKey: 'Relevance ensures every hour spent directly serves the research question.'
  },

  // STAGE 2: GOAL TRANSFORMATION & SURGERY (4 items)
  {
    id: 'g5-3-s2-q1',
    stage: 2,
    title: 'Transforming "Improve Library Reading"',
    projectDomain: 'School Literacy Project',
    draftGoalStatement: '"We will make the school library better so more students read books."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"By November 15, our team will catalog 150 contemporary graphic novels and launch a weekly lunch-hour peer reading club in the library to increase Grade 10 book checkouts by 25%."',
    repairedGoalOptionB: '"We will make the library brighter and put up inspirational posters about reading."',
    repairedGoalOptionC: '"We will ask the librarian to buy thousands of new books immediately."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Extremely Vague)',
        description: '"Better" is undefined; does it mean new books, air conditioning, silent rules, or comfortable chairs?'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'No completion target.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability',
        description: 'No book metrics.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'The goal needs no changes.'
      }
    ],
    explanation: '"Make better" is a wish, not a plan. Option A specifies the collection (150 graphic novels), the intervention (lunchtime club), the metric (+25% checkouts), and the deadline.',
    pedagogicalKey: 'Replace subjective adjectives like "better" with specific operational actions.'
  },
  {
    id: 'g5-3-s2-q2',
    stage: 2,
    title: 'Transforming "Canteen Healthy Food"',
    projectDomain: 'Nutritional Health in High Schools',
    draftGoalStatement: '"Our group will convince the canteen vendors to sell healthy food soon."',
    primaryDefect: 'lacks_measurable',
    repairedGoalOptionA: '"By October 31, our group will partner with 4 canteen vendors to introduce at least 1 certified balanced fruit or vegetable snack option priced under Rp 10.000 per stall."',
    repairedGoalOptionB: '"We will tell vendors that fried food is dangerous for students."',
    repairedGoalOptionC: '"Vendors will sell delicious organic salads someday."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability and Time-Bound Precision',
        description: '"Healthy food soon" has no numerical target (how many vendors? what menu items?) and no calendar date.'
      },
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance',
        description: 'Canteens have no connection to health.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability',
        description: 'Canteens cannot sell food.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'It meets SMART criteria.'
      }
    ],
    explanation: 'Option A establishes exact deliverables: 4 partner vendors, 1 specific menu item, price ceiling (Rp 10.000), and a deadline.',
    pedagogicalKey: 'Quantify menu changes, partner counts, and price ceilings.'
  },
  {
    id: 'g5-3-s2-q3',
    stage: 2,
    title: 'Transforming "Interview Mangrove Experts"',
    projectDomain: 'Coastal Conservation Research',
    draftGoalStatement: '"We will interview some environmental people about mangroves."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"By September 25, our team will conduct 3 semi-structured 30-minute recorded interviews with certified marine biologists from the Surabaya Coastal Agency on mangrove reforestation survival rates."',
    repairedGoalOptionB: '"We will chat with anyone who lives near the beach about trees."',
    repairedGoalOptionC: '"We will read mangrove Wikipedia articles all week."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity in Population and Instrument',
        description: '"Some environmental people" fails to specify expert credentials, sample size, interview protocol, or focus questions.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability',
        description: 'Experts do not exist in Indonesia.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'Only mentions September.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'It is complete.'
      }
    ],
    explanation: 'Vague population sampling produces low-credibility data. Option A specifies expert profile, exact count (3), interview length (30 min), agency, and deadline.',
    pedagogicalKey: 'Define exactly who will be interviewed and with what protocol.'
  },
  {
    id: 'g5-3-s2-q4',
    stage: 2,
    title: 'Transforming "Build an AI App"',
    projectDomain: 'Educational Technology Project',
    draftGoalStatement: '"Our 3-student team will code an artificial intelligence supercomputer app that teaches every subject in Indonesian high schools by next Friday."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"By next Friday, our 3-student team will build and test a functional 10-question interactive digital quiz on Grade 10 chemistry nomenclature using Google Forms and evaluate user feedback from 20 classmates."',
    repairedGoalOptionB: '"We will hire professional software engineers in Silicon Valley to write the AI code."',
    repairedGoalOptionC: '"We will launch the supercomputer app on iOS and Android next month."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Severe Delusion of Capacity)',
        description: 'Building a multi-subject AI supercomputer in 7 days is impossible for high school novices.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'It has no deadline.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity',
        description: 'It does not mention schools.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'It is realistic.'
      }
    ],
    explanation: 'Scope creep and unrealistic tech fantasies doom high school projects. Option A replaces an impossible AI supercomputer with an achievable 10-question digital prototype.',
    pedagogicalKey: 'Scale tech prototypes to tools and timeframes you actually control.'
  },

  // STAGE 3: FULL PROJECT CHARTER SYNTHESIS (3 items)
  {
    id: 'g5-3-s3-q1',
    stage: 3,
    title: 'The Fully Validated SMART Charter',
    projectDomain: 'School Energy Conservation Audit',
    draftGoalStatement: '"By November 10, our 4-person research team will complete an electricity audit of 16 high school classrooms, log air conditioner temperature settings over 10 consecutive school days, and present a policy brief to the school principal recommending a 24°C thermostat baseline to cut campus energy consumption by 12%."',
    primaryDefect: 'fully_smart',
    repairedGoalOptionA: '"This objective is already fully SMART: It has specific targets (16 classrooms), measurable metrics (10 days, 24°C, 12% savings), achievable scope, high relevance to school energy, and a firm deadline (November 10)."',
    repairedGoalOptionB: '"We should remove the 24°C number because numbers make goals look too complicated."',
    repairedGoalOptionC: '"We should extend the audit to include every building in the province."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'fully_smart',
        label: 'Fully SMART Objective (Exemplary Rigor)',
        description: 'Exhibits all five criteria: Specific boundaries, measurable indicators, achievable tasks, direct relevance, and a precise calendar deadline.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity',
        description: 'Does not name classrooms.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability',
        description: 'Has no numbers.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability',
        description: 'Students cannot read thermometers.'
      }
    ],
    explanation: 'This goal is an exemplary benchmark: every single SMART dimension is clearly satisfied with concrete deliverables and verifiable parameters.',
    pedagogicalKey: 'A truly SMART goal provides an unambiguous roadmap from day one.'
  },
  {
    id: 'g5-3-s3-q2',
    stage: 3,
    title: 'Diagnosing the Double-Defect Proposal',
    projectDomain: 'Local River Water Quality Project',
    draftGoalStatement: '"Our team wants to clean up Brantas River so fish stop dying."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"Between October 1 and October 20, our 5-person team will collect and test water samples at 3 designated points along the Brantas tributary to measure dissolved oxygen levels and publish an educational brochure for 100 riverbank residents."',
    repairedGoalOptionB: '"We will build a giant water filter across the entire river channel."',
    repairedGoalOptionC: '"We will ask the government to pass a river law soon."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity, Measurability, and Timeline',
        description: 'Completely unspecific on testing method, location, metrics, or deadlines.'
      },
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance',
        description: 'Rivers do not matter.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'Nothing needs changing.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Only Missing a Date',
        description: 'The rest is perfect.'
      }
    ],
    explanation: 'The draft statement is a generic emotional plea with zero scientific parameters. Option A equips the inquiry with specific sampling locations, physical chemical metrics (dissolved oxygen), sample size, and firm dates.',
    pedagogicalKey: 'Transform emotional environmental wishes into structured scientific inquiry.'
  },
  {
    id: 'g5-3-s3-q3',
    stage: 3,
    title: 'Balancing Ambition with Student Reality',
    projectDomain: 'School Mental Health Survey',
    draftGoalStatement: '"By next Monday, we will publish a peer-reviewed 200-page psychology book analyzing adolescent depression across 50 international high schools."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"By December 5, our team will administer a verified 15-item wellbeing survey to 80 Grade 10 students at our school, synthesize findings into an 8-page portfolio report, and present actionable recommendations to the counseling department."',
    repairedGoalOptionB: '"We will read 50 books about psychology by tonight."',
    repairedGoalOptionC: '"We will submit our 200-page book to Harvard University next week."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Excessive Scope Creep)',
        description: 'A 200-page academic book across 50 international schools in one weekend is completely outside student possibilities.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary',
        description: 'No date given.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity',
        description: 'Does not name schools.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART',
        description: 'Fully achievable.'
      }
    ],
    explanation: 'Unrealistic ambition results in missed deadlines and burnout. Option A calibrates the study to an 80-student cohort, an 8-page synthesis report, and an internal school counseling presentation.',
    pedagogicalKey: 'High academic rigor on a focused sample beats superficial fantasy on a global scale.'
  }
];
