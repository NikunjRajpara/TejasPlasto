import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("General Inquiry");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email || !phone || !message) {
			alert("Please fill out all required fields.");
			return;
		}

		const whatsappMessage = `New Inquiry - Tejas Plasto

Name: ${name}

Phone: ${phone}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

		const whatsappURL = `https://wa.me/919898625850?text=${encodeURIComponent(
			whatsappMessage
		)}`;

		window.open(whatsappURL, "_blank");

		// Reset Form
		setName("");
		setEmail("");
		setPhone("");
		setSubject("General Inquiry");
		setMessage("");
	};

	return (
		<section
			id="contact"
			className="py-16 bg-white relative overflow-hidden"
		>
			{/* Background radial glow */}
			<div className="absolute right-0 top-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<span className="text-sm font-bold text-primary uppercase tracking-widest block">
						GET IN TOUCH
					</span>

					<h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
						Connect With Our Engineering Hub
					</h2>

					<div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />

					<p className="text-slate-600">
						Reach out for custom designs, volume dealer pricing, bulk
						construction project quotes, or retail inquiries. We reply within a
						few working hours.
					</p>
				</div>

				{/* Split Layout */}
				<div
					className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
					id="contact-split-layout"
				>
					{/* Left Column */}
					<div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl">

						<form
							onSubmit={handleSubmit}
							className="space-y-6"
							id="contact-form"
						>

							<div className="space-y-2">
								<h3 className="font-display font-bold text-slate-900 text-xl">
									Send Us a Direct Message
								</h3>

								<p className="text-xs text-slate-500">
									Fill in your details and we'll open WhatsApp with your message
									ready to send.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

								{/* Name */}
								<div className="space-y-1">
									<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
										Your Name *
									</label>

									<input
										type="text"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter full name"
										className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
									/>
								</div>

								{/* Phone */}
								<div className="space-y-1">
									<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
										Phone Number *
									</label>

									<input
										type="tel"
										required
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										placeholder="+91 XXXXX XXXXX"
										className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
									/>
								</div>

							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

								{/* Email */}
								<div className="space-y-1">
									<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
										Email Address *
									</label>

									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="you@company.com"
										className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
									/>
								</div>

								{/* Subject */}
								<div className="space-y-1">
									<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
										Subject Of Inquiry
									</label>

									<select
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
									>
										<option>General Inquiry</option>
										<option>Bulk Dealer Pricing</option>
										<option>Construction Projects</option>
										<option>Custom Tank Sizing</option>
									</select>
								</div>

							</div>

							{/* Message */}
							<div className="space-y-1">
								<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
									Message *
								</label>

								<textarea
									rows={5}
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Enter your detailed requirement..."
									className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none"
								/>
							</div>

							{/* Submit */}
							<button
								type="submit"
								className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
							>
								<Send className="w-4 h-4" />
								Send via WhatsApp
							</button>

						</form>

					</div>

					{/* Right Column */}
					<div className="lg:col-span-5 flex flex-col gap-6 justify-between">

						{/* Contact Information Card */}
						<div
							className="space-y-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl"
							id="contact-info-card"
						>
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(11,94,215,0.15),transparent_40%)] pointer-events-none" />

							<div className="space-y-2">
								<h3 className="font-display font-extrabold text-xl">
									Headquarters Information
								</h3>
								<p className="text-slate-400 text-xs">
									Direct channels to Gondal manufacturing operations
								</p>
							</div>

							{/* Address */}
							<div className="space-y-4 pt-2">

								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<MapPin className="w-5 h-5 text-secondary" />
									</div>

									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">
											Corporate Manufacturing Plant
										</strong>

										Balaji Industries,
										<br />
										Opp. Shivkant (Bhalodi) Anida,
										<br />
										Gondal, Gujarat - 360311
									</div>
								</div>

								{/* Phone */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Phone className="w-5 h-5 text-emerald-400" />
									</div>

									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">
											Contact
										</strong>

										<a
											href="tel:+919898625850"
											className="hover:text-white transition-colors"
										>
											+91 98986 25850
										</a>

										<br />

										<a
											href="tel:+918200298907"
											className="hover:text-white transition-colors"
										>
											+91 82002 98907
										</a>
									</div>
								</div>

								{/* Email */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Mail className="w-5 h-5 text-primary" />
									</div>

									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">
											Email
										</strong>

										<a
											href="mailto:tejashplastollp@gmail.com"
											className="hover:text-white transition-colors break-all"
										>
											tejashplastollp@gmail.com
										</a>
									</div>
								</div>

								{/* Business Hours */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Clock className="w-5 h-5 text-amber-400" />
									</div>

									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">
											Business Hours
										</strong>

										Thursday – Tuesday
										<br />
										9:00 AM – 7:00 PM

										<br />

										<span className="text-rose-400">
											Wednesday Closed
										</span>
									</div>
								</div>

							</div>

							{/* WhatsApp Button */}
							<div className="pt-4 border-t border-white/10">

								<a
									href="https://wa.me/919898625850"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
								>
									<MessageSquare className="w-5 h-5" />
									Chat on WhatsApp
								</a>

							</div>

						</div>

						{/* Google Map */}
						<div
							className="h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-lg"
							id="contact-map"
						>
							<iframe
								title="Tejas Plasto Location"
								src="https://www.google.com/maps?q=Balaji+Industries+Gondal+Gujarat&output=embed"
								className="w-full h-full border-0"
								loading="lazy"
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>

					</div>

				</div>
			</div>
		</section>
	);
}