import React from 'react';
import {  Container } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const EditSingleBlog = (props) => {
    const {_id,img, date, blogName, description} = props.editBlog;
    return (
     
  <Container className='my-5 py-5'>
  <Row>
    <Col>
    <div>
    <div className='img-blog'>
    <img width="100%" src={img} alt="" />
    </div>
    <div className='single-blog'>
    <p>{date}</p>
            <h3>{blogName}</h3>
            <p className=''>{description}
            <NavLink to={`editBlogPage/${_id}`}><button>Edit</button></NavLink>             
            </p>
           
    </div>
    </div>
      <div>
  
      </div>
     
    
       
    </Col>
  </Row>
</Container>
    );
};

export default EditSingleBlog;