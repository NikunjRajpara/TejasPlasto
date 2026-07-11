import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
	const [filter, setFilter] = useState('all');
	const [lightboxIndex, setLightboxIndex] = useState(null);

	// Filtered gallery items
	const filteredItems = useMemo(() => {
		if (filter === 'all') return GALLERY;
		return GALLERY.filter(item => item.category === filter);
	}, [filter]);

	const filterTabs = [
		{ value: 'all', label: 'All Photos' },
		{ value: 'plant', label: 'Water Tanks' },
		{ value: 'products', label: 'Rotomoulding Powder' },
		{ value: "interior", label: "Manufacturing" },

	];

	const handlePrev = () => {
		if (lightboxIndex === null) return;

		setLightboxIndex((prev) =>
			prev === 0 ? filteredItems.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		if (lightboxIndex === null) return;

		setLightboxIndex((prev) =>
			prev === filteredItems.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<section id="gallery" className="py-13 bg-slate-50 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<span className="text-sm font-bold text-primary uppercase tracking-widest block">VISUAL PORTFOLIO</span>
					<h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
						Our Infrastructure & Project Gallery
					</h2>
					<div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
					<p className="text-slate-600">
						Tour our modern rotational moulding facilities, heavy storage warehouses, and on-site residential, commercial, and industrial installations.
					</p>
				</div>

				{/* Gallery Filter Pills */}
				<div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-filters">
					{filterTabs.map((tab) => (
						<button
							key={tab.value}
							onClick={() => {
								setFilter(tab.value);
								setLightboxIndex(null); // Reset lightbox active state
							}}
							className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${filter === tab.value
								? 'bg-primary text-white shadow-md shadow-primary/15'
								: 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
								}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Infinite Auto Scrolling Gallery */}
				<div className="gallery-wrapper">

					<div className="gallery-track">

						{[...filteredItems, ...filteredItems].map((item, index) => (

							<motion.div
								key={`${item.id}-${index}`}
								whileHover={{
									y: -8,
									scale: 1.03
								}}
								transition={{
									duration: 0.25
								}}
								onClick={() =>
									setLightboxIndex(index % filteredItems.length)
								}
								className=" group relative w-[300px] sm:w-[340px] lg:w-[420px] h-80 flex-shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl cursor-pointer transition-all"
								id={`gallery-item-${item.id}-${index}`}
							>

								{/* Image */}
								<img
									src={item.image}
									alt={item.title}
									referrerPolicy="no-referrer"
									className="
                        w-full
                        h-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
								/>

								{/* Dark Overlay */}
								<div
									className="
                        absolute
                        inset-0
                        bg-black/35
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                    "
								/>

								{/* Zoom Icon */}
								<div
									className="
                        absolute
                        top-4
                        right-4
                        bg-white/20
                        backdrop-blur-md
                        p-2
                        rounded-xl
                        text-white
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                    "
								>
									<ZoomIn className="w-4 h-4" />
								</div>

								{/* Caption */}
								<div
									className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-5
                        text-white
                        translate-y-5
                        opacity-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                    "
								>
									<p className="text-xs uppercase tracking-widest text-secondary font-semibold">
										{item.category}
									</p>

									<h4 className="font-display text-lg font-bold">
										{item.title}
									</h4>
								</div>

							</motion.div>

						))}

					</div>

				</div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{lightboxIndex !== null && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setLightboxIndex(null)}
							className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
							id="lightbox-backdrop"
						/>

						{/* Content Container */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="relative w-full max-w-4xl z-10 flex flex-col gap-4 text-center"
							id="lightbox-modal"
						>
							{/* Close Button */}
							<button
								onClick={() => setLightboxIndex(null)}
								className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
								id="lightbox-close-btn"
							>
								<X className="w-5 h-5" />
							</button>

							{/* Main Image Frame */}
							<div className="relative aspect-[3/2] max-h-[70vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
								<img
									src={filteredItems[lightboxIndex]?.image}
									alt={filteredItems[lightboxIndex]?.title}
									className="w-full h-full object-contain"
									referrerPolicy="no-referrer"
								/>

								{/* Left Arrow */}
								<button
									onClick={handlePrev}
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/65 hover:bg-slate-950 text-white p-3 rounded-2xl transition-all"
									aria-label="Previous image"
									id="lightbox-prev-btn"
								>
									<ChevronLeft className="w-5 h-5" />
								</button>

								{/* Right Arrow */}
								<button
									onClick={handleNext}
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/65 hover:bg-slate-950 text-white p-3 rounded-2xl transition-all"
									aria-label="Next image"
									id="lightbox-next-btn"
								>
									<ChevronRight className="w-5 h-5" />
								</button>
							</div>

							<div className="text-white space-y-1 px-4">

								<span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-bold">

									{filteredItems[lightboxIndex]?.category}

									{" • "}

									{lightboxIndex + 1} / {filteredItems.length}

								</span>

								<h4 className="font-display text-xl font-bold">

									{filteredItems[lightboxIndex]?.title}

								</h4>

							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section >
	);
}
