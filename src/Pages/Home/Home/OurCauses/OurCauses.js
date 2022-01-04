import React from 'react';
import Carousel from "react-elastic-carousel";

import { Container } from '@mui/material';
import img1 from '../../../../images/cause1.png'
import img2 from '../../../../images/cause2.png'
import img3 from '../../../../images/cause3.png'
import img4 from '../../../../images/cause4.png'
import img5 from '../../../../images/cause5.png'
import Typography from '@mui/material/Typography';
import './OurCauses.css'
import { Button, Card } from 'react-bootstrap';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];
  

const OurCauses = () => {
    return (

        <div data-aos="zoom-in-up"  className='causes-div'>
        <Container className="causes-style"  sx={{ flexGrow: 1 }}>


              <div id="specialCauses" className='text-style'>   
            <h1  className='h-text'>Social Causes</h1>
            <div className='text-div'>
            <p className='text-black-50'>Entrepreneurship is our tool to solve social problems in a sustainable way. <br /> There are so many social causes we can work on.  We are moving <br /> forward one by one. Currently we are working on followings.
</p>
            </div>

        </div>
        <div className="causes-slider">
          <Carousel breakPoints={breakPoints}>
           
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img1} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '600'}} gutterBottom variant="h6" component="div">
    Entrepreneurship for Zero Unemployment
        </Typography>
 
    </Card.Body>
 
  </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img2} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
        
Entrepreneurship to achieve Universal Health Coverage 

        </Typography>

    </Card.Body>
  
  </Card>
             </div>
             <div className='slider-box'>
                <p>
                <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img3} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
    Entrepreneurship to provide Quality Education
        </Typography>
  
    </Card.Body>

  </Card>
                </p>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img4} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
    Entrepreneurship to create Equal Opportunities 
        </Typography>
  
    </Card.Body>

  </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img5} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
    Entrepreneurship to combat Climate Change 

        </Typography>
   
    </Card.Body>
 
  </Card>
             </div>
      
        
          </Carousel>
        </div>
        </Container>
    </div>
    );
};

export default OurCauses;