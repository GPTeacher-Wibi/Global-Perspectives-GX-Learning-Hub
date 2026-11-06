import fs from 'fs';

const g43Replacement = `export const G4_3_CHALLENGES: CrossStudyControversyItem[] = [
  // STAGE 1: SPOTTING METHODOLOGICAL TRIANGULATION (4 items)
  {
    id: 'g4-3-s1-q1',
    stage: 1,
    title: 'Triangulation 1: Infant Formula vs. Breastfeeding Health Outcomes',
    controversyTopic: 'Evaluating infant nutrition and infection rates in low-income peri-urban settlements.',
    studyA: {
      source: 'Study 1 (Controlled Hospital Trial in Jakarta)',
      finding: 'Reported zero statistically significant difference in 6-month infant respiratory infection rates between formula and breast milk.',
      method: 'Controlled trial where researchers supplied sterile distilled water and sterilized bottles.'
    },
    studyB: {
      source: 'Study 2 (Community Fieldwork Survey in Slum Settlements)',
      finding: 'Infants fed commercial formula suffered 3.8 times higher rates of chronic diarrheal disease and infant hospitalization.',
      method: 'Field observational survey of 450 informal household mothers.'
    },
    taskPrompt: 'How does Methodological Triangulation resolve this sharp apparent contradiction between the hospital trial and community survey?',
    options: [
      {
        id: 'opt-1a',
        text: 'Formula milk powder contains synthetic vitamins and minerals manufactured in regulated dairy facilities.',
        isCorrect: false,
        feedback: 'Incorrect. Dairy manufacturing is factual, but does not explain the field vs trial divergence.'
      },
      {
        id: 'opt-1b',
        text: 'Household water sanitation and maternal income confound formula safety, explaining divergent health outcomes.',
        isCorrect: true,
        feedback: 'Correct! Triangulation exposes that the hospital controlled water sterility, while slum households lacked clean boiling water.'
      },
      {
        id: 'opt-1c',
        text: 'Infant pediatric biology functions identically across all tropical and temperate geographical territories.',
        isCorrect: false,
        feedback: 'Incorrect. Biological universals do not explain the localized contaminated water mechanism.'
      }
    ],
    synthesisResolution: 'Commercial infant formula is nutritionally adequate under sterile preparation, but creates severe mortality risks in impoverished settlements lacking clean tap water and fuel to boil bottles.',
    pedagogicalKey: 'Triangulation reconciles conflicting findings by examining environmental and socioeconomic delivery contexts.'
  },
  {
    id: 'g4-3-s1-q2',
    stage: 1,
    title: 'Triangulation 2: Ocean Microplastics Toxicity in Pelagic Fish',
    controversyTopic: 'Synthesizing marine plastic accumulation and biological toxicity.',
    studyA: {
      source: 'Study A (North Sea Field Sampling)',
      finding: '88% of sampled wild mackerel contained synthetic microplastic fibers in their digestive gastrointestinal tracts.',
      method: 'Necropsy and chemical FTIR spectroscopy.'
    },
    studyB: {
      source: 'Study B (Controlled Aquarium Toxicology)',
      finding: 'Fish exposed to environmentally realistic concentrations of microplastics for 30 days showed zero cellular organ failure or mortality.',
      method: 'Controlled aquatic laboratory exposure.'
    },
    taskPrompt: 'What underlying variable reconciles the physical presence of plastics with the lack of immediate acute toxicity?',
    options: [
      {
        id: 'opt-2a',
        text: 'Marine fish ingest floating pelagic food particles through standard gill filtration and feeding behaviors.',
        isCorrect: false,
        feedback: 'Incorrect. Ingestion mechanics are normal, but do not resolve the toxicological timescale question.'
      },
      {
        id: 'opt-2b',
        text: 'Northern marine bodies experience seasonal storm surges and variable water salinity across coastal shelves.',
        isCorrect: false,
        feedback: 'Incorrect. Physical oceanography does not address cellular toxicity latency.'
      },
      {
        id: 'opt-2c',
        text: 'Synthesize across timelines: physical particle ingestion occurs immediately, but toxic harm requires decades.',
        isCorrect: true,
        feedback: 'Correct! Acute short-term exposure causes no organ death, but chronic lifetime bioaccumulation causes sub-lethal reproductive damage.'
      }
    ],
    synthesisResolution: 'Microplastics are physically ingested at high rates, but toxicity is chronic and cumulative rather than acute; 30-day trials fail to capture lifetime bioaccumulation risks.',
    pedagogicalKey: 'Reconcile contradictions by investigating timescale differences (acute short-term trials vs chronic lifetime exposure).'
  },
  {
    id: 'g4-3-s1-q3',
    stage: 1,
    title: 'Triangulation 3: Off-Grid Island Solar Electrification',
    controversyTopic: 'Evaluating decentralized solar panels for off-grid island electrification.',
    studyA: {
      source: 'Study A (Social Welfare Survey)',
      finding: '94% of households reported high satisfaction, extended evening study hours for children, and reduced kerosene lamp smoke.',
      method: 'Household qualitative interviews.'
    },
    studyB: {
      source: 'Study B (Regional Econometric Audit)',
      finding: 'Village-level economic GDP, formal business creation, and industrial manufacturing remained completely flat (0.1% change).',
      method: 'Econometric tax and trade census.'
    },
    taskPrompt: 'What crucial insight does Methodological Triangulation reveal here?',
    options: [
      {
        id: 'opt-3a',
        text: 'Threshold capacity mismatch: home solar powers lighting, but industrial job growth requires heavy mini-grids.',
        isCorrect: true,
        feedback: 'Correct! Triangulation demonstrates that domestic welfare benefits and commercial productive capacity have very different power thresholds.'
      },
      {
        id: 'opt-3b',
        text: 'Photovoltaic solar panels convert solar radiation into direct electrical current using semiconductor silicon.',
        isCorrect: false,
        feedback: 'Incorrect. Physics principles do not explain the disconnect between home welfare and industrial GDP.'
      },
      {
        id: 'opt-3c',
        text: 'Remote island communities purchase household electronic appliances from regional coastal wholesale markets.',
        isCorrect: false,
        feedback: 'Incorrect. Commercial purchasing habits do not explain the power-capacity threshold gap.'
      }
    ],
    synthesisResolution: 'Decentralized solar home kits achieve high technical reliability for lighting, but productive economic transformation requires larger mini-grids capable of powering agricultural machinery.',
    pedagogicalKey: 'Methodological triangulation separates domestic household quality-of-life gains from macro-economic productive capacity.'
  },
  {
    id: 'g4-3-s1-q4',
    stage: 1,
    title: 'Triangulation 4: Banning Single-Use Plastic Straws',
    controversyTopic: 'Measuring the environmental and social impact of eliminating plastic straws.',
    studyA: {
      source: 'Study A (Municipal Waste Reduction Report)',
      finding: 'Banning plastic straws eliminated 14 tons of non-biodegradable waste from coastal drainage canals in one year.',
      method: 'Municipal landfill and beach cleanup audits.'
    },
    studyB: {
      source: 'Study B (Disability Advocacy Survey)',
      finding: 'Banning plastic straws created severe choking risks and dehydration for patients with quadriplegia and motor neurone diseases who cannot use paper or metal straws.',
      method: 'Clinical occupational therapy surveys.'
    },
    taskPrompt: 'How does an authentic Global Perspectives synthesis navigate this conflict between environmental reform and disability access?',
    options: [
      {
        id: 'opt-4a',
        text: 'Polypropylene plastic drinking straws float on ocean surface currents and take centuries to biodegrade.',
        isCorrect: false,
        feedback: 'Incorrect. Polymer degradation facts do not resolve human disability accessibility needs.'
      },
      {
        id: 'opt-4b',
        text: 'Synthesized policy pairing: general retail bans combined with guaranteed medical dispensations for disability.',
        isCorrect: true,
        feedback: 'Correct! Master synthesis pairs environmental restrictions with medical exemptions, protecting both the planet and vulnerable people.'
      },
      {
        id: 'opt-4c',
        text: 'Food beverage restaurants operate commercial cash registers and serve carbonated soft drinks to customers.',
        isCorrect: false,
        feedback: 'Incorrect. Business operations do not solve the ethical and policy tension.'
      }
    ],
    synthesisResolution: 'A synthesized policy pairs general environmental restrictions with explicit medical accessibility exemptions, ensuring ecological progress does not harm disabled citizens.',
    pedagogicalKey: 'Synthesis balances competing ethical imperatives by creating nuanced exemptions rather than crude zero-sum bans.'
  },

  // STAGE 2: DIAGNOSING EMPIRICAL HETEROGENEITY (4 items)
  {
    id: 'g4-3-s2-q1',
    stage: 2,
    title: 'Heterogeneity 1: Green Tea on Blood Pressure',
    controversyTopic: 'Two studies test whether drinking green tea lowers blood pressure.',
    studyA: {
      source: 'Study 1 (Healthy College Athletes, Ages 18–22)',
      finding: 'Found zero significant change in blood pressure after 8 weeks of daily green tea.',
      method: 'Double-blind RCT.'
    },
    studyB: {
      source: 'Study 2 (Hypertensive Adults, Ages 55–75)',
      finding: 'Observed a significant 7.2 mmHg reduction in systolic blood pressure after 8 weeks.',
      method: 'Double-blind RCT.'
    },
    taskPrompt: 'What is the primary source of heterogeneity explaining why Study 1 found no effect while Study 2 found significant benefits?',
    options: [
      {
        id: 'opt-1a',
        text: 'Green tea leaves contain polyphenols and natural plant antioxidants harvested from Camellia sinensis bushes.',
        isCorrect: false,
        feedback: 'Incorrect. Botanical chemistry does not explain age and health differences.'
      },
      {
        id: 'opt-1b',
        text: 'Cardiovascular systolic blood pressure is measured in millimeters of mercury using clinical pressure cuffs.',
        isCorrect: false,
        feedback: 'Incorrect. Measurement units do not explain the clinical baseline divergence.'
      },
      {
        id: 'opt-1c',
        text: 'Baseline participant status: youthful cardiovascular baselines show floor effects, while adults gain benefits.',
        isCorrect: true,
        feedback: 'Correct! Young athletes already have optimal blood pressure (floor effect), whereas hypertensive older adults have room for measurable improvement.'
      }
    ],
    synthesisResolution: 'Green tea catechins provide measurable antihypertensive benefits specifically for individuals with elevated baseline blood pressure, but do not alter already optimal youthful cardiovascular baselines.',
    pedagogicalKey: 'Always check baseline participant characteristics when studies report conflicting effect sizes.'
  },
  {
    id: 'g4-3-s2-q2',
    stage: 2,
    title: 'Heterogeneity 2: Differing Definitions of "Urban Green Space"',
    controversyTopic: 'Comparing mental health benefits of urban green spaces across two metropolitan cities.',
    studyA: {
      source: 'Study Alpha (City of Melbourne)',
      finding: 'Access to urban green spaces showed a massive 40% reduction in depressive symptoms.',
      method: 'Geographical Information System (GIS) proximity mapping.'
    },
    studyB: {
      source: 'Study Beta (City of Surabaya)',
      finding: 'Access to urban green spaces showed only a tiny 4% reduction in depressive symptoms.',
      method: 'GIS proximity mapping.'
    },
    taskPrompt: 'Upon closer inspection, Study Alpha defined "green space" as quiet botanic parks with walking trails, while Study Beta defined "green space" as decorative grass medians in the middle of 6-lane congested highways. What is this heterogeneity called?',
    options: [
      {
        id: 'opt-2a',
        text: 'Operational definition mismatch: peaceful pedestrian botanic parks foster wellness, but traffic medians do not.',
        isCorrect: true,
        feedback: 'Correct! The researchers used the same word ("green space") but measured completely different physical environments.'
      },
      {
        id: 'opt-2b',
        text: 'Urban municipal geographic information systems track municipal parcel zoning boundaries using aerial satellites.',
        isCorrect: false,
        feedback: 'Incorrect. Satellite GIS tech does not address operational definition flaws.'
      },
      {
        id: 'opt-2c',
        text: 'Metropolitan road departments plant ornamental perennial grass landscaping along central dividing traffic lanes.',
        isCorrect: false,
        feedback: 'Incorrect. Roadside planting does not explain the psychological discrepancy.'
      }
    ],
    synthesisResolution: 'Urban green spaces foster mental health when designed for tranquil immersion and pedestrian safety; decorative traffic medians do not provide restorative psychological value.',
    pedagogicalKey: 'Never assume two studies measured the same construct just because they used the same word.'
  },
  {
    id: 'g4-3-s2-q3',
    stage: 2,
    title: 'Heterogeneity 3: The Duration Factor in Educational Interventions',
    controversyTopic: 'Assessing gamified educational apps on student history test scores.',
    studyA: {
      source: 'Study 1 (2-Week Trial)',
      finding: 'Massive surge in student quiz scores (+22%) and extreme enthusiasm.',
      method: 'Pre-post test.'
    },
    studyB: {
      source: 'Study 2 (1-Year Longitudinal Trial)',
      finding: 'Modest score gain (+3%) and significant student complaints of gamification fatigue and boredom.',
      method: 'Full-year randomized trial.'
    },
    taskPrompt: 'What phenomenon explains why the short-term study showed spectacular gains while the long-term study showed modest results?',
    options: [
      {
        id: 'opt-3a',
        text: 'Digital mobile learning software runs on smartphone operating systems and updates through online app stores.',
        isCorrect: false,
        feedback: 'Incorrect. App software operation does not explain student psychological habituation.'
      },
      {
        id: 'opt-3b',
        text: 'Temporal duration and novelty effect: short-term excitement produces spikes that fade over full school years.',
        isCorrect: true,
        feedback: 'Correct! The novelty effect creates short-term motivation spikes, but long-term sustained learning requires deeper curriculum integration.'
      },
      {
        id: 'opt-3c',
        text: 'Secondary history textbooks contain chronological timelines detailing national colonial and political events.',
        isCorrect: false,
        feedback: 'Incorrect. Textbook contents do not explain the novelty effect.'
      }
    ],
    synthesisResolution: 'Gamified learning apps produce dramatic short-term motivational spikes through novelty, but sustain only modest academic gains over full school years unless combined with deep teacher pedagogical interaction.',
    pedagogicalKey: 'Short-term novelty is not long-term efficacy: always evaluate study duration.'
  },
  {
    id: 'g4-3-s2-q4',
    stage: 2,
    title: 'Heterogeneity 4: Investigator Bias and Funding Disclosure',
    controversyTopic: 'Evaluating health effects of artificial sweeteners (sucralose).',
    studyA: {
      source: 'Consortium of Independent Public Health Universities (N=12 studies)',
      finding: '75% of independent studies reported disruptions to gut microbiome bacteria and elevated insulin resistance.',
      method: 'Peer-reviewed independent clinical trials.'
    },
    studyB: {
      source: 'Beverage Industry Association Funded Trials (N=10 studies)',
      finding: '100% of industry-funded trials reported zero biological side effects and complete metabolic safety.',
      method: 'Privately sponsored trials.'
    },
    taskPrompt: 'What source of systematic heterogeneity must a researcher identify when synthesizing these datasets?',
    options: [
      {
        id: 'opt-4a',
        text: 'Commercial funding bias: industry sponsorship systematically correlates with favorable product safety findings.',
        isCorrect: true,
        feedback: 'Correct! Financial conflicts of interest create systematic publication and design bias that synthesis must account for.'
      },
      {
        id: 'opt-4b',
        text: 'Artificial sweetener molecules bind to human tongue taste receptor cells to produce sweet sensory perceptions.',
        isCorrect: false,
        feedback: 'Incorrect. Chemical sweetness perception does not address investigator funding bias.'
      },
      {
        id: 'opt-4c',
        text: 'Independent research universities receive public state grants and tuition revenues to maintain student labs.',
        isCorrect: false,
        feedback: 'Incorrect. University funding sources do not explain the industry conflict of interest.'
      }
    ],
    synthesisResolution: 'When evaluating controversial health products, synthesis must stratify studies by funding independence to protect against commercial confirmation bias.',
    pedagogicalKey: 'Always audit who funded the primary studies before synthesizing the evidence.'
  },

  // STAGE 3: TRIANGULATED SYNTHESIS MATRIX (3 items)
  {
    id: 'g4-3-s3-q1',
    stage: 3,
    title: 'Synthesis Master 1: Electric Vehicle Transition in Indonesia',
    controversyTopic: 'Synthesizing national nickel mining, electric vehicle adoption, and environmental conservation.',
    studyA: {
      source: 'Study A (Economic Ministry)',
      finding: 'Downstream nickel processing created 85,000 industrial jobs and boosted export revenues by $28 billion.',
      method: 'Econometric trade data.'
    },
    studyB: {
      source: 'Study B (Environmental NGO in Halmahera)',
      finding: 'High-pressure acid leaching (HPAL) waste disposal risks toxic heavy metal contamination in coastal coral ecosystems.',
      method: 'Marine water and sediment chemistry sampling.'
    },
    studyC: {
      source: 'Study C (Jakarta Consumer Survey)',
      finding: 'Electric car sales remain under 3% of total vehicle sales due to charging station scarcity outside Java and high retail purchase prices.',
      method: 'Consumer household survey.'
    },
    taskPrompt: 'Construct the master synthesis statement that integrates all three studies into a balanced Cambridge Global Perspectives conclusion:',
    options: [
      {
        id: 'opt-1a',
        text: 'Mineral mining companies operate heavy diesel excavators and smelting furnaces in remote provincial islands.',
        isCorrect: false,
        feedback: 'Incorrect. Mining machinery facts do not provide a policy synthesis.'
      },
      {
        id: 'opt-1b',
        text: 'Multi-criteria synthesis matrix: balancing industrial employment, marine waste regulation, and grid charging.',
        isCorrect: true,
        feedback: 'Correct! Master synthesis integrates economic job creation, environmental marine protections, and consumer charging rollout.'
      },
      {
        id: 'opt-1c',
        text: 'Consumer automotive buyers compare sticker prices at licensed urban automobile dealerships before buying cars.',
        isCorrect: false,
        feedback: 'Incorrect. Dealership buying behavior does not synthesize the macroeconomic and environmental dimensions.'
      }
    ],
    synthesisResolution: 'Integrated economic development, environmental waste regulation, and domestic infrastructure rollout.',
    pedagogicalKey: 'Master synthesis connects economic drivers, environmental constraints, and consumer realities.'
  },
  {
    id: 'g4-3-s3-q2',
    stage: 3,
    title: 'Synthesis Master 2: Traditional Jamu Medicine Integration',
    controversyTopic: 'Synthesizing botanical efficacy, clinical safety, and cultural heritage in healthcare.',
    studyA: {
      source: 'Study A (Pharmacology Lab)',
      finding: 'Curcumin extract from turmeric exhibits potent anti-inflammatory properties comparable to ibuprofen in cell cultures.',
      method: 'Biochemical cellular assays.'
    },
    studyB: {
      source: 'Study B (National Food and Drug Authority / BPOM)',
      finding: '18% of street-sold jamu samples contained illegal synthetic chemical drugs (dexamethasone) added secretly by unlicensed manufacturers.',
      method: 'High-performance liquid chromatography testing.'
    },
    studyC: {
      source: 'Study C (Community Healthcare Center)',
      finding: 'Elderly patients who drink standardized herbal tea under doctor supervision report 40% higher treatment adherence and greater cultural comfort.',
      method: 'Clinical compliance tracking.'
    },
    taskPrompt: 'What synthesized policy recommendation emerges from connecting these three findings?',
    options: [
      {
        id: 'opt-2a',
        text: 'Standardized phytopharmaceutical certification: combining lab chemistry, BPOM safety audits, and clinic trials.',
        isCorrect: true,
        feedback: 'Correct! Synthesizes botanical therapeutic efficacy, regulatory adulteration prevention, and medical cultural respect.'
      },
      {
        id: 'opt-2b',
        text: 'Street vendors brew traditional herbal tonics using ground ginger root, crushed tamarind pods, and palm sugar.',
        isCorrect: false,
        feedback: 'Incorrect. Recipe ingredients do not resolve the regulatory and clinical integration challenges.'
      },
      {
        id: 'opt-2c',
        text: 'Community health clinics prescribe generic synthetic pharmaceuticals under universal government healthcare.',
        isCorrect: false,
        feedback: 'Incorrect. Standard pharmacy routines ignore the proven cultural adherence benefits of herbal integration.'
      }
    ],
    synthesisResolution: 'Standardized phytopharmaceutical certification combining botanical chemistry, regulatory enforcement, and doctor-supervised clinical integration.',
    pedagogicalKey: 'Synthesis solves real-world safety challenges by building bridges between scientific verification and cultural practice.'
  },
  {
    id: 'g4-3-s3-q3',
    stage: 3,
    title: 'Synthesis Master 3: AI in School Classrooms — The Final Frontier',
    controversyTopic: 'Synthesizing artificial intelligence in secondary education.',
    studyA: {
      source: 'Study A (Cognitive Science Lab)',
      finding: 'Students who use AI chatbots as immediate answer-generators show significant declines in long-term memory retention and conceptual reasoning.',
      method: 'Controlled memory trials.'
    },
    studyB: {
      source: 'Study B (English Language Learning Program)',
      finding: 'Students in remote schools with few native English teachers used AI conversation bots to double their conversational vocabulary and pronunciation confidence.',
      method: 'Pre-post speaking tests.'
    },
    studyC: {
      source: 'Study C (Teacher Workload Survey)',
      finding: 'Teachers who used AI for administrative lesson planning saved 6 hours per week, allowing more one-on-one mentoring time with struggling pupils.',
      method: 'Teacher time-motion diaries.'
    },
    taskPrompt: 'Which statement represents the master synthesis connecting cognitive risks, equity benefits, and pedagogical efficiency?',
    options: [
      {
        id: 'opt-3a',
        text: 'Computer processing units execute machine learning instructions using silicon semiconductor integrated chips.',
        isCorrect: false,
        feedback: 'Incorrect. Hardware computing facts do not provide a pedagogical framework.'
      },
      {
        id: 'opt-3b',
        text: 'Secondary English language teachers assign weekly essay compositions and oral classroom presentation speeches.',
        isCorrect: false,
        feedback: 'Incorrect. General classroom assignments do not synthesize AI opportunities and risks.'
      },
      {
        id: 'opt-3c',
        text: 'Guarded pedagogical deployment: curbing cognitive shortcuts while leveraging AI tools for teacher mentoring.',
        isCorrect: true,
        feedback: 'Correct! Master synthesis restricts passive student shortcuts while empowering teacher mentorship and language access.'
      }
    ],
    synthesisResolution: 'Guarded pedagogical AI deployment: restrict passive cognitive shortcuts while leveraging conversational practice and administrative workload relief for deeper human mentorship.',
    pedagogicalKey: 'Master synthesis does not treat technology as pure good or pure evil; it establishes precise pedagogical boundaries for human empowerment.'
  }
];`;

const filePath = './src/data/games/unit4MicroGamesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'export const G4_3_CHALLENGES: CrossStudyControversyItem[] = [';
const startIndex = content.indexOf(startMarker);

if (startIndex === -1) {
  console.error("Marker not found! startIndex:", startIndex);
  process.exit(1);
}

const before = content.substring(0, startIndex);
const sliceAfter = content.substring(startIndex);
const lastSemicolon = sliceAfter.lastIndexOf('];');
const after = sliceAfter.substring(lastSemicolon + 2);

const newContent = before + g43Replacement + after;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully replaced G4_3_CHALLENGES in unit4MicroGamesData.ts!");
