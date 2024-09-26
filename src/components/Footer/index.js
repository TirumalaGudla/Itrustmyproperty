import React from 'react';
import './index.css';

import { CgArrowsExpandUpRight } from "react-icons/cg";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-row">
                <div className="footer-column logo-column">
                    <img src="./images/mlogo.png" alt="Logo" className="footer-logo" />
                </div>
                <div className="footer-column">
                    <h4>Contact</h4>
                    <div className="footer-list">
                        <ul>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Visit Us</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> 16/1 Arundelpet, Guntur</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> +91-9876-5432-10</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> hr@itrustmyproperty.com</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Office Hours: 10AM to 6PM</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <div className="footer-list">
                        <ul>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Home</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Property Listing</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> About Us</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Contact Us</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Testimonials</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Legal Information</h4>
                    <div className="footer-list">
                        <ul>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Terms of Service</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Privacy Policy</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Disclaimer</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> User Agreement</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Map & Its Branches</h4>
                    <img src="./images/map.png" alt="Map" className="footer-map" />
                </div>
            </div>
          
            <div className="footer-row">
                <div className="footer-column">
                    <h4>Legal Information</h4>
                    <div className="footer-list">
                        <ul>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Terms of Service</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Privacy Policy</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Disclaimer</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> User Agreement</li>
                            <li><CgArrowsExpandUpRight className="check-icon" /> Accessibility</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <div className="footer-list social-icons">
                        <ul>
                        <li><img src="images/instagram.png" alt="Instagram" /> Instagram</li>
                            <li><img src="images/facebook.jpg" alt="Facebook" /> Facebook</li>
                            <li><img src="images/whatsapp.png" alt="WhatsApp" /> WhatsApp</li>
                            <li><img src="images/twitter.png" alt="Twitter" /> Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Our New Blogs</h4>
                    <div className="footer-list">
                        <ul>
                            <li><CgArrowsExpandUpRight className="check-icon" /> New Blogs</li>                           
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Newsletter</h4>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-disclaimer">
                <h4>Disclaimer</h4>
                <p>The information on this real estate portal is provided for general informational purposes only and is not guaranteed to be accurate, complete, or current. While we strive to ensure the reliability of the content, we make no warranties or representations regarding its accuracy. Property details, including prices, features, and availability, are submitted by third parties and may change without notice. Users should verify all information and consult with qualified real estate professionals, legal advisors, or financial consultants before making any decisions. The inclusion of any property or agent on this portal does not imply endorsement. We are not responsible for any transactions or agreements made between users and third parties. This portal may contain links to external sites, and we are not responsible for their content or availability. By using this portal, you agree to hold us harmless from any liability or damages arising from your use of the information provided or any transactions conducted through the portal.</p>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 I Trust My Property</p>
            </div>
        </footer>
    );
};

export default Footer;
