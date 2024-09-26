import React, { useState } from 'react';
import './Header.css';
import { HiOutlineHandRaised } from "react-icons/hi2";

function Header() {
  const [isSigninPopupOpen, setSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isNavLinksActive, setNavLinksActive] = useState(false);
  const [isAdditionalFieldsVisible, setAdditionalFieldsVisible] = useState(false);

  const toggleNavLinks = () => {
    setNavLinksActive(!isNavLinksActive);
  };

  const openSigninPopup = () => {
    setSigninPopupOpen(true);
  };

  const openSignupPopup = () => {
    setSignupPopupOpen(true);
  };

  const closePopups = (event) => {
    if (event.target.className.includes('popup')) {
      setSigninPopupOpen(false);
      setSignupPopupOpen(false);
    }
  };

  const showAdditionalFields = () => {
    setAdditionalFieldsVisible(true);
  };

  return (
    <div onClick={closePopups}>
      <nav>
        <div className="logo">
          <img src="images/mlogo.png" alt="Logo" />
        </div>
        <div className="hamburger" id="hamburger" onClick={toggleNavLinks}>&#9776;</div>
        <ul className={`nav-links ${isNavLinksActive ? 'active' : ''}`} id="navLinks">
          <li><button id="signinBtn" onClick={openSigninPopup}>Sign In</button></li>
          <li><button id="signupBtn" onClick={openSignupPopup}>Sign Up</button></li>
          <li><button id="registerBtn">Raise a Request <HiOutlineHandRaised style={{marginBottom:"-4px", fontSize:"18px"}}/>
          </button></li>
        </ul>
      </nav>

      {isSigninPopupOpen && (
        <div id="signinPopup" className="popup active">
          <div className="popup-content">
            <form id="signinForm">
              <h2>Login</h2>
              <div>
                <label htmlFor="signin-username">Username</label>
                <input
                  type="text"
                  id="signin-username"
                  placeholder="Email/Phone No"
                  required
                />
              </div>
              <div>
                <label htmlFor="signin-password">Password</label>
                <input
                  type="password"
                  id="signin-password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
              </div>
              <button type="submit" className="small-button">Login</button>
              <p>New User for itrustmyproperty? <a href="#">Signup</a></p>
            </form>
          </div>
        </div>
      )}

      {isSignupPopupOpen && (
        <div id="signupPopup" className="popup active">
          <div className="popup-content">
            {!isAdditionalFieldsVisible ? (
              <form id="signupForm">
                <h2>Sign Up</h2>
                <div className="form-group">
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required />
                  </div>
                </div>
                <div className="form-group1">
                  <div className="code">
                    <label htmlFor="countryCode">Country Code</label>
                    <select id="countryCode" required className="small-input">
                      <option value="" disabled selected></option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+91">+91 (India)</option>
                    </select>
                  </div>
                  <div className="mobilecss">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" required className="large-input" />
                  </div>
                </div>
                <div className="otp-container">
                  <label>OTP:</label>
                  <div className="otp-inputs">
                    <input type="text" id="otp1" maxLength="1" required />
                    <input type="text" id="otp2" maxLength="1" required />
                    <input type="text" id="otp3" maxLength="1" required />
                    <input type="text" id="otp4" maxLength="1" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="confirmEmail">Re-enter Email</label>
                  <input type="email" id="confirmEmail" required />
                </div>
                <button
                  type="button"
                  className="small-button"
                  onClick={showAdditionalFields}
                >
                  Next
                </button>
              </form>
            ) : (
              <form id="additionalFields">
                <h2>Sign Up</h2>
                <div className="mrb">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </div>
                <div className="mrb">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input type="password" id="confirmPassword" required />
                </div>
                <div className="mrb">
                  <label htmlFor="city">Select Your Current City:</label>
                  <select id="city" required>
                    <option value="" disabled selected></option>
                    <option>Hyderabad</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Pune</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                  </select>
                </div>
                <div className="mrb">
                  <label htmlFor="profession">Profession:</label>
                  <input type="text" id="profession" required />
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I accept all Terms & Conditions</label>
                </div>
                <div className="small-button1">
                  <button type="submit" className="small-button">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
