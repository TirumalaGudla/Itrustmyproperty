import React from 'react';
import './index.css';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaHome, FaClock, FaRupeeSign } from 'react-icons/fa';
import image1 from '../images/image1.jpg'; // Update the path to your image
// import image2 from '../images/image2.jpg'; 
// import image3 from '../images/image3.jpg'; 

const ventures = [
    {
        title: "Green Valley",
        location: "Vijayawada",
        date: "July 20, 2024",
        price: "25000/sq yd",
        listings: "150 Plots Available",
        image: image1,
    },
    {
        title: "Fortune Estate",
        location: "Hyderabad",
        date: "August 5, 2024",
        price: "18000/sq yd",
        listings: "200 Plots Available",
        image: image1,
    },
    {
        title: "Sunny Heights",
        location: "Bangalore",
        date: "June 15, 2024",
        price: "22000/sq yd",
        listings: "100 Plots Available",
        image: image1,
    },
    {
        title: "Skyline Residency",
        location: "Chennai",
        date: "September 12, 2024",
        price: "27000/sq yd",
        listings: "120 Plots Available",
        image: image1,
    },
    {
        title: "Golden Meadows",
        location: "Pune",
        date: "May 30, 2024",
        price: "21000/sq yd",
        listings: "180 Plots Available",
        image: image1,
    },
    {
        title: "Blue Horizon",
        location: "Mumbai",
        date: "October 22, 2024",
        price: "30000/sq yd",
        listings: "140 Plots Available",
        image: image1,
    },
];

const TopVentures = () => {
    return (
      <div className="top-ventures-wrapper1">
        <div className="heading-wrapper1">
          <h2>Our Top Ventures</h2>
          <div className="heading-line1"></div>
          <div className="heading-short-line1"></div>
          <button className="view-all-button1">
            View All <FaExternalLinkAlt className="view-all-icon1" />
          </button>
        </div>
        <div className="ventures-container">
          {ventures.map((venture, index) => (
            <div key={index} className="venture-card">
              <img
                src={venture.image}
                alt={venture.title}
                className="venture-image"
              />
              <div className="venture-info">
                {/* <div className="venture-title">
                  <h3>{venture.title}</h3>
                  <button className="view-listing-button">
                    View Listing <FaExternalLinkAlt className="view-listing-icon" />
                  </button>
                </div> */}
    <div className="venture-title">
  <div className="title-wrapper">
    <h3 className="truncate-title">{venture.title}</h3>
    <div className="title-tooltip">{venture.title}</div> {/* Custom tooltip */}
  </div>
  <button className="view-listing-button">
    View Listing <FaExternalLinkAlt className="view-listing-icon" />
  </button>
</div>



                <div className="venture-details">
                  <div className="location-date location-icon">
                    <p> <img src={require('../images/location.png')} alt="Location Icon" /> {venture.location}</p>
                    <p><FaClock /> {venture.date}</p>
                  </div>
                  <div className="listing-price">
                    {/* <p><FaHome /> {venture.listings}</p> */}
                    <p> {venture.listings}</p>
                    <p><FaRupeeSign /> <span> {venture.price}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TopVentures;
