import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Top from './../Home/Top/Top';
import BlogBanner from './BlogBanner/BlogBanner';
import Blogs from './Blogs/Blogs';

const Blog = () => {
    return (
        <div>   
            <Top></Top>
            <Navigation></Navigation>
            <BlogBanner></BlogBanner>
            <Blogs></Blogs>
        
        </div>
    );
};

export default Blog;