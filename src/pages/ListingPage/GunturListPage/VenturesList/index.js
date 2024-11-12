import React from "react";
import VentureListItem from "./VentureListItem";
import { gunturVentures } from "../../../../AppConfig";
import "./index.css";

const VenturesList = () => {
    return (
        <div className="ventures-list">
            <h1 className="list-title">Ventures List in Guntur</h1>
            <hr className="under-line" />
            <hr className="under-line short" />
            <ul className="venture-list">
                {gunturVentures.map((venture) => (
                    <VentureListItem key={venture?.id} venture={venture} />
                ))}
            </ul>
        </div>
    );
};

export default VenturesList;
