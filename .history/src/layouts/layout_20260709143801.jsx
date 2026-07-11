import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";

export default function Layout() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preSelectedCategory, setPreSelectedCategory] = useState();

  const handleOpenQuote = (category) => {
    setPreSelectedCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreSelectedCategory(undefined);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Current Page */}
      <main className="min-h-screen">
        <Outlet context={{ handleOpenQuote }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialCategory={preSelectedCategory}
      />
    </>
  );
}