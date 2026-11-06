/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3 CAPSTONE CHALLENGE DATA
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

export const UNIT_3_CAPSTONE_DATA: CapstoneMissionData = {
  "id": "g3-capstone",
  "unitNumber": 3,
  "title": "Data Analysis Mission",
  "subtitle": "The Jakarta Clean Air & Transit Corridor Audit",
  "caseSetting": "Jakarta Metropolitan Transportation & Environmental Agency (Dishub & DLH)",
  "overview": "As student data analysts for the provincial environmental council, you must audit transit usage and air quality datasets. Your mission is to triage raw data, resolve extreme statistical outliers, match findings to optimal visual formats, expose a false causal claim in the media, and formulate an ethical, privacy-compliant data release protocol.",
  "maxScore": 800,
  "stages": [
    {
      "stageNumber": 1,
      "stageKey": "data-classification",
      "title": "Stage 1: Raw Data Triage & Method Selection",
      "concept": "Quantitative vs. Qualitative & Primary vs. Secondary Inquiry",
      "textbookRef": "Textbook Section 3.1 (pp. 39–40)",
      "scenarioHeading": "Sorting the Raw Field Dossier",
      "scenarioBody": "The municipal agency provides your team with six distinct data folders collected over the past six months across the Sudirman–Thamrin transit corridor. Before computing any statistics, you must determine how to classify this evidence and choose an appropriate analytical workflow.",
      "evidenceData": {
        "label": "Agency Data Inventory",
        "items": [
          {
            "key": "Folder A",
            "value": "120,000 automated electric bus smartcard tap-ins with hourly timestamps",
            "note": "Numeric count"
          },
          {
            "key": "Folder B",
            "value": "Transcripts of 45 in-depth commuter interviews regarding safety and air comfort",
            "note": "Verbal narratives"
          },
          {
            "key": "Folder C",
            "value": "Published 2023 Central Bureau of Statistics (BPS) provincial census figures",
            "note": "Pre-existing institutional report"
          },
          {
            "key": "Folder D",
            "value": "Daily PM2.5 particulate sensor logs calibrated and recorded by your student team",
            "note": "Student-measured continuous numbers"
          }
        ]
      },
      "prompt": "Which analysis strategy correctly classifies these datasets and applies the proper analytical method for each?",
      "options": [
        {
          "id": "s1-opt-a",
          "label": "Comprehensive Mixed-Methods Analytical Workflow",
          "description": "Classify Folders A & D as quantitative datasets analyzed via descriptive statistics, Folder B as primary qualitative narratives requiring thematic coding, and Folder C as secondary benchmark census data for contextual comparison.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Well reasoned! You correctly differentiate quantitative metrics (Folders A & D) requiring statistical analysis from qualitative narratives (Folder B) requiring thematic coding, while utilizing Folder C as a secondary comparative baseline.",
          "academicReasoning": "Rigorous research treats numerical and narrative data with distinct, appropriate methodologies rather than forcing qualitative narratives into superficial number conversions."
        },
        {
          "id": "s1-opt-b",
          "label": "Quantitative Reductionist Strategy",
          "description": "Convert all qualitative commuter interview transcripts in Folder B into simple lexical word counts, discard Folder C because it represents secondary pre-existing reports, and compute arithmetic averages on Folders A, B, and D, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Partially valid, but flawed. Discarding secondary data (Folder C) eliminates vital comparative context, and merely counting words in qualitative interviews misses the deeper thematic meaning and lived commuter experiences.",
          "academicReasoning": "Textbook Section 3.1 warns against reducing rich qualitative data to superficial word counts without thematic coding."
        },
        {
          "id": "s1-opt-c",
          "label": "Casual Impressionistic Strategy",
          "description": "Browse through Folder B to find two dramatic quotes, ignore the 120,000 automated smartcard tap-in logs because handling large numerical datasets is too time-consuming, and write an informal narrative opinion column for the agency.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Weak methodology. Cherry-picking quotes while ignoring large-scale empirical datasets is subjective journalism, not systematic academic data analysis.",
          "academicReasoning": "Scientific data analysis requires systematic examination of all gathered evidence, not selective confirmation bias."
        }
      ]
    },
    {
      "stageNumber": 2,
      "stageKey": "central-tendency-outliers",
      "title": "Stage 2: Central Tendency & Outlier Investigation",
      "concept": "Sensitivity of the Mean vs. Robustness of the Median",
      "textbookRef": "Textbook Section 3.2 (pp. 41–44)",
      "scenarioHeading": "The Anomalous Sensor Reading",
      "scenarioBody": "Your team reviews the ambient PM2.5 particulate concentration readings (µg/m³) recorded simultaneously across seven monitoring stations in District 4 over one week. Six stations report moderate readings, but Station 7 records an alarming spike.",
      "evidenceData": {
        "label": "7 Station Readings (PM2.5 in µg/m³)",
        "items": [
          {
            "key": "Station 1 (Park)",
            "value": "31 µg/m³"
          },
          {
            "key": "Station 2 (School)",
            "value": "34 µg/m³"
          },
          {
            "key": "Station 3 (Residential)",
            "value": "32 µg/m³"
          },
          {
            "key": "Station 4 (Commercial)",
            "value": "35 µg/m³"
          },
          {
            "key": "Station 5 (Suburban Hub)",
            "value": "33 µg/m³"
          },
          {
            "key": "Station 6 (Bus Depot)",
            "value": "36 µg/m³"
          },
          {
            "key": "Station 7 (Alleyway)",
            "value": "289 µg/m³",
            "note": "Sensor placed 2 meters from an illegal open trash burning fire"
          }
        ]
      },
      "prompt": "The arithmetic Mean across all 7 stations is 70.0 µg/m³ (Unhealthy), while the Median is 34.0 µg/m³ (Moderate). How should your team report this data to municipal planners?",
      "options": [
        {
          "id": "s2-opt-b",
          "label": "Report Only the Arithmetic Mean (70.0 µg/m³)",
          "description": "Publish the arithmetic mean of 70.0 µg/m³ as the official district average without mentioning Station 7, ignoring how an isolated industrial fire distorted the overall measurement across normal residential zones.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Partially valid math, but flawed interpretation. While 70.0 is the exact mathematical mean, failing to identify the outlier misleads the public into believing ambient air everywhere is hazardous.",
          "academicReasoning": "Researchers have an ethical responsibility to avoid misleading representations caused by unexamined outliers."
        },
        {
          "id": "s2-opt-c",
          "label": "Silently Erase Station 7 Without Mentioning It",
          "description": "Delete Station 7 from the database entirely without documentation and compute the mean of the remaining six stations, concealing anomalous sensor readings to produce an artificially low municipal air report.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Unacceptable research practice. Silently deleting data points without transparent documentation violates scientific transparency and conceals an illegal trash burning hazard.",
          "academicReasoning": "Data cleaning requires explicit, transparent documentation of any excluded or isolated data points."
        },
        {
          "id": "s2-opt-a",
          "label": "Report Median (34.0 µg/m³) with Documented Outlier Analysis",
          "description": "Report the median of 34.0 µg/m³ as the robust measure of typical community exposure, while publishing Station 7 (250 µg/m³) in a separate outlier audit explaining the transient localized industrial fire.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Excellent statistical judgment! The mean (70.0) is heavily skewed by one extreme anomaly. Reporting the median represents the true typical conditions, while documenting the outlier prompts targeted local enforcement.",
          "academicReasoning": "Textbook Section 3.2 emphasizes that the median is resistant to extreme outliers, whereas the mean is easily distorted, creating false impressions of typicality."
        }
      ]
    },
    {
      "stageNumber": 3,
      "stageKey": "visualization-selection",
      "title": "Stage 3: Visual Representation & Chart Selection",
      "concept": "Communicating Data Patterns Effectively (Bar, Line, Pie, Scatter)",
      "textbookRef": "Textbook Section 3.4 (pp. 49–53)",
      "scenarioHeading": "Choosing Visuals for the Provincial Assembly",
      "scenarioBody": "Your team must design three visual presentation slides for the Provincial Transportation Committee. Each slide communicates a fundamentally different analytical relationship: (1) 24-hour continuous temperature and pollution trends; (2) Passenger share of four transit modes totaling 100%; (3) The relationship between ticket price discounts and rider volume.",
      "prompt": "Which combination of visual charts communicates these three datasets with optimal clarity and accuracy?",
      "options": [
        {
          "id": "s3-opt-b",
          "label": "Three Separate Pie Charts for All Slides",
          "description": "Construct three separate 24-slice pie charts for hourly readings, user age groups, and travel modes, forcing continuous chronological time-series measurements into circular proportions that obscure trends, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Poor visual design. A 24-slice pie chart makes comparing chronological hourly trends nearly impossible, and scatter relationships cannot be visualized in pie format.",
          "academicReasoning": "Pie charts are only suitable for static part-to-whole proportions with few slices, never for time series or correlational plots."
        },
        {
          "id": "s3-opt-a",
          "label": "Line Graph (Temporal) + 100% Stacked Bar (Proportions) + Scatter Plot (Relationship)",
          "description": "Deploy a continuous Line Graph for hourly transit trends, a 100% Stacked Bar Chart for passenger trip demographic shares, and a Scatter Plot to examine the bivariate relationship between fares and ridership.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Perfect chart alignment! Line charts showcase continuous temporal progression; 100% stacked bars cleanly display compositional shares; and scatter plots reveal bivariate relationships.",
          "academicReasoning": "Textbook Section 3.4 details how matching data dimensions (temporal, proportional, relational) to specific visual structures prevents audience confusion."
        },
        {
          "id": "s3-opt-c",
          "label": "Truncated Vertical Bar Chart with Non-Zero Baseline",
          "description": "Use vertical bar charts where the Y-axis baseline begins at 85% instead of zero, exaggerating minute 2% ridership fluctuations into visual illusions of dramatic growth for government press releases.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Deceptive graphing technique! Truncating the vertical baseline artificially exaggerates minimal differences, creating a misleading optical illusion.",
          "academicReasoning": "Textbook Section 3.4 explicitly identifies truncated axes as a classic tactic of deceptive and unethical data visualization."
        }
      ]
    },
    {
      "stageNumber": 4,
      "stageKey": "correlation-causation",
      "title": "Stage 4: Correlation vs. Causation Adjudication",
      "concept": "Confounding Variables & Spurious Relationships",
      "textbookRef": "Textbook Section 3.3 (pp. 46–48)",
      "scenarioHeading": "The Sensational Media Headline",
      "scenarioBody": "A viral online news outlet headlines: \"Electric Buses Cause Respiratory Illness Spike!\" The article shows that during October, November, and December, both electric bus fleet deployment and respiratory clinic admissions rose simultaneously by 42%.",
      "evidenceData": {
        "label": "Timeline & Environmental Cross-Verification",
        "items": [
          {
            "key": "Metric 1",
            "value": "Fleet size grew from 50 to 120 zero-emission electric buses (tailpipe emissions = 0)"
          },
          {
            "key": "Metric 2",
            "value": "Regional monsoon wind shift carried severe seasonal peatland smoke haze into the city during Oct–Dec"
          },
          {
            "key": "Metric 3",
            "value": "Ambient PM10 and PM2.5 particulates spiked equally in districts with zero electric bus routes"
          }
        ]
      },
      "prompt": "How should your data audit team rigorously deconstruct and refute this media claim?",
      "options": [
        {
          "id": "s4-opt-a",
          "label": "Expose the Confounding Variable (Seasonal Peatland Smoke Haze)",
          "description": "Demonstrate that the correlation is spurious: seasonal peatland smoke haze independently caused both respiratory hospital visits and increased bus usage due to reduced motorcycle travel in smoky conditions.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Flawless academic reasoning! You identified the confounding atmospheric variable and recognized that mutual correlation in time does not prove causal responsibility.",
          "academicReasoning": "Textbook Section 3.3 warns that correlation never implies causation when lurking third variables (confounders) independently influence observed outcomes."
        },
        {
          "id": "s4-opt-b",
          "label": "Accept the Headline but Propose Halving the Bus Speed",
          "description": "Concede that electric buses cause respiratory sickness through electromagnetic radiation and propose reducing bus speeds by 50%, accepting the sensationalist tabloid claim without testing confounding variables.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Unscientific speculation. Inventing untested hypotheses without empirical basis validates a baseless media rumor while ignoring real environmental data.",
          "academicReasoning": "Critical inquiry relies on verifiable empirical mechanisms rather than speculative panic."
        },
        {
          "id": "s4-opt-c",
          "label": "Ban All Statistics from High School Research Papers",
          "description": "Declare that statistical correlations are inherently fraudulent and ban all quantitative numerical data from student environmental research, replacing empirical measurements with purely speculative essays.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Anti-intellectual reaction. Statistics did not fail; flawed logical reasoning by an untrained journalist failed.",
          "academicReasoning": "Statistical evidence is an indispensable tool for global inquiry when combined with disciplined logical reasoning."
        }
      ]
    },
    {
      "stageNumber": 5,
      "stageKey": "data-ethics-reporting",
      "title": "Stage 5: Responsible Interpretation & Ethical Governance",
      "concept": "Data Privacy, Anonymity, and Actionable Policy Translation",
      "textbookRef": "Textbook Section 3.1 & 3.4 (pp. 39–41, 51–53)",
      "scenarioHeading": "The Commercial Data Request & Final Public Release",
      "scenarioBody": "A commercial retail analytics firm offers your team 20 million IDR to acquire the raw commuter database, including unmasked passenger names, phone numbers, and daily travel coordinates. Simultaneously, the city council asks for your final policy report.",
      "prompt": "What is the academically ethical and professionally rigorous response to both parties?",
      "options": [
        {
          "id": "s5-opt-b",
          "label": "Sell the Raw Database to Fund the School Lab",
          "description": "Sell the raw transit dataset including passenger phone numbers, home stops, and timestamps to private marketing firms to raise money for new high school environmental laboratory equipment and club field trips, although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.",
          "score": 30,
          "isOptimal": false,
          "feedback": "Severe ethical and legal violation. Selling research participants’ private information without explicit informed consent breaches fundamental research ethics and Indonesian privacy laws.",
          "academicReasoning": "Commercial exploitation of participant data destroys public trust and violates academic research standards."
        },
        {
          "id": "s5-opt-a",
          "label": "Reject Commercial Monetization & Publish Anonymized Open Data",
          "description": "Refuse commercial monetization to protect commuter privacy, releasing fully anonymized open-access aggregate datasets with an academic methodology brief to assist municipal planners and clean-air advocates.",
          "score": 160,
          "isOptimal": true,
          "feedback": "Exemplary research integrity! You defended human participant privacy, upheld ethical data stewardship, and provided policymakers with actionable, aggregated public findings.",
          "academicReasoning": "Ethical data governance requires strict anonymization, non-exploitation of research participants, and translating evidence into community-focused public policy."
        },
        {
          "id": "s5-opt-c",
          "label": "Lock All Findings in a Vault and Tell Nobody",
          "description": "Lock all research files in a secure filing cabinet and refuse to share any findings with municipal authorities, commuter associations, or school administrators, preventing constructive policy reforms.",
          "score": 80,
          "isOptimal": false,
          "feedback": "Protects privacy, but fails the social objective of research. Research should inform evidence-based public decision-making while safeguarding confidentiality.",
          "academicReasoning": "Academic research exists to generate usable public knowledge that improves community outcomes."
        }
      ]
    }
  ]
};
