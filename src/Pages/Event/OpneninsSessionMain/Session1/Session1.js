import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Session1 = (props) => {
    const {id, schedule, name, affiliation, designation, photo} = props.openingSession;
    return (
        <Grid xs={12} sm={12} md={3} className="session1 p-3">
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
        
        <Card className='session2' sx={{ maxWidth: 265 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={photo}
                  // alt=""
                />
                <CardContent>
                <Typography gutterBottom variant="subtitle" component="div">
                    {designation}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                  {affiliation}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Session1;