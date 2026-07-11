import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/Contact";
import { useEffect } from "react";

export default function App() {

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);

	return (

		<Routes>

			<Route element={<Layout />}>

				<Route path="/" element={<Home />} />

				<Route path="/about" element={<About />} />

				<Route path="/products" element={<Products />} />

				<Route path="/gallery" element={<GalleryPage />} />

				<Route path="/contact" element={<ContactPage />} />

			</Route>

		</Routes>

	);
}