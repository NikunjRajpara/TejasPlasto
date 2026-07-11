import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Water Storage Tanks', href: '#products' },
    { name: 'Loft Tanks', href: '#products' },
    { name: 'Underground Tanks', href: '#products' },
     ];

  const quickLinks = [
    { name: 'About Tejas Plasto', href: '#about' },
    { name: 'Our Product Specs', href: '#products' },
    { name: 'Manufacturing Process', href: '#process' },
    { name: 'Interactive Gallery', href: '#gallery' },
    { name: 'FAQs & Support', href: '#faq' },
  ];

  return (
    <footer className="bg-[#0E1726] text-slate-300 font-sans" id="app-footer">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12" id="footer-columns">
          
          {/* Col 1*/}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2.5" id="footer-logo">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/20">
                <Droplets className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  TEJAS <span className="text-secondary">PLASTO</span>
                </span>
                <span className="block text-[8px] text-slate-400 font-semibold tracking-widest uppercase -mt-0.5">
                  Water Storage Solutions
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Tejas Plasto manufactures premium, durable & UV-protected. Providing water security to homes, fields and factories since 2016.
            </p>

            
            
          </div>

          {/* Col 2*/}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productLinks.map((link, idx) => (
                <li key={`${link.name}-${idx}`}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3*/}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={`${link.name}-${idx}`}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4*/}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
              Contact Channels
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Balaji Industries, Gondal, Gujarat - 360311
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919898625850" className="hover:text-white transition-colors">
                  +91 98986 25850
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:contact@tejasplasto.com" className="hover:text-white transition-colors">
                  tejashplastollp@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/5 bg-slate-950/40 text-slate-500 py-6 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Tejas Plasto Industries. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#faq" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>•</span>
                      </div>
        </div>
      </div>
    </footer>
  );
}
