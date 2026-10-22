/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 8 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 104–120)
 * Language Level: CEFR B1 English
 * 
 * Contains verified curriculum challenges for:
 *  1. g8-1: Evidence Tier Rater (Hierarchy of Evidence: Experimental, Statistical, Expert, Anecdotal)
 *  2. g8-2: CRAAP & SIFT Fact-Checker (Lateral Reading, Digital Verification, Source Audit)
 *  3. g8-3: Field Observer Protocol (Ethical Local Fieldwork, Sopan Santun, Pak RT/RW, Privacy)
 */

// ============================================================================
// GAME 1: EVIDENCE TIER RATER (g8-1)
// ============================================================================

export type EvidenceTier = 'experimental' | 'statistical' | 'expert' | 'anecdotal';

export interface EvidenceTierItem {
  id: string;
  stage: 1 | 2 | 3;
  scenarioTitle: string;
  researchTopic: string;
  claimTested: string;
  evidenceSnippet: string;
  sourceContext: string;
  correctTier: EvidenceTier;
  tierRank: 1 | 2 | 3 | 4; // 1 = Highest rigor (Experimental), 2 = Statistical, 3 = Expert Testimony, 4 = Anecdotal
  options: {
    tier: EvidenceTier;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalTakeaway: string;
}

export const EVIDENCE_TIER_OPTIONS = [
  {
    tier: 'experimental' as EvidenceTier,
    label: 'Experimental / Scientific',
    description: 'Controlled testing with isolate variables and control groups; proves direct causality.'
  },
  {
    tier: 'statistical' as EvidenceTier,
    label: 'Statistical / Representative Data',
    description: 'Numerical measurements from large, representative population samples.'
  },
  {
    tier: 'expert' as EvidenceTier,
    label: 'Expert Testimony',
    description: 'Specialist judgment from credentialed scholars within their specific field.'
  },
  {
    tier: 'anecdotal' as EvidenceTier,
    label: 'Anecdotal / Personal Story',
    description: 'Individual story or single isolated experience; sample size of 1.'
  }
];

export const G8_1_CHALLENGES: EvidenceTierItem[] = [
  // STAGE 1: FOUNDATIONAL EVIDENCE SORTING (Items 1-4)
  {
    id: 'g8-1-c1',
    stage: 1,
    scenarioTitle: 'Dengue Fever Prevention',
    researchTopic: 'Mosquito Control in Urban Neighborhoods',
    claimTested: 'The new Wolbachia mosquito release program reduces dengue infections.',
    evidenceSnippet: '"My uncle lives in Yogyakarta where they released those mosquitoes, and he said nobody in his house got sick all rainy season!"',
    sourceContext: 'Conversation during a family gathering over holiday dinner.',
    correctTier: 'anecdotal',
    tierRank: 4,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is anecdotal evidence. It is a personal story from one family (sample size = 1). While memorable, it cannot prove medical protection because other factors (mosquito coils, lucky weather, screens) were not controlled.',
    pedagogicalTakeaway: 'Personal stories show individual experience, but cannot prove scientific rules or population health safety.'
  },
  {
    id: 'g8-1-c2',
    stage: 1,
    scenarioTitle: 'National Child Nutrition',
    researchTopic: 'Childhood Stunting in Indonesia',
    claimTested: 'National nutrition interventions reduced stunting prevalence between 2021 and 2023.',
    evidenceSnippet: '"Central Bureau of Statistics (BPS) and Ministry of Health surveys covering 300,000 households across 34 provinces showed childhood stunting dropped from 24.4% to 21.6%."',
    sourceContext: 'Official Indonesian National Health Survey Report (Survei Kesehatan Indonesia).',
    correctTier: 'statistical',
    tierRank: 2,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is statistical evidence. It presents verified numerical data gathered from a massive, nationally representative sample of 300,000 households across all provinces.',
    pedagogicalTakeaway: 'Statistical evidence provides high population generalizability when collected with rigorous random sampling.'
  },
  {
    id: 'g8-1-c3',
    stage: 1,
    scenarioTitle: 'Solar Panel Efficiency in Tropical Climates',
    researchTopic: 'Renewable Clean Energy Development',
    claimTested: 'Hydrophobic anti-dust coating improves solar energy absorption in high-humidity zones.',
    evidenceSnippet: '"Engineers placed 50 identical solar panels in a controlled test room. 25 panels had standard glass and 25 had the new coating. After 1,000 hours of simulated tropical dust and rainfall, the coated group generated 18.4% more kilowatt-hours with all other variables held equal."',
    sourceContext: 'Peer-reviewed testing paper from the National Institute of Solar Energy.',
    correctTier: 'experimental',
    tierRank: 1,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is experimental evidence. It used a controlled test group and a control group, holding temperature and humidity constant to isolate direct cause and effect.',
    pedagogicalTakeaway: 'Experimental evidence isolates direct causality by comparing a test group against an isolated control group.'
  },
  {
    id: 'g8-1-c4',
    stage: 1,
    scenarioTitle: 'Marine Ecosystem Restoration',
    researchTopic: 'Coral Bleaching in the Coral Triangle',
    claimTested: 'Rising sea surface temperatures are the primary driver of regional coral bleaching events.',
    evidenceSnippet: '"Dr. Maya Hartono, Professor of Marine Biology at Institut Pertanian Bogor with 25 peer-reviewed coral reef papers, stated: Our 15-year longitudinal analysis confirms ocean heatwaves exceed thermal tolerance limits in 80% of surveyed atolls."',
    sourceContext: 'Keynote address delivered at the International Coral Reef Symposium.',
    correctTier: 'expert',
    tierRank: 3,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is expert testimony. Dr. Hartono is a credentialed professor speaking strictly within her verified domain of marine biology research.',
    pedagogicalTakeaway: 'Expert testimony is reliable when the specialist possesses recognized credentials in the exact topic being evaluated.'
  },

  // STAGE 2: HIERARCHY APPRAISAL & COMPETING WEIGHTS (Items 5-8)
  {
    id: 'g8-1-c5',
    stage: 2,
    scenarioTitle: 'Classroom Air Quality & Student Focus',
    researchTopic: 'Indoor Ventilation in High Schools',
    claimTested: 'HEPA air filtration devices improve student exam concentration.',
    evidenceSnippet: '"A randomized double-blind trial across 40 sealed classrooms: half were fitted with active HEPA filters and half with identical placebo fans. Carbon dioxide and PM2.5 levels were logged continuously, showing a statistically significant 14% improvement in standardized reading recall in filtered rooms."',
    sourceContext: 'Journal of Environmental Psychology and Health.',
    correctTier: 'experimental',
    tierRank: 1,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is experimental evidence with a double-blind placebo control, demonstrating direct causal impact while eliminating psychological expectation bias.',
    pedagogicalTakeaway: 'Double-blind controlled trials sit at the highest tier of empirical rigor because they eliminate confounding variables.'
  },
  {
    id: 'g8-1-c6',
    stage: 2,
    scenarioTitle: 'Electric Scooter Commuting Habits',
    researchTopic: 'Urban Micro-Mobility in Jakarta',
    claimTested: 'Electric scooters reduce average first-mile commuting time to MRT stations.',
    evidenceSnippet: '"A municipal transit survey analyzed 12,500 tapped electronic smartcard trips over 6 months, recording an average first-mile connection time reduction from 19 minutes on foot to 7 minutes on shared e-scooters."',
    sourceContext: 'Jakarta Transportation Agency (Dishub) Mobility Open Data Archive.',
    correctTier: 'statistical',
    tierRank: 2,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is statistical evidence. It uses large-scale telemetry data from 12,500 trips to measure real-world travel patterns across a major transit corridor.',
    pedagogicalTakeaway: 'Large-scale empirical datasets capture macro trends across broad populations.'
  },
  {
    id: 'g8-1-c7',
    stage: 2,
    scenarioTitle: 'Herbal Cold Remedy Endorsement',
    researchTopic: 'Efficacy of Herbal Medicines',
    claimTested: 'Drinking raw ginger extract cures bacterial throat infections within 24 hours.',
    evidenceSnippet: '"An Olympic badminton gold medalist posted on social media: Whenever I feel a scratchy throat before a tournament, I drink two cups of raw ginger tea and my pain disappears by morning!"',
    sourceContext: 'Instagram influencer video post with 800,000 likes.',
    correctTier: 'anecdotal',
    tierRank: 4,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is anecdotal evidence. Although the speaker is a famous athlete, athletic skill does not confer medical authority, and a single self-reported recovery cannot prove bacterial cure.',
    pedagogicalTakeaway: 'Celebrity status and high follower counts do not transform an isolated story into valid scientific proof.'
  },
  {
    id: 'g8-1-c8',
    stage: 2,
    scenarioTitle: 'Macroeconomic Inflation Forecasts',
    researchTopic: 'Food Price Inflation in Southeast Asia',
    claimTested: 'Global fertilizer shipping disruptions will increase domestic rice production costs next quarter.',
    evidenceSnippet: '"The Chief Economist of the World Bank Indonesia Mission, specializing in agricultural commodities, published an assessment forecasting a 6% to 9% increase in farm-gate input expenses based on global supply chain tracking."',
    sourceContext: 'World Bank Indonesia Economic Prospects Report.',
    correctTier: 'expert',
    tierRank: 3,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is expert testimony. The economist is a trained institutional specialist providing an analytical interpretation of global commodity trends.',
    pedagogicalTakeaway: 'Expert testimony synthesizes complex indicators to explain systemic trends that raw data alone cannot illuminate.'
  },

  // STAGE 3: PUBLIC POLICY EVIDENCE WEIGHING (Items 9-11)
  {
    id: 'g8-1-c9',
    stage: 3,
    scenarioTitle: 'Motorcycle Helmet Law Enforcement',
    researchTopic: 'Urban Road Safety Regulations',
    claimTested: 'Standardized helmet enforcement saves human lives.',
    evidenceSnippet: '"A citizen at a public hearing testified: I know a guy who survived a crash without a helmet, and another guy who wore a helmet and broke his collarbone anyway. Therefore helmet mandates are useless government overreach."',
    sourceContext: 'Public town hall citizen testimony recorded in local council minutes.',
    correctTier: 'anecdotal',
    tierRank: 4,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is anecdotal evidence. The speaker is relying on vivid personal stories (the Anecdotal Fallacy) to dismiss comprehensive traffic safety data that proves helmets reduce fatal head trauma by over 70%.',
    pedagogicalTakeaway: 'Never allow vivid personal exceptions to overturn massive epidemiological and safety evidence.'
  },
  {
    id: 'g8-1-c10',
    stage: 3,
    scenarioTitle: 'Mangrove Reforestation Survival Rates',
    researchTopic: 'Coastal Storm Surge Protection',
    claimTested: 'Rhizophora seedlings planted in bamboo clusters survive coastal wave action better than individual seed dispersal.',
    evidenceSnippet: '"Marine scientists divided a 2-kilometer shoreline into 10 alternating test plots. Five plots used bamboo clusters and five used solitary plantings. After 12 months of monitoring with tide gauges and salinity sensors, cluster seedlings showed an 82% survival rate compared to 31% for solitary plants."',
    sourceContext: 'Journal of Coastal Management and Ecological Engineering.',
    correctTier: 'experimental',
    tierRank: 1,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is experimental evidence. It deployed a controlled comparative layout with randomized alternating plots and calibrated sensors, directly proving the planting method caused the survival difference.',
    pedagogicalTakeaway: 'Rigorous comparative field experiments prove the causal efficacy of environmental interventions.'
  },
  {
    id: 'g8-1-c11',
    stage: 3,
    scenarioTitle: 'Youth Literacy Rates across Archipelagic Regions',
    researchTopic: 'Educational Resource Equity in Remote Islands',
    claimTested: 'Mobile boat libraries significantly raise book completion rates in outer island schools.',
    evidenceSnippet: '"Ministry of Education standardized reading logs tracking 8,400 students across 42 island communities recorded an increase from 1.2 books per student annually to 6.8 books per student after 12 months of scheduled boat library visits."',
    sourceContext: 'Ministry of Education and Culture National Literacy Benchmark Report.',
    correctTier: 'statistical',
    tierRank: 2,
    options: EVIDENCE_TIER_OPTIONS,
    explanation: 'This is statistical evidence. It tracks a large representative cohort of 8,400 students across 42 island communities with measurable literacy metrics.',
    pedagogicalTakeaway: 'Broad population measurements provide reliable evidence for justifying national educational policies.'
  }
];

// ============================================================================
// GAME 2: CRAAP & SIFT FACT-CHECKER (g8-2)
// ============================================================================

export type VerificationTool = 'currency' | 'relevance' | 'authority' | 'accuracy' | 'purpose' | 'sift_stop' | 'sift_investigate' | 'sift_find_better' | 'sift_trace';

export interface CraapSiftItem {
  id: string;
  stage: 1 | 2 | 3;
  headline: string;
  sourceOrigin: string;
  snippet: string;
  flawOrChallenge: string;
  correctAuditType: 'CRAAP' | 'SIFT';
  bestMove: string;
  options: {
    id: string;
    label: string;
    description: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  lateralReadingTip: string;
}

export const G8_2_CHALLENGES: CraapSiftItem[] = [
  // STAGE 1: CRAAP AUDIT OF ACADEMIC & ONLINE SOURCES (Items 1-4)
  {
    id: 'g8-2-c1',
    stage: 1,
    headline: 'Miracle Herbal Capsule Cures Diabetes in 48 Hours',
    sourceOrigin: 'www.naturalcure-miraclehealth99.com',
    snippet: 'Article claims a secret Amazonian berry completely reverses diabetes without insulin. At the bottom of the page is a blinking red button: "ORDER 3 BOTTLES TODAY FOR 50% DISCOUNT!" No medical citations or clinic trials are listed.',
    flawOrChallenge: 'Commercial conflict of interest disguised as scientific discovery.',
    correctAuditType: 'CRAAP',
    bestMove: 'Purpose (and Authority) Failure: The website exists to sell a commercial product for profit, not to provide objective medical information.',
    options: [
      {
        id: 'opt-a',
        label: 'Flag Purpose: Commercial marketing scam designed for profit',
        description: 'The site has a massive financial incentive to make exaggerated claims to sell supplements.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Flag Currency: The berry was discovered long ago',
        description: 'The main issue is that berries are an ancient food source.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Accept Source: Discount button proves customer appreciation',
        description: 'The seller is offering affordable medicine to help society.',
        isCorrect: false
      }
    ],
    explanation: 'Under CRAAP, Purpose evaluates why the information was created. When a site exists to sell pills, its claims are compromised by financial conflict of interest and lack of clinical accuracy.',
    lateralReadingTip: 'Always check if the publisher is trying to sell you something before citing health claims.'
  },
  {
    id: 'g8-2-c2',
    stage: 1,
    headline: 'Indonesian High-Speed Rail Safety Report',
    sourceOrigin: 'Student blog post written in 2012',
    snippet: 'A student researcher writing in 2024 cites a 2012 blog arguing that high-speed rail is technically impossible across Java due to volcanic soil instability.',
    flawOrChallenge: 'Outdated information published before the Whoosh high-speed rail was constructed and tested.',
    correctAuditType: 'CRAAP',
    bestMove: 'Currency Failure: The source was published in 2012, more than a decade before actual high-speed rail engineering was deployed.',
    options: [
      {
        id: 'opt-a',
        label: 'Flag Currency: The data is 12 years out of date and overtaken by reality',
        description: 'Engineering and operational realities changed completely with the 2023 train launch.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Flag Relevance: Trains have nothing to do with transportation',
        description: 'High-speed rail is irrelevant to geography.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Accept Source: 2012 was a great year for blogging',
        description: 'Historical student opinions are always trustworthy.',
        isCorrect: false
      }
    ],
    explanation: 'Under CRAAP, Currency checks when the information was written or updated. In rapidly advancing technological and infrastructure fields, 12-year-old speculation is obsolete.',
    lateralReadingTip: 'Fast-moving topics require recent, updated sources from the last 2 to 3 years.'
  },
  {
    id: 'g8-2-c3',
    stage: 1,
    headline: 'Artificial Intelligence in Radiology Diagnostics',
    sourceOrigin: 'Signed article by "TechLover_Budi" on an anonymous gaming forum',
    snippet: 'The post claims AI algorithms currently misdiagnose 95% of lung X-rays. The author bio lists no medical degree, no data science affiliation, and no hospital employment.',
    flawOrChallenge: 'Anonymous author without domain credentials or peer review.',
    correctAuditType: 'CRAAP',
    bestMove: 'Authority Failure: The author lacks recognized institutional credentials or clinical expertise in radiology.',
    options: [
      {
        id: 'opt-a',
        label: 'Flag Authority: Author lacks credentials, institutional affiliation, or medical expertise',
        description: 'Anonymous forum posters cannot substitute for certified radiologists or peer-reviewed journals.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Flag Relevance: Radiologists do not use computers',
        description: 'Hospitals only use paper charts.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Accept Source: Gamers understand graphics processing units best',
        description: 'Gaming experience gives deep medical insight.',
        isCorrect: false
      }
    ],
    explanation: 'Under CRAAP, Authority verifies who created the content and what qualifies them to speak on the topic. Medical diagnostic accuracy requires credentialed researchers.',
    lateralReadingTip: 'Check the author’s institutional affiliation and peer-reviewed track record.'
  },
  {
    id: 'g8-2-c4',
    stage: 1,
    headline: 'Global Ocean Microplastics Density Survey',
    sourceOrigin: 'United Nations Environment Programme (UNEP) Technical Report (2023)',
    snippet: 'Report includes full methodology, peer-reviewed sampling across 12,000 oceanic water columns, detailed statistical confidence intervals, and open-access raw dataset downloads.',
    flawOrChallenge: 'High-credibility academic reference passing all CRAAP criteria.',
    correctAuditType: 'CRAAP',
    bestMove: 'Fully Pass CRAAP: Excellent Currency (2023), High Authority (UNEP scientific panel), Clear Accuracy (open data & peer review), and Educational Purpose.',
    options: [
      {
        id: 'opt-a',
        label: 'Pass All CRAAP Filters: Trustworthy intergovernmental scientific report',
        description: 'Recent publication, verified expert body, transparent methodology, and non-commercial educational purpose.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Reject Source: Too many numbers make it hard to read',
        description: 'Research should only contain words, never data tables.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Reject Source: United Nations is too large an organization',
        description: 'Global organizations are less reliable than anonymous social media.',
        isCorrect: false
      }
    ],
    explanation: 'This report passes all five CRAAP filters: Current (2023), Relevant to marine ecology, Authoritative (UNEP scientists), Accurate (open methodology), and Purposeful (public scientific education).',
    lateralReadingTip: 'Intergovernmental and peer-reviewed reports with transparent methodology provide gold-standard citations.'
  },

  // STAGE 2: SIFT DIGITAL FACT-CHECKING MOVES (Items 5-8)
  {
    id: 'g8-2-c5',
    stage: 2,
    headline: 'Breaking: Tsunami Wave Floods Coastal Bali Tourists',
    sourceOrigin: 'Viral TikTok video with 2.4 million views in 30 minutes',
    snippet: 'Dramatic video shows massive sea waves crashing into beachside cafes with screaming tourists. Captions claim: "Just happened in Kuta 15 minutes ago, run for your lives!" You feel sudden panic.',
    flawOrChallenge: 'Extreme emotional reaction triggered by unverified breaking social media video.',
    correctAuditType: 'SIFT',
    bestMove: 'S — STOP: Do not share or panic! Pause immediately and recognize that disinformation uses shock to trigger viral forwarding.',
    options: [
      {
        id: 'opt-a',
        label: 'S — STOP: Pause your emotional reaction and refrain from sharing immediately',
        description: 'Recognize strong emotion (fear/panic) as a primary signal to halt and verify before sharing.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Forward instantly to all school WhatsApp groups as a safety warning',
        description: 'Spreading emergency warnings without verification is helpful.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Leave a comment asking the creator if the wave was cold',
        description: 'Engaging with viral posts improves fact checking.',
        isCorrect: false
      }
    ],
    explanation: 'The first move in SIFT is S (STOP). When social media content triggers intense fear or anger, viral creators count on you forwarding before thinking. Pausing prevents panic.',
    lateralReadingTip: 'The stronger the emotional hook, the greater the need to Stop before sharing.'
  },
  {
    id: 'g8-2-c6',
    stage: 2,
    headline: 'Research Group Claims Coal Energy is 100% Eco-Friendly',
    sourceOrigin: 'www.clean-air-energy-initiative.org',
    snippet: 'The website has a professional minimalist design, pictures of green trees, and claims to be an independent non-profit foundation. The "About Us" page claims they love nature.',
    flawOrChallenge: 'Slick front group website hiding its corporate funding.',
    correctAuditType: 'SIFT',
    bestMove: 'I — INVESTIGATE the Source: Open a new tab and search what independent third parties say about who funds this foundation.',
    options: [
      {
        id: 'opt-a',
        label: 'I — INVESTIGATE: Read laterally in new tabs to discover who funds the organization',
        description: 'Search Wikipedia, news articles, and corporate disclosures to reveal hidden fossil fuel lobby sponsors.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Trust the website because the "About Us" page features pictures of green leaves',
        description: 'The pictures prove they care about the environment.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Scroll down to the bottom of the page to check the font type',
        description: 'Clean fonts indicate honest scientific research.',
        isCorrect: false
      }
    ],
    explanation: 'SIFT move I (Investigate the source) requires Lateral Reading. Amateur readers stay on the page (Vertical Reading); professional fact-checkers leave the site immediately to see what outside sources say about its funding.',
    lateralReadingTip: 'Never trust what a website claims about itself on its own "About Us" page.'
  },
  {
    id: 'g8-2-c7',
    stage: 2,
    headline: 'Cabinet Minister Resigns in Secret Scandal',
    sourceOrigin: 'Sensationalist blog: www.jakarta-breaking-insider-news.xyz',
    snippet: 'A sensational blog reports that the Minister of Finance resigned at midnight after an emergency meeting. No other mainstream news service mentions the resignation.',
    flawOrChallenge: 'Single sensational claim absent from all established news channels.',
    correctAuditType: 'SIFT',
    bestMove: 'F — FIND Trusted Coverage: Check if verified news agencies (Antara, Kompas, Tempo, BBC Indonesia) are reporting this event.',
    options: [
      {
        id: 'opt-a',
        label: 'F — FIND Trusted Coverage: Check if reputable national news agencies report the same story',
        description: 'A genuine cabinet resignation would be headline news across every credible national outlet.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Assume all major news outlets are hiding the truth and trust the blog',
        description: 'Secret blogs always know more than certified journalists.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Republish the article on your Instagram story with the title "Exposed!"',
        description: 'Publishing first makes your account look well-informed.',
        isCorrect: false
      }
    ],
    explanation: 'SIFT move F (Find trusted coverage) tests consensus. Major historical and political events cannot remain secret; if no recognized national news bureau reports it, the story is almost certainly fabricated.',
    lateralReadingTip: 'If a massive breaking story exists on only one obscure blog, treat it as unverified hearsay.'
  },
  {
    id: 'g8-2-c8',
    stage: 2,
    headline: 'Viral Video of Mayor Shouting at City Council',
    sourceOrigin: 'X (formerly Twitter) clip shared by an anonymous political account',
    snippet: 'A 15-second video shows the city governor shouting angrily: "I will shut down all traditional street food stalls immediately!" The clip cuts off abruptly right after that sentence.',
    flawOrChallenge: 'Decontextualized out-of-context video clip weaponized for political outrage.',
    correctAuditType: 'SIFT',
    bestMove: 'T — TRACE Claims & Media to Original Context: Find the full unedited town hall livestream to hear the complete sentence.',
    options: [
      {
        id: 'opt-a',
        label: 'T — TRACE: Locate the original full broadcast to verify the complete statement and context',
        description: 'The full video reveals the governor was quoting a reckless proposal before arguing against it.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Assume 15 seconds is plenty of time to judge a human being’s policy',
        description: 'Short video clips never hide important context.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Edit dramatic drum beats into the audio to make it go even more viral',
        description: 'Drama improves public political discourse.',
        isCorrect: false
      }
    ],
    explanation: 'SIFT move T (Trace claims, quotes, and media) finds the original source. Out-of-context snippets frequently reverse a speaker’s true meaning (e.g. cutting off "...is what bad leaders do!").',
    lateralReadingTip: 'Trace viral clips back to the full unedited recording before drawing conclusions.'
  },

  // STAGE 3: COMPLEX DIGITAL DISINFORMATION & AI HALLUCINATIONS (Items 9-11)
  {
    id: 'g8-2-c9',
    stage: 3,
    headline: 'AI Chatbot Generates Perfect Research Bibliography',
    sourceOrigin: 'Generative AI Prompt Output',
    snippet: 'An AI assistant generates 5 academic citations: "Suryanto, A. (2022). Microplastics in Ciliwung River. Journal of Indonesian Hydrology, Vol 14, pp. 45–60." When searched on Google Scholar, this journal and article do not exist.',
    flawOrChallenge: 'Synthetic AI hallucination with convincing-looking fake academic formatting.',
    correctAuditType: 'SIFT',
    bestMove: 'T — TRACE Citation: Verify every AI-generated reference by locating the real PDF in verified academic indexes before citing.',
    options: [
      {
        id: 'opt-a',
        label: 'T — TRACE: Manually verify citations on Google Scholar or JSTOR before including in a bibliography',
        description: 'AI models frequently invent plausible-sounding titles, fake volume numbers, and fictitious authors.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Copy and paste the citation because the AI used formal APA format',
        description: 'Correct formatting proves the study was conducted.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Assume the study is legitimate if the journal title sounds prestigious and has volume numbers',
        description: 'Superficial formatting features can disguise completely fabricated citations.',
        isCorrect: false
      }
    ],
    explanation: 'Large language models produce probabilistic text that can include plausible-looking hallucinations. Researchers must trace every citation back to verified academic repositories.',
    lateralReadingTip: 'Never cite a source you have not held and read with your own eyes.'
  },
  {
    id: 'g8-2-c10',
    stage: 3,
    headline: 'Presidential Speech Video with Mismatched Blinking Artifacts',
    sourceOrigin: 'Viral messaging channel forwarding a deepfake video',
    snippet: 'A video shows the president announcing a nationwide school holiday next week. Closer inspection shows the speaker’s mouth borders blur unnaturally against the teeth, and the ears do not cast shadows.',
    flawOrChallenge: 'Generative AI deepfake / synthetic media manipulation.',
    correctAuditType: 'SIFT',
    bestMove: 'Lateral Verification: Check the official State Secretariat website (Kemensetneg) and national news press room for official decrees.',
    options: [
      {
        id: 'opt-a',
        label: 'Investigate official presidential channels and look for synthetic video artifacts',
        description: 'Confirming with official government press releases immediately exposes manipulated video hoaxes.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Assume the announcement is authentic because the voice tone sounds convincing',
        description: 'AI voice-cloning tools can replicate realistic vocal cadences in minutes.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Wait to see if peer group chats repost the clip before verifying official government bulletins',
        description: 'Relying on social chat consensus amplifies viral disinformation rather than confirming truth.',
        isCorrect: false
      }
    ],
    explanation: 'Synthetic deepfakes combine audio cloning and facial re-enactment. Verifying official government archives and looking for boundary rendering glitches protects against synthetic deception.',
    lateralReadingTip: 'Seeing is no longer believing. Always triangulate sensational audio/video with official press offices.'
  },
  {
    id: 'g8-2-c11',
    stage: 3,
    headline: 'Corporate-Sponsored Vaping Health "White Paper"',
    sourceOrigin: 'VapeHealthGlobalAlliance.com',
    snippet: 'A glossy 60-page downloadable PDF claims e-cigarettes have zero cardiovascular risks. Footnotes show all 4 study authors are full-time executives at an international tobacco conglomerate.',
    flawOrChallenge: 'Severe CRAAP Purpose conflict of interest and corporate funding bias.',
    correctAuditType: 'CRAAP',
    bestMove: 'CRAAP Purpose & Authority Rejection: Corporate executives publishing health claims about their own nicotine products violate academic independence.',
    options: [
      {
        id: 'opt-a',
        label: 'Reject for Purpose and Authority: Direct corporate financial conflict of interest',
        description: 'The authors have an overwhelming commercial motive to conceal health hazards to sell their company’s product.',
        isCorrect: true
      },
      {
        id: 'opt-b',
        label: 'Accept the paper because it is 60 pages long with nice charts',
        description: 'Long documents are automatically true.',
        isCorrect: false
      },
      {
        id: 'opt-c',
        label: 'Accept the findings because the authors cite medical terminology and provide footnotes',
        description: 'Formal academic rhetoric can easily conceal commercial bias and conflict of interest.',
        isCorrect: false
      }
    ],
    explanation: 'When authors have a financial stake in the outcome, their Purpose is marketing and regulatory lobbying, fatally compromising scientific objectivity and authority.',
    lateralReadingTip: 'Always check the funding disclosures and author affiliations at the end of white papers.'
  }
];

// ============================================================================
// GAME 3: FIELD OBSERVER PROTOCOL (g8-3)
// ============================================================================

export type FieldworkProtocolPhase = 'planning_consent' | 'sopan_santun' | 'data_ethics_reciprocity';

export interface FieldObserverItem {
  id: string;
  stage: 1 | 2 | 3;
  fieldScenario: string;
  locationContext: string;
  challengePrompt: string;
  protocolPhase: FieldworkProtocolPhase;
  bestAction: string;
  options: {
    id: string;
    actionText: string;
    isEthicalAndEffective: boolean;
    consequenceExplanation: string;
  }[];
  pedagogicalTakeaway: string;
}

export const G8_3_CHALLENGES: FieldObserverItem[] = [
  // STAGE 1: FOUNDATIONAL ETHICS & INFORMED CONSENT (Items 1-4)
  {
    id: 'g8-3-c1',
    stage: 1,
    fieldScenario: 'Grade 10 students researching plastic waste arrive at a traditional community market with cameras and clipboards.',
    locationContext: 'Pasar Tradisional, Bandung',
    challengePrompt: 'A team member wants to start secretly photographing vegetable vendors and their children dumping vegetable waste to get "raw, candid proof."',
    protocolPhase: 'planning_consent',
    bestAction: 'Approach vendors respectfully, introduce yourselves as student researchers, and obtain verbal or written informed consent before taking photographs.',
    options: [
      {
        id: 'act-a',
        actionText: 'Introduce yourselves, explain the school project, and ask for permission before photographing anyone',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Respects participant autonomy and privacy. Vendors are willing partners rather than exploited subjects.'
      },
      {
        id: 'act-b',
        actionText: 'Hide the camera behind a shopping bag and take candid photos without asking',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Violates research ethics, breaches personal privacy, and destroys community trust if discovered.'
      },
      {
        id: 'act-c',
        actionText: 'Offer 100,000 rupiah cash to vendor children to pose next to dirty trash piles',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Exploitative and creates staged, fabricated data that invalidates research integrity.'
      }
    ],
    pedagogicalTakeaway: 'Informed consent is the foundational cornerstone of ethical field research. Never photograph people without permission.'
  },
  {
    id: 'g8-3-c2',
    stage: 1,
    fieldScenario: 'Conducting interviews with primary school students near a public playground regarding their snack choices.',
    locationContext: 'Playground adjacent to SDN 04, Surabaya',
    challengePrompt: 'A student team approaches 8-year-old children playing alone and begins asking for their full names, home addresses, and daily pocket money.',
    protocolPhase: 'planning_consent',
    bestAction: 'Halt immediately. Minors cannot provide legal consent; permission must be secured from teachers, parents, or guardians, and home addresses should never be collected.',
    options: [
      {
        id: 'act-a',
        actionText: 'Halt the interview: secure parental/school permission first and keep all participant responses anonymous',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Protects vulnerable minors in accordance with child safeguarding laws and research ethics.'
      },
      {
        id: 'act-b',
        actionText: 'Continue asking for home addresses because precise maps make good graphs',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Severe violation of child safety ethics. Researchers should never collect private identifying data from minors.'
      },
      {
        id: 'act-c',
        actionText: 'Post the children’s pictures on Instagram asking followers what snacks they like',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Illegal and dangerous breach of child privacy on social media.'
      }
    ],
    pedagogicalTakeaway: 'Research involving children requires formal guardian permission and strict data anonymization.'
  },
  {
    id: 'g8-3-c3',
    stage: 1,
    fieldScenario: 'Interviewing informal waste-pickers (pemulung) at a municipal transfer station.',
    locationContext: 'TPS Kampung Melayu, East Jakarta',
    challengePrompt: 'The research team compiles raw notes recording names, national identity numbers (NIK), and daily income earnings for public publication in their school report.',
    protocolPhase: 'planning_consent',
    bestAction: 'Anonymize all data by removing NIKs and real names, using generic labels such as "Participant A" or "Collector 1" to protect privacy.',
    options: [
      {
        id: 'act-a',
        actionText: 'Anonymize participants using pseudonyms (e.g., "Participant A") and delete sensitive personal identifiers like NIK',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Prevents potential financial, social, or legal repercussions for vulnerable community members.'
      },
      {
        id: 'act-b',
        actionText: 'Publish full real names and national identity numbers in the report appendix',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Breaches confidentiality and exposes vulnerable participants to identity theft or harassment.'
      },
      {
        id: 'act-c',
        actionText: 'Make up fictional dialogue and attribute it to real people',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Gross academic dishonesty and falsification of evidence.'
      }
    ],
    pedagogicalTakeaway: 'Data anonymization protects vulnerable participants from stigmatization and privacy exposure.'
  },
  {
    id: 'g8-3-c4',
    stage: 1,
    fieldScenario: 'Observing public bus passenger boarding habits during morning rush hour.',
    locationContext: 'TransJakarta Bus Stop Harmoni',
    challengePrompt: 'A student researcher stands directly in the middle of the bus doorway with a large measuring tape and clipboard, blocking commuters from exiting.',
    protocolPhase: 'planning_consent',
    bestAction: 'Adopt non-intrusive observation: stand safely to the side where passengers can move naturally without obstruction.',
    options: [
      {
        id: 'act-a',
        actionText: 'Observe non-intrusively from a safe, designated waiting area without disrupting commuter flow',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Preserves natural public behavior while ensuring public transit safety.'
      },
      {
        id: 'act-b',
        actionText: 'Block the doors so commuters are forced to answer your quick questions',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Creates a safety hazard, angers commuters, and ruins observational neutrality.'
      },
      {
        id: 'act-c',
        actionText: 'Pull the emergency brake cord to stop the bus for a survey',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Dangerous criminal disruption of municipal public transit.'
      }
    ],
    pedagogicalTakeaway: 'Non-intrusive observation ensures that the researcher does not alter or obstruct the natural environment.'
  },

  // STAGE 2: INDONESIAN COMMUNITY GOVERNANCE & SOPAN SANTUN (Items 5-8)
  {
    id: 'g8-3-c5',
    stage: 2,
    fieldScenario: 'A student team plans a field survey on household composting in an urban residential neighborhood.',
    locationContext: 'Rukun Warga (RW) 07, Kebayoran Baru, Jakarta Selatan',
    challengePrompt: 'A teammate says: "Let’s just walk up to random houses and ring doorbells right now. We don’t need to tell the neighborhood head (Ketua RT / RW).',
    protocolPhase: 'sopan_santun',
    bestAction: 'Conduct a formal "Sowan ke Pak RT/RW": visit the neighborhood leader first with a school permission letter, polite attire, and clear project goals.',
    options: [
      {
        id: 'act-a',
        actionText: 'Sowan ke Pak RT/RW: present your school permission letter and seek formal neighborhood approval first',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Honors Indonesian communal governance, builds community goodwill, and ensures safety for student fieldworkers.'
      },
      {
        id: 'act-b',
        actionText: 'Sneak into alleys quietly and climb over fences to inspect compost bins',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Illegal trespassing that risks security confrontation and community alarm.'
      },
      {
        id: 'act-c',
        actionText: 'Send a message on TikTok to the city governor instead of speaking to the RT head',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Ignores local community administration and fails to secure practical fieldwork permission.'
      }
    ],
    pedagogicalTakeaway: 'Visiting neighborhood leaders (Sowan ke Pak RT/RW) is an essential Indonesian cultural protocol for safe, authorized field research.'
  },
  {
    id: 'g8-3-c6',
    stage: 2,
    fieldScenario: 'Fieldwork timing in a traditional residential area during late Friday afternoon.',
    locationContext: 'Kelurahan Sukajadi, Bandung',
    challengePrompt: 'The clock shows 5:45 PM (approaching Maghrib prayer call). A teammate wants to ring doorbells and conduct a 30-minute household survey.',
    protocolPhase: 'sopan_santun',
    bestAction: 'Respect local religious and communal rhythms: pause fieldwork before Maghrib prayer and resume during appropriate daytime community hours.',
    options: [
      {
        id: 'act-a',
        actionText: 'Pause fieldwork before Maghrib prayer out of respect for family and spiritual worship times',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Demonstrates cultural sensitivity (sopan santun) and prevents causing community resentment.'
      },
      {
        id: 'act-b',
        actionText: 'Knock louder during the prayer call because families are sure to be inside the house',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Deeply disrespectful to local sacred traditions and guarantees uncooperative responses.'
      },
      {
        id: 'act-c',
        actionText: 'Complain publicly that religious traditions are delaying your school assignment',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Arrogant attitude that alienates research participants and damages school reputation.'
      }
    ],
    pedagogicalTakeaway: 'Respecting prayer times and family dinner hours is fundamental to culturally responsive field methodology.'
  },
  {
    id: 'g8-3-c7',
    stage: 2,
    fieldScenario: 'Team dress code and verbal etiquette when visiting elderly community leaders.',
    locationContext: 'Home office of Ketua RW 04, Sleman, D.I. Yogyakarta',
    challengePrompt: 'A student wears flip-flops and gym shorts, sits slouched with feet on a chair, and addresses the 65-year-old RT head casually as "Bro".',
    protocolPhase: 'sopan_santun',
    bestAction: 'Adhere to Sopan Santun: wear neat school uniform or modest clothing, sit respectfully, and use proper honorifics ("Bapak", "Ibu").',
    options: [
      {
        id: 'act-a',
        actionText: 'Wear neat attire (school uniform/modest dress) and address the elder respectfully as "Bapak"',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Upholds cultural dignity, conveys student professionalism, and earns genuine community support.'
      },
      {
        id: 'act-b',
        actionText: 'Argue that casual slang makes you appear modern and international',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Perceived as impolite and arrogant, shutting down cooperation with neighborhood leadership.'
      },
      {
        id: 'act-c',
        actionText: 'Wear sunglasses indoors and refuse to drink the tea offered by the host',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Refusing basic hospitality insults local hosts in Indonesian cultural contexts.'
      }
    ],
    pedagogicalTakeaway: 'Cultural respect (sopan santun) in language, modest attire, and accepting hospitality establishes mutual trust.'
  },
  {
    id: 'g8-3-c8',
    stage: 2,
    fieldScenario: 'Handling a resident who declines to participate in an urban drainage survey.',
    locationContext: 'Kompleks Perumahan, Medan',
    challengePrompt: 'A homeowner opens the door, listens to the student project introduction, and politely says: "Maaf dek, saya lagi repot sekali, tidak bisa ya."',
    protocolPhase: 'sopan_santun',
    bestAction: 'Accept refusal gracefully: thank the resident warmly for their time with a smile and move on without pressure.',
    options: [
      {
        id: 'act-a',
        actionText: 'Smile, thank the homeowner politely for their time, and depart without pressuring them',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Respects participant autonomy and maintains positive community relations.'
      },
      {
        id: 'act-b',
        actionText: 'Block their door and insist they must answer because Cambridge Global Perspectives is important',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Coercive and harassing behavior that violates research ethics.'
      },
      {
        id: 'act-c',
        actionText: 'Leave a negative review of their house on Google Maps',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Immature retaliation that damages academic credibility.'
      }
    ],
    pedagogicalTakeaway: 'Voluntary participation means anyone may decline at any time. Respectful withdrawal is mandatory.'
  },

  // STAGE 3: CRISIS MANAGEMENT, RECIPROCITY & THE LOCAL-TO-GLOBAL BRIDGE (Items 9-11)
  {
    id: 'g8-3-c9',
    stage: 3,
    fieldScenario: 'After 3 weeks of research in an urban community, the student report is finished and graded.',
    locationContext: 'Kampung Kota RW 05, Semarang',
    challengePrompt: 'The team receives high marks from their teacher. A teammate says: "Great, we got an A! We never have to think about that neighborhood again."',
    protocolPhase: 'data_ethics_reciprocity',
    bestAction: 'Practice Gotong Royong Reciprocity: return to the community, present a summary poster to Pak RT/RW, and share actionable findings to benefit the neighborhood.',
    options: [
      {
        id: 'act-a',
        actionText: 'Return to Pak RT and present an infographic summary of your findings to help local cleanup efforts',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Enacts Gotong Royong reciprocity so the community actively benefits from hosting student research.'
      },
      {
        id: 'act-b',
        actionText: 'File the graded report in your personal school portfolio and consider fieldwork completed',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Treats community residents like passive test subjects rather than human partners, failing the principle of research reciprocity.'
      },
      {
        id: 'act-c',
        actionText: 'Post excerpts on social media without delivering an accessible summary to the neighborhood leadership',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Bypasses local community leaders who granted research permission, missing the opportunity for collaborative community improvement.'
      }
    ],
    pedagogicalTakeaway: 'Gotong Royong reciprocity requires researchers to share findings back with the community that assisted them.'
  },
  {
    id: 'g8-3-c10',
    stage: 3,
    fieldScenario: 'During field observation of a local drainage canal, students discover dangerous illegal toxic chemical dumping from an adjacent factory.',
    locationContext: 'Industrial canal border, Bekasi',
    challengePrompt: 'Students see dark blue liquid and dead fish. A teammate says: "Let’s jump into the canal to scoop up samples with bare hands!"',
    protocolPhase: 'data_ethics_reciprocity',
    bestAction: 'Prioritize physical safety: never touch hazardous materials; document safely from a distance and notify school supervisors and environmental authorities.',
    options: [
      {
        id: 'act-a',
        actionText: 'Maintain physical safety: photograph safely from a distance and alert teachers and environmental officials',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Protects student physical safety while reporting environmental hazards through proper civic channels.'
      },
      {
        id: 'act-b',
        actionText: 'Jump into the toxic chemical runoff to collect water in an unsealed water bottle',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Dangerous health hazard risking chemical burns and poisoning.'
      },
      {
        id: 'act-c',
        actionText: 'Attempt to collect water samples using unwashed plastic cups to test with a home aquarium kit',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Exposes students to toxic contact while using uncalibrated home tools that produce unreliable scientific data.'
      }
    ],
    pedagogicalTakeaway: 'Physical safety is always paramount. Student researchers must never put themselves at physical risk.'
  },
  {
    id: 'g8-3-c11',
    stage: 3,
    fieldScenario: 'Synthesizing local observations of single-use plastic bag litter in a neighborhood canal into a Global Perspectives report.',
    locationContext: 'Connecting RT 03 observation to macro policies',
    challengePrompt: 'The student wants to write: "People in RT 03 are lazy, and that is the only reason the canal is dirty."',
    protocolPhase: 'data_ethics_reciprocity',
    bestAction: 'Build the Local-to-Global Bridge: connect the local observation to municipal collection infrastructure (National) and international plastic production treaties (Global / SDG 14).',
    options: [
      {
        id: 'act-a',
        actionText: 'Build the Micro-to-Macro Bridge: link local littering to municipal waste collection and global plastic production treaties',
        isEthicalAndEffective: true,
        consequenceExplanation: 'Demonstrates high-level Cambridge Global Perspectives synthesis by analyzing root causes across multiple scales.'
      },
      {
        id: 'act-b',
        actionText: 'Blame individual residents solely and ignore municipal and industrial waste systems',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Simplistic and shallow analysis that ignores systemic infrastructure factors.'
      },
      {
        id: 'act-c',
        actionText: 'Delete the local canal observations and only write about Europe',
        isEthicalAndEffective: false,
        consequenceExplanation: 'Discards valuable primary empirical evidence gathered in the field.'
      }
    ],
    pedagogicalTakeaway: 'Great research links local observations back to national policies and global systemic trends.'
  }
];
