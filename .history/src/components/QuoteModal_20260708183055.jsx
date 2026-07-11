import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Calculator, Shield, Droplets, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data';



export default function QuoteModal({ isOpen, onClose, initialCategory }) {
	const [step, setStep] = useState(1);
	const [category, setCategory] = useState(initialCategory || PRODUCTS[0].category);
	const [capacity, setCapacity] = useState('1,000L');
	const [layers, setLayers] = useState('4 Layers (Double Insulated)');
	const [state, setState] = useState('Gujarat');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	// Simple pricing calculation based on capacity & layers for simulation
	const calculateEstimatedPrice = () => {
		const baseRatePerLiter = 6.5; // Base rate
		const litValue = parseInt(capacity.replace(/[,L]/g, '')) || 1000;
		let multiplier = 1.0;
		if (layers?.includes('5')) multiplier = 1.35;
		if (layers?.includes('4')) multiplier = 1.15;
		if (layers?.includes('Chemical')) multiplier = 2.2;
		if (category?.includes('Underground')) multiplier = 1.6;

		const total = Math.round(litValue * baseRatePerLiter * multiplier);
		return `₹${total.toLocaleString('en-IN')}`;
	};

	const handleSubmit = (e) => {
	e.preventDefault();

	if (!name || !phone || !email) {
		alert("Please fill out all required fields");
		return;
	}

	const whatsappMessage = `New Quote Request - Tejas Plasto

Customer Details
--------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}

Product Details
--------------------------
Category: ${category}
Capacity: ${capacity}
Layer Specification: ${layers}
Delivery State: ${state}

Estimated Price
--------------------------
${calculateEstimatedPrice()}

Additional Requirements
--------------------------
${message || "N/A"}
`;

	const whatsappURL = `https://wa.me/919898625850?text=${encodeURIComponent(
		whatsappMessage
	)}`;

	window.open(whatsappURL, "_blank");

	// Reset form
	handleReset();

	// Close modal
	onClose();
};

	const handleReset = () => {
		setStep(1);
		setCategory(PRODUCTS[0].category);
		setCapacity('1,000L');
		setLayers('4 Layers (Double Insulated)');
		setState('Gujarat');
		setName('');
		setPhone('');
		setEmail('');
		setMessage('');
		setIsSuccess(false);
	};

	if (!isOpen) return null;
	const categories = [...new Set(PRODUCTS.map(product => product.category))];
	return (

		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
				id="quote-backdrop"
			/>

			{/* Modal Content */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				transition={{ type: 'spring', damping: 25, stiffness: 350 }}
				className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 font-sans"
				id="quote-modal-container"
			>
				{/* Header */}
				<div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
							<Calculator className="w-5 h-5" />
						</div>
						<div>
							<h3 className="font-display font-semibold text-lg text-slate-900">Custom Quote Estimator</h3>
							<p className="text-xs text-slate-500">Premium Water Storage & Industrial Solutions</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-200/50 rounded-full transition-colors"
						aria-label="Close"
						id="close-quote-btn"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Body */}
				<div className="p-6 md:p-8">
					{!isSuccess ? (
						<form onSubmit={handleSubmit} id="quote-form">
							{/* Step indicators */}
							<div className="flex items-center justify-between mb-8">
								<div className="flex items-center gap-2">
									<span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>1</span>
									<span className="text-sm font-medium text-slate-700">Specifications</span>
								</div>
								<div className="flex-1 h-[2px] bg-slate-100 mx-4" />
								<div className="flex items-center gap-2">
									<span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>2</span>
									<span className="text-sm font-medium text-slate-700">Contact & Submit</span>
								</div>
							</div>

							{/* Step 1*/}
							{step === 1 && (
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									className="space-y-6"
									id="quote-step-1"
								>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Product Category */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Product Category</label>
											<select
												value={category}
												onChange={(e) => setCategory(e.target.value)}
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-category"
											>
												{categories.map((cat) => (
													<option key={cat} value={cat}>
														{cat}
													</option>
												))}
											</select>
										</div>

										{/* State Location */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Delivery State</label>
											<select
												value={state}
												onChange={(e) => setState(e.target.value)}
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-state"
											>
												{['Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh'].map((st) => (
													<option key={st} value={st}>
														{st}
													</option>
												))}
											</select>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Tank Capacity */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Required Capacity</label>
											<select
												value={capacity}
												onChange={(e) => setCapacity(e.target.value)}
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-capacity"
											>
												{['200L', '300L', '500L', '1,000L', '1,500L', '2,000L', '3,000L', '5,000L'].map((sz) => (
													<option key={sz} value={sz}>
														{sz}
													</option>
												))}
											</select>
										</div>

										{/* Number of Layers */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Layer Specification</label>
											<select
												value={layers}
												onChange={(e) => setLayers(e.target.value)}
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-layers"
											>
												<option value="3 Layers (Standard UV Protective)">3 Layers (Standard UV Protective)</option>
												<option value="4 Layers (Double Insulated)">4 Layers (Double Insulated)</option>
												<option value="5 Layers (Titanium Heavy Duty)">5 Layers (Titanium Heavy Duty)</option>
												<option value="Specialized Chemical Liner">Specialized Chemical Liner</option>
											</select>
										</div>
									</div>

									{/* Instant Live Estimate Display */}
									<div className="mt-8 bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
										<div className="flex items-center gap-3">
											<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
												<Shield className="w-5 h-5" />
											</div>
											<div>
												<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Simulated Base Estimate</p>
												<p className="text-2xl font-display font-bold text-slate-900">{calculateEstimatedPrice()}</p>
											</div>
										</div>
										<div className="text-xs text-slate-500 max-w-xs text-center sm:text-right">
											*Includes 18% GST. Final pricing depends on actual delivery address, fittings, and dynamic dealer discounts.
										</div>
									</div>

									{/* Next Action */}
									<div className="flex justify-end pt-4 border-t border-slate-100">
										<button
											type="button"
											onClick={() => setStep(2)}
											className="px-6 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-xl flex items-center gap-2 transition-all hover:translate-x-1"
											id="next-step-btn"
										>
											Proceed to Contact Details <ChevronRight className="w-4 h-4" />
										</button>
									</div>
								</motion.div>
							)}

							{/* Step 2*/}
							{step === 2 && (
								<motion.div
									initial={{ opacity: 0, x: 10 }}
									animate={{ opacity: 1, x: 0 }}
									className="space-y-6"
									id="quote-step-2"
								>
									<div className="space-y-4">
										{/* Name */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Full Name</label>
											<input
												type="text"
												required
												value={name}
												onChange={(e) => setName(e.target.value)}
												placeholder="Your Name"
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-name"
											/>
										</div>

										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											{/* Phone */}
											<div className="space-y-2">
												<label className="block text-sm font-semibold text-slate-700">Phone Number</label>
												<input
													type="tel"
													required
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
													placeholder="+91 XXXXX XXXXX"
													className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
													id="quote-phone"
												/>
											</div>

											{/* Email */}
											<div className="space-y-2">
												<label className="block text-sm font-semibold text-slate-700">Email Address</label>
												<input
													type="email"
													required
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													placeholder="you@example.com"
													className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
													id="quote-email"
												/>
											</div>
										</div>

										{/* Message */}
										<div className="space-y-2">
											<label className="block text-sm font-semibold text-slate-700">Custom Requirements (Optional)</label>
											<textarea
												rows={3}
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												placeholder="Special fitting requests, custom nozzle placement, site delivery conditions, etc."
												className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 transition-shadow"
												id="quote-message"
											/>
										</div>
									</div>

									{/* Summary badge */}
									<div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between text-xs text-slate-600">
										<div>
											<strong>Selected Solution:</strong> {capacity} {category} ({layers})
										</div>
										<div className="font-semibold text-primary">
											Est. {calculateEstimatedPrice()}
										</div>
									</div>

									{/* Navigation Buttons */}
									<div className="flex items-center justify-between pt-4 border-t border-slate-100">
										<button
											type="button"
											onClick={() => setStep(1)}
											className="px-5 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium rounded-xl flex items-center gap-2 transition-all"
											id="back-step-btn"
										>
											<ArrowLeft className="w-4 h-4" /> Back
										</button>

										<button
											type="submit"
											disabled={isSubmitting}
											className="px-6 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-xl flex items-center gap-2 transition-all disabled:opacity-70"
											id="submit-quote-btn"
										>
											{isSubmitting ? (
												<>
													<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
													Processing Request...
												</>
											) : (
												<>
													Submit Quote Request <CheckCircle2 className="w-4 h-4" />
												</>
											)}
										</button>
									</div>
								</motion.div>
							)}
						</form>
					) : (
						/* Success Page */
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							className="text-center py-8 space-y-6"
							id="quote-success-screen"
						>
							<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
								<CheckCircle2 className="w-8 h-8" />
							</div>
							<div className="space-y-2">
								<h4 className="text-2xl font-display font-bold text-slate-900">Request Submitted Successfully!</h4>
								<p className="text-slate-600 max-w-md mx-auto">
									Thank you, <strong className="text-slate-800">{name}</strong>. Your custom specifications have been registered with the regional dealer network.
								</p>
							</div>

							<div className="bg-slate-50 max-w-md mx-auto p-4 rounded-xl border border-slate-100 text-left text-sm space-y-2 text-slate-600">
								<div className="flex justify-between">
									<span>Reference ID:</span>
									<span className="font-mono font-semibold text-slate-800">TPQ-{Math.floor(100000 + Math.random() * 900000)}</span>
								</div>
								<div className="flex justify-between">
									<span>Configured Tank:</span>
									<span className="text-slate-800 font-medium">{capacity} ({category})</span>
								</div>
								<div className="flex justify-between">
									<span>Estimated Cost:</span>
									<span className="text-primary font-bold">{calculateEstimatedPrice()}</span>
								</div>
								<div className="flex justify-between">
									<span>Matching State:</span>
									<span className="text-slate-800">{state}</span>
								</div>
							</div>

							<p className="text-xs text-slate-500 max-w-sm mx-auto">
								A dedicated Tejas Plasto MEP coordinator or nearest distributor will reach out to your phone (<strong className="text-slate-700">{phone}</strong>) or email shortly with logistics & bulk discounts.
							</p>

							<div className="pt-4 flex justify-center gap-3">
								<button
									onClick={handleReset}
									className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl transition-all"
									id="new-estimate-btn"
								>
									Calculate New Estimate
								</button>
								<button
									onClick={onClose}
									className="px-5 py-2.5 bg-slate-900 text-white font-semibold hover:bg-slate-800 rounded-xl transition-all"
									id="close-success-btn"
								>
									Back to Home
								</button>
							</div>
						</motion.div>
					)}
				</div>
			</motion.div>
		</div>

	);
}
