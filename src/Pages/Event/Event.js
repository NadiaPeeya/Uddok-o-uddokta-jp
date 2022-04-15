import React from 'react';
import Top from '../Home/Top/Top';
import Navigation from './../Shared/Navigation/Navigation';
import AnnualConference2022 from './AnnualConference2022/AnnualConference2022';
import AnnualEventBanner2022 from './AnnualEventBanner2022/AnnualEventBanner2022';



const Event = () => {
    return (
        <>
         <Top></Top>
       <Navigation></Navigation>
       <AnnualEventBanner2022></AnnualEventBanner2022>
       <AnnualConference2022></AnnualConference2022>

     

        </>
      

    );
};

export default Event;