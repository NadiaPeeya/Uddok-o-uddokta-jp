import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './WhatWeAre.css';

const WhatWeAre = () => {
    return (
        <Box data-aos="zoom-in-up" className='about' id="aboutUs" sx={{ flexGrow: 1,  backgroundColor: '#fafafa'}}>
        {/* <Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 500}}> */}
        <div className="container whatWeAre">
        <div className="row">
            <div className="col-md-6">
                <img className='img-about' width="70%" src="https://media.istockphoto.com/photos/diverse-adults-packing-donation-boxes-in-charity-food-bank-picture-id471500478?b=1&k=20&m=471500478&s=170667a&w=0&h=v4BlPN0IZrymhM2qxpqFF9p3A1ZAN6DOfvuvo7NJwqw=" alt="" />
            </div>
           
            <div className="col-md-6 whatweare">
                <div className='whatweare-text'>


<Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 700, textAlign: 'start', color: '#0D6EFD'}}>
          What We Believe
  
      </Typography>
      <Typography variant="p" component="div" gutterBottom sx={{fontFamily: 'cambria',  textAlign: 'justify', color: '#354252'}}>
       “ENTREPRENEURSHIP” can be the best tool to work for social developments. We are helping people to become entrepreneur in a sustainable way. In tradition business/entrepreneurship was just for profit maximization and wealth maximization.  But, now the concept changed already. We can use business to solve the social problems. We can solve unemployment problem worldwide which is one of the major cause of poverty and social crime. We can ensure women empowerment by promoting women entrepreneurship. We can ensure sustainable world through creating social businesses. Charity model can give us one time solution to work for the social development but entrepreneurship can ensure a long term solutions. 

      </Typography>
                </div>
    
            </div>
          
   
        </div>
        
    </div>
    </Box>
    );
};

export default WhatWeAre;