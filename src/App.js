// import React from 'react';
// import './App.css';
// import ListingPage from './components/ListingPage/ListingPage';
// import SignIn from './components/SignIn';
// import HomePage from './components/HomePage/HomePage';

// function App() {
//   return (
//     <div className="app-wrapper">
//       <HomePage />

//     < ListingPage />
// <SignIn />


//     </div>
//   );
// }


// export default App;


import React from 'react';
import './App.css';
// import ListingPage from './components/ListingPage/ListingPage';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="app-wrapper">
     <HomePage />
      {/* <ListingPage /> */}
      <SignIn /> 
    </div>
  );
}

export default App;
