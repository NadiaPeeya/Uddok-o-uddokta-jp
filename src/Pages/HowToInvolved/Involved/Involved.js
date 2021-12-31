import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import './Involved.css'
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Involved = (props) => {


    const {id, name, img, Description} = props.activity;
    return (
        <Grid item xs={3} >
        <Card style={{boxShadow: '5px 5px 10px brown'}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355, height: "100%"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={200}
        image={img}
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Description}
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        <Link to={`/involved/involvedDetail/${id}`}><Button className="visit" variant="danger" size="lg">Join</Button></Link> 
       
      </CardActions>
    </Card>
      </Grid>
    );
};

export default Involved;