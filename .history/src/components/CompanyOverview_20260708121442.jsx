import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ShieldCheck, Award, Map, Users, Settings, TrendingUp, Sparkles, Star, Quote } from 'lucide-react';
import { STATS } from '../data';

// Simple incremental counter hook for smooth numbers
function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(value / (duration / 16)); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold">
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function CompanyOverview() {
  const pillars = [
    {
      title: '15+ Years of Experience',
      desc: 'Formed in 2011, we stand at the forefront of polymer engineering, pioneering water containment systems that endure severe climates.',
      icon: <Award className="w-5 h-5 text-amber-600" />,
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Advanced Rotational Moulding',
      desc: 'Computerized biaxial rotational ovens distribute polymers uniformly, guaranteeing zero stress-cracking or weak seams.',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    
    {
      title: 'Direct Logistic Support',
      desc: 'Our commercial heavy flatbed fleet transports customized tanks straight to real estate developers and dealer hubs.',
      icon: <Map className="w-5 h-5 text-cyan-600" />,
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">WHO WE ARE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Setting the Benchmark in High-Grade Polymer Manufacturing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            Tejas Plasto stands for uncompromising safety and robust strength. We transform high-density virgin polymer resins into industry-leading liquid storage containment systems.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="about-bento-grid">
          
          {/* Card 1(Span col-8, row-span-2) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-100/30 transition-all duration-700" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#F57C00] rounded-full animate-pulse"></span>
                <span className="text-xs font-extrabold text-[#F57C00] uppercase tracking-wider">Premium Grade Manufacturing</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0E1726] leading-tight">
                Engineering Water Security for a Thriving Nation
              </h3>
              
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Water is humanity’s most vital resource. That’s why we do not compromise. By engineering heavy-gauge polymer walls with active UV shields, we ensure that every drop stored remains clean, cool, and fully isolated from external pathogens. We deploy advanced food-grade virgin polymer material that remains completely odorless, chemical-free, and safe for decades.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
             
                <span className="text-xs text-slate-500 font-medium">Join 10,000+ customers who trust our certified quality standards.</span>
              </div>
              <a href="#products" className="text-primary text-xs font-bold uppercase tracking-wider hover:text-blue-700 transition-colors">
                Explore Tech Specs &rarr;
              </a>
            </div>
          </div>

          {/* Card 2(Span col-4, dark style exactly like design) */}
          <div className="lg:col-span-4 bg-[#0E1726] rounded-3xl p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#00B8D9]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00B8D9]/20 transition-all duration-700" />
            
            <div className="flex justify-between items-start mb-8">
              <div className="p-3.5 bg-white/10 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-[#00B8D9]" />
              </div>
              <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1">Market Performance</span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-white">
                <AnimatedNumber value={10000} suffix="+" />
              </div>
              <div className="text-white/60 text-xs sm:text-sm tracking-wide">Happy Customers Nationwide</div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 mt-8 border-t border-white/10">
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-display">
                  <AnimatedNumber value={20} suffix="+" />
                </div>
                <div className="text-white/40 text-[9px] uppercase tracking-widest font-semibold mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#00B8D9] font-display">
                  <AnimatedNumber value={100} suffix="+" />
                </div>
                <div className="text-white/40 text-[9px] uppercase tracking-widest font-semibold mt-0.5">Dealer Points</div>
              </div>
            </div>
          </div>

          {/* Card 3(Span col-6, bento-style list) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <h3 className="font-display font-extrabold text-lg text-slate-950">The Tejas Edge Pillars</h3>
                
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="space-y-2 group">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${pillar.bgColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                        {pillar.icon}
                      </div>
                      <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed pl-11">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
              <Sparkles className="w-5 h-5 text-primary shrink-0 animate-pulse" />
              <span className="text-[11px] text-slate-500 leading-normal">
                Every single tank undergoes ultrasonic thickness audits, hydrostatic load compliance and visual thread profiling before leaving our plant.
              </span>
            </div>
          </div>

          {/* Card 4(Span col-6, orange accent exactly like design) */}
          <div className="lg:col-span-6 bg-[#F57C00] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg group">
            <div className="absolute top-0 right-0 p-4 opacity-15">
              <Quote className="w-32 h-32 text-white" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-md">FOUNDER'S MESSAGE</span>
              
              <p className="font-sans italic text-white/95 text-sm sm:text-base leading-relaxed pt-2">
                "Our vision is simple: to make pristine water containment accessible, reliable and indestructible. We design products for real-world climates, with real-world strength."
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-white/20 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display font-extrabold text-sm text-white border border-white/10">SK</div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm">SATISH KANSAGRA</h4>
                  <p className="text-white/75 text-[10px] uppercase font-semibold">Founder & Managing Director</p>
                </div>
              </div>

              <a
                href="#contact"
                className="bg-white hover:bg-slate-100 text-[#F57C00] px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all whitespace-nowrap"
              >
                Locate Nearest Dealer
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
