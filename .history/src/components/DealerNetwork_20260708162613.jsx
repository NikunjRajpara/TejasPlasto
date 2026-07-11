// import React, { useState, useMemo } from 'react';
// import { motion } from 'motion/react';
// import { MapPin, Search, Phone, Mail, Navigation2, CheckCircle, Truck, Globe } from 'lucide-react';
// import { DEALERS } from '../data';

// export default function DealerNetwork() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedState, setSelectedState] = useState('All');

//   // Distinct states list
//   const states = useMemo(() => {
//     const s = new Set();
//     DEALERS.forEach(d => s.add(d.state));
//     return ['All', ...Array.from(s)];
//   }, []);

//   // Filtered dealers
//   const filteredDealers = useMemo(() => {
//     return DEALERS.filter(dealer => {
//       const matchSearch =
//         dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dealer.state.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchState = selectedState === 'All' || dealer.state === selectedState;

//       return matchSearch && matchState;
//     });
//   }, [searchTerm, selectedState]);

//   // City-to-map coordinate mapping for dynamic SVG nodes
//   const cityCoordinates = {
//     'Ahmedabad': { x: 28, y: 48 },
//     'Surat': { x: 30, y: 56 },
//     'Mumbai': { x: 32, y: 68 },
//     'Pune': { x: 36, y: 72 },
//     'Jaipur': { x: 38, y: 35 },
//     'Udaipur': { x: 32, y: 42 },
//     'Indore': { x: 46, y: 52 },
//     'Bhopal': { x: 50, y: 50 },
//     'Bengaluru': { x: 44, y: 88 },
//     'Coimbatore': { x: 42, y: 94 },
//     'Lucknow': { x: 58, y: 30 },
//     'Varanasi': { x: 64, y: 34 }
//   };

//   return (
//     <section id="dealers" className="py-24 bg-white relative overflow-hidden">
//       {/* Background radial gradient */}
//       <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <span className="text-sm font-bold text-primary uppercase tracking-widest block">FIND DISTRIBUTOR</span>
//           <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
//             Our Nationwide Dealer & Supply Network
//           </h2>
//           <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
//           <p className="text-slate-600">
//             Click on active states or search your city to locate certified Tejas Plasto stockists. With optimized logistics, we guarantee fast on-site delivery.
//           </p>
//         </div>

//         {/* Live Metrics Header row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" id="dealers-metrics">
//           <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
//               <Globe className="w-6 h-6 animate-spin-slow" />
//             </div>
//             <div>
//               <p className="text-xl font-display font-bold text-slate-900">100+ Dealer Outlets</p>
//               <p className="text-xs text-slate-500 font-medium">Robust Distribution Hubs</p>
//             </div>
//           </div>

//           <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
//               <CheckCircle className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-xl font-display font-bold text-slate-900">7 Active States</p>
//               <p className="text-xs text-slate-500 font-medium">Pan-India Industrial Support</p>
//             </div>
//           </div>

//           <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4">
//             <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
//               <Truck className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-xl font-display font-bold text-slate-900">Next-Day Dispatch</p>
//               <p className="text-xs text-slate-500 font-medium">Fast Flatbed Fleet Shipping</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* Left Column*/}
//           <div className="lg:col-span-7 space-y-6">
            
//             {/* Search & Filter Controls */}
//             <div className="space-y-4">
//               <div className="relative">
//                 <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by city, dealer name or state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-slate-800 transition-all"
//                   id="dealer-search"
//                 />
//               </div>

//               {/* State pills */}
//               <div className="flex flex-wrap gap-2 pt-1" id="dealer-state-filters">
//                 {states.map((st) => (
//                   <button
//                     key={st}
//                     onClick={() => setSelectedState(st)}
//                     className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
//                       selectedState === st
//                         ? 'bg-primary text-white shadow-md shadow-primary/10'
//                         : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
//                     }`}
//                   >
//                     {st} {st !== 'All' ? `(${DEALERS.filter(d => d.state === st).length})` : ''}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Dealers List Card Scrollable wrapper */}
//             <div className="max-h-[460px] overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-slate-200" id="dealer-listings">
//               {filteredDealers.length > 0 ? (
//                 filteredDealers.map((dealer) => (
//                   <motion.div
//                     key={dealer.id}
//                     initial={{ opacity: 0, y: 5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-md transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 group"
//                   >
//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4 text-primary shrink-0" />
//                         <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
//                           {dealer.state} • {dealer.city}
//                         </span>
//                       </div>
//                       <h4 className="font-display font-bold text-slate-900 text-base">
//                         {dealer.name}
//                       </h4>
//                       <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
//                         <span className="flex items-center gap-1">
//                           <Phone className="w-3.5 h-3.5" /> {dealer.phone}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Mail className="w-3.5 h-3.5" /> {dealer.email}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2 pt-2 sm:pt-0 shrink-0">
//                       <a
//                         href={`https://wa.me/919876543210?text=Hello%20Tejas%20Plasto,%20I%20want%20to%20connect%20with%20dealer%20${encodeURIComponent(dealer.name)}%20in%20${dealer.city}`}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
//                       >
//                         WhatsApp
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <div className="text-center py-12 text-slate-400 text-sm">
//                   No active dealer locations match your search query. Try typing another state or contact our main corporate hub.
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Column*/}
//           <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center justify-center relative min-h-[480px]">
//             <div className="absolute top-4 left-6 text-left">
//               <h4 className="font-display font-extrabold text-sm text-slate-800">Regional Mapping Nodes</h4>
//               <p className="text-[10px] text-slate-400">Interactive distribution hubs & city channels</p>
//             </div>

//             {/* Map Frame SVG */}
//             <div className="relative w-full max-w-[320px] aspect-[4/5] mt-6 flex items-center justify-center">
//               {/* Dummy styled map outline to act as geographical overlay */}
//               <svg viewBox="0 0 100 110" className="w-full h-full text-slate-200 fill-current opacity-80">
//                 {/* Simplified geographic abstract outline of India */}
//                 <path d="M45,5 C55,10 50,20 60,18 C65,22 75,20 80,30 C75,35 78,45 82,50 C80,55 75,52 70,60 C71,65 65,70 60,72 C55,75 52,85 50,95 C48,105 45,108 42,108 C40,105 38,90 38,82 C35,78 30,80 25,75 C20,70 18,65 14,60 C10,55 12,50 15,48 C20,48 24,45 28,40 C32,38 35,25 38,20 C42,15 42,10 45,5 Z" className="text-slate-100 stroke-slate-200 stroke-[0.8]" />
                
//                 {/* Lines linking city nodes */}
//                 <g className="stroke-primary/20 stroke-[0.5] stroke-dasharray-[1,1]">
//                   <line x1="28" y1="48" x2="32" y2="68" />
//                   <line x1="32" y1="68" x2="44" y2="88" />
//                   <line x1="44" y1="88" x2="42" y2="94" />
//                   <line x1="38" y1="35" x2="58" y2="30" />
//                   <line x1="58" y1="30" x2="64" y2="34" />
//                   <line x1="46" y1="52" x2="50" y2="50" />
//                   <line x1="30" y1="56" x2="46" y2="52" />
//                 </g>

//                 {/* Draw City nodes */}
//                 {Object.entries(cityCoordinates).map(([city, coord]) => {
//                   const isFilteredIn = filteredDealers.some(d => d.city === city);
//                   return (
//                     <g key={city} className="cursor-pointer group">
//                       <circle
//                         cx={coord.x}
//                         cy={coord.y}
//                         r={isFilteredIn ? '3' : '2'}
//                         className={`transition-all duration-300 ${
//                           isFilteredIn ? 'fill-primary animate-pulse' : 'fill-slate-400 hover:fill-primary/60'
//                         }`}
//                       />
//                       <circle
//                         cx={coord.x}
//                         cy={coord.y}
//                         r={isFilteredIn ? '6' : '3'}
//                         className={`fill-none stroke-2 transition-all ${
//                           isFilteredIn ? 'stroke-primary/40 animate-ping' : 'stroke-transparent hover:stroke-slate-300'
//                         }`}
//                       />
//                     </g>
//                   );
//                 })}
//               </svg>

//               {/* Float HTML labels onto SVG coordinate map */}
//               {Object.entries(cityCoordinates).map(([city, coord]) => {
//                 const isFilteredIn = filteredDealers.some(d => d.city === city);
//                 if (!isFilteredIn) return null;
//                 return (
//                   <div
//                     key={city}
//                     style={{
//                       position: 'absolute',
//                       left: `${coord.x}%`,
//                       top: `${coord.y}%`,
//                       transform: 'translate(-50%, -100%)',
//                     }}
//                     className="bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-md border border-white/20 z-10 whitespace-nowrap"
//                   >
//                     {city}
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="mt-4 bg-white/70 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 text-[10px] text-slate-500 leading-relaxed text-center max-w-xs">
//               <strong>Interactive Map Legend:</strong> Highlighted tags show active dealer cities matching current state selection filters.
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
