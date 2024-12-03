import { indrravathiAmeneties } from "../../../../../AppConfig";
import "./ameneties.css";

const Ameneties = () => {
    return (
        <div className="ameneties-section" id="VENTURE_AMENITIES">
            <div className="ameneties-icons">
                {indrravathiAmeneties.map((item) => (
                    <div key={item.id} style={{ backgroundImage: item.bgColor }} className="ame-img-box">
                        <img src={item.img} alt="ameneties" />
                    </div>
                ))}
            </div>
            <div className="content">
                <span className="ame-span">Amenities</span>
                <h2 className="ame-title">Available Amenities</h2>
                <p className="ame-desc">
                    We offer a wide range of amenities designed to elevate your experience, including an onsite gym,
                    solar-powered energy, a swimming pool, added security. training facilities, and a large event room,
                    ensuring that every aspect of your workday is well-catered for.
                </p>
                <button className="km-btn">KNOW MORE</button>
            </div>
        </div>
    );
};

export default Ameneties;
