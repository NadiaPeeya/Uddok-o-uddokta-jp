import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

import Impacts from '../../Impacts/Impacts';
import Footer from '../../Shared/Footer/Footer';
import { Nav } from '../../Shared/Navbar/NavbarStyles';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import JoinUs from '../JoinUs/JoinUs';
import AboutBanner from './../AboutBanner/AboutBanner';
import Top from '../Top/Top';
import UddoktaService from '../UddoktaService/UddoktaService';
import Achievements from './Achievements/Achievements';
import WhatHaveCount from './WhatHaveCount/WhatHaveCount';
import SomeCauses from '../LatestNews/LatestNews';
import OurMission from './OurMission/OurMission';
import AutoBannerImg from './AutoBannerImg/AutoBannerImg';
import Donation from './../Donation/Donation';
import Services from '../Services/Services';
import OurTeam from '../OurTeam/OurTeam';
import OurCauses from './OurCauses/OurCauses';
import BannerImg from '../BannerImg/BannerImg';
import WhatWeAre from '../WhatWeAre/WhatWeAre';
import LatestNews from '../LatestNews/LatestNews';
import NewsLetter from './NewsLetter/NewsLetter';
import Initiatives from './Initiatives/Initiatives.js';
import Donation2 from '../Donation2/Donation2';
import JoinUs2 from '../JoinUs2/JoinUs2';
import TopSection from '../../TopSection/TopSection';
import AreYouReady from '../../AreYouReady/AreYouReady';
import NewsAndEvents from '../NewsAndEvents/NewsAndEvents';
import Payment from '../Payment/Payment';









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