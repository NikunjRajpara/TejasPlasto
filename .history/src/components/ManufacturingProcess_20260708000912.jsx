import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, ShieldAlert, BadgeCheck, Zap, Scissors, Truck, ChevronRight } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (num) => {
    switch (num) {
      case 1: return <Zap className="w-5 h-5" />;
      case 2: return <Settings className="w-5 h-5" />;
      case 3: return <BadgeCheck className="w-5 h-5" />;
      case 4: return <ShieldAlert className="w-5 h-5" />;
      case 5: return <Scissors className="w-5 h-5" />;
      case 6: return <Truck className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">HOW IT IS MADE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Advanced Biaxial Rotational Moulding Process
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            Our state-of-the-art facilities rely on computerized temperature control and precision cooling cycles to achieve absolute uniform wall thickness and zero internal stress points.
          </p>
        </div>

        {/* Horizontal Timeline Block */}
        <div className="relative mb-12">
          {/* Main Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
          
          {/* Active Connecting Track Fill Line */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStep - 1) / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-1/2 left-4 h-1 bg-primary -translate-y-1/2 hidden md:block"
          />

          {/* Timeline Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10" id="timeline-nodes">
            {TIMELINE_STEPS.map((step) => {
              const isPassed = step.stepNumber <= activeStep;
              const isActive = step.stepNumber === activeStep;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className="flex flex-col items-center text-center focus:outline-none group relative cursor-pointer"
                  id={`timeline-step-${step.stepNumber}`}
                >
                  {/* Step Bubble Indicator */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive
                        ? '#0B5ED7'
                        : isPassed
                        ? '#00B8D9'
                        : '#FFFFFF',
                      borderColor: isPassed ? '#0B5ED7' : '#CBD5E1',
                    }}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all shadow-md ${
                      isActive ? 'text-white' : isPassed ? 'text-white' : 'text-slate-400'
                    }`}
                  >
                    {getStepIcon(step.stepNumber)}
                  </motion.div>

                  {/* Step Label */}
                  <div className="mt-4 space-y-1">
                    <span className={`text-[10px] font-bold tracking-widest uppercase block ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                      Phase 0{step.stepNumber}
                    </span>
                    <h4 className={`font-display font-bold text-xs sm:text-sm ${isActive ? 'text-slate-900 font-extrabold' : 'text-slate-500 group-hover:text-slate-700'}`}>
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Expanded Details Card */}
        <AnimatePresence mode="wait">
          {TIMELINE_STEPS.map((step) => {
            if (step.stepNumber !== activeStep) return null;

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                id="timeline-expanded-details"
              >
                {/* Visual Step number */}
                <div className="md:col-span-3 text-center md:text-left space-y-2">
                  <div className="text-7xl font-display font-extrabold text-primary/10">
                    0{step.stepNumber}
                  </div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase block">
                    STAGE SPECIFICATION
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Subtitle/Overview */}
                <div className="md:col-span-9 space-y-4 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    {step.description}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.details}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Computerized calibration
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> No structural seams
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> 100% Quality checked
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation buttons inside timeline to walk user through */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            disabled={activeStep === 1}
            onClick={() => setActiveStep(prev => prev - 1)}
            className="px-4 py-2 bg-white text-slate-600 border border-slate-200 text-xs font-semibold rounded-lg hover:bg-slate-50 disabled:opacity-40"
            id="prev-timeline-btn"
          >
            Previous Stage
          </button>
          <button
            disabled={activeStep === 6}
            onClick={() => setActiveStep(prev => prev + 1)}
            className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/95 flex items-center gap-1.5 shadow-sm disabled:opacity-40"
            id="next-timeline-btn"
          >
            Next Stage <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
