import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Intern = (props) => {
    const {name, img, section} = props.intern;
    return (
        <Grid container xs={12} md={4}>
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="420"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {section}
        </Typography>
      </CardContent>
    
    </Card>
  </Grid>
    );
};

export default Intern;