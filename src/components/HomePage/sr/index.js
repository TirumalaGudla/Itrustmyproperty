import React, { useState, useEffect } from 'react';
import './index.css';

const Searchbx = () => {
  const [minSelectedValue, setMinSelectedValue] = useState(10000);
  const [maxSelectedValue, setMaxSelectedValue] = useState(25000);
  const minValue = 5000;
  const maxValue = 100000;
  const [isDragging, setIsDragging] = useState(false);
  const [draggingHandle, setDraggingHandle] = useState(null);

  useEffect(() => {
    // Initialize slider on component mount with default values
    updateSlider(minSelectedValue, maxSelectedValue);

    const handleMouseUp = () => {
      setIsDragging(false);
      setDraggingHandle(null);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        handleDrag(event, draggingHandle);
      }
    };

    // Add event listeners for mouse move and mouse up
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, draggingHandle, minSelectedValue, maxSelectedValue]);

  const updateSlider = (min, max) => {
    const leftPercent = ((min - minValue) / (maxValue - minValue)) * 100;
    const rightPercent = ((max - minValue) / (maxValue - minValue)) * 100;

    document.querySelector('.range-fill').style.left = `${leftPercent}%`;
    document.querySelector('.range-fill').style.right = `${100 - rightPercent}%`;
    document.querySelector('.handle-left').style.left = `${leftPercent}%`;
    document.querySelector('.handle-right').style.left = `${rightPercent}%`;

    document.getElementById('priceRangeText').textContent = `Your price range is ${formatPrice(min)}-${formatPrice(max)}`;
  };

  const formatPrice = (price) => {
    return price >= 1000 ? `${price / 1000}K` : price;
  };

  const handleMouseDown = (event, handle) => {
    setIsDragging(true);
    setDraggingHandle(handle);
  };

  const handleDrag = (event, handle) => {
    const slider = document.getElementById('slider');
    const sliderRect = slider.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    let newValue = Math.round(minValue + ((event.clientX - sliderRect.left) / sliderWidth) * (maxValue - minValue));

    // Ensure the value increases in increments of 1000
    newValue = Math.round(newValue / 1000) * 1000;

    if (handle === 'left' && newValue < maxSelectedValue) {
      setMinSelectedValue(Math.max(minValue, newValue));
    } else if (handle === 'right' && newValue > minSelectedValue) {
      setMaxSelectedValue(Math.min(maxValue, newValue));
    }

    updateSlider(minSelectedValue, maxSelectedValue);
  };

  return (
    <div className="main-container">
     
        <div className="overlay-content">
          <span>Legally Verified</span>
          <br />
          <span>Ventures</span>
        </div>
     
      {/* <h1>ARE YOU BUYING 100% SECURED PLOT IN VENTURE</h1> */}
      <div className="container">
        <div className="left-content">
          <div className="input-select-container">
            <input type="text" placeholder="City/ Venture Name" className="input-field" />
            <select className="searchbox-select">
              <option value="">Approved By</option>
              <option value="DCD">DTPC</option>
              <option value="DAD">UDS</option>
              <option value="DTC">CRDA</option>
              <option value="ARR">RERA</option>
            </select>
          </div>
          <div className="select-range-container">
            <div className="select-container">
              <label htmlFor="bedrooms"> Sq Ft / Sq Yard</label>
              <select>
                <option value="sqft">Sq Ft</option>
                <option value="sqyard">Sq Yard</option>
              </select>
            </div>
            <div className="price-range">
              <label htmlFor="priceRange">
                Price Range: <span style={{ marginLeft: '30px', fontSize: '12px', fontWeight: '500' }}>
                  &#8377; 5,000 - 1,00,000
                </span>
              </label>
              <div id="slider" className="range-slider">
                <div className="range-fill"></div>
                <div
                  className="handle handle-left"
                  onMouseDown={(e) => handleMouseDown(e, 'left')}
                ></div>
                <div
                  className="handle handle-right"
                  onMouseDown={(e) => handleMouseDown(e, 'right')}
                ></div>
              </div>
              <p id="priceRangeText">Your price range is 10K-25K</p>
            </div>
          </div>
        </div>
        <div className="search-btn-container">
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbx;
