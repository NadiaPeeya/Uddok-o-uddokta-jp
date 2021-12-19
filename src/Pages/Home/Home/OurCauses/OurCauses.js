import React from 'react';
import Carousel from "react-elastic-carousel";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import img1 from '../../../../images/global_strategic_research_center.jpg'
import img2 from '../../../../images/financialcause.png'
import img3 from '../../../../images/Career progression.jpg'
import './OurCauses.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];
  

const OurCauses = () => {
    return (

        <div data-aos="zoom-in-up" id="specialCauses" className='causes-div'>
        <Container className="causes-style"  sx={{ flexGrow: 1, mt: '15px' }}>
               <div className='text-style mt-5 mb-5 pt-5'>
       
            <h1 className='h-text'>Social Causes</h1>
            <div className='text-div'>
            <p className='text-para'>Entrepreneurship is our tool to solve social problems in a sustainable way. <br /> There are so many social causes we can work on.  We are moving <br /> forward one by one. Currently we are working on followings.
</p>
            </div>

        </div>
        <div className="causes-slider">
          <Carousel breakPoints={breakPoints}>
           
             <div className='slider-box'>
             <Card className="border-0" sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img1}
        
      />
      <CardContent className='mb-5 pb-2'>
        <Typography className='causes-head' gutterBottom variant="h6" component="div">
        Entrepreneurship for Zero Unemployment
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, libero! */}
        </Typography>
      </CardContent>
  
    </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img2}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography className='causes-head' gutterBottom variant="h6" component="div">
        Entrepreneurship to achieve Universal Health Coverage 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates. */}
        </Typography>
      </CardContent>
    
    </Card>
             </div>
             <div className='slider-box'>
                <p>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="330"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography className='causes-head' gutterBottom variant="h6" component="div">
        Entrepreneurship to provide Quality Education
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum. */}
        </Typography>
      </CardContent>

    </Card>
                </p>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="330"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography className='causes-head' gutterBottom variant="h6" component="div">
        Entrepreneurship to create Equal Opportunities 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum. */}
        </Typography>
      </CardContent>

    </Card>
             </div>
             <div className='slider-box'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography className='causes-head' gutterBottom variant="h6" component="div">
        Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum.
        </Typography>
      </CardContent>

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