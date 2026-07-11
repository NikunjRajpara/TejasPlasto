import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);
	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* Current Page */}
			<main className="pt-24">
				<Outlet
					context={{}}
				/>
			</main>

			{/* Footer */}
			<Footer />

		</>
	);
}