import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import AdvisorsMentors from './AdvisorsMentors/AdvisorsMentors';
import Mentors from './Mentors/Mentors';

const AdvisorAndMentors = () => {
    return (
        <div>
           <Navigation></Navigation>

           <AdvisorsMentors></AdvisorsMentors>
           <Mentors></Mentors>
           <Footer></Footer>
        </div>
    );
};

export default AdvisorAndMentors;