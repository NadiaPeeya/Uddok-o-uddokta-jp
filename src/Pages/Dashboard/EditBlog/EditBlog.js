import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Blogs from '../../Blog/Blogs/Blogs';
import EditSingleBlog from './EditSingleBlog/EditSingleBlog';



const EditBlog = () => {
   const [editBlogs, setEditBlogs] = useState([])
   useEffect(()=>{
      fetch('http://localhost:5000/dashboard/editBlog')
      .then(res => res.json())
      .then(data => setEditBlogs(data));
   },[])
    return (
      <div>
         
          {
              editBlogs.map(editBlog =><EditSingleBlog editBlog={editBlog}></EditSingleBlog>)
          }
      </div>
    );
};

export default EditBlog;