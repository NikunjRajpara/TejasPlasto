import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import ManufacturingProcess from './components/ManufacturingProcess';
import IndustriesServed from './components/IndustriesServed';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
	const [isQuoteOpen, setIsQuoteOpen] = useState(false);
	const [preSelectedCategory, setPreSelectedCategory] = useState(undefined);

	const handleOpenQuote = (category) => {
		setPreSelectedCategory(category);
		setIsQuoteOpen(true);
	};

	const handleCloseQuote = () => {
		setIsQuoteOpen(false);
		setPreSelectedCategory(undefined);
	};

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-primary/20 selection:text-primary">
			{/* Sticky Premium Header */}
			<Navbar onOpenQuote={() => handleOpenQuote()} />

			{/* Main Page Layout */}
			<main>
				{/* Hero Section */}
				<Hero onOpenQuote={() => handleOpenQuote()} />

				{/* Company Overview (About) */}
				<CompanyOverview />

				{/* Product Categories */}
				<ProductCategories onSelectProductForQuote={(cat) => handleOpenQuote(cat)} />

				{/* Why Choose Tejas Plasto */}
				<WhyChooseUs />

				{/* Manufacturing Process */}
				<ManufacturingProcess />

				{/* Industries Served */}
				<IndustriesServed />

				{/* Customer Testimonials Carousel */}
				<Testimonials />

				{/* Infrastructure & Project Gallery with Lightbox */}
				<Gallery />

				{/* Accordion FAQ Section */}
				<FAQ />

				{/* Contact Form & VATVA Map */}
				<Contact />
			</main>

			{/* Multi-column Polished Footer */}
			<Footer />

			{/* Interactive Sizing & Quote Request Calculator Modal */}
			<QuoteModal
				isOpen={isQuoteOpen}
				onClose={handleCloseQuote}
				initialCategory={preSelectedCategory}
			/>
		</div>
	);
}

