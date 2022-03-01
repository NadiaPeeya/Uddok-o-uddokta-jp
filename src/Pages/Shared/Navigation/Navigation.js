import React, { useState, Fragment} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Container,  Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

import './Navigation.css';
import img from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';


import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';
import { display } from '@mui/system';


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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
   
     <Navbar id="scroll-navbar-width" style={{height: '100px', width: "90%" , mb: '-3px'}} className="change-color" collapseOnSelect expand="lg" fixed="top" >

<Navbar.Brand style={{marginLeft: '-45px'}} className="uddok-o-uddokta" href="#home"> <img width="40%" src={img} alt="" /></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home"> <span className='style-nav text-size' >HOME</span></Nav.Link>
 {/* <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#aboutUs"> <span className='style-nav'>ABOUT US</span> </Nav.Link> */}
 <div>
 <Nav.Link className="style-nav hover-underline-animation"    id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} as={HashLink} >
     
     
      
       <span className='style-nav fw-bolder double-link text-size'>ABOUT US</span>
      </Nav.Link>
      
      <Menu
        // id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/history and profile"><span className='style-nav text-size-menu'>History and Profile</span></Nav.Link></MenuItem>
        <MenuItem onClick={handleClose}> <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/board and team"><span className='style-nav text-size-menu'>Board and Team</span></Nav.Link> </MenuItem>
        <MenuItem onClick={handleClose}> <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/advisor and mentors"><span className='style-nav text-size-menu'>Advisors and Mentors </span></Nav.Link> </MenuItem>
        <MenuItem onClick={handleClose}> <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/members and partners"><span className='style-nav text-size-menu'>Members and Partners</span></Nav.Link> </MenuItem>
        <MenuItem onClick={handleClose}> <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/interns and volunteers"><span className='style-nav text-size-menu'>Interns and Volunteers</span></Nav.Link>  
</MenuItem>
      </Menu>
    </div>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#specialCauses"> <span className='style-nav text-size'>SOCIAL CAUSES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#OurMission"> <span className='style-nav text-size'>SERVICES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav text-size'>JOIN US</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#LatestNews"><span className='style-nav text-size'>EVENTS & NEWS</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/blogs"><span className='style-nav text-size'>BLOG</span></Nav.Link>




  {
    user?.email &&  <Box className="style-nav hover-underline-animation">
      <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/dashboard">
 <span className='style-nav text-size'>DASHBOARD</span>
 </Nav.Link>

                      </Box>  
  }
 
 
</Navbar.Collapse>

</Navbar>




    );
};

export default Navigation;