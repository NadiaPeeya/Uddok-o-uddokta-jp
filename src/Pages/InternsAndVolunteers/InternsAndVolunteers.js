import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from './../Shared/Footer/Footer';
import Interns from './Interns/Interns';
import Volunteers from './Volunteers/Volunteers';

const InternsAndVolunteers = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Interns></Interns>
            <Volunteers></Volunteers>
            <Footer></Footer>
        </div>
    );
};

export default InternsAndVolunteers;