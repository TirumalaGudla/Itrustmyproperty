import "./topCities.css";
import { useNavigate } from "react-router-dom";

const cities = [
    { name: "Vijayawada", image: "./images/vijayawada.jpg", pageUrl: "/inprogress" },
    { name: "Chennai", image: "./images/chennai.jpg", pageUrl: "/inprogress" },
    { name: "Guntur", image: "./images/guntur.jpg", pageUrl: "/guntur" },
    { name: "Hyderabad", image: "./images/hyderabad.jpg", pageUrl: "/inprogress" },
    // { name: "Bengaluru", image: "./images/bengaluru.jpg", pageUrl: "/inprogress" },
    // { name: "Mumbai", image: "./images/mumbai.png" },
    // { name: "Delhi", image: "./images/delhi.png" },
    // { name: "Kolkata", image: "./images/vijayawada.jpg", pageUrl: "/inprogress" },
    // { name: "Pune", image: "./images/guntur.jpg", pageUrl: "/inprogress" },
    // { name: "Ahmedabad", image: "./images/chennai.jpg", pageUrl: "/inprogress" },
    // { name: "Jaipur", image: "./images/hyderabad.jpg", pageUrl: "/inprogress" },
    // { name: "Chandigarh", image: "./images/mumbai.png" },
];

const TopCities = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {
        navigate(url);
    };
    return (
        <div className="top-cities">
            <h1 className="top-cities-title">Top Cities</h1>
            <ul className="city-list">
                {cities.map((city, index) => (
                    <li key={index} className="city-item" onClick={() => handleClick(city.pageUrl)}>
                        <img src={city.image} alt={city.name} />
                        <span>{city.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopCities;
