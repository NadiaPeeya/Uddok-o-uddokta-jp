import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Join from './../Home/Join/Join';
import Container from '@mui/material/Container';



const services = [
    {
     name: 'Research',
     Description: 'huhuhuhu',
     img:'http://cdn.onlinewebfonts.com/svg/img_410857.png',
     bgImg:'https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
     name: 'Training',
     Description: 'hehehehhe',
     img:'http://cdn.onlinewebfonts.com/svg/img_453963.png',
     bgImg:'https://media.istockphoto.com/photos/rear-view-of-business-people-attending-a-seminar-in-board-room-picture-id1002018094?k=20&m=1002018094&s=612x612&w=0&h=5VdnpWAO4F_UuIeVelA_rg5g2Tw64xN9BFNHHe8PHLg='
    },
    {
     name: 'Consulting',
     Description: 'hahahahha',
     img:'https://static.thenounproject.com/png/552567-200.png',
     bgImg:'https://us.123rf.com/450wm/puvasit/puvasit2010/puvasit201000525/156930438-meeting-a-team-of-businessmen-executives-and-accountants-meeting-about-the-company-s-revenue-graph-i.jpg?ver=6'
    },
    {
     name: 'Funding',
     Description: 'heheheh',
     img:'http://cdn.onlinewebfonts.com/svg/img_382996.png',
     bgImg:'https://www.business.com/images/content/5ca/3ccea5a215e8a458b5677/1500-0-'
    },
 ]

const JoinUs = () => {
    return (
        <Box  sx={{ flexGrow: 1,}}>
        <Grid   container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {
                 services.map(service => <Join key={service.name} service={service}></Join>)
             }
        </Grid>
      </Box>
    );
};

export default JoinUs;