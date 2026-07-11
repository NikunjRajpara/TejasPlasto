export const STATS= [
  { id: '1', value: 20, suffix: '+', label: 'Years Experience' },
  { id: '2', value: 10000, suffix: '+', label: 'Customers' },
  { id: '3', value: 100, suffix: '+', label: 'Dealers' },
  { id: '4', value: 20, suffix: '+', label: 'Tank Models' }
];

export const FLOATING_FEATURES = [
  { text: '100% Virgin Plastic', icon: 'Sparkles' },
  { text: 'UV Stabilized', icon: 'Sun' },
  { text: 'Food Grade Material', icon: 'ShieldCheck' },
  { text: 'Leak Proof', icon: 'Droplets' },
  { text: 'Long Lasting', icon: 'Clock' }
];

export const PRODUCTS= [
  {
    id: 'water-storage',
    name: 'Premium Vertical Water Storage Tanks',
    description: 'Our flagship vertical overhead tanks feature Multi-Layer Protection (3, 4, or 5 layers) with specialized antibacterial linings, high-density UV stabilization, and a robust ribbed design for extreme structural strength.',
    category: 'Water Storage Tanks',
    image: '/src/assets/images/product_detail_1783423925112.jpg', // Using generated premium product detail
    layers: ['Outer UV Protection Layer', 'Strength-Enhancing Ribbed Layer', 'Insulation Layer (Heat Shield)', 'Chemical Resistance Layer', 'Inner Food-Grade Sanitized Anti-Bacterial Layer'],
    sizes: ['500L', '1,000L', '1,500L', '2,000L', '3,000L', '5,000L', '10,000L'],
    features: ['100% Virgin Food-Grade HDPE', 'Active Copper Anti-Bacterial Technology', 'Heavy-duty airtight threaded lid', 'Extreme weather & crack resistant', '10-Year Warranty'],
    applications: ['Residential apartments', 'Commercial complexes', 'Bungalows', 'Hospitals & Schools']
  },
  {
    id: 'loft-tanks',
    name: 'Ultra-Sleek Loft Tanks',
    description: 'Specially engineered for indoor, space-restricted loft installations. With a low-profile rectangular footprint and elegant white/cream aesthetics, these tanks blend seamlessly into modern indoor kitchens and bathrooms.',
    category: 'Loft Tanks',
    image: 'https://picsum.photos/seed/lofttank/600/400',
    layers: ['Virgin FDA Plastic Outer Shell', 'Internal Hygienic Layer'],
    sizes: ['100L', '150L', '200L', '300L', '400L', '500L'],
    features: ['Space-saving slim rectangular design', 'Rust-free & non-corrosive', 'Fits easily above standard false ceilings', 'Ultra-lightweight yet rigid'],
    applications: ['Bathroom lofts', 'Kitchen compartments', 'Individual flats', 'Office pantries']
  },
  {
    id: 'underground-tanks',
    name: 'Heavy-Duty Underground Tanks',
    description: 'Designed to withstand high earth pressures and water tables without cracking. These ribbed, heavy-gauge monolithic structures eliminate the need for brick masonry, preventing seepage or external contamination.',
    category: 'Underground Tanks',
    image: 'https://picsum.photos/seed/underground/600/400',
    layers: ['Extra-Thick Structural Outer Wall', 'Anti-Corrosion Intermediate Shield', 'Hygienic Inner Lining'],
    sizes: ['1,000L', '2,000L', '5,000L', '10,000L', '15,000L'],
    features: ['Zero leakage or root penetration', 'Ribbed pattern absorbs soil pressure', 'No structural masonry required', 'Easy clean sump system', '15-Year Structural Warranty'],
    applications: ['Rainwater harvesting systems', 'Main water storage sumps', 'Commercial plazas', 'Agricultural irrigation storage']
  },
  {
    id: 'agricultural-tanks',
    name: 'Agri-Max High-Capacity Tanks',
    description: 'Engineered specifically for agricultural demands, drip irrigation, and livestock water systems. These tanks are optimized for open field setups, providing extreme resistance to scorching sunlight and shifting winds.',
    category: 'Agricultural Tanks',
    image: 'https://picsum.photos/seed/agri/600/400',
    layers: ['Thermal UV-Max Blocking Shield', 'Carbon Black Strength Layer', 'Algae-Resistant Inner Layer'],
    sizes: ['2,000L', '5,000L', '10,000L', '20,000L'],
    features: ['100% Algae-growth prevention', 'High chemical resistance for fertilizers', 'Double reinforced flat base', 'Built-in lifting lugs for field mobility'],
    applications: ['Farm drip irrigation', 'Livestock watering yards', 'Remote nurseries', 'Greenhouse water collection']
  },
  {
    id: 'industrial-tanks',
    name: 'Fortress Series Industrial Tanks',
    description: 'Ultra-heavy-duty tanks designed for bulk industrial water management. Manufactured with maximum wall thickness and premium stabilizers to endure continuous high-velocity inflows, outdoor thermal shifts, and mechanical impacts.',
    category: 'Industrial Tanks',
    image: 'https://picsum.photos/seed/industrial/600/400',
    layers: ['High-Performance UV Shield', 'Core High-Density Impact Absorber', 'Chemical/Acid Protection Inner Lining'],
    sizes: ['5,000L', '10,000L', '15,000L', '20,000L', '30,000L'],
    features: ['Extra thick walls (+30% vs standard)', 'Custom flanged outlet provisions', 'Industrial lifting hooks', 'Seamless rotational moulding body'],
    applications: ['Power plants', 'Textile units', 'Chemical processing units', 'Heavy fabrication industries']
  },
  {
    id: 'chemical-storage',
    name: 'Chem-Shield Corrosion-Resistant Tanks',
    description: 'Constructed from specialized cross-linked polyethylene (XLPE) or heavy-duty linear low-density polyethylene (LLDPE). These tanks are custom-engineered to safely store hazardous chemicals, acids, bases, and industrial effluents.',
    category: 'Chemical Storage Tanks',
    image: 'https://picsum.photos/seed/chemical/600/400',
    layers: ['Corrosion Barrier Membrane', 'Reinforced Outer Shell', 'Specialized Chemical Liner'],
    sizes: ['500L', '1,000L', '2,000L', '5,000L', '10,000L'],
    features: ['Inert to concentrated acids & alkalis', 'Specially designed high-stress crack resistance', 'Available in specific gravity ratings (1.2 to 1.9)', 'Optional level indicator assemblies'],
    applications: ['Water treatment plants', 'Electroplating units', 'Pharma laboratories', 'Chemical dosing systems']
  }
];

export const FEATURES= [
  {
    id: 'f1',
    title: 'Food Grade Material',
    description: 'Manufactured from 100% FDA-approved virgin plastic, ensuring the water remains pure, non-toxic, and safe for drinking and culinary purposes.',
    iconName: 'ShieldCheck'
  },
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
    description: 'Infused with active copper and silver micro-bead technology on the inner layer, preventing the growth of algae, fungi, and harmful pathogens.',
    iconName: 'Sparkles'
  },
  {
    id: 'f5',
    title: 'High Durability',
    description: 'Features a unique multi-ribbed external shell designed to withstand extreme physical impacts, high wind pressures, and structural stresses.',
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
    description: 'Engineered with safe lifting lugs, lightweight structures, and robust inlet-outlet flat zones, allowing rapid plumbing and secure setup.',
    iconName: 'Wrench'
  },
  {
    id: 'f8',
    title: 'Long Warranty',
    description: 'We stand behind our manufacturing quality. Every Tejas Plasto tank comes backed by an industry-leading comprehensive warranty up to 15 years.',
    iconName: 'Award'
  }
];

export const TIMELINE_STEPS= [
  {
    stepNumber: 1,
    title: 'Raw Material Selection',
    description: 'Sourcing 100% pure virgin LLDPE polymer granules',
    details: 'We strictly source food-grade, high-density polymers from global leaders. The raw material undergoes micro-pulverizing and blending with premium UV stabilizers and antibacterial compounds.'
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
    description: 'Rigorous visual and ultrasonic assessment',
    details: 'Post cooling, every tank is extracted and mapped. Ultrasonic thickness gauges measure wall uniformity at 24 critical spots. A detailed visual and dimension inspection checks the lid fitting and threads.'
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

export const CERTIFICATIONS = [
  { title: 'ISO 9001:2015 Certified', description: 'International standard validating consistent, top-tier manufacturing processes, administrative workflows, and quality systems.', icon: 'CheckCircle2' },
  { title: 'FDA Food-Grade Certification', description: 'Material testing validation proving that the plastics used do not leech harmful chemicals or organic compounds into stored drinking water.', icon: 'Award' },
  { title: '100% Quality Tested Shield', description: 'Guarantees that each batch has withstood high pressure stress tests, heavy dynamic impact testing, and tensile strength audits.', icon: 'ShieldCheck' },
  { title: 'BIS Indian Standards compliant', description: 'Designed and manufactured strictly in alignment with IS:12701 specifications for polyethylene water storage tanks.', icon: 'FileCheck' }
];

export const TESTIMONIALS= [
  {
    id: 't1',
    name: 'Rajesh Nair',
    role: 'Managing Director',
    company: 'Nair Infrastructure Developers',
    rating: 5,
    review: 'We have been installing Tejas Plasto overhead and underground tanks in our high-rise luxury apartment projects across Gujarat for 6 years. Their structural strength, crack resistance under harsh summers, and excellent dealer logistics have made them our default standard.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Suhasini Mehta',
    role: 'Chief MEP Consultant',
    company: 'Vertex Commercial Designs',
    rating: 5,
    review: 'Finding chemical and acid storage tanks with precise specific gravity and thick, uniform walls was always a challenge. Tejas Plasto custom flanged LLDPE tanks solved our industrial clients’ problems. Excellent chemical durability.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Mahendra Singh Patel',
    role: 'Progressive Agriculturist',
    company: 'Patel Organic Agro Farms',
    rating: 5,
    review: 'Our drip irrigation system requires massive bulk water supply. We installed three 10,000-liter Agri-Max tanks under open direct sunlight. It has been 4 years, and we have zero algae formation and no structural warping. Truly top quality!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't4',
    name: 'Vikram Sanghavi',
    role: 'Project Manager',
    company: 'Sterling Construction Corp',
    rating: 4,
    review: 'We used their underground sump tanks for a major government school project. No brick masonry was needed, which saved us a lot of time and money. The tanks are robust, highly durable, and very easy to drop into place. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const DEALERS= [
  { id: 'd1', name: 'Tejas Plasto Ahmedabad Hub', state: 'Gujarat', city: 'Ahmedabad', phone: '+91 98765 43210', email: 'ahmedabad@tejasplasto.com' },
  { id: 'd2', name: 'Apex Polymer Distributors', state: 'Gujarat', city: 'Surat', phone: '+91 98765 43211', email: 'surat@tejasplasto.com' },
  { id: 'd3', name: 'Western Tank Agency', state: 'Maharashtra', city: 'Mumbai', phone: '+91 98765 43212', email: 'mumbai@tejasplasto.com' },
  { id: 'd4', name: 'Maratha Polymer Agency', state: 'Maharashtra', city: 'Pune', phone: '+91 98765 43213', email: 'pune@tejasplasto.com' },
  { id: 'd5', name: 'Rajputana Hardware & Tanks', state: 'Rajasthan', city: 'Jaipur', phone: '+91 98765 43214', email: 'jaipur@tejasplasto.com' },
  { id: 'd6', name: 'Mewar Irrigation Supplies', state: 'Rajasthan', city: 'Udaipur', phone: '+91 98765 43215', email: 'udaipur@tejasplasto.com' },
  { id: 'd7', name: 'Central India Plastics', state: 'Madhya Pradesh', city: 'Indore', phone: '+91 98765 43216', email: 'indore@tejasplasto.com' },
  { id: 'd8', name: 'Satpura Hardwares', state: 'Madhya Pradesh', city: 'Bhopal', phone: '+91 98765 43217', email: 'bhopal@tejasplasto.com' },
  { id: 'd9', name: 'Deccan Tank Emporium', state: 'Karnataka', city: 'Bengaluru', phone: '+91 98765 43218', email: 'bengaluru@tejasplasto.com' },
  { id: 'd10', name: 'Coimbatore Tank World', state: 'Tamil Nadu', city: 'Coimbatore', phone: '+91 98765 43219', email: 'coimbatore@tejasplasto.com' },
  { id: 'd11', name: 'Ganga Valley Distributors', state: 'Uttar Pradesh', city: 'Lucknow', phone: '+91 98765 43220', email: 'lucknow@tejasplasto.com' },
  { id: 'd12', name: 'Purvanchal Hardwares', state: 'Uttar Pradesh', city: 'Varanasi', phone: '+91 98765 43221', email: 'varanasi@tejasplasto.com' }
];

export const GALLERY= [
  { id: 'g1', title: 'State-of-the-art Rotational Moulding', category: 'plant', image: '/src/assets/images/factory_interior_1783423911011.jpg' },
  { id: 'g2', title: 'Finished Water Storage Tanks Stacked', category: 'products', image: '/src/assets/images/hero_water_tanks_1783423894442.jpg' },
  { id: 'g3', title: 'High-Capacity Warehouse Facility', category: 'warehouse', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
  { id: 'g4', title: 'Specialized Chemical Storage Installation', category: 'installation', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
  { id: 'g5', title: 'Heavy-Duty Sump Tank Dropped on Site', category: 'installation', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600' },
  { id: 'g6', title: 'Custom Extrusion and Finishing Station', category: 'plant', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600' }
];

export const FAQS= [
  {
    id: 'faq1',
    question: 'Which water tank size is best for my household?',
    answer: 'As a rule of thumb, an average person uses about 135-150 liters of water per day. For a family of 4, a 500-liter or 1,000-liter tank is highly recommended for standard daily water security. For areas with frequent municipal water interruptions, sizing up to 1,500L or 2,000L ensures a safer buffer.'
  },
  {
    id: 'faq2',
    question: 'Is the plastic material strictly food-grade?',
    answer: 'Yes, 100%! All Tejas Plasto water tanks are manufactured using 100% FDA-approved high-density virgin polyethylene (HDPE/LLDPE). Unlike recycled plastic which may leach heavy metals or dangerous volatile organic chemicals (VOCs), our virgin material is fully certified to hold drinking water and foodstuffs without imparting any toxic odors or taste.'
  },
  {
    id: 'faq3',
    question: 'What is the warranty period for Tejas Plasto tanks?',
    answer: 'We offer a tiered warranty based on the models and layer configurations. Our standard 3-layer tanks come with a 5-year replacement warranty, our 4-layer premium tanks have an 8-year warranty, and our ultimate Multi-Layer Antibacterial series comes with a comprehensive 10 to 15-year warranty against structural cracking and UV degradation.'
  },
  {
    id: 'faq4',
    question: 'What is the correct installation process?',
    answer: 'Tanks must always be placed on a perfectly flat, level, rigid concrete surface (RCC slab) that is fully supported. Installing on brick stilts, steel bars, or uneven surfaces creates extreme local stress points that will void the warranty. Ensure your inlet, outlet, and overflow plumbing lines have flexible couplings to allow for minor thermal expansion and contraction.'
  },
  {
    id: 'faq5',
    question: 'What is the expected delivery time after ordering?',
    answer: 'Standard configurations and sizes (500L to 5,000L) are shipped from our closest dealer hubs within 24 to 48 hours. Heavy industrial bulk tanks (10,000L to 30,000L) or specialized chemical storage systems built with custom flange nozzles typically require 4 to 7 working days for fabrication, final stress testing, and flatbed transport.'
  },
  {
    id: 'faq6',
    question: 'Are custom tank sizes and custom inlet/outlet configurations available?',
    answer: 'For large commercial, institutional, or chemical industries, we can pre-drill and install professional flanged inlets, outlets, drain valves, and liquid level sensors in specific positions directly at our manufacturing plant. Contact our technical support team with your design sketches, and we will build it exactly to your blueprints.'
  }
];
