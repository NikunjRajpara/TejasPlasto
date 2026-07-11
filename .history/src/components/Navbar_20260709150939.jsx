import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Droplets,
  Phone,
  Calculator,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Manufacturing",
      path: "/manufacturing",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-xl border-b border-slate-200/60 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition">
                <Droplets className="w-6 h-6" />
              </div>

              <div>

                <h2 className="font-display font-bold text-xl tracking-tight text-slate-900">
                  TEJASH
                  <span className="text-secondary">
                    {" "}
                    PLASTO
                  </span>
                </h2>

                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-semibold -mt-1">
                  Water Storage Solutions
                </p>

              </div>
            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-1">

              {navLinks.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

            </nav>
			            {/* Right Side */}
            <div className="hidden sm:flex items-center gap-3">

              <a
                href="tel:+919898625850"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary transition"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="hidden md:inline">
                  +91 98986 25850
                </span>
              </a>

              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold flex items-center gap-2 hover:bg-primary/90 transition shadow-md shadow-primary/20"
              >
                <Calculator className="w-4 h-4" />
                Get a Quote
              </button>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="lg:hidden p-2 rounded-xl border border-slate-200 hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

        </div>

      </header>

      {/* ========================= */}
      {/* Mobile Drawer */}
      {/* ========================= */}

      <AnimatePresence>

        {mobileMenuOpen && (
          <>

            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
              }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl p-6 flex flex-col"
            >

              {/* Top */}

              <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Droplets className="w-5 h-5" />
                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      TEJASH
                      <span className="text-secondary">
                        {" "}
                        PLASTO
                      </span>
                    </h3>

                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Water Storage Solutions
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* Navigation */}

              <div className="mt-6 flex flex-col gap-2 flex-1">

                {navLinks.map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

              </div>

              {/* Bottom */}

              <div className="border-t border-slate-200 pt-6">

                <a
                  href="tel:+919898625850"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 text-slate-700"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 98986 25850
                </a>

                <button
                  onClick={() => {
                    onOpenQuote();
                    setMobileMenuOpen(false);
                  }}
                  className="mt-4 w-full py-3 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                >
                  <Calculator className="w-5 h-5" />
                  Get a Quote
                </button>

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>

    </>
  );
}