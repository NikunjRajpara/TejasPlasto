import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      
    </>
  );
}