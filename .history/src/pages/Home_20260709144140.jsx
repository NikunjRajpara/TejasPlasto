import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { useOutletContext } from "react-router-dom";
export default function Home() {
	const { handleOpenQuote } = useOutletContext();
	return (
		<>
			<Hero />

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
		</>
	);
}