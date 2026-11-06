/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 8 CAPSTONE CHALLENGE DATA
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

export const UNIT_8_CAPSTONE_DATA: CapstoneMissionData = {
  "id": "g8-capstone",
  "unitNumber": 8,
  "title": "Evidence Verification Mission",
  "subtitle": "The Muara Gembong Mangrove Restoration & Fertilizer Controversy",
  "caseSetting": "Muara Gembong Coastal Conservation Council (West Java, Indonesia)",
  "overview": "A viral social media campaign claims that an imported chemical bio-fertilizer, \"Bio-Gro Extreme\", doubles the vertical growth rate of newly planted mangrove saplings in just 14 days. Accompanied by dramatic side-by-side photos and commercial farmer testimonials, the post has convinced a local village restoration committee to purchase 500 liters of the product for their coastal sanctuary. As Lead Scientific Verification Officer, you must audit the evidence dossier, evaluate source credibility via the CRAAP test, use SIFT and lateral reading to trace media claims, design an environmentally ethical verification protocol, and formulate an objective, evidence-based verdict.",
  "maxScore": 800,
  "stages": [
    {
      "stageNumber": 1,
      "stageKey": "rank-the-evidence",
      "title": "Stage 1: Evaluating the Hierarchy of Evidence",
      "concept": "Statistical & Experimental vs. Expert Opinion vs. Anecdotal Testimonials",
      "textbookRef": "Textbook Section 8.1 & 8.2 (pp. 104–109)",
      "scenarioHeading": "Auditing the Coastal Restoration Dossier",
      "scenarioBody": "The village restoration committee has compiled four distinct pieces of information regarding \"Bio-Gro Extreme\" and mangrove seedling development. Committee members disagree over which source offers the strongest evidentiary foundation for deciding whether to apply the chemical across the coastal wetland.",
      "evidenceData": {
        "label": "Evidentiary Dossier on Bio-Gro Extreme",
        "items": [
          {
            "key": "Source A (Viral Video Post)",
            "value": "A TikTok video with 400,000 likes showing high-energy music, lush green foliage, and text: \"Bio-Gro doubles sapling root length in 14 days flat!\"",
            "note": "Promotional social media clip with unverified visual claims."
          },
          {
            "key": "Source B (Commercial Testimonial)",
            "value": "A written quote from a commercial shrimp farmer: \"I poured two bottles into my pond bank and my mangrove trees grew noticeably faster.\"",
            "note": "Anecdotal user testimony without control groups or physical measurements."
          },
          {
            "key": "Source C (IPB University Field Study)",
            "value": "A 3-year peer-reviewed ecological study published in the Indonesian Journal of Coastal Science measuring natural Rhizophora seedling growth rates (1.2–1.8 cm/month) across West Java brackish intertidal mudflats.",
            "note": "Controlled, peer-reviewed empirical baseline measuring authentic biological growth."
          },
          {
            "key": "Source D (High School Backyard Log)",
            "value": "Two students watered 4 potted saplings in their home garden with kitchen fertilizer and noted leaf counts in a diary for two weeks.",
            "note": "Uncontrolled small-scale trial in non-tidal soil, lacking saline conditions."
          }
        ]
      },
      "prompt": "Which source provides the most authoritative empirical baseline for assessing biological mangrove growth rates, and why?",
      "options": [
        {
          "id": "opt-1b",
          "label": "Prioritize Source B (Shrimp Farmer Testimonial) because local farmers possess practical field experience.",
          "description": "Prioritize Source B (Shrimp Farm Marketing Brochure) because it contains glossy photographs and glowing commercial testimonials, despite clear financial bias, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Partially sympathetic to local stakeholder perspective, but scientifically vulnerable. A single farmer's casual impression lacks control groups, precise measurements, and blinded testing. The farmer could easily be observing natural seasonal growth or placebo perception.",
          "academicReasoning": "Anecdotal evidence (Sample size = 1) is vulnerable to human memory bias, environmental coincidence, and lack of controls (Textbook Section 8.2). It cannot prove chemical efficacy."
        },
        {
          "id": "opt-1a",
          "label": "Prioritize Source C (IPB University Field Study) as the highest-tier empirical baseline.",
          "description": "Prioritize Source C (IPB University Peer-Reviewed Journal) because it features rigorous double-blind peer review, disclosed methodology, and independent institutional authority.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Flawless evidentiary analysis! Source C represents peer-reviewed scientific and statistical evidence with established control conditions in real brackish habitats. To determine if a \"14-day miracle\" is biologically possible, scientists must first know the verified baseline growth rate (1.2–1.8 cm/month).",
          "academicReasoning": "In academic evidence hierarchies (Textbook Section 8.2), peer-reviewed experimental and statistical studies in natural habitats drastically outrank unverified social media clips and single-user anecdotes."
        },
        {
          "id": "opt-1c",
          "label": "Prioritize Source A (TikTok Video) because 400,000 likes prove widespread public verification.",
          "description": "Prioritize Source A (TikTok Influencer Video) because it accumulated 500,000 views and viral comments, mistaking popularity for academic credibility and scientific rigor.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Severe digital literacy error! Social media metrics (likes, views, shares) measure viral emotional appeal and algorithm stimulation, not empirical truth. Unverified promotional clips are frequently sponsored marketing fabrications.",
          "academicReasoning": "High digital viewership is completely orthogonal to academic accuracy. Confusing popularity with evidence is a classic appeal to popularity fallacy (Textbook Section 8.1 & 8.4)."
        }
      ]
    },
    {
      "stageNumber": 2,
      "stageKey": "evaluate-the-source",
      "title": "Stage 2: Source Credibility & the CRAAP Test",
      "concept": "Currency, Relevance, Authority, Accuracy & Purpose (Commercial Conflict of Interest)",
      "textbookRef": "Textbook Section 8.3 (pp. 109–113)",
      "scenarioHeading": "Auditing the Manufacturer's Official Technical Dossier",
      "scenarioBody": "The fertilizer company, PT AgroMaritim Bio-Green, provides a glossy 6-page brochure titled \"Official Botanical Field Trial Report\". The document claims a 210% increase in root biomass within 14 days. The village head is impressed by the technical charts and wants to authorize purchase immediately.",
      "evidenceData": {
        "label": "CRAAP Audit of PT AgroMaritim Brochure",
        "items": [
          {
            "key": "Currency",
            "value": "Published 4 months ago (Current calendar year).",
            "note": "Timely and recent release."
          },
          {
            "key": "Authority",
            "value": "Authored by \"Chief Technical Officer, AgroMaritim Marketing Dept\" with no university affiliation or accredited lab credentials.",
            "note": "Author is an internal marketing executive, not an independent marine biologist."
          },
          {
            "key": "Accuracy",
            "value": "Zero cited bibliography, no peer-reviewed journal citations, and graphs lack error bars or sample size N.",
            "note": "Unverifiable assertions without published methodology or statistical replication."
          },
          {
            "key": "Purpose",
            "value": "Back page includes bulk wholesale order forms offering 20% discount for orders over 100 liters.",
            "note": "Direct financial self-interest and commercial sales motivation."
          }
        ]
      },
      "prompt": "Under the CRAAP framework, which primary defects fatally undermine this document’s reliability for scientific decision-making?",
      "options": [
        {
          "id": "opt-2b",
          "label": "Reject the brochure solely because it was published 4 months ago and is already out of date.",
          "description": "Reject the chemical safety report solely because the font and formatting appear outdated, dismissing technical data based on superficial graphic design choices.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Inaccurate application of the Currency criterion. Scientific papers remain valid for years; a document from 4 months ago is very recent. The fatal flaws lie in commercial bias (Purpose) and lack of peer review (Authority/Accuracy).",
          "academicReasoning": "Currency measures whether data has been superseded by newer findings, not arbitrary 30-day freshness. Misdiagnosing Currency overlooks the core commercial distortion (Textbook Section 8.3)."
        },
        {
          "id": "opt-2c",
          "label": "Accept the report as completely authoritative because it features color charts and technical botanical vocabulary.",
          "description": "Accept the corporate report unconditionally because the chemical manufacturer holds an official business trade license and employs certified public relations staff.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Severe critical evaluation failure! Glossy formatting, professional graphic design, and technical buzzwords are standard advertising tools designed to deceive untrained readers (Vertical Reading trap).",
          "academicReasoning": "Evaluating sources based on aesthetic polish rather than methodological rigor is the classic amateur vertical reading mistake (Textbook Section 8.3 & 8.4)."
        },
        {
          "id": "opt-2a",
          "label": "Diagnose fatal failures in Purpose (financial self-interest) and Authority/Accuracy (internal marketing authorship without peer review).",
          "description": "Diagnose fatal CRAAP defects in Purpose and Authority: the document is an unverified promotional brochure authored by a company selling the chemical for profit.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Exemplary CRAAP audit! You recognized that high Currency does not compensate for fatal defects in Purpose and Authority. When an author has a direct commercial conflict of interest and fails to provide peer-reviewed methodology, the document must be classified as promotional advertising rather than objective research.",
          "academicReasoning": "Textbook Section 8.3 emphasizes that commercial conflicts of interest (Purpose) fatally corrupt Accuracy and Authority. Independent verification is the cornerstone of academic credibility."
        }
      ]
    },
    {
      "stageNumber": 3,
      "stageKey": "verify-the-claim",
      "title": "Stage 3: SIFT Protocol & Lateral Media Investigation",
      "concept": "SIFT (Stop, Investigate, Find, Trace) & Reverse Image Verification",
      "textbookRef": "Textbook Section 8.4 (pp. 113–117)",
      "scenarioHeading": "Investigating the Viral Comparison Photograph",
      "scenarioBody": "The viral post features a striking side-by-side photograph: on the left, a scrawny 10cm sapling labeled \"Day 1 without Bio-Gro\"; on the right, a massive, thick-trunked 35cm tree labeled \"Day 14 with Bio-Gro\". The caption reads: \"Documented proof from our West Java test nursery!\" The village committee considers this photograph irrefutable visual proof.",
      "evidenceData": {
        "label": "Digital Forensic Audit of Viral Image",
        "items": [
          {
            "key": "Initial Visual Appearance",
            "value": "Two saplings showing extreme growth disparity with branded Bio-Gro bottles in the frame.",
            "note": "Seems persuasive on surface inspection."
          },
          {
            "key": "Reverse Image Search (Lateral Move 1)",
            "value": "Image match found on a 2018 forestry database from Can Gio Biosphere Reserve, Vietnam.",
            "note": "The photograph was taken 6 years prior in a different country."
          },
          {
            "key": "Original Scientific Caption (Lateral Move 2)",
            "value": "\"6-month comparative growth trial between Avicennia marina (black mangrove) and Rhizophora mucronata (loop-root mangrove).\"",
            "note": "Compares two completely different biological species grown over 180 days, not 14 days!"
          }
        ]
      },
      "prompt": "Applying the SIFT method (Trace claims to original context), how should the analyst expose the photographic deception?",
      "options": [
        {
          "id": "opt-3a",
          "label": "Trace the image to its original 2018 context to prove species and temporal fabrication.",
          "description": "Deploy the SIFT lateral reading method: conduct reverse image searches to trace the photograph to its original 2018 mining spill source in another province.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Masterclass in digital fact-checking! By leaving the original post and reading laterally (SIFT: Trace claims to original context), you proved that the photograph is genuine media manipulated out of context to commit deliberate scientific fraud.",
          "academicReasoning": "The \"T\" in SIFT (Trace media to original context) and lateral reading (Textbook Section 8.4) protect researchers from synthetic and re-contextualized media where real photos are hijacked with fake captions."
        },
        {
          "id": "opt-3b",
          "label": "Accept the photo but claim that Indonesian soil might make the fertilizer work even faster than in Vietnam.",
          "description": "Accept the viral image as recent local evidence but claim that photo filters make it look more dramatic, failing to investigate the true chronological origin, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Grave evidentiary flaw. Once a source is proven to have used fabricated, stolen photographs to deceive the public, its factual claims cannot be excused through speculative wishful thinking.",
          "academicReasoning": "When evidence is demonstrated to be fraudulent, researchers must discard the claim rather than invent speculative excuses to rescue it (Textbook Section 8.1 & 8.4)."
        },
        {
          "id": "opt-3c",
          "label": "Declare that the image must be an AI-generated deepfake because cameras cannot photograph mangroves.",
          "description": "Declare that all digital photographs on the internet are artificial intelligence fakes and discard visual evidence entirely from environmental research papers.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Unscientific misdiagnosis! The photograph is not an AI deepfake; it is an authentic 2018 photograph of real plants re-labeled with fraudulent metadata. Mislabeling re-contextualized photos as \"AI deepfakes\" demonstrates poor analytical precision.",
          "academicReasoning": "Researchers must distinguish between synthetic media (AI generation) and out-of-context misattribution (re-captioned real media) (Textbook Section 8.4)."
        }
      ]
    },
    {
      "stageNumber": 4,
      "stageKey": "plan-ethical-verification",
      "title": "Stage 4: Designing Ethical Field Verification",
      "concept": "Controlled Comparative Testing, Ecological Duty of Care & Institutional Consent",
      "textbookRef": "Textbook Section 8.5 (pp. 117–120)",
      "scenarioHeading": "Responding to the Proposal for Live Sanctuary Testing",
      "scenarioBody": "A local community elder suggests: \"Why don't we just pour 50 liters of Bio-Gro directly into our protected estuary mudflat tomorrow and watch what happens over two weeks? If it works, our coastal buffer grows twice as fast!\" Several youth members warn that the chemical composition is unknown and could leach into local milkfish aquaculture ponds.",
      "evidenceData": {
        "label": "Ecological & Institutional Risk Assessment",
        "items": [
          {
            "key": "Chemical Composition",
            "value": "Proprietary formula with high nitrogen and phosphorus concentrations.",
            "note": "Risk: Excessive nutrient discharge causes eutrophication, algal blooms, and fish kills."
          },
          {
            "key": "Protected Ecosystem Status",
            "value": "Muara Gembong is a designated municipal mangrove sanctuary and artisanal fishery zone.",
            "note": "Legal/Ethical: Unauthorized chemical release violates Indonesian environmental law (UU 32/2009)."
          },
          {
            "key": "Scientific Requirement",
            "value": "Need for controlled isolation, replicated control groups, and water runoff containment.",
            "note": "Valid testing requires comparing treated vs untreated saplings under identical conditions."
          }
        ]
      },
      "prompt": "What is the most rigorous, environmentally ethical verification protocol for testing the fertilizer’s efficacy without endangering the coastal ecosystem?",
      "options": [
        {
          "id": "opt-4b",
          "label": "Test the chemical directly in an open river channel during low tide, assuming river currents will wash away toxins.",
          "description": "Pour the chemical compound directly into the school estuary ecosystem to see whether wild mangrove seedlings wither, risking real environmental destruction.",
          "score": 80,
          "isOptimal": false,
          "feedback": "High environmental risk and poor scientific methodology. Releasing concentrated chemicals into open tidal waterways risks poisoning downstream community fish ponds, and open water currents wash away the fertilizer, preventing controlled measurement.",
          "academicReasoning": "Open-system release violates ecological ethics and fails experimental controls, as tides introduce uncontrolled dilution and environmental contamination (Textbook Section 8.5)."
        },
        {
          "id": "opt-4c",
          "label": "Conduct no empirical testing whatsoever and vote on whether the fertilizer works based on intuition.",
          "description": "Avoid empirical testing altogether and rely on classroom debates to determine whether the chemical is safe, treating scientific facts as subjective matters of opinion.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Antithetical to academic inquiry. Scientific biological questions cannot be resolved through democratic popularity contests or subjective intuition without empirical verification.",
          "academicReasoning": "Science is grounded in empirical observation and verified evidence, never democratic vote or intuitive guessing (Textbook Section 8.1)."
        },
        {
          "id": "opt-4a",
          "label": "Conduct a contained nursery trial with isolated randomized control groups and run-off containment.",
          "description": "Design a controlled laboratory nursery trial comparing mangrove seedlings exposed to measured chemical dilutions against clean water controls over six weeks.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Superb scientific and ethical research protocol! You upheld the ecological duty of care by preventing toxic chemical contamination of open coastal fisheries, established a randomized controlled trial (essential for isolating variables), and extended the testing window to a biologically realistic timeframe (60 days).",
          "academicReasoning": "Textbook Section 8.5 mandates that field inquiry must never cause ecological harm. Valid scientific testing requires controlled comparisons that isolate independent variables while containing potential toxins."
        }
      ]
    },
    {
      "stageNumber": 5,
      "stageKey": "make-defensible-judgment",
      "title": "Stage 5: Synthesizing an Evidence-Based Judgment",
      "concept": "Evidence Classification (Supported, Refuted, Inconclusive) with Epistemic Humility",
      "textbookRef": "Textbook Section 8.1 & 8.5 (pp. 104–106, 117–120)",
      "scenarioHeading": "Delivering the Official Evaluation to the Conservation Board",
      "scenarioBody": "The committee convenes to cast the final vote. The retail price for the batch is Rp 12,500,000 from the community treasury. The board president asks you, as Scientific Verification Officer, for an evidence-grounded final verdict on the claim: \"Bio-Gro Extreme doubles mangrove sapling growth in 14 days without environmental harm.\"",
      "evidenceData": {
        "label": "Comprehensive Evidence Synthesis Matrix",
        "items": [
          {
            "key": "Biological Feasibility",
            "value": "Peer-reviewed baseline growth is 1.2–1.8 cm/month; doubling height in 14 days is biologically impossible for woody mangrove perennials.",
            "note": "Contradicted by established botanical science."
          },
          {
            "key": "Promotional Integrity",
            "value": "Marketing images were proven to be stolen 2018 Vietnamese multi-species trial photographs.",
            "note": "Evidence of deliberate photographic fraud."
          },
          {
            "key": "Source Credibility",
            "value": "Publisher has severe commercial conflict of interest and zero independent peer-reviewed lab certifications.",
            "note": "Fails CRAAP Purpose and Authority criteria."
          },
          {
            "key": "Ecological Risk",
            "value": "High-nitrogen runoff risks toxic eutrophication in surrounding community aquaculture estuaries.",
            "note": "Severe unresolved ecological hazard."
          }
        ]
      },
      "prompt": "What is the most defensible, evidence-grounded verdict to present to the Conservation Board?",
      "options": [
        {
          "id": "opt-5b",
          "label": "Classify the claim as Partially Supported and buy half the requested bottles to test casually.",
          "description": "Classify the claim as Partially Plausible without collecting water samples, relying on informal community rumors to estimate environmental contamination levels, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Unjustified compromise. When a product has been caught using fabricated photos and contradicts basic botany, spending half the community budget on an unproven commercial chemical is fiscally and scientifically irresponsible.",
          "academicReasoning": "Splitting the difference in the presence of proven media fraud is a false compromise fallacy (Textbook Section 8.1)."
        },
        {
          "id": "opt-5a",
          "label": "Classify the claim as Empirically Refuted and Deceptive; halt community procurement immediately.",
          "description": "Classify the claim as Empirically Unsubstantiated: laboratory assays confirmed zero active chemical toxicity, proving the viral post was an alarmist hoax.",
          "score": 160,
          "isOptimal": true,
          "feedback": "A triumph of rigorous evidence synthesis and critical leadership! You integrated all four evidentiary pillars: biological baseline contradiction, digital media fraud, commercial bias, and ecological risk. Your recommendation protects public funds, community livelihoods, and scientific integrity.",
          "academicReasoning": "Textbook Section 8.1 & 8.5 teach that when a claim is contradicted by verified baselines and supported by fraudulent media, researchers must definitively refute the claim and provide constructive, evidence-based alternatives."
        },
        {
          "id": "opt-5c",
          "label": "Classify the claim as 100% Proven and endorse full-scale immediate application across the coastline.",
          "description": "Classify the viral claim as 100% Proven Truth to show solidarity with online activists, ignoring scientific laboratory assays that disproved toxic runoff.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Catastrophic failure of evidence analysis! Ignoring proven photographic fraud, biological impossibility, and ecological toxicity risks severe environmental degradation and total waste of public funds.",
          "academicReasoning": "Endorsing a claim in direct defiance of contradictory empirical evidence violates every standard of academic and scientific ethics (Textbook Section 8.1)."
        }
      ]
    }
  ]
};
