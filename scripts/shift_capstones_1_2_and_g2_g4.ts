import * as fs from 'fs';
import * as path from 'path';

// 1. CAPSTONE 1 (src/data/games/unit1Game.ts)
const cap1Path = path.resolve(process.cwd(), 'src/data/games/unit1Game.ts');
let cap1Content = fs.readFileSync(cap1Path, 'utf-8');

// Expand distractors in Case 1 and Case 2 stages
const cap1Replacements = [
  {
    target: "text: 'The municipal government should immediately cancel all industrial zoning permits and force factories to relocate.'",
    replacement: "text: 'The municipal government should immediately cancel all industrial zoning permits and force factories to relocate, although this approach creates severe unemployment and triggers prolonged legal battles with commercial manufacturers.'"
  },
  {
    target: "text: 'The city should ban all private motorized vehicles and mandate walking or bicycles exclusively.'",
    replacement: "text: 'The city should ban all private motorized vehicles and mandate walking or bicycles exclusively, despite ignoring outer-suburban commuting distances, disability accessibility needs, and logistics freight freight deliveries.'"
  },
  {
    target: "text: 'Construct separate walled highway corridors exclusively for heavy industrial freight vehicles.'",
    replacement: "text: 'Construct separate walled highway corridors exclusively for heavy industrial freight vehicles, although civil engineering capital costs and urban land acquisition hurdles make this plan financially prohibitive for the municipal treasury.'"
  },
  {
    target: "text: 'Subsidize fuel exclusively for private commercial vehicles while freezing public transit bus fleets.'",
    replacement: "text: 'Subsidize fuel exclusively for private commercial vehicles while freezing public transit bus fleets, despite accelerating localized air pollution corridors and exacerbating traffic congestion for ordinary urban commuters.'"
  }
];

for (const r of cap1Replacements) {
  if (cap1Content.includes(r.target)) {
    cap1Content = cap1Content.replace(r.target, r.replacement);
    console.log('Capstone 1 replacement applied');
  }
}
fs.writeFileSync(cap1Path, cap1Content, 'utf-8');

// 2. CAPSTONE 2 (src/data/games/unit2Game.ts)
const cap2Path = path.resolve(process.cwd(), 'src/data/games/unit2Game.ts');
let cap2Content = fs.readFileSync(cap2Path, 'utf-8');

const cap2Replacements = [
  {
    target: "description: 'Survey 10 fishermen at the central harbor during morning fish auctions.'",
    replacement: "description: 'Survey 10 fishermen at the central harbor during morning fish auctions, despite introducing severe convenience sampling bias and failing to capture offshore artisanal fleets across outer islands.'"
  },
  {
    target: "description: 'Interview 5 elderly farmers living near the main industrial canal outlet.'",
    replacement: "description: 'Interview 5 elderly farmers living near the main industrial canal outlet, although qualitative anecdotal interviews cannot establish population-level toxicology rates across the province.'"
  },
  {
    target: "description: 'Collect water samples only from the surface layer next to the main ferry terminal.'",
    replacement: "description: 'Collect water samples only from the surface layer next to the main ferry terminal, failing to account for benthic sediment accumulation, seasonal monsoon currents, and chemical depth stratification.'"
  },
  {
    target: "description: 'Distribute online surveys via social media student channels to measure water quality.'",
    replacement: "description: 'Distribute online surveys via social media student channels to measure water quality, despite digital self-selection bias and the inability of subjective public perceptions to measure parts-per-billion chemical toxicity.'"
  },
  {
    target: "description: 'Publish preliminary unverified lab readings directly on community bulletin boards.'",
    replacement: "description: 'Publish preliminary unverified lab readings directly on community bulletin boards, although un-replicated findings risk generating severe public panic without identifying actionable contamination sources.'"
  },
  {
    target: "description: 'Discard all contradictory water test readings to ensure the final report presents a uniform conclusion.'",
    replacement: "description: 'Discard all contradictory water test readings to ensure the final report presents a uniform conclusion, violating fundamental research ethics, transparency standards, and scientific falsification protocols.'"
  }
];

for (const r of cap2Replacements) {
  if (cap2Content.includes(r.target)) {
    cap2Content = cap2Content.replace(r.target, r.replacement);
    console.log('Capstone 2 replacement applied');
  }
}
fs.writeFileSync(cap2Path, cap2Content, 'utf-8');

// 3. G2.2 PIPELINE (src/data/games/unit2MicroGamesData.ts)
const u2Path = path.resolve(process.cwd(), 'src/data/games/unit2MicroGamesData.ts');
let u2Content = fs.readFileSync(u2Path, 'utf-8');

const g2Replacements = [
  {
    target: "text: 'Step 8: Formulating final municipal policy recommendations and action plans.'",
    replacement: "text: 'Step 8: Formulating final municipal policy recommendations and action plans, although executing policy actions requires multi-year legislative reviews and dedicated municipal budget allocations.'"
  },
  {
    target: "text: 'Step 2: Preparing a comprehensive academic literature review bibliography.'",
    replacement: "text: 'Step 2: Preparing a comprehensive academic literature review bibliography, despite needing systematic citation screening and comparative methodological synthesis across multiple research libraries.'"
  },
  {
    target: "text: 'Drafting the concluding bibliography according to APA academic guidelines.'",
    replacement: "text: 'Drafting the concluding bibliography according to APA academic guidelines, although formatting referencing styles does not define the core research boundaries or investigatory scope.'"
  },
  {
    target: "text: 'Submitting policy petitions to provincial parliament committees for legislative review.'",
    replacement: "text: 'Submitting policy petitions to provincial parliament committees for legislative review, despite political advocacy operating outside the initial data processing and empirical validation pipeline.'"
  },
  {
    target: "text: 'Conducting in-depth semi-structured qualitative interviews with five senior school administrators.'",
    replacement: "text: 'Conducting in-depth semi-structured qualitative interviews with five senior school administrators, although small qualitative samples cannot establish statistically generalizable prevalence across the student body.'"
  }
];

for (const r of g2Replacements) {
  if (u2Content.includes(r.target)) {
    u2Content = u2Content.replace(r.target, r.replacement);
    console.log('G2.2 replacement applied');
  }
}
fs.writeFileSync(u2Path, u2Content, 'utf-8');

// 4. G4.3 CONNECTING THE DOTS (src/data/games/unit4MicroGamesData.ts)
const u4Path = path.resolve(process.cwd(), 'src/data/games/unit4MicroGamesData.ts');
let u4Content = fs.readFileSync(u4Path, 'utf-8');

const g4Replacements = [
  {
    target: "text: 'Declare synthetic microplastics completely harmless because Study B detected zero acute hospital admissions over three years.'",
    replacement: "text: 'Declare synthetic microplastics completely harmless because Study B detected zero acute hospital admissions over three years, despite clinical epidemiological lag periods requiring decadal monitoring.'"
  },
  {
    target: "text: 'Disregard the local community survey because subjective interviews carry zero validity compared to mathematical models.'",
    replacement: "text: 'Disregard the local community survey because subjective interviews carry zero validity compared to mathematical models, although local lived realities identify critical ground-level implementation barriers.'"
  },
  {
    target: "text: 'Methodological flaw: the university researchers should have forced all mothers to drink formula milk exclusively.'",
    replacement: "text: 'Methodological flaw: the university researchers should have forced all mothers to drink formula milk exclusively, severely violating institutional research ethics, maternal autonomy, and clinical health protocols.'"
  },
  {
    target: "text: 'Balinese business enterprises intentionally falsified accounting ledgers during one of the two investigation periods.'",
    replacement: "text: 'Balinese business enterprises intentionally falsified accounting ledgers during one of the two investigation periods, making unsubstantiated fraud accusations without examining seasonal tourism economic shifts.'"
  },
  {
    target: "text: 'Rely solely on the state report because government documents hold superior legal authority over university studies.'",
    replacement: "text: 'Rely solely on the state report because government documents hold superior legal authority over university studies, despite independent university forestry research revealing ground-level mangrove seedling mortality.'"
  }
];

for (const r of g4Replacements) {
  if (u4Content.includes(r.target)) {
    u4Content = u4Content.replace(r.target, r.replacement);
    console.log('G4.3 replacement applied');
  }
}
fs.writeFileSync(u4Path, u4Content, 'utf-8');

console.log('Finished shifts for Capstones 1-2 and G2.2, G4.3!');
