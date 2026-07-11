import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Sprout, Factory, HardHat, Landmark } from 'lucide-react';
import { INDUSTRIES } from '../data';

export default function IndustriesServed() {
  const getIcon = (iconName) => {
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

  const getAccentBg = (iconName) => {
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
    <section id="industries" className="py-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        

      </div>
    </section>
  );
}
