import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const cities = [
    { name: "Vijayawada", image: "./images/vijayawada.jpg", pageUrl: "/inprogress" },
    { name: "Chennai", image: "./images/chennai.jpg", pageUrl: "/inprogress" },
    { name: "Guntur", image: "./images/guntur.jpg", pageUrl: "/guntur" },
    { name: "Hyderabad", image: "./images/hyderabad.jpg", pageUrl: "/inprogress" },
    // { name: "Bengaluru", image: "./images/bengaluru.jpg", pageUrl: "/inprogress" },
    // { name: "Mumbai", image: "./images/mumbai.png" },
    // { name: "Delhi", image: "./images/delhi.png" },
    // { name: "Kolkata", image: "./images/vijayawada.jpg", pageUrl: "/inprogress" },
    // { name: "Pune", image: "./images/guntur.jpg", pageUrl: "/inprogress" },
    // { name: "Ahmedabad", image: "./images/chennai.jpg", pageUrl: "/inprogress" },
    // { name: "Jaipur", image: "./images/hyderabad.jpg", pageUrl: "/inprogress" },
    // { name: "Chandigarh", image: "./images/mumbai.png" },
];

const TopCities = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    };

    return (
        <div className="container1">
            <h1 className="heading1">Top Cities</h1>
            <div className="image-gallery">
                {cities.map((city, index) => (
                    <div key={index} className="image-item" onClick={() => handleClick(city.pageUrl)}>
                        <img src={city.image} alt={city.name} />
                        <div className="city-name">{city.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCities;
