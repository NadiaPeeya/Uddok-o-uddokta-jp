import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleBlog from './SingleBlog/SingleBlog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
     
    useEffect(() => {
        fetch('https://dry-inlet-45409.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
       <Container className='my-5'>
<Grid container spacing={2}>


   {
       blogs.map(blog =><SingleBlog key={blog._id} blog={blog}></SingleBlog>)
   }
</Grid>
       </Container>
    );
};

export default Blogs;