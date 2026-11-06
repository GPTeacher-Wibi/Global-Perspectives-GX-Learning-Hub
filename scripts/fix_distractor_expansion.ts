import * as fs from 'fs';
import * as path from 'path';

// ----------------------------------------------------------------------------
// FIX G5.2 in src/data/games/unit5MicroGamesData.ts
// ----------------------------------------------------------------------------
const u5Path = path.resolve(process.cwd(), 'src/data/games/unit5MicroGamesData.ts');
let u5Content = fs.readFileSync(u5Path, 'utf-8');

// First remove any expansion mistakenly added to correct options
const accidentalExpansion = ', despite failing to account for interpersonal group friction, workload inequity, and shared project deadlines.';
while (u5Content.includes(accidentalExpansion)) {
  u5Content = u5Content.replace(accidentalExpansion, '');
}

// Now expand a DISTRACTOR in items g5-2-s1-q1, g5-2-s1-q3, g5-2-s2-q1, g5-2-s2-q3, g5-2-s3-q1, g5-2-s3-q3
const g5DistractorsToExpand = [
  'Bluntly declares the senior teacher wrong in front of the group, causing public loss of face (kehilangan muka) and damaging rapport.',
  'Accuses the senior community leader of sabotaging the school project during a public neighborhood association forum.',
  'Demands that the teacher immediately penalize uncooperative group members without conducting any preliminary team mediation.',
  'Publicly criticizes the team leader on social media channels for scheduling project meetings during afternoon sports practice.',
  'Refuses to attend the final project exhibition unless the team adopts their personal graphic design proposals without compromise.',
  'Confronts school administrative staff aggressively regarding delayed printing budgets for community survey flyers.'
];

for (const d of g5DistractorsToExpand) {
  if (u5Content.includes(d)) {
    const clean = d.slice(0, -1);
    const expanded = clean + ', despite failing to account for interpersonal group dynamics, shared project deadlines, and constructive conflict resolution frameworks.';
    u5Content = u5Content.replace(d, expanded);
    console.log('Expanded G5.2 distractor successfully');
  }
}
fs.writeFileSync(u5Path, u5Content, 'utf-8');

// ----------------------------------------------------------------------------
// FIX G8.3 in src/data/games/unit8MicroGamesData.ts
// ----------------------------------------------------------------------------
const u8Path = path.resolve(process.cwd(), 'src/data/games/unit8MicroGamesData.ts');
let u8Content = fs.readFileSync(u8Path, 'utf-8');

const accidentalU8 = ', severely undermining fieldwork integrity, institutional trust, and local community safety.';
while (u8Content.includes(accidentalU8)) {
  u8Content = u8Content.replace(accidentalU8, '');
}

const g8DistractorsToExpand = [
  'Hide the camera behind a shopping bag and take candid photos without asking',
  'Offer 100,000 rupiah cash to vendor children to pose next to dirty trash piles',
  'Conceal recording equipment inside a backpack to capture authentic behavior without participant awareness',
  'Publish all raw market video footage on public social media channels without blurring vendor faces',
  'Pressure busy clinic nurses to complete surveys while they are administering emergency patient medications',
  'Discard community interview recordings that contradict the student researchers original hypothesis'
];

for (const d of g8DistractorsToExpand) {
  if (u8Content.includes(d)) {
    const expanded = d + ', severely undermining fieldwork research ethics, institutional consent standards, and local community safety';
    u8Content = u8Content.replace(d, expanded);
    console.log('Expanded G8.3 distractor successfully');
  }
}
fs.writeFileSync(u8Path, u8Content, 'utf-8');

// ----------------------------------------------------------------------------
// FIX G9.2 & G9.3 in src/data/games/unit9MicroGamesData.ts
// ----------------------------------------------------------------------------
const u9Path = path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts');
let u9Content = fs.readFileSync(u9Path, 'utf-8');

const accidentalU9a = ', despite completely failing to address underlying logical warrants and unexamined premises.';
while (u9Content.includes(accidentalU9a)) {
  u9Content = u9Content.replace(accidentalU9a, '');
}
const accidentalU9b = ', despite overlooking systemic polarization dynamics, cognitive confirmation biases, and verified empirical evidence.';
while (u9Content.includes(accidentalU9b)) {
  u9Content = u9Content.replace(accidentalU9b, '');
}

const g9DistractorsToExpand = [
  'School uniforms are made of cotton-polyester fabric weaves.',
  'Cars possess wheels made of vulcanized rubber.',
  'Buses run on diesel or electric power.',
  'Reading online produces identical deep cognitive focus as reading printed physical books.',
  'Argue that nutrition has zero influence on health and that lifestyle choices are completely irrelevant.',
  'Assume that because group members post screenshots of gains, their investment strategy must be mathematically sound.'
];

for (const d of g9DistractorsToExpand) {
  if (u9Content.includes(d)) {
    const clean = d.slice(0, -1);
    const expanded = clean + ', despite completely failing to evaluate underlying logical warrants, systemic variables, and unexamined empirical premises.';
    u9Content = u9Content.replace(d, expanded);
    console.log('Expanded G9 distractor successfully');
  }
}
fs.writeFileSync(u9Path, u9Content, 'utf-8');

// ----------------------------------------------------------------------------
// FIX G10.1 & G10.2 in src/data/games/unit10MicroGamesData.ts
// ----------------------------------------------------------------------------
const u10Path = path.resolve(process.cwd(), 'src/data/games/unit10MicroGamesData.ts');
let u10Content = fs.readFileSync(u10Path, 'utf-8');

const accidentalU10a = ', failing to synthesize multi-perspective trade-offs or acknowledge study limitations.';
while (u10Content.includes(accidentalU10a)) {
  u10Content = u10Content.replace(accidentalU10a, '');
}
const accidentalU10b = ', completely disregarding methodological validity, representative sampling standards, and empirical rigor.';
while (u10Content.includes(accidentalU10b)) {
  u10Content = u10Content.replace(accidentalU10b, '');
}

const g10DistractorsToExpand = [
  'The research project failed and the student must delete all traffic logs.',
  'Recommend closing all five schools because teaching online caused test drops.',
  'Declare solar power completely unviable because small island clinics have limited maintenance budgets.',
  'Conclude community gardens have no impact because 15 kg of vegetables is financially trivial.',
  'The researcher surveyed a broad representative cross-section of the entire city.',
  'Higher blood circulation from exercise directly increases cognitive test performance in all subjects.'
];

for (const d of g10DistractorsToExpand) {
  if (u10Content.includes(d)) {
    const clean = d.slice(0, -1);
    const expanded = clean + ', completely disregarding methodological validity, representative sampling standards, multi-scalar trade-offs, and empirical rigor.';
    u10Content = u10Content.replace(d, expanded);
    console.log('Expanded G10 distractor successfully');
  }
}
fs.writeFileSync(u10Path, u10Content, 'utf-8');

console.log('All distractor expansions properly targeted!');
