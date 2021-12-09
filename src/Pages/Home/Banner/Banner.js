import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import './Banner.css'
import Box from '@mui/material/Box';
import { sizing } from '@mui/system';
import carouselImg from '../../../images/5.jpg'
import carouselImg1 from '../../../images/88.jpg'
import carouselImg2 from '../../../images/112.jpg';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'





const Banner = () => {
    return (
      <Box data-aos="zoom-in-down" className="carousel-edit" sx={{ height: '75%', mt: '-55px' }}>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item active" id="slide-1">
   
      <div className="carousel-caption d-none d-md-block" data-aos="fade-right">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    
      </div>
    </div>
    <div className="carousel-item" id="slide-2">
   
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" id="slide-3">
  
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <button>Learn More</button>
      </div>
    </div>
  </div>


</div>

{/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div id="slide-1" class="carousel-item ">
    <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
     
      </div>
    </div>
    <div id="slide-2" class="carousel-item ">
  
     
    <div  className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>

    </div>
    <div id="slide-3" class="carousel-item active">
    <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        
      </div>
    </div>
  </div>
</div> */}





      </Box>
        
    );
};

export default Banner;