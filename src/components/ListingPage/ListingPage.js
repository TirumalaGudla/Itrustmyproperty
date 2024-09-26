import React from 'react';
import Header from '../Header/Header';

import Footer from '../Footer';
import GunturListingPage from './GunturListingPage';
import Searchbox from '../HomePage/Searchbox';

const ListingPage = () => {
  return (
    <div >
       <Header />
       <Searchbox />
     <GunturListingPage/>
     <Footer/>

    </div>
  );
}

export default ListingPage;
