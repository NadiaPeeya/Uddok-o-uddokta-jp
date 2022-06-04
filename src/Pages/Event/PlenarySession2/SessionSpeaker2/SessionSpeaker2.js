import React from 'react';
import { CardActionArea, Grid, CardMedia, CardContent, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
import './SessionSpeaker2.css'
const SessionSpeaker2 = (props) => {
    const {name, affiliation, designation, photo} = props.speaker2;
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
        
        <Card className='session2' sx={{ maxWidth: 320 , }}>
              <CardActionArea className=''>
                <CardMedia 
                  className='image-customize'
                  component="img"
                  height="280"
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

export default SessionSpeaker2;