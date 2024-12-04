import { MdOutlineLocationOn } from "react-icons/md";
import "./ongoingProjects.css";

const GoingProjects = () => {
    return (
        <div className="completed-projects">
            <h5 className="completed-label">Ongoing</h5>
            <h2 className="completed-title">Ongoing Projects</h2>
            <div className="completed-projects-images">
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/ongoing_proj_1.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoingProjects;
