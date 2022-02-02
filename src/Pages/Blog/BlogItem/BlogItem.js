
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Top from '../../Home/Top/Top';
import Navigation from '../../Shared/Navigation/Navigation';
import BlogBanner from '../BlogBanner/BlogBanner';

import BlogPage from '../BlogPage/BlogPage';


const BlogItem = () => {
    const [singleBlog, setSingleBlog] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        const url = `https://dry-inlet-45409.herokuapp.com/blogs/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleBlog(data));
    }, [])
    return (
        <div>
          <Top></Top>
          <Navigation></Navigation>
          <BlogBanner></BlogBanner>
            
        <BlogPage singleBlog={singleBlog} key={singleBlog._id}></BlogPage>
        </div>
    );
};

export default BlogItem;