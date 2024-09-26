import React from 'react';
import './index.css';

const Testimonial = () => {
  return (
<div className='customer-review'>
<div className="testimonial-container">
      <div className="testimonial-content">

      <div className='testimonial-image'>
      <img 
          src={require('../images/customer.png')} 
          alt="Customer" 
          className="customer-image" 
        />
      </div>
        <div className="testimonial-text">
          <h2>Our Lovely Customer What Say</h2>
          <p>Welcome to our real estate website! Our team of experienced real estate professionals is dedicated to helping you find your dream.</p>
        </div>
      </div>
      <div className="testimonial-quote">
        <blockquote>
          <p>The service provider is very good and friendly, the result given is very very satisfying...</p>
        </blockquote>
      </div>
    </div>
</div>
   
  );
};

export default Testimonial;
