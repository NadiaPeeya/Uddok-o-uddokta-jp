import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import MemberPartners from './MemberParteners/MemberPartners';

import PartnerTabs from './MemberParteners/Partners/PartnerTabs/PartnerTabs';

const MembersAndPartners = () => {
    return (
        <div>
            <Navigation></Navigation>
           <MemberPartners></MemberPartners>
           <PartnerTabs></PartnerTabs>
            <Footer></Footer>
        </div>
    );
};

export default MembersAndPartners;