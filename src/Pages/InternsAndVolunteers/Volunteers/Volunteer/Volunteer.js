import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Volunteer = (props) => {
    const {img, name , work} = props.volunteer;
    return (
      
             <Grid className='mx-auto' container xs={12} md={3}>
    <Card sx={{ maxWidth: 265 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
         {name}
        </Typography>
        <Typography variant="body" color="text.secondary">
        {work}
        </Typography>
      </CardContent>
    
    </Card>
  </Grid>
    
    );
};

export default Volunteer;