import React from 'react';
import Top from '../Home/Top/Top';
import Navigation from './../Shared/Navigation/Navigation';
import AnnualConference2022 from './AnnualConference2022/AnnualConference2022';
import AnnualEventBanner2022 from './AnnualEventBanner2022/AnnualEventBanner2022';
import ClosingSession from './ClosingSession/ClosingSession';
import ConferenceDetail from './ConferenceDetail/ConferenceDetail';
import OpeningSession from './OpeningSession/OpeningSession';
import OrganizingCommittee from './OrganizingCommity/OrganizingCommittee/OrganizingCommittee';
import OrganizingCommity from './OrganizingCommity/OrganizingCommity';
import PlannarySession1 from './PlannarySession1/PlannarySession1';
import PlenarySession2 from './PlenarySession2/PlenarySession2';
import PlenarySession3 from './PlenarySession3/PlenarySession3';
import PlenarySession4 from './PlenarySession4/PlenarySession4';
import PlenarySession5 from './PlenarySession5/PlenarySession5';
import ProgramDetails from './ProgramDetails/ProgramDetails';
import EventStarting from './EventStarting/EventStarting';



const Event = () => {
    return (
        <>
         <Top></Top>
       <Navigation></Navigation>
       <EventStarting></EventStarting>
    
       {/* <ProgramDetails></ProgramDetails> */}
       <ConferenceDetail></ConferenceDetail>
       <OpeningSession></OpeningSession>
       <PlannarySession1></PlannarySession1>
       <PlenarySession2></PlenarySession2>
       <PlenarySession3></PlenarySession3>
       <PlenarySession4></PlenarySession4>
       <PlenarySession5></PlenarySession5>
       <ClosingSession></ClosingSession>
       <OrganizingCommity></OrganizingCommity>


       {/* <AnnualConference2022></AnnualConference2022> */}

     

        </>
      

    );
};

export default Event;