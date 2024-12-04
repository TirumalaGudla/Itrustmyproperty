import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection/HeroSection";
import AddressStrip from "./AddressStrip/AddressStrip";
import About from "./About/About";
import SaravanaRole from "./SaravanaRole/SaravanaRole";
import CompletedProjects from "./CompletedProjects/CompletedProjects";
import GoingProjects from "./OngoingProjects/GoingProjects";

const SriBhavya = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AddressStrip />
            <About />
            <SaravanaRole />
            <CompletedProjects />
            <GoingProjects />
            <Footer />
        </>
    );
};

export default SriBhavya;
