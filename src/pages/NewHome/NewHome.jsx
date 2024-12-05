import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import TopCities from "./TopCities/TopCities";
import TopVentures from "./TopVentures/TopVentures";
import RecentlyAddedVentures from "./RecentlyAddedVentures/RecentlyAddedVentures";
import ChooseTopVentures from "../../components/HomePage/chooseTopVentures";
import Blogs from "../../components/HomePage/Blogs";
import Testimonial from "../../components/HomePage/Testimonial";

const NewHome = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <TopCities />
            <TopVentures />
            <RecentlyAddedVentures />
            <ChooseTopVentures />
            <Blogs />
            <Testimonial />
            <Footer />
        </>
    );
};

export default NewHome;
