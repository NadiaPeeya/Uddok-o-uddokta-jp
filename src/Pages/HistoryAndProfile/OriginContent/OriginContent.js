import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './OriginContent.css'

const OriginContent = () => {
    return (
        <div className='origin-content'>
 <Container>
<Grid container spacing={6}>
        <Grid item xs={12} md={6} style={{ xs: {marginTop: '-350px'}}}>
         <img className='img-history' width="100%" src="https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/142429978_210252747466964_5990932837962479632_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGzZWSVxsLtNLcBOJJ83bMPGaTeQSwN7dEZpN5BLA3t0U2nBOQQuPH6BANgYy1EHJpebx_bJ5Ywm3Ag0txdlPAw&_nc_ohc=Ko8fMfqp1VkAX_xVXvo&_nc_ht=scontent.fdac39-1.fna&oh=00_AT8F9WEsa88sn-yyApLmhwI9T-8hlcuq_a_STZ5QRZGgeg&oe=623DBAD1" alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
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