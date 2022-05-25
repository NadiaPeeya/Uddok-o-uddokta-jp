import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './ConferenceDetail.css'
import jsPDF from 'jspdf';
import logo from '../../../images/UUJ Main Banner (1).png'
import { Button, Grid } from '@mui/material';
import { Container, Row, Col } from 
'react-bootstrap';


const ConferenceDetail = () => {

  

    return (
      <div className='details-of-reg'>
        <Grid container className='mobile-responsive-det'>
 
    <Grid item xs={12} sm={12} md={4} >
    <Col className='registration-box'>
        <h6 className='registration-link'><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeIxnnQWcUdM9pG4bHrJ1mqGSebHScl5OP50IiPWdkjWnDkXw/viewform">Registration for Event </a>  </h6>
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
        <h6 className='registration-link'><a target="_blank" href="https://drive.google.com/file/d/1F1cfPjJsV1o0YxEp-X3rNXzRmdbumSRa/view?usp=sharing">Program schedule pdf  </a>  </h6>
        </Col>
    
    </Grid>

</Grid>
      </div>
//      <Container>
//  <Row className='button-row container'>
//         <Col className='registration-box'>
//         <h6 className='registration-link'><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeIxnnQWcUdM9pG4bHrJ1mqGSebHScl5OP50IiPWdkjWnDkXw/viewform">Registration for Event </a>  </h6>
//         </Col>
//         <Col className='registration-box'>
//         <h6 className='registration-link'><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScSbkZBVdslBElVQqC5ypi3neTeXQZfsQLmpXTTotUE6MvQUQ/viewform">Registration for Entrepreneur's Directory </a>  </h6>
//         </Col>
//         <Col className='registration-box'>
//         <h6 className='registration-link'>
//           <div style={{textAlign:'center'}}>
//           <Button>View pdf</Button>
//           </div>
//           </h6>
    
//         </Col>
//       </Row>
//      </Container>
     

  );
    
   
}

export default ConferenceDetail;