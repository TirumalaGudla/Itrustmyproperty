import { lvrBrochure } from "../../../../../AppConfig";
import { GrPrevious, GrNext } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import "./brochure.css";
import { useRef } from "react";
const Brochure = () => {
    const carouselBoxRef = useRef(null);

    const handleCarouselNav = (val) => {
        if (carouselBoxRef.current) {
            carouselBoxRef.current.scrollBy({
                left: val,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="brochure-section" id="BROCHURE">
            <span className="brochure-span">Brochure</span>
            <h2 className="brochure-title">Project Brochure</h2>
            <div className="carousel-nav-btn-box">
                <div className="carousel-nav-btn-box-left" onClick={() => handleCarouselNav(-200)}>
                    <GrPrevious className="carousel-nav-btn" />
                </div>
                <button className="view-brochure-btn">View Brochure</button>
                <div className="carousel-box" ref={carouselBoxRef}>
                    {lvrBrochure.map((item) => (
                        <img key={item.id} src={item.img} alt="brochure" />
                    ))}
                </div>
                <div className="carousel-nav-btn-box-right" onClick={() => handleCarouselNav(200)}>
                    <GrNext className="carousel-nav-btn" />
                </div>
            </div>
            <button className="download-brochure-btn">
                <MdOutlineFileDownload className="download-icon" /> Download Brochure
            </button>
        </div>
    );
};

export default Brochure;
