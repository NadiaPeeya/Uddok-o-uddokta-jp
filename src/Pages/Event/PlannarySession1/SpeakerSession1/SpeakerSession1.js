import React from 'react';
import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './SpeakerSession1.css'
import { Button } from 'react-bootstrap';
import { textAlign } from '@mui/system';
const SpeakerSession1 = (props) => {
    const {id, schedule, name, affiliation, designation, photo} = props.speaker;
    return (
      <Grid xs={12} sm={12} md={4} className="session1 p-3">
      {/* <Card style={{ width: '20rem', height:"100%" }}>
        <Card.Img variant="top" height="65%" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card> */}
      
      <Card className='session2 p-2' sx={{ maxWidth: 320 , borderRadius:'50px' }}>
              <CardActionArea className=''>
                <CardMedia 
                  className='image-customize'
                  component="img"
                  height="310"
                  image={photo}
                  alt="green iguana"
                />
                   <CardContent>
                <Typography sx={{color: '#0097a7', fontWeight: '600'}} gutterBottom  variant="subtitle" component="div">
                    {designation}
                  </Typography>
                  <Typography sx={{color: '#212121', fontWeight: '900'}} gutterBottom variant="h6" component="div">
                    {name}
                  </Typography>
                  <Typography sx={{color: '#ba68c8', fontWeight: '200', fontSize: '10'}} variant="body1" color="text.secondary">
                  {affiliation}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
      </Grid>

  


  

     
    );
};

export default SpeakerSession1;