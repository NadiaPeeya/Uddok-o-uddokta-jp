import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import NewsBanner1 from './NewsBanner1/NewsBanner1';
import NewsAbout1 from './NewsAbout1/NewsAbout1';

const News1 = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsBanner1></NewsBanner1>
            <NewsAbout1></NewsAbout1>
        </div>
    );
};

export default News1;