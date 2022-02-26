import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import AdvisorsMentors from './AdvisorsMentors/AdvisorsMentors';

const AdvisorAndMentors = () => {
    return (
        <div>
           <Navigation></Navigation>

           <AdvisorsMentors></AdvisorsMentors>
           <Footer></Footer>
        </div>
    );
};

export default AdvisorAndMentors;