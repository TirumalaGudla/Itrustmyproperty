import { indrravathiLocationHighlights } from "../../../../../AppConfig";
import "./locationHighlights.css";
const LocationHighlights = () => {
    return (
        <div className="location-hightlights" id="LOCATION_HIGHLIGHTS">
            <span className="lh-span">HighLights</span>
            <h2 className="lh-title">Location HighLights</h2>
            <ul className="lh-images">
                {indrravathiLocationHighlights.map((item) => (
                    <li className="ih-item" key={item.id}>
                        <img src={item.img} alt="location hightlight" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationHighlights;
