import React from 'react';
import { Card, CardActionArea, CardMedia, Grid, CardContent, Typography } from '@mui/material';

const ClosingSpeaker = (props) => {
    const {name, affiliation, designation, photo} = props.closingSpeaker;
    return (
        <Grid xs={12} sm={12} md={4} className="session1 p-2 container">
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
        
        <Card className='session2 p-2' sx={{ maxWidth: 330, borderRadius:'50px' }}>
              <CardActionArea>
                <CardMedia 
                  className='image-customize'
                  radius="rounded"
                  component="img"
                  height="340"
                  image={photo}
                  // alt=""
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

export default ClosingSpeaker;