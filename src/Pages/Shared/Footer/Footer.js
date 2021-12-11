import React from 'react';
import './Footer.css'
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'react-bootstrap';
// import { CopyrightOutlined, Place, CopyrightSharp, EmailOutlined, FacebookOutlined, PhoneAndroidOutlined, Twitter } from '@mui/icons-material';
// import {  Grid, Typography } from '@mui/material';
import logo from '../../../images/logo.png'


const Footer = () => {
    // const style = {
    //     backgroundColor: 'rgb(35, 34, 34)',
    //     color: '#D8D2BE',
    //     textAlign: "center",
    //     paddingTop: "40px",
    //     paddingBottom: "40px",
    //     position: "static",
    //     left: "0",
    //     bottom: "0",

    //     width: "100%",
    //     marginTop: '350px'
    // }
    return (
        <div data-aos="zoom-in-up" className="footer-style">
           
           <Container className='mt-5 pt-5'>
  <Row>
    <Col xs>
        <div className="footer-styling">
           
            <h2 className="fw-bolder text-color-change">Quick Link</h2>
            {/* <div className=''>
                <img src="" alt="" />
            </div> */}
            <p className="fw-bold text-color-change"><Nav.Link className="text-color-change" as={HashLink} to="/home#aboutUs"> <span className=''>ABOUT US</span></Nav.Link></p>
            <p className="fw-bold text-color-change"></p>
            <p className="fw-bold text-color-change"><Nav.Link className="text-color-change" as={HashLink} to="/home#someCauses"> <span className=''>CAUSES</span></Nav.Link></p>
            <p className="fw-bold text-color-change"> <Nav.Link className="text-color-change" as={HashLink} to="/home#mission"><span className=''>MiSSION</span></Nav.Link></p>
            
            <p className="fw-bold text-color-change"><Nav.Link className="text-color-change" as={HashLink} to="/home#joinUs"> <span className='text-color-change'>JOIN US</span></Nav.Link></p>
            <p className="fw-bold text-color-change"><Nav.Link className="text-color-change" as={HashLink} to="/home#joinUs"> <span className='text-color-change'>Contact</span></Nav.Link></p>
        </div>
    </Col>
    
    <Col xs={{ order: 12 }} className="footer-styling">
        <div className=''><img width="30%" src={logo} alt="" /></div>
        {/* <h2 className="fw-bolder text-color-change"> Uddok O Uddokta </h2> */}
        <p className="fw-bold text-color-change">Shinjuku Park Tower N30F,</p> 
        <p className="fw-bold text-color-change">
        3-7-1 Nishishinjuku,Shinjuku-ku,
        </p >
        
<p className="fw-bold text-color-change">Tokyo 163-1030, Japan</p>

        <p className="fw-bold text-color-change">info@uddogouddokta.jp</p>
        <p className="fw-bold text-color-change">+81-80-9666-8105</p>
    </Col>
    <Col xs={{ order: 1 }}>
        <h2 className="fw-bolder text-color-change">Socials</h2>
        <p className="fw-bold facebook fs-2"><i class="fab fa-facebook"></i> </p>
        <p className="fw-bold text-color-change fs-2"><i class="fab fa-instagram-square"></i></p>
        <p className="fw-bold text-color-change fs-2"><i class="fab fa-linkedin"></i></p>
        <p className="fw-bold text-color-change fs-2"><i class="fab fa-twitter-square"></i></p>
    </Col>
  </Row>

</Container>
<div className="mt-5">
<p className="text-color-change footer-bottom">Copyright <img width="1%" src="https://o.remove.bg/downloads/d1ae6f8a-5594-4bc7-86f0-45961b852fa7/001_2688246-5b916f32c9e77c0025c0cc9c-removebg-preview.png" alt="" /> 2021. All Rights Reserved</p>
</div>
     
        </div>
    );
};

export default Footer;