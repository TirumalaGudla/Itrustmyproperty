import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact-section" id="CONTACT">
            <span className="contact-span">Contact</span>
            <h2 className="contact-title">Contact Details</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <span className="contact-label">
                        <MdOutlineEmail className="contact-icon" /> Email
                    </span>
                    <p className="contact-val">indrravati2017@gmail.com</p>
                </div>
                <div className="contact-item">
                    <span className="contact-label">
                        <FiPhone className="contact-icon" /> Mobile
                    </span>
                    <p className="contact-val">+91 9959-89-2349</p>
                    <p className="contact-val">+91 9949-28-2244</p>
                </div>
                <div className="contact-item">
                    <span className="contact-label">
                        <MdOutlineLocationOn className="contact-icon" /> Address
                    </span>
                    <p className="contact-val">Visadala, Amaravathi.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
