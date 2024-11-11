import React from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1 className="hero-title">
                Legally Verified <br />
                Ventures
            </h1>
            <div className="search-box">
                <h1 className="search-title">Search For Your Property</h1>
                <form className="hero-search-form">
                    <select className="select-input">
                        <option value="">Location</option>
                        <option value="guntur">Guntur</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="vijayawada">Vijayawada</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="pune">Pune</option>
                        <option value="ahmedabad">Ahmedabad</option>
                    </select>
                    <div className="inp-wrapper">
                        <input type="text" className="search-input" placeholder="Search Properties" />
                        <FaSearch className="search-icon" />
                    </div>
                    <select className="select-input">
                        <option value="">Approved By</option>
                        <option value="DCD">DCD</option>
                        <option value="DAD">DAD</option>
                        <option value="DTC">DTC</option>
                        <option value="ARR">ARR</option>
                    </select>
                    <button className="search-btn">Search Now</button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;
