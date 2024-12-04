import React from "react";
import "./index.css";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import { useNavigate } from "react-router-dom";

const RecentlyAddedVentures = () => {
    const navigate = useNavigate();
    const ventures = [
        {
            id: 1,
            image: image1,
            title: "APEX Heights",
            company: "Sri Bramaradha Pvt Ltd",
            location: "Gudavalli, Krishna",
            price: "₹ 27,000/Sq.yard",
            pageUrl: "/inprogress",
        },
        {
            id: 2,
            image: image2,
            title: "Sree City The Platina",
            company: "SRK Infra Pvt Ltd",
            location: "Ambapuram, Vizag",
            price: "₹ 31,000/Sq.yard",
            pageUrl: "/inprogress",
        },
        {
            id: 3,
            image: image3,
            title: "APEX Heights",
            company: "Sri Bramaradha Pvt Ltd",
            location: "Gudavalli, Krishna",
            price: "₹ 38,000/Sq.yard",
            pageUrl: "/inprogress",
        },
        {
            id: 4,
            image: image4,
            title: "APEX Heights",
            company: "Sri Bramaradha Pvt Ltd",
            location: "Gudavalli, Krishna",
            price: "₹ 78,000/Sq.yard",
            pageUrl: "/inprogress",
        },
        {
            id: 5,
            image: image7,
            title: "APEX Heights",
            company: "Sri Bramaradha Pvt Ltd",
            location: "Gudavalli, Krishna",
            price: "₹ 27,000/Sq.yard",
            pageUrl: "/inprogress",
        },
        {
            id: 6,
            image: image6,
            title: "Sree City The Platina",
            company: "SRK Infra Pvt Ltd",
            location: "Ambapuram, Vizag",
            price: "₹ 97,000/Sq.yard",
            pageUrl: "/inprogress",
        },
    ];

    return (
        <div className="body1">
            <h1>Recently Added Ventures</h1>
            <div className="card-container11" onClick={() => navigate("/inprogress")}>
                {ventures.map((venture) => (
                    <div key={venture.id} className="card11">
                        <img src={venture.image} alt={venture.title} />
                        <div className="card-content11">
                            <h2>{venture.title}</h2>
                            <p>{venture.company}</p>
                            <hr />
                            <p>{venture.location}</p>
                            <p style={{ fontWeight: 600 }}>{venture.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyAddedVentures;
