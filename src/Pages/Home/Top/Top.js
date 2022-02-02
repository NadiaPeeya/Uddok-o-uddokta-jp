import React from 'react';
import { useState } from 'react';
import './Top.css'
import { Grid } from '@mui/material';
import img from '../../../images/phonecall.png'
import img2 from '../../../images/email.png'
import { Nav,Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import languageImg from '../../../images/language-translation-and-linguistics-icon-vector-14239078.jpeg'
import img3 from '../../../images/phoneblue.png'

const Top = () => {
       
    return (
        <div className="top1">
  <div className="top my-2 container top-uddokta">
 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
    <Grid item xs={2} sm={4} md={4} >
    
    <Container>
  <Row className='my-2'>
    <Col className="call-us">
    <div>
    <img width="35%" src={img3}/>
    </div>
    <div className='call-text my-2'>
 
        <p className='fw-bolder text-secondary'>+818096668105</p>
      
    </div>
    </Col>
    <Col className='mail-to'>
    <div>
    <img width="35%" src={img2}/>
{/* 
    <i class="far fa-envelope"></i> */}
    </div>
    <div className='mail-text my-2'>
        <p className='fw-bolder text-secondary'><span className='email'> 
            </span>contact@uddogouddokta.jp</p>
       {/* <p sx={{}} className='text-white'>info.uujp@gmail.com</p> */}
    </div>
    </Col>
  </Row>
</Container>
    </Grid>
    <Grid item xs={2} sm={4} md={4} >
     <div className="col">
      <h2 className="fw-bolder text-primary my-2">ウッドグ オ ウッドクタ日本</h2>
      <h3 className='main-name-english fw-bolder mt-2'>UDDOG O UDDOKTA JAPAN</h3>
     </div>
 
    </Grid>
    <Grid item xs={2} sm={4} md={4} >
        
        <div className="row end-part">
            
        <div className="col-md-6 change-part">
        <img width="10%" src={languageImg} alt="" />
        <Button sx={{borderRight: '1px solid #0d6efd'}} size="small"> <span className='text-secondary'>EN</span> </Button>
        <Button size="small"> <Nav.Link className="text-secondary" as={HashLink} to="/japanese">日本</Nav.Link></Button>
     </div>
     <div className="col-md-6">
  
     <Nav.Link className="" as={HashLink} to="/home#donation2"><button data-aos="zoom-out-down" className='donate'>
     <span>Donate Now</span> </button></Nav.Link>
     
     </div>
   

        </div>
   
 
    </Grid>

</Grid> 







     </div>
        </div>
   
    );
};

export default Top;