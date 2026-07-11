import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Current Page */}
      <main className="pt-24">
        <Outlet
  context={{
    handleOpenQuote,
    handleCloseQuote,
  }}
/>
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