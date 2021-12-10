import React from 'react';
import './OurMission.css'
import { Nav,Tabs, Tab } from 'react-bootstrap';
import Box from '@mui/material/Box';
import img1 from '../../../../images/works.jpg'
import img2 from '../../../../images/works2.jpg'
import img3 from '../../../../images/works3.jpg'
import img4 from '../../../../images/today1.jpg'



const OurMission = () => {

  
    return (
        <div id="mission" className='mission-background'>
 <div className='ourMission'>
<div className='ourmission-div'>
  <div className='writing-style'>
      <p className='text-danger'>What We Do?</p>
      <h1>Our Mission</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa.</p>
  </div>
<Tabs width="40%" className='mb-5 missiontab' defaultActiveKey="Entrepreneurs" id="uncontrolled-tab-example">
  <Tab className='mission-tab' eventKey="Entrepreneurs" title="Entrepreneurs">
  
  <div id="Entrepreneurs" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To accumulate entrepreneurs for sustainable accomplishments.</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
 
  </Tab>
  <Tab eventKey="knowledge & Skills" title="knowledge & Skills">
  <Box>
  <div id="knowledge & Skills" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img2} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To build up knowledge and skills of entrepreneurship.</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Research" title="Research">
  <Box>
  <div id="Research" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img3} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To enrich the capability of entrepreneurs through research,
regular training programs, seminars, counseling &amp; relevant
activities.</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Theory & Business" title="Theory & Business">
  <Box>
  <div id="Theory & Business" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To ensure the proper combination of theoretical study and
practical business operation.</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Social Issues" title="Social Issues">
  <Box>
  <div id="Social Issues" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To solve contemporary social issues by assuring creative social
enterprises.</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Support" title="Support">
  <Box>
  <div id="Support" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img4} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>To provide all types of possible support to convert failure
entrepreneurships into successful beneficiary groups</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
</Tabs>
    

  

 

  </div>
        </div>
  
        </div>

);
}
  

export default OurMission;