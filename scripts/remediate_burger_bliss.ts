import * as fs from 'fs';
import * as path from 'path';

interface OptionUpdate {
  id: string;
  options: { id: string; text: string }[];
}

function updateBurgerBlissFile(filePath: string, updates: OptionUpdate[]) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const update of updates) {
    const qIndex = content.indexOf(`id: '${update.id}'`);
    if (qIndex === -1) {
      throw new Error(`Item ${update.id} not found in ${filePath}`);
    }

    for (const opt of update.options) {
      const optIndex = content.indexOf(`id: '${opt.id}'`, qIndex);
      if (optIndex === -1) {
        throw new Error(`Option ${opt.id} not found for item ${update.id}`);
      }

      // Find text property
      const textMatch = content.slice(optIndex).match(/text:\s*'([^']*)'/);
      if (!textMatch) {
        throw new Error(`Text not found for option ${opt.id} in ${update.id}`);
      }

      const oldTextSnippet = `text: '${textMatch[1]}'`;
      const newTextSnippet = `text: '${opt.text.replace(/'/g, "\\'")}'`;
      
      const absoluteOptPos = optIndex + textMatch.index!;
      content = content.slice(0, absoluteOptPos) + newTextSnippet + content.slice(absoluteOptPos + oldTextSnippet.length);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Successfully updated ${updates.length} items in ${filePath}`);
}

const bbUpdates: OptionUpdate[] = [
  {
    id: 'bb-s1-q1',
    options: [
      { id: 'opt-1b', text: 'The executives miscalculated financial foreign exchange rates between US dollars and Indonesian rupiah reserves.' },
      { id: 'opt-1a', text: 'The executives assumed that customer dining habits in New York or London are universal across Southeast Asian markets.' },
      { id: 'opt-1c', text: 'The executives failed to hire enough Western interior decorators to display imported flags inside the restaurant dining hall.' }
    ]
  },
  {
    id: 'bb-s1-q2',
    options: [
      { id: 'opt-2b', text: 'Local customers demanded that the franchise stay open twenty-four hours strictly to host solo late-night video gaming.' },
      { id: 'opt-2c', text: 'Local customers preferred eating standing up outside the restaurant directly along busy public street sidewalk lanes.' },
      { id: 'opt-2a', text: 'Local dining is viewed primarily as a social, communal event requiring comfortable shared seating and family-style meals.' }
    ]
  },
  {
    id: 'bb-s1-q3',
    options: [
      { id: 'opt-3a', text: 'Cultural & Religious Lens at the National Scale (meeting statutory religious dietary laws for the majority population).' },
      { id: 'opt-3b', text: 'Economic Lens at the Personal Scale (monitoring individual student carbohydrate expenditure and personal daily fitness).' },
      { id: 'opt-3c', text: 'Political Lens at the Global Scale (requesting the United Nations General Assembly to supervise commercial recipes).' }
    ]
  },
  {
    id: 'bb-s1-q4',
    options: [
      { id: 'opt-4b', text: 'Customers collectively resolved that they would never purchase any meal prepared inside modern air-conditioned venues.' },
      { id: 'opt-4a', text: 'Curiosity drove one-off trial, but long-term eating habits are anchored in cultural staple foods like rice and chicken.' },
      { id: 'opt-4c', text: 'The national government issued an emergency executive decree strictly forbidding Western bread sandwiches nationwide.' }
    ]
  },
  {
    id: 'bb-s2-q1',
    options: [
      { id: 'opt-1b', text: 'A Cultural perspective at the Local scale, defending traditional Sundanese culinary heritage in West Java provinces.' },
      { id: 'opt-1c', text: 'A Social perspective at the Personal scale, worrying about individual adolescent pocket money budgets in Bandung.' },
      { id: 'opt-1a', text: 'An Economic perspective at the Global scale, prioritizing worldwide brand consistency and bulk supply-chain cost savings.' }
    ]
  },
  {
    id: 'bb-s2-q2',
    options: [
      { id: 'opt-2a', text: 'An Economic & Social perspective at Local and Personal scales, centered on family livelihood and small enterprise survival.' },
      { id: 'opt-2b', text: 'A Political perspective at the Global scale, seeking to rewrite multilateral World Trade Organization shipping covenants.' },
      { id: 'opt-2c', text: 'An aesthetic design perspective, complaining that Burger Bliss uses bright primary colors across its corporate logo signs.' }
    ]
  },
  {
    id: 'bb-s2-q3',
    options: [
      { id: 'opt-3b', text: 'A demand that international fast-food chains hire only tenured university professors to manage kitchen fryers.' },
      { id: 'opt-3a', text: 'A desire for modern social study spaces vs. strict personal financial budget constraints.' },
      { id: 'opt-3c', text: 'A demand that the restaurant franchise sell expensive Japanese motorcycles alongside customary side orders of fries.' }
    ]
  },
  {
    id: 'bb-s2-q4',
    options: [
      { id: 'opt-4b', text: 'Cultural Lens at the Global scale, monitoring international television ratings and broadcast advertising reach.' },
      { id: 'opt-4c', text: 'Personal Lens at the Individual scale, seeking to reserve a private municipal parking slot exclusively for his car.' },
      { id: 'opt-4a', text: 'Political & Social Lens at Local scale, safeguarding public infrastructure, municipal traffic flow, and urban sanitation.' }
    ]
  },
  {
    id: 'bb-s2-q5',
    options: [
      { id: 'opt-5a', text: 'Building a National Economic linkage, substituting imported beef with domestic poultry to support rural livelihoods.' },
      { id: 'opt-5b', text: 'Persuading Burger Bliss to eliminate cooked meals entirely and market unground raw agricultural grains across Java.' },
      { id: 'opt-5c', text: 'Encouraging local rural farmers to abandon agriculture and seek employment as commercial billboard fashion models.' }
    ]
  },
  {
    id: 'bb-s3-q1',
    options: [
      { id: 'opt-1b', text: 'Debating whether front-counter cashiers should speak multiple European languages or use non-verbal manual signs.' },
      { id: 'opt-1a', text: 'Operational standardization vs. lower ingredient production costs and higher local consumer market acceptance.' },
      { id: 'opt-1c', text: 'Choosing whether customer dining tables and chairs should be painted light lavender or neon fluorescent green.' }
    ]
  },
  {
    id: 'bb-s3-q2',
    options: [
      { id: 'opt-2b', text: 'By asserting that informal traditional food stalls are obsolete and should be outlawed across the municipality.' },
      { id: 'opt-2c', text: 'By claiming that Burger Bliss represents corporate greed and that international firms should be barred everywhere.' },
      { id: 'opt-2a', text: 'As structural tension between multinational market scale and vulnerable local livelihoods, where both pursue valid goals.' }
    ]
  },
  {
    id: 'bb-s3-q3',
    options: [
      { id: 'opt-3a', text: 'An environmental externality (Social lens) transforms into a direct operational financial cost (Economic lens).' },
      { id: 'opt-3b', text: 'The restaurant franchise immediately shutters all retail operations and liquidates commercial buildings to airlines.' },
      { id: 'opt-3c', text: 'Patrons are legally compelled to carry heavy porcelain dining plates from home inside their daily school backpacks.' }
    ]
  },
  {
    id: 'bb-s3-q4',
    options: [
      { id: 'opt-4b', text: 'It proves that corporate directors should disregard field surveys and ignore empirical consumer data from universities.' },
      { id: 'opt-4c', text: 'It proves that multinational restaurant corporations should restrict operations exclusively to subarctic continents.' },
      { id: 'opt-4a', text: 'Empirical data forces leaders to revise assumptions and adapt strategy to real regional consumer dining practices.' }
    ]
  },
  {
    id: 'bb-s4-q1',
    options: [
      { id: 'opt-1a', text: 'Obtain Halal certification, retain signature beef burgers, and introduce localized options: crispy chicken, rice, and sambal.' },
      { id: 'opt-1b', text: 'Double the portion sizes of imported beef patties, increase menu prices by fifty percent, and remove rice completely.' },
      { id: 'opt-1c', text: 'Cease food preparation operations and convert retail dining restaurants into imported textbook commercial bookstores.' }
    ]
  },
  {
    id: 'bb-s4-q2',
    options: [
      { id: 'opt-2b', text: 'Air-freight all raw poultry and packaged rice from distant foreign continents regardless of local agricultural supplies.' },
      { id: 'opt-2a', text: 'Establish long-term supply contracts with domestic farming cooperatives, meeting rigorous commercial and Halal standards.' },
      { id: 'opt-2c', text: 'Refuse payment to rural growers and demand that agricultural cooperatives donate poultry supplies without compensation.' }
    ]
  },
  {
    id: 'bb-s4-q3',
    options: [
      { id: 'opt-3b', text: 'Deploy private armed guards to evict traditional street vendors and erect concrete barriers around parking perimeters.' },
      { id: 'opt-3c', text: 'Purchase and demolish all neighboring residential homes to construct an expansive private golf course for executives.' },
      { id: 'opt-3a', text: 'Create a "Culinary Heritage Alley" for licensed local warungs, organize joint cleanups, and avoid predatory price dumping.' }
    ]
  }
];

updateBurgerBlissFile(path.resolve(process.cwd(), 'src/data/games/burgerBlissData.ts'), bbUpdates);
