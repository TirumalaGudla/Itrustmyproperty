import React, { useState, useEffect } from 'react';
import './Header.css';
import { HiOutlineHandRaised } from "react-icons/hi2";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDAwfPttzrU9hve3fJ7QReSjTakbzoabAs",
    authDomain: "signin-c9f94.firebaseapp.com",
    projectId: "signin-c9f94",
    storageBucket: "signin-c9f94.appspot.com",
    messagingSenderId: "431026729073",
    appId: "1:431026729073:web:38a786df61fae1c95d6bd0"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account", // Forces showing the account selector
      });
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };


function Header() {
  const [isSigninPopupOpen, setSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isNavLinksActive, setNavLinksActive] = useState(false);
  const [isAdditionalFieldsVisible, setAdditionalFieldsVisible] = useState(false);
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [timer, setTimer] = useState(30); 
  

  useEffect(() => {
    let countdown;
    if (showOTPSection && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [showOTPSection, timer]);

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

  const handleSendOTP = () => {
    setShowOTPSection(true);
    setTimer(30); 
  };

  const handleResendOTP = () => {
    setTimer(30);
  };

  const showAdditionalFields = () => {
    setAdditionalFieldsVisible(true);
  };
  const [showModal, setShowModal] = useState(false);


  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setSigninPopupOpen(false); // Close the Sign In popup
    setSignupPopupOpen(false); // Close the Sign Up popup (if needed)
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
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
          <li><button id="registerBtn">Raise a Request <HiOutlineHandRaised style={{ marginBottom: "-4px", fontSize: "18px" }} /></button></li>
        </ul>
      </nav>

      {isSigninPopupOpen && (
        <div id="signinPopup" className="popup active">
          <div className="popup-content">
            <form id="signinForm">
              <h2>Login</h2>
                <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-btn" onClick={handleClose}>×</button>

        <h2 className="modal-heading">Log In</h2>

        <label htmlFor="email" className="input-label">E-Mail</label>
        <input type="email" id="email" className="input-field" />

        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" className="input-field" />

        <div className="divider">or</div>
        <h3 className="sub-heading">Sign In with</h3>

        {/* Google Image with onClick */}
        <div className="google-login" onClick={handleGoogleSignIn}>
          <img src="../images/google.png" alt="Google" className="clickable-image" />
        </div>

        <label className="remember-me">
          <input type="checkbox" /> Remember me
        </label>

        {/* Centered Login Button */}
        <div className="login-btn-container">
          <button className="login-btn">Log in</button>
        </div>
      </div>
    </div>
  );
            </form>
          </div>
        </div>
      )}

      {isSignupPopupOpen && (
        <div id="signupPopup" className="popup active">
          <div className="popup-content">
            {!isAdditionalFieldsVisible ? (
              <form id="signupForm">
                <h2>Registration for Buyers</h2>

                <div>
                  <label htmlFor="fullName">Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
             
                <div className="form-group2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <label htmlFor="mobile">Mobile</label>
  <div style={{ display: 'flex', width: '100%' }}>
    <select id="countryCode" required className="small-input" style={{ flex: '1', marginRight: '10px', height: '40px', lineHeight: '40px' }}>
      <option value="" disabled selected>+91</option>
      <option value="+1">+1 (USA)</option>
      <option value="+91">+91 (India)</option>
    </select>
    <input
      type="text"
      id="mobile"
      placeholder="Enter your number"
      required
      className="large-input"
      style={{ flex: '2', height: '40px', lineHeight: '40px', textAlign: 'left' }} // Left-aligning text
    />
  </div>
</div>


{showOTPSection && (
  <>
    <div className="otp-container" style={{ textAlign: 'center' }}>
      <label>Enter OTP:</label>
      <div className="otp-inputs" style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="otp-line" style={{ borderBottom: '1px solid black', width: '30px', margin: '0 5px' }}></span>
        <span className="otp-line" style={{ borderBottom: '1px solid black', width: '30px', margin: '0 5px' }}></span>
        <span className="otp-line" style={{ borderBottom: '1px solid black', width: '30px', margin: '0 5px' }}></span>
        <span className="otp-line" style={{ borderBottom: '1px solid black', width: '30px', margin: '0 5px' }}></span>
      </div>
    </div>

    <p className="otp-info" style={{ textAlign: 'center', fontSize:'12px' }}>
      {timer > 0 ? (
        <>Don't receive the code? <span>Resend in {timer} seconds</span></>
      ) : (
        <button type="button" onClick={handleResendOTP} className="resend-otp-button" style={{  backgroundColor:"#3f5e2d", color:"white", padding:'10px', borderRadius:'5px'  }}>Resend OTP</button>
      )}
    </p>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
      <button type="button" className="small-button" onClick={showAdditionalFields}>Next</button>
    </div>
  </>
)}


{!showOTPSection && (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <button type="button" className="small-button" onClick={handleSendOTP}>Send OTP</button>
  </div>
)}

              </form>
            ) : (
              <form id="additionalFields">
                <h2>Registration for Buyers</h2>

                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your Email Id" required />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="Enter your City" required />
                </div>

                <div className="mrb">
                  <label htmlFor="dob">DOB</label>
                  <input
                    type="text"
                    id="dob"
                    placeholder="mm/dd/yyyy"
                    required
                  />
                </div>

                <div className="mrb">
                  <select id="howDidYouKnow" required>
                    <option value="" disabled selected>How did you know about us?</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friends">Friends</option>
                    <option value="Advertisements">Advertisements</option>
                    <option value="Others">Others</option>
                  </select>
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