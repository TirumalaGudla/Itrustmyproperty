import React from "react";
import { FaExternalLinkAlt, FaMapMarkerAlt, FaHome, FaClock, FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./topVentures.css";

const ventures = [
    {
        title: "Indrravathi",
        location: "Vijayawada",
        date: "July 20, 2024",
        price: "25000/sq yd",
        listings: "150 Plots Available",
        image: "/images/indrravathi_img.png",
        pageUrl: "/indrravathi",
    },
    {
        title: "LVR Gardens",
        location: "Hyderabad",
        date: "August 5, 2024",
        price: "18000/sq yd",
        listings: "200 Plots Available",
        image: "/images/lvr-photo.jpg",
        pageUrl: "/lvr-gardens",
    },
    {
        title: "Sunny Heights",
        location: "Bangalore",
        date: "June 15, 2024",
        price: "22000/sq yd",
        listings: "100 Plots Available",
        image: "/images/top-venture2.jpg",
        pageUrl: "/inprogress",
    },
    {
        title: "Skyline Residency",
        location: "Chennai",
        date: "September 12, 2024",
        price: "27000/sq yd",
        listings: "120 Plots Available",
        image: "/images/lvr_gardens_img.png",
        pageUrl: "/inprogress",
    },
    {
        title: "Golden Meadows",
        location: "Pune",
        date: "May 30, 2024",
        price: "21000/sq yd",
        listings: "180 Plots Available",
        image: "/images/top-ventue3.png",
        pageUrl: "/inprogress",
    },
    {
        title: "Blue Horizon",
        location: "Mumbai",
        date: "October 22, 2024",
        price: "30000/sq yd",
        listings: "140 Plots Available",
        image: "/images/top-venture4.jpg",
        pageUrl: "/inprogress",
    },
];

const TopVentures = () => {
    return (
        <div className="top-ventures">
            <h1 className="top-ventures-title">Our Top Ventures</h1>
            <button className="view-all-button">
                View All <FaExternalLinkAlt className="view-all-icon" />
            </button>
            <ul className="venture-list">
                {ventures.map((venture, index) => (
                    <li key={index} className="venture-item">
                        <img src={venture.image} alt={venture.title} className="venture-image" />
                        <div className="venture-info">
                            <div className="venture-title-view-btn">
                                <h3 className="venture-title">{venture.title}</h3>
                                <button
                                    className="view-listing-button"
                                    onClick={() => window.open(venture.pageUrl, "_blank")}>
                                    View <FaExternalLinkAlt className="view-icon" />
                                </button>
                            </div>
                            <div className="venture-location-date">
                                <div className="venture-location">
                                    {/* <img src="/images/location.png" alt="Location Icon" className="location-icon" /> */}
                                    <FaLocationDot className="location-icon" />
                                    <span>{venture.location}</span>
                                </div>
                                <div className="venture-date">
                                    <FaClock />
                                    <span>{venture.date}</span>
                                </div>
                            </div>
                            <div className="venture-price-listings">
                                <div className="venture-listings">
                                    <FaHome />
                                    <span>{venture.listings}</span>
                                </div>
                                <div className="venture-price">
                                    <FaRupeeSign />
                                    <span>{venture.price}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopVentures;
