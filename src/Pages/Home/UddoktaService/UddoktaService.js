import React,{useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShowServices from './ShowServices/ShowServices';
import img from '../../../images/qualitative-research.png'
import img4 from '../../../images/funding.png'
import img2 from '../../../images/analysis.png'
import img3 from '../../../images/consultation.png'
import './UddoktaService.css';

const UddoktaService = () => {

    return (
        <div  className="middle-items">
        <h1 className="h-text my-5 py-5"> Our Services</h1>
        <Container className="my-5 py-5">
<Row>
<Col xs>
<div className="instruments">    
    <h3 className="my-2 instruments-name">Research</h3>
        <img className="img-style" width="35%" src={img} alt="" />
        
    </div>
</Col>
<Col xs={{ order: 12 }}>
    <div className="instruments">
    <h3 className="my-2 instruments-name">Training</h3>
        <img className="img-style" width="35%" src={img2} alt="" />
        
    </div>
</Col>
<Col xs={{ order: 1 }}>
<div className="instruments">
         <h3 className="my-2 instruments-name">Consulting</h3>
        <img className="img-style" width="35%" src={img3} alt="" />
        
    </div>
</Col>
<Col xs={{ order: 1 }}>
<div className="instruments">
<h3 className="my-2 instruments-name">Funding</h3>
        <img className="img-style" width="35%" src={img4} alt="" />
        
    </div>
</Col>
</Row>
</Container>
    </div>
    );
};

export default UddoktaService;