import React from 'react';
import './App.css';
import ListingPage from './components/ListingPage/ListingPage';
import toast, { Toaster } from 'react-hot-toast';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage/HomePage';
import GunturListPage from './pages/ListingPage/GunturListPage';


function App() {
  return (
    <div className="app-wrapper">
     {/* <HomePage /> */}
      {/* <ListingPage /> */}
      <GunturListPage />
      {/* <SignIn />  */}
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
