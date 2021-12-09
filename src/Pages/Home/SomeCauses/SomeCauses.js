import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import img1 from '../../../images/global_strategic_research_center.jpg'
import img2 from '../../../images/financialcause.png'
import img3 from '../../../images/Career progression.jpg'
import './SomeCauses.css'

const SomeCauses = () => {
    return (
        <div className='causes-div'>
  <Container className="causes-style"  sx={{ flexGrow: 1, height: '750px', mt: '15px' }}>       
        <div className='text-style mt-5 mb-5 pt-5'>
        <p className='p-text'>OUR AVAILABLE CAUSES</p>
            <h1 className='h-text'>Some Causes</h1>
           <p className='text-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eius quos, <br />
           vero ipsum consectetur autem voluptates aperiam aliquid quidem neque?</p>
        </div>
        
        <Grid className="causes"  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
            <Grid item xs={2} sm={4} md={4}>
            <Card className="border-0" sx={{ maxWidth: 350}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="320"
        image={img1}
        
      />
      <CardContent className='mb-5 pb-2'>
        <Typography gutterBottom variant="h5" component="div">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, libero!
        </Typography>
      </CardContent>
  
    </Card>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={img2}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography gutterBottom variant="h5" component="div">
         Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptates.
        </Typography>
      </CardContent>
    
    </Card>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={img3}
      />
      <CardContent className='mb-5 pb-4'>
        <Typography gutterBottom variant="h5" component="div">
        Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, laborum.
        </Typography>
      </CardContent>

    </Card>

            </Grid>
        
        </Grid>
      </Container>
        </div>
      
    );
};

export default SomeCauses;