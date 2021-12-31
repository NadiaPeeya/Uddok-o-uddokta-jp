import React, { useState, Fragment} from 'react';

import { Container,  Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


import './Navigation.css';
import img from '../../../images/logo.png'


const Navigation = () => {
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () =>{
    //    if(window.scrollY >= 80){
    //      setColorchange(true);
    //    }
    //    else{
    //      setColorchange(false);
    //    }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
      
    window.onscroll = function(){
        if(window.scrollY >= 200 || window.scrollY >= 500){
            document.getElementById('scroll-navbar-width').style.width= '100%';
            ;
            document.getElementById('scroll-navbar-width').style.backgroundColor= 'white';
            ;
          }
       
           else if(window.scrollY <= 200){
                document.getElementById('scroll-navbar-width').style.width= '90%';
                ;
          }
      //     else if(window.scrollY <= 600){
      //       document.getElementById('scroll-navbar-width').style.width= '90%';
      //       ;
      // }
      
        
      //     else{
      //       document.getElementById('scroll-navbar-width').style.width= '80%';
      //       ;
      //     }
        
       
    }



    return (
   
     <Navbar id="scroll-navbar-width" style={{height: '120px', width: "90%" , mb: '-3px'}} className="change-color" collapseOnSelect expand="lg" fixed="top" >

<Navbar.Brand style={{marginLeft: '-45px'}} className="uddok-o-uddokta" href="#home"> <img width="45%" src={img} alt="" /></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home"> <span className='style-nav' >HOME</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#aboutUs"> <span className='style-nav'>ABOUT US</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#specialCauses"> <span className='style-nav'>SOCIAL CAUSES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#OurMission"> <span className='style-nav'>SERVICES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav'>JOIN US</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#LatestNews"><span className='style-nav'>EVENTS & NEWS</span></Nav.Link>


 {/* <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#mission"><span className='style-nav'>BLOG</span></Nav.Link> */}

 {/* <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav'>CONTACT US</span> </Nav.Link> */}


</Navbar.Collapse>

</Navbar>



    );
};

export default Navigation;