import React from 'react';
import './Footer.css'
import { Nav, Button, Card } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'react-bootstrap';
// import { CopyrightOutlined, Place, CopyrightSharp, EmailOutlined, FacebookOutlined, PhoneAndroidOutlined, Twitter } from '@mui/icons-material';
// import {  Grid, Typography } from '@mui/material';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';


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
        <div  className="footer-style">
           
           <Container className='mt-5 pt-5 footer-container'>
  <Row>
    <Col xs>
        <div className="footer-styling">
           
            <h3 className="fw-bolder text-white">Quick Link</h3>
            {/* <div className=''>
                <img src="" alt="" />
            </div> */}
            <p className=""><Nav.Link className="text-color-change hover-color" as={HashLink} to="/home#aboutUs"> <span className='text-color-change'>ABOUT US</span></Nav.Link></p>

            <p className=""><Nav.Link className="text-color-change hover-color" as={HashLink} to="/home#specialCauses"> <span className='text-color-change'>SOCIAL CAUSES</span></Nav.Link></p>

            <p className=""> <Nav.Link className="text-color-change hover-color" as={HashLink} to="/home#OurMission"><span className='text-color-change'>SERVICES</span></Nav.Link></p>
            
            <p className=""><Nav.Link className="text-color-change hover-color" as={HashLink} to="/home#joinUs"> <span className='text-color-change'>JOIN US</span></Nav.Link></p>

            <p className=" text-color-change"><Nav.Link className="text-color-change  hover-color" as={HashLink} to="/home#LatestNews"> <span className='text-color-change'>NEWS & EVENTS</span></Nav.Link></p>
        </div>
    </Col>
    
    <Col xs={{ order: 12 }} className="footer-styling">
        <div className='mb-4'> 
        <h3 className='text-white fw-bolder '>ウッドグ オ ウッドクタ日本

</h3> 
<h5 className='text-white fw-bolder'>UDDOG O UDDOKTA JAPAN</h5> 
</div>
        {/* <h2 className="fw-bolder text-color-change"> Uddok O Uddokta </h2> */}
        <p className="fw-bold text-color-change"> <span className='fw-bolder'>Adress:</span> Level 15, Fukuoka Tenjin Fukoku Seimei Building , 1-9-17 Tenjin Chuo-ku, Fukuoka, <br /> Japan 810-0001 </p>

        <p className="fw-bold text-color-change">  <span className='fw-bolder'>Email:</span> contact@uddogouddokta.jp
</p>
        <p className="fw-bold text-color-change"> <span className='fw-bolder'>Phone:</span> +81-80-9666-8105</p>
    </Col>
    <Col xs={{ order: 1 }}>
        <h3 className="fw-bolder text-white">How You Can Join</h3>
        {/* <p className="fw-bold fs-3"><Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/uddogouddoktajapan/"><i class="fab fa-facebook text-color-change"></i></Card.Link></p> */}
        {/* <Card.Link target="_blank" href="https://www.facebook.com/samiradcc"><i class="fab fa-facebook"></i></Card.Link> */}

        <Nav.Link className="" as={HashLink} to="/DonorForm"><span className='footer-nav'>As a donor</span></Nav.Link>



        {/* <p className="fw-bold fs-4"><Card.Link target="_blank" className='link-color-change' href="https://www.linkedin.com/company/uujapan
"><i class="fab fa-linkedin text-color-change"></i></Card.Link>
</p> */} 
        {/* <Card.Link target="_blank" href="https://www.facebook.com/samiradcc"><i class="fab fa-linkedin"></i></Card.Link> */}

        <Nav.Link className="" as={HashLink} to="/InvestorForm"><span className='footer-nav'>As a investor</span></Nav.Link>

        {/* <p className="fw-bold fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.youtube.com/channel/UCiwNJcJlDcDJg4I8XKz0XTQ"><i class="fab fa-youtube text-color-change"></i></Card.Link></p> */}

        {/* <Card.Link target="_blank" href="https://www.facebook.com/samiradcc"><i class="fab fa-youtube"></i></Card.Link> */}
        
        <Nav.Link className="" as={HashLink} to="/MentorForm"><span className='footer-nav'>As a Mentor</span></Nav.Link>
            
              <Nav.Link className="" as={HashLink} to="/MemberForm"><span className='footer-nav'>As a Member</span></Nav.Link>
{/* 
        <p className="fw-bold fs-4"> <Card.Link className='link-color-change' target="_blank" href="https://www.twitter.com/OUddog/"><i class="fab fa-twitter-square text-color-change"></i></Card.Link></p> */}
        {/* <Card.Link target="_blank" href="https://www.facebook.com/samiradcc"><i class="fab fa-twitter-square"></i></Card.Link> */}

        {/* <p className="fw-bold  fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.instagram.com/uu_japan_official/?utm_medium=copy_link"

><i class="fab fa-instagram-square text-color-change"></i></Card.Link></p> */}
         
        {/* <Card.Link target="_blank" href="https://www.facebook.com/samiradcc"><i class="fab fa-instagram-square"></i></Card.Link> */}
    
    </Col>
  </Row>

</Container>
<div className="m-3 row">
    <div className='col-md-6'>
    <p className="text-color-change footer-bottom"><img width="1%" src="https://o.remove.bg/downloads/d1ae6f8a-5594-4bc7-86f0-45961b852fa7/001_2688246-5b916f32c9e77c0025c0cc9c-removebg-preview.png" alt="" />Copyright © Uddog o Uddokta Japan Association, 2022. All Rights Reserved.
</p>
    </div>


<div className='col-md-3 footer-socials'>
      <p className="fw-bold fs-3"><Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/uddogouddoktajapan/"><i class="fab fa-facebook footer-facebook text-color-change"></i></Card.Link></p>
         <p className="fw-bold fs-4"><Card.Link target="_blank" className='link-color-change' href="https://www.linkedin.com/company/uujapan
"><i class="fab fa-linkedin footer-linkdin text-color-change"></i></Card.Link>
</p>
<p className="fw-bold fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.youtube.com/channel/UCiwNJcJlDcDJg4I8XKz0XTQ"><i class="fab fa-youtube footer-youtube text-color-change"></i></Card.Link></p>
<p className="fw-bold fs-4"> <Card.Link className='link-color-change' target="_blank" href="https://www.twitter.com/OUddog/"><i class="fab fa-twitter-square footer-twitter text-color-change"></i></Card.Link></p> 
  <p className="fw-bold  fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.instagram.com/uu_japan_official/?utm_medium=copy_link"

><i class="fab fa-instagram-square footer-instagram text-color-change"></i></Card.Link></p> 

</div>
</div>
     
        </div>
    );
};

export default Footer;