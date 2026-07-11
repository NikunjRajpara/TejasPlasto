import aquawings from "./assets/images/aquawings.png";
import aquawingsfull from "./assets/images/aquawingsfull.png";
import aquawingsblue from "./assets/images/aquawingsblue.png";
import aquawingswhite from "./assets/images/aquawingswhite.jpeg";
import rotomouldingpowder from "./assets/images/rotomouldingpowder.png";
import rotomouldingpowderbag from "./assets/images/rotomouldingpowderbag.jpeg";
import rotomouldingpowderdish from "./assets/images/rotomouldingpowderdish.png";
import aquawingspink from "./assets/images/aquawingspink.jpeg";
import factory from "./assets/images/factory.jpeg";
import powderbag from "./assets/images/powderbag.jpeg";
import packedwatertank from "./assets/images/packedwatertank.jpeg";

export const STATS= [
  { id: '1', value: 20, suffix: '+', label: 'Years Experience' },
  { id: '2', value: 10000, suffix: '+', label: 'Customers' },
  { id: '3', value: 100, suffix: '+', label: 'Dealers' },
  { id: '4', value: 20, suffix: '+', label: 'Tank Models' }
];

export const FLOATING_FEATURES = [
  { text: '100% Virgin Plastic', icon: 'Sparkles' },
  { text: 'UV Stabilized', icon: 'Sun' },
  { text: 'Leak Proof', icon: 'Droplets' },
  { text: 'Long Lasting', icon: 'Clock' }
];

export const PRODUCTS = [
  {
    id: "Aqua Wings Tank",
    category: "Water Storage Tanks",
    name: "Aqua Wings Tank",
    image: aquawings,
  },
  {
    id: "GL Water Tanks",
    category: "Water Storage Tanks",
    name: "GL Water Tanks",
    image: aquawingsfull,
  },
  {
    id: "Aqua Wings Blue",
    category: "Water Storage Tanks",
    name: "Aqua Wings Blue",
    image: aquawingsblue,
  },
  {
    id: "Rotomoulding Powder",
    category: "Rotomoulding Powder",
    name: "Rotomoulding Powder",
    image: rotomouldingpowder,
  },
  {
    id: "LLDPE Powder Bag",
    category: "Rotomoulding Powder",
    name: "LLDPE Powder Bag",
    image: rotomouldingpowderbag,
  },
  {
    id: "Rotomoulding Powder Dish",
    category: "Rotomoulding Powder",
    name: "Rotomoulding Powder Dish",
    image: rotomouldingpowderdish,
  },
];

export const FEATURES= [
   {
    id: 'f2',
    title: 'UV Resistant',
    description: 'Equipped with heavy-duty UV-stabilizer additives that block harmful ultraviolet rays, preventing polymer degradation and keeping water cool.',
    iconName: 'Sun'
  },
  {
    id: 'f3',
    title: 'Leak Proof Design',
    description: 'Formed via a seamless rotational moulding process. With no joints, welds, or weak seams, our tanks are inherently 100% leak-proof.',
    iconName: 'Droplets'
  },
  {
    id: 'f4',
    title: 'Anti-Bacterial lining',
    description: 'Infused with active copper and silver micro-bead technology on the inner layer, preventing the growth of algae, fungi and harmful pathogens.',
    iconName: 'Sparkles'
  },
  {
    id: 'f5',
    title: 'High Durability',
    description: 'Features a unique multi-ribbed external shell designed to withstand extreme physical impacts, high wind pressures and structural stresses.',
    iconName: 'Activity'
  },
  {
    id: 'f6',
    title: 'Rust Free',
    description: 'Unlike traditional metal tanks, our polymer formulation is 100% non-corrosive, guaranteeing long-term operation without scaling or rusting.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'f7',
    title: 'Easy Installation',
    description: 'Engineered with safe lifting lugs, lightweight structures and robust inlet-outlet flat zones, allowing rapid plumbing and secure setup.',
    iconName: 'Wrench'
  },
  {
    id: 'f8',
    title: 'Long Warranty',
    description: 'We stand behind our manufacturing quality. Every Tejas Plasto tank comes backed by an industry-leading comprehensive warranty up to 7 years.',
    iconName: 'Award'
  }
];

export const TIMELINE_STEPS= [
  {
    stepNumber: 1,
    title: 'Raw Material Selection',
    description: 'Sourcing 100% pure virgin LLDPE polymer granules',
    details: 'We strictly source high-density polymers from global leaders. The raw material undergoes micro-pulverizing and blending with premium UV stabilizers.'
  },
  {
    stepNumber: 2,
    title: 'Rotational Moulding',
    description: 'Seamless biaxial high-temperature casting',
    details: 'The pulverized powder is loaded into precision-machined heavy-gauge moulds. The mould rotates biaxially inside high-capacity computerized ovens, melting and distributing layers with absolute uniform wall thickness.'
  },
  {
    stepNumber: 3,
    title: 'Quality Inspection',
    description: 'Rigorous visual assessment',
    details: 'Post cooling, every tank is extracted and mapped. A detailed visual and dimension inspection checks the lid fitting and threads.'
  },
  {
    stepNumber: 4,
    title: 'Strength Testing',
    description: 'Hydrostatic pressure and drop-impact tests',
    details: 'Random batches undergo devastating structural stress testing—including filling beyond rated load capacity, heavy drop tests from heights, and extreme environment temperature chambers.'
  },
  {
    stepNumber: 5,
    title: 'Finishing & Threading',
    description: 'Trimming, profiling and airtight sealing',
    details: 'Extra parting lines are carefully trimmed by automated contour tools. Threads are profiled to ensure high-torque airtight sealing, preventing external wind dust, pollen, or insect ingress.'
  },
  {
    stepNumber: 6,
    title: 'Packaging & Delivery',
    description: 'Heavy protective wrap and flatbed dispatch',
    details: 'Tanks are wrapped in high-density stretch protective sleeves to prevent scuffing. Our company fleet ensures safe, prompt, direct flatbed truck shipping to dealer outlets and industrial yards.'
  }
];

export const INDUSTRIES = [
  { name: 'Residential', description: 'Bungalows, villas, high-rise residential towers, and housing societies.', icon: 'Home' },
  { name: 'Commercial', description: 'IT parks, corporate headquarters, shopping malls, and upscale luxury hotels.', icon: 'Building2' },
  { name: 'Agriculture', description: 'Irrigation sumps, cattle farms, greenhouses, and organic rural nurseries.', icon: 'Sprout' },
  { name: 'Industrial', description: 'Manufacturing plants, cooling towers, chemical processing, and boilers.', icon: 'Factory' },
  { name: 'Construction', description: 'On-site worker camps, cement mixing setups, and transient civil work sites.', icon: 'HardHat' },
  { name: 'Government Projects', description: 'Public municipal supplies, public schools, community welfare tanks, and railways.', icon: 'Milestone' }
];

export const TESTIMONIALS= [
  {
    id: 't1',
    name: 'Rajesh Nair',
    role: 'Managing Director',
    company: 'Nair Infrastructure Developers',
    rating: 5,
    review: 'We have been installing Tejas Plasto overhead and underground tanks in our high-rise luxury apartment projects across Gujarat for 6 years. Their structural strength, crack resistance under harsh summers and excellent dealer logistics have made them our default standard.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Suhasini Mehta',
    role: 'Chief MEP Consultant',
    company: 'Vertex Commercial Designs',
    rating: 4,
    review: 'We have been sourcing rotomoulding powder from Tejas Plasto for our manufacturing unit. The powder quality is consistent, processing is smooth and the finished products have excellent strength and surface finish. A dependable supplier for our production needs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Mahendra Singh Patel',
    role: 'Progressive Agriculturist',
    company: 'Patel Organic Agro Farms',
    rating: 5,
    review: 'We installed multiple 5,000-liter Tejas Plasto water tanks for our agricultural water storage requirements. The tanks are sturdy, easy to install and maintain excellent water quality. Their build quality and finish have exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't4',
    name: 'Vikram Sanghavi',
    role: 'Project Manager',
    company: 'Sterling Construction Corp',
    rating: 4,
    review: 'For our residential construction project, we selected Tejas Plasto overhead water tanks because of their strong build quality and premium finish. Delivery was on time, installation was straightforward and the overall product quality has been excellent.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY= [
  { id: 'g1', title: 'Aqua Wings Tank', category:'plant', image: aquawings, },
  { id: 'g2', title: 'GL Tank', category:'plant', image: aquawingsfull, },
  { id: 'g3', title: 'Aqua Wings Tank', category:'plant', image: aquawingsblue, },
  { id: 'g4', title: 'Rotomoulding-Powder', category:'products', image: rotomouldingpowder, },
  { id: 'g5', title: 'LLDPE Powder Bag', category:'products', image: rotomouldingpowderbag, },
  { id: 'g6', title: 'Rotomoulding Powder', category:'products', image: rotomouldingpowderdish, },
  { id: "g7", title: "factory", category: "interior", image: factory.jpeg },
  { id: "g8", title: "powderbag", category: "interior", image: powderbag.jpeg },
  { id: "g9", title: "packedwatertank", category: "interior", image: packedwatertank.jpeg }
];

export const FAQS= [
  {
    id: 'faq1',
    question: 'Which water tank size is best for my household?',
    answer: 'As a rule of thumb, an average person uses about 135-150 liters of water per day. For a family of 4, a 500-liter or 1,000-liter tank is highly recommended for standard daily water security. For areas with frequent municipal water interruptions, sizing up to 1,500L or 2,000L ensures a safer buffer.'
  },
  {
    id: 'faq2',
    question: 'What is the warranty period for Tejas Plasto tanks?',
    answer: 'We offer a tiered warranty based on the models and layer configurations. Our standard 3-layer tanks come with a 5-year warranty, our 4-layer premium tanks have a 7-year warranty.'
  },
  {
    id: 'faq3',
    question: 'What is the correct installation process?',
    answer: 'Tanks must always be placed on a perfectly flat, level, rigid concrete surface (RCC slab) that is fully supported. Installing on brick stilts, steel bars, or uneven surfaces creates extreme local stress points that will void the warranty. Ensure your inlet, outlet, and overflow plumbing lines have flexible couplings to allow for minor thermal expansion and contraction.'
  }  
];
