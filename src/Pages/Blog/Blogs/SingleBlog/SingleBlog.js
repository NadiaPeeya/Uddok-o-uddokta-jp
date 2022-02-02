import {  Container } from '@mui/material';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleBlog.css'

const SingleBlog = (props) => {
    const {_id,img, blogName, date, description} = props.blog;
    return (
    

        <Container>
  <Row>
    <Col>
    <div>
    <div className='img-blog'>
    <img width="90%" src={img} alt="" />
    </div>
    <div className='single-blog'>
    <p>{date}</p>
            <h3>{blogName}</h3>
            <p className=''>{description.split('',250)}
            <NavLink to={`/blogItem/${_id}`}>...Read More</NavLink>
            </p>
           
    </div>
    </div>
   
    
       
    </Col>
  </Row>
</Container>
    );
};

export default SingleBlog;