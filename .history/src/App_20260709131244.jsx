import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";

export default function App() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/products" element={<Products />} />

            <Route path="/manufacturing" element={<Manufacturing />} />

            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/contact" element={<Contact />} />

        </Routes>

    );

}