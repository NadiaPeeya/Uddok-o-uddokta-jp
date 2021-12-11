import React from 'react';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Involved from './Involved/Involved';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'



const activities = [
    {
     name: 'Donor',
     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto laborum perferendis modi repellendus voluptates. Cumque quam accusamus dicta enim.',
     img:'https://healthhq.defencehealth.com.au/wp-content/uploads/2018/12/Organ-donation-in-Australia-1024x682.jpg',
     joinTitle: 'Join As A Donor',
     img2: "https://media.istockphoto.com/photos/adult-and-child-hands-holding-word-donate-donation-and-charity-picture-id1213370925?k=20&m=1213370925&s=612x612&w=0&h=RBOrjpQu1xAO98l2o1RNJwZpc-TthC0U5qrTaXsUzQw="
    },
    {
     name: 'Investor',
     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto laborum perferendis modi repellendus voluptates. Cumque quam accusamus dicta enim.',
     img:'https://digify.com/wp-content/uploads/2020/04/investment-due-diligence-guide-e1589517501491.jpg',
     joinTitle: 'Join As An Investor',
     img2: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_529136403_312011.jpg"
    },
    {
     name: 'Mentor',
     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto laborum perferendis modi repellendus voluptates. Cumque quam accusamus dicta enim.',
     img:'https://www.acg.edu/wp-content/uploads/2018/12/mentoring-2738524_1920.jpg',
     joinTitle: 'Join As A Mentor',
     img2: "https://thumbs.dreamstime.com/b/mentor-word-cloud-concept-blackboard-45761001.jpg"
    },
    {
     name: 'Member',
     Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto laborum perferendis modi repellendus voluptates. Cumque quam accusamus dicta enim.',
     img:'https://thumbs.dreamstime.com/b/text-sign-showing-membership-conceptual-photo-being-member-part-group-team-join-organizationnotebook-page-ideas-message-119115679.jpg',
     joinTitle: 'Join As A Member',
     img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1NLHuoIc6Kmg_f9ofcgm72sIFOkVs5MLCeJnc2OGPHkxXKR_yFpm1FzYEis0YNnvyo&usqp=CAU"
    },
    
 
 
 ]


const HowToInvolved = () => {

      
    return (
        <Container sx={{mt: 27}}>
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