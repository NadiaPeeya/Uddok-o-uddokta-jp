import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Mentor from './Mentor/Mentor';
const mentors = [
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


const Mentors = () => {
    const [mentors, setMentors] = useState([]);
    useEffect(()=>{
    fetch('./mentors.json')
    .then(res => res.json())
    .then(data => setMentors(data))
    },[])
    return (
        <Container> 
        <div className='my-5 py-3'>
        <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD'}}>
        MENTORS
             </Typography>
                   
                   <p style={{fontSize: '12px'}} className='mb-5 text-primary'>ADVISORS 2020-2023</p>
                   <Box>
                   <Grid container spacing={2}>
         
         {
             mentors.map(mentor => <Mentor mentor ={mentor}></Mentor>)
         }
       </Grid>
                   </Box>
                 
       
         
       
       
               
       
       
                 
                
               </div>
       
       
               </Container>
    );
};

export default Mentors;