import React from 'react';
import './index.css';
import { FaExternalLinkAlt} from 'react-icons/fa';

const GunturListingPage = () => {
  return (
    <>
    
    <div className="top-ventures-wrapper1">
        <div className="heading-wrapper1">
          <h2>List of Ventures in Guntur </h2>
          <div className="heading-line1"></div>
          <div className="heading-short-line1"></div>
        
        </div>
        </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="listing-container">
      {/* First Div - Image */}
      <div className="listing-image-container">
        <img 
           src={require('../images/image.png')}  
          alt="LVR Garden"
          className="listing-image" 
        />
      </div>

      {/* Second Div - Details */}
      <div className="listing-details-container">
        {/* 1st Row: Heading */}
        <div className="listing-heading">
          <h1>LVR Garden</h1>
        </div>

        {/* 2nd Row: Location */}
        <div className="listing-location">
          <i className="location-icon"> <img 
           src={require('../images/logos_google-maps.png')}  
          alt="loaction-pin"
          
        /></i>
          <span>Residential Land/ Plot, Gorantla, Guntur</span>
        </div>

        {/* 3rd Row: Price, Area, Plot Type */}
        <div className="listing-info">
          <div className="info-section">
            <i className="rupee-icon">  <img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        />1.98 Cr</i>
            <div>
             
              <br />
              <small><img 
           src={require('../images/rupee.png')}  
          alt="rupee-icon"
          
        /> 4400 / sqft</small>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>450.78 sqft</span>
            <br />
            <small>Plot Area</small>
          </div>
          <div className="vertical-line"></div>
          <div className="info-section">
            <span>Plot / Land</span>
            <br />
            <small>Ready to Move</small>
          </div>
        </div>

        {/* 4th Row: Highlights */}
        <div className="listing-highlights">
          <div className="highlights-title">Highlights:</div>
          <div className="highlight-buttons">
            <button>East Facing</button>
            <button>Overlooking Main Road</button>
            <button>Near to Bus Stand</button>
            <button>Near to School</button>
         
          </div>
        </div>

        {/* 5th Row: Actions */}
        <div className="listing-actions">
          <button className="view-number-btn">View Number</button>
          <button className="contact-btn">
          <img 
           src={require('../images/callicon.png')}  
          alt="call-icon"
          
        /> Contact Us
          </button>
        </div>
      </div>
    </div>
   
    
    
    {/* <button className="view-all-button1">
            View All <FaExternalLinkAlt className="view-all-icon1" />
          </button> */}
    </>
    
  );
};

export default GunturListingPage;
