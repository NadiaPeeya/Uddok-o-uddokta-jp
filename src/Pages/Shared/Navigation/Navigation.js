import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import img from '../../../images/logo.png'


const Navigation = () => {

      
    return (
        <Navbar data-aos="zoom-out-down" style={{height: '130px' , width: '98%', mb: '-5px'}} className="change-color container" collapseOnSelect expand="lg" fixed="top" >
<Container>
<Navbar.Brand style={{marginLeft: '-45px'}} className="uddok-o-uddokta" href="#home"> <img width="65%" src={img} alt="" /></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home">HOME</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#aboutUs">ABOUT US</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#someCauses">CAUSES</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#mission">MiSSION</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs">JOIN US</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs">CONTACT US</Nav.Link>


</Navbar.Collapse>
</Container>
</Navbar>

    );
};

export default Navigation;