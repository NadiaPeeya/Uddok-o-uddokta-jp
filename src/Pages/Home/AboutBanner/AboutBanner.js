import React from 'react';
import Box from '@mui/material/Box';

import img1 from '../../../images/join-us.jpg'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

import HowToInvolved from '../../HowToInvolved/HowToInvolved';
import './AboutBanner.css'


const appointmentBg = {
    background: `url(${img1})`,  
    backgroundPosition: 'center',
    backgroundColor: 'rgba(50, 47, 47, 0.6)',
    backgroundBlendMode: 'multiply',

    height: '500px',
    backgroundRepeat: 'no-repeat'
   

}

const AboutBanner = () => {
    return (
        <Container className='about-banner' sx={{}} id="joinUs">
 <Box data-aos="zoom-in-up" style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={12} sx={{ alignItems: 'center'}} >
            <Box data-aos="zoom-in-up" sx={{}}>
            <Typography  variant="h6" style={{color: '#b71c1c', mt: 100}}  > 
        Join Us
         </Typography>

         <Typography  variant="h6" style={{color: 'white',  fontWeight: 300, textAlign:'center'}}>
         We are working for the betterment of society. <br /> Anyone is welcome to join with us to create more positive impact. You can play your role as per your availability and strength.

         </Typography>
    
            </Box>
        </Grid>
      </Grid>
      <HowToInvolved></HowToInvolved>
    </Box>
   
        </Container>
       
    );
};

export default AboutBanner;