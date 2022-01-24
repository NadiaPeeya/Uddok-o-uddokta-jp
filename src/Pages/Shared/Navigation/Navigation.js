import React, { useState, Fragment} from 'react';

import { Container,  Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


import './Navigation.css';
import img from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import  Button  from '@mui/material/Button';

import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
const {user, logOut} = useAuth();
      
    // window.onscroll = function(){
    //     if(window.scrollY >= 200 || window.scrollY >= 500){
    //         document.getElementById('scroll-navbar-width').style.width= '100%';
    //         ;
       
    //       }
       
    //       //  else if(window.scrollY <= 200){
    //       //       document.getElementById('scroll-navbar-width').style.width= '90%';
                
    //       // }
    //       // if(window.scrollY >= 700){
    //       //   document.getElementById('scroll-navbar-width').style.boxShadow= '0px 5px 10px white';
    //       //   ;
    //       // }
    //       else if(window.scrollY <= 200){
    //         document.getElementById('scroll-navbar-width').style.boxShadow= '0px 5px 10px rgba(0, 0, 0, 0.493)';
    //         ;
    //   }
       
    // }



    return (
   
     <Navbar id="scroll-navbar-width" style={{height: '100px', width: "90%" , mb: '-3px'}} className="change-color" collapseOnSelect expand="lg" fixed="top" >

<Navbar.Brand style={{marginLeft: '-45px'}} className="uddok-o-uddokta" href="#home"> <img width="40%" src={img} alt="" /></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home"> <span className='style-nav' >HOME</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#aboutUs"> <span className='style-nav'>ABOUT US</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#specialCauses"> <span className='style-nav'>SOCIAL CAUSES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#OurMission"> <span className='style-nav'>SERVICES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav'>JOIN US</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#LatestNews"><span className='style-nav'>EVENTS & NEWS</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#LatestNews"><span className='style-nav'>BLOG</span></Nav.Link>


{/* 
 
 {
                      user?.email ?
                      <Box className="style-nav hover-underline-animation">
                       
  <Button className="style-nav hover-underline-animation" onClick={logOut} color="inherit">Logout</Button>
                      </Box>   
                    
                      :
                        <NavLink className="style-nav hover-underline-animation" style={{textDecoration: 'none', color: 'white'}} to="/login">
                        <Button className='style-nav' color="inherit">Login</Button>
                        </NavLink>
                  }
  */}


  {
    user?.email?  <Box className="style-nav hover-underline-animation">
      
  <Button className="style-nav hover-underline-animation" onClick={logOut} color="inherit">Logout</Button>
                      </Box>    :
<Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/login">
 <span className='style-nav'>LOGIN</span>
 </Nav.Link>
  }
 
 
</Navbar.Collapse>

</Navbar>



    );
};

export default Navigation;