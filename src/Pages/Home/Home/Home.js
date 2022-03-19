import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutBanner from './../AboutBanner/AboutBanner';
import Top from '../Top/Top';
import WhatHaveCount from './WhatHaveCount/WhatHaveCount';
import OurMission from './OurMission/OurMission';
import AutoBannerImg from './AutoBannerImg/AutoBannerImg';
import OurCauses from './OurCauses/OurCauses';
import WhatWeAre from '../WhatWeAre/WhatWeAre';
import NewsLetter from './NewsLetter/NewsLetter';
import Initiatives from './Initiatives/Initiatives.js';
import Donation2 from '../Donation2/Donation2';
import JoinUs2 from '../JoinUs2/JoinUs2';
import NewsAndEvents from '../NewsAndEvents/NewsAndEvents';
import Donation from './../Donation/Donation';


const Home = () => {
    return (
        <div className="mt-0">
       <Top></Top>
        <Navigation></Navigation>
        <AutoBannerImg></AutoBannerImg>
        {/* <TopSection></TopSection> */}
       <WhatWeAre></WhatWeAre>
    
       {/* <AreYouReady></AreYouReady> */}
       <OurCauses></OurCauses> 
       
    
       <OurMission></OurMission> 
<Donation2></Donation2>
       <WhatHaveCount></WhatHaveCount>
        <AboutBanner></AboutBanner>
       <JoinUs2></JoinUs2> 
       <Initiatives></Initiatives> 
     
       <NewsAndEvents></NewsAndEvents>
      <NewsLetter></NewsLetter>
    
       <Footer></Footer>
   

        </div>
    );
};

export default Home;