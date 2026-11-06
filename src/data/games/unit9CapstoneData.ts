/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9 CAPSTONE CHALLENGE DATA
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

export const UNIT_9_CAPSTONE_DATA: CapstoneMissionData = {
  "id": "g9-capstone",
  "unitNumber": 9,
  "title": "Claim and Counterargument Arena",
  "subtitle": "The Urban Textile Waste & Fast Fashion Policy Debate",
  "caseSetting": "Bandung Metropolitan Environmental & Economic Council (West Java)",
  "overview": "Bandung produces over 140 metric tons of discarded post-consumer textile waste every day, clogging suburban landfills and microplastic-polluting the Citarum River basin. The municipal government has convened a public stakeholder policy arena to debate emergency regulations on fast fashion imports, clothing recycling mandates, and small tailor subsidies. As Chief Policy Analyst, you must categorize stakeholder claims into fact, value, and policy, expose hidden ideological assumptions, audit selective evidence and echo-chamber biases, construct principled counterarguments, and synthesize a defensible circular economy policy.",
  "maxScore": 800,
  "stages": [
    {
      "stageNumber": 1,
      "stageKey": "classify-the-claim",
      "title": "Stage 1: Dissecting the Tri-Claim Framework",
      "concept": "Claims of Fact vs. Claims of Value vs. Claims of Policy",
      "textbookRef": "Textbook Section 9.1 & 9.2 (pp. 121–126)",
      "scenarioHeading": "Categorizing Municipal Hearing Propositions",
      "scenarioBody": "During the opening presentations, three prominent stakeholders deliver their core arguments. The municipal council secretary must classify each assertion under the Tri-Claim Framework to establish what standards of proof are legally and academically required.",
      "evidenceData": {
        "label": "Verbatim Hearing Claims",
        "items": [
          {
            "key": "Proposition 1 (Waste Agency Audit)",
            "value": "\"Sarimukti Landfill receives an average of 142 metric tons of synthetic polyester clothing waste daily.\"",
            "note": "Asserts measurable empirical reality about waste tonnage."
          },
          {
            "key": "Proposition 2 (Youth Consumer Coalition)",
            "value": "\"Retail chains that promote ultra-fast disposable fashion are morally exploitative and culturally irresponsible.\"",
            "note": "Passes ethical and moral judgment on commercial behavior."
          },
          {
            "key": "Proposition 3 (Environmental Legal Forum)",
            "value": "\"The municipal council must mandate an extended producer responsibility levy on fast fashion clothing brands to finance local textile recycling hubs.\"",
            "note": "Prescribes an enforceable legal course of action using \"must mandate\"."
          }
        ]
      },
      "prompt": "How should the analyst classify Propositions 1, 2, and 3 under the Tri-Claim Framework, and what evidentiary proof does each demand?",
      "options": [
        {
          "id": "opt-1a",
          "label": "Classify 1 as Fact (empirical data), 2 as Value (moral criteria), and 3 as Policy (prescribed civic action).",
          "description": "Classify Proposition 1 as an empirical Fact (verifiable sensor data), Proposition 2 as an informed Opinion (value judgment), and Proposition 3 as a reasoned Argument.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Flawless rhetorical classification! Proposition 1 tells what IS (Fact); Proposition 2 tells what is WRONG/UNJUST (Value); and Proposition 3 tells what MUST BE DONE (Policy). Each category demands completely different criteria of proof.",
          "academicReasoning": "The Tri-Claim Framework (Textbook Section 9.2) establishes that Fact claims require empirical measurements, Value claims demand philosophical/ethical criteria, and Policy claims require demonstrated feasibility and causal effectiveness."
        },
        {
          "id": "opt-1b",
          "label": "Classify all three statements as Claims of Fact because textile waste is a physical material.",
          "description": "Classify all three statements as subjective personal opinions, claiming that numbers and scientific measurements are simply opinions expressed with digits, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Oversimplified and rhetorically inaccurate. While the physical context involves matter, calling a business \"morally exploitative\" (Value) or demanding a \"mandatory tax\" (Policy) are normative and prescriptive statements, not empirical factual measurements.",
          "academicReasoning": "Confusing normative Value judgments and legislative Policy mandates with empirical Facts is a fundamental error in argumentation analysis (Textbook Section 9.2)."
        },
        {
          "id": "opt-1c",
          "label": "Classify Proposition 3 as a Claim of Fact because municipal laws already exist on paper.",
          "description": "Classify Proposition 3 as a pure objective fact, failing to recognize that policy proposals involve subjective value choices regarding budget priorities.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Incorrect interpretation. Proposition 3 uses the prescriptive modal verb \"must mandate\" to propose a brand-new tax and recycling requirement that has not yet been enacted. It is a quintessential Claim of Policy.",
          "academicReasoning": "Prescriptive modal verbs (\"must\", \"should\", \"ought to\") identify Claims of Policy proposing future action, not descriptions of existing facts (Textbook Section 9.2)."
        }
      ]
    },
    {
      "stageNumber": 2,
      "stageKey": "uncover-the-assumption",
      "title": "Stage 2: Unmasking Hidden Ideological Assumptions",
      "concept": "Unstated Warrants, Presuppositions & Stakeholder Worldviews",
      "textbookRef": "Textbook Section 9.3 (pp. 126–129)",
      "scenarioHeading": "Auditing the Commercial Retail Association's Argument",
      "scenarioBody": "A spokesperson for the Fast Fashion Retail Association argues: \"If the city council imposes recycling fees or restricts budget clothing imports, low-income students and working-class families will be unable to afford clothing and will suffer severe social exclusion. Therefore, any regulation of cheap imported clothing is an attack on the poor.\"",
      "evidenceData": {
        "label": "Dissecting the Retailer's Argument Structure",
        "items": [
          {
            "key": "Stated Premise",
            "value": "Regulations will increase the price of newly imported synthetic budget garments.",
            "note": "Explicit economic consequence."
          },
          {
            "key": "Stated Conclusion",
            "value": "\"Therefore, any regulation of cheap imported clothing is an attack on the poor.\"",
            "note": "Bold moral assertion equating regulation with class injustice."
          },
          {
            "key": "Unstated Underlying Assumption",
            "value": "Working-class families depend exclusively on disposable fast-fashion imports and have zero access to durable domestic garments, thrift markets, or local repair.",
            "note": "The hidden bridge connecting the premise to the conclusion."
          }
        ]
      },
      "prompt": "What critical unstated assumption is essential for the retailer's argument to hold, and why is this assumption flawed?",
      "options": [
        {
          "id": "opt-2b",
          "label": "Assume the retailer is right because cheap clothes are always better than expensive clothes.",
          "description": "Assume the shopping mall director is completely correct because commercial retail executives understand consumer psychology better than school students.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Superficial economic reasoning. Lowest purchase price ignores downstream municipal cleanup costs, environmental water pollution, microplastics in fish, and rapid clothing degradation that forces poor families to rebuy garments repeatedly.",
          "academicReasoning": "Focusing exclusively on sticker price ignores negative externalities and total lifecycle costs, falling victim to short-term thinking (Textbook Section 9.3)."
        },
        {
          "id": "opt-2a",
          "label": "Expose the unstated assumption that low-income citizens depend entirely on disposable new fast-fashion imports.",
          "description": "Expose the unstated assumption: the retail manager assumes that consumers are motivated solely by short-term financial penalties rather than ecological values.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Brilliant assumption unmasking! The retailer's entire argument collapses without the hidden presupposition that cheap disposable imports are the ONLY way poor families can dress themselves. In reality, informal Indonesian reuse, garment repair (penjahit keliling), and local markets provide affordable, sustainable clothing.",
          "academicReasoning": "Textbook Section 9.3 highlights that unstated assumptions (warrants) often smuggle false dependencies into debates. Uncovering these assumptions prevents manipulative corporate rhetoric from posing as social justice."
        },
        {
          "id": "opt-2c",
          "label": "Declare that low-income families do not care about clothing and only care about food.",
          "description": "Declare that economic incentives never influence consumer habits, asserting that citizens only change behavior when forced by strict criminal legislation.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Factually false, disrespectful, and unscholarly. Clothing is a fundamental human necessity and a marker of personal dignity across all socioeconomic strata.",
          "academicReasoning": "Dismissing legitimate stakeholder needs with sweeping derogatory stereotypes violates academic empathy and objective analysis (Textbook Section 9.1 & 9.3)."
        }
      ]
    },
    {
      "stageNumber": 3,
      "stageKey": "test-evidence-perspective",
      "title": "Stage 3: Auditing Echo Chambers & Selective Evidence",
      "concept": "Sampling Bias, Echo Chambers & Missing Stakeholder Voices",
      "textbookRef": "Textbook Section 9.4 (pp. 129–131)",
      "scenarioHeading": "Auditing the University Eco-Club Survey",
      "scenarioBody": "An environmental student club presents an online survey of 35 members of their own campus eco-coalition. Their report asserts: \"100% of youth demand an immediate ban on all synthetic clothing, and 95% stated they are willing to pay triple the price for certified organic linen shirts. Therefore, the entire youth population strongly supports high-cost sustainable garments.\"",
      "evidenceData": {
        "label": "Eco-Club Survey Sample Demographics",
        "items": [
          {
            "key": "Sample Composition",
            "value": "35 university students who are active paying members of the Environmental Action Club.",
            "note": "Homogeneous group with pre-existing ideological environmental commitment."
          },
          {
            "key": "Socioeconomic Profile",
            "value": "88% receive high monthly parental allowances from high-income urban families.",
            "note": "High disposable income unrepresentative of typical vocational students or factory workers."
          },
          {
            "key": "Missing Voices",
            "value": "Vocational SMK students, informal waste pickers (pemulung), and local market traders were 0% surveyed.",
            "note": "Complete exclusion of key socioeconomic stakeholders."
          }
        ]
      },
      "prompt": "How should the policy analyst evaluate the validity of this survey evidence for municipal policy formulation?",
      "options": [
        {
          "id": "opt-3c",
          "label": "Reject the survey solely because 35 is an odd number and surveys must always have even numbers.",
          "description": "Discard the survey solely because the student researchers used an online questionnaire, claiming that electronic data collection is inherently untrustworthy, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Absurd and scientifically meaningless assertion. The parity of a sample size (odd vs. even) has zero bearing on statistical validity; the defect is severe demographic and ideological sampling bias.",
          "academicReasoning": "Statistical validity depends on representativeness, randomness, and adequate statistical power, never whether a number is odd or even (Textbook Section 9.4)."
        },
        {
          "id": "opt-3b",
          "label": "Accept the survey because environmental protection is important and students are the future.",
          "description": "Accept the survey as representative of all city residents because 500 respondents participated, ignoring how collecting responses at an eco-store biased the sample.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Confuses noble intentions with methodological validity. Agreeing with an environmental cause does not excuse flawed, biased sampling methods. Policy based on skewed data will fail when imposed on the general public.",
          "academicReasoning": "Academic inquiry requires evaluating methodological rigor objectively, regardless of whether one agrees with the advocacy position (Textbook Section 9.4)."
        },
        {
          "id": "opt-3a",
          "label": "Expose the severe sampling bias and echo-chamber distortion; the findings cannot be generalized to all youth.",
          "description": "Identify severe Sampling Selection Bias: surveying patrons exclusively inside an organic eco-store overrepresents affluent, environmentally motivated citizens.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Outstanding critique of selective evidence! When researchers survey only self-selected activists from privileged backgrounds, the resulting 100% consensus is an artifact of an ideological echo chamber, not genuine public opinion.",
          "academicReasoning": "Textbook Section 9.4 warns against the Echo Chamber trap and sampling bias. Generalizing from an unrepresentative ideological cohort to an entire municipal population invalidates external generalizability."
        }
      ]
    },
    {
      "stageNumber": 4,
      "stageKey": "build-fair-counterargument",
      "title": "Stage 4: Crafting a Balanced Toulmin Rebuttal",
      "concept": "Principled Counterarguments, Protecting UMKM & Avoiding Caricatures",
      "textbookRef": "Textbook Section 9.5 (pp. 131–134)",
      "scenarioHeading": "Addressing the Local Tailor & Small Business Crisis",
      "scenarioBody": "Pak Hendra, representing the Association of Small Garment Workshops (UMKM Penjahit Tradisional), speaks with deep emotion: \"Any blanket municipal tax or mandatory recycling audit fee will bankrupt our small family workshops! We earn tiny margins sewing school uniforms and repairing kebaya. Large multinational fashion chains create 90% of the disposable waste, but your flat municipal fees will crush local Indonesian small artisans and force hundreds of family tailors into poverty!\"",
      "evidenceData": {
        "label": "Pak Hendra's Core Arguments & Economic Realities",
        "items": [
          {
            "key": "Economic Reality",
            "value": "Small tailors (UMKM) have 1–3 employees and operate on net profit margins below 8%.",
            "note": "Genuinely vulnerable to uniform flat administrative fees."
          },
          {
            "key": "Ecological Contribution",
            "value": "Local tailors perform clothing repair and alterations, extending garment lifespans by years.",
            "note": "Small tailors are already active agents of the circular economy, not waste polluters!"
          },
          {
            "key": "Source of Waste",
            "value": "Massive shopping malls importing thousands of unrecyclable ultra-cheap synthetic garments.",
            "note": "Major corporate importers are the true drivers of disposable volume."
          }
        ]
      },
      "prompt": "Which response represents the strongest, most nuanced counterargument and policy rebuttal that addresses Pak Hendra’s legitimate concerns?",
      "options": [
        {
          "id": "opt-4b",
          "label": "Tell Pak Hendra that everyone must make equal sacrifices for Mother Earth, including poor tailors.",
          "description": "Tell the traditional market vendor that modern supermarkets are the future of retail and small traditional stalls must adapt or face economic extinction.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Dogmatic and economically blind. Imposing equal flat levies on micro-artisans and billionaire corporations ignores economic proportionality and penalizes the very people who repair and upcycle clothing.",
          "academicReasoning": "Equating flat equality with genuine equity ignores systemic disparities and violates fair policy negotiation (Textbook Section 9.5)."
        },
        {
          "id": "opt-4a",
          "label": "Concede the threat to small tailors and restructure the policy to exempt UMKM while levying corporate importers.",
          "description": "Acknowledge the vendor economic hardship while reframing the issue: proposing municipal subsidies for washable cloth bags to protect stall profit margins.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Masterful synthesis and principled rebuttal! Instead of dismissing Pak Hendra's concerns or treating business as an enemy, you validated his economic reality and integrated local repair tailors as subsidized partners in the circular economy, focusing regulatory pressure where the actual waste originates.",
          "academicReasoning": "Textbook Section 9.5 emphasizes that the highest level of argumentation involves finding common ground, acknowledging legitimate stakeholder vulnerability, and refining policies through targeted qualifiers and tiering."
        },
        {
          "id": "opt-4c",
          "label": "Accuse Pak Hendra of being paid by secret foreign oil lobbies to sabotage environmental laws.",
          "description": "Accuse the traditional market merchant of being paid by plastic manufacturing lobbies, escalating personal tension rather than addressing livelihood costs.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Disgraceful Ad Hominem attack! Inventing unproven conspiracy theories to smear a respected community tailor’s character violates every standard of academic debate.",
          "academicReasoning": "Attacking personal character with unsubstantiated smears destroys debate integrity and commits an egregious Ad Hominem fallacy (Textbook Section 9.5)."
        }
      ]
    },
    {
      "stageNumber": 5,
      "stageKey": "negotiate-defensible-policy",
      "title": "Stage 5: Synthesizing a Qualified Circular Textile Policy",
      "concept": "Trade-Off Management, Multi-Stakeholder Balancing & Academic Hedging",
      "textbookRef": "Textbook Section 9.5 (pp. 131–134)",
      "scenarioHeading": "Drafting the Bandung Circular Textile Ordinance",
      "scenarioBody": "The hearing concludes. The municipal committee must vote on the final draft of the \"Bandung Sustainable Textile Management Ordinance\". The policy must address 140 tons of daily waste while safeguarding low-income consumer affordability, protecting local tailor livelihoods, and providing feasible enforcement mechanisms.",
      "evidenceData": {
        "label": "Policy Matrix: Core Pillars & Trade-Offs",
        "items": [
          {
            "key": "Corporate Accountability",
            "value": "Mandatory collection kiosks in large retail malls funded by corporate retail levies.",
            "note": "Targets the primary source of high-volume synthetic waste."
          },
          {
            "key": "Local Economic Integration",
            "value": "Subsidies and training for local tailors (UMKM) to convert discarded fabrics into upcycled goods.",
            "note": "Transforms waste into employment and circular economic value."
          },
          {
            "key": "Consumer Affordability",
            "value": "No sales tax on certified second-hand clothing (thrifting) and free garment repair workshops.",
            "note": "Protects working-class access to affordable, dignified clothing."
          },
          {
            "key": "Enforcement Phasing",
            "value": "6-month public education trial before financial penalties take effect.",
            "note": "Pragmatic transition period to allow supply chain adaptation."
          }
        ]
      },
      "prompt": "Which comprehensive policy resolution represents the most balanced, defensible, and appropriately qualified approach?",
      "options": [
        {
          "id": "opt-5a",
          "label": "Enact the Phased Circular Textile Ordinance balancing corporate accountability, UMKM repair subsidies, and consumer equity.",
          "description": "Adopt a Phased Circular Economy Model: pairing plastic bag bans with bulk-purchased subsidized cloth alternatives and local vendor tax credits.",
          "score": 160,
          "isOptimal": true,
          "feedback": "A triumph of balanced, defensible policy synthesis! You harmonized competing claims: environmental waste reduction is achieved without burdening poor consumers or crushing local tailors. Corporate polluters fund the infrastructure, while micro-artisans gain dignified green employment.",
          "academicReasoning": "Section 9.5 teaches that the apex of argumentation is not winning an ideological dogfight, but constructing qualified, equitable policy architectures that address root causes while respecting socioeconomic trade-offs."
        },
        {
          "id": "opt-5c",
          "label": "Do nothing and rely entirely on voluntary individual morality to solve textile waste.",
          "description": "Abolish all municipal plastic regulations immediately, allowing unmitigated single-use plastic waste to flood urban drainage waterways and coastal beaches, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Total abdication of municipal policy duty. Voluntary moral appeals have failed for decades against multi-billion dollar fast-fashion marketing machines. 140 tons of daily waste will continue choking the Citarum basin without structural municipal regulation.",
          "academicReasoning": "Relying solely on individual morality to resolve systemic commercial externalities is an evasion of structural policy reasoning (Textbook Section 9.5)."
        },
        {
          "id": "opt-5b",
          "label": "Pass an emergency total ban on the sale of all imported synthetic clothing starting tomorrow morning.",
          "description": "Enact an immediate zero-tolerance ban with heavy police fines on small vendors, ignoring supply disruptions and pushing vulnerable stall owners into debt.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Extreme, unworkable, and socially destructive. An overnight ban on synthetic clothing would cause immediate retail panic, black market smuggling, and price spikes that punish low-income consumers, with zero recycling infrastructure ready to absorb the shock.",
          "academicReasoning": "Radical unhedged policy bans without transitional infrastructure or stakeholder adaptation fail both feasibility and ethical tests (Textbook Section 9.5)."
        }
      ]
    }
  ]
};
