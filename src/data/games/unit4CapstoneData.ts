/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 4 CAPSTONE CHALLENGE DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono
 */

export interface CapstoneDecisionOption {
  id: string;
  label: string;
  description: string;
  score: number; // Optimal: 160, Partial: 80, Weak: 30
  feedback: string;
  isOptimal: boolean;
  academicReasoning: string;
}

export interface CapstoneStage {
  stageNumber: number;
  stageKey: string;
  title: string;
  concept: string;
  textbookRef: string;
  scenarioHeading: string;
  scenarioBody: string;
  evidenceData?: {
    label: string;
    items: { key: string; value: string; note?: string }[];
  };
  prompt: string;
  options: CapstoneDecisionOption[];
}

export interface CapstoneMissionData {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  caseSetting: string;
  overview: string;
  maxScore: number;
  stages: CapstoneStage[];
}

export const UNIT_4_CAPSTONE_DATA: CapstoneMissionData = {
  "id": "g4-capstone",
  "unitNumber": 4,
  "title": "Evidence Synthesis Challenge",
  "subtitle": "The Sumatra Energy Crossroads: Geothermal vs. Coal Livelihoods",
  "caseSetting": "Muara Enim Regency, South Sumatra Energy Transition Taskforce",
  "overview": "As senior synthesis researchers for the National Energy Transition Council, your team is tasked with synthesizing four disparate, conflicting studies regarding the proposed phaseout of local coal extraction in favor of a 500 MW geothermal plant. You must move beyond simple summarization, map consensus and divergence, construct an analytical synthesis matrix, resolve methodological heterogeneity, and formulate a defensible bridge recommendation.",
  "maxScore": 800,
  "stages": [
    {
      "stageNumber": 1,
      "stageKey": "analysis-vs-synthesis",
      "title": "Stage 1: Establishing the Synthesis Architecture",
      "concept": "Synthesis vs. Serial Summarization (The Forest vs. The Trees)",
      "textbookRef": "Textbook Section 4.1 (pp. 54–57)",
      "scenarioHeading": "Structuring the Multi-Source Review",
      "scenarioBody": "Your team receives four independent reports on the Muara Enim energy transition: Report A (Ministry of Finance regional tax forecasts), Report B (University clinical audit of pediatric asthma near coal boilers), Report C (Qualitative field interviews with 80 local mining families), and Report D (International renewable engineering feasibility study).",
      "prompt": "Which drafting strategy demonstrates authentic academic synthesis rather than serial summarization?",
      "options": [
        {
          "id": "s1-opt-b",
          "label": "Serial Author-by-Author Summaries",
          "description": "Summarize Study A in one paragraph, Study B in the second paragraph, and Study C in the third paragraph sequentially without identifying thematic patterns, cross-study tensions, or common empirical threads, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "This is a bibliography summary, not a synthesis. While each summary may be accurate, it treats each source as an isolated silo and fails to integrate the findings into a cohesive narrative.",
          "academicReasoning": "Serial summarization leaves the cognitive work of integration to the reader, falling short of Cambridge synthesis criteria."
        },
        {
          "id": "s1-opt-c",
          "label": "Single-Source Selective Endorsement",
          "description": "Select Study A exclusively because it supports your personal environmental preference for renewable energy, while discarding Studies B and C as unhelpful distractions that complicate the school campaign.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Severe confirmation bias. Ignoring economic and community evidence in favor of a single favored technical paper is uncritical advocacy, not academic synthesis.",
          "academicReasoning": "Synthesis requires weighing heterogeneous perspectives, not cherry-picking a single viewpoint."
        },
        {
          "id": "s1-opt-a",
          "label": "Thematic Cross-Study Synthesis Structure",
          "description": "Synthesize all three studies under thematic pillars (geological capacity, air pollution reduction, and economic retraining), reconciling technical feasibility with local socioeconomic transition costs.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Outstanding synthesis architecture! Organizing by theme allows you to examine how diverse evidence interacts, revealing the complete \"forest\" rather than cataloging individual \"trees\" in isolation.",
          "academicReasoning": "Textbook Section 4.1 emphasizes that true synthesis weaves multiple sources around core themes, demonstrating how they converse rather than listing sequential author-by-author summaries."
        }
      ]
    },
    {
      "stageNumber": 2,
      "stageKey": "convergence-divergence",
      "title": "Stage 2: Convergence & Divergence Mapping",
      "concept": "Identifying Consensus and Points of Contradiction",
      "textbookRef": "Textbook Section 4.2 (pp. 58–61)",
      "scenarioHeading": "Mapping Cross-Source Agreements and Conflicts",
      "scenarioBody": "Careful examination of the four reports reveals that the evidence does not point in a single unanimous direction. Your team must map where the independent researchers reach empirical consensus, and where their conclusions sharply diverge.",
      "evidenceData": {
        "label": "Cross-Study Evidentiary Matrix",
        "items": [
          {
            "key": "Air Quality & Health",
            "value": "All 4 reports agree that closing coal boilers will eliminate 85% of sulfur dioxide and lower chronic asthma cases by 40%+"
          },
          {
            "key": "Regional Power Supply",
            "value": "Reports A & D agree that geothermal reserves are geologically stable and capable of supplying 500 MW baseload power"
          },
          {
            "key": "Household Incomes",
            "value": "Report A projects net province-wide GDP growth (+3.2%), whereas Report C documents that 2,400 local coal miners lack geothermal technical skills and face immediate family poverty"
          }
        ]
      },
      "prompt": "Which synthesis statement accurately captures both the empirical consensus and the core point of divergence across the evidence?",
      "options": [
        {
          "id": "s2-opt-b",
          "label": "Assert Complete Unanimous Agreement Across All Research Dimensions",
          "description": "Claim that all research teams are in complete harmony and agree on every single policy recommendation, completely glossing over the acute economic tensions regarding coal worker unemployment and poverty.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Factually false. This completely ignores the 2,400 local miners documented in Report C who face unemployment and poverty.",
          "academicReasoning": "Overlooking documented divergences produces superficial, false conclusions that crumble upon peer scrutiny."
        },
        {
          "id": "s2-opt-a",
          "label": "Map Health/Grid Consensus Alongside Divergent Labor Economics",
          "description": "Demonstrate that all reports agree geothermal energy stabilizes grid power and slashes particulate pollution, while isolating local coal worker retraining as the primary contested policy domain.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Exceptional analytical clarity! You accurately separated the shared consensus (health benefits and power feasibility) from the sharp, localized economic divergence (macro GDP vs. micro-level miner livelihoods).",
          "academicReasoning": "Textbook Section 4.2 teaches that rigorous synthesis articulates both areas of robust consensus and nuanced points of tension without flattening either."
        },
        {
          "id": "s2-opt-c",
          "label": "Assert Radical Incommensurability & Irreconcilable Contradiction",
          "description": "Declare that the four studies contradict each other so completely across environmental and labor metrics that no policy synthesis is possible, recommending that the transition study be cancelled entirely.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Excessive defeatism. Disagreement on economic impacts does not invalidate the strong, replicated empirical consensus on medical and geothermal feasibility.",
          "academicReasoning": "Synthesizers must distinguish between domain-specific consensus (e.g. epidemiology) and cross-domain tensions (e.g. labor economics)."
        }
      ]
    },
    {
      "stageNumber": 3,
      "stageKey": "synthesis-matrix",
      "title": "Stage 3: Synthesis Matrix Construction",
      "concept": "Organizing Evidence Across Inquiries to Expose Literature Gaps",
      "textbookRef": "Textbook Section 4.3 (pp. 62–65)",
      "scenarioHeading": "Populating the Matrix Grid",
      "scenarioBody": "Your team designs a synthesis matrix to compare how the four sources address three central inquiry questions: (1) What is the capital investment cost? (2) What is the localized environmental impact? (3) What community transition mechanisms are proposed?",
      "prompt": "Upon populating the synthesis matrix grid, your team discovers that while all four sources offer detailed answers for Questions 1 & 2, NO source provides concrete plans or budget numbers for Question 3 (worker transition mechanisms). What has your synthesis matrix revealed?",
      "options": [
        {
          "id": "s3-opt-a",
          "label": "Identification of a Critical Literature Gap Requiring New Policy Inquiry",
          "description": "Highlight that all three existing reports evaluate national infrastructure while leaving a critical empirical gap regarding local agricultural crop yields near volcanic steam vents.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Masterful research insight! A primary objective of a synthesis matrix is to reveal blank spaces (literature gaps) where existing studies have failed to provide empirical answers.",
          "academicReasoning": "Textbook Section 4.3 highlights that synthesis matrices systematically reveal what is missing in current knowledge, guiding researchers to ask fresh, vital questions."
        },
        {
          "id": "s3-opt-b",
          "label": "Assume Worker Transition Is Unnecessary Because Macro Capital Inflows Will Naturally Absorb Job Losses",
          "description": "Assume that agricultural impact is identical to industrial manufacturing impact and proceed to design geothermal installations without consulting local farming cooperatives or soil scientists, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Partially valid recognition of economic spillover, but an incomplete synthesis. Relying on passive macroeconomic assumptions overlooks vulnerable localized labor disruptions and fails to identify the literature gap as an actionable policy need.",
          "academicReasoning": "Textbook Section 4.3 emphasizes that synthesizing matrices must actively detect policy oversights rather than masking them with passive assumptions."
        },
        {
          "id": "s3-opt-c",
          "label": "Invent Fabricated Transition Numbers to Fill the Empty Box",
          "description": "Invent speculative crop damage statistics without conducting field interviews or soil assays, presenting fabricated yield reductions as factual evidence in the commission policy report.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Severe academic misconduct! Fabricating data to make a research chart look complete violates research integrity.",
          "academicReasoning": "Intellectual honesty requires transparently acknowledging gaps rather than inventing false data."
        }
      ]
    },
    {
      "stageNumber": 4,
      "stageKey": "reconciling-heterogeneity",
      "title": "Stage 4: Reconciling Heterogeneous Methodologies",
      "concept": "Methodological Scope, Geographic Aggregation & Scale Divergence",
      "textbookRef": "Textbook Section 4.2 & 4.3 (pp. 60–63)",
      "scenarioHeading": "The Paradox of the Two Economic Predictions",
      "scenarioBody": "Committee members challenge your team with an apparent contradiction: Report A (Finance Ministry) claims: \"The energy transition will generate an overall +12% increase in regional family incomes.\" Yet Report C (Field Survey) insists: \"78% of local coal mining households predict severe financial distress within 6 months of mine closures.\"",
      "prompt": "How does an expert evidence synthesizer reconcile these two seemingly contradictory findings?",
      "options": [
        {
          "id": "s4-opt-b",
          "label": "Average the Two Percentages (+12% and -78%) to Equal -33%",
          "description": "Calculate a simple arithmetic average of the two diverging figures (+22% and -15%) to report an artificial +3.5% net yield, masking the real geographic differences between highland and lowland farms.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Mathematically and methodologically invalid. Averaging macro-economic modeling indices with micro-survey sentiment percentages creates a meaningless, fictitious number.",
          "academicReasoning": "Heterogeneous metrics derived from fundamentally different methodologies cannot be mechanically averaged."
        },
        {
          "id": "s4-opt-c",
          "label": "Accuse Report C of Being Paid Actors",
          "description": "Accuse Report C of being falsified by anti-geothermal political activists and discard its negative findings entirely, avoiding the intellectual challenge of reconciling divergent scientific data.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Unjustified dismissal of primary field data. Discrediting valid qualitative evidence without cause violates Cambridge critical standards.",
          "academicReasoning": "Academic synthesizers respect empirical qualitative field data alongside quantitative modeling."
        },
        {
          "id": "s4-opt-a",
          "label": "Explain Divergence Through Geographic Scale & Skill Asymmetry",
          "description": "Reconcile the divergence by identifying geographic elevation as the moderating variable: highland farms benefited from volcanic soil minerals, while lowland farms suffered from construction runoff.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Brilliant synthesis! You resolved the paradox by analyzing differences in geographic scale and demographic specificity: macro-provincial gains do not automatically trickle down to localized coal workers without targeted transition support.",
          "academicReasoning": "Textbook Section 4.2 teaches that apparent contradictions often stem from differences in scale (macro vs. micro) and demographic scope, both of which can be empirically truthful simultaneously."
        }
      ]
    },
    {
      "stageNumber": 5,
      "stageKey": "defensible-recommendation",
      "title": "Stage 5: Formulating the Defensible Synthesized Recommendation",
      "concept": "Evidence-Based Bridge Solutions with Concrete Trade-offs",
      "textbookRef": "Textbook Section 4.4 (pp. 66–68)",
      "scenarioHeading": "The Final Policy Presentation to the Taskforce",
      "scenarioBody": "Your team must now deliver the definitive synthesized recommendation to the Joint Ministerial Taskforce. The recommendation must integrate the public health consensus, geothermal technical viability, and the localized socioeconomic vulnerability of the mining communities into an actionable bridge policy.",
      "prompt": "Which policy proposal represents a defensible, evidence-grounded synthesis that directly addresses the trade-offs exposed by your inquiry?",
      "options": [
        {
          "id": "s5-opt-b",
          "label": "Immediate Total Shutdown of All Coal Mines in 24 Hours",
          "description": "Order an immediate shutdown of all regional geothermal drilling operations, returning to diesel fuel generators until every farmer agrees that zero ecological trade-offs exist, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Unbalanced and unviable. While health is critical, an abrupt 24-hour shutdown causes catastrophic localized poverty, civil unrest, and energy blackouts before geothermal plants are built.",
          "academicReasoning": "Extreme unilateral policies that ignore transition feasibility and economic survival fail the test of academic sustainability."
        },
        {
          "id": "s5-opt-a",
          "label": "Phased Geothermal Transition with Dedicated Just-Transition Community Fund",
          "description": "Recommend a phased geothermal expansion paired with soil runoff settling basins, dedicated agricultural compensation funds, and guaranteed cooperative retraining for displaced workers.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Exemplary policy synthesis! Your recommendation honors the decisive epidemiological and energy evidence while actively resolving the localized economic vulnerability through concrete funding and timelines.",
          "academicReasoning": "Textbook Section 4.4 demonstrates that the highest tier of synthesis constructs balanced bridge solutions that harmonize competing stakeholder interests backed by tangible evidence."
        },
        {
          "id": "s5-opt-c",
          "label": "Cancel All Geothermal Energy and Build 10 New Coal Plants",
          "description": "Approve unrestricted commercial geothermal drilling across all farm areas without environmental safeguards, dismissing local agricultural livelihoods as acceptable collateral damage.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Directly contradicts overwhelming public health and climate consensus. Refusing to address severe air pollution and long-term economic shifts is irresponsible governance.",
          "academicReasoning": "Rejecting established scientific consensus to preserve unsustainable practices violates critical reasoning principles."
        }
      ]
    }
  ]
};
