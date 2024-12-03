import React from "react";
import { useNavigate } from "react-router-dom";
import { indrravathiHero } from "../../../AppConfig";
import "./heroSection.css";

const HeroSection = ({ togglePopup }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClickImage = (id) => {
        navigate(`/indrravathi?heroimg/${id}`);
        togglePopup();
    };
    return (
        <div className="ind-hero">
            <img
                className="ind-hero-image-1"
                src={indrravathiHero[0].img}
                alt="ind-hero"
                onClick={() => handleClickImage(0)}
            />
            <div className="ind-hero-right">
                <img
                    className="ind-hero-image-2"
                    src={indrravathiHero[1].img}
                    alt="ind-hero"
                    onClick={() => handleClickImage(1)}
                />
                <div className="ind-hero-right-bottom">
                    <img
                        className="ind-hero-image-3"
                        src={indrravathiHero[2].img}
                        alt="ind-hero"
                        onClick={() => handleClickImage(2)}
                    />
                    {indrravathiHero.length > 4 ? (
                        <div className="ind-hero-last-img-box">
                            <div className="overlay" onClick={() => handleClickImage(3)}>
                                <span className="overlay-text">{`+${indrravathiHero.length - 4} More`}</span>
                            </div>
                            <img className="ind-hero-image-4" src={indrravathiHero[3].img} alt="ind-hero" />
                        </div>
                    ) : (
                        <img
                            className="ind-hero-image-3"
                            src={indrravathiHero[3].img}
                            alt="ind-hero"
                            onClick={() => handleClickImage(3)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
