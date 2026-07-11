import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Footer() {
	const currentYear = new Date().getFullYear();

	const productLinks = [
		{ name: "Water Storage Tanks", path: "/products" },
		{ name: "Rotomoulding Powder", path: "/products" },
	];

	const quickLinks = [
		{ name: "About Us", path: "/about" },
		{ name: "Products", path: "/products" },
		{ name: "Gallery", path: "/gallery" },
		{ name: "Contact Us", path: "/contact" },
	];

	return (
		<footer className="bg-[#0E1726] text-slate-300 font-sans" id="app-footer">
			{/* Top Footer Sections */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-13">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start" id="footer-columns">

					{/* Col 1*/}
					<div className="lg:col-span-1 space-y-5">
						<NavLink to="/" className="flex items-center gap-3">

							<img
								src={logo}
								alt="Tejash Plasto LLP"
								className="h-14 w-auto"
							/>

							<div>

								<h3 className="font-display text-xl font-bold text-white">
									TEJASH PLASTO
									<span className="text-primary"> LLP</span>
								</h3>

								<p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
									Water Storage Solutions
								</p>

							</div>

						</NavLink>

						<p className="text-xs text-slate-400 leading-relaxed max-w-sm">
							Tejash Plasto LLP manufactures premium-quality water storage tanks and rotomoulding powder using advanced rotational moulding technology for residential, commercial, industrial, and agricultural applications.
						</p>
					</div>

					{/* Col 2*/}
					<div className="lg:col-span-1 space-y-4">
						<h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
							Our Products
						</h4>
						<ul className="space-y-2.5 text-xs">
							{productLinks.map((link, idx) => (
								<li key={`${link.name}-${idx}`}>
									<NavLink
										to={link.path}
										className="hover:text-primary transition-colors flex items-center gap-1.5"
									>
										<ChevronRight className="w-3.5 h-3.5 text-slate-500" />
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* Col 3*/}
					<div className="lg:col-span-1 space-y-4">
						<h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
							Quick Navigation
						</h4>
						<ul className="space-y-2.5 text-xs">
							{quickLinks.map((link, idx) => (
								<li key={`${link.name}-${idx}`}>
									<NavLink
										to={link.path}
										className="hover:text-primary transition-colors flex items-center gap-1.5"
									>
										<ChevronRight className="w-3.5 h-3.5 text-slate-500" />
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* Col 4*/}
					<div className="lg:col-span-1 space-y-4">
						<h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
							Contact Channels
						</h4>
						<ul className="space-y-3.5 text-xs text-slate-400">
							<li className="flex items-start gap-2.5">
								<MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
								<span>
									Balaji Industries, Opp. Shivkant (Bhalodi) Anida, Gondal, Gujarat - 360311
								</span>
							</li>
							<li className="flex items-center gap-2.5">
								<Phone className="w-4 h-4 text-emerald-400 shrink-0" />
								<a href="tel:+919898625850" className="hover:text-white transition-colors">
									+91 98986 25850
								</a><br></br>
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
					<p>© {currentYear} Tejash Plasto LLP. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
