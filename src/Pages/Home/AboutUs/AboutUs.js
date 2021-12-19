import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './AboutUs.css'
import { Button, CardActionArea, CardActions } from '@mui/material';
import { textAlign } from '@mui/system';

const AboutUs = () => {
   
    return (
        <Box className='about' id="aboutUs" sx={{ flexGrow: 1, padding: 5,  backgroundColor: '#fafafa'}}>
             <Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 500}}>
       
      </Typography>
        <Grid className='about-box' container spacing={2} sx={{ }}>
          <Grid item xs={6}>
       
       
   
        <img data-aos="flip-left" width="70%" className="my-2" src="https://media.istockphoto.com/photos/diverse-adults-packing-donation-boxes-in-charity-food-bank-picture-id471500478?b=1&k=20&m=471500478&s=170667a&w=0&h=v4BlPN0IZrymhM2qxpqFF9p3A1ZAN6DOfvuvo7NJwqw=" alt="" />
     

          </Grid>
          
          <Grid className='about-text' data-aos="zoom-in-left" item xs={6} sx={{}}>
          <Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'start', color: '#354252'}}>
          What We Believe
        <hr
        style={{
            color: '#b71c1c',
            backgroundColor: '#b71c1c',
            height: 5,
            width: '24%',
            display: 'flex',
            justifyContent: 'center'
        }}
    />
      </Typography>
  
          <Typography variant="p" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 200, textAlign: 'justify', color: '#354252'}}>
        What We Believe
        We believe that, “ENTREPRENEURSHIP” can be the best tool to work for social developments. We are helping people to become entrepreneur in a sustainable way. In tradition business/entrepreneurship was just for profit maximization and wealth maximization.  But, now the concept changed already. We can use business to solve the social problems. We can solve unemployment problem worldwide which is one of the major cause of poverty and social crime. We can ensure women empowerment by promoting women entrepreneurship. We can ensure sustainable world through creating social businesses. Charity model can give us one time solution to work for the social development but entrepreneurship can ensure a long term solutions. 

      </Typography>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AboutUs;