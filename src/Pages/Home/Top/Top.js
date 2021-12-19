import React from 'react';
import { useState } from 'react';
import './Top.css'
import { Grid } from '@mui/material';
import img from '../../../images/phonecall.png'
import img2 from '../../../images/logo.png'
import { Nav,Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import img3 from '../../../images/telephone.png'



const Top = () => {
       
    return (
     <div className="top mt-3 container top-uddokta">
 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
    <Grid item xs={2} sm={4} md={4} >
    
    <Container>
  <Row className=''>
    <Col className="call-us">
    <div>
    <img width="55%" src={img3}/>
    </div>
    <div className='call-text mt-4'>
        <h6 className='fw-bolder text-black-50'>+818096668105</h6>
      
    </div>
    </Col>
    <Col className='mail-to'>
    <div>
    <img width="95%" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-mail-online-education-icongeek26-flat-icongeek26.png"/>
{/* 
    <i class="far fa-envelope"></i> */}
    </div>
    <div className='mail-text mt-4'>
        <h6 className='text-black-50 fw-bolder'>info.uujp@gmail.com</h6>
       {/* <p sx={{}} className='text-black-50'>info.uujp@gmail.com</p> */}
    </div>
    </Col>
  </Row>
</Container>
    </Grid>
    <Grid item xs={2} sm={4} md={4} >
     <div className="col">
      <h2 className="fw-bolder text-primary mt-2">ウッドグ オ ウッドクタ日本</h2>
      <p className='main-name-english fw-bolder'>UDDOG O UDDOKTA JAPAN</p>
     </div>
 
    </Grid>
    <Grid item xs={2} sm={4} md={4} >
        <div className="row end-part">
        <div className="col-md-6 change-part">
        <Button sx={{borderRight: '1px solid brown'}} size="small"> <span className='text-black-50'>EN</span> </Button>
        <Button size="small"> <Nav.Link className="text-black-50" as={HashLink} to="/japanese">日本</Nav.Link></Button>
     </div>
     <div className="col-md-6">
  
     <button data-aos="zoom-out-down" className='donate'>
     <span>Donate Now</span>
      </button>
     </div>
   

        </div>
   
 
    </Grid>

</Grid> 







     </div>
    );
};

export default Top;