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
                <img width="70%" src="https://media.istockphoto.com/photos/diverse-adults-packing-donation-boxes-in-charity-food-bank-picture-id471500478?b=1&k=20&m=471500478&s=170667a&w=0&h=v4BlPN0IZrymhM2qxpqFF9p3A1ZAN6DOfvuvo7NJwqw=" alt="" />
            </div>
           
            <div className="col-md-6 whatweare">
                <div className='whatweare-text'>
                {/* <h1>Story About Medicare Clinic</h1>
                <p>As you consider your Medicare options, your FREE information will show you what a difference it makes when you have the value, benefits, and service you deserve—get started today.
                A special thanks for Madam Dr. Manika khanna and all gaudium staff for give a happiest moment of my life. and full of support.

We live in Delhi and take the treatment and lots of difficulties of life. But at last Gaudium IVF centre is very fast and all staff are very careful and very cooperative. I have been blessed with twins male babies after 1st attempt of IVF. Dr. Manika khanna is a God of my life. I pray to God for ma’am a happy and longest life.

                </p> */}

<Typography variant="h3" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'start', color: '#354252'}}>
          What We Believe
        <hr
        style={{
            color: '#b71c1c',
            backgroundColor: '#b71c1c',
            height: 5,
            width: '24%',
            display: 'flex',
            justifyContent: 'center'
        }}
    />
      </Typography>
      <Typography variant="p" component="div" gutterBottom sx={{fontFamily: 'cambria',  textAlign: 'justify', color: '#354252'}}>
        What We Believe
        We believe that, “ENTREPRENEURSHIP” can be the best tool to work for social developments. We are helping people to become entrepreneur in a sustainable way. In tradition business/entrepreneurship was just for profit maximization and wealth maximization.  But, now the concept changed already. We can use business to solve the social problems. We can solve unemployment problem worldwide which is one of the major cause of poverty and social crime. We can ensure women empowerment by promoting women entrepreneurship. We can ensure sustainable world through creating social businesses. Charity model can give us one time solution to work for the social development but entrepreneurship can ensure a long term solutions. 

      </Typography>
                </div>
    
            </div>
          
   
        </div>
        
    </div>
    </Box>
    );
};

export default WhatWeAre;