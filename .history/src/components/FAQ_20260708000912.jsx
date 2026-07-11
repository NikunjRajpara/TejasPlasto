import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState('faq1');

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-secondary/2 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">LEARN MORE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            Have structural or installation questions? Browse through our technical guide or reach out to our MEP support helpline.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-3xl transition-all duration-300 ${
                  isOpen
                    ? 'border-primary bg-slate-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Header Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-bold text-slate-800 hover:text-slate-900 focus:outline-none transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Collapsible Answer Pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Sticky footer help block */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-sm text-slate-900">Still have unanswered questions?</h4>
            <p className="text-xs text-slate-500">Our commercial engineers are ready to assist you with blueprints.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            Contact Support Helpline
          </a>
        </div>

      </div>
    </section>
  );
}
