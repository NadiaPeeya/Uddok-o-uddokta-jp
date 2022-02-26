import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  Grid, Typography } from '@mui/material';



const OurMember = (props) => {
    const {name, img, id, mC} = props.member;
    return (
 
<Grid xs={12} md={3}>
       <Card sx={{ maxWidth: 275, m: 2, height: '90%' }}>
      <CardMedia
        component="img"
        height="350"
      
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mC}
        </Typography>
      </CardContent>
     
    </Card>




        </Grid>
  

       
    );
};

export default OurMember;