import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function ProductCategories({ onSelectProductForQuote }) {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [calcPersons, setCalcPersons] = useState('4');
	const [calcDays, setCalcDays] = useState('2');
	const [calcResult, setCalcResult] = useState(null);

	const handleCalculate = (e) => {
		e.preventDefault();
		const persons = parseInt(calcPersons) || 4;
		const days = parseInt(calcDays) || 2;
		const waterPerPersonPerDay = 135; // Standard IS code litres
		const calculatedVolume = persons * days * waterPerPersonPerDay;
		setCalcResult(calculatedVolume);
	};

	return (
		<section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Background patterns */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-2xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<span className="text-sm font-bold text-primary uppercase tracking-widest block">PRODUCT LINEUP</span>
					<h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
						High-Performance Liquid Storage Containment Systems
					</h2>
					<div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
					<p className="text-slate-600">
						Engineered using premier virgin polymers, Multi-Layer insulation and heavy-duty structural ribbed profiles to serve diverse domestic, industrial, and agricultural operations.
					</p>
				</div>

				{/* Product Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
					{PRODUCTS.map((product) => (
						<motion.div
							key={product.id}
							whileHover={{ y: -6 }}
							transition={{ duration: 0.2 }}
							className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col group"
						>
							{/* Product Image */}
							<div className="relative h-80 flex items-center justify-center bg-white overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-[92%] h-[92%] object-contain transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
									referrerPolicy="no-referrer"
								/>
								<div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
									{product.sizes[0]} - {product.sizes[product.sizes.length - 1]}
								</div>
							</div>

							{/* Product Content */}
							<div className="p-6 flex-1 flex flex-col justify-between space-y-5">
								<div className="space-y-2">
									<span className="text-xs font-semibold text-secondary uppercase tracking-widest block">
										{product.category}
									</span>
									<h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
										{product.name}
									</h3>
									<p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
										{product.description}
									</p>
								</div>

								{/* Tags & Action */}
								<div className="space-y-4 pt-2">
									{/* Feature tags limit 2 */}
									<div className="flex flex-wrap gap-1.5">
										{product.features.slice(0, 2).map((feat) => (
											<span key={feat} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
												{feat}
											</span>
										))}
									</div>

									<div className="pt-3 border-t border-slate-100">
										<button
											onClick={() => onSelectProductForQuote(product.category)}
											className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
										>
											Get a Quote
											<ArrowRight className="w-4 h-4" />
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Product Detail & Specs Modal */}
			<AnimatePresence>
				{selectedProduct && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedProduct(null)}
							className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
							id="details-backdrop"
						/>

						{/* Modal Box */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 font-sans my-8"
							id="details-modal"
						>
							{/* Header Image Cover */}
							<div className="relative h-48 sm:h-64 bg-slate-100">
								<img
									src={selectedProduct.image}
									alt={selectedProduct.name}
									className="w-full h-full object-cover"
									referrerPolicy="no-referrer"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

								{/* Close Button */}
								<button
									onClick={() => setSelectedProduct(null)}
									className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white p-2 rounded-full backdrop-blur-md transition-colors"
									aria-label="Close"
									id="close-details-btn"
								>
									<X className="w-5 h-5" />
								</button>

								{/* Overlay Text */}
								<div className="absolute bottom-4 left-6 right-6 text-white">
									<span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
										{selectedProduct.category}
									</span>
									<h4 className="font-display font-extrabold text-xl sm:text-2xl mt-1 tracking-tight">
										{selectedProduct.name}
									</h4>
								</div>
							</div>

							{/* Body Tabs / Columns */}
							<div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
								<div>
									<h5 className="font-display font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Product Overview</h5>
									<p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
										{selectedProduct.description}
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Layers & Materials */}
									<div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
										<h5 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
											<Layers className="w-4 h-4 text-primary" /> Multi-Layer Construction
										</h5>
										<ul className="space-y-1.5">
											{selectedProduct.layers.map((layer, idx) => (
												<li key={layer} className="text-xs text-slate-600 flex items-start gap-1.5">
													<span className="font-bold text-primary min-w-[14px]">{idx + 1}.</span>
													<span>{layer}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Highlights Checklist */}
									<div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
										<h5 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
											<ShieldCheck className="w-4 h-4 text-emerald-600" /> Key Features
										</h5>
										<div className="grid grid-cols-1 gap-1.5">
											{selectedProduct.features.map((feat) => (
												<div key={feat} className="text-xs text-slate-600 flex items-center gap-1.5">
													<span className="text-emerald-600 font-bold">✓</span>
													<span>{feat}</span>
												</div>
											))}
										</div>
									</div>
								</div>

								{/* Sizes and Applications */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div>
										<h5 className="font-display font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">Available Storage Capacities</h5>
										<div className="flex flex-wrap gap-1.5">
											{selectedProduct.sizes.map((sz) => (
												<span key={sz} className="px-2.5 py-1 bg-blue-50 text-primary font-bold text-xs rounded-lg border border-blue-100">
													{sz}
												</span>
											))}
										</div>
									</div>

									<div>
										<h5 className="font-display font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">Primary Applications</h5>
										<div className="flex flex-wrap gap-1.5">
											{selectedProduct.applications.map((app) => (
												<span key={app} className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold text-[11px] rounded-lg">
													{app}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Size calculator inside details */}
								<div className="border-t border-slate-100 pt-6 space-y-4">
									<div className="bg-blue-50/50 rounded-xl p-4 sm:p-5 border border-blue-100/50 space-y-3">
										<div className="flex items-center gap-2">
											<Calculator className="w-4 h-4 text-primary animate-bounce" />
											<h5 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
												Quick Household Capacity Calculator
											</h5>
										</div>
										<p className="text-[11px] text-slate-500 leading-normal">
											Input the total family members and storage days to calculate standard water consumption (assuming IS standard 135L per person daily).
										</p>
										<form onSubmit={handleCalculate} className="flex flex-wrap items-end gap-3 pt-2">
											<div className="flex-1 min-w-[120px] space-y-1">
												<label className="text-[10px] font-bold text-slate-600 uppercase">Persons</label>
												<input
													type="number"
													value={calcPersons}
													onChange={(e) => setCalcPersons(e.target.value)}
													className="w-full bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800"
												/>
											</div>
											<div className="flex-1 min-w-[120px] space-y-1">
												<label className="text-[10px] font-bold text-slate-600 uppercase">Storage Buffer (Days)</label>
												<input
													type="number"
													value={calcDays}
													onChange={(e) => setCalcDays(e.target.value)}
													className="w-full bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800"
												/>
											</div>
											<button
												type="submit"
												className="px-4 py-1.5 bg-primary hover:bg-primary/95 text-white font-semibold text-xs rounded-lg shadow-sm"
											>
												Calculate
											</button>
										</form>

										{calcResult !== null && (
											<motion.div
												initial={{ opacity: 0, y: 5 }}
												animate={{ opacity: 1, y: 0 }}
												className="mt-3 bg-white p-3 rounded-lg border border-blue-100 flex items-center justify-between text-xs"
											>
												<div className="flex items-center gap-1.5 text-slate-700">
													<Waves className="w-4 h-4 text-primary animate-pulse" />
													<span>Estimated Water Storage Capacity Needed:</span>
												</div>
												<span className="font-display font-extrabold text-primary text-sm">{calcResult.toLocaleString('en-IN')} Liters</span>
											</motion.div>
										)}
									</div>
								</div>
							</div>

							{/* Action footer */}
							<div className="bg-slate-50 border-t border-slate-100 p-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
								<span className="text-[11px] text-slate-500">
									*Dimensions, thickness, and weights are subject to nominal manufacturing tolerances.
								</span>
								<div className="flex gap-2">
									<button
										onClick={() => setSelectedProduct(null)}
										className="px-4 py-2 text-xs font-semibold border border-slate-200 hover:bg-slate-100 rounded-lg text-slate-700"
									>
										Close Specs
									</button>
									<button
										onClick={() => {
											const category = selectedProduct.category;
											setSelectedProduct(null);
											onSelectProductForQuote(category);
										}}
										className="px-5 py-2 bg-primary hover:bg-primary/95 text-white font-semibold text-xs rounded-lg shadow-md shadow-primary/10 flex items-center gap-1.5"
									>
										Request Custom Quote <ArrowRight className="w-3.5 h-3.5" />
									</button>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
}
