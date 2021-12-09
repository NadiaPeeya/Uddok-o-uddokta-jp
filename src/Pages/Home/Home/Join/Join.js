import React from 'react';
import Grid from '@mui/material/Grid';
import BannerImg from './../../BannerImg/BannerImg';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Join.css'





const Join = (props) => {
    const {name, img , bgImg} = props.service;

    const BackGroundImg = {
        background: `url(${bgImg})`,
        backgroundColor: '#ef5350',
        backgroundBlendMode: 'soft-light',
        color: 'white'
    
    }
    return (
     <Grid id="services" data-aos="zoom-in-left" style={BackGroundImg} item xs={2} sm={4} md={3} container spacing={0} sx={{ border: 0,  marginTop: 0,  height: 300, width: '50%'}}>
        <Box className="box-hover"
  sx={{
    display: 'grid',
    gap: 0,
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

    
  }}
>   
<CardMedia
        component="img"
        style={{width: '70%', color: 'white', padding: 6}}
        image={img}
        alt="green iguana"
        
      />
 
           
           <Box>
           <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 900, color: 'white', fontFamily: 'cursive'}}>
        {name}
        </Typography>
        <Typography gutterBottom variant="p" component="div" sx={{fontWeight: 300}}>
      
        </Typography>
           </Box>
        

    
  
</Box>
            </Grid>
    );
};

export default Join;