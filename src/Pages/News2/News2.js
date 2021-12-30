import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import NewsAbout2 from './NewsAbout2/NewsAbout2';
import NewsBanner2 from './NewsBanner2/NewsBanner2';

const News2 = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsBanner2></NewsBanner2>
            <NewsAbout2></NewsAbout2>
            <Footer></Footer>
        </div>
    );
};

export default News2;