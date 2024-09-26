import React from 'react';
import './index.css';

const cities = [
    { name: 'Vijayawada', image: './images/vijayawada.jpg' },
    { name: 'Chennai', image: './images/chennai.jpg' },
    { name: 'Guntur', image: './images/guntur.jpg' },
    { name: 'Hyderabad', image: './images/hyderabad.jpg' },
    { name: 'Bengaluru', image: './images/bengaluru.jpg' },
    { name: 'Mumbai', image: './images/mumbai.png' },
    { name: 'Delhi', image: './images/delhi.png' },
    { name: 'Kolkata', image: './images/vijayawada.jpg' },
    { name: 'Pune', image: './images/guntur.jpg' },
    { name: 'Ahmedabad', image: './images/chennai.jpg' },
    { name: 'Jaipur', image: './images/hyderabad.jpg' },
    { name: 'Chandigarh', image: './images/mumbai.png' }
];

const TopCities = () => {
    return (
        <div className="container1">
            <h1 className="heading1">Top Cities</h1>
            <div className="image-gallery">
                {cities.map((city, index) => (
                    <div key={index} className="image-item">
                        <img src={city.image} alt={city.name} />
                        <div className="city-name">{city.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCities;
