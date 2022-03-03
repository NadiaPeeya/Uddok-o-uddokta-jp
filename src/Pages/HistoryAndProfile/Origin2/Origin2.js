import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import img from '../../../images/Capture.PNG'
import './Origin2.css'
const Origin2 = () => {
    return (
        <div className='origin-content' style={{marginBottom:'50px'}}>
            <Container>
<Grid container spacing={6} style={{marginTop:3}}>
        <Grid item xs={12} md={6}>
        <Typography style={{textAlign: 'left', color: '#0D6EFD', fontWeight: '600'}} variant="h6" gutterBottom component="div">
        ORIGIN

      </Typography>
      <Typography style={{textAlign: 'justify', color: '#354252'}} variant="body1" gutterBottom>
      The name and concept came from the mind of our honorable founder Mr. Forhad Hossain. He used to write in a national newspaper, and in magazines as a freelance writer during 2005-2010. In that time he started writing articles on entrepreneurship success stories with highlighting organizational success and the entrepreneur’s hard work, and those articles published as titles on “Uddog o Uddokta” which mean “Entrepreneurship & Entrepreneur”. After that, in 2012 our founder Mr. Forhad Hossain started his full-time career as an entrepreneur with establishing a management consulting firm in Bangladesh as the name of LBS Management Consultancy Pvt. Ltd. Through this initiative he tried to create new entrepreneurs and new entrepreneurships through his direct supervision. He started with some new graduates who had shown their interest to become entrepreneurs. Since 2012 he has been providing training and consulting support to many new entrepreneurs in Bangladesh under the theme of “Uddog o Uddokta”. Now it is working as an international social organization for entrepreneurship development and sustainability. Its head office and mother organization are situated in Bangladesh, and country operations are going to start in different states as a registered social organization within those nations. 

      </Typography>
        
        </Grid>

        <Grid item xs={12} md={6}>
            <div style={{height: '500px', display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
            <img width="100%" src={img} alt="" />
            </div>
        
        </Grid>
      </Grid>
     </Container>
    
        </div>
    );
};

export default Origin2;