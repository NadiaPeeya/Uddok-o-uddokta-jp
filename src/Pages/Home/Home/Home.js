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
import SomeCauses from './../SomeCauses/SomeCauses';
import OurMission from './OurMission/OurMission';
import AutoBannerImg from './AutoBannerImg/AutoBannerImg';
import Donation from './../Donation/Donation';
import Services from '../Services/Services';
import OurTeam from '../OurTeam/OurTeam';








const Home = () => {
    return (
        <div className="mt-0">
       <Top></Top>
        <Navigation></Navigation>
        <AutoBannerImg></AutoBannerImg>
       <AboutUs></AboutUs>
       <SomeCauses></SomeCauses>
       <WhatHaveCount></WhatHaveCount>
       <OurMission></OurMission>
       <OurTeam></OurTeam>
       <Donation></Donation>
       <UddoktaService></UddoktaService>
    
       <AboutBanner></AboutBanner>
      
       <Footer></Footer>
   

        </div>
    );
};

export default Home;