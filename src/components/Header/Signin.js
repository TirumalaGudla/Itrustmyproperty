import React, { useState } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Keep signed in:', keepSignedIn);
  };

  return (
    <form id="signinForm" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="signin-username">Username</label>
        <input
          type="text"
          id="signin-username"
          placeholder="Email/Phone No"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="signin-password">Password</label>
        <input
          type="password"
          id="signin-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="keepSignedIn"
          checked={keepSignedIn}
          onChange={() => setKeepSignedIn(!keepSignedIn)}
        />
        <label htmlFor="keepSignedIn">Keep me signed in</label>
      </div>
      <button type="submit" className="small-button">Login</button>
    </form>
  );
}

export default Signin;
