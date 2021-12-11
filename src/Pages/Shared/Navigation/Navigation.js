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
        if(window.scrollY >= 500){
            document.getElementById('scroll-navbar-width').style.width= '100%';
            ;
          }
        
       
    }


    return (
   
     <Navbar id="scroll-navbar-width"  data-aos="zoom-out-down" style={{height: '130px', width: "90%" , mb: '-5px'}} className="change-color" collapseOnSelect expand="lg" fixed="top" >

<Navbar.Brand style={{marginLeft: '-45px'}} className="uddok-o-uddokta" href="#home"> <img width="55%" src={img} alt="" /></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home"> <span className='style-nav' >HOME</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#aboutUs"> <span className='style-nav'>ABOUT US</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#someCauses"> <span className='style-nav'>CAUSES</span> </Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#mission"><span className='style-nav'>MiSSION</span></Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav'>JOIN US</span></Nav.Link>
 {/* <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs"> <span className='style-nav'>CONTACT US</span> </Nav.Link> */}


</Navbar.Collapse>

</Navbar>



    );
};

export default Navigation;