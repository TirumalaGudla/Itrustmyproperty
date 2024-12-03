import "./digitalLayout.css";
import { CgArrowsExpandUpRight } from "react-icons/cg";
const DigitalLayout = () => {
    return (
        <div className="dl-section" id="VIEW_LAYOUT">
            <button className="view-dl-btn">
                View Digital Layout <CgArrowsExpandUpRight className="arrow-icon" />{" "}
            </button>
            <span className="dl-span">Layout</span>
            <h2 className="dl-title">View Layout</h2>
            <img src="/images/indrravathi/indrravathi_layout.png" alt="Indrravathi Layout" />
        </div>
    );
};

export default DigitalLayout;
