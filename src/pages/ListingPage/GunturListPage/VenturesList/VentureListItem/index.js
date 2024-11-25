import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const VentureListItem = ({ venture }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/guntur-ventures/${venture?.id}`);
        
    }
    return (
        <div className="venture-list-item" onClick={handleClick}>
            <img src={venture?.image} alt="venture-image" className="venture-img" />
            <div className="venture-info">
                <h2 className="venture-title">{venture?.title}</h2>
                <p className="venture-location">
                    <img src="/location.png" alt="location" className="location-icon" /> {venture?.location}
                </p>
                <div className="venture-stats">
                    {venture?.stats?.map((stat) =>
                        stat?.label ? (
                            <>
                                <div className="stat" key={stat?.id}>
                                    <span className="value">
                                        {stat?.value}
                                        <span className="units"> {stat?.unit}</span>
                                    </span>
                                    <span className="stat-text">{stat?.label}</span>
                                </div>
                                <div className="vertical-line"></div>
                            </>
                        ) : stat?.statText1 ? (
                            <div className="stat">
                                <span className="stat-text">{stat?.statText1}</span>
                                <span className="stat-text">{stat?.statText2}</span>
                            </div>
                        ) : (
                            <>
                                <div className="stat" key={stat?.id}>
                                    <span className="value">
                                        {stat?.value1} <span className="units">{stat?.unit1}</span>
                                    </span>
                                    <span className="value">
                                        {stat?.value2} <span className="units">{stat?.unit2}</span>
                                    </span>
                                </div>
                                <div className="vertical-line"></div>
                            </>
                        )
                    )}
                </div>
                <h3 className="highlights-title">Highlights:</h3>
                <ul className="venture-highlights">
                    {venture?.highlights?.map((highlight) => (
                        <li className="highlight" key={highlight?.id}>
                             {highlight?.label}
                        </li>
                    ))}
                </ul>
                <div className="ventrue-actions">
                    <button className="act-btn number">View Number</button>
                    <button className="act-btn contact">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default VentureListItem;
