import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [minSelectedValue, setMinSelectedValue] = useState(10000);
    const [maxSelectedValue, setMaxSelectedValue] = useState(25000);
    const minValue = 5000;
    const maxValue = 100000;
    const [isDragging, setIsDragging] = useState(false);
    const [draggingHandle, setDraggingHandle] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize slider on component mount with default values
        updateSlider(minSelectedValue, maxSelectedValue);

        const handleMouseUp = () => {
            setIsDragging(false);
            setDraggingHandle(null);
        };

        const handleMouseMove = (event) => {
            if (isDragging) {
                handleDrag(event, draggingHandle);
            }
        };

        // Add event listeners for mouse move and mouse up
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        // Clean up the event listeners when the component unmounts
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, draggingHandle, minSelectedValue, maxSelectedValue]);

    const updateSlider = (min, max) => {
        const leftPercent = ((min - minValue) / (maxValue - minValue)) * 100;
        const rightPercent = ((max - minValue) / (maxValue - minValue)) * 100;

        document.querySelector(".range-fill").style.left = `${leftPercent}%`;
        document.querySelector(".range-fill").style.right = `${100 - rightPercent}%`;
        document.querySelector(".handle-left").style.left = `${leftPercent}%`;
        document.querySelector(".handle-right").style.left = `${rightPercent}%`;

        document.getElementById("priceRangeText").textContent = `Your price range is ${formatPrice(min)}-${formatPrice(
            max
        )}`;
    };

    const formatPrice = (price) => {
        return price >= 1000 ? `${price / 1000}K` : price;
    };

    const handleMouseDown = (event, handle) => {
        setIsDragging(true);
        setDraggingHandle(handle);
    };

    const handleDrag = (event, handle) => {
        const slider = document.getElementById("slider");
        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        let newValue = Math.round(minValue + ((event.clientX - sliderRect.left) / sliderWidth) * (maxValue - minValue));

        // Ensure the value increases in increments of 1000
        newValue = Math.round(newValue / 1000) * 1000;

        if (handle === "left" && newValue < maxSelectedValue) {
            setMinSelectedValue(Math.max(minValue, newValue));
        } else if (handle === "right" && newValue > minSelectedValue) {
            setMaxSelectedValue(Math.min(maxValue, newValue));
        }

        updateSlider(minSelectedValue, maxSelectedValue);
    };

    const handleSearch = () => {
        // Handle search logic here
        if (searchInput.toLowerCase() === "guntur") {
            navigate("/guntur");
        }
    };

    return (
        <div className="hero-section">
            <h1 className="hero-title">
                Legally Verified <br />
                Ventures
            </h1>
            <div className="search-box">
                <h1 className="search-title">Search For Your Property</h1>
                <form className="hero-search-form">
                    <div className="inp-wrapper">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="City / Venture Name"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <select className="select-input">
                        <option value="">Approved By</option>
                        <option value="guntur">DTPC</option>
                        <option value="hyderabad">UDS</option>
                        <option value="bangalore">CRDA</option>
                        <option value="vijayawada">RERA</option>
                    </select>

                    <select className="select-input">
                        <option value="sqft">Sq Ft</option>
                        <option value="sqyard">Sq Yard</option>
                    </select>

                    <div className="price-range">
                        <label className="price-range-text" htmlFor="priceRange">
                            Price Range: <span>&#8377; 5,000 - 1,00,000</span>
                        </label>
                        <div id="slider" className="range-slider">
                            <div className="range-fill"></div>
                            <div className="handle handle-left" onMouseDown={(e) => handleMouseDown(e, "left")}></div>
                            <div className="handle handle-right" onMouseDown={(e) => handleMouseDown(e, "right")}></div>
                        </div>
                        <p className="priceRangeText" id="priceRangeText">
                            Your price range is 10K-25K
                        </p>
                    </div>
                </form>
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
