import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Card, Nav } from 'react-bootstrap';
import './Events.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Events = (props) => {
    const {_id, img, description} = props.newsEvent;


    return (
   
  <Grid item xs={12} md={4}>
   <Card className='newsAndEvents' sx={{ maxWidth: 450}}>
    <Card.Img variant="top" height="100%" src={img} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '700'}} gutterBottom variant="p" component="div">
    {description}
        </Typography>

                     {/* <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/NewsBanner1"><span className='style-nav'>View More</span></Nav.Link>
</Button> */}
<Link to={`/newsEvents/viewMore/${_id}`}><button>View More</button></Link>

    </Card.Body>
 
  </Card>
  </Grid> 
    );
};

export default Events;