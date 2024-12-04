import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="indrravathi-about">
            <div className="indrravathi-logo">
                <img src="/images/indrravathi/indrravathi_logo.png" alt="indrravathi" />
            </div>
            <h1 className="indrravathi-title">INDRRAVATHI</h1>
            <span className="indrravathi-subtitle">About</span>
            <p className="indrravathi-desc">
                INDRRAVATHI is a CRDA-approved gated community that offers a luxurious and secure lifestyle with an
                array of modern amenities. The community features a grand main entrance Residents enjoy the convenience
                of 40ft internal blacktop roads, overhead tanks, solar-fenced compound walls, and individual plot water
                tap connections The community features <br />
                Constructed by <a href="/sri-saravana">Saravana Universal Projects Pvt.Ltd</a>
            </p>
            <div className="indrravathi-specs">
                <div className="indrravathi-spec">
                    <span className="indrravathi-spec-value">2.5K</span>
                    <span className="indrravathi-spec-title">Trusted By:</span>
                </div>
                <div className="indrravathi-spec">
                    <span className="indrravathi-spec-value">22 Acers</span>
                    <span className="indrravathi-spec-title">Property Size:</span>
                </div>
                <div className="indrravathi-spec">
                    <span className="indrravathi-spec-value">198</span>
                    <span className="indrravathi-spec-title">Plot Count:</span>
                </div>
                <div className="indrravathi-spec">
                    <span className="indrravathi-spec-value">77</span>
                    <span className="indrravathi-spec-title">Available Plots:</span>
                </div>
            </div>
            <button className="indrravathi-button">
                <img src="/images/indrravathi/eye.png" alt="globe" /> Plot Visualization
            </button>
            <button className="indrravathi-button">
                <img src="/images/indrravathi/globe360.png" alt="globe" /> 360° Venture View{" "}
            </button>
        </div>
    );
};

export default About;
