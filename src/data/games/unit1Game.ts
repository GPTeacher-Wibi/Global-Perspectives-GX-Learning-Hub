/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3B: UNIT 1 PERSPECTIVE-BASED CASE CHALLENGE DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 6–21)
 *
 * Case Structure:
 * - Case 1: Teluk Bakau Harbor & Mangrove Corridor (Maritime Economy vs. Marine Conservation)
 * - Case 2: Trans-Metropolis Clean Air Transit (Urban Mobility vs. Micro-Vendor Livelihoods)
 *
 * Grounded in:
 * - 4 Core Characteristics (Subjective, Contextual, Dynamic, Interconnected) [pp. 7-8]
 * - 4 Analytical Lenses (Cultural, Economic, Political, Social) [pp. 10-13]
 * - 4 Concentric Scales (Personal, Local, National, Global) [pp. 13-16]
 * - Synthesis & Bridge Solutions (Smartphone Debate, Electric Vehicles, Burger Bliss) [pp. 14-21]
 */

import { SourceReference } from '../../types/practiceGame';

export type PerspectiveLens = 'Cultural' | 'Economic' | 'Political' | 'Social';
export type PerspectiveLevel = 'Personal' | 'Local' | 'National' | 'Global';

export interface StakeholderProfile {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatarIcon: string;
  primaryLens: PerspectiveLens;
  primaryLevel: PerspectiveLevel;
  quote: string;
  corePriority: string;
  keyConcern: string;
  hiddenSharedInterest: string;
  explanation: string;
}

export interface CaseStageQuestion {
  id: string;
  stageNumber: number;
  stageName: string;
  prompt: string;
  guidanceText?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
    dimensionFeedback?: string;
  }[];
}

export interface CaseDecisionOption {
  id: string;
  title: string;
  approachType: 'unbalanced-commercial' | 'unbalanced-freeze' | 'balanced-bridge';
  description: string;
  shortTermConsequence: string;
  longTermConsequence: string;
  stakeholderImpact: {
    economicScore: number; // 0 - 100
    socialScore: number;
    environmentalScore: number;
    culturalScore: number;
  };
  isOptimalBridge: boolean;
  debriefFeedback: string;
}

export interface CaseScenario {
  id: string;
  caseNumber: number;
  title: string;
  subtitle: string;
  location: string;
  summary: string;
  backgroundStory: string[];
  keyTension: string;
  sourceRef: SourceReference;
  stakeholders: StakeholderProfile[];
  stages: {
    stage1Comprehension: CaseStageQuestion;
    stage2StakeholderMatching: {
      instruction: string;
      stakeholderIds: string[];
    };
    stage3LensAndLevel: {
      instruction: string;
      items: {
        stakeholderId: string;
        correctLens: PerspectiveLens;
        correctLevel: PerspectiveLevel;
        lensReasoning: string;
        levelReasoning: string;
      }[];
    };
    stage4ConflictAnalysis: CaseStageQuestion;
    stage5CommonGround: CaseStageQuestion;
    stage6PolicyDecision: {
      instruction: string;
      contextSummary: string;
      options: CaseDecisionOption[];
    };
    stage7TwistAndSynthesis: {
      twistTitle: string;
      twistDescription: string;
      synthesisPrompt: string;
      options: {
        id: string;
        text: string;
        isCorrect: boolean;
        explanation: string;
      }[];
    };
  };
}

export const UNIT_1_CASE_CHALLENGES: CaseScenario[] = [
  // --------------------------------------------------------------------------
  // CASE 1: TELUK BAKAU HARBOR & MANGROVE CORRIDOR
  // --------------------------------------------------------------------------
  {
    id: 'case-teluk-bakau',
    caseNumber: 1,
    title: 'Teluk Bakau: The Mangrove Harbor Expansion',
    subtitle: 'Balancing International Shipping with Coastal Livelihoods & Sacred Mangroves',
    location: 'Teluk Bakau Coastal District, Eastern Sumatra, Indonesia',
    summary:
      'A multi-million-dollar deep-water logistics port is proposed at Teluk Bakau to handle international container ships and boost regional manufacturing exports. However, dredging and pier construction will cut through 180 hectares of ancient mangrove forest that protects 600 artisanal fishing families from storm surges and serves as a sacred coastal shrine site.',
    backgroundStory: [
      'Teluk Bakau is a sheltered coastal bay that has sustained artisanal fishing communities for over four generations. The mangrove forest acts as a natural nursery for tiger prawns, crabs, and snapper, as well as a sacred site where the annual "Petik Laut" gratitude ceremony is held.',
      'In recent years, the provincial government and an international maritime shipping consortium designated Teluk Bakau as the primary hub for regional raw mineral and agricultural exports to European and East Asian markets.',
      'The proposed master plan calls for dredging an 18-meter-deep channel and clearing 180 hectares of mangroves to build container berths, cold-storage warehouses, and highway links.',
      'Residents, port authorities, marine scientists, and national trade delegates are locked in intense public hearings over the future of the bay.'
    ],
    keyTension:
      'The tension between national/global economic trade expansion and local social-ecological survival and cultural heritage.',
    sourceRef: {
      unitNumber: 1,
      section: '1.1–1.3 & Review',
      pageRange: '6-21',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stakeholders: [
      {
        id: 'sh-fisher',
        name: 'Ibu Sari Nurmala',
        role: 'Chairperson of Teluk Bakau Artisanal Fisherfolk Cooperative',
        organization: 'Koperasi Nelayan Bahari Mandiri',
        avatarIcon: 'Anchor',
        primaryLens: 'Social',
        primaryLevel: 'Local',
        quote:
          '"Our boats depend on the calm shallow waters behind the mangrove belt. If the mudflats are dredged for giant container ships, fish breeding grounds will vanish, and our 600 families will have no income to buy rice or educate our children."',
        corePriority: 'Protecting community livelihoods, food security, and safe inshore fishing waters.',
        keyConcern: 'Loss of fish breeding nurseries, increased coastal erosion, and displacement of local fishing families.',
        hiddenSharedInterest:
          'Needs reliable coastal water safety, clean marine waters free of toxic chemical spills, and sustainable harbor logistics so fresh fish can reach city markets.',
        explanation:
          'Her primary lens is Social because she fights for human equity, family livelihoods, and the basic survival of vulnerable community workers. Her primary level is Local (the coastal fishing village).'
      },
      {
        id: 'sh-port-director',
        name: 'Pak Budi Hartono',
        role: 'Regional Port Infrastructure Director',
        organization: 'Provincial Maritime Development Authority',
        avatarIcon: 'Ship',
        primaryLens: 'Economic',
        primaryLevel: 'National',
        quote:
          '"Current logistics bottlenecks at provincial docks add 22% in deadweight freight costs to local agricultural exports. A modern deep-water port will attract $450 million in manufacturing investments, modernize regional trade, and create over 3,200 direct logistics jobs."',
        corePriority: 'Lowering regional logistics costs, attracting industrial capital, and expanding trade revenue.',
        keyConcern: 'Severe port congestion, shipping delays, and loss of foreign investment to neighboring nations.',
        hiddenSharedInterest:
          'Needs long-term coastal stability and storm surge protection; siltation and destructive tidal floods would shut down harbor operations and damage multi-million-dollar crane infrastructure.',
        explanation:
          'His primary lens is Economic because his calculations focus on trade volume, export costs, investment returns, and job creation. His primary level is National (domestic export infrastructure and provincial trade power).'
      },
      {
        id: 'sh-biologist',
        name: 'Dr. Rian Pratama',
        role: 'Senior Coastal Ecologist & UN Habitat Advisor',
        organization: 'National Coastal Research Institute & UN Environment Programme',
        avatarIcon: 'Leaf',
        primaryLens: 'Political',
        primaryLevel: 'Global',
        quote:
          '"Indonesia is a signatory to the Ramsar Wetland Convention and the Paris Climate Agreement. Teluk Bakau\'s mangrove biomass stores over 420,000 tons of blue carbon and provides biological wave buffering against rising sea levels. Clearing it violates national commitments to international climate treaties."',
        corePriority: 'Upholding international climate agreements and preserving high-density blue carbon sinks.',
        keyConcern: 'Severe carbon emissions from destroyed peat-mangrove soils and total loss of regional coastal wave attenuation.',
        hiddenSharedInterest:
          'Supports modern, well-regulated maritime transport that utilizes renewable shore power rather than old, polluting, unregulated diesel barges.',
        explanation:
          'His primary lens is Political because his core argument relies on international treaty enforcement, international environmental law, and legal compliance (Ramsar/Paris Agreement). His primary scale is Global (worldwide planetary climate systems and multilateral treaties).'
      },
      {
        id: 'sh-cultural-elder',
        name: 'Pak Wayan Sudirman',
        role: 'Traditional Community Custodian & Heritage Representative',
        organization: 'Lembaga Adat Pesisir Teluk Bakau',
        avatarIcon: 'Compass',
        primaryLens: 'Cultural',
        primaryLevel: 'Local',
        quote:
          '"The eastern tip of the mangrove cove is home to our ancestral sanctuary where the annual Petik Laut ceremony has taken place since 1892. If foreign container cranes replace our holy sea boundary, the living spirit of our ancestors and our cultural moral compass will be broken."',
        corePriority: 'Preserving ancestral heritage, sacred ceremonial shrines, and traditional maritime identity.',
        keyConcern: 'Desecration of sacred ceremonial zones and the erasure of centuries-old coastal cultural practices.',
        hiddenSharedInterest:
          'Welcomes community prosperity and stable docks if sacred boundaries are legally protected and youth are not forced to migrate away to distant cities.',
        explanation:
          'His primary lens is Cultural because he focuses entirely on ancestral traditions, sacred spiritual boundaries, historical heritage, and moral customs. His primary level is Local (the village heritage site).'
      }
    ],
    stages: {
      stage1Comprehension: {
        id: 'c1-s1',
        stageNumber: 1,
        stageName: 'See the Situation (Deconstruction)',
        prompt:
          'Based on the background briefing for Teluk Bakau, which statement most accurately captures the primary conflict and multi-stakeholder challenge?',
        guidanceText:
          'Look for the statement that acknowledges both economic development goals and the human/ecological needs of the local community.',
        options: [
          {
            id: 'c1-s1-opt-a',
            text: 'The port authority simply wants to destroy nature because they dislike local fishermen and prefer foreign corporations.',
            isCorrect: false,
            explanation:
              'Incorrect. This represents a simplistic, cartoonish view. The port authority’s objective is to reduce logistics costs, expand national export capacity, and create regional jobs—a legitimate economic priority.'
          },
          {
            id: 'c1-s1-opt-b',
            text: 'The proposed port promises substantial regional economic growth and trade efficiency, but threatens local artisanal fishing livelihoods, coastal storm protection, and sacred cultural heritage.',
            isCorrect: true,
            explanation:
              'Correct! This accurately captures the fundamental tension between legitimate national/global economic priorities and vital local social, ecological, and cultural realities.'
          },
          {
            id: 'c1-s1-opt-c',
            text: 'Local fishermen should relocate immediately because national economic projects always override small village concerns without discussion.',
            isCorrect: false,
            explanation:
              'Incorrect. Cambridge Global Perspectives rejects the assumption that local communities and vulnerable groups can simply be ignored without evaluating equity, social impact, and sustainable alternatives.'
          }
        ]
      },

      stage2StakeholderMatching: {
        instruction:
          'Review the 4 stakeholders involved in Teluk Bakau. Recognize that each voice represents a distinct institutional or community role with a specific stake.',
        stakeholderIds: ['sh-fisher', 'sh-port-director', 'sh-biologist', 'sh-cultural-elder']
      },

      stage3LensAndLevel: {
        instruction:
          'Assign the correct Analytical Lens (Type: Cultural, Economic, Political, Social) and Scale (Level: Personal, Local, National, Global) to each stakeholder based on their core reasoning and scope.',
        items: [
          {
            stakeholderId: 'sh-fisher',
            correctLens: 'Social',
            correctLevel: 'Local',
            lensReasoning:
              'Ibu Sari focuses on family income, community well-being, food security, and protection for vulnerable fishing households.',
            levelReasoning:
              'Her operational scope is the local village and bay community.'
          },
          {
            stakeholderId: 'sh-port-director',
            correctLens: 'Economic',
            correctLevel: 'National',
            lensReasoning:
              'Pak Budi’s calculations center on industrial investment costs, container shipping revenue, export tariffs, and job generation.',
            levelReasoning:
              'His scope is the provincial and national maritime logistics network.'
          },
          {
            stakeholderId: 'sh-biologist',
            correctLens: 'Political',
            correctLevel: 'Global',
            lensReasoning:
              'Dr. Rian grounds his objection in official international treaties, legal wetland commitments, and planetary climate targets.',
            levelReasoning:
              'His framework operates at the global scale (multilateral UN agreements and planetary carbon sinks).'
          },
          {
            stakeholderId: 'sh-cultural-elder',
            correctLens: 'Cultural',
            correctLevel: 'Local',
            lensReasoning:
              'Pak Wayan focuses strictly on ancestral heritage, religious sanctity, historical customs, and the annual Petik Laut ceremony.',
            levelReasoning:
              'His scope is the immediate ancestral shoreline of the local community.'
          }
        ]
      },

      stage4ConflictAnalysis: {
        id: 'c1-s4',
        stageNumber: 4,
        stageName: 'Compare Interests & Tensions',
        prompt:
          'Analyze the direct points of tension between the Regional Port Director (Pak Budi) and the Fisherfolk Cooperative Leader (Ibu Sari). Why can’t this dispute be resolved by simply choosing one side completely?',
        guidanceText:
          'Consider what happens if one side achieves 100% of their goal while the other side gets 0%.',
        options: [
          {
            id: 'c1-s4-opt-a',
            text: 'Because building 100% of the original port destroys local livelihoods and coastal storm buffers, while cancelling the port entirely leaves the region with crippling logistics bottlenecks and lost employment opportunities.',
            isCorrect: true,
            explanation:
              'Correct! Complex global problems involve legitimate competing priorities. An all-or-nothing approach either destroys human communities and ecology, or sacrifices essential regional economic progress.'
          },
          {
            id: 'c1-s4-opt-b',
            text: 'Because both leaders secretly agree on everything and only argue in public to attract media attention.',
            isCorrect: false,
            explanation:
              'Incorrect. The tension is genuine and stems from fundamentally different responsibilities and analytical lenses.'
          },
          {
            id: 'c1-s4-opt-c',
            text: 'Because international law bans all port construction worldwide.',
            isCorrect: false,
            explanation:
              'Incorrect. International conventions regulate environmental standards and human rights, but do not prohibit sustainable maritime development.'
          }
        ]
      },

      stage5CommonGround: {
        id: 'c1-s5',
        stageNumber: 5,
        stageName: 'Find the Overlap (Common Ground)',
        prompt:
          'Despite their sharp public disagreement, which underlying shared interest connects both the Port Authority and the Local Fishing Community?',
        guidanceText:
          'What physical conditions do both commercial shipping and fishing boats require to survive and operate in the bay?',
        options: [
          {
            id: 'c1-s5-opt-a',
            text: 'Both parties require a stable coastal shoreline protected from catastrophic storm surges, clean navigation channels free of uncontrolled siltation/spills, and reliable transport infrastructure to move goods to markets.',
            isCorrect: true,
            explanation:
              'Correct! Both the multi-million-dollar container port and artisanal fishing boats depend on healthy coastal wave buffering and clean water. If storm surges wreck the coastline or industrial pollution ruins the bay, both operations fail.'
          },
          {
            id: 'c1-s5-opt-b',
            text: 'Both parties agree that all mangroves should be turned into a golf resort for foreign tourists.',
            isCorrect: false,
            explanation:
              'Incorrect. Neither stakeholder wants this, and it would exacerbate both ecological and social crises.'
          },
          {
            id: 'c1-s5-opt-c',
            text: 'There is zero common ground; opposing stakeholders in Global Perspectives never share any underlying interests.',
            isCorrect: false,
            explanation:
              'Incorrect. This reflects Misconception 6 (Zero-Sum Polarization). Real-world stakeholders almost always share foundational dependencies.'
          }
        ]
      },

      stage6PolicyDecision: {
        instruction:
          'As the Chief Inquiries Commissioner for the Provincial Planning Board, evaluate the three policy pathways proposed for Teluk Bakau. Select the strategy that represents the most rigorous, sustainable "Bridge Solution".',
        contextSummary:
          'You must decide how to proceed with the Teluk Bakau master plan, balancing economic competitiveness with social equity and environmental preservation.',
        options: [
          {
            id: 'dec-1-commercial',
            title: 'Option 1: Unrestricted Fast-Track Port Expansion',
            approachType: 'unbalanced-commercial',
            description:
              'Approve the original 180-hectare dredging master plan immediately. Provide one-off cash payouts of Rp 15,000,000 to displaced fishing families and proceed with 24/7 construction to beat rival regional ports.',
            shortTermConsequence:
              'Port construction starts on schedule; industrial investors express satisfaction; but local fisherfolk launch massive boat blockades in protest.',
            longTermConsequence:
              '180 hectares of mangroves are eradicated; inshore fish populations collapse; heavy storm surges cause $80M in flood damage to the port’s own container yards within 8 years.',
            stakeholderImpact: {
              economicScore: 75,
              socialScore: 20,
              environmentalScore: 15,
              culturalScore: 10
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy ignores the Social, Cultural, and Ecological lenses. While it achieves rapid short-term commercial investment, the destruction of coastal buffering creates catastrophic long-term economic and human liabilities.'
          },
          {
            id: 'dec-2-freeze',
            title: 'Option 2: Absolute Development Ban & Marine Sanctuary Freeze',
            approachType: 'unbalanced-freeze',
            description:
              'Cancel the port project entirely. Declare the entire 5,000-hectare bay a zero-development preservation sanctuary. Disallow any industrial modifications, deep docks, or transport upgrades.',
            shortTermConsequence:
              'Local fishing families and environmental activists celebrate; mangroves and sacred ceremonial shrines remain undisturbed.',
            longTermConsequence:
              'The province’s agricultural producers suffer 35% higher export losses; regional youth face severe lack of formal jobs; unregulated illegal shallow dredging spreads due to lack of municipal oversight.',
            stakeholderImpact: {
              economicScore: 25,
              socialScore: 55,
              environmentalScore: 85,
              culturalScore: 85
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy completely dismisses the Economic lens. Freezing all development preserves nature in the short term, but fails to provide employment opportunities or resolve regional logistics bottlenecks.'
          },
          {
            id: 'dec-3-bridge',
            title: 'Option 3: The Integrated Eco-Harbor & Co-Management Corridor',
            approachType: 'balanced-bridge',
            description:
              'Redesign the port layout into a compact offshore finger-pier design, sparing 85% of the mangrove forest. Establish a legally protected 300-meter buffer zone around the Petik Laut sacred shrine. Construct a modern solar-powered fish landing dock and cold-storage facility dedicated to the local cooperative, and create a joint Community Co-Management Council with veto power over dredging sediment management.',
            shortTermConsequence:
              'Design revisions add 4 months to the planning timeline and $18M in specialized engineering costs, but all four stakeholder groups formally sign the Teluk Bakau Accord.',
            longTermConsequence:
              'The port opens with high-efficiency berths; mangroves continue protecting the bay from storm surges; fish catch values double due to the cooperative’s on-site cold storage; Teluk Bakau receives UN Green Port certification.',
            stakeholderImpact: {
              economicScore: 85,
              socialScore: 88,
              environmentalScore: 82,
              culturalScore: 90
            },
            isOptimalBridge: true,
            debriefFeedback:
              'Exemplary Bridge Solution! This policy integrates all four analytical lenses: Economic (modern logistics efficiency), Social (empowered fishing livelihoods and shared profits), Cultural (protected sacred shrine), and Political (legally binding co-management and UN treaty compliance).'
          }
        ]
      },

      stage7TwistAndSynthesis: {
        twistTitle: 'The 50-Year Monsoon Storm & International Green Audit',
        twistDescription:
          'Three years after implementing your chosen policy, two major events occur simultaneously: \n1. A powerful tropical storm system strikes the coast with 4.5-meter waves.\n2. A coalition of major international shipping lines announces that they will only dock at ports holding certified Green Maritime Environmental Standards.',
        synthesisPrompt:
          'How does the Integrated Bridge Solution demonstrate resilience and foresight when confronted by these unexpected events?',
        options: [
          {
            id: 'c1-s7-opt-a',
            text: 'The preserved mangrove corridor absorbs 65% of the storm wave energy, protecting both the village and port berths, while the eco-port design secures the international green shipping certification, attracting premium global cargo.',
            isCorrect: true,
            explanation:
              'Correct! By designing for interconnected perspectives rather than narrow short-term gain, the bridge solution built structural resilience against both environmental hazards and evolving global market regulations.'
          },
          {
            id: 'c1-s7-opt-b',
            text: 'The storm proves that humans cannot build anything near the coast, so all operations should be abandoned.',
            isCorrect: false,
            explanation:
              'Incorrect. Sustainable engineering and multi-lens planning allow communities to thrive alongside natural ecosystems.'
          },
          {
            id: 'c1-s7-opt-c',
            text: 'The international shipping lines will always choose the cheapest, most polluting port regardless of environmental standards.',
            isCorrect: false,
            explanation:
              'Incorrect. Global perspectives show that international trade is increasingly governed by ESG (environmental, social, governance) treaties and consumer expectations.'
          }
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // CASE 2: TRANS-METROPOLIS CLEAN AIR TRANSIT
  // --------------------------------------------------------------------------
  {
    id: 'case-trans-metropolis',
    caseNumber: 2,
    title: 'Trans-Metropolis: The Clean Air Transit Corridor',
    subtitle: 'Electric Bus Fleets vs. Micro-Transport (Angkot) Livelihoods & Commuter Costs',
    location: 'Metropolitan Bandung & Greater Jakarta Fringe, Indonesia',
    summary:
      'To address chronic air pollution and meet national emissions targets, the municipal government proposes replacing 1,400 privately owned petrol minivans (angkot) with a centralized fleet of modern zero-emission electric buses. While commuters welcome cleaner air and fixed schedules, 3,800 informal drivers and roadside food vendors (warung) face sudden eviction and loss of livelihood.',
    backgroundStory: [
      'Metropolitan corridors suffer from dangerous PM2.5 air quality levels, leading to high rates of childhood respiratory illness. Over 65% of corridor emissions stem from aging, poorly maintained petrol minivans and motorcycles.',
      'The city transportation agency announces "Trans-Bersih": a fully integrated electric bus corridor featuring dedicated lanes, GPS tracking, and contactless electronic fare cards.',
      'However, thousands of angkot drivers operate on daily cash targets without formal employment contracts. Furthermore, hundreds of informal street food vendors rely on passenger foot traffic at unregulated micro-bus stops to sustain their families.',
      'Public protests erupt as drivers strike, halting urban transit and sparking citywide debates.'
    ],
    keyTension:
      'The tension between public health/national climate commitments and informal worker livelihoods and social inclusion.',
    sourceRef: {
      unitNumber: 1,
      section: '1.2 & 1.3',
      pageRange: '10-16',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stakeholders: [
      {
        id: 'sh-angkot-driver',
        name: 'Pak Asep Sutisna',
        role: 'Spokesperson for Informal Minivan Drivers Association',
        organization: 'Paguyuban Pengemudi Angkutan Kota',
        avatarIcon: 'Car',
        primaryLens: 'Social',
        primaryLevel: 'Personal',
        quote:
          '"I have driven Route 08 for 22 years. I pay daily rental fees and take home Rp 80,000 to feed my three children. If the city replaces us with corporate buses requiring university diplomas, how will middle-aged drivers survive?"',
        corePriority: 'Preserving daily family livelihood, dignified employment, and financial survival.',
        keyConcern: 'Sudden unemployment, lack of formal education to qualify for corporate driver posts, and age discrimination.',
        hiddenSharedInterest:
          'Wants predictable, stable daily income and safer roads without predatory loan sharks and daily traffic gridlock.',
        explanation:
          'His primary lens is Social (family survival, worker dignity, equity for vulnerable informal workers). His primary level is Personal (household food and children’s school fees).'
      },
      {
        id: 'sh-health-officer',
        name: 'Dr. Maya Indriani',
        role: 'Chief of Municipal Pediatric Respiratory Health',
        organization: 'City Public Health Agency & Clean Air Coalition',
        avatarIcon: 'HeartPulse',
        primaryLens: 'Social',
        primaryLevel: 'Local',
        quote:
          '"In our roadside community clinics, respiratory admissions among primary school children have jumped 44%. Diesel and low-grade petrol exhaust fumes are literally poisoning our children\'s lungs. Clean electric transit is a moral and public health emergency."',
        corePriority: 'Protecting children’s respiratory health, clean air standards, and public health equity.',
        keyConcern: 'Rising childhood asthma, chronic bronchitis, and long-term healthcare expenditure for low-income families.',
        hiddenSharedInterest:
          'Wants a complete transit network that covers all neighborhoods, not just wealthy commercial thoroughfares.',
        explanation:
          'Her primary lens is Social (public health, quality of life, children’s well-being). Her primary level is Local (citywide public clinics and schools).'
      },
      {
        id: 'sh-finance-director',
        name: 'Pak Hendra Kusuma',
        role: 'Municipal Transport & Investment Commissioner',
        organization: 'City Economic Development Board',
        avatarIcon: 'TrendingUp',
        primaryLens: 'Economic',
        primaryLevel: 'National',
        quote:
          '"Traffic congestion costs our metropolitan economy Rp 14.2 trillion annually in wasted fuel and lost productivity. Modern electric buses will raise transit ridership by 30%, reduce municipal fuel import subsidies, and position our city for national green infrastructure bonds."',
        corePriority: 'Eliminating congestion economic losses, modernizing infrastructure, and capturing green bonds.',
        keyConcern: 'Excessive municipal budget deficits from inefficient transit subsidies and declining city productivity.',
        hiddenSharedInterest:
          'Needs feeder transit to bring passengers from narrow residential alleys to the main electric bus corridors.',
        explanation:
          'His primary lens is Economic (macro-economic productivity, city budget efficiency, transit investment returns). His primary level is National (domestic economic competitiveness and green bonds).'
      },
      {
        id: 'sh-climate-envoy',
        name: 'Ms. Clara van Dijk',
        role: 'International Green Cities Partnership Envoy',
        organization: 'C40 Cities Climate Leadership Group & UN-Habitat',
        avatarIcon: 'Globe2',
        primaryLens: 'Political',
        primaryLevel: 'Global',
        quote:
          '"Urban transit decarbonization is a binding milestone in the Nationally Determined Contributions (NDCs) submitted under the Paris Climate Agreement. Cities that fail to decarbonize will be penalized in international green climate funding."',
        corePriority: 'Enforcing greenhouse gas reduction targets and international climate treaty compliance.',
        keyConcern: 'Failure to hit urban carbon emission reduction milestones.',
        hiddenSharedInterest:
          'Advocates for "Just Transition" frameworks where international climate grants co-fund retraining for informal transport workers.',
        explanation:
          'Her primary lens is Political (international treaties, legal emission pacts, inter-governmental governance). Her primary level is Global (planetary climate covenants and worldwide municipal networks).'
      }
    ],
    stages: {
      stage1Comprehension: {
        id: 'c2-s1',
        stageNumber: 1,
        stageName: 'See the Situation (Deconstruction)',
        prompt:
          'Which statement best summarizes the core dilemma in the Trans-Metropolis Clean Air Transit project?',
        guidanceText:
          'Look for the option that identifies both the urgent need for clean public health and the real human risk to informal workers.',
        options: [
          {
            id: 'c2-s1-opt-a',
            text: 'Informal angkot drivers are malicious polluters who intentionally make children sick and should be arrested.',
            isCorrect: false,
            explanation:
              'Incorrect. Informal drivers are workers trying to feed their families within an existing system; they are not malicious saboteurs.'
          },
          {
            id: 'c2-s1-opt-b',
            text: 'The city must rapidly reduce dangerous air pollution and emissions, but doing so through an abrupt corporate takeover threatens the basic livelihoods of thousands of vulnerable informal drivers and vendors.',
            isCorrect: true,
            explanation:
              'Correct! This captures the authentic tension between public health/climate urgency and social-economic equity for low-income workers.'
          },
          {
            id: 'c2-s1-opt-c',
            text: 'Electric buses are too expensive for any developing nation to ever consider.',
            isCorrect: false,
            explanation:
              'Incorrect. Electric transit systems are being successfully adopted throughout Southeast Asia and the Global South with proper financial planning.'
          }
        ]
      },

      stage2StakeholderMatching: {
        instruction:
          'Examine the four primary stakeholders in Trans-Metropolis. Note how their distinct responsibilities shape their priorities.',
        stakeholderIds: ['sh-angkot-driver', 'sh-health-officer', 'sh-finance-director', 'sh-climate-envoy']
      },

      stage3LensAndLevel: {
        instruction:
          'Assign each stakeholder their correct primary Analytical Lens (Type) and Scale (Level).',
        items: [
          {
            stakeholderId: 'sh-angkot-driver',
            correctLens: 'Social',
            correctLevel: 'Personal',
            lensReasoning:
              'Pak Asep focuses on family survival, basic worker equity, and avoiding starvation for his household.',
            levelReasoning:
              'His scope is his personal household budget and direct daily wages.'
          },
          {
            stakeholderId: 'sh-health-officer',
            correctLens: 'Social',
            correctLevel: 'Local',
            lensReasoning:
              'Dr. Maya’s priority is community pediatric health, clean air, and reduced hospital admissions.',
            levelReasoning:
              'Her operational scope is the municipal metropolitan district.'
          },
          {
            stakeholderId: 'sh-finance-director',
            correctLens: 'Economic',
            correctLevel: 'National',
            lensReasoning:
              'Pak Hendra focuses on economic productivity losses, fuel subsidies, and citywide green investment bonds.',
            levelReasoning:
              'His scope is provincial and national economic competitiveness.'
          },
          {
            stakeholderId: 'sh-climate-envoy',
            correctLens: 'Political',
            correctLevel: 'Global',
            lensReasoning:
              'Ms. Clara argues from international treaty obligations, carbon quotas, and inter-governmental accords.',
            levelReasoning:
              'Her scope is the worldwide planetary climate regime (UN NDCs / Paris Agreement).'
          }
        ]
      },

      stage4ConflictAnalysis: {
        id: 'c2-s4',
        stageNumber: 4,
        stageName: 'Compare Interests & Tensions',
        prompt:
          'Why does an abrupt, heavy-handed ban on traditional minivans create a major social justice failure even if air quality improves?',
        guidanceText:
          'Consider what happens to families when the breadwinner is stripped of their livelihood without retraining or transitional safety nets.',
        options: [
          {
            id: 'c2-s4-opt-a',
            text: 'Because it shifts the burden of environmental cleanup onto the most economically vulnerable workers while creating transit deserts in narrow residential alleys that big buses cannot navigate.',
            isCorrect: true,
            explanation:
              'Correct! Abrupt bans without worker integration violate social equity by penalizing the poorest workers for systemic issues, while big buses often cannot navigate narrow neighborhood streets where angkots serve as vital lifelines.'
          },
          {
            id: 'c2-s4-opt-b',
            text: 'Because old petrol engines are scientifically cleaner than modern zero-emission electric motors.',
            isCorrect: false,
            explanation:
              'Incorrect. Electric buses emit zero tailpipe emissions and significantly cut urban PM2.5 pollution.'
          },
          {
            id: 'c2-s4-opt-c',
            text: 'Because informal workers have no legal right to express opinions in Global Perspectives.',
            isCorrect: false,
            explanation:
              'Incorrect. Global Perspectives prioritizes investigating diverse stakeholder voices, especially vulnerable groups.'
          }
        ]
      },

      stage5CommonGround: {
        id: 'c2-s5',
        stageNumber: 5,
        stageName: 'Find the Overlap (Common Ground)',
        prompt:
          'What shared operational reality unites both the city transit planners and informal angkot drivers?',
        guidanceText:
          'How does a passenger get from a tiny residential alley to a major electric bus terminal on the main avenue?',
        options: [
          {
            id: 'c2-s5-opt-a',
            text: 'The city needs first-mile/last-mile feeder transit connecting narrow neighborhood alleys to main bus corridors, while drivers need steady, guaranteed income without reckless racing for cash passengers.',
            isCorrect: true,
            explanation:
              'Correct! Standard 12-meter electric buses cannot enter narrow residential alleys. Angkots are the perfect feeder vehicle to deliver passengers to the main electric bus line, establishing a natural complementary partnership.'
          },
          {
            id: 'c2-s5-opt-b',
            text: 'Both groups want all roads closed to all vehicles permanently.',
            isCorrect: false,
            explanation:
              'Incorrect. Both require active, safe, functioning urban mobility networks.'
          },
          {
            id: 'c2-s5-opt-c',
            text: 'Both groups agree that air pollution is beneficial for children’s health.',
            isCorrect: false,
            explanation:
              'Incorrect. Everyone agrees clean air is essential.'
          }
        ]
      },

      stage6PolicyDecision: {
        instruction:
          'Select the most rigorous "Bridge Solution" for Trans-Metropolis from the three options below.',
        contextSummary:
          'You are the City Chief Urban Mobility Commissioner. Formulate a solution that achieves clean air targets while protecting workers.',
        options: [
          {
            id: 'c2-dec-1-ban',
            title: 'Option 1: Complete Ban & Fast-Track Corporate Concession',
            approachType: 'unbalanced-commercial',
            description:
              'Enact an immediate municipal ban on all informal minivans. Award the entire transit system to a private electric bus conglomerate. Deploy riot police to clear informal roadside warungs and minivans.',
            shortTermConsequence:
              'Air quality on the main boulevard improves by 30% in month one, but citywide strikes paralyze commerce and violent clashes break out.',
            longTermConsequence:
              'Thousands of driver families slip below the poverty line; narrow residential neighborhoods lose all transit connectivity, causing motorcycle purchases to skyrocket 85%.',
            stakeholderImpact: {
              economicScore: 60,
              socialScore: 15,
              environmentalScore: 40,
              culturalScore: 20
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy ignores the Social lens. By forcing thousands into extreme poverty and failing to serve narrow residential alleys, it causes private motorcycle usage to surge, undermining its own environmental goals.'
          },
          {
            id: 'c2-dec-2-do-nothing',
            title: 'Option 2: Unconditional Subsidy for Existing Minivans',
            approachType: 'unbalanced-freeze',
            description:
              'Cancel all electric bus plans. Pay cash subsidies directly to existing minivan owners without requiring emissions tests, schedule adherence, or vehicle repairs.',
            shortTermConsequence:
              'Drivers call off strikes; roadside food vendors remain in place.',
            longTermConsequence:
              'Air quality deteriorates to hazardous levels; pediatric emergency visits surge 60%; the city loses Rp 500B in international green climate funding.',
            stakeholderImpact: {
              economicScore: 20,
              socialScore: 50,
              environmentalScore: 10,
              culturalScore: 45
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy abandons public health and environmental commitments entirely, leaving future generations with permanent pulmonary damage and chronic economic paralysis.'
          },
          {
            id: 'c2-dec-3-bridge',
            title: 'Option 3: The "Jak-Feeder" Co-Op Transition Model',
            approachType: 'balanced-bridge',
            description:
              'Incorporate existing angkot drivers into a municipally backed Cooperative with guaranteed monthly salaries and health insurance (BPJS). Re-route minivans as official electric/low-emission "Feeder Feeders" connecting narrow neighborhood alleys to the main electric bus rapid transit. Provide free evening driver academy certifications to transition drivers to electric bus pilots, and create designated formal vendor kiosks at major interchange stations.',
            shortTermConsequence:
              'Requires Rp 85B in transitional financing and 6 months of intensive co-op negotiations, but all driver unions endorse the plan and transition peacefully.',
            longTermConsequence:
              'The city achieves a seamless, multi-tier transit network from alley to avenue; PM2.5 drops by 45%; 3,800 informal workers gain formal social security and stable salaries; international climate bodies award full Just Transition grants.',
            stakeholderImpact: {
              economicScore: 88,
              socialScore: 92,
              environmentalScore: 90,
              culturalScore: 86
            },
            isOptimalBridge: true,
            debriefFeedback:
              'Superb Bridge Solution! This captures the essence of Cambridge Global Perspectives by treating informal workers as essential community partners rather than obstacles, harmonizing clean air with human dignity.'
          }
        ]
      },

      stage7TwistAndSynthesis: {
        twistTitle: 'The Fuel Subsidy Reallocation & Just Transition Grant',
        twistDescription:
          'Two years into the Co-Op Transition Model, the national government slashes fossil fuel subsidies by 50% nationwide, while the UN Green Climate Fund offers a $40M grant for municipal "Just Transition" programs.',
        synthesisPrompt:
          'How does the Co-Op Transition Model protect the community while taking advantage of this national shift?',
        options: [
          {
            id: 'c2-s7-opt-a',
            text: 'Because drivers receive fixed monthly municipal salaries rather than paying out-of-pocket for petrol, they are insulated from the fuel price shock, and the city secures the $40M UN grant to convert all feeder minivans to locally assembled electric micro-buses.',
            isCorrect: true,
            explanation:
              'Correct! By converting informal workers into formal cooperative partners, the system built economic resilience against volatile fuel shocks and qualified for international climate equity funding.'
          },
          {
            id: 'c2-s7-opt-b',
            text: 'The grant money should be refunded because public transit should never use international funds.',
            isCorrect: false,
            explanation:
              'Incorrect. Global funding mechanisms exist specifically to support sustainable transitions in emerging economies.'
          },
          {
            id: 'c2-s7-opt-c',
            text: 'The drivers should immediately return to burning low-grade kerosene.',
            isCorrect: false,
            explanation:
              'Incorrect. Reverting to toxic fuels harms public health and violates environmental legislation.'
          }
        ]
      }
    }
  }
];
