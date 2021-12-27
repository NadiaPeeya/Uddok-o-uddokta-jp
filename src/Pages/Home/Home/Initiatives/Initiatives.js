import React from 'react';
import Carousel from "react-elastic-carousel";
import Typography from '@mui/material/Typography';
import { Button, Card } from 'react-bootstrap';
import { Container } from '@mui/material';
import './Initiatives.css'
import img1 from '../../../../images/erisa.png';
import img2 from '../../../../images/sanrin.png';
import img3 from '../../../../images/zhumka2.jpg';
import img4 from '../../../../images/misaki.jpg';
import img5 from '../../../../images/lesd.jpg';
import img6 from '../../../../images/mi.jpg';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const Initiatives = () => {
    return (
        <div data-aos="zoom-in-up" id="specialInitiatives" className='Initiatives-div'>
        <Container className="Initiatives-style"  sx={{ flexGrow: 1 }}>


              <div className='text-style'>   
            <h1 className='h-text'>Entrepreneurial Initiatives</h1>
            <div className='text-div'>
            <p className='text-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos? <br /> Lorem ipsum dolor sit amet.<br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At hic architecto, excepturi animi harum nemo quod, voluptates enim dolores tenetur ipsam nostrum ratione? Nihil, dolor iste incidunt quaerat minima quos!
</p>
            </div>

        </div>
        <div className="Initiatives-slider">
          <Carousel breakPoints={breakPoints}>
           
             <div className='slider-box'>
             {/* <Card sx={{ maxWidth: 350}}>
    <Card.Img variant="top" height={200} width="100%" src={img1} />
    <Card.Body className='card-initiatives'>
    <Typography sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    Sanrin Global Ltd
        </Typography>
    </Card.Body>
  </Card> */}
                             <p>
                <div className='slider-inside'>
               <img className='' height={200} width="100%"  src={img1} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
Erisa Limited 



        </Typography>
                
               </div>
       
                </p>


             </div>
             <div className='slider-box'>
             <p>
                <div className='slider-inside'>
               <img height={200} width="100%"  src={img2} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
               Sanrin Global Ltd



        </Typography>
                
               </div>
       
                </p>
       
             </div>
             <div className='slider-box'>
                <p>
                <div className='slider-inside'>
               <img height={200} width="70%"  src={img3} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
               Zhumka Bangladesh



        </Typography>
                
               </div>
       
                </p>
             </div>
             <div className='slider-box'>
             <p>
                <div className='slider-inside'>
               <img height={200} width="100%"  src={img4} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
            
   Misaki


        </Typography>
                
               </div>
       
                </p>
       
             </div>
             <div className='slider-box'>
             <p>
                <div className='slider-inside'>
               <img height={200} width="100%"  src={img5} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
            LESD



        </Typography>
                
               </div>
       
                </p>
       
             </div>
             <div className='slider-box'>
             <p>
                <div className='slider-inside'>
               <img height={200} width="100%"  src={img6} alt="" />
               <Typography className='slider-text' sx={{textAlign: 'left', fontWeight: '700'}} gutterBottom variant="h6" component="div">
    
            
               M I International Ltd



        </Typography>
                
               </div>
       
                </p>
       
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

export default Initiatives;