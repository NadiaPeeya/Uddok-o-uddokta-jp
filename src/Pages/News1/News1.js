import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import NewsBanner1 from './NewsBanner1/NewsBanner1';
import NewsAbout1 from './NewsAbout1/NewsAbout1';
import Footer from '../Shared/Footer/Footer';

const News1 = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsBanner1></NewsBanner1>
            <NewsAbout1></NewsAbout1>
            <Footer></Footer>
        </div>
    );
};

export default News1;