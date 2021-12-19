import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';
import bg from '../../../images/pngtree-hand-painted-creative-entrepreneurial-contest-poster-background-material-image_133189.jpg'
import { Button, Typography } from '@mui/material';

const backGroundImg = {
    background: `url(${bg})`
}

const BannerImg = () => {
    return (
       
      <Container sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} style={{marginTop: 120}}>
          <Grid item xs={12} md={5} style={{textAlign: "left" }}>
         <Typography variant="h3" sx={{ marginLeft: 10}}>
         your new smile <br />
         starts here
         </Typography>
         <Typography variant ="h6" sx={{fontSize:14 , color: 'gray', fontWeight: 300,  marginLeft: 10}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis sit mollitia aliquam ad officia vitae porro optio maiores odio!
         </Typography>
         <Button variant="contained" sx={{margin:5, marginLeft: 10}}>
           Learn More
         </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <img sx={{ marginLeft: 10}} width="100%" src="https://blog.ipleaders.in/wp-content/uploads/2019/11/What-Is-The-Best-Time-In-History-To-Become-An-Entrepreneur-770x500.jpg" alt="" />
          </Grid>
     
        </Grid>
      </Container>
      
  
    );
};

export default BannerImg;