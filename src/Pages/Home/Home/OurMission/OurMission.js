import React from 'react';
import './OurMission.css'
import { Nav,Tabs, Tab } from 'react-bootstrap';
import Box from '@mui/material/Box';
import img1 from '../../../../images/unnamed.jpg'
import img2 from '../../../../images/training.jpg'
import img3 from '../../../../images/consulting.jpg'
import img4 from '../../../../images/funding.jpg'
import { Container,  Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';



const OurMission = () => {

    return (
        <div data-aos="zoom-in-up" id="OurMission" className='mission-background'>
 <div className='ourMission'>
<div className='ourmission-div'>
  <div className='writing-style'>
      <h1 className='h-text'>Service towards Vision</h1>
      <p className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa.</p>
  </div>
<Tabs width="40%" className='mb-5 missiontab' defaultActiveKey="Research" id="uncontrolled-tab-example">
  <Tab className='mission-tab' sx={{color: 'black'}} eventKey="Research" title="Research">
  
  <div id="Research" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="50%" src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className='h2-text'> 50 Years of Japan-Bangladesh relationship and opportunities for future collaboration

</h4>
               <p className='text-black-50 p2-text'>Japan -Bangladesh relationship was established on 10 February 1972. In 2022 It will reach 50 years. Japan is already recognized as the best friendly country for Bangladesh considering diplomatic relations and foreign aid. We believe that this relationship will be stronger and more impactful in near future. Japanese ideology for industry and social development always inspires us and we want to make it more impactful for the young generations. On this remarkable occasion, we would like to publish a hardcopy book to make an archive in one book bringing some remarkable stories of this relationship as well as stories of successful Bangladeshi entrepreneurs in Japan.This will be a notable souvenir to show the 50 years' achievements of Japan-Bangladesh relationships as well as the future opportunities to move forward.
               <br />
               <br />
              <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/research"><span className='style-nav'>View More</span></Nav.Link>
</Button>
               </p>
                </div>
            </div>
           
        </div>
 
  </Tab>
  <Tab eventKey="Training" title="Training">
  <Box>
  <div id="Training" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img2} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className='h2-text'>Start your Entrepreneurship with Japan </h4>
               <p className='text-black-50 p2-text'>In August 2019, 2020, we organized an online seminar during the COVID19 pandemic on “How to Start an Entrepreneurship: It Business with Japan”. One successful Bangladeshi IT entrepreneur conducted the session from his own experiences. It was a guideline for newcomers to start their IT business in Japan or with Japan from home country. This will be our regular activity. In future we will arrange more seminar like this on different industry. In 2020 we also organized 10 online interview session with 10 young entrepreneurs. Whose are working in different business sectors in Japan and Bangladesh. These sessions were helpful for them to create net networks, to find out new opportunities, to gather information for business development, as well as it was helpful for newcomers to expand their knowledge from experienced person. 
               <br />
               <br />
               <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/Training"><span className='style-nav'>View More</span></Nav.Link>
</Button>
               </p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Consulting" title="Consulting">
  <Box>
  <div id="Consulting" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img3} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className='h2-text'>Consulting for Small Business Development</h4>
               <p className='text-black-50 p2-text'>From 2019 to present we are doing our consulting job regular basis and we have done 50+ consulting task for 20+ organization/people. We are helping them, who wants to start a business newly or want to develop his/her business for more outcomes. As part of consulting services, we are providing feasibility study, market survey, business plan, business profile, strategic plan, business model design, pitch presentation, business idea generation and other management consulting services. 

               <br />
               <br />
               <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/Consulting"><span className='style-nav'>View More</span></Nav.Link>
</Button>
               
               </p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  <Tab eventKey="Funding" title="Funding">
  <Box>
  <div id="Funding" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img4} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className='h2-text'>Fund Raising for Business and Social Development
</h4>
               <p className='text-black-50 p2-text'>We work for new entrepreneurs or existing entrepreneurs to accumulate necessary funding from different sources like bank, finance corporation, government fund, venture capital, crowd funding etc. To collect and optimum utilization of fund you need a good plan and some other necessary preparation we are helping in this regard. Also, we are building angel investors’ network to fund in your entrepreneurship. Not only we are working for profitable business concern, we also working for social enterprise, social business or any nonprofit organization to raise fund to make a sustainable project. We made an agreement with Zhumka Bangladesh, which is a NGO in Bangladesh to work for women and social development. We are working together to build a social business to ensure the necessary development of their beneficiaries. In this project we have apx. 5000 women who already taken some skills training and now they need investment and resource support to do something. 


               <br />
               <br />
               <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/Funding"><span className='style-nav'>View More</span></Nav.Link>
</Button>
               </p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab>
  {/* <Tab eventKey="Social Issues" title="Social Issues">
  <Box>
  <div id="Social Issues" className="container OurMission my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img width="70%" src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className='h2-text'>To solve contemporary social issues by assuring creative social
enterprises.</h4>
               <p className='text-black-50 p2-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
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
                    <h4 className='h2-text'>To provide all types of possible support to convert failure
entrepreneurships into successful beneficiary groups</h4>
               <p className='text-black-50 p2-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas quia tenetur expedita facere illum laboriosam deleniti voluptatibus. Totam, id.</p>
                </div>
            </div>
            
        </div>
  </Box>
 
  </Tab> */}
</Tabs>
    

  

 

  </div>
        </div>
  
        </div>

);
}
  

export default OurMission;