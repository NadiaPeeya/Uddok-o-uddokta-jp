import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import founder from '../../../images/founderForhad.jpeg'

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
        <Grid  item xs={12} md={6}>
         <img className='mt-5' width="80%" src={founder} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
       
     
    <div style={{marginTop: '10px'}}>
    <Typography style={{color:'rgb(13, 110, 253)', textAlign: 'left'}} variant="h6" gutterBottom component="div">
        FORHAD HOSSAIN
      </Typography>
    <Typography style={{textAlign: 'justify', color: '#354252'}} variant="body1" gutterBottom>
    Mr. Forhad believes that “Entrepreneurship is the best way to solve social problems”. He used to work as a social activist/volunteer with several social organizations (more than 15 years) and noticed that we have so many social problems and are not trying to solve them permanently. He chooses entrepreneurship as a tool to solve those problems in a sustainable way. Mr. Forhad was passionate about entrepreneurship from his student life, he started business in university life and continues till present. He established a Management Consulting firm and used to work as an Entrepreneur and Management Consultant for more than 10 years. He is working in international platforms as an Entrepreneur, Management Consultant, Researcher, and Social Activist. He is known as “Entrepreneur of the Entrepreneurs” for his work in the entrepreneurship development field.  For academic education, he was a student of the National University and the University of Dhaka in Bangladesh, and Hosei University and Kyushu University in Japan. He obtained degrees in Management, Japanese Studies, Entrepreneurship, Social Entrepreneurship, and Information Science in bachelor, masters (3), and Ph.D.  He attended various training, seminar workshops, conferences as a trainee/attendee/organizer/resource person at both national and international levels. Now, he is driving the Uddog o Uddokta worldwide to create greater social impact through entrepreneurship. 


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