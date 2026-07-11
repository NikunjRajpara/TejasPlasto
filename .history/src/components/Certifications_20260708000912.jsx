import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, FileCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 className="w-8 h-8 text-primary" />;
      case 'Award': return <Award className="w-8 h-8 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-emerald-500" />;
      case 'FileCheck': return <FileCheck className="w-8 h-8 text-secondary" />;
      default: return <ShieldCheck className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="certifications-showcase">
      {/* Subtle styling grids */}
      <div className="absolute left-10 top-10 w-48 h-48 bg-primary/2 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">TRUST & CREDENTIALS</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Certified Quality Standards
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100/50 flex items-start gap-4 hover:bg-white hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="shrink-0 p-2 bg-white rounded-xl shadow-xs">
                {getIcon(cert.icon)}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-slate-900 text-sm">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle trust badge banner */}
        <div className="mt-12 text-center text-xs text-slate-400">
          All materials tested at recognized government laboratories under <strong className="text-slate-600">NABL Accreditation</strong> standards.
        </div>

      </div>
    </section>
  );
}
