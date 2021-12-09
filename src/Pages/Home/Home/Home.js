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
import Slider from '../Components/Slider';
import Top from '../Top/Top';
import UddoktaService from '../UddoktaService/UddoktaService';
import Achievements from './Achievements/Achievements';
import WhatHaveCount from './WhatHaveCount/WhatHaveCount';
import SomeCauses from './../SomeCauses/SomeCauses';






const Home = () => {
    return (
        <div className="mt-0">
       <Top></Top>
        <Navigation></Navigation>
       <Banner></Banner>
       <WhatHaveCount></WhatHaveCount>
       <AboutUs></AboutUs>
       <SomeCauses></SomeCauses>
       <UddoktaService></UddoktaService>
       <Achievements></Achievements>
       <Impacts></Impacts>
       <AboutBanner></AboutBanner>
      
       <Footer></Footer>
   

        </div>
    );
};

export default Home;