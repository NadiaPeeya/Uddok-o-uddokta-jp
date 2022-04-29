import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Iframe from 'react-iframe'
import Top from './../../Home/Top/Top';
import './ViewConferenceForm.css'

const ViewConferenceForm = () => {
    return (
        <div>
            <Top></Top>
            <Navigation></Navigation>
           <div className='conference-form'>
           <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeIxnnQWcUdM9pG4bHrJ1mqGSebHScl5OP50IiPWdkjWnDkXw/viewform?embedded=true"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
           </div>
          
        </div>
    );
};

export default ViewConferenceForm;