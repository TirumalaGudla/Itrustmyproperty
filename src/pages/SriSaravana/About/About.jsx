import "./about.css";
const About = () => {
    return (
        <div className="about-container">
            <div className="about-images-box">
                <img src="/images/saravana/saravana_about_4.png" alt="about_image" />
                <img src="/images/saravana/saravana_about_1.png" alt="about_image" />
                <img src="/images/saravana/saravana_about_3.png" alt="about_image" />
                <img src="/images/saravana/saravana_about_2.png" alt="about_image" />
            </div>
            <div className="about-content">
                <h5 className="about-label">About</h5>
                <h3 className="about-title">Sree Saravana Universal Projects Private Limited</h3>
                <p className="about-description">
                    Founded on 17 September 2014 in Vijayawada, this company specializes in construction, real estate,
                    and civil engineering, offering luxury apartments, open plots, interior design, architecture, and
                    project management, with a focus on quality, professional management, and flexible leasing.
                </p>
                <div className="about-values-box">
                    <div className="about-value-item">
                        <span className="about-value">10+</span>
                        <span className="about-value-label">Years of Experience</span>
                    </div>
                    <div className="about-value-item">
                        <span className="about-value">7,600+</span>
                        <span className="about-value-label">Customers</span>
                    </div>
                    <div className="about-value-item">
                        <span className="about-value">10+</span>
                        <span className="about-value-label">Projects</span>
                    </div>
                    <div className="about-value-item">
                        <span className="about-value">130+</span>
                        <span className="about-value-label">Acers of land</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
