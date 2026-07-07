import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Sprout, Factory, HardHat, Landmark } from 'lucide-react';
import { INDUSTRIES } from '../data';

export default function IndustriesServed() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-primary" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-secondary" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'Factory': return <Factory className="w-6 h-6 text-orange-600" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-cyan-600" />;
      case 'Milestone': return <Landmark className="w-6 h-6 text-indigo-600" />;
      default: return <Home className="w-6 h-6 text-primary" />;
    }
  };

  const getAccentBg = (iconName: string) => {
    switch (iconName) {
      case 'Home': return 'bg-primary/5 text-primary border-primary/10';
      case 'Building2': return 'bg-secondary/5 text-secondary border-secondary/10';
      case 'Sprout': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Factory': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'HardHat': return 'bg-cyan-50 text-cyan-600 border-cyan-100';
      case 'Milestone': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">SECTOR COVERAGE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Catering to Vital Sectors of National Growth
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            From high-rise smart apartment towers to massive automated manufacturing lines and rural crop fields—our robust containment solutions ensure continuous water and chemical management.
          </p>
        </div>

        {/* Sector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="industries-grid">
          {INDUSTRIES.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xs hover:shadow-xl hover:border-slate-100 transition-all group relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getAccentBg(ind.icon)} group-hover:scale-110 transition-transform`}>
                  {getIcon(ind.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>

              {/* Bottom decorative anchor tag */}
              <div className="pt-6 mt-6 border-t border-slate-50 text-[10px] font-bold text-primary flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW SPECIFIED SOLUTION →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
