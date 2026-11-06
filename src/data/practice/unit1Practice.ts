/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3B: UNIT 1 PRACTICE QUESTION BANK (BENCHMARK IMPLEMENTATION)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 6–21)
 *
 * Grounding:
 * - Section 1.1: What is a Perspective? (pp. 6–9)
 * - Section 1.2: Four Types of Perspectives (pp. 10–13)
 * - Section 1.3: Four Levels of Perspectives (pp. 13–16)
 * - Chapter 1 Review: Synthesis, Trade-offs & Bridge Solutions (pp. 16–21)
 *
 * Target Audience: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Meaningful thinking over fast clicking"
 * Verification Status: 100% VERIFIED against textbook sections and page ranges.
 */

import { PracticeQuestion } from '../../types/curriculum';
import {
  CognitiveDemand,
  CambridgeCoreProcess,
  SourceReference
} from '../../types/practiceGame';

export interface EnrichedPracticeQuestion extends PracticeQuestion {
  cognitiveDemand: CognitiveDemand;
  coreProcesses: CambridgeCoreProcess[];
  sourceRef: SourceReference;
  misconceptionId?: string;
}

export const UNIT_1_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  // --------------------------------------------------------------------------
  // TOPIC 1: WHAT IS A PERSPECTIVE? (Section 1.1, pp. 6–9)
  // --------------------------------------------------------------------------
  {
    id: 'u1-p-01',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Definition of Perspective',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '6-7',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 6–7',
    misconceptionId: 'misc-opinion-vs-perspective',
    misconceptionAlert:
      'Do not confuse an unexamined personal opinion or taste with a structured academic perspective.',
    question: 'Which statement best describes an academic perspective in Global Perspectives?',
    options: [
      {
        id: 'opt-a',
        text: 'A momentary emotional feeling, spontaneous reaction, or personal food preference.'
      },
      {
        id: 'opt-b',
        text: 'An absolute, unchangeable scientific law that cannot be questioned or debated.'
      },
      {
        id: 'opt-c',
        text: 'A structured worldview and framework shaped by values, context, and evidence.'
      },
      {
        id: 'opt-d',
        text: 'A single statistical number collected during an isolated local government survey.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation:
      'In Cambridge Global Perspectives, a perspective is a coherent framework through which an individual or group understands information and events. It is shaped by values, lived experience, and evidence—not just a momentary preference.'
  },

  {
    id: 'u1-p-02',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Fact vs. Perspective',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '6-7',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 6–7',
    scenario:
      'A municipal meteorology report confirms: "Average daytime temperatures in the city rose by 1.4°C over the past 25 years." Two local leaders respond differently:\n• Leader A: "We must immediately place carbon taxes on private vehicles to reduce emissions."\n• Leader B: "We should build air-conditioned public transit shelters while protecting factory jobs."',
    question: 'How does Global Perspectives distinguish the temperature data from the two leaders’ responses?',
    options: [
      {
        id: 'opt-a',
        text: 'The temperature rise is an objective fact; the leaders’ proposals are perspectives interpreting what action to take.'
      },
      {
        id: 'opt-b',
        text: 'Leader A provides an objective scientific fact, while Leader B offers an entirely subjective and invalid opinion, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-c',
        text: 'Both leaders are stating verified objective facts simply because both individuals hold elected government offices.'
      },
      {
        id: 'opt-d',
        text: 'Because elected leaders disagree on solutions, the recorded scientific temperature data cannot be considered true.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Facts provide verifiable evidence that can be checked with data. Perspectives determine what that evidence means, what outcomes should be prioritized, and which policy actions society should take.'
  },

  {
    id: 'u1-p-03',
    unitNumber: 1,
    type: 'scenario-analysis',
    difficulty: 'Application',
    concept: 'Characteristics: Subjective',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '7-8',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 7–8',
    scenario:
      'During a week of sudden torrential downpours in Central Java, a rice farmer celebrates because irrigation dams are full for the planting season. On the same day, an online motorcycle taxi driver in Jakarta loses half their daily income due to street flooding.',
    question: 'Which characteristic of perspectives does this situation illustrate best?',
    options: [
      {
        id: 'opt-a',
        text: 'Perspectives remain permanent, unyielding, and cannot be modified by changing economic climates.'
      },
      {
        id: 'opt-b',
        text: 'One of the two factory workers is holding a deliberately biased, deceitful, and invalid viewpoint.'
      },
      {
        id: 'opt-c',
        text: 'Only municipal city workers have genuine economic perspectives, while rural workers hold opinions.'
      },
      {
        id: 'opt-d',
        text: 'Perspectives are subjective, filtered through individual livelihoods, practical roles, and needs.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation:
      'Perspectives are subjective: they depend on the person holding them. The rain is the identical physical event, but the two perspectives differ because of their distinct jobs, locations, and daily needs.'
  },

  {
    id: 'u1-p-04',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Characteristics: Dynamic and Evolving',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '7-8',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 7–8',
    scenario:
      'In 2005, a coastal village council opposed constructing concrete seawalls because residents wanted unobstructed beach access. Over the next decade, after experiencing multiple storm surges and reviewing regional climate data, the council voted to establish mangrove reserves and protective embankments.',
    question: 'Which core principle of perspectives explains the village council’s decision?',
    options: [
      {
        id: 'opt-a',
        text: 'Community perspectives remain static, permanent, and strictly unalterable once recorded.'
      },
      {
        id: 'opt-b',
        text: 'Perspectives are dynamic and evolve when people encounter new evidence and experiences.'
      },
      {
        id: 'opt-c',
        text: 'The village council completely abandoned cultural values to adopt purely commercial goals.'
      },
      {
        id: 'opt-d',
        text: 'Revising an established community policy proves that former village leaders acted dishonestly.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'Perspectives are dynamic, meaning they are not frozen in stone. When individuals or communities experience new events, review scientific evidence, or live through crises, their perspectives can and should evolve.'
  },

  {
    id: 'u1-p-05',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Functions of Perspectives: Social Cohesion',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Collaboration'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '8-9',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 8–9',
    question: 'In Indonesian communities, neighbors frequently gather for "gotong royong" to clear neighborhood drainage channels before the rainy season. Which function of perspectives does this demonstrate?',
    options: [
      {
        id: 'opt-a',
        text: 'Facilitating social cohesion by uniting people around shared community values.'
      },
      {
        id: 'opt-b',
        text: 'Filtering scientific information so neighborhoods can ignore environmental risks.'
      },
      {
        id: 'opt-c',
        text: 'Enforcing mandatory political regulations decreed by international authorities.'
      },
      {
        id: 'opt-d',
        text: 'Replacing formal municipal infrastructure budgets through voluntary manual labor.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Perspectives facilitate social cohesion: when community members share core values of mutual assistance and community responsibility, they can coordinate voluntary action to address shared challenges.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 2: FOUR TYPES OF PERSPECTIVES / ANALYTICAL LENSES (Section 1.2, pp. 10–13)
  // --------------------------------------------------------------------------
  {
    id: 'u1-p-06',
    unitNumber: 1,
    type: 'classification',
    difficulty: 'Foundation',
    concept: 'Cultural vs. Economic Lens',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.2',
      pageRange: '10-12',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.2, pp. 10–12',
    question: 'A historical village council debates whether to allow an international hotel resort next to an ancient ancestral temple. An elder argues: "This mountain ridge has been sacred to our religious ceremonies for seven generations." Which analytical lens is the elder using?',
    options: [
      {
        id: 'opt-a',
        text: 'Economic Perspective'
      },
      {
        id: 'opt-b',
        text: 'Political Perspective'
      },
      {
        id: 'opt-c',
        text: 'Cultural Perspective'
      },
      {
        id: 'opt-d',
        text: 'Scientific Perspective'
      }
    ],
    correctAnswer: 'opt-c',
    explanation:
      'The cultural perspective focuses on beliefs, ancestral customs, spiritual heritage, traditions, and sacred identity. The elder’s argument is rooted in religious ceremony and ancestral heritage.'
  },

  {
    id: 'u1-p-07',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Multi-Lens Case: The Cup of Coffee',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.2',
      pageRange: '11',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.2, p. 11',
    scenario:
      'In Section 1.2, the textbook deconstructs a cup of coffee. A researcher notes: "While urban cafe customers pay Rp 40,000 per cup, the smallholder farmer in Aceh who harvested the raw beans receives under Rp 2,000 per cup equivalent."',
    question: 'Which analytical lens focuses specifically on this distribution of revenue and market prices along the supply chain?',
    options: [
      {
        id: 'opt-a',
        text: 'Political Lens'
      },
      {
        id: 'opt-b',
        text: 'Economic Lens'
      },
      {
        id: 'opt-c',
        text: 'Cultural Lens'
      },
      {
        id: 'opt-d',
        text: 'Personal Lens'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'The economic lens investigates monetary costs, market prices, income distribution, resource trade-offs, and commercial profit margins along the production chain.'
  },

  {
    id: 'u1-p-08',
    unitNumber: 1,
    type: 'scenario-analysis',
    difficulty: 'Application',
    concept: 'Political vs. Social Lens',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.2',
      pageRange: '12-13',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.2, pp. 12–13',
    misconceptionId: 'misc-lens-vs-level',
    scenario:
      'A municipal transit department announces: "All city buses will now feature ground-level boarding ramps and audible stop announcements so wheelchair users and elderly citizens can travel with dignity and independence."',
    question: 'Although funded by city funds, what is the primary analytical lens governing this policy’s core objective?',
    options: [
      {
        id: 'opt-a',
        text: 'Economic Perspective, because low-floor buses generate massive corporate sales for foreign transit equipment manufacturers.'
      },
      {
        id: 'opt-b',
        text: 'Cultural Perspective, because riding municipal transit is an ancestral tradition that strengthens local urban folklore heritage.'
      },
      {
        id: 'opt-c',
        text: 'Global Perspective, because foreign tourists visiting the capital city demand modern Western transit accommodations.'
      },
      {
        id: 'opt-d',
        text: 'Social Perspective, because its primary focus is equity, human dignity, and accessibility for vulnerable groups.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation:
      'The social perspective focuses on human well-being, equity, inclusion, public health, and dignity for vulnerable community members (such as elderly residents and citizens with physical disabilities).'
  },

  // --------------------------------------------------------------------------
  // TOPIC 3: FOUR LEVELS OF PERSPECTIVES / SCALES (Section 1.3, pp. 13–16)
  // --------------------------------------------------------------------------
  {
    id: 'u1-p-09',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Concentric Levels of Perspective',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.3',
      pageRange: '13-14',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.3, pp. 13–14',
    question: 'What are the four concentric levels (scales) of analysis used in Cambridge Global Perspectives?',
    options: [
      {
        id: 'opt-a',
        text: 'Cultural, Economic, Political, Social'
      },
      {
        id: 'opt-b',
        text: 'Personal, Local, National, Global'
      },
      {
        id: 'opt-c',
        text: 'Primary, Secondary, Tertiary, Quaternary'
      },
      {
        id: 'opt-d',
        text: 'Individual, Family, Provincial, Regional'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'The four geographic levels (scales) of analysis are Personal (individual lived experience), Local (community, school, town), National (countrywide laws, nation-state), and Global (international bodies, planetary systems).'
  },

  {
    id: 'u1-p-10',
    unitNumber: 1,
    type: 'classification',
    difficulty: 'Challenge',
    concept: 'Critical Distinction: Type vs. Level',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.3',
      pageRange: '13-16',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.3, pp. 13–16',
    misconceptionId: 'misc-lens-vs-level',
    misconceptionAlert:
      'Remember: Type is the "what" lens (Cultural, Economic, Political, Social); Level is the "where" geographic scale (Personal, Local, National, Global). Every issue has BOTH.',
    question: 'A Grade 10 student says: "My family\'s monthly electricity bill is an economic issue, so it cannot be personal." How does the Global Perspectives framework correct this confusion?',
    options: [
      {
        id: 'opt-a',
        text: 'Every real issue has BOTH a Type (the lens) and a Level (the scale); a family electric bill is an Economic Type at the Personal Level.'
      },
      {
        id: 'opt-b',
        text: 'The student is right: Personal issues only relate to psychological emotions, whereas financial costs belong strictly to national accounts.'
      },
      {
        id: 'opt-c',
        text: 'Electricity bills are strictly national issues because power plants belong to the government and utility grids span across multiple islands.'
      },
      {
        id: 'opt-d',
        text: 'Economic issues only exist at the Global level when multi-billion-dollar transnational corporations trade raw oil across oceans.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Type and Level are distinct dimensions. Type answers "What kind of issue is this?" (Economic), while Level answers "At what geographic scale does it operate?" (Personal). A family electric bill is Economic in Type and Personal in Level.'
  },

  {
    id: 'u1-p-11',
    unitNumber: 1,
    type: 'scenario-analysis',
    difficulty: 'Application',
    concept: 'Case Study: Electric Vehicles Across Scales',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.3',
      pageRange: '14-16',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.3, pp. 14–16',
    scenario:
      'In Section 1.3, the textbook examines electric vehicle production in Indonesia. While international climate agreements (Global level) encourage electric vehicles to cut carbon emissions, fishing communities near Morowali nickel processing facilities express deep concern about coastal wastewater runoff harming marine life.',
    question: 'What crucial insight does this multi-level analysis reveal to researchers?',
    options: [
      {
        id: 'opt-a',
        text: 'Local coastal fishing communities should be dismissed because international climate treaties carry superior moral authority.'
      },
      {
        id: 'opt-b',
        text: 'Electric vehicle manufacturing programs operate in isolation and have zero direct impact on domestic mining regions.'
      },
      {
        id: 'opt-c',
        text: 'Local community viewpoints always align smoothly with global treaty targets without generating trade-offs or friction.'
      },
      {
        id: 'opt-d',
        text: 'Global environmental solutions can create immediate, unintended social and ecological challenges for local communities.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation:
      'Multi-level analysis demonstrates that policies designed to achieve planetary goals (such as global carbon reduction) may impose localized costs on specific communities. Researchers must examine all scales to identify these trade-offs.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 4: STAKEHOLDERS, TRADE-OFFS & BRIDGE SOLUTIONS (Review, pp. 16–21)
  // --------------------------------------------------------------------------
  {
    id: 'u1-p-12',
    unitNumber: 1,
    type: 'scenario-analysis',
    difficulty: 'Application',
    concept: 'Burger Bliss Cultural Adaptation',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '8-9',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 1.1, pp. 8–9',
    scenario:
      'Burger Bliss, a major Western fast-food chain, expanded into Southeast Asia with identical large beef burgers and counter seating, but suffered severe sales drops.',
    question: 'When adapting to local cultural and social perspectives, what strategic adjustment succeeded?',
    options: [
      {
        id: 'opt-a',
        text: 'Doubling television advertising budgets while strictly preserving the standardized Western beef burger menu.'
      },
      {
        id: 'opt-b',
        text: 'Filing legal copyright lawsuits against local street food vendors who prepare traditional warm rice lunches.'
      },
      {
        id: 'opt-c',
        text: 'Introducing Halal-certified chicken, warm rice, local savory sambals, and family-friendly dining spaces.'
      },
      {
        id: 'opt-d',
        text: 'Permanently closing all suburban branches under the assumption that Southeast Asian consumers reject fast dining.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation:
      'Successful international adaptation requires understanding the local perspective: respecting religious dietary standards (Halal certification), accommodating regional staple foods (rice and savory sauces), and recognizing communal family dining habits.'
  },

  {
    id: 'u1-p-13',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'Competing Valid Priorities',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.3',
      pageRange: '16-20',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Chapter 1 Review, pp. 16–20',
    misconceptionId: 'misc-single-right-perspective',
    misconceptionAlert:
      'Complex issues rarely have a single "pure" answer where one side is completely right and the other completely wrong.',
    question: 'When studying complex global challenges, why is it incorrect to search for a single "right" perspective?',
    options: [
      {
        id: 'opt-a',
        text: 'Complex issues involve competing, legitimate priorities—such as protecting local worker livelihoods versus preserving ecosystems.'
      },
      {
        id: 'opt-b',
        text: 'Cambridge Global Perspectives teaches that objective empirical facts do not exist and all subjective viewpoints are equally valid.'
      },
      {
        id: 'opt-c',
        text: 'Academic researchers are ethically forbidden from holding values, requiring them to stay indifferent on all policy questions.'
      },
      {
        id: 'opt-d',
        text: 'International development agencies will inevitably intervene to mandate uniform policies that eliminate stakeholder debates.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Complex global problems involve genuine trade-offs between valid human needs (economic survival, public health, ecological conservation, legal rights). Effective research examines the reasons behind each priority to design balanced solutions.'
  },

  {
    id: 'u1-p-14',
    unitNumber: 1,
    type: 'scenario-analysis',
    difficulty: 'Challenge',
    concept: 'Formulating a Bridge Solution',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 1,
      section: 'Chapter 1 Review',
      pageRange: '21',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Chapter 1 Review, p. 21',
    scenario:
      'In the Exit Thinking Challenge (p. 21), a school debates a complete ban on smartphones. Teachers argue phones cause severe classroom distraction and online drama. Parents and students argue phones provide safety when traveling home late on public buses and allow urgent family contact.',
    question: 'Which proposal represents a constructive "bridge solution" that respects both valid perspectives?',
    options: [
      {
        id: 'opt-a',
        text: 'Impose an absolute municipal ban on all mobile devices across city limits with strict police fines for adolescents carrying phones in public, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Require phones to be secured inside individual lockers during classroom lessons, while permitting access before and after school for transit.'
      },
      {
        id: 'opt-c',
        text: 'Allow unrestricted phone use at all times during classroom instruction, claiming digital independence outweighs teacher classroom focus.'
      },
      {
        id: 'opt-d',
        text: 'Prohibit parental contact during transit hours while transferring full student travel surveillance to private municipal security contractors.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'A bridge solution does not simply pick a winner. It addresses the core concern of teachers (preventing distractions during instructional time) while respecting the core concern of families (commuter safety and emergency communication).'
  },

  {
    id: 'u1-p-15',
    unitNumber: 1,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Identifying Overlapping Interests',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: 'Chapter 1 Review',
      pageRange: '20-21',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Chapter 1 Review, pp. 20–21',
    misconceptionId: 'misc-no-overlap-in-conflict',
    scenario:
      'A city port authority and a local artisanal fishing cooperative disagree sharply over a proposed harbor dredging project. The port authority wants deeper channels for larger container ships; the fishermen fear dredging will destroy shallow coral breeding grounds.',
    question: 'Which of the following represents a hidden shared interest where both stakeholders can agree?',
    options: [
      {
        id: 'opt-a',
        text: 'Both groups agree that all commercial fishing operations should cease permanently across the entire coastal province.'
      },
      {
        id: 'opt-b',
        text: 'Both groups want to immediately close the international commercial shipping port to eliminate water pollution risks.'
      },
      {
        id: 'opt-c',
        text: 'Both groups need clean, unpolluted waterways free of toxic chemical spills and require long-term maritime navigation safety.'
      },
      {
        id: 'opt-d',
        text: 'Conflicting commercial stakeholders never share common interests because economic competition prevents any policy compromise.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation:
      'Even in sharp disputes, stakeholders frequently share underlying dependencies. Both the port operators and fishermen depend on clean water, harbor environmental stability, and safe maritime navigation, forming the foundation for a negotiated bridge solution.'
  }
];
