import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const BlogPageEdit = () => {
    const [blogPageEdit, setBlogPageEdit] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/dashboard/editBlog/editBlogPage/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogPageEdit(data));
    }, [])
    return (
        <div>
            <h1>hello world {id}</h1>
           <UpdateBlog blogPageEdit={blogPageEdit}></UpdateBlog>

        </div>
    );
};

export default BlogPageEdit;