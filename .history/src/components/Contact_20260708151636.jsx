import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [subject, setSubject] = useState('General Inquiry');
	const [message, setMessage] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email || !phone || !message) {
			alert("Please fill out all required fields");
			return;
		}

		const whatsappMessage = `*New Inquiry - Tejas Plasto*

		👤 *Name:* ${name}

		📞 *Phone:* ${phone}

		📧 *Email:* ${email}

		📋 *Subject:* ${subject}

		💬 *Message:*
		${message}`;

		const whatsappURL = `https://wa.me/919898625850?text=${encodeURIComponent(
			whatsappMessage
		)}`;

		window.open(whatsappURL, "_blank");

		// Reset form
		setName("");
		setEmail("");
		setPhone("");
		setSubject("General Inquiry");
		setMessage("");
	};

	return (
		<section id="contact" className="py-24 bg-white relative overflow-hidden">
			{/* Background radial glow */}
			<div className="absolute right-0 top-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<span className="text-sm font-bold text-primary uppercase tracking-widest block">GET IN TOUCH</span>
					<h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
						Connect With Our Engineering Hub
					</h2>
					<div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
					<p className="text-slate-600">
						Reach out for custom designs, volume dealer pricing, bulk construction project quotes, or retail inquiries. We reply within few working hours.
					</p>
				</div>

				{/* Split Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-layout">

					{/* Left Column*/}
					<div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl flex flex-col justify-between">
						<form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
  ...
</form>
					</div>

					{/* Right Column*/}
					<div className="lg:col-span-5 flex flex-col gap-6 justify-between">
						<div className="space-y-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl" id="contact-info-card">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(11,94,215,0.15),transparent_40%)] pointer-events-none" />

							<div className="space-y-2">
								<h3 className="font-display font-extrabold text-xl text-white">Headquarters Information</h3>
								<p className="text-slate-400 text-xs">Direct channels to Gondal manufacturing operations</p>
							</div>

							{/* Detail channels */}
							<div className="space-y-4 pt-2">
								{/* Physical address */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<MapPin className="w-5 h-5 text-secondary" />
									</div>
									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">Corporate Manufacturing Plant</strong>
										Balaji Industries, Opp. Shivkant (Bhalodi) Anida, Gondal, Gujarat, India - 360311
									</div>
								</div>

								{/* Phone numbers */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Phone className="w-5 h-5 text-emerald-400" />
									</div>
									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">Contact</strong>
										+91 98986 25850 <br />
										+91 82002 98907
									</div>
								</div>

								{/* Email address */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Mail className="w-5 h-5 text-primary" />
									</div>
									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">Commercial Mailboxes</strong>
										tejashplastollp@gmail.com <br />
									</div>
								</div>

								{/* Business Hours */}
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
										<Clock className="w-5 h-5 text-amber-400" />
									</div>
									<div className="text-xs text-slate-300">
										<strong className="text-white text-sm block mb-1">Operating Business Hours</strong>
										Thurday – Tuesday: 9:00 AM – 7:00 PM <br />
										<span className="text-rose-400">Wednesday & Public Holidays Closed</span>
									</div>
								</div>
							</div>

							{/* Direct WhatsApp channel */}
							<div className="pt-4 border-t border-white/10">
								<a
									href="https://wa.me/919898625850?text=Hello%20Tejas%20Plasto%20Team,%20I%20have%20a%20commercial%20water%20storage%20tank%20requirement."
									target="_blank"
									rel="noreferrer"
									className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-transform hover:-translate-y-0.5"
									id="whatsapp-direct-btn"
								>
									<MessageSquare className="w-4 h-4" /> Chat Instantly On WhatsApp
								</a>
							</div>
						</div>

						{/* Simulated / Embedded Google Map showing Vatva GIDC */}
						<div className="h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100" id="contact-map">
							<iframe
								title="Tejas Plasto Vatva GIDC Location Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.532328153372!2d72.617183!3d22.95451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f504f4477cf%3A0xc6cb51b22e1b123f!2sGIDC%20Phase%20II%2C%20Vatva%2C%20Ahmedabad%2C%20Gujarat%20382445!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
								className="w-full h-full border-0"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
