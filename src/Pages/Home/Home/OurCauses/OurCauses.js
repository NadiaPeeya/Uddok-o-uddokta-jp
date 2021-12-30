import React from 'react';
import Carousel from "react-elastic-carousel";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
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

        <div data-aos="zoom-in-up" id="specialCauses" className='causes-div'>
        <Container className="causes-style"  sx={{ flexGrow: 1 }}>


              <div className='text-style'>   
            <h1 className='h-text'>Social Causes</h1>
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
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
    Entrepreneurship for Zero Unemployment
        </Typography>
        {/* <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img2} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
        
Entrepreneurship to achieve Universal Health Coverage 

        </Typography>
        {/* <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
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
        {/* <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
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
        {/* <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 550}}>
    <Card.Img variant="top" height={300} src={img5} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '900'}} gutterBottom variant="h6" component="div">
    Entrepreneurship to combat Climate Change 

        </Typography>
        {/* <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
             </div>
             {/* <div className='slider-box'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography gutterBottom variant="h5" component="div">
        Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum.
        </Typography>
      </CardContent>

    </Card>
             </div> */}
             {/* <div className='slider-box'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography gutterBottom variant="h5" component="div">
        Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum.
        </Typography>
      </CardContent>

    </Card>
             </div> */}
             {/* <div className='slider-box'>
               <p>

               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography gutterBottom variant="h5" component="div">
        Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum.
        </Typography>
      </CardContent>

    </Card>
               </p>
             </div> */}
          </Carousel>
        </div>
        </Container>
    </div>
    );
};

export default OurCauses;