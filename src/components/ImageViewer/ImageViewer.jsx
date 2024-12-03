import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./imageViewer.css";
import { indrravathiHero } from "../../AppConfig";

const ImageViewer = ({ togglePopup }) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();
    const queryParam = location.search.split("/")[1]; // Extract the ID from the query parameter

    const handleClose = () => {
        togglePopup(); // Close the modal when clicked
        navigate("/indrravathi");
    };

    const handlePreviousImage = () => {
        if (Number(queryParam) > 0) {
            navigate(`/indrravathi?heroimg/${Number(queryParam) - 1}`);
        } else {
            alert("you reached first image!");
        }
    };

    const handleNextImage = () => {
        if (Number(queryParam) < indrravathiHero.length - 1) {
            navigate(`/indrravathi?heroimg/${Number(queryParam) + 1}`);
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
                <img src={indrravathiHero[Number(queryParam)]?.img} alt="image-view-popup" />
                <button className="arrow-btn" title="Next image" onClick={handleNextImage}>
                    <FaChevronRight className="right-arrow" />
                </button>
            </div>
            <span className="image-index">{`${Number(queryParam) + 1} / ${indrravathiHero.length}`}</span>
        </div>
    );
};

export default ImageViewer;
