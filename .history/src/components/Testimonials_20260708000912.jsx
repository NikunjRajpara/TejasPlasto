import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
      {/* Decorative background vectors */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-secondary/2 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say About Tejas Plasto
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-slate-600">
            Read honest feedback from real estate developers, industrial plant supervisors, and progressive farmers who trust our tanks for vital liquid storage.
          </p>
        </div>

        {/* Carousel Slider Block */}
        <div className="relative" id="testimonials-carousel">
          <div className="overflow-hidden bg-white border border-slate-100 rounded-3xl p-6 sm:p-12 shadow-xl relative">
            <Quote className="absolute top-6 right-8 text-primary/10 w-24 h-24 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Stars Rating */}
                <div className="flex gap-1" id="rating-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < TESTIMONIALS[currentIndex].rating
                          ? 'fill-amber-500 text-amber-500'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Paragraph */}
                <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium italic">
                  "{TESTIMONIALS[currentIndex].review}"
                </blockquote>

                {/* User Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {TESTIMONIALS[currentIndex].role}, <strong className="text-slate-700 font-semibold">{TESTIMONIALS[currentIndex].company}</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 mt-6">
            <div className="text-xs text-slate-500 sm:mr-auto">
              Showing testimonial <strong className="text-slate-800">{currentIndex + 1}</strong> of {TESTIMONIALS.length}
            </div>

            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-600 shadow-sm transition-all hover:scale-105"
              aria-label="Previous testimonial"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 text-slate-600 shadow-sm transition-all hover:scale-105"
              aria-label="Next testimonial"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
