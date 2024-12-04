import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import { useState } from "react";
import IndrravathiContent from "./IndrravathiContent/IndrravathiContent";

const LVRGardens = () => {
    const [open, setOpen] = useState(false);
    const togglePopup = () => setOpen((prev) => !prev);
    return (
        <>
            <Header />
            <HeroSection togglePopup={togglePopup} />
            <IndrravathiContent />
            {open && <ImageViewer togglePopup={togglePopup} />}
            <Footer />
        </>
    );
};

export default LVRGardens;
