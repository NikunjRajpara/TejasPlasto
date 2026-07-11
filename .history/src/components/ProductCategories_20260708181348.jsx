import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Layers, ShieldCheck, Calculator, Waves,} from "lucide-react";
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
		<section id="products" className="py-13 bg-slate-50 relative overflow-hidden">
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
						Engineered using premier virgin polymers, Multi-Layer insulation and heavy-duty structural ribbed profiles to serve diverse domestic, industrial and agricultural operations.
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
								</div>

							{/* Product Content */}
							<div className="p-6 flex-1 flex flex-col justify-between space-y-5">
								<div className="space-y-1">
									<span className="text-xs font-semibold text-secondary uppercase tracking-widest block">
										{product.category}
									</span>
									<h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
										{product.name}
									</h3>
									</div>

								{/* Tags & Action */}
								<div className="pt-3">
									{/* Feature tags limit 2 */}
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

		</section>
	);
}
