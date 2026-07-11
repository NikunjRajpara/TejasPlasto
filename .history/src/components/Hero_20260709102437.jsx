import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, ShieldCheck, Droplets, Clock, ArrowRight, Calculator, Beaker, Package } from "lucide-react";
import { FLOATING_FEATURES } from '../data';
import heroImage from "../assets/images/hero.png";


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
			className="relative min-h-[80vh] pt-24 pb-10 overflow-hidden bg-slate-50"
		>
			{/* Background Gradients */}
			<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-primary/5 to-secondary/5 rounded-bl-[120px] blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-t from-orange-500/3 to-primary/3 rounded-tr-[120px] blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

					<div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-center p-7">
						<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

						<div className="space-y-5 relative z-10">
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
								Tejash Plasto manufactures durable & UV-protected . Engineered to last a lifetime.
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
						</div>
						{/* Product Highlights */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.45 }}
							className="mt-8 pt-6 border-t border-slate-100"
						>
							<div className="grid grid-cols-2 gap-4">

								<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-primary/30 transition-all">
									<div className="flex items-center gap-3 mb-2">
										<Droplets className="w-8 h-8 text-primary" />
										<div>
											<h4 className="font-semibold text-slate-900">
												Water Tanks
											</h4>
											<p className="text-xs text-slate-500">
												Anti-Bacterial Lining
											</p>
										</div>
									</div>

									
								</div>

								<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-primary/30 transition-all">
									<div className="flex items-center gap-3 mb-2">
										<Beaker className="w-8 h-8 text-orange-500" />
										<div>
											<h4 className="font-semibold text-slate-900">
												Rotomoulding Powder
											</h4>
											<p className="text-xs text-slate-500">
												Premium LLDPE Grade
											</p>
										</div>
									</div>

									
								</div>

							</div>

							<div className="flex flex-wrap gap-3 mt-5">

								<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
									✓ Virgin Material
								</span>

								<span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
									✓ UV Protected
								</span>

								<span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
									✓ Premium LLDPE
								</span>

								<span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
									✓ Leak Resistant
								</span>

							</div>

						</motion.div>
					</div>

					{/* Right Column - Bento Image Frame (Span 5) */}
					<div className="lg:col-span-5 flex items-stretch">
						<div className="w-full bg-white rounded-3xl border border-slate-200 p-3 shadow-sm relative overflow-hidden flex flex-col justify-center" id="hero-bento-right">

							{/* Image container */}
							<motion.div
								initial={{ opacity: 0, scale: 0.97 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.7 }}
								className=" relative w-full h-[420px] sm:h-[420px] lg:h-[580px] flex items-center justify-center rounded-2xl bg-white"
								
							>
								<img
									src={heroImage}
									alt="Tejash Plasto water tank manufacturing facility"
									className="w-full h-full object-cover rounded-2xl"
									
								/>

							</motion.div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
