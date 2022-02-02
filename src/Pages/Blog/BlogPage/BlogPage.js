import React from 'react';
import {  Container } from '@mui/material';
import { Row, Col } from 'react-bootstrap';

const BlogPage = (props) => {
    const {img, date, blogName, description} = props.singleBlog;
    return (
     
              <Container className='my-5 py-5'>
  <Row>
    <Col>
    <div>
    <div className='img-blog'>
    <img src={img} alt="" />
    </div>
    <div className='single-blog'>
    <p>{date}</p>
            <h3>{blogName}</h3>
            <p className=''>{description}
            
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

export default BlogPage;