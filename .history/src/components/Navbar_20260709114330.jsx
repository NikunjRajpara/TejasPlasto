import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, Phone, Calculator } from 'lucide-react';
import { Moon, Sun } from "lucide-react";

export default function Navbar({ onOpenQuote }) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [darkMode, setDarkMode] = useState(true);

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Products', href: '#products' },
		{ name: 'Features', href: '#why-us' },
		{ name: 'Manufacturing', href: '#process' },

		{ name: 'Gallery', href: '#gallery' },
		{ name: 'FAQ', href: '#faq' },
		{ name: 'Contact', href: '#contact' },
	];
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
};
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			// Simple active link detection
			const scrollPos = window.scrollY + 100;
			for (const link of navLinks) {
				const el = document.querySelector(link.href);
				if (el) {
					const offsetTop = el.offsetTop;
					const offsetHeight = el.offsetHeight;
					if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
						setActiveSection(link.href.slice(1));
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
					? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3'
					: 'bg-transparent py-5'
					}`}
				id="app-header"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<a href="#home" className="flex items-center gap-2.5 group" id="logo-link">
							<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
								<Droplets className="w-6 h-6 animate-pulse" />
							</div>
							<div>
								<span className="font-display font-bold text-xl tracking-tight text-slate-900">
									TEJASH <span className="text-secondary">PLASTO</span>
								</span>
								<span className="block text-[9px] text-slate-500 font-semibold tracking-widest uppercase -mt-1">
									Water Storage Solutions
								</span>
							</div>
						</a>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
										? 'text-primary bg-primary/5'
										: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
										}`}
								>
									{link.name}
								</a>
							))}
						</nav>

						{/* CTA Buttons */}
						<div className="hidden sm:flex items-center gap-3">
							<a
								href="tel:+919898625850"
								className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors px-3 py-2"
								id="header-phone-link"
							>
								<Phone className="w-4 h-4 text-primary" />
								<span className="hidden md:inline">+91 98986 25850</span>
							</a>
							<button
    onClick={toggleDarkMode}
    className="w-10 h-10 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
>
    {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
    ) : (
        <Moon className="w-5 h-5 text-slate-700" />
    )}
</button>
							<button
								onClick={onOpenQuote}
								className="px-4 py-2 bg-primary hover:bg-primary/95 text-white text-sm font-semibold rounded-xl flex items-center gap-2 shadow-md shadow-primary/10 transition-all hover:translate-y-[-1px]"
								id="header-quote-btn"
							>
								<Calculator className="w-4 h-4" /> Get a Quote
							</button>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="lg:hidden p-2 rounded-xl border border-slate-200/60 hover:bg-slate-50 text-slate-700 transition-colors"
							aria-label="Toggle menu"
							id="mobile-menu-toggle"
						>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Drawer */}
			{/* Mobile Menu Drawer */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileMenuOpen(false)}
							className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
							id="mobile-nav-backdrop"
						/>

						{/* Drawer */}
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl flex flex-col p-6 lg:hidden"
							id="mobile-nav-drawer"
						>
							{/* Logo */}
							<div className="flex items-center gap-3 pb-6 border-b border-slate-200">
								<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
									<Droplets className="w-5 h-5" />
								</div>

								<div>
									<h3 className="font-bold text-lg">
										TEJASH <span className="text-secondary">PLASTO</span>
									</h3>

									<p className="text-[10px] text-slate-500 uppercase tracking-wider">
										Water Storage Solutions
									</p>
								</div>
								{/* Close Button */}
								<button
									onClick={() => setMobileMenuOpen(false)}
									className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition"
								>
									<X className="w-5 h-5 text-slate-700" />
								</button>
							</div>

							{/* Navigation */}
							<div className="mt-6 flex flex-col gap-2">

								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className={`px-4 py-3 rounded-xl text-base font-medium transition ${activeSection === link.href.slice(1)
												? "bg-primary text-white"
												: "text-slate-700 hover:bg-slate-100"
											}`}
									>
										{link.name}
									</a>
								))}

								<div className="border-t pt-6 mt-4">

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
										className="mt-4 w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
									>
										<Calculator className="w-5 h-5" />
										Get a Quote
									</button>

								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
