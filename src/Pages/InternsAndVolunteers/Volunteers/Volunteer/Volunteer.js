import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Volunteer.css'

const Volunteer = (props) => {
    const {img, name , work} = props.volunteer;
    return (
      
      <Grid className='volunteer' container xs={12} md={3}>
      <Card sx={{ maxWidth: 300, height: '100%' }}>
        <CardMedia
          component="img"
          alt=""
          height="300"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {work}
          </Typography>
        </CardContent>
      
      </Card>
    </Grid>
    
    );
};

export default Volunteer;