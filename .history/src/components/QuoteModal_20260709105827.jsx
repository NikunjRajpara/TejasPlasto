import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
	X,
	Calculator,
	Shield,
	CheckCircle2,
	ChevronRight,
	ArrowLeft,
} from "lucide-react";
import { PRODUCTS } from "../data";

export default function QuoteModal({
	isOpen,
	onClose,
	initialCategory,
}) {
	const categories = [...new Set(PRODUCTS.map((p) => p.category))];

	const [step, setStep] = useState(1);

	const [category, setCategory] = useState(
		initialCategory || categories[0]
	);

	const [capacity, setCapacity] = useState("1000L");
	const [layers, setLayers] = useState("4 Layers");
	const [state, setState] = useState("Gujarat");

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (initialCategory) {
			setCategory(initialCategory);
		}
	}, [initialCategory]);

	useEffect(() => {
		if (isOpen) {
			// Prevent background scrolling
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup when modal closes or component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const calculateEstimatedPrice = () => {
		const baseRate = 6.5;

		const liters =
			parseInt(capacity.replace(/[^0-9]/g, "")) || 1000;

		let multiplier = 1;

		if (layers.includes("5")) multiplier = 1.35;
		else if (layers.includes("4")) multiplier = 1.15;
		else if (layers.includes("Chemical")) multiplier = 2.2;

		const total = Math.round(baseRate * liters * multiplier);

		return `₹${total.toLocaleString("en-IN")}`;
	};

	const handleReset = () => {
		setStep(1);
		setCategory(categories[0]);
		setCapacity("1000L");
		setLayers("4 Layers");
		setState("Gujarat");
		setName("");
		setPhone("");
		setEmail("");
		setMessage("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !phone || !email) {
			alert("Please fill out all required fields.");
			return;
		}

		const whatsappMessage = `New Quote Request - Tejas Plasto

Customer Details
-------------------------
Name : ${name}
Phone : ${phone}
Email : ${email}

Product Details
-------------------------
Category : ${category}
Capacity : ${capacity}
Layers : ${layers}
Delivery State : ${state}

Estimated Price
-------------------------
${calculateEstimatedPrice()}

Additional Requirements
-------------------------
${message || "N/A"}
`;

		const whatsappURL = `https://wa.me/919898625850?text=${encodeURIComponent(
			whatsappMessage
		)}`;

		window.open(whatsappURL, "_blank");

		handleReset();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-start md:items-center justify-center pt-20 pb-6 px-4 overflow-y-auto">
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				onClick={onClose}
				className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
			/>

			{/* Modal */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{
					type: "spring",
					damping: 25,
					stiffness: 350,
				}}
				className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 z-10 h-[92vh] sm:max-h-[90vh] flex flex-col"
			>
				{/* Header */}
				<div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
							<Calculator className="w-5 h-5" />
						</div>

						<div>
							<h3 className="font-display font-semibold text-lg">
								Custom Quote Estimator
							</h3>

							<p className="text-xs text-slate-500">
								Premium Water Storage Solutions
							</p>
						</div>
					</div>

					<button
						onClick={onClose}
						className="p-2 rounded-full hover:bg-slate-200"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Body */}
				<div className="flex-1 overflow-y-auto p-6 md:p-8">
					<form onSubmit={handleSubmit}>
						{/* Progress */}
						<div className="flex items-center justify-between mb-8">

							<div className="flex items-center gap-2">
								<span
									className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 1
											? "bg-primary text-white"
											: "bg-slate-200"
										}`}
								>
									1
								</span>

								<span className="text-sm font-medium">
									Specifications
								</span>
							</div>

							<div className="flex-1 h-px bg-slate-200 mx-4"></div>

							<div className="flex items-center gap-2">
								<span
									className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 2
											? "bg-primary text-white"
											: "bg-slate-200"
										}`}
								>
									2
								</span>

								<span className="text-sm font-medium">
									Contact
								</span>
							</div>
						</div>

						{/* STEP 1 */}

						{step === 1 && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="space-y-6"
							>
								<div className="grid md:grid-cols-2 gap-6">

									{/* Category */}

									<div>
										<label className="block text-sm font-semibold mb-2">
											Product Category
										</label>

										<select
											value={category}
											onChange={(e) =>
												setCategory(e.target.value)
											}
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
										>
											{categories.map((cat) => (
												<option key={cat} value={cat}>
													{cat}
												</option>
											))}
										</select>
									</div>

									{/* State */}

									<div>
										<label className="block text-sm font-semibold mb-2">
											Delivery State
										</label>

										<select
											value={state}
											onChange={(e) =>
												setState(e.target.value)
											}
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
										>
											{[
												"Gujarat",
												"Maharashtra",
												"Rajasthan",
												"Madhya Pradesh",
												"Karnataka",
												"Tamil Nadu",
												"Uttar Pradesh",
											].map((st) => (
												<option key={st}>{st}</option>
											))}
										</select>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									{/* Capacity */}
									<div>
										<label className="block text-sm font-semibold mb-2">
											Required Capacity
										</label>

										<select
											value={capacity}
											onChange={(e) => setCapacity(e.target.value)}
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
										>
											{[
												"200L",
												"300L",
												"500L",
												"1000L",
												"1500L",
												"2000L",
												"3000L",
												"5000L",
											].map((size) => (
												<option key={size}>{size}</option>
											))}
										</select>
									</div>

									{/* Layers */}
									<div>
										<label className="block text-sm font-semibold mb-2">
											Layer Specification
										</label>

										<select
											value={layers}
											onChange={(e) => setLayers(e.target.value)}
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
										>
											<option>3 Layers</option>
											<option>4 Layers</option>
											<option>5 Layers</option>
											<option>Specialized Chemical Liner</option>
										</select>
									</div>
								</div>

								{/* Estimated Price */}

								<div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex justify-between items-center">

									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
											<Shield className="w-5 h-5" />
										</div>

										<div>
											<p className="text-xs uppercase text-slate-500">
												Estimated Price
											</p>

											<h4 className="text-2xl font-bold">
												{calculateEstimatedPrice()}
											</h4>
										</div>
									</div>

									<div className="text-xs text-slate-500 text-right">
										Approximate Estimate
									</div>

								</div>

								<div className="flex justify-end pt-4 border-t border-slate-200">

									<button
										type="button"
										onClick={() => setStep(2)}
										className="bg-primary text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary/90"
									>
										Continue

										<ChevronRight className="w-4 h-4" />
									</button>

								</div>

							</motion.div>
						)}

						{/* STEP 2 */}

						{step === 2 && (

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="space-y-6"
							>

								<div>

									<label className="block text-sm font-semibold mb-2">
										Full Name
									</label>

									<input
										type="text"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Your Name"
										className="w-full px-4 py-3 rounded-xl border border-slate-200"
										required
									/>

								</div>

								<div className="grid md:grid-cols-2 gap-6">

									<div>

										<label className="block text-sm font-semibold mb-2">
											Phone Number
										</label>

										<input
											type="tel"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											placeholder="+91 XXXXX XXXXX"
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
											required
										/>

									</div>

									<div>

										<label className="block text-sm font-semibold mb-2">
											Email Address
										</label>

										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="you@example.com"
											className="w-full px-4 py-3 rounded-xl border border-slate-200"
											required
										/>

									</div>

								</div>

								<div>

									<label className="block text-sm font-semibold mb-2">
										Additional Requirements
									</label>

									<textarea
										rows={4}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										placeholder="Write your requirements..."
										className="w-full px-4 py-3 rounded-xl border border-slate-200 resize-none"
									/>

								</div>

								{/* Summary */}

								<div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm">

									<div className="flex justify-between">

										<span>
											<strong>Product:</strong> {category}
										</span>

										<span className="font-semibold text-primary">
											{calculateEstimatedPrice()}
										</span>

									</div>

									<div className="mt-2">
										Capacity: {capacity} | Layers: {layers}
									</div>

								</div>

								{/* Buttons */}

								<div className="flex justify-between border-t border-slate-200 pt-5">

									<button
										type="button"
										onClick={() => setStep(1)}
										className="px-5 py-3 border border-slate-200 rounded-xl flex items-center gap-2"
									>
										<ArrowLeft className="w-4 h-4" />
										Back
									</button>

									<button
										type="submit"
										className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center gap-2"
									>
										<CheckCircle2 className="w-4 h-4" />
										Send via WhatsApp
									</button>

								</div>

							</motion.div>

						)}

					</form>

				</div>

			</motion.div>

		</div>

	);
}
