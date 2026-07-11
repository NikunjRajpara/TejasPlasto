import Navbar from "../components/Navbar";
import CompanyOverview from "../components/CompanyOverview";
import Footer from "../components/Footer";
import { useOutletContext } from "react-router-dom";
export default function About() {
	const { handleOpenQuote } = useOutletContext();
  return (
    <>
      
      <CompanyOverview />
      
    </>
  );
}