import React from 'react';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Involved from './Involved/Involved';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './HowToInvolved.css'



const activities = [
    {
     name: 'Donor',
     Description: 'Win your chance to donate for the sustainable development of society',
     img:'https://i.ibb.co/hcrWS31/Crowdfunding-concept-Social-business-fundraising-and-investing-into-new-ideas-Sponsorship-and-invest.jpg',
     joinTitle: 'Join As A Donor',
     img2: "https://media.istockphoto.com/photos/adult-and-child-hands-holding-word-donate-donation-and-charity-picture-id1213370925?k=20&m=1213370925&s=612x612&w=0&h=RBOrjpQu1xAO98l2o1RNJwZpc-TthC0U5qrTaXsUzQw="
    },
    {
     name: 'Investor',
     Description: 'Opportunity to create a social impact through investing in youth innovations and dedications. ',
     img:'https://i.ibb.co/0mQDm93/final-Investor2.jpg',
     joinTitle: 'Join As An Investor',
     img2: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_529136403_312011.jpg"
    },
    {
     name: 'Mentor',
     Description: 'Are you an experienced individual who desires to contribute for entrepreneurship and social development? ',
     img:'https://i.ibb.co/KLw7NHd/Skilled-or-motivational-coach-lecturing-to-diverse-multiracial-students-or-businesspeople-in-a-face.jpg',
     joinTitle: 'Join As A Mentor',
     img2: "https://thumbs.dreamstime.com/b/mentor-word-cloud-concept-blackboard-45761001.jpg"
    },
    {
     name: 'Member',
     Description: 'Let’s work together for our self and social development through entrepreneurship',
     img:'https://i.ibb.co/hRxWVVz/final-Member.png',
     joinTitle: 'Join As A Member',
     img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1NLHuoIc6Kmg_f9ofcgm72sIFOkVs5MLCeJnc2OGPHkxXKR_yFpm1FzYEis0YNnvyo&usqp=CAU"
    },
    
 
 
 ]


const HowToInvolved = () => {

      
    return (
        <Container className='involved-style' sx={{mt: 35}}>
        {/* <Typography gutterBottom variant="h2" component="div" sx={{fontWeight: 500 , color:'#354252'}}>
              JOIN US AS
        </Typography> */}

                    <Box sx={{ width: '100%' }}>
<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           {
              activities.map(activity =><Involved activity={activity} key={activity.name}></Involved>)     
           }
  </Grid>
  </Box>
        </Container>

        
    );
};

export default HowToInvolved;