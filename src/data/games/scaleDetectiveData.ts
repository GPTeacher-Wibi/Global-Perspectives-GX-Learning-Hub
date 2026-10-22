/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: SCALE DETECTIVE (CANONICAL MICRO-GAME g1-2)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 13–16)
 * Section 1.3: Levels of Perspectives (Personal, Local, National, Global)
 * Core Distinction: Perspective Type (What lens) vs. Perspective Level (What scale)
 * CEFR Target: B1 English for Indonesian High School Learners
 */

export type ScaleLevel = 'personal' | 'local' | 'national' | 'global';

export interface ScaleDefinition {
  id: ScaleLevel;
  title: string;
  zoomAltitude: string;
  shortDefinition: string;
  scopeOfImpact: string;
  keyDiagnosticQuestion: string;
  coreIndicators: string[];
  examplePhrases: string[];
  colorBg: string;
  colorBorder: string;
  colorText: string;
  lightBg: string;
  zoomLevel: number;
}

export const SCALE_DEFINITIONS: Record<ScaleLevel, ScaleDefinition> = {
  personal: {
    id: 'personal',
    title: 'Personal Scale',
    zoomAltitude: 'Zoom 1: Individual & Household',
    shortDefinition: 'An individual’s direct lived experience, personal budget, habits, and family choices.',
    scopeOfImpact: 'Single person, household, or family circle.',
    keyDiagnosticQuestion: 'Does this directly affect one individual’s daily life, personal expenses, or individual habits?',
    coreIndicators: ['I', 'my family', 'household budget', 'my personal choice', 'my daily commute', 'my own health'],
    examplePhrases: [
      '“My monthly electric bill increased.”',
      '“I decided to stop buying plastic bottled water.”',
      '“My parents cannot afford private tutoring.”'
    ],
    colorBg: 'bg-emerald-600',
    colorBorder: 'border-emerald-300',
    colorText: 'text-emerald-800',
    lightBg: 'bg-emerald-50',
    zoomLevel: 1
  },
  local: {
    id: 'local',
    title: 'Local Scale',
    zoomAltitude: 'Zoom 2: Neighborhood & Town',
    shortDefinition: 'A specific neighborhood, village, school, city council, or municipal district.',
    scopeOfImpact: 'Defined town, city, river basin, or immediate local community.',
    keyDiagnosticQuestion: 'Is the action, policy, or problem limited to a specific town, city, or community?',
    coreIndicators: ['city council', 'village head', 'neighborhood', 'municipal district', 'local school', 'district market'],
    examplePhrases: [
      '“The city council banned plastic bags in municipal supermarkets.”',
      '“Our neighborhood organized a weekly mangrove cleanup.”',
      '“Local fishermen in the bay noticed declining crab catches.”'
    ],
    colorBg: 'bg-cyan-600',
    colorBorder: 'border-cyan-300',
    colorText: 'text-cyan-800',
    lightBg: 'bg-cyan-50',
    zoomLevel: 2
  },
  national: {
    id: 'national',
    title: 'National Scale',
    zoomAltitude: 'Zoom 3: Country & Sovereign State',
    shortDefinition: 'A sovereign nation-state, nationwide laws, ministries, presidential policies, or countrywide taxes.',
    scopeOfImpact: 'Entire country, all citizens across domestic borders.',
    keyDiagnosticQuestion: 'Does this involve a national government, nationwide law, countrywide tax, or state ministry?',
    coreIndicators: ['nationwide', 'Ministry of Health', 'Presidential decree', 'national parliament', 'BPJS', 'countrywide law'],
    examplePhrases: [
      '“Indonesia’s parliament passed the National Renewable Energy Law.”',
      '“The Ministry of Education reformed the nationwide high school curriculum.”',
      '“The central bank adjusted interest rates across the country.”'
    ],
    colorBg: 'bg-indigo-600',
    colorBorder: 'border-indigo-300',
    colorText: 'text-indigo-800',
    lightBg: 'bg-indigo-50',
    zoomLevel: 3
  },
  global: {
    id: 'global',
    title: 'Global Scale',
    zoomAltitude: 'Zoom 4: Transnational & Planetary',
    shortDefinition: 'Worldwide agreements, multilateral bodies (UN, WHO, WTO), transnational oceans, or planetary climate systems.',
    scopeOfImpact: 'Multiple countries, international treaties, or the entire planet.',
    keyDiagnosticQuestion: 'Does this involve multilateral cooperation, international treaties, or planetary ecosystems spanning many nations?',
    coreIndicators: ['United Nations', 'international treaty', '195 countries', 'worldwide', 'planetary climate', 'WHO', 'COP summit'],
    examplePhrases: [
      '“195 nations ratified the Paris Climate Accord to cap planetary warming.”',
      '“The World Health Organization declared a global public health priority.”',
      '“Microplastic pollution spans all international oceans.”'
    ],
    colorBg: 'bg-purple-600',
    colorBorder: 'border-purple-300',
    colorText: 'text-purple-800',
    lightBg: 'bg-purple-50',
    zoomLevel: 4
  }
};

export interface ScaleDetectiveItem {
  id: string;
  stage: 1 | 2;
  title: string;
  contextSituation: string;
  speakerOrSource: string;
  statement: string;
  conceptualPrompt: string;
  cluePhrases: string[];
  correctScale: ScaleLevel;
  associatedLens: 'cultural' | 'economic' | 'political' | 'social';
  clueExplanation: string;
  misconceptionAlert?: {
    temptingScale?: ScaleLevel;
    confusedWithLens?: boolean;
    explanation: string;
  };
}

/**
 * ============================================================================
 * FINAL APPROVED ARCHITECTURAL SPECIFICATION:
 * - Stage 1 (Calibration): 4 items (1 of each scale: Personal, Local, National, Global)
 * - Stage 2 (Fieldwork): 5 items (Subtle cases with authority/beneficiary distractors)
 * - Stage 3 (Multi-Scale Dossier): 4 viewpoints (Curriculum EV & Nickel Case Study)
 * Total: exactly 13 challenge objects
 * ============================================================================
 */

// STAGE 1: CALIBRATION FIELDWORK (4 Warm-Up Cases: 1 for each scale)
export const STAGE_1_ITEMS: ScaleDetectiveItem[] = [
  {
    id: 's1-q1',
    stage: 1,
    title: 'Case 01: Solar Rooftop Installation',
    contextSituation: 'A family discusses switching their home electricity source to reduce monthly bills.',
    speakerOrSource: 'Homeowner in Surabaya',
    statement: '“After installing solar panels on our roof, our household electricity bill dropped by 450,000 rupiah each month, allowing us to put extra savings into our family emergency fund.”',
    conceptualPrompt: 'Ask whose living expenses and private household budget are directly altered by this monthly saving.',
    cluePhrases: ['household electricity bill', 'family emergency fund'],
    correctScale: 'personal',
    associatedLens: 'economic',
    clueExplanation: 'The impact is directly confined to one individual household budget and family savings. This is the Personal level.',
    misconceptionAlert: {
      temptingScale: 'local',
      confusedWithLens: true,
      explanation: 'Notice that solar panels deal with money (Economic Lens), but the scope is one household (Personal Scale). Do not confuse the Economic lens with a broader scale!'
    }
  },
  {
    id: 's1-q2',
    stage: 1,
    title: 'Case 02: Single-Use Plastic Bylaw',
    contextSituation: 'A municipal administration responds to clogged city drainage and localized street flooding.',
    speakerOrSource: 'Denpasar City Mayor’s Office',
    statement: '“The municipal government has enacted City Regulation No. 36 to prohibit single-use plastic bags and straws across all traditional markets and convenience stores within the city limits.”',
    conceptualPrompt: 'Ask where this administrative body has legal jurisdiction to enforce rules and where that power stops.',
    cluePhrases: ['enacted', 'prohibit single-use plastic', 'traditional markets'],
    correctScale: 'local',
    associatedLens: 'political',
    clueExplanation: 'The jurisdiction is explicitly restricted to a single municipality (Denpasar city limits) and enacted by local municipal authorities.',
    misconceptionAlert: {
      temptingScale: 'national',
      explanation: 'Although it is a government regulation (Political Lens), it only applies inside one specific city boundary, making it Local, not National.'
    }
  },
  {
    id: 's1-q3',
    stage: 1,
    title: 'Case 03: Universal Healthcare System',
    contextSituation: 'A policy debate on healthcare coverage across all provinces of Indonesia.',
    speakerOrSource: 'Ministry of Health Spokesperson',
    statement: '“Under the national BPJS Kesehatan program, all 275 million citizens across all 38 Indonesian provinces are legally entitled to standardized basic medical treatment at public health clinics.”',
    conceptualPrompt: 'Ask whether this healthcare entitlement is established by a countrywide domestic authority for all its citizens.',
    cluePhrases: ['BPJS Kesehatan program', 'citizens', 'public health clinics'],
    correctScale: 'national',
    associatedLens: 'social',
    clueExplanation: 'The scope covers the entire country (all 38 provinces, 275 million citizens) governed by national state law.',
    misconceptionAlert: {
      temptingScale: 'global',
      explanation: 'While 275 million people is a very large population, they belong to a single sovereign nation-state (Indonesia). It is National, not Global.'
    }
  },
  {
    id: 's1-q4',
    stage: 1,
    title: 'Case 04: International Treaty on Marine Biodiversity',
    contextSituation: 'Diplomats gather at the United Nations headquarters in New York.',
    speakerOrSource: 'United Nations Conference Chair',
    statement: '“Delegates representing 193 UN member states successfully signed the High Seas Treaty, establishing conservation rules for international waters that lie beyond any single country’s national jurisdiction.”',
    conceptualPrompt: 'Ask whether this legal framework is created by a single sovereign government or negotiated across multiple nations for shared international territory.',
    cluePhrases: ['signed the High Seas Treaty', 'conservation rules', 'international waters'],
    correctScale: 'global',
    associatedLens: 'political',
    clueExplanation: 'The treaty involves nearly 200 sovereign countries collaborating through the United Nations to regulate planetary international waters.',
    misconceptionAlert: {
      temptingScale: 'national',
      explanation: 'This action is not governed by one country’s domestic laws; it applies internationally across planet Earth’s high seas.'
    }
  }
];

// STAGE 2: SCALE DETECTIVE FIELDWORK (5 Intermediate Cases with Subtle Distractors & Type vs Level Check)
export const STAGE_2_ITEMS: ScaleDetectiveItem[] = [
  {
    id: 's2-q1',
    stage: 2,
    title: 'Case 05: Mangrove Rehabilitation Initiative',
    contextSituation: 'A coastal village responds to severe tidal flooding and coastal erosion.',
    speakerOrSource: 'Village Community Head (Kepala Desa) in Demak, Central Java',
    statement: '“Our village council allocated 15 million rupiah from the village fund so that our 120 coastal families could plant 3,000 mangrove seedlings to protect our beachfront homes from high tides.”',
    conceptualPrompt: 'Distinguish between the 120 families who receive protection and the specific community body that authorized the public funds.',
    cluePhrases: ['village council allocated', 'village fund', 'coastal families'],
    correctScale: 'local',
    associatedLens: 'social',
    clueExplanation: 'The project is funded and carried out by one specific village council (Kepala Desa) to safeguard 120 local families.',
    misconceptionAlert: {
      temptingScale: 'personal',
      explanation: 'Although families benefit, the decision was voted on by the village council and funded via the village treasury for the entire community. That places it at the Local level.'
    }
  },
  {
    id: 's2-q2',
    stage: 2,
    title: 'Case 06: Fuel Subsidy Reduction',
    contextSituation: 'A national finance ministry announces an adjustment to fuel prices.',
    speakerOrSource: 'Minister of Finance Press Conference',
    statement: '“To reduce the countrywide state budget deficit, the central government has lowered the national fuel subsidy for Pertalite, saving the state treasury 30 trillion rupiah annually.”',
    conceptualPrompt: 'Ask whether this fiscal policy addresses individual household savings or manages the sovereign treasury of an entire country.',
    cluePhrases: ['lowered the national fuel subsidy', 'state treasury'],
    correctScale: 'national',
    associatedLens: 'economic',
    clueExplanation: 'This is a sovereign fiscal policy decided by the central government affecting the state treasury and domestic fuel pricing throughout the nation.',
    misconceptionAlert: {
      temptingScale: 'personal',
      confusedWithLens: true,
      explanation: 'Motorcyclists will indeed pay more, but the statement itself is about the central government adjusting the national budget deficit. The statement is at the National level.'
    }
  },
  {
    id: 's2-q3',
    stage: 2,
    title: 'Case 07: Artisan Batik Preservation',
    contextSituation: 'An elderly craftswoman talks about keeping her family heritage alive.',
    speakerOrSource: 'Master Batik Artisan in Pekalongan',
    statement: '“Every morning at my workshop table, I teach my granddaughter how to hold the canting pen and apply hot wax so she can inherit our family’s four-generation floral design pattern.”',
    conceptualPrompt: 'Ask whether this cultural heritage transmission takes place through a public community institution or within the private relationship of one family.',
    cluePhrases: ['workshop table', 'teach my granddaughter', 'family’s four-generation'],
    correctScale: 'personal',
    associatedLens: 'cultural',
    clueExplanation: 'This interaction is between one grandmother and her granddaughter within a private family workshop. It represents personal lived experience and family transmission.',
    misconceptionAlert: {
      temptingScale: 'local',
      confusedWithLens: true,
      explanation: 'Batik is an iconic cultural tradition, but this specific statement describes a grandmother teaching her granddaughter inside their home. It is a Cultural perspective at the Personal level.'
    }
  },
  {
    id: 's2-q4',
    stage: 2,
    title: 'Case 08: Global Supply Chain Bottlenecks',
    contextSituation: 'An international shipping analysis following the blockage of major maritime transit straits.',
    speakerOrSource: 'World Maritime Trade Organization Report',
    statement: '“Delays in international shipping routes through the Suez and Malacca straits have increased container shipping costs worldwide by 280%, disrupting electronics and grain trade across six continents.”',
    conceptualPrompt: 'Ask whether this supply chain disruption is confined to domestic shipping routes or spans maritime trade corridors across multiple continents.',
    cluePhrases: ['shipping routes through the Suez and Malacca straits', 'container shipping costs', 'trade across six continents'],
    correctScale: 'global',
    associatedLens: 'economic',
    clueExplanation: 'The statement tracks trade disruption across multiple continents and worldwide sea routes, indicating a planetary/global scope.',
    misconceptionAlert: {
      temptingScale: 'national',
      explanation: 'Although specific ports operate in individual nations, the disruptions span 6 continents and international trade corridors across the planet.'
    }
  },
  {
    id: 's2-q5',
    stage: 2,
    title: 'Case 09: District School Air Filtration',
    contextSituation: 'Parent-Teacher Association advocates for air purifiers in classrooms due to regional seasonal smog.',
    speakerOrSource: 'District Education Board Representative in Pekanbaru',
    statement: '“Our district board voted to install HEPA air purifiers in all 45 public elementary schools across our municipal school district so that our 12,000 local pupils can breathe safely during haze season.”',
    conceptualPrompt: 'Notice the large number of pupils and ask whether this board’s authority extends to all schools across the country or only inside this specific municipality.',
    cluePhrases: ['district board voted', 'public elementary schools', 'haze season'],
    correctScale: 'local',
    associatedLens: 'social',
    clueExplanation: 'The decision is made by the municipal school district board for 45 schools within that specific geographic municipality.',
    misconceptionAlert: {
      temptingScale: 'national',
      explanation: 'The policy applies only to the schools in that specific municipality/district, not the entire national school system of Indonesia.'
    }
  }
];

// STAGE 3: THE MULTI-SCALE DOSSIER (Curriculum Case Study: Electric Vehicles & Nickel in Indonesia)
// Source: Textbook Section 1.3 Case Study (Slide 23)
export interface DossierViewpoint {
  id: string;
  scaleTitle: string;
  zoomLevel: number;
  correctScale: ScaleLevel;
  lensType: 'cultural' | 'economic' | 'political' | 'social';
  speakerRole: string;
  location: string;
  statement: string;
  keyEvidence: string;
  analysisExplanation: string;
  tradeOffInsight: string;
}

export interface MultiScaleDossier {
  caseTitle: string;
  subtitle: string;
  backgroundBrief: string;
  viewpoints: DossierViewpoint[];
}

export const MULTI_SCALE_DOSSIER: MultiScaleDossier = {
  caseTitle: 'The Electric Vehicle Revolution & Indonesian Nickel',
  subtitle: 'Tracking One Global Technology Across 4 Concentric Scales',
  backgroundBrief: 'Indonesia possesses the world’s largest nickel reserves, a crucial component for electric vehicle (EV) batteries. As the world pushes to replace petrol engines with electric cars, this single issue creates drastically different priorities depending on which scale you investigate.',
  viewpoints: [
    {
      id: 'dossier-vp-1',
      scaleTitle: 'Personal Scale Investigation',
      zoomLevel: 1,
      correctScale: 'personal',
      lensType: 'economic',
      speakerRole: 'Jakarta Daily Office Commuter',
      location: 'Central Jakarta Household',
      statement: '“I bought an electric motorbike because my monthly fuel spending dropped from 350,000 to only 60,000 rupiah in home charging. Plus, I can ride on odd-even license plate days without getting fined.”',
      keyEvidence: 'Personal monthly fuel savings of 290,000 rupiah and individual daily route flexibility.',
      analysisExplanation: 'Focuses entirely on one person’s household budget, personal vehicle purchase, and daily commute routines.',
      tradeOffInsight: 'At the personal scale, the decision is a clear financial win for the rider, but ignores where battery electricity comes from.'
    },
    {
      id: 'dossier-vp-2',
      scaleTitle: 'Local Scale Investigation',
      zoomLevel: 2,
      correctScale: 'local',
      lensType: 'social',
      speakerRole: 'Head of Coastal Fishermen’s Cooperative',
      location: 'Morowali Regency, Central Sulawesi',
      statement: '“Our village used to catch 30 kilograms of mackerel each morning. Since the nickel processing smelter opened down the coast, warm water discharge and coastal runoff have driven fish further out to sea, hurting our local families’ food security.”',
      keyEvidence: 'Daily fish catch reduction in Morowali coastal bay and threats to 200 local fishing households.',
      analysisExplanation: 'Concerned with the health, livelihoods, and marine environment of a specific coastal town and neighboring villages.',
      tradeOffInsight: 'A technology celebrated globally as "clean" can generate severe localized industrial pollution for coastal communities.'
    },
    {
      id: 'dossier-vp-3',
      scaleTitle: 'National Scale Investigation',
      zoomLevel: 3,
      correctScale: 'national',
      lensType: 'political',
      speakerRole: 'Spokesperson for Ministry of Investment & Maritime Affairs',
      location: 'Republic of Indonesia State Capital',
      statement: '“The Indonesian government banned raw nickel ore exports under Presidential Regulation No. 11 to force foreign companies to build processing smelters domestically, creating 80,000 national industrial jobs and raising sovereign tax revenue.”',
      keyEvidence: 'Presidential raw export ban regulation, sovereign tax revenue, and nationwide industrial employment expansion.',
      analysisExplanation: 'Addresses sovereign state legislation, national industrial development, and countrywide economic balance of trade.',
      tradeOffInsight: 'The national government prioritizes macroeconomic growth and state sovereignty, accepting local environmental trade-offs.'
    },
    {
      id: 'dossier-vp-4',
      scaleTitle: 'Global Scale Investigation',
      zoomLevel: 4,
      correctScale: 'global',
      lensType: 'political',
      speakerRole: 'United Nations Climate Change Secretariat (UNFCCC)',
      location: 'International COP Climate Summit',
      statement: '“Accelerating the worldwide transition from fossil fuel combustion to electric mobility is vital for 195 nations to achieve net-zero targets and avoid catastrophic planetary warming above 1.5°C.”',
      keyEvidence: '195 nation signatories to Paris Climate Agreement and worldwide planetary atmospheric warming targets.',
      analysisExplanation: 'Operates at the planetary/transnational scale, evaluating Earth’s total greenhouse gas emissions and worldwide multilateral treaties.',
      tradeOffInsight: 'Global climate targets require massive extraction of minerals like nickel, transferring environmental burdens to specific nations and towns.'
    }
  ]
};
