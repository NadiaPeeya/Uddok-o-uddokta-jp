import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const OurFounder = () => {
    return (
        <div>
            <div className='mt-5 , pt-5'>
            <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD', marginBottom: 5}}>
          <span className='my-5 py-5'>Our Founder
  </span>
          
      </Typography>
      <Container>
<Grid container spacing={6} style={{}}>
        <Grid item xs={12} md={6}>
         <img width="80%" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/123661244_10223858640518548_8004914084570728766_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=PjEkcCBtjxYAX9qQMzK&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_r3ZYjM-kAXrI_xrErfOv59Yz3K4_DapuY-cbLyVgfQw&oe=62360752" alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
       
     
    <div style={{marginTop: '60px'}}>
    <Typography style={{color:'rgb(13, 110, 253)'}} variant="h6" gutterBottom component="div">
        FORHAD HOSSAIN
      </Typography>
    <Typography style={{textAlign: 'justify', color: '#354252'}} variant="body1" gutterBottom>
    Mr. Forhad says that “Entrepreneurship is the best way to solve social problems”. He used to work as a social activist/volunteer with several social organizations and noticed that we have so many social problems and we are not trying to solve these problems permanently. He chooses entrepreneurship as a tool to solve social problems in a sustainable way. Mr. Forhad was passionate about entrepreneurship from his student life, he started business in university life and continues till present. He established a Management Consulting firm and used to work as an Entrepreneur and Management Consultant for more than 10 years. He is working on an international platform as an Entrepreneur, Management Consultant, Researcher and Social Activist. He is known as “Entrepreneur of the Entrepreneurs” for his work in the entrepreneurship development field. 

      </Typography>
    </div>
      
        </Grid>
      </Grid>
     </Container>
        </div>
        </div>
        
    );
};

export default OurFounder;