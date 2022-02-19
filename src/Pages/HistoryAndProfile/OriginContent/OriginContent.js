import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './OriginContent.css'

const OriginContent = () => {
    return (
        <div className='origin-content'>
 <Container>
<Grid container spacing={6} style={{}}>
        <Grid item xs={12} md={6}>
         <img width="100%" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/214402923_10225718412811693_610790040465665231_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_ohc=hLj7vFYn_HwAX8MMMTE&tn=7ailz-wgmmTnRFLC&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-9UsBxlswB7oDVM5nBErlLrwcOZXV74t9K20adzErJFw&oe=621613C9" alt="" />
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