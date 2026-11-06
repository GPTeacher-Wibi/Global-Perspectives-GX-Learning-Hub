import * as fs from 'fs';
import * as path from 'path';

function updateGameOptions(filePath: string, itemId: string, newOptions: any[]) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const itemIndex = content.indexOf(`id: '${itemId}'`);
  if (itemIndex === -1) {
    throw new Error(`Item ${itemId} not found in ${filePath}`);
  }

  const optionsStart = content.indexOf('options: [', itemIndex);
  if (optionsStart === -1) {
    throw new Error(`Options start not found for ${itemId} in ${filePath}`);
  }

  let depth = 0;
  let optionsEnd = -1;
  for (let i = optionsStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') {
      depth--;
      if (depth === 0) {
        optionsEnd = i + 1;
        break;
      }
    }
  }

  if (optionsEnd === -1) {
    throw new Error(`Options end not found for ${itemId} in ${filePath}`);
  }

  const formatted = `options: [\n` + newOptions.map(opt => {
    const lines = Object.entries(opt).map(([k, v]) => {
      if (typeof v === 'string') {
        return `        ${k}: '${v.replace(/'/g, "\\'")}'`;
      }
      return `        ${k}: ${v}`;
    });
    return `      {\n${lines.join(',\n')}\n      }`;
  }).join(',\n') + `\n    ]`;

  content = content.slice(0, optionsStart) + formatted + content.slice(optionsEnd);
  fs.writeFileSync(filePath, content, 'utf-8');
}

// ============================================================================
// G8.2 CRAAP SIFT UPDATES (11 items, B, C, A, B, C, A, B, C, A, B, A)
// ============================================================================
const u8File = path.resolve(process.cwd(), 'src/data/games/unit8MicroGamesData.ts');

const g8_2Updates = [
  {
    id: 'g8-2-c1', // B
    options: [
      { id: 'opt-b', label: 'Accept as authoritative because government ministries published it in 2011', description: 'Ten-year-old baseline data remains universally valid for all modern infrastructure planning.', isCorrect: false },
      { id: 'opt-a', label: 'CRAAP Currency Check: Reject as outdated for current municipal bus planning', description: 'Ten-year-old traffic counts fail Currency; urban routes and smartphone transit have changed.', isCorrect: true },
      { id: 'opt-c', label: 'Assume the data is current because the ministry’s website was redesigned this year', description: 'A modern website interface automatically updates historical empirical datasets.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c2', // C
    options: [
      { id: 'opt-b', label: 'Accept because the author claims to be an independent health and wellness advocate', description: 'Personal passion for health substitutes for peer-reviewed toxicology qualifications.', isCorrect: false },
      { id: 'opt-c', label: 'Cite the blog because popular lifestyle articles provide accessible public explanations', description: 'Online readership numbers guarantee that medical dosage recommendations are safe.', isCorrect: false },
      { id: 'opt-a', label: 'CRAAP Authority Rejection: Lack of credentials and direct commercial interest', description: 'The author has no medical qualifications and makes money directly selling the herbal supplements.', isCorrect: true }
    ]
  },
  {
    id: 'g8-2-c3', // A
    options: [
      { id: 'opt-a', label: 'CRAAP Purpose & Objectivity Rejection: Vested commercial interest promotes biased claims', description: 'Mining companies have a financial conflict of interest to minimize documented environmental harms.', isCorrect: true },
      { id: 'opt-b', label: 'Accept the brochure because multinational mining corporations possess advanced equipment', description: 'Large corporate engineering budgets automatically ensure unbiased ecological reporting.', isCorrect: false },
      { id: 'opt-c', label: 'Trust the findings because the pamphlet includes colorful diagrams of reforestation saplings', description: 'Professional marketing graphic design proves that local groundwater is unpolluted.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c4', // B
    options: [
      { id: 'opt-b', label: 'Accept the claim because ten students constitutes a sufficient qualitative sample size', description: 'A small group of friends represents diverse regional adolescent sleep patterns.', isCorrect: false },
      { id: 'opt-a', label: 'CRAAP Accuracy Rejection: Extreme sampling bias and unscientific measurement methods', description: 'Ten classmates in one school cannot support universal claims about 25 million teenagers.', isCorrect: true },
      { id: 'opt-c', label: 'Publish the article because lifestyle headlines generate high student social engagement', description: 'High click rates and viral comments validate the scientific truth of the findings.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c5', // C
    options: [
      { id: 'opt-b', label: 'Accept because university economics institutes always use sound, unassailable methodology', description: 'Academic prestige exempts research studies from topical relevance and scope checks.', isCorrect: false },
      { id: 'opt-c', label: 'Use the data because macroeconomic trade dynamics remain identical across all industries', description: 'Manufacturing trade statistics apply identically to high school smartphone policies.', isCorrect: false },
      { id: 'opt-a', label: 'CRAAP Relevance Check: The study addresses trade tariffs, not educational phone policies', description: 'A study on manufacturing import taxes does not provide relevant evidence for classroom distraction.', isCorrect: true }
    ]
  },
  {
    id: 'g8-2-c6', // A
    options: [
      { id: 'opt-a', label: 'S — STOP: Do not share; open a new tab to find independent coverage from trusted outlets', description: 'Emotional urgency is a warning sign of digital clickbait; lateral verification is essential.', isCorrect: true },
      { id: 'opt-b', label: 'Forward the message to school class groups immediately to warn classmates about the danger', description: 'Sharing sensational unverified alerts protects peers from potential immediate harm.', isCorrect: false },
      { id: 'opt-c', label: 'Assume the warning is authentic because the message uses bold text and urgent siren icons', description: 'Graphic warning symbols and exclamation marks confirm emergency authenticity.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c7', // B
    options: [
      { id: 'opt-b', label: 'Read the foundation’s "About Us" mission statement to confirm their charitable goals', description: 'An organization’s self-description provides an objective summary of their funding.', isCorrect: false },
      { id: 'opt-a', label: 'I — INVESTIGATE the Source: Lateral reading via Wikipedia or independent databases', description: 'Leaving the site reveals the foundation is funded by fossil-fuel lobbies promoting climate skepticism.', isCorrect: true },
      { id: 'opt-c', label: 'Assume the institute is non-partisan because the word "Science" appears in its title', description: 'Prestigious organizational naming guarantees academic rigor and objectivity.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c8', // C
    options: [
      { id: 'opt-b', label: 'Accept the claim as factual because the local daily newspaper printed it yesterday morning', description: 'Mainstream print journalism never misinterprets laboratory research press releases.', isCorrect: false },
      { id: 'opt-c', label: 'Disregard the story because all medical news stories are intentionally fabricated by media', description: 'News outlets produce zero legitimate reporting on scientific breakthroughs.', isCorrect: false },
      { id: 'opt-a', label: 'F — FIND Better Coverage: Consult peer-reviewed journals or national academies of science', description: 'Science journalists often sensationalize preliminary mouse studies into false human miracle cures.', isCorrect: true }
    ]
  },
  {
    id: 'g8-2-c9', // A
    options: [
      { id: 'opt-a', label: 'T — TRACE: Manually verify citations on Google Scholar or JSTOR before including in a bibliography', description: 'AI models frequently invent plausible-sounding titles, fake volume numbers, and fictitious authors.', isCorrect: true },
      { id: 'opt-b', label: 'Copy and paste the citations because the generative AI assistant formatted them in formal APA style', description: 'Correct bibliographical punctuation proves that the underlying research study was actually conducted.', isCorrect: false },
      { id: 'opt-c', label: 'Assume the study is legitimate if the journal title sounds prestigious and cites Indonesian hydrology', description: 'Superficial academic formatting features guarantee that the journal article exists in national archives.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c10', // B
    options: [
      { id: 'opt-b', label: 'Assume the announcement is authentic because the speaker’s voice cadence sounds convincing', description: 'AI voice-cloning software replicates realistic vocal cadences in minutes, requiring careful visual verification.', isCorrect: false },
      { id: 'opt-a', label: 'Investigate official presidential channels and look for synthetic boundary video artifacts', description: 'Confirming with official government press releases immediately exposes manipulated synthetic video hoaxes.', isCorrect: true },
      { id: 'opt-c', label: 'Wait to see if peer group chats repost the clip before checking official government press decrees', description: 'Relying on social chat consensus amplifies viral disinformation rather than confirming official announcements.', isCorrect: false }
    ]
  },
  {
    id: 'g8-2-c11', // A
    options: [
      { id: 'opt-a', label: 'Reject for Purpose and Authority: Direct corporate financial conflict of interest', description: 'The authors have a commercial motive to conceal health hazards to sell their company’s product.', isCorrect: true },
      { id: 'opt-b', label: 'Accept the paper because it is sixty pages long and includes detailed chemical data charts', description: 'Document length and complex statistical tables automatically guarantee objective scientific truth.', isCorrect: false },
      { id: 'opt-c', label: 'Accept the findings because the authors cite medical terminology and provide academic footnotes', description: 'Formal academic rhetoric and Latin footnotes prove that corporate researchers have no financial bias.', isCorrect: false }
    ]
  }
];

for (const u of g8_2Updates) {
  updateGameOptions(u8File, u.id, u.options);
}
console.log('G8.2 updated successfully');

// ============================================================================
// G9.2 ASSUMPTION UNMASKER UPDATES (11 items, B, C, A, B, C, A, B, C, A, B, A)
// ============================================================================
const u9File = path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts');

const g9_2Updates = [
  {
    id: 'g9-2-c1', // B
    options: [
      { id: 'opt-b', text: 'School uniforms are made of cotton-polyester fabric weaves.', isCorrectAssumption: false, analysisNote: 'Material fact about textiles, not the hidden premise about adolescent discipline.' },
      { id: 'opt-a', text: 'External conformity in clothing directly causes internal moral character and academic excellence.', isCorrectAssumption: true, analysisNote: 'Unstated causal leap: assuming identical shirts will magically produce disciplined student behavior.' },
      { id: 'opt-c', text: 'High school teachers prefer grading standardized multiple-choice exams.', isCorrectAssumption: false, analysisNote: 'Teacher grading preference, unrelated to the disciplinary claim made.' }
    ]
  },
  {
    id: 'g9-2-c2', // C
    options: [
      { id: 'opt-b', text: 'Caffeine stimulates the central nervous system in adolescent bodies.', isCorrectAssumption: false, analysisNote: 'Biological pharmacological fact, not the assumption about academic learning.' },
      { id: 'opt-c', text: 'Study duration is identical to learning depth, and health costs are negligible.', isCorrectAssumption: true, analysisNote: 'Flawed premise: assumes cramming without sleep produces effective, lasting comprehension.' },
      { id: 'opt-a', text: 'Energy drinks contain carbonated water, sugar, and synthetic flavorings.', isCorrectAssumption: false, analysisNote: 'Ingredient description, not the unexamined assumption underpinning exam success.' }
    ]
  },
  {
    id: 'g9-2-c3', // A
    options: [
      { id: 'opt-a', text: 'Human well-being is measured entirely by commercial profit, and environmental damage is cost-free.', isCorrectAssumption: true, analysisNote: 'Hidden normative premise: prioritizing short-term GDP while externalizing environmental costs.' },
      { id: 'opt-b', text: 'Manufacturing factories generate physical air emissions and liquid industrial runoff.', isCorrectAssumption: false, analysisNote: 'Empirical environmental fact, not the underlying value assumption driving the policy.' },
      { id: 'opt-c', text: 'Commercial industrial parks are zoned along major municipal shipping river corridors.', isCorrectAssumption: false, analysisNote: 'Geographic urban planning zoning detail, not the unstated economic premise.' }
    ]
  },
  {
    id: 'g9-2-c4', // B
    options: [
      { id: 'opt-b', text: 'Computer monitors emit light in the visible blue spectrum.', isCorrectAssumption: false, analysisNote: 'Hardware physics property, not the educational pedagogical assumption.' },
      { id: 'opt-a', text: 'Reading online produces identical deep cognitive focus as reading printed physical books.', isCorrectAssumption: true, analysisNote: 'Unverified premise: ignores documented digital multitasking, eye fatigue, and distraction.' },
      { id: 'opt-c', text: 'Digital textbooks require electricity and battery charging to operate.', isCorrectAssumption: false, analysisNote: 'Technical operating requirement, not the unexamined pedagogical warrant.' }
    ]
  },
  {
    id: 'g9-2-c5', // C
    options: [
      { id: 'opt-b', text: 'Electric vehicles require high-voltage lithium battery power packs.', isCorrectAssumption: false, analysisNote: 'Automotive engineering specification, not the environmental lifecycle assumption.' },
      { id: 'opt-c', text: 'Manufacturing batteries and generating electricity produce zero environmental damage.', isCorrectAssumption: true, analysisNote: 'Fatal blind spot: ignores emissions from coal-powered grids and ecological harms from nickel mining.' },
      { id: 'opt-a', text: 'Passenger motor vehicles operate on paved municipal highway surfaces.', isCorrectAssumption: false, analysisNote: 'General transportation infrastructure fact, not the hidden ecological premise.' }
    ]
  },
  {
    id: 'g9-2-c6', // A
    options: [
      { id: 'opt-a', text: 'Older employees cannot adapt, and rapid digital technological change is the sole metric of organizational value.', isCorrectAssumption: true, analysisNote: 'Ageist bias: overlooks mentorship, institutional memory, interpersonal wisdom, and retraining potential.' },
      { id: 'opt-b', text: 'Digital software applications undergo periodic version updates and feature upgrades.', isCorrectAssumption: false, analysisNote: 'Software engineering operational fact, not the human resource assumption.' },
      { id: 'opt-c', text: 'Corporate office workers receive monthly salaries through commercial bank transfers.', isCorrectAssumption: false, analysisNote: 'Administrative payroll procedure, not the unstated belief about workforce capability.' }
    ]
  },
  {
    id: 'g9-2-c7', // B
    options: [
      { id: 'opt-b', text: 'Traditional agricultural markets generate organic vegetable and fruit waste.', isCorrectAssumption: false, analysisNote: 'Empirical urban sanitation observation, not the ethical policy premise.' },
      { id: 'opt-a', text: 'Street vendors have zero legitimate claim to urban space, and municipal modernization requires their removal.', isCorrectAssumption: true, analysisNote: 'Elitist assumption: privileges wealthy consumers and formal malls over informal worker livelihoods.' },
      { id: 'opt-c', text: 'Modern shopping malls install automated escalators and central air conditioning.', isCorrectAssumption: false, analysisNote: 'Retail architectural feature, not the underlying unexamined socioeconomic belief.' }
    ]
  },
  {
    id: 'g9-2-c8', // C
    options: [
      { id: 'opt-b', text: 'Social media algorithms track user click rates and video watch durations.', isCorrectAssumption: false, analysisNote: 'Technical computational metric, not the psychological causal assumption.' },
      { id: 'opt-c', text: 'Adolescents are helpless passive victims of algorithms with zero personal agency or resilience.', isCorrectAssumption: true, analysisNote: 'Deficit framing: assumes all youth lack digital literacy or capacity to manage healthy online boundaries.' },
      { id: 'opt-a', text: 'Smartphones connect to telecommunication towers using cellular radio signals.', isCorrectAssumption: false, analysisNote: 'Telecommunications engineering detail, not the unstated psychological premise.' }
    ]
  },
  {
    id: 'g9-2-c9', // A
    options: [
      { id: 'opt-a', text: 'Western liberal democratic models are universally applicable and superior to all indigenous communal traditions.', isCorrectAssumption: true, analysisNote: 'Ethnocentric bias: ignores the historical efficacy of local consensus traditions like Musyawarah Mufakat.' },
      { id: 'opt-b', text: 'National parliaments enact legislative statutory bills and approve state annual budgets.', isCorrectAssumption: false, analysisNote: 'Constitutional political function, not the hidden cultural governance assumption.' },
      { id: 'opt-c', text: 'Geographic nation-states maintain formal diplomatic embassies in foreign capital cities.', isCorrectAssumption: false, analysisNote: 'International diplomatic protocol detail, not the unexamined normative claim.' }
    ]
  },
  {
    id: 'g9-2-c10', // B
    options: [
      { id: 'opt-b', text: 'Automated digital algorithms process input data at rapid computational speeds.', isCorrectAssumption: false, analysisNote: 'Computer science technical property, not the ethical criminal justice assumption.' },
      { id: 'opt-a', text: 'Statistical algorithms are completely objective, and past historical arrest data reflects true criminality.', isCorrectAssumption: true, analysisNote: 'Automated bias: ignores that predictive algorithms trained on biased police records perpetuate systemic injustice.' },
      { id: 'opt-c', text: 'Municipal police departments maintain digital databases of criminal court records.', isCorrectAssumption: false, analysisNote: 'Administrative institutional recordkeeping fact, not the hidden fairness premise.' }
    ]
  },
  {
    id: 'g9-2-c11', // A
    options: [
      { id: 'opt-a', text: 'Congestion has only one cause, and commuters will universally switch to buses regardless of last-mile gaps.', isCorrectAssumption: true, analysisNote: 'Single-cause fallacy: assumes dedicated bus lanes eliminate traffic without solving housing sprawl or suburban feeders.' },
      { id: 'opt-b', text: 'Public transit buses operate on diesel combustion or electric battery motor systems.', isCorrectAssumption: false, analysisNote: 'Automotive vehicle engineering detail, not the urban planning behavioral assumption.' },
      { id: 'opt-c', text: 'Paved municipal arterial roadways feature painted lane dividers and pedestrian crosswalks.', isCorrectAssumption: false, analysisNote: 'Civil roadway engineering feature, not the unstated transit adoption belief.' }
    ]
  }
];

for (const u of g9_2Updates) {
  updateGameOptions(u9File, u.id, u.options);
}
console.log('G9.2 updated successfully');

// ============================================================================
// G10.1 CONCLUSION MATRIX UPDATES (11 items, B, C, A, B, C, A, B, C, A, B, A)
// ============================================================================
const u10File = path.resolve(process.cwd(), 'src/data/games/unit10MicroGamesData.ts');

const g10_1Updates = [
  {
    id: 'g10-1-c1', // B
    options: [
      { id: 'opt-b', text: 'The research project failed and the student must delete all traffic logs.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Unscientific: unexpected findings are valuable empirical discoveries.' },
      { id: 'opt-a', text: 'Modify the conclusion: speed tables slowed traffic, but unintended diversion into alleys requires traffic calming.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Mature conclusion: acknowledges that solving one problem created an unintended secondary consequence.' },
      { id: 'opt-c', text: 'Conclude speed tables are 100% effective and ignore the alleyway traffic.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Cherry-picking: ignoring adverse side effects invalidates academic integrity.' }
    ]
  },
  {
    id: 'g10-1-c2', // C
    options: [
      { id: 'opt-b', text: 'Recommend closing all five schools because teaching online caused test drops.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Gross overreaction: ignores that internet access, not online pedagogy, was the barrier.' },
      { id: 'opt-c', text: 'Hedge the conclusion: online learning works when infrastructure exists, but rural connectivity gaps worsen learning inequality.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Nuanced synthesis: articulates the critical boundary condition of digital infrastructure access.' },
      { id: 'opt-a', text: 'Claim online learning improves education everywhere by citing only School A.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Dishonest extrapolation: generalizing one wealthy school to under-resourced rural schools.' }
    ]
  },
  {
    id: 'g10-1-c3', // A
    options: [
      { id: 'opt-a', text: 'Balanced policy conclusion: solar power provides clean electricity, but battery replacement costs and grid limits require municipal subsidies.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Multi-criteria synthesis: balances environmental benefits against financial lifecycle costs.' },
      { id: 'opt-b', text: 'Declare solar power completely unviable because small island clinics have limited maintenance budgets.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Defeatist: disregards daytime solar power savings and reduced diesel reliance.' },
      { id: 'opt-c', text: 'Conclude solar energy is completely free and requires zero ongoing maintenance.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Naive: ignores technical reality of battery degradation and electrical inverter maintenance.' }
    ]
  },
  {
    id: 'g10-1-c4', // B
    options: [
      { id: 'opt-b', text: 'Recommend immediate commercial development because job creation outweighs all other factors.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Single-lens bias: prioritizes short-term economic gains while disregarding legal land rights.' },
      { id: 'opt-a', text: 'Integrative conclusion: economic development must respect Dayak customary land rights through formal co-management agreements.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Bridge conclusion: reconciles national economic goals with indigenous human rights and forest conservation.' },
      { id: 'opt-c', text: 'Declare customary forest taboos unscientific and terminate all cultural research in Kalimantan.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Ethnocentric rejection: dismisses indigenous ecological governance frameworks without justification.' }
    ]
  },
  {
    id: 'g10-1-c5', // C
    options: [
      { id: 'opt-b', text: 'Recommend banning all private motor vehicles across Greater Jakarta within thirty days.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Impractical extremism: ignores economic necessity and lack of comprehensive suburban transit.' },
      { id: 'opt-c', text: 'Multi-tiered conclusion: odd-even rules reduce corridor emissions, but long-term air quality demands electric buses and pedestrian links.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Systemic conclusion: recognizes policy as a temporary tactical step within a larger transit strategy.' },
      { id: 'opt-a', text: 'Conclude odd-even rules solved urban pollution because central avenues saw lower emissions.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Premature victory: ignores that vehicle owners bought second cars with alternate license plates.' }
    ]
  },
  {
    id: 'g10-1-c6', // A
    options: [
      { id: 'opt-a', text: 'Actionable policy recommendation: the city should deploy licensed micro-collection tricycles to service informal settlements, funded through commercial landfill fees.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Exemplary recommendation: specifies actor, exact action, target population, and sustainable funding.' },
      { id: 'opt-b', text: 'Vague conclusion: citizens should care more about cleanliness and throw garbage into proper bins.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Un-actionable moralizing: lacks institutional specificity, mechanisms, or funding sources.' },
      { id: 'opt-c', text: 'Recommend waiting ten years for autonomous robotic drones to collect urban household trash.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Technological escapism: avoids solving urgent ground-level municipal sanitation failures.' }
    ]
  },
  {
    id: 'g10-1-c7', // B
    options: [
      { id: 'opt-b', text: 'Conclude community gardens have no impact because 15 kg of vegetables is financially trivial.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Reductionist: judges community agriculture purely by caloric output, ignoring mental and civic health.' },
      { id: 'opt-a', text: 'Holistic conclusion: while caloric output is modest, gardens generate significant social capital, mental well-being, and community cohesion.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Multi-dimensional synthesis: values qualitative social cohesion alongside modest agricultural yield.' },
      { id: 'opt-c', text: 'Recommend converting all city parks into commercial corn plantations to maximize caloric harvest.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Absurd extreme: destroys urban recreational open spaces for industrial monoculture farming.' }
    ]
  },
  {
    id: 'g10-1-c8', // C
    options: [
      { id: 'opt-b', text: 'Conclude the ban was an absolute failure and repeal all environmental plastic regulations.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Short-sighted: ignores the 70% decrease in storm drain clogging and long-term flood prevention.' },
      { id: 'opt-c', text: 'Nuanced policy synthesis: retail revenue drops were temporary transition friction; long-term ecological gains justify maintaining the ban with merchant bulk-packaging grants.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Strategic synthesis: reconciles temporary retail costs with lasting ecological gains via mitigation support.' },
      { id: 'opt-a', text: 'Ignore merchant financial losses entirely because environmental protection is the only valid priority.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Insensitive dogmatism: dismisses vulnerable small family businesses and creates civic backlash.' }
    ]
  },
  {
    id: 'g10-1-c9', // A
    options: [
      { id: 'opt-a', text: 'Intellectually honest conclusion: report the unexpected increase in speeding candidly, reject the initial safety hypothesis, and highlight the unintended benefit of sharp crime reduction.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Exemplary scientific integrity: embraces unexpected empirical findings rather than concealing them.' },
      { id: 'opt-b', text: 'Alter the radar gun speed logs so the final graphs show that lighting reduced vehicle speeding.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Scientific fraud: falsifying data to protect a hypothesis violates core academic ethics.' },
      { id: 'opt-c', text: 'Conclude street lighting is a complete waste of municipal funds and should be turned off.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Blind to positives: ignores that bright lighting reduced street robberies and assaults by 40%.' }
    ]
  },
  {
    id: 'g10-1-c10', // B
    options: [
      { id: 'opt-b', text: 'Conclude that artificial intelligence tools should be completely prohibited in all Indonesian schools.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Luddite reaction: bans a powerful learning tool rather than establishing ethical boundaries.' },
      { id: 'opt-a', text: 'Nuanced conclusion: AI improves brainstorming and grammar for struggling writers, but unguided use erodes critical thinking; schools must require transparent prompt disclosure.', isCorrectDiagnosisOrRepair: true, analysisNote: 'Comprehensive synthesis: harnesses cognitive benefits while establishing pedagogical guardrails.' },
      { id: 'opt-c', text: 'Conclude AI produces only benefits and eliminate human classroom teacher grading entirely.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Reckless techno-utopianism: overlooks proven plagiarism risks and critical thinking atrophy.' }
    ]
  },
  {
    id: 'g10-1-c11', // A
    options: [
      { id: 'opt-a', text: 'Exemplary multi-scalar synthesis: explain how local fishing catch declines (Local) connect to national mangrove protection laws (National) and international carbon credit agreements (Global).', isCorrectDiagnosisOrRepair: true, analysisNote: 'Capstone benchmark: seamlessly weaves personal livelihoods, national governance, and global treaties.' },
      { id: 'opt-b', text: 'Discuss only local coastal fish yields and explicitly state that national and global laws are irrelevant.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Parochial failure: fails the fundamental Cambridge requirement to connect issues across scales.' },
      { id: 'opt-c', text: 'Focus exclusively on international treaties without mentioning actual Indonesian fishermen or mangroves.', isCorrectDiagnosisOrRepair: false, analysisNote: 'Detached abstraction: analyzes global covenants with no grounding in real local human communities.' }
    ]
  }
];

for (const u of g10_1Updates) {
  updateGameOptions(u10File, u.id, u.options);
}
console.log('G10.1 updated successfully');

// ============================================================================
// G10.2 DEFECT NEUTRALIZER UPDATES (11 items, B, C, A, B, C, A, B, C, A, B, A)
// ============================================================================
const g10_2Updates = [
  {
    id: 'g10-2-c1', // B
    options: [
      { id: 'opt-b', verdictLabel: 'Sound and fully justified conclusion based on rigorous methodology', critique: 'The researcher surveyed a broad representative cross-section of the entire city.', isCorrectVerdict: false },
      { id: 'opt-a', verdictLabel: 'Fatal Overgeneralization: Sample size of 15 cannot represent 3 million residents', critique: 'Fifteen high school friends in one suburban cafe cannot support sweeping claims about citywide transit preferences.', isCorrectVerdict: true },
      { id: 'opt-c', verdictLabel: 'Valid deductive logic applying universal psychological principles', critique: 'Individual adolescent commute preferences reliably predict adult passenger behavior across provinces.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c2', // C
    options: [
      { id: 'opt-b', verdictLabel: 'Empirically proven causal relationship between sports and school performance', critique: 'Higher blood circulation from exercise directly increases cognitive test performance in all subjects.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Correlation Confused with Causation: Confounding variables ignored', critique: 'Students who play varsity sports may have higher discipline, family support, or tutors; correlation is not causation.', isCorrectVerdict: true },
      { id: 'opt-a', verdictLabel: 'Sound inductive generalization backed by quantitative survey metrics', critique: 'Statistical correlation between two variables proves that increasing one directly elevates the other.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c3', // A
    options: [
      { id: 'opt-a', verdictLabel: 'Un-actionable Vague Moralizing: Lacks agency, timeline, mechanism, and budget', critique: 'Saying "people should care more" provides zero policy guidance, assigns no institutional responsibility, and costs nothing.', isCorrectVerdict: true },
      { id: 'opt-b', verdictLabel: 'Pragmatic and actionable policy recommendation for municipal sanitation', critique: 'Public awareness campaigns asking citizens to care about nature solve urban littering challenges.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Legally enforceable municipal decree ready for parliamentary adoption', critique: 'Moral encouragement represents the most cost-effective regulatory tool for provincial governments.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c4', // B
    options: [
      { id: 'opt-b', verdictLabel: 'Rigorous scientific methodology that correctly isolates positive outcomes', critique: 'Eliminating contradictory outlier data ensures that research graphs look clean and conclusive.', isCorrectVerdict: false },
      { id: 'opt-a', verdictLabel: 'Academic Dishonesty & Confirmation Bias: Discarding contradicting data', critique: 'Concealing 40% of survey responses because they disproved the student’s hypothesis is scientific fraud.', isCorrectVerdict: true },
      { id: 'opt-c', verdictLabel: 'Valid qualitative data trimming to maintain clear narrative synthesis', critique: 'Researchers have the academic right to remove survey entries that contradict their personal values.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c5', // C
    options: [
      { id: 'opt-b', verdictLabel: 'Balanced multi-perspective synthesis evaluating diverse community viewpoints', critique: 'Interviewing three fellow factory workers guarantees complete representation of environmental concerns.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Severe Single-Lens Bias: Ignores public health, water quality, and fisheries', critique: 'Evaluating an industrial chemical plant solely through factory jobs while ignoring toxic river runoff is dangerously incomplete.', isCorrectVerdict: true },
      { id: 'opt-a', verdictLabel: 'Objective economic assessment that properly prioritizes industrial growth', critique: 'Commercial factory job creation always outweighs localized environmental and river fishing concerns.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c6', // A
    options: [
      { id: 'opt-a', verdictLabel: 'Parochial Scope Failure: Fails to connect local findings to broader scales', critique: 'A Cambridge capstone requires analyzing how local village issues reflect national policies and global dynamics.', isCorrectVerdict: true },
      { id: 'opt-b', verdictLabel: 'Exemplary localized study that properly ignores external national noise', critique: 'Global Perspectives research should focus exclusively on isolated neighborhoods without national context.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Comprehensive multi-scalar research satisfying all examination standards', critique: 'Studying village rice fields automatically fulfills all global trade and climate treaty analysis criteria.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c7', // B
    options: [
      { id: 'opt-b', verdictLabel: 'Technological Determinism: Digital software tools automatically guarantee learning', critique: 'Providing computer tablets without teacher training or digital curriculum results in games, not learning.', isCorrectVerdict: false },
      { id: 'opt-a', verdictLabel: 'Premature Victory Declaration: Assumes hardware provision equals educational success', critique: 'Delivering tablets without training, electricity, or digital literacy support will not improve literacy outcomes.', isCorrectVerdict: true },
      { id: 'opt-c', verdictLabel: 'Flawless educational policy recommendation ready for immediate budget funding', critique: 'Purchasing hardware devices represents the sole necessary step to eliminate rural educational inequality.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c8', // C
    options: [
      { id: 'opt-b', verdictLabel: 'Transparent research limitation acknowledging sample demographic constraints', critique: 'Surveying only students who own luxury cars provides representative data for overall youth mobility.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Catastrophic Selection Bias: Generalizing elite youth habits to entire population', critique: 'Surveying wealthy private academy students cannot inform municipal public bus routes for low-income workers.', isCorrectVerdict: true },
      { id: 'opt-a', verdictLabel: 'Sound sociological inquiry using stratified probabilistic sampling methods', critique: 'Adolescent students from wealthy backgrounds exhibit transportation habits identical to factory workers.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c9', // A
    options: [
      { id: 'opt-a', verdictLabel: 'Disregard for Human Rights: Proposing authoritarian coercion for public health', critique: 'Forcing citizens into mandatory medical detention violates basic civil liberties and destroys community trust.', isCorrectVerdict: true },
      { id: 'opt-b', verdictLabel: 'Pragmatic and legally sound public health policy for pandemic containment', critique: 'Authoritarian police surveillance represents the most effective strategy for municipal health emergencies.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Balanced bridge solution reconciling civil liberties with epidemiological safety', critique: 'Mandatory military detention camps protect individual constitutional freedoms while enforcing quarantine.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c10', // B
    options: [
      { id: 'opt-b', verdictLabel: 'Objective scientific skepticism that appropriately challenges established data', critique: 'Questioning international climate consensus based on three personal hot days shows critical thinking.', isCorrectVerdict: false },
      { id: 'opt-a', verdictLabel: 'Anecdotal Fallacy: Contrasting personal weather experience against climate models', critique: 'One student’s personal sensation of hot or cold days does not refute thirty years of peer-reviewed climate data.', isCorrectVerdict: true },
      { id: 'opt-c', verdictLabel: 'Valid inductive reasoning deriving universal meteorology laws from daily life', critique: 'Personal thermal perception provides empirical evidence superior to computerized weather satellite models.', isCorrectVerdict: false }
    ]
  },
  {
    id: 'g10-2-c11', // A
    options: [
      { id: 'opt-a', verdictLabel: 'Flawless Capstone Conclusion: Synthesizes evidence, hedges claims, and notes limitations', critique: 'Balances findings across scales, identifies methodological boundaries, and proposes actionable, funded solutions.', isCorrectVerdict: true },
      { id: 'opt-b', verdictLabel: 'Overly cautious conclusion that lacks decisive confidence and clear direction', critique: 'Acknowledging study limitations and proposing hedged solutions weakens the persuasive authority of an essay.', isCorrectVerdict: false },
      { id: 'opt-c', verdictLabel: 'Unscientific compromise that should take an absolute stand on one side of debate', critique: 'Academic researchers must declare an absolute winner between economic growth and environmental conservation.', isCorrectVerdict: false }
    ]
  }
];

for (const u of g10_2Updates) {
  updateGameOptions(u10File, u.id, u.options);
}
console.log('G10.2 updated successfully');
