import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './ConferenceDetail.css'
import jsPDF from 'jspdf';
import logo from '../../../images/UUJ Main Banner (1).png'
import { Button, Grid } from '@mui/material';
import { Container, Row, Col } from 
'react-bootstrap';
import 'animate.css'


const ConferenceDetail = () => {

  

    return (
      <div className='details-of-reg'>
        <Grid container className='mobile-responsive-det'>
 
    <Grid item xs={12} sm={12} md={4} >
    <Col className='registration-box'>
        <h6 className='registration-link animate_animated animate__wobble'><a className='animate_animated animate_wobble' target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeIxnnQWcUdM9pG4bHrJ1mqGSebHScl5OP50IiPWdkjWnDkXw/viewform">Registration for Event </a>  </h6>
        </Col>
    </Grid>
    <Grid item xs={12} sm={12} md={4} >
    <Col className='registration-box'>
        <h6 className='registration-link'><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScSbkZBVdslBElVQqC5ypi3neTeXQZfsQLmpXTTotUE6MvQUQ/viewform
">Registration for Entrepreneurs' Directory  </a>  </h6>
        </Col>
    </Grid>
    <Grid item xs={12} sm={12} md={4} >
    <Col className='registration-box'>
        <h6 className='registration-link'><a target="_blank" href="https://drive.google.com/file/d/19N64GhlYqlUkZRa8z9muD0EfsZdcRv0D/view?usp=sharing">Program schedule pdf  </a>  </h6>
        </Col>
    
    </Grid>

</Grid>
      </div>


  );
    
   
}

export default ConferenceDetail;