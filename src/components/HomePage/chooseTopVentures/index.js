import React from 'react';
import './index.css';
import readyToConstruct from '../images/3.png';
import invest from '../images/1.png';
import developing from '../images/4.png';

const ChooseTopVentures = () => {
  return (
    <div className="status">
      <h1>Choose by Project Status</h1>
      <div className="status-container">
        <div className="status-card">
          <img src={readyToConstruct} alt="Ready To Construct" />
          <div className="overlay">
            <span>Ready To Construct</span>
          </div>
        </div>

        <div className="status-card">
          <img src={invest} alt="Invest" />
          <div className="overlay">
            <span>Invest</span>
          </div>
        </div>

        <div className="status-card">
          <img src={developing} alt="Developing" />
          <div className="overlay">
            <span>Developing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTopVentures;
