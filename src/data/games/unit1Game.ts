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
  evidenceCited?: string;
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
      section: 'Review pp. 16-21',
      pageRange: '16-21',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stakeholders: [
      {
        id: 'sh-fisher',
        name: 'Ibu Sari',
        role: 'Artisanal Fisherfolk Cooperative Chairperson',
        organization: 'Koperasi Nelayan Bakau Sejahtera',
        avatarIcon: 'Fish',
        primaryLens: 'Social',
        primaryLevel: 'Local',
        quote:
          '"If the dredging destroys the mangrove roots, our prawn catches will drop to zero within two seasons. Our families cannot eat concrete docks, and cash compensation runs out in six months."',
        evidenceCited:
          'Local cooperative catch records show 85% of crab and prawn larvae mature exclusively in the inner mangrove roots.',
        corePriority: 'Preserving nursery habitat and ensuring community food security.',
        keyConcern: 'Total collapse of artisanal fisheries and forced migration to urban slums.',
        hiddenSharedInterest:
          'Needs clean, calm coastal water and reliable transportation infrastructure to sell fresh catches.',
        explanation:
          'Ibu Sari represents the Social lens at the Local level. Her primary concern is the lived survival and daily food security of village families.'
      },
      {
        id: 'sh-port-director',
        name: 'Pak Budi',
        role: 'Regional Port Logistics Authority Director',
        organization: 'Sumatra Maritime Development Board (PT Pelindo Regional)',
        avatarIcon: 'Ship',
        primaryLens: 'Economic',
        primaryLevel: 'National',
        quote:
          '"Our export commodities currently wait up to seven days at shallow river piers, costing our national economy $45 million annually in demurrage penalties. Teluk Bakau is the only natural deep-water bay capable of accommodating Post-Panamax container vessels."',
        evidenceCited:
          'National Chamber of Commerce report showing 32% lower transport costs per container if deep-water berths are constructed.',
        corePriority: 'Maximizing regional export logistics throughput and reducing national shipping tariffs.',
        keyConcern: 'Project delays causing foreign maritime consortia to redirect investments to rival ports.',
        hiddenSharedInterest:
          'Requires a stable coastal shoreline protected from catastrophic typhoon waves and sedimentation.',
        explanation:
          'Pak Budi represents the Economic lens at the National level. His calculations center on macro-economic competitiveness and logistics efficiency.'
      },
      {
        id: 'sh-biologist',
        name: 'Dr. Rian',
        role: 'Senior Marine Ecologist & Wetland Specialist',
        organization: 'Indonesian Mangrove Research Consortium (BRIN)',
        avatarIcon: 'TreeDeciduous',
        primaryLens: 'Political',
        primaryLevel: 'Global',
        quote:
          '"Teluk Bakau stores an estimated 240 metric tons of soil carbon per hectare—four times more than terrestrial rainforests. Eradicating it violates Indonesia’s Nationally Determined Contributions (NDCs) under the Paris Climate Agreement."',
        evidenceCited:
          'Peer-reviewed IPCC coastal blue carbon benchmarks and multispectral satellite vegetative index maps.',
        corePriority: 'Enforcing multilateral environmental treaties and planetary carbon sink preservation.',
        keyConcern: 'Irreversible coastal erosion, greenhouse gas emissions, and loss of endemic mangrove species.',
        hiddenSharedInterest:
          'Supports sustainable maritime economic activities that finance long-term coastal conservation zones.',
        explanation:
          'Dr. Rian uses the Political lens at the Global level. His reasoning is rooted in international climate agreements and multilateral commitments.'
      },
      {
        id: 'sh-cultural-elder',
        name: 'Pak Wayan',
        role: 'Traditional Custodian & Coastal Community Elder',
        organization: 'Lembaga Adat Pesisir Teluk Bakau',
        avatarIcon: 'Sparkles',
        primaryLens: 'Cultural',
        primaryLevel: 'Local',
        quote:
          '"Our ancestors consecrated the Tanjung Karang promontory as sacred ground four hundred years ago. The annual Petik Laut ceremony is where our children learn gratitude to the sea; flattening it for a container yard erases our soul."',
        evidenceCited:
          'Historical Dutch colonial cartography from 1840 confirming continuous ceremonial utilization of the shoreline promontory.',
        corePriority: 'Safeguarding ancestral sacred grounds and intergenerational heritage transmission.',
        keyConcern: 'Desecration of ritual sacred shrines and social fragmentation of traditional elders.',
        hiddenSharedInterest:
          'Wants orderly, respectful community development that prevents lawless industrial sprawl.',
        explanation:
          'Pak Wayan embodies the Cultural lens at the Local level, focusing on sacred ancestral heritage and intergenerational identity.'
      }
    ],

    stages: {
      stage1Comprehension: {
        id: 'c1-s1',
        stageNumber: 1,
        stageName: 'Identify the Underlying Conflict',
        prompt:
          'What is the fundamental analytical disagreement driving the controversy at Teluk Bakau?',
        guidanceText:
          'Look beyond the surface argument about port construction. What two legitimate priorities are clashing?',
        options: [
          {
            id: 'c1-s1-opt-b',
            text: 'A commercial development priority to expand national trade logistics versus local community interests in coastal ecology, sustainable livelihoods, and cultural heritage.',
            isCorrect: true,
            explanation:
              'Correct! The conflict represents a classic Global Perspectives tension: macro-economic growth (national trade logistics) vs. micro-level social, cultural, and environmental sustainability.'
          },
          {
            id: 'c1-s1-opt-a',
            text: 'A local industrial lobby that seeks to maximize commercial profits by building heavy export infrastructure regardless of environmental and social safeguards across the coastal region.',
            isCorrect: false,
            explanation:
              'Incorrect. While the port involves industrial interests, this option reduces the dispute to villainous motives rather than an analytical clash of legitimate development frameworks.'
          },
          {
            id: 'c1-s1-opt-c',
            text: 'A purely symbolic cultural celebration with zero economic implications for regional shipping infrastructure or municipal trade logistics networks across Sumatra.',
            isCorrect: false,
            explanation:
              'Incorrect. The dispute has massive economic, social, and environmental consequences; cultural heritage is only one of four analytical dimensions.'
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
            id: 'c1-s4-opt-b',
            text: 'Because both commercial developers and artisanal fishers have identical economic objectives and are merely creating public drama to solicit external government subsidies.',
            isCorrect: false,
            explanation:
              'Incorrect. The tension is genuine and stems from fundamentally different responsibilities and analytical lenses.'
          },
          {
            id: 'c1-s4-opt-c',
            text: 'Because international maritime trade regulations strictly forbid all port construction near mangrove estuaries under any environmental mitigation agreement worldwide.',
            isCorrect: false,
            explanation:
              'Incorrect. International conventions regulate environmental standards and human rights, but do not prohibit sustainable maritime development.'
          },
          {
            id: 'c1-s4-opt-a',
            text: 'Because fully executing the original port destroys coastal livelihoods and protective mangroves, while cancelling it leaves the region with severe logistics bottlenecks and lost trade employment.',
            isCorrect: true,
            explanation:
              'Correct! Complex global problems involve legitimate competing priorities. An all-or-nothing approach either destroys human communities and ecology, or sacrifices essential regional economic progress.'
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
            text: 'Both parties require a stable coastline protected from storm surges, clean navigation channels free of heavy siltation and toxic spills, and dependable transport routes to deliver goods to domestic and export markets.',
            isCorrect: true,
            explanation:
              'Correct! Both the multi-million-dollar container port and artisanal fishing boats depend on healthy coastal wave buffering and clean water. If storm surges wreck the coastline or industrial pollution ruins the bay, both operations fail.'
          },
          {
            id: 'c1-s5-opt-b',
            text: 'Both parties agree that commercial maritime shipping should be fully suspended and the entire coastal zone converted into an exclusive foreign luxury eco-resort with private beachfront concessions and yacht marinas.',
            isCorrect: false,
            explanation:
              'Incorrect. Neither stakeholder wants this, and it would exacerbate both ecological and social crises.'
          },
          {
            id: 'c1-s5-opt-c',
            text: 'There is zero underlying common ground because modern container logistics infrastructure and traditional artisanal fishing ecosystems are completely irreconcilable in all physical, legal, and operational respects.',
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
            title: 'Option A: Unrestricted Fast-Track Port Expansion',
            approachType: 'unbalanced-commercial',
            description:
              'Approve the original 180-hectare dredging master plan immediately to secure commercial investment. Provide one-off cash relocation payouts of Rp 15,000,000 to registered fishing families and establish round-the-clock dredging operations to outpace rival regional transport hubs and meet international shipping deadlines.',
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
            id: 'dec-3-bridge',
            title: 'Option B: The Integrated Eco-Harbor & Co-Management Corridor',
            approachType: 'balanced-bridge',
            description:
              'Redesign the harbor using compact offshore finger-piers, preserving 85% of the mangrove buffer and the Petik Laut sacred shrine. Build a solar-powered fish landing dock and cold-storage facility for the local cooperative, and establish a joint Co-Management Council with binding oversight over sediment dredging.',
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
          },
          {
            id: 'dec-2-freeze',
            title: 'Option C: Absolute Development Ban & Marine Sanctuary Freeze',
            approachType: 'unbalanced-freeze',
            description:
              'Cancel the container port project entirely and declare the entire 5,000-hectare coastal bay an untouchable ecological sanctuary. Prohibit any industrial dredging, berth construction, or logistics transit highways to preserve the mangrove nursery and ancestral ceremonial sites without compromise.',
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
            id: 'c1-s7-opt-b',
            text: 'The severe storm proves that all human coastal development is doomed to fail, indicating that municipal planners should abandon the harbor site entirely and relocate regional shipping facilities inland.',
            isCorrect: false,
            explanation:
              'Incorrect. Sustainable engineering and multi-lens planning allow communities to thrive alongside natural ecosystems.'
          },
          {
            id: 'c1-s7-opt-c',
            text: 'International green shipping regulations are non-binding publicity guidelines that maritime shipping consortia will routinely ignore during major economic crises and regional trade bottlenecks.',
            isCorrect: false,
            explanation:
              'Incorrect. Global shipping markets increasingly enforce strict decarbonization and wetland-preservation covenants.'
          },
          {
            id: 'c1-s7-opt-a',
            text: 'The preserved mangrove forest buffers the harbor from destructive storm surge damage, while verified eco-friendly operations allow the port to attract premium certified global green shipping carriers.',
            isCorrect: true,
            explanation:
              'Correct! The Bridge Solution anticipates future systemic risks: the intact mangrove belt protects port infrastructure from catastrophic wave energy, and green compliance positions the port as a preferred hub for sustainable global shipping lines.'
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
    subtitle: 'Managing Urban Air Quality, Electric Bus Transition, and Informal Minibus Livelihoods',
    location: 'Metropolitan Jakarta & Greater Suburban Ring, Indonesia',
    summary:
      'The provincial government is rolling out a high-capacity electric Bus Rapid Transit (e-BRT) corridor to eliminate toxic particulate pollution and meet carbon reduction pledges. However, the plan cancels diesel fuel subsidies and bans 12,000 privately-owned "angkot" (informal minibuses), threatening the daily survival of 25,000 informal drivers and fare collectors who cannot afford new electric vehicles.',
    backgroundStory: [
      'Greater Jakarta regularly records PM2.5 particulate pollution levels five to eight times higher than World Health Organization safe thresholds, causing severe childhood asthma and respiratory illness.',
      'The municipal transport authority announced the "Clean Skies 2030" initiative: an exclusive 40-kilometer dedicated electric bus transit corridor, paired with an immediate prohibition on older diesel minibuses.',
      'Informal minibus operators (angkot drivers) stage massive traffic strikes, pointing out that their narrow routes connect low-income alleyways ("kampung") that large municipal electric buses can never physically reach.',
      'Suburban factory workers and low-wage commuters rely on the cheap, flexible Rp 4,000 angkot fares, fearing that modern digital smartcard systems will exclude unbanked citizens.'
    ],
    keyTension:
      'The tension between planetary environmental goals / public health imperatives and economic inclusion for vulnerable informal transport workers.',
    sourceRef: {
      unitNumber: 1,
      section: 'Review pp. 16-21',
      pageRange: '16-21',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stakeholders: [
      {
        id: 'sh-driver',
        name: 'Pak Joko',
        role: 'Informal Minibus Driver & Cooperative Representative',
        organization: 'Federasi Angkot Mandiri Jakarta',
        avatarIcon: 'Truck',
        primaryLens: 'Economic',
        primaryLevel: 'Local',
        quote:
          '"We want clean air too, but we have invested 15 years paying off our diesel vans. If the city bans our vehicles overnight without vehicle buy-backs or driver retraining, 25,000 families will be pushed into extreme poverty."',
        evidenceCited:
          'Over 60% of daily commuter trips from narrow alleyways depend on micro-transit that full-sized 12-meter buses cannot access.',
        corePriority: 'Immediate loss of daily household livelihood and inability to finance Rp 350M electric vans.',
        keyConcern: 'Exclusion of informal workers from formal municipal transit payrolls.',
        hiddenSharedInterest:
          'Needs reliable road networks, passenger volume, and affordable access to modern vehicle financing.',
        explanation:
          'Pak Joko represents the Economic lens at the Local level. His priority is the livelihood survival of informal transport families.'
      },
      {
        id: 'sh-health-minister',
        name: 'Dr. Linda',
        role: 'Director of Environmental Health',
        organization: 'Provincial Department of Public Health',
        avatarIcon: 'Stethoscope',
        primaryLens: 'Social',
        primaryLevel: 'National',
        quote:
          '"Diesel particulate emissions from unmaintained minibuses are responsible for 42% of pediatric asthma hospitalizations along transit corridors. Phasing out diesel exhaust is a non-negotiable human right to health."',
        evidenceCited:
          'Hospital admissions for respiratory illnesses spike by 300% on high-particulate weekdays along central minibus arteries.',
        corePriority: 'Reducing preventable childhood respiratory mortality and long-term lung disability.',
        keyConcern: 'National healthcare costs under BPJS Kesehatan for preventable respiratory treatments.',
        hiddenSharedInterest:
          'Requires orderly, dependable public transit that serves low-income communities safely.',
        explanation:
          'Dr. Linda represents the Social lens at the National level, focusing on epidemiological data and pediatric wellness.'
      },
      {
        id: 'sh-transit-planner',
        name: 'Pak Farhan',
        role: 'Chief Urban Mobility Architect',
        organization: 'Metropolitan Electric Bus Consortium',
        avatarIcon: 'Bus',
        primaryLens: 'Political',
        primaryLevel: 'Global',
        quote:
          '"Our city has signed binding international climate pacts (C40 Cities) to cut urban transport emissions by 50% by 2030. We must build a modern, high-capacity electrified transit corridor to attract international green financing."',
        evidenceCited:
          'International multilateral development banks offer $120M in low-interest green bonds conditional on total bus fleet electrification.',
        corePriority: 'Fulfilling international climate treaty pledges and securing global infrastructure financing.',
        keyConcern: 'Corridor speed, timetable reliability, and automated digital ticketing integration.',
        hiddenSharedInterest:
          'Needs high passenger ridership that depends on functional feeder networks from suburban alleyways.',
        explanation:
          'Pak Farhan represents the Political lens at the Global level, centering on international climate agreements and green capital.'
      },
      {
        id: 'sh-commuter-student',
        name: 'Rina',
        role: 'Suburban University Student & Daily Commuter',
        organization: 'Youth Transit Equity Network',
        avatarIcon: 'GraduationCap',
        primaryLens: 'Social',
        primaryLevel: 'Local',
        quote:
          '"The new electric buses are wonderful, but they only stop at main boulevard stations. To get from my home in the alleyway to the station, I still depend on Pak Joko’s angkot. If the angkot disappears, my travel time doubles and costs rise."',
        evidenceCited:
          'First-mile and last-mile connections account for 45% of total commuting time for suburban transit users.',
        corePriority: 'Affordable, connected first-mile and last-mile transit that reaches inner-neighborhood alleys.',
        keyConcern: 'Digital smartcard barriers for elderly and unbanked neighborhood residents.',
        hiddenSharedInterest:
          'Wants a clean, connected public transit network that is both modern and socially inclusive.',
        explanation:
          'Rina embodies the Social lens at the Local level, focusing on commuter accessibility and equitable mobility.'
      }
    ],

    stages: {
      stage1Comprehension: {
        id: 'c2-s1',
        stageNumber: 1,
        stageName: 'Frame the Core Policy Tension',
        prompt:
          'What fundamental tension between competing global and local priorities does the Trans-Metropolis Clean Air dispute illustrate?',
        guidanceText:
          'Analyze how environmental modernism at the global/national scale interacts with informal labor economics at the local scale.',
        options: [
          {
            id: 'c2-s1-opt-b',
            text: 'A confrontation between suburban student commuters and elderly bus drivers who refuse to learn modern digital navigation applications.',
            isCorrect: false,
            explanation:
              'Incorrect. The tension is systemic and institutional, not an interpersonal generational disagreement about technology.'
          },
          {
            id: 'c2-s1-opt-a',
            text: 'The clash between urgent global/national environmental health goals (eliminating lethal diesel exhaust) and local economic survival for vulnerable informal transport workers.',
            isCorrect: true,
            explanation:
              'Correct! This illustrates a central theme in Global Perspectives: progressive global environmental policies can inflict acute local harm on informal laborers unless thoughtfully integrated.'
          },
          {
            id: 'c2-s1-opt-c',
            text: 'A commercial disagreement between private battery manufacturing corporations and domestic gasoline refining monopolies over government procurement kickbacks.',
            isCorrect: false,
            explanation:
              'Incorrect. This misdiagnoses the fundamental policy dilemma as corporate corruption rather than a profound trade-off between public health and livelihood equity.'
          }
        ]
      },

      stage2StakeholderMatching: {
        instruction:
          'Examine the four primary stakeholders in Trans-Metropolis. Note how their distinct responsibilities shape their priorities.',
        stakeholderIds: ['sh-driver', 'sh-health-minister', 'sh-transit-planner', 'sh-commuter-student']
      },

      stage3LensAndLevel: {
        instruction:
          'Assign each stakeholder their correct primary Analytical Lens (Type) and Scale (Level).',
        items: [
          {
            stakeholderId: 'sh-driver',
            correctLens: 'Economic',
            correctLevel: 'Local',
            lensReasoning:
              'Pak Joko focuses on household wages, informal van equity, and avoiding economic destitution for driver families.',
            levelReasoning:
              'His scope is his local driver cooperative and household livelihood.'
          },
          {
            stakeholderId: 'sh-health-minister',
            correctLens: 'Social',
            correctLevel: 'National',
            lensReasoning:
              'Dr. Linda’s priority is pediatric respiratory health, clean air standards, and national healthcare hospitalization budgets.',
            levelReasoning:
              'Her operational scope is provincial and national public healthcare policy.'
          },
          {
            stakeholderId: 'sh-transit-planner',
            correctLens: 'Political',
            correctLevel: 'Global',
            lensReasoning:
              'Pak Farhan focuses on international climate treaty compliance, multilateral green bonds, and metropolitan decarbonization targets.',
            levelReasoning:
              'His scope is global multilateral covenants and international municipal networks (C40).'
          },
          {
            stakeholderId: 'sh-commuter-student',
            correctLens: 'Social',
            correctLevel: 'Local',
            lensReasoning:
              'Rina argues from passenger equity, transit affordability, and first-mile neighborhood connectivity.',
            levelReasoning:
              'Her scope is the local suburban university student commuter cohort.'
          }
        ]
      },

      stage4ConflictAnalysis: {
        id: 'c2-s4',
        stageNumber: 4,
        stageName: 'Analyze Conflicting Rationales',
        prompt:
          'Why does Dr. Linda (Health Director) reject Pak Joko’s request to simply postpone the diesel phaseout by 10 years without modifications?',
        guidanceText:
          'Consider the cumulative human and economic health consequences of maintaining the status quo.',
        options: [
          {
            id: 'c2-s4-opt-b',
            text: 'Because maintaining unmitigated diesel exhaust for another decade inflicts thousands of preventable pediatric asthma hospitalizations and permanent respiratory damage on children living along transit corridors.',
            isCorrect: true,
            explanation:
              'Correct! From a public health and social justice lens, delaying emission cuts directly condemns vulnerable low-income urban children to severe, irreversible respiratory illness.'
          },
          {
            id: 'c2-s4-opt-a',
            text: 'Because Dr. Linda personally dislikes informal transport drivers and prefers seeing imported luxury electric vehicles operating exclusively through high-income central business corridors.',
            isCorrect: false,
            explanation:
              'Incorrect. Her objection is grounded in epidemiological data and medical ethics, not personal bias.'
          },
          {
            id: 'c2-s4-opt-c',
            text: 'Because international environmental health treaties legally mandate the immediate impoundment of every diesel minibus operating in Southeast Asia after the end of this calendar year.',
            isCorrect: false,
            explanation:
              'Incorrect. International agreements establish emissions targets for signatory nations, but do not impose criminal sanctions on individual workers.'
          }
        ]
      },

      stage5CommonGround: {
        id: 'c2-s5',
        stageNumber: 5,
        stageName: 'Identify the Shared Mobility Dependency',
        prompt:
          'What shared reality connects both the Chief Mobility Architect (Pak Farhan) and the Suburban Student Commuter (Rina)?',
        guidanceText:
          'Why does a high-capacity trunk line fail if commuters cannot reach the stations?',
        options: [
          {
            id: 'c2-s5-opt-b',
            text: 'Both parties agree that passenger fares should be completely eliminated and all urban transit operations funded entirely by international charity donations.',
            isCorrect: false,
            explanation:
              'Incorrect. Neither stakeholder proposes an unviable charity model; sustainable transit requires durable operational financing.'
          },
          {
            id: 'c2-s5-opt-a',
            text: 'Both understand that high-capacity electric bus lines cannot succeed unless an affordable, reliable "feeder" transit network connects suburban neighborhoods to main trunk stations.',
            isCorrect: true,
            explanation:
              'Correct! Without feeder transport (the first-mile/last-mile connection), electric trunk corridors sit half-empty while suburban residents remain stranded.'
          },
          {
            id: 'c2-s5-opt-c',
            text: 'Both believe that private passenger cars and motorcycles should remain the dominant form of urban travel across all Greater Jakarta roadways.',
            isCorrect: false,
            explanation:
              'Incorrect. Both stakeholders advocate for accessible, sustainable public mass transit over private vehicle congestion.'
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
            id: 'c2-dec-3-bridge',
            title: 'Option A: The "Jak-Feeder" Co-Op Transition Model',
            approachType: 'balanced-bridge',
            description:
              'Incorporate existing angkot operators into a municipally guaranteed Cooperative with salaried wages, health coverage, and contracted neighborhood feeder loops that connect directly to electric bus stations.',
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
          },
          {
            id: 'c2-dec-1-ban',
            title: 'Option B: Complete Ban & Fast-Track Corporate Concession',
            approachType: 'unbalanced-commercial',
            description:
              'Enact an immediate municipal prohibition on all informal diesel minivans across the city, transfer transit franchises exclusively to private conglomerates, and deploy municipal enforcement to clear unlicensed roadside vehicles.',
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
            title: 'Option C: Unconditional Subsidy for Existing Minivans',
            approachType: 'unbalanced-freeze',
            description:
              'Cancel all scheduled electric bus transit corridors and disburse indefinite fuel subsidies to informal diesel operators without requiring mechanical inspections, route restructuring, or emission filter upgrades.',
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
            id: 'c2-s7-opt-c',
            text: 'Informal transport workers lack the technical capacity to maintain modern electric batteries and should be permanently restricted to operating non-motorized manual bicycles and traditional neighborhood handcarts.',
            isCorrect: false,
            explanation:
              'Incorrect. This reflects elitist prejudice. Given fair institutional contracts and technical training, informal workers adapt rapidly and professionally.'
          },
          {
            id: 'c2-s7-opt-a',
            text: 'Because drivers receive guaranteed municipal cooperative salaries rather than paying fuel costs, they are insulated from price shocks, enabling the city to deploy the UN grant to electrify the feeder minivan fleet.',
            isCorrect: true,
            explanation:
              'Correct! By converting informal workers into formal cooperative partners, the system built economic resilience against volatile fuel shocks and qualified for international climate equity funding.'
          },
          {
            id: 'c2-s7-opt-b',
            text: 'The battery supply disruption proves that imported diesel combustion engines remain superior for emerging economies, meaning municipal transport planners should permanently terminate the zero-emission electric roadmap.',
            isCorrect: false,
            explanation:
              'Incorrect. Supply chain disruptions require flexible multi-modal transition planning, not a surrender to polluting fossil-fuel dependencies.'
          }
        ]
      }
    }
  }
];
