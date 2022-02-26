import { Container, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdvisorMentor from './AdvisorMentor/AdvisorMentor';
import { Box } from '@mui/system';

const AdvisorAndMentors = [
    {
        name :'abc',
        img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.18169-9/11222511_10206790849834448_1819634898039483996_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGTRgvuSZrcjGuRJGqBhsRm31dgmLBXSSvfV2CYsFdJKzOA8S3BKv2GyMc-H9RP-BG8TqfEw4kKh1cbslXeldCN&_nc_ohc=54tWvlgpaJgAX87AE6c&tn=7ailz-wgmmTnRFLC&_nc_ht=scontent.fdac39-1.fna&oh=00_AT9ozCPzE0F1eyLHvxheaj1LjSXjvN_Srj748ewV68nUfg&oe=623FC295',
        
    },
    {
        name :'Nayeema Akter gorila',
        img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.18169-9/11222511_10206790849834448_1819634898039483996_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGTRgvuSZrcjGuRJGqBhsRm31dgmLBXSSvfV2CYsFdJKzOA8S3BKv2GyMc-H9RP-BG8TqfEw4kKh1cbslXeldCN&_nc_ohc=54tWvlgpaJgAX87AE6c&tn=7ailz-wgmmTnRFLC&_nc_ht=scontent.fdac39-1.fna&oh=00_AT9ozCPzE0F1eyLHvxheaj1LjSXjvN_Srj748ewV68nUfg&oe=623FC295',

    },
    {
        name :'abc',
        img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.18169-9/11222511_10206790849834448_1819634898039483996_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGTRgvuSZrcjGuRJGqBhsRm31dgmLBXSSvfV2CYsFdJKzOA8S3BKv2GyMc-H9RP-BG8TqfEw4kKh1cbslXeldCN&_nc_ohc=54tWvlgpaJgAX87AE6c&tn=7ailz-wgmmTnRFLC&_nc_ht=scontent.fdac39-1.fna&oh=00_AT9ozCPzE0F1eyLHvxheaj1LjSXjvN_Srj748ewV68nUfg&oe=623FC295',

    },
 
]




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
            <h1 className='text-primary'>ADVISORS AND MENTORS</h1>
            <p className='mb-5 text-primary'>ADVISORS 2020-2023</p>
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