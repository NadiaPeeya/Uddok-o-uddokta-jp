import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Top from './../../Home/Top/Top';

const ViewConferenceForm = () => {
    return (
        <div>
            <Top></Top>
            <Navigation></Navigation>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIxnnQWcUdM9pG4bHrJ1mqGSebHScl5OP50IiPWdkjWnDkXw/viewform" className='donor-form' width="100%" height="2454" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
    );
};

export default ViewConferenceForm;