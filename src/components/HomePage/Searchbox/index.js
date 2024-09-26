// import React from 'react';
// import './index.css';
// import { FaSearch } from 'react-icons/fa'; 

// const Searchbox = () => {
//   return (
//     <div className="searchbox-wrapper">
//       <div className="background-image-container">
//         <div className="overlay-content">
//           <span>Legally Verified</span>
//           <br />
//           <span>Ventures</span>
//         </div>
//       </div>
//       <div className="searchbox-container">
//         <h2>Search For Your Property</h2>
//         <div className="searchbox-form">
//           <select className="searchbox-select">
//             <option value="">Location</option>
//             <option value="guntur">Guntur</option>
//             <option value="hyderabad">Hyderabad</option>
//             <option value="bangalore">Bangalore</option>
//             <option value="vijayawada">Vijayawada</option>
//             <option value="chennai">Chennai</option>
//             <option value="kolkata">Kolkata</option>
//             <option value="mumbai">Mumbai</option>
//             <option value="delhi">Delhi</option>
//             <option value="pune">Pune</option>
//             <option value="ahmedabad">Ahmedabad</option>
//           </select>
//           <div className="searchbox-input-wrapper">
//             <input
//               type="text"
//               className="searchbox-input"
//               placeholder="Venture Name"
//             />
//             <FaSearch className="searchbox-input-icon" />
//           </div>
//           <select className="searchbox-select">
//             <option value="">Approved By</option>
//             <option value="DCD">DCD</option>
//             <option value="DAD">DAD</option>
//             <option value="DTC">DTC</option>
//             <option value="ARR">ARR</option>
//           </select>
//           <button className="searchbox-button">
//             Search Now
//             <FaSearch className="searchbox-button-icon" /> {/* Icon inside the button */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchbox;

import React, { useState } from 'react';
import './index.css';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const Searchbox = () => {
  const [priceRange, setPriceRange] = useState([10000, 53700]); // Default price range

  const handleRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = e.target.value;
    setPriceRange(newRange);
  };

  return (
    <div className="searchbox-wrapper">
      <div className="background-image-container">
        <div className="overlay-content">
          <span>Legally Verified</span>
          <br />
          <span>Ventures</span>
        </div>
      </div>
      <div className="searchbox-container">
        <h2>Search For Your Property</h2>
        <div className="searchbox-form">
       
          <select className="searchbox-select">
            <option value="">Location</option>
            <option value="guntur">Guntur</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="bangalore">Bangalore</option>
            <option value="vijayawada">Vijayawada</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="pune">Pune</option>
            <option value="ahmedabad">Ahmedabad</option>
          </select>

  
          <div className="searchbox-input-wrapper">
            <input
              type="text"
              className="searchbox-input"
              placeholder="Venture Name"
            />
            <FaSearch className="searchbox-input-icon" />
          </div>


          <select className="searchbox-select">
            <option value="">Approved By</option>
            <option value="DCD">DCD</option>
            <option value="DAD">DAD</option>
            <option value="DTC">DTC</option>
            <option value="ARR">ARR</option>
          </select>

        

    
          <button className="searchbox-button">
            Search Now
            <FaSearch className="searchbox-button-icon" /> 
          </button>
        </div>
        
          {/* <div className="price-range">
            <label htmlFor="priceRange">
              Price Range: 
              <span style={{ marginLeft: '30px', fontSize: '12px', fontWeight: '500' }}>
                &#8377; 5,000 - 1,00,000
              </span>
            </label>
            <div id="slider" className="range-slider">
              <div
                className="range-fill"
                style={{
                  left: `${(priceRange[0] / 100000) * 100}%`,
                  right: `${100 - (priceRange[1] / 100000) * 100}%`
                }}
              ></div>
              <input
                type="range"
                min="5000"
                max="100000"
                value={priceRange[0]}
                className="handle handle-left"
                onChange={(e) => handleRangeChange(e, 0)}
              />
              <input
                type="range"
                min="5000"
                max="100000"
                value={priceRange[1]}
                className="handle handle-right"
                onChange={(e) => handleRangeChange(e, 1)}
              />
            </div>
            <p id="priceRangeText">
              Your price range is {Math.round(priceRange[0] / 1000)}K-
              {Math.round(priceRange[1] / 1000)}K
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default Searchbox;
