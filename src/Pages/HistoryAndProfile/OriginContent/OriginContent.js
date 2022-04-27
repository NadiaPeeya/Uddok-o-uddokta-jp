import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './OriginContent.css'
import img from '../../../images/UddoktaFounder.jpg'

const OriginContent = () => {
    return (
        <div className='origin-content mt-5'>
 <Container>
<Grid container spacing={6}>
        <Grid item xs={12} md={6} style={{ xs: {marginTop: '-350px'}}}>
         <img className='img-history' width="85%" src={img} alt="" />
        </Grid>
        <Grid className='mt-5 pt-5' item xs={12} md={6}>
        <Typography style={{textAlign: 'left', color: '#0D6EFD', fontWeight: '600'}} variant="h6" gutterBottom component="div">
        NAME OF ORGANIZATION
      </Typography>
      <Typography style={{textAlign: 'justify', color: '#354252'}} variant="body1" gutterBottom>
      The brand name of this organization/movement is “Uddog o Uddokta”, which is a Bengali term; which means “Entrepreneurship & Entrepreneur”. Since we specialize in social organization to work for entrepreneurship development and sustainability, so we are honoring these two words; and as the initiative started in Bangladesh, we named it in Bengali. 
When it will work in different countries, this brand name must be used. But some parts can be linked up with this brand name as per their government rules. Like now we are working in Bangladesh as the name of “Uddog o Uddokta Foundation” and in Japan, it is called “Uddog o Uddokta Japan Association”. 

      </Typography>
        </Grid>
      </Grid>
     </Container>
    
        </div>

    

  
        
    );
};

export default OriginContent;