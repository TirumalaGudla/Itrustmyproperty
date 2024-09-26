import React, { useState, useEffect } from 'react';
import './index.css'; // Importing CSS for styling
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

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds delay for demonstration

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleClose = () => {
    setShowModal(false); // Close the modal when X is clicked
  };

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

  if (!showModal) return null; // Don't render modal if it's not open

  return (
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
};

export default SignIn;
