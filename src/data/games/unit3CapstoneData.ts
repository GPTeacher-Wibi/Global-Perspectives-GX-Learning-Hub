/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3 CAPSTONE CHALLENGE DATA: DATA ANALYSIS MISSION
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 39–53)
 *
 * Grounding:
 * - Section 3.1: Raw Data vs. Usable Knowledge (pp. 39–40)
 * - Section 3.2: Descriptive Statistics: Mean, Median, Mode & Outliers (pp. 41–44)
 * - Section 3.3: Data Dispersion & Correlation vs. Causation (pp. 45–48)
 * - Section 3.4: Visual Representations & Chart Selection (pp. 49–53)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Meaningful thinking and analytical rigor over fast clicking"
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
  id: 'g3-capstone',
  unitNumber: 3,
  title: 'Data Analysis Mission',
  subtitle: 'The Jakarta Clean Air & Transit Corridor Audit',
  caseSetting: 'Jakarta Metropolitan Transportation & Environmental Agency (Dishub & DLH)',
  overview:
    'As student data analysts for the provincial environmental council, you must audit transit usage and air quality datasets. Your mission is to triage raw data, resolve extreme statistical outliers, match findings to optimal visual formats, expose a false causal claim in the media, and formulate an ethical, privacy-compliant data release protocol.',
  maxScore: 800, // 5 stages * 160 max points
  stages: [
    // ------------------------------------------------------------------------
    // STAGE 1: RAW DATA CLASSIFICATION & METHOD SELECTION
    // ------------------------------------------------------------------------
    {
      stageNumber: 1,
      stageKey: 'data-classification',
      title: 'Stage 1: Raw Data Triage & Method Selection',
      concept: 'Quantitative vs. Qualitative & Primary vs. Secondary Inquiry',
      textbookRef: 'Textbook Section 3.1 (pp. 39–40)',
      scenarioHeading: 'Sorting the Raw Field Dossier',
      scenarioBody:
        'The municipal agency provides your team with six distinct data folders collected over the past six months across the Sudirman–Thamrin transit corridor. Before computing any statistics, you must determine how to classify this evidence and choose an appropriate analytical workflow.',
      evidenceData: {
        label: 'Agency Data Inventory',
        items: [
          { key: 'Folder A', value: '120,000 automated electric bus smartcard tap-ins with hourly timestamps', note: 'Numeric count' },
          { key: 'Folder B', value: 'Transcripts of 45 in-depth commuter interviews regarding safety and air comfort', note: 'Verbal narratives' },
          { key: 'Folder C', value: 'Published 2023 Central Bureau of Statistics (BPS) provincial census figures', note: 'Pre-existing institutional report' },
          { key: 'Folder D', value: 'Daily PM2.5 particulate sensor logs calibrated and recorded by your student team', note: 'Student-measured continuous numbers' }
        ]
      },
      prompt:
        'Which analysis strategy correctly classifies these datasets and applies the proper analytical method for each?',
      options: [
        {
          id: 's1-opt-a',
          label: 'Comprehensive Mixed-Methods Analytical Workflow',
          description:
            'Classify Folders A & D as quantitative (analyzed via descriptive statistics: mean, median, dispersion), Folder B as primary qualitative data (analyzed via structured thematic coding), and Folder C as secondary benchmark data used for contextual comparison.',
          score: 160,
          isOptimal: true,
          feedback:
            'Well reasoned! You correctly differentiate quantitative metrics (Folders A & D) requiring statistical analysis from qualitative narratives (Folder B) requiring thematic coding, while utilizing Folder C as a secondary comparative baseline.',
          academicReasoning:
            'Rigorous research treats numerical and narrative data with distinct, appropriate methodologies rather than forcing qualitative narratives into superficial number conversions.'
        },
        {
          id: 's1-opt-b',
          label: 'Quantitative Reductionist Strategy',
          description:
            'Convert all commuter interview transcripts in Folder B into word counts, discard Folder C because it is secondary, and only compute arithmetic averages on Folders A, B, and D.',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially valid, but flawed. Discarding secondary data (Folder C) eliminates vital comparative context, and merely counting words in qualitative interviews misses the deeper thematic meaning and lived commuter experiences.',
          academicReasoning:
            'Textbook Section 3.1 warns against reducing rich qualitative data to superficial word counts without thematic coding.'
        },
        {
          id: 's1-opt-c',
          label: 'Casual Impressionistic Strategy',
          description:
            'Browse through Folder B to find two dramatic quotes, ignore the 120,000 smartcard logs because there are too many numbers, and write an editorial opinion.',
          score: 30,
          isOptimal: false,
          feedback:
            'Weak methodology. Cherry-picking quotes while ignoring large-scale empirical datasets is subjective journalism, not systematic academic data analysis.',
          academicReasoning:
            'Scientific data analysis requires systematic examination of all gathered evidence, not selective confirmation bias.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 2: CENTRAL TENDENCY & OUTLIER DISTORTION
    // ------------------------------------------------------------------------
    {
      stageNumber: 2,
      stageKey: 'central-tendency-outliers',
      title: 'Stage 2: Central Tendency & Outlier Investigation',
      concept: 'Sensitivity of the Mean vs. Robustness of the Median',
      textbookRef: 'Textbook Section 3.2 (pp. 41–44)',
      scenarioHeading: 'The Anomalous Sensor Reading',
      scenarioBody:
        'Your team reviews the ambient PM2.5 particulate concentration readings (µg/m³) recorded simultaneously across seven monitoring stations in District 4 over one week. Six stations report moderate readings, but Station 7 records an alarming spike.',
      evidenceData: {
        label: '7 Station Readings (PM2.5 in µg/m³)',
        items: [
          { key: 'Station 1 (Park)', value: '31 µg/m³' },
          { key: 'Station 2 (School)', value: '34 µg/m³' },
          { key: 'Station 3 (Residential)', value: '32 µg/m³' },
          { key: 'Station 4 (Commercial)', value: '35 µg/m³' },
          { key: 'Station 5 (Suburban Hub)', value: '33 µg/m³' },
          { key: 'Station 6 (Bus Depot)', value: '36 µg/m³' },
          { key: 'Station 7 (Alleyway)', value: '289 µg/m³', note: 'Sensor placed 2 meters from an illegal open trash burning fire' }
        ]
      },
      prompt:
        'The arithmetic Mean across all 7 stations is 70.0 µg/m³ (Unhealthy), while the Median is 34.0 µg/m³ (Moderate). How should your team report this data to municipal planners?',
      options: [
        {
          id: 's2-opt-a',
          label: 'Report Median (34.0 µg/m³) with Documented Outlier Analysis',
          description:
            'Report the median (34.0 µg/m³) as the truthful measure of typical district air quality because Station 7 is an extreme localized outlier caused by trash burning that distorts the mean by over 100%. Explain Station 7 separately as an isolated enforcement problem.',
          score: 160,
          isOptimal: true,
          feedback:
            'Excellent statistical judgment! The mean (70.0) is heavily skewed by one extreme anomaly. Reporting the median represents the true typical conditions, while documenting the outlier prompts targeted local enforcement.',
          academicReasoning:
            'Textbook Section 3.2 emphasizes that the median is resistant to extreme outliers, whereas the mean is easily distorted, creating false impressions of typicality.'
        },
        {
          id: 's2-opt-b',
          label: 'Report Only the Arithmetic Mean (70.0 µg/m³)',
          description:
            'Publish 70.0 µg/m³ as the definitive district average without mentioning Station 7, warning the public that the entire district has severely hazardous air.',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially valid math, but flawed interpretation. While 70.0 is the exact mathematical mean, failing to identify the outlier misleads the public into believing ambient air everywhere is hazardous.',
          academicReasoning:
            'Researchers have an ethical responsibility to avoid misleading representations caused by unexamined outliers.'
        },
        {
          id: 's2-opt-c',
          label: 'Silently Erase Station 7 Without Mentioning It',
          description:
            'Delete Station 7 from the database entirely and compute the mean of the remaining 6 stations without telling anyone the anomaly occurred.',
          score: 30,
          isOptimal: false,
          feedback:
            'Unacceptable research practice. Silently deleting data points without transparent documentation violates scientific transparency and conceals an illegal trash burning hazard.',
          academicReasoning:
            'Data cleaning requires explicit, transparent documentation of any excluded or isolated data points.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 3: VISUALIZATION & CHART SELECTION
    // ------------------------------------------------------------------------
    {
      stageNumber: 3,
      stageKey: 'visualization-selection',
      title: 'Stage 3: Visual Representation & Chart Selection',
      concept: 'Communicating Data Patterns Effectively (Bar, Line, Pie, Scatter)',
      textbookRef: 'Textbook Section 3.4 (pp. 49–53)',
      scenarioHeading: 'Choosing Visuals for the Provincial Assembly',
      scenarioBody:
        'Your team must design three visual presentation slides for the Provincial Transportation Committee. Each slide communicates a fundamentally different analytical relationship: (1) 24-hour continuous temperature and pollution trends; (2) Passenger share of four transit modes totaling 100%; (3) The relationship between ticket price discounts and rider volume.',
      prompt:
        'Which combination of visual charts communicates these three datasets with optimal clarity and accuracy?',
      options: [
        {
          id: 's3-opt-a',
          label: 'Line Graph (Temporal) + 100% Stacked Bar (Proportions) + Scatter Plot (Relationship)',
          description:
            'Use a continuous Line Graph with time on the X-axis for hourly trends; a 100% Stacked Bar or Donut chart for transit mode proportions; and a Scatter Plot with a trend line to explore price vs. ridership correlation.',
          score: 160,
          isOptimal: true,
          feedback:
            'Perfect chart alignment! Line charts showcase continuous temporal progression; 100% stacked bars cleanly display compositional shares; and scatter plots reveal bivariate relationships.',
          academicReasoning:
            'Textbook Section 3.4 details how matching data dimensions (temporal, proportional, relational) to specific visual structures prevents audience confusion.'
        },
        {
          id: 's3-opt-b',
          label: 'Three Separate Pie Charts for All Slides',
          description:
            'Use a 24-slice pie chart for hourly readings, a 4-slice pie chart for transit modes, and a 20-slice pie chart for ticket prices.',
          score: 80,
          isOptimal: false,
          feedback:
            'Poor visual design. A 24-slice pie chart makes comparing chronological hourly trends nearly impossible, and scatter relationships cannot be visualized in pie format.',
          academicReasoning:
            'Pie charts are only suitable for static part-to-whole proportions with few slices, never for time series or correlational plots.'
        },
        {
          id: 's3-opt-c',
          label: 'Truncated Vertical Bar Chart with Non-Zero Baseline',
          description:
            'Use vertical bar charts where the Y-axis starts at 85% instead of 0% to make tiny 1% passenger variations appear enormous and dramatic.',
          score: 30,
          isOptimal: false,
          feedback:
            'Deceptive graphing technique! Truncating the vertical baseline artificially exaggerates minimal differences, creating a misleading optical illusion.',
          academicReasoning:
            'Textbook Section 3.4 explicitly identifies truncated axes as a classic tactic of deceptive and unethical data visualization.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 4: CORRELATION VS. CAUSATION TRIAL
    // ------------------------------------------------------------------------
    {
      stageNumber: 4,
      stageKey: 'correlation-causation',
      title: 'Stage 4: Correlation vs. Causation Adjudication',
      concept: 'Confounding Variables & Spurious Relationships',
      textbookRef: 'Textbook Section 3.3 (pp. 46–48)',
      scenarioHeading: 'The Sensational Media Headline',
      scenarioBody:
        'A viral online news outlet headlines: "Electric Buses Cause Respiratory Illness Spike!" The article shows that during October, November, and December, both electric bus fleet deployment and respiratory clinic admissions rose simultaneously by 42%.',
      evidenceData: {
        label: 'Timeline & Environmental Cross-Verification',
        items: [
          { key: 'Metric 1', value: 'Fleet size grew from 50 to 120 zero-emission electric buses (tailpipe emissions = 0)' },
          { key: 'Metric 2', value: 'Regional monsoon wind shift carried severe seasonal peatland smoke haze into the city during Oct–Dec' },
          { key: 'Metric 3', value: 'Ambient PM10 and PM2.5 particulates spiked equally in districts with zero electric bus routes' }
        ]
      },
      prompt:
        'How should your data audit team rigorously deconstruct and refute this media claim?',
      options: [
        {
          id: 's4-opt-a',
          label: 'Expose the Confounding Variable (Seasonal Peatland Smoke Haze)',
          description:
            'Demonstrate that the correlation is spurious: seasonal peatland smoke haze is an external confounding variable that drove clinic admissions across all districts regardless of bus routes. Point out that electric buses produce zero direct tailpipe combustion.',
          score: 160,
          isOptimal: true,
          feedback:
            'Flawless academic reasoning! You identified the confounding atmospheric variable and recognized that mutual correlation in time does not prove causal responsibility.',
          academicReasoning:
            'Textbook Section 3.3 warns that correlation never implies causation when lurking third variables (confounders) independently influence observed outcomes.'
        },
        {
          id: 's4-opt-b',
          label: 'Accept the Headline but Propose Halving the Bus Speed',
          description:
            'Concede that the buses might be causing the sickness through invisible electromagnetic waves and suggest driving them at 10 km/h to see if patients recover.',
          score: 80,
          isOptimal: false,
          feedback:
            'Unscientific speculation. Inventing untested hypotheses without empirical basis validates a baseless media rumor while ignoring real environmental data.',
          academicReasoning:
            'Critical inquiry relies on verifiable empirical mechanisms rather than speculative panic.'
        },
        {
          id: 's4-opt-c',
          label: 'Ban All Statistics from High School Research Papers',
          description:
            'Declare that numbers always lie and recommend that environmental researchers only write poems about clean air.',
          score: 30,
          isOptimal: false,
          feedback:
            'Anti-intellectual reaction. Statistics did not fail; flawed logical reasoning by an untrained journalist failed.',
          academicReasoning:
            'Statistical evidence is an indispensable tool for global inquiry when combined with disciplined logical reasoning.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 5: RESPONSIBLE INTERPRETATION & DATA ETHICS
    // ------------------------------------------------------------------------
    {
      stageNumber: 5,
      stageKey: 'data-ethics-reporting',
      title: 'Stage 5: Responsible Interpretation & Ethical Governance',
      concept: 'Data Privacy, Anonymity, and Actionable Policy Translation',
      textbookRef: 'Textbook Section 3.1 & 3.4 (pp. 39–41, 51–53)',
      scenarioHeading: 'The Commercial Data Request & Final Public Release',
      scenarioBody:
        'A commercial retail analytics firm offers your team 20 million IDR to acquire the raw commuter database, including unmasked passenger names, phone numbers, and daily travel coordinates. Simultaneously, the city council asks for your final policy report.',
      prompt:
        'What is the academically ethical and professionally rigorous response to both parties?',
      options: [
        {
          id: 's5-opt-a',
          label: 'Reject Commercial Monetization & Publish Anonymized Open Data',
          description:
            'Strictly refuse the commercial sale to uphold commuter confidentiality and informed consent. Remove all personally identifiable identifiers (PII), aggregate travel data into anonymized zone metrics, and present city planners with balanced median statistics and actionable feeder route recommendations.',
          score: 160,
          isOptimal: true,
          feedback:
            'Exemplary research integrity! You defended human participant privacy, upheld ethical data stewardship, and provided policymakers with actionable, aggregated public findings.',
          academicReasoning:
            'Ethical data governance requires strict anonymization, non-exploitation of research participants, and translating evidence into community-focused public policy.'
        },
        {
          id: 's5-opt-b',
          label: 'Sell the Raw Database to Fund the School Lab',
          description:
            'Sell the commuters’ personal phone numbers and GPS coordinates to the retail firm, reasoning that the money will buy better microscopes for your classroom.',
          score: 30,
          isOptimal: false,
          feedback:
            'Severe ethical and legal violation. Selling research participants’ private information without explicit informed consent breaches fundamental research ethics and Indonesian privacy laws.',
          academicReasoning:
            'Commercial exploitation of participant data destroys public trust and violates academic research standards.'
        },
        {
          id: 's5-opt-c',
          label: 'Lock All Findings in a Vault and Tell Nobody',
          description:
            'Refuse to give the data to the commercial firm, but also refuse to share any report with the city council to avoid criticism.',
          score: 80,
          isOptimal: false,
          feedback:
            'Protects privacy, but fails the social objective of research. Research should inform evidence-based public decision-making while safeguarding confidentiality.',
          academicReasoning:
            'Academic research exists to generate usable public knowledge that improves community outcomes.'
        }
      ]
    }
  ]
};
