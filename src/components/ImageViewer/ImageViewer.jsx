import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./imageViewer.css";
import { indrravathiHero, lvrHero } from "../../AppConfig";

const ImageViewer = ({ togglePopup }) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();
    const queryParam = location.search.split("/")[1]; // Extract the ID from the query parameter
    const path = location.pathname;
    const images = path.includes("indrravathi") ? indrravathiHero : lvrHero;

    const handleClose = () => {
        togglePopup(); // Close the modal when clicked
        navigate(path);
    };

    const handlePreviousImage = () => {
        if (Number(queryParam) > 0) {
            navigate(`${path}?heroimg/${Number(queryParam) - 1}`);
        } else {
            alert("you reached first image!");
        }
    };

    const handleNextImage = () => {
        if (Number(queryParam) < images.length - 1) {
            navigate(`${path}?heroimg/${Number(queryParam) + 1}`);
        } else {
            alert("you reached end of the list");
        }
    };

    return (
        <div className="image-view-overlay">
            <button className="close-btn" onClick={handleClose}>
                <IoClose className="close-icon" />
                <span className="close-text">close</span>
            </button>
            <div className="image-view-popup">
                <button className="arrow-btn" title="Previous image" onClick={handlePreviousImage}>
                    <FaChevronLeft className="left-arrow" />
                </button>
                <img src={images[Number(queryParam)]?.img} alt="image-view-popup" />
                <button className="arrow-btn" title="Next image" onClick={handleNextImage}>
                    <FaChevronRight className="right-arrow" />
                </button>
            </div>
            <span className="image-index">{`${Number(queryParam) + 1} / ${images.length}`}</span>
        </div>
    );
};

export default ImageViewer;
