import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Sector from './Sector/Sector';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { HashLink } from 'react-router-hash-link';
import Typography from '@mui/material/Typography'
import './JoinUs2.css';
import { Container } from '@mui/material';
import { Nav } from 'react-bootstrap';


const JoinUs2 = () => {
    // const [joinSectors, setJoinSectors] = useState([]);
    // useEffect(()=>{
    //     fetch('./joinus.json')
    //     .then(res => res.json())
    //     .then(data => setJoinSectors(data))
    // }, [])
    return (
      <div className='joinus2 mb-5 py-5'>
       <div className='my-5 joinus2-text'>
         <h1 className='h-text mt-5'>Join Us</h1>
         <p className='text-pera text-black-50'>We are working for the betterment of society.
Anyone is welcome to join with us to create more positive impact. You can play your role as per your availability and strength.</p>
       </div>
 <Grid className='joinUs2' container data-aos="zoom-in-up" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    <Grid className='container sector' item xs={2} sm={4} md={3}>
         <Card className="joinSector" sx={{ maxWidth: 345}}>
 <CardMedia
   component="img"
  
   image="https://i.ibb.co/hcrWS31/Crowdfunding-concept-Social-business-fundraising-and-investing-into-new-ideas-Sponsorship-and-invest.jpg"
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Donor
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Win your chance to donate for the sustainable development of society
   </Typography>
 </CardContent>
 <CardActions>
   

 <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/DonorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
 </CardActions>
</Card>
     </Grid>
    <Grid className='container sector' item xs={2} sm={4} md={3}>
         <Card className="joinSector" sx={{ maxWidth: 345}}>
 <CardMedia
   component="img"
  
   image="https://i.ibb.co/YPbRPdG/final-Investor2.jpg"
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Investor
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Opportunity to create a social impact through investing in youth innovations and dedications. 
   </Typography>
 </CardContent>
 <CardActions>
   
 <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/InvestorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
  
 </CardActions>
</Card>
     </Grid>
    <Grid className='container sector' item xs={2} sm={4} md={3}>
         <Card className="joinSector" sx={{ maxWidth: 345}}>
 <CardMedia
   component="img"
  
   image="https://i.ibb.co/1d6Ksx1/Skilled-or-motivational-coach-lecturing-to-diverse-multiracial-students-or-businesspeople-in-a-face.jpg"
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Mentor
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Are you an experienced individual who desires to contribute for entrepreneurship and social development? 
   </Typography>
 </CardContent>
 <CardActions>
   
  
 <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/MentorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
 </CardActions>
</Card>
     </Grid>
    <Grid className='container sector' item xs={2} sm={4} md={3}>
         <Card className="joinSector" sx={{ maxWidth: 345}}>
 <CardMedia
   component="img"
  
   image="https://i.ibb.co/hRxWVVz/final-Member.png"
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
 Member
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Let’s work together for our self and social development through entrepreneurship
   </Typography>
 </CardContent>
 <CardActions>
   
  
 <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/MemberForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
 </CardActions>
</Card>
     </Grid>

 
 </Grid>
      </div>
       
    );
};

export default JoinUs2;