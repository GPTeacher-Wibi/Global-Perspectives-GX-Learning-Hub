import fs from 'fs';
import path from 'path';

// ============================================================================
// REMEDIATE UNIT 1 CAPSTONE (src/data/games/unit1Game.ts)
// ============================================================================
const u1Path = path.resolve('src/data/games/unit1Game.ts');
let u1 = fs.readFileSync(u1Path, 'utf-8');

// --- CASE 1 ---
// Stage 1
u1 = u1.replace(
  /stage1Comprehension:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `stage1Comprehension: {
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
      },`
);

// Stage 4
u1 = u1.replace(
  /stage4ConflictAnalysis:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `stage4ConflictAnalysis: {
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
      },`
);

// Stage 5
u1 = u1.replace(
  /stage5CommonGround:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `stage5CommonGround: {
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
            text: 'Both parties agree that maritime trade should be fully suspended and the coastal zone converted into an exclusive foreign luxury eco-tourism resort with private beach concessions.',
            isCorrect: false,
            explanation:
              'Incorrect. Neither stakeholder wants this, and it would exacerbate both ecological and social crises.'
          },
          {
            id: 'c1-s5-opt-c',
            text: 'There is zero underlying common ground because commercial port infrastructure and artisanal fishing ecosystems are entirely mutually exclusive in all operational respects.',
            isCorrect: false,
            explanation:
              'Incorrect. This reflects Misconception 6 (Zero-Sum Polarization). Real-world stakeholders almost always share foundational dependencies.'
          }
        ]
      },`
);

// Stage 6 (Policy Decision)
u1 = u1.replace(
  /stage6PolicyDecision:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `stage6PolicyDecision: {
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
      },`
);

// Stage 7
u1 = u1.replace(
  /stage7TwistAndSynthesis:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\}\s*\}\s*\},[\s\S]*?\/\/\s*-+\s*\/\/\s*CASE 2:/m,
  `stage7TwistAndSynthesis: {
        twistTitle: 'The 50-Year Monsoon Storm & International Green Audit',
        twistDescription:
          'Three years after implementing your chosen policy, two major events occur simultaneously: \\n1. A powerful tropical storm system strikes the coast with 4.5-meter waves.\\n2. A coalition of major international shipping lines announces that they will only dock at ports holding certified Green Maritime Environmental Standards.',
        synthesisPrompt:
          'How does the Integrated Bridge Solution demonstrate resilience and foresight when confronted by these unexpected events?',
        options: [
          {
            id: 'c1-s7-opt-b',
            text: 'The severe storm proves that all human coastal development is doomed to fail, indicating that municipal planners should abandon the harbor site entirely.',
            isCorrect: false,
            explanation:
              'Incorrect. Sustainable engineering and multi-lens planning allow communities to thrive alongside natural ecosystems.'
          },
          {
            id: 'c1-s7-opt-c',
            text: 'International green shipping regulations are non-binding publicity guidelines that maritime shipping consortia will ignore during major trade bottlenecks.',
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
  // CASE 2:`
);

// --- CASE 2 ---
// Case 2 Stage 1
u1 = u1.replace(
  /id:\s*'case-trans-metropolis'[\s\S]*?stage1Comprehension:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `id: 'case-trans-metropolis',
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
        perspectiveLens: 'Economic',
        perspectiveScale: 'Local',
        coreClaim:
          '"We want clean air too, but we have invested 15 years paying off our diesel vans. If the city bans our vehicles overnight without vehicle buy-backs or driver retraining, 25,000 families will be pushed into extreme poverty."',
        evidenceCited:
          'Over 60% of daily commuter trips from narrow alleyways depend on micro-transit that full-sized 12-meter buses cannot access.',
        primaryConcern: 'Immediate loss of daily household livelihood and inability to finance Rp 350M electric vans.',
        secondaryConcern: 'Exclusion of informal workers from formal municipal transit payrolls.'
      },
      {
        id: 'sh-health-minister',
        name: 'Dr. Linda',
        role: 'Director of Environmental Health',
        organization: 'Provincial Department of Public Health',
        perspectiveLens: 'Social',
        perspectiveScale: 'National',
        coreClaim:
          '"Diesel particulate emissions from unmaintained minibuses are responsible for 42% of pediatric asthma hospitalizations along transit corridors. Phasing out diesel exhaust is a non-negotiable human right to health."',
        evidenceCited:
          'Hospital admissions for respiratory illnesses spike by 300% on high-particulate weekdays along central minibus arteries.',
        primaryConcern: 'Reducing preventable childhood respiratory mortality and long-term lung disability.',
        secondaryConcern: 'National healthcare costs under BPJS Kesehatan for preventable respiratory treatments.'
      },
      {
        id: 'sh-transit-planner',
        name: 'Pak Farhan',
        role: 'Chief Urban Mobility Architect',
        organization: 'Metropolitan Electric Bus Consortium',
        perspectiveLens: 'Political',
        perspectiveScale: 'Global',
        coreClaim:
          '"Our city has signed binding international climate pacts (C40 Cities) to cut urban transport emissions by 50% by 2030. We must build a modern, high-capacity electrified transit corridor to attract international green financing."',
        evidenceCited:
          'International multilateral development banks offer $120M in low-interest green bonds conditional on total bus fleet electrification.',
        primaryConcern: 'Fulfilling international climate treaty pledges and securing global infrastructure financing.',
        secondaryConcern: 'Corridor speed, timetable reliability, and automated digital ticketing integration.'
      },
      {
        id: 'sh-commuter-student',
        name: 'Rina',
        role: 'Suburban University Student & Daily Commuter',
        organization: 'Youth Transit Equity Network',
        perspectiveLens: 'Social',
        perspectiveScale: 'Local',
        coreClaim:
          '"The new electric buses are wonderful, but they only stop at main boulevard stations. To get from my home in the alleyway to the station, I still depend on Pak Joko’s angkot. If the angkot disappears, my travel time doubles and costs rise."',
        evidenceCited:
          'First-mile and last-mile connections account for 45% of total commuting time for suburban transit users.',
        primaryConcern: 'Affordable, connected first-mile and last-mile transit that reaches inner-neighborhood alleys.',
        secondaryConcern: 'Digital smartcard barriers for elderly and unbanked neighborhood residents.'
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
      },`
);

// Case 2 Stage 4
u1 = u1.replace(
  /id:\s*'c2-s4'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `id: 'c2-s4',
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
            text: 'Because Dr. Linda personally dislikes minibus drivers and prefers seeing high-tech foreign electric buses driving through the city center.',
            isCorrect: false,
            explanation:
              'Incorrect. Her objection is grounded in epidemiological data and medical ethics, not personal bias.'
          },
          {
            id: 'c2-s4-opt-c',
            text: 'Because international climate treaties legally mandate the immediate arrest of any diesel driver who operates in Southeast Asia after 2025.',
            isCorrect: false,
            explanation:
              'Incorrect. International agreements establish emissions targets for signatory nations, but do not impose criminal sanctions on individual workers.'
          }
        ]
      },`
);

// Case 2 Stage 5
u1 = u1.replace(
  /id:\s*'c2-s5'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  `id: 'c2-s5',
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
      },`
);

// Case 2 Stage 6
u1 = u1.replace(
  /id:\s*'case-trans-metropolis'[\s\S]*?stage6PolicyDecision:\s*\{[\s\S]*?options:\s*\[([\s\S]*?)\]\s*\},/m,
  (match) => {
    return match.replace(
      /options:\s*\[([\s\S]*?)\]\s*\},/m,
      `options: [
          {
            id: 'dec-c2-draconian',
            title: 'Option A: Technocratic Blitz & Total Minibus Ban',
            approachType: 'unbalanced-commercial',
            description:
              'Enact an immediate prohibition on all diesel minibuses across Greater Jakarta. Deploy police checkpoints to impound non-compliant vehicles, invest the entire transit capital budget into 500 premium imported electric buses, and implement an exclusively digital smartphone fare payment system for the central corridor.',
            shortTermConsequence:
              'Central corridor particulate emissions plunge by 60% within weeks; international green bond rating upgrades; but 25,000 displaced drivers launch citywide paralyzing transit blockades.',
            longTermConsequence:
              'Unbanked lower-income citizens and elderly suburban residents are cut off from public transit; unlicensed clandestine motorcycle taxis proliferate, causing road accident fatalities to double.',
            stakeholderImpact: {
              economicScore: 40,
              socialScore: 25,
              environmentalScore: 90,
              culturalScore: 20
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy is a technocratic failure. By treating public health as an engineering problem devoid of social equity, it creates catastrophic economic disenfranchisement and community backlash.'
          },
          {
            id: 'dec-c2-bridge',
            title: 'Option B: The "Jak-Trans Feeder Accord" (Just Transition Co-op)',
            approachType: 'balanced-bridge',
            description:
              'Integrate informal minibus operators into the formal transit authority as contracted feeder routes. Provide government-backed low-interest leases for compact electric micro-buses, enroll drivers as salaried municipal transit employees with health benefits, and establish an integrated multi-tier fare tariff.',
            shortTermConsequence:
              'Minibus unions formally ratify the agreement; driver strikes cease immediately; electric bus rollout proceeds with strong community support and verified neighborhood feeder connectivity.',
            longTermConsequence:
              'Overall corridor emissions drop by 75%; former informal drivers achieve middle-class income stability; first-mile transit connectivity reaches 92% of informal settlements; model praised at COP climate summit.',
            stakeholderImpact: {
              economicScore: 88,
              socialScore: 92,
              environmentalScore: 85,
              culturalScore: 86
            },
            isOptimalBridge: true,
            debriefFeedback:
              'Masterful Bridge Solution! This policy achieves a "Just Transition": advancing critical environmental decarbonization while lifting thousands of informal workers into formal dignity, security, and healthcare.'
          },
          {
            id: 'dec-c2-surrender',
            title: 'Option C: Indefinite Diesel Exemption & Status Quo Preservation',
            approachType: 'unbalanced-freeze',
            description:
              'Yield completely to minibus union demands by canceling the electric bus corridor project. Disburse unlimited diesel fuel subsidies to aging informal minibus fleets without setting maintenance standards, and abandon municipal commitments to the international C40 Clean Cities climate covenant.',
            shortTermConsequence:
              'Minibus driver protests end; short-term urban transport operations continue without disruption; informal operators celebrate complete victory.',
            longTermConsequence:
              'Jakarta particulate pollution worsens; hospitalizations for childhood asthma increase by 35%; international green development banks revoke $120M in municipal climate financing.',
            stakeholderImpact: {
              economicScore: 50,
              socialScore: 45,
              environmentalScore: 15,
              culturalScore: 60
            },
            isOptimalBridge: false,
            debriefFeedback:
              'This policy abdicates leadership. Freezing the status quo preserves informal livelihoods in the short run, but leaves millions of citizens vulnerable to toxic pollution and forfeits essential modernization funding.'
          }
        ]
      },`
    );
  }
);

// Case 2 Stage 7
u1 = u1.replace(
  /id:\s*'c2-s7-opt-b'[\s\S]*?id:\s*'c2-s7-opt-c'[\s\S]*?id:\s*'c2-s7-opt-a'[\s\S]*?explanation:[\s\S]*?'Correct![\s\S]*?'/m,
  `id: 'c2-s7-opt-c',
            text: 'Informal transport workers lack the cognitive capacity to operate electric technology and should be restricted to manual bicycles.',
            isCorrect: false,
            explanation:
              'Incorrect. This reflects elitist prejudice. Given fair institutional contracts and technical training, informal workers adapt rapidly and professionally.'
          },
          {
            id: 'c2-s7-opt-a',
            text: 'The Just Transition Accord guarantees feeder connectivity that keeps passengers flowing to electric buses, while formal employment contracts and healthcare benefits ensure driver loyalty and network stability.',
            isCorrect: true,
            explanation:
              'Correct! When informal workers are treated as respected partners rather than obsolete obstacles, they provide the resilient neighborhood feeder network that makes multi-million-dollar green infrastructure commercially and socially viable.'
          },
          {
            id: 'c2-s7-opt-b',
            text: 'The battery shortage proves that diesel engines are naturally superior for developing nations and environmental reform should be abandoned.',
            isCorrect: false,
            explanation:
              'Incorrect. Supply chain disruptions require flexible multi-modal transition planning, not a surrender to polluting fossil-fuel dependencies.'
          }`
);

fs.writeFileSync(u1Path, u1, 'utf-8');
console.log('Unit 1 Capstone successfully remediated.');
