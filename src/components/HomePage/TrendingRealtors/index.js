// TrendingRealtors.js

import React from 'react';
import './index.css'; // For custom styles

import image2 from "./../images/2.png";

const TrendingRealtors = () => {
    return (
        <div className="trending-realtors">
            <h2>Trending Realtors</h2>
            <div className="cards-box">
                <div className="card-item">
                    <div className="card-top">
                        <img src="images/main-logo.png" alt="main-logo" className="logo-img" />
                        <div className="top-details">
                            <h1>Sri Bhavya Constructions</h1>
                            <div className="year-projects">
                                <div>
                                    <p>2016</p>
                                    <p>Year of Estd.</p>
                                </div>
                                <div>
                                    <p>2</p>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="carousel-image" src={image2} alt="First slide" />
                                <div className="carousel-caption">
                                    <img src={image2} alt="LVR Logo" />
                                    <h5>LVR Gardens</h5>
                                    <div className="sub-item">
                                        <p>Vejendra, Guntur</p>
                                        <p>25,000/Sq.Yard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-image" src="images/1.png" alt="Second slide" />
                                <div className="carousel-caption">
                                    <h5>GK Gardens</h5>
                                    <div className="sub-item">
                                        <p>Nuzvid, Krishna</p>
                                        <p>35,000/Sq.Yard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control prev" onClick={() => {/* handle previous */}}>Prev</button>
                        <button className="carousel-control next" onClick={() => {/* handle next */}}>Next</button>
                    </div>
                    <div className="card-bottom">
                        Sri Bhavya Constructions & Infra is one of Guntur's well-established real estate developers, dedicatedly building world-class residential projects and commercial spaces since its inception in 2005.
                    </div>
                </div>

                <div className="card-item">
                    <div className="card-top">
                        <img src="images/LVR.png" alt="main-logo" className="logo-img" />
                        <div className="top-details">
                            <h1>GK Constructions</h1>
                            <div className="year-projects">
                                <div>
                                    <p>1997</p>
                                    <p>Year of Estd.</p>
                                </div>
                                <div>
                                    <p>3</p>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="carousel-image" src="images/5.png" alt="First slide" />
                                <div className="carousel-caption">
                                    <img src="images/LVR.png" alt="LVR Logo" />
                                    <h5>L&T Gardens</h5>
                                    <div className="sub-item">
                                        <p>Kothuru, Guntur</p>
                                        <p>15,000/Sq.Yard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-image" src="images/4.png" alt="Second slide" />
                                <div className="carousel-caption">
                                    <h5>KVR Gardens</h5>
                                    <div className="sub-item">
                                        <p>Ameerpet, Hyderabad</p>
                                        <p>65,000/Sq.Yard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-image" src="images/3.png" alt="Third slide" />
                                <div className="carousel-caption">
                                    <h5>LVR Gardens</h5>
                                    <div className="sub-item">
                                        <p>Kukatpalli, Hyderabad</p>
                                        <p>25,000/Sq.Yard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control prev" onClick={() => {/* handle previous */}}>Prev</button>
                        <button className="carousel-control next" onClick={() => {/* handle next */}}>Next</button>
                    </div>
                    <div className="card-bottom">
                        GK Constructions & Infra is one of Guntur's well-established real estate developers, dedicatedly building world-class residential projects and commercial spaces since its inception in 2005.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingRealtors;
