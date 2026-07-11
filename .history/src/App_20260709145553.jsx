import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/manufacturing"
            element={<Manufacturing />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Route>

      </Routes>
    
  );
}