import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, ShieldCheck, Droplets, Clock, ArrowRight, Calculator } from 'lucide-react';
import { FLOATING_FEATURES } from '../data';



export default function Hero({ onOpenQuote }) {
  // Map strings to Lucide icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Sun':
        return <Sun className="w-4 h-4 text-orange-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-secondary" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-primary" />;
    }
  };

  // Position multipliers or custom styles for the floating cards to stagger their look
  const floatingPositions = [
    { top: '8%', left: '-4%', delay: 0.1 },
    { top: '35%', right: '-8%', delay: 0.3 },
    { bottom: '12%', left: '-2%', delay: 0.5 },
    { bottom: '34%', left: '40%', delay: 0.7 },
    { top: '65%', right: '-5%', delay: 0.9 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-slate-50"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-primary/5 to-secondary/5 rounded-bl-[120px] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-t from-orange-500/3 to-primary/3 rounded-tr-[120px] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column - Bento Hero Card (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-center p-8 sm:p-12" id="hero-bento-left">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            <div className="space-y-6 sm:space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F57C00]/10 text-[#F57C00] rounded-full text-xs font-bold uppercase tracking-wider"
                id="hero-badge"
              >
                <span className="w-2.5 h-2.5 bg-[#F57C00] rounded-full animate-ping"></span>
                Premium Grade Manufacturing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-5xl text-slate-900 leading-tight tracking-tight"
                id="hero-headline"
              >
                Strong. Safe. <br />
                <span className="text-primary">
                  Reliable Water Solutions.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl"
                id="hero-subheading"
              >
                Tejas Plasto manufactures durable, UV-protected, 100% food-grade water storage tanks designed for homes, industries, agriculture, and commercial systems. Engineered to last a lifetime.
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
                id="hero-actions"
              >
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-slate-900/10"
                >
                  Explore Products <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/20"
                >
                  <Calculator className="w-4 h-4" /> Get a Quote
                </button>
              </motion.div>

              {/* Quick trust metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 font-medium font-mono uppercase tracking-wider"
                id="hero-trust"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> BIS Standards Certified
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> 100% FDA Food Material
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> 15-Year Warranty Shield
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Bento Image Frame (Span 5) */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full bg-white rounded-3xl border border-slate-200 p-3 shadow-sm relative overflow-hidden flex flex-col justify-center" id="hero-bento-right">
              
              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-full min-h-[650px] rounded-2xl overflow-hidden bg-white flex items-center justify-center"
                id="hero-img-container"
              >
                <img
                  src="/src/assets/images/hero.png"
                  alt="Tejas Plasto water tank manufacturing facility"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Feature Badges */}
                {FLOATING_FEATURES.map((feat, index) => {
                  const pos = floatingPositions[index];
                  return (
                    <motion.div
                      key={feat.text}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: pos.delay,
                        type: 'spring',
                        stiffness: 90,
                        damping: 15,
                      }}
                      style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        right: pos.right,
                        bottom: pos.bottom,
                      }}
                      className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-md border border-slate-100/80 whitespace-nowrap z-20 hover:scale-105 transition-transform cursor-default"
                    >
                      <div className="p-1 bg-slate-50 rounded-lg flex items-center justify-center">
                        {getIcon(feat.icon)}
                      </div>
                      <span className="font-sans font-bold text-[10px] text-slate-800 tracking-tight uppercase">{feat.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
