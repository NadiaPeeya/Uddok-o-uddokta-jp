import React , {useState, useEffect}from 'react';
import Grid from '@mui/material/Grid';
import Involved from './Involved/Involved';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './HowToInvolved.css'
import { Card, Nav } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// const activities = [
//     {id: 1,
//      name: 'Donor',
//      Description: 'Win your chance to donate for the sustainable development of society',
//      img:'https://i.ibb.co/hcrWS31/Crowdfunding-concept-Social-business-fundraising-and-investing-into-new-ideas-Sponsorship-and-invest.jpg',
//      joinTitle: 'Join As A Donor',
//      img2: "https://media.istockphoto.com/photos/adult-and-child-hands-holding-word-donate-donation-and-charity-picture-id1213370925?k=20&m=1213370925&s=612x612&w=0&h=RBOrjpQu1xAO98l2o1RNJwZpc-TthC0U5qrTaXsUzQw=",

//     },
//     {
//       id: 2,
//      name: 'Investor',
//      Description: 'Opportunity to create a social impact through investing in youth innovations and dedications. ',
//      img:'https://i.ibb.co/0mQDm93/final-Investor2.jpg',
//      joinTitle: 'Join As An Investor',
//      img2: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_529136403_312011.jpg"
//     },

//     {id: 3,
//      name: 'Mentor',
//      Description: 'Are you an experienced individual who desires to contribute for entrepreneurship and social development? ',
//      img:'https://i.ibb.co/KLw7NHd/Skilled-or-motivational-coach-lecturing-to-diverse-multiracial-students-or-businesspeople-in-a-face.jpg',
//      joinTitle: 'Join As A Mentor',
//      img2: "https://thumbs.dreamstime.com/b/mentor-word-cloud-concept-blackboard-45761001.jpg"
//     },
//     { id: 4,
//      name: 'Member',
//      Description: 'Let’s work together for our self and social development through entrepreneurship',
//      img:'https://i.ibb.co/hRxWVVz/final-Member.png',
//      joinTitle: 'Join As A Member',
//      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1NLHuoIc6Kmg_f9ofcgm72sIFOkVs5MLCeJnc2OGPHkxXKR_yFpm1FzYEis0YNnvyo&usqp=CAU"
//     },
    
 
 
//  ]


const HowToInvolved = () => {
// const [activities, setActivities] = useState([])
// useEffect(()=> {
//     fetch('./joinus.json')
//     .then(res => res.json())
//     .then(data => setActivities(data))
// },[])
      
    return (
        <Container className='involved-style' sx={{mt: 35}}>


                    <Box sx={{ width: '100%' }}>
<Grid className='involved-join' container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           {/* {
              activities.map(activity =><Involved activity={activity} key={activity.id}></Involved>)     
           } */}

<Grid item xs={3} className='involved-join' >
        <Card className='involved-join' style={{boxShadow: ''}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="46%"
        image="https://i.ibb.co/hcrWS31/Crowdfunding-concept-Social-business-fundraising-and-investing-into-new-ideas-Sponsorship-and-invest.jpg"
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
        Donor
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Win your chance to donate for the sustainable development of society
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        {/* <Link to={`/involved/involvedDetail/${id}`}><Button className="visit" variant="danger" size="lg">Join</Button></Link>  */}
       

        <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/DonorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
      </CardActions>
    </Card>
      </Grid>
<Grid item xs={3} className='involved-box'>
        <Card className='involved-join' style={{boxShadow: ''}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355, height: ""}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="46%"
        image="https://i.ibb.co/YPbRPdG/final-Investor2.jpg"
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
        Investor
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Opportunity to create a social impact through investing in youth innovations and dedications. 
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        {/* <Link to={`/involved/involvedDetail/${id}`}><Button className="visit" variant="danger" size="lg">Join</Button></Link>  */}
        <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/InvestorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
      </CardActions>
    </Card>
      </Grid>
<Grid item xs={3} className='involved-box'>
        <Card className='involved-join' style={{boxShadow: ''}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355, height: ""}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="46%"
        image="https://i.ibb.co/1d6Ksx1/Skilled-or-motivational-coach-lecturing-to-diverse-multiracial-students-or-businesspeople-in-a-face.jpg"
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
        Mentor
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Are you an experienced individual who desires to contribute for entrepreneurship and social development? 
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        {/* <Link to={`/involved/involvedDetail/${id}`}><Button className="visit" variant="danger" size="lg">Join</Button></Link>  */}
        <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/MentorForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
      </CardActions>
    </Card>
      </Grid>
<Grid item xs={3} className='involved-box'>
        <Card className='involved-join' style={{boxShadow: ''}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355, height: ""}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="46%"
        image="https://i.ibb.co/hRxWVVz/final-Member.png"
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
         Member
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Let’s work together for our self and social development through entrepreneurship
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        {/* <Link to={`/involved/involvedDetail/${id}`}><Button className="visit" variant="danger" size="lg">Join</Button></Link>  */}
        <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/MemberForm"><span className='style-nav'>Join</span></Nav.Link>
</Button>
      </CardActions>
    </Card>
      </Grid>

  </Grid>
  </Box>
        </Container>

        
    );
};

export default HowToInvolved;