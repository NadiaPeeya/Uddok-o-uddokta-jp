import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';
import { textAlign } from '@mui/system';

const AboutUs = () => {
   
    return (
        <Box id="aboutUs" sx={{ flexGrow: 1, padding: 5,  backgroundColor: '#fafafa'}}>
             <Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 500}}>
       
      </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid item xs={6}>
       
       
        <img data-aos="flip-left" width="55%" className="my-2" src="https://ld-wp73.template-help.com/wordpress/prod_9645/v1/wp-content/uploads/2020/10/bg13.jpg" alt="" />
        <img data-aos="flip-left" width="55%" className="my-2" src="https://ld-wp73.template-help.com/wordpress/prod_9645/v1/wp-content/uploads/2020/10/bg12.jpg" alt="" />
        <img data-aos="flip-left" width="55%" className="my-2" src="https://ld-wp73.template-help.com/wordpress/prod_9645/v1/wp-content/uploads/2020/10/bg11.jpg" alt="" />

          </Grid>
          
          <Grid data-aos="zoom-in-left" item xs={6} sx={{}}>
          <Typography variant="h6" component="div" gutterBottom sx={{fontFamily: 'cursive', fontWeight: 500, textAlign: 'start', color: '#354252'}}>
        What We Are?
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
          <Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'start', color: '#354252'}}>
        What We Believe
        
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