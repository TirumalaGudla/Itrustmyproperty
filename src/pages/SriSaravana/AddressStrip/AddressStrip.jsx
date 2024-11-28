import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import "./addressStrip.css";

const AddressStrip = () => {
    return (
        <div className="address-strip">
            <div className="address-item">
                <span className="address-label">
                    <FaPhoneAlt className="address-icon" /> Mobile
                </span>
                <p className="address-val">+91 9491-78-1234</p>
            </div>
            <div className="address-item">
                <span className="address-label">
                    <MdOutlineEmail className="address-icon" /> Email
                </span>
                <p className="address-val">info@saravana.com</p>
            </div>
            <div className="address-item">
                <span className="address-label">
                    <MdOutlineLocationOn className="address-icon" /> Address
                </span>
                <p className="address-val">Currency Nagar, Vijayawada</p>
            </div>
        </div>
    );
};

export default AddressStrip;
