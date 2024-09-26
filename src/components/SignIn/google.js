import React, { useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

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

function App() {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);


const SignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", 
    });
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err);
  }
};


  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <center>
        {user ? (
          <div>
            <h1>Welcome To iTrustmyproperty.com</h1>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button className='btn' onClick={SignInWithGoogle}>Sign In with Google</button>
        )}
      </center>
    </div>
  );
}

export default App;

