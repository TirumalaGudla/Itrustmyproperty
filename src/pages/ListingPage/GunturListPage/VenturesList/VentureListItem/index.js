import React from "react";
import "./index.css";

const VentureListItem = () => {
    return (
        <div className="venture-list-item">
            <img src="/images/gunturList/ventures/venture_img.png" alt="" className="venture-img"  />
            <div className="venture-info">
                <h2 className="venture-title">LVR Gardens</h2>
                <p className="venture-location">
                    <img src="/location.png" alt="location" className="location-icon" /> Residential Land/ Plot, Gorantla, Guntur
                </p>
                <div className="venture-stats">
                    <div className="stat">
                        <span className="value">
                            ₹ 1.98 <span className="units">Cr</span>
                        </span>
                        <span className="value">
                            ₹ 1.98 <span className="units">sq.ft</span>
                        </span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="stat">
                        <span className="value">
                            450.73<span className="units"> sq.ft</span>
                        </span>
                        <span className="stat-text">Plot Area</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="stat">
                        <span className="stat-text">Plot/Land</span>
                        <span className="stat-text">Ready to Move</span>
                    </div>
                </div>
                <h3 className="highlights-title">Highlights:</h3>
                <ul className="venture-highlights">
                    <li className="highlight">East Facing</li>
                    <li className="highlight">Overlooking Main Road</li>
                    <li className="highlight">Near to Bus Stop</li>
                    <li className="highlight">Near To School</li>
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
