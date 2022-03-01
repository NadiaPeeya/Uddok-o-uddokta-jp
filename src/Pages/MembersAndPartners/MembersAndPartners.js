import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import MemberPartners from './MemberParteners/MemberPartners';
import Partners from './MemberParteners/Partners/Partners';



const MembersAndPartners = () => {
    return (
        <div>
            <Navigation></Navigation>
           <MemberPartners></MemberPartners>
     <Partners
     ></Partners>


            <Footer></Footer>
        </div>
    );
};

export default MembersAndPartners;