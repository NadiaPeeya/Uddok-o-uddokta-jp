import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

import Impacts from '../../Impacts/Impacts';
import Footer from '../../Shared/Footer/Footer';
import { Nav } from '../../Shared/Navbar/NavbarStyles';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
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








const Home = () => {
    return (
        <div className="mt-0">
       <Top></Top>
        <Navigation></Navigation>
        <AutoBannerImg></AutoBannerImg>
       <WhatWeAre></WhatWeAre>
       <OurCauses></OurCauses>     
       <OurMission></OurMission>  
       <Donation></Donation> 
       <WhatHaveCount></WhatHaveCount>
       <AboutBanner></AboutBanner>
       <LatestNews></LatestNews> 
      
      
      <NewsLetter></NewsLetter>
       <Footer></Footer>
   

        </div>
    );
};

export default Home;