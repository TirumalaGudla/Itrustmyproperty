import React from 'react';
import Testimonial from './Testimonial';

import Header from '../Header/Header';
// import Searchbox from './Searchbox';
import TopVentures from './TopVentures';
import Footer from '../Footer';
import Blogs from "./Blogs"
import ChooseTopVentures from './chooseTopVentures';
import RecentlyAddedVentures from './RecentlyAddedVentures';
import TopCities from './TopCities';
import Searchbx from './sr';
// import TrendingRealtors from './TrendingRealtors';



const HomePage = () => {
  return (
    <div className="homepage">
       <Header />
   <Searchbx />
         {/* <Searchbox /> */}
         <TopCities />
           < TopVentures />
     {/* < TrendingRealtors /> */}
     <RecentlyAddedVentures />
     <ChooseTopVentures />
     
     <Blogs />
     <Testimonial />
     <Footer/>

    </div>
  );
}

export default HomePage;
