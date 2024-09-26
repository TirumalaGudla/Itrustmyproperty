import React from 'react';
import './index.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='blogs-heading'>
              <div className="heading-wrapper">
        <h2>Our New Blogs</h2>
        <div className="heading-line"></div>
        <div className="heading-short-line"></div>
        <button className="view-all-button1">
          View All <FaExternalLinkAlt className="view-all-icon" />
        </button>
      </div>
        <div className="blogs-container">
          
            <div className="image-container">
                {/* Top Row */}
                <div className="row">
                    <div className="image-card">
                        <img src={require('../images/1.png')} alt="Fortune Estate" />
                        <div className="image-content bottom-right">
                            <h3>Fortune Estate</h3>
                            <p>
            <span className="location-icon ">
                <img src={require('../images/location.png')} alt="Location Icon" />
            </span> 
            Vijayawada
        </p>
                        </div>
                    </div>
                    <div className="image-card">
                        <img src={require('../images/2.png')} alt="Fortune Estate" />
                        <div className="image-content bottom-left">
                            <h3>Fortune Estate</h3>
                            <p>
            <span className="location-icon ">
                <img src={require('../images/location.png')} alt="Location Icon" />
            </span> 
            Vijayawada
        </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="row">
    <div className="column-with-two">
        <div className="image-card">
            <img src={require('../images/3.png')} alt="Fortune Estate" />
            <div className="image-content top-center">
                <h3>Fortune Estate</h3>
                <p>
            <span className="location-icon ">
                <img src={require('../images/location.png')} alt="Location Icon" />
            </span> 
            Vijayawada
        </p>
            </div>
        </div>
        <div className="image-card">
            <img src={require('../images/4.png')} alt="Fortune Estate" />
            <div className="image-content top-center">
                <h3>Fortune Estate</h3>
                <p>
            <span className="location-icon ">
                <img src={require('../images/location.png')} alt="Location Icon" />
            </span> 
            Vijayawada
        </p>
            </div>
        </div>
    </div>
    <div className="image-card">
        <img src={require('../images/5.png')} alt="Fortune Estate" />
        <div className="image-content bottom-left">
            <h3>Fortune Estate</h3>
            <p>
            <span className="location-icon ">
                <img src={require('../images/location.png')} alt="Location Icon" />
            </span> 
            Vijayawada
        </p>
        </div>
    </div>
</div>

            </div>
        </div>
        </div>
      
    );
};

export default Blogs;
