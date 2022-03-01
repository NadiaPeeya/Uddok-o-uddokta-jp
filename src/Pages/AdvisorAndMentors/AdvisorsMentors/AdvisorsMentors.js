import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdvisorMentor from './AdvisorMentor/AdvisorMentor';
import { Box } from '@mui/system';




const AdvisorsMentors = () => {
    const [Advisors, setAdvisors] = useState([]);
    useEffect(()=>{
    fetch('./advisorAndMentors.json')
    .then(res => res.json())
    .then(data => setAdvisors(data))
    },[])
    return (
        <Container> 
 <div className='my-5 py-3'>
 <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD'}}>
 ADVISORS
      </Typography>
            
            <p style={{fontSize: '12px'}} className='mb-5 text-primary'>ADVISORS 2020-2023</p>
            <Box>
            <Grid container spacing={2}>
  
  {
      Advisors.map(Advisor => <AdvisorMentor Advisor ={Advisor}></AdvisorMentor>)
  }
</Grid>
            </Box>
          

  


        


          
         
        </div>


        </Container>
       
    );
};

export default AdvisorsMentors;