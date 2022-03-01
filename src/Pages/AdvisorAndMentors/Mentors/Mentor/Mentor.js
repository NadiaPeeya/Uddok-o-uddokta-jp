import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const Mentor = (props) => {
    const {name, img} = props.mentor;
    return (
  
  
  <Grid xs={12} md={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
  
    </Card>
  </Grid>
 


    );
};

export default Mentor;