import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Top from './../Home/Top/Top';
import BriedProfileUddokta from './BriefProfileUddokta/BriedProfileUddokta';
import Origin2 from './Origin2/Origin2';
import OriginBanner from './OriginBanner/OriginBanner';
import OriginContent from './OriginContent/OriginContent';
import OriginTabs from './OriginTab/OriginTab';
import OurFounder from './OurFounder/OurFounder';


const HistoryAndProfile = () => {
    return (
        <div>
            <Top></Top>
            <Navigation></Navigation>
           <OriginBanner></OriginBanner>
           <OriginContent></OriginContent>
           <Origin2></Origin2>
           <BriedProfileUddokta></BriedProfileUddokta>
      
           <OurFounder></OurFounder>
           <Footer></Footer>
           
        </div>
    );
};

export default HistoryAndProfile;