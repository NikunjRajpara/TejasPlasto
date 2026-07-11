import Navbar from "../components/Navbar";
import CompanyOverview from "../components/CompanyOverview";
import Footer from "../components/Footer";
import { useOutletContext } from "react-router-dom";
import WhyChooseUs from "../components/WhyChooseUs";
export default function About() {
	const { handleOpenQuote } = useOutletContext();
  return (
    <>
      
      <CompanyOverview />
	  <WhyChooseUs/>
      
    </>
  );
}