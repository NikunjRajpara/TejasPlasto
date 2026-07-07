import React from 'react';
import { Shield, Sparkles, AlertTriangle, Eye, Layers, Sun, Snowflake } from 'lucide-react';

export default function ProductFeatures() {
  const checklists = [
    {
      title: 'UV Stabilized Carbon Shield',
      desc: 'Formulated with premium light stabilizers that block solar radiation, maintaining polymer elasticity and preventing color fading.',
      icon: <Sun className="w-5 h-5 text-orange-500" />
    },
    {
      title: '100% Food Grade Material',
      desc: 'Raw polymers are certified free of toxic chemical migration, ensuring water remains pure, tasteless, and completely safe for cooking.',
      icon: <Shield className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Extreme High Strength Ribs',
      desc: 'Integrated structural rings and multi-ribbed profiles distribute hydrostatic water pressure outwards, eliminating stress deformation.',
      icon: <Layers className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Crack & Impact Resistant',
      desc: 'Rotational polymer chains absorb sudden physical shocks, preventing stress cracks or puncturing in tough environments.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Multi-Layer Heat Shield Insulation',
      desc: 'Special foam layer limits external heat transfer, keeping internal water temperatures up to 25% cooler during intense summers.',
      icon: <Snowflake className="w-5 h-5 text-cyan-500" />
    },
    {
      title: 'Anti-Bacterial Active Protection',
      desc: 'Inner copper and zinc composite prevents biofilm synthesis, eliminating up to 99.9% of algae and bacterial growth.',
      icon: <Sparkles className="w-5 h-5 text-teal-500" />
    },
    {
      title: 'Extreme Weather Resilience',
      desc: 'Tested to survive hot deserts and freezing cold conditions (-10°C to +50°C) without brittle structural failure.',
      icon: <Shield className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="product-features-checklist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left*/}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl -z-10 pointer-events-none" />
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
              <img
                src="/src/assets/images/product_detail_1783423925112.jpg"
                alt="Tejas Plasto multi-layer vertical water storage tank close-up"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Material layers visual cutaway indicator label */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">
                  Premium Cutaway Design
                </span>
                <p className="text-white text-xs leading-relaxed font-sans">
                  Featuring specialized Multi-Layer protection with an insulated middle foam layer and a sanitized antibacterial internal lining.
                </p>
              </div>
            </div>
          </div>

          {/* Right*/}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-sm font-bold text-primary uppercase tracking-widest block">INTELLIGENT DESIGN</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Anatomy of a Premium Water Storage Tank
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0 rounded" />
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                We believe a water storage tank is a health shield, not just a container. Explore the advanced features that make Tejas Plasto the trusted choice for thousands of homes and industries.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="features-checklist-grid">
              {checklists.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <span className="text-primary font-bold">✓</span> {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
