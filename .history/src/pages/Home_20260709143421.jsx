import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";

import { useState } from "react";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preSelectedCategory, setPreSelectedCategory] = useState();

  const handleOpenQuote = (category) => {
    setPreSelectedCategory(category);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        <Hero onOpenQuote={() => handleOpenQuote()} />

        <CompanyOverview />

        <ProductCategories
          onSelectProductForQuote={(cat) =>
            handleOpenQuote(cat)
          }
        />

        <WhyChooseUs />

        <ManufacturingProcess />

        <Testimonials />

        <Gallery />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialCategory={preSelectedCategory}
      />
    </>
  );
}