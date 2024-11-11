import React from "react";
import VentureListItem from "./VentureListItem";
import "./index.css";

const VenturesList = () => {
    return (
        <div className="ventures-list">
            <h1 className="list-title">Ventures List in Guntur</h1>
            <hr className="under-line" />
            <hr className="under-line short" />
            <ul className="venture-list">
                <VentureListItem />
                <VentureListItem />
                <VentureListItem />
            </ul>
        </div>
    );
};

export default VenturesList;
