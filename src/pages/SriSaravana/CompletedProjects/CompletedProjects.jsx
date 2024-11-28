import { MdOutlineLocationOn } from "react-icons/md";
import "./completedProjects.css";

const CompletedProjects = () => {
    return (
        <div className="completed-projects">
            <h5 className="completed-label">Completed</h5>
            <h2 className="completed-title">Completed Projects</h2>
            <div className="completed-projects-images">
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_1.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_2.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_6.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_5.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_4.png" alt="completed-projects" />
                    <div className="loc-strip">
                        <MdOutlineLocationOn className="location-icon" />
                        <div className="location">
                            <span>Ayoudhya</span>
                            <span>Vijayawada</span>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img className="comp-image" src="/images/saravana/comp_proj_3.png" alt="completed-projects" />
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

export default CompletedProjects;
