import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sun, Droplets, Sparkles, Activity, ShieldAlert, Wrench, Award, ArrowRight } from 'lucide-react';
import { FEATURES } from '../data';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-orange-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-primary" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-indigo-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-primary" />;
    }
  };

  const getBgColor = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return 'bg-emerald-50 text-emerald-700';
      case 'Sun': return 'bg-orange-50 text-orange-700';
      case 'Droplets': return 'bg-blue-50 text-blue-700';
      case 'Sparkles': return 'bg-teal-50 text-teal-700';
      case 'Activity': return 'bg-blue-50 text-blue-700';
      case 'ShieldAlert': return 'bg-rose-50 text-rose-700';
      case 'Wrench': return 'bg-indigo-50 text-indigo-700';
      case 'Award': return 'bg-amber-50 text-amber-700';
      default: return 'bg-blue-50 text-blue-700';
    }
  };

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-orange-500/3 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">THE TEJAS PLASTO EDGE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Uncompromising Engineering. Ultimate Liquid Safety.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            We build tanks with precise multi-layer engineering to isolate your stored water from intense heat, external impacts, algae formation, and structural cracking.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="features-cards-grid">
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all group"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${getBgColor(feat.iconName)} group-hover:scale-110 transition-transform`}>
                  {getIcon(feat.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Minimalist bullet highlights depending on feature */}
              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center text-[10px] font-bold text-slate-400 group-hover:text-primary transition-colors">
                ENGINEERED GUARANTEE • 100% RELIABLE
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-layer illustration text overlay banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg shadow-primary/20" id="why-us-banner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary bg-white/10 px-3 py-1 rounded-full">
                Material Health Standard
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-snug">
                Why food-grade virgin polymer material is critical for your family
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed max-w-2xl">
                Most cheap local water tanks are constructed using recycled black plastic which can leach hazardous heavy metals (like Lead and Cadmium) and phthalates directly into your daily cooking and bathing water. Tejas Plasto guarantees 100% FDA-approved virgin material that remains completely odorless, chemical-free, and safe for multiple decades.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-xl shadow-md transition-all hover:translate-x-1 inline-flex items-center gap-2"
              >
                Find Nearest Dealer <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
