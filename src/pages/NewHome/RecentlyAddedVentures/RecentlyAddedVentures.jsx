import React from "react";
import "./recentlyAddedVentures.css";

const ventures = [
    {
        id: 1,
        image: "/images/home/1.png",
        title: "APEX Heights",
        company: "Sri Bramaradha Pvt Ltd",
        location: "Gudavalli, Krishna",
        price: "₹ 27,000/Sq.yard",
        pageUrl: "/inprogress",
    },
    {
        id: 2,
        image: "/images/home/2.png",
        title: "Sree City The Platina",
        company: "SRK Infra Pvt Ltd",
        location: "Ambapuram, Vizag",
        price: "₹ 31,000/Sq.yard",
        pageUrl: "/inprogress",
    },
    {
        id: 3,
        image: "/images/home/3.png",
        title: "APEX Heights",
        company: "Sri Bramaradha Pvt Ltd",
        location: "Gudavalli, Krishna",
        price: "₹ 38,000/Sq.yard",
        pageUrl: "/inprogress",
    },
    {
        id: 4,
        image: "/images/home/4.png",
        title: "APEX Heights",
        company: "Sri Bramaradha Pvt Ltd",
        location: "Gudavalli, Krishna",
        price: "₹ 78,000/Sq.yard",
        pageUrl: "/inprogress",
    },
    {
        id: 5,
        image: "/images/home/5.png",
        title: "APEX Heights",
        company: "Sri Bramaradha Pvt Ltd",
        location: "Gudavalli, Krishna",
        price: "₹ 27,000/Sq.yard",
        pageUrl: "/inprogress",
    },
    {
        id: 6,
        image: "/images/home/6.png",
        title: "Sree City The Platina",
        company: "SRK Infra Pvt Ltd",
        location: "Ambapuram, Vizag",
        price: "₹ 97,000/Sq.yard",
        pageUrl: "/inprogress",
    },
];

const RecentlyAddedVentures = () => {
    return (
        <div className="rec-added-ventures">
            <h1 className="rec-added-ventures-title">Recently Added Ventures</h1>
            <ul className="rec-added-ventures-list">
                {ventures.map((venture) => (
                    <li
                        key={venture.id}
                        className="rec-added-venture-item"
                        onClick={() => window.open(venture.pageUrl, "_blank")}>
                        <img src={venture.image} alt={venture.title} className="rec-added-venture-image" />
                        <div className="rec-added-venture-info">
                            <h3 className="rec-added-venture-title">{venture.title}</h3>
                            <p className="rec-added-venture-company">{venture.company}</p>
                            <hr />
                            <p className="rec-added-venture-location">{venture.location}</p>
                            <p className="rec-added-venture-price">{venture.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentlyAddedVentures;
