import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import img1 from '../../images/imp1.png'
import img2 from '../../images/imp2.png'

import './Impacts.css'

const Impacts = () => {
    return (
        <div data-aos="flip-left" className="changing-background py-5 mb-3">
          <Typography  variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#354252'}}>
        What We Have
      

      </Typography>
        <Container>
<Row className="mb-4">
<Col data-aos="fade-up-right"  data-aos-duration="1500" className="japan" xs={{ order: 'first' }}>
    <img width="35%" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/busy-businessman-1561571-1320985.png" alt="" />
    <Typography className="impact-text" variant="h6" style={{color: '#354252', m: 5, padding: 8}}  > 
          200 Trainees
         </Typography>


</Col>
<Col data-aos="flip-up"  data-aos-duration="1500" className="japan" xs={{ order: '' }}>
<img width="35%" src={img1} alt="" />
    <Typography className="impact-text" variant="h6" style={{color: '#354252', m: 5, padding: 8}}  > 
     10 Mentors
         </Typography>

</Col>
<Col data-aos="fade-up-left"  data-aos-duration="1500" className="japan" xs={{ order: 'last' }}>
<img width="35%" src={img2} alt="" />
    <Typography className="impact-text" variant="h6" style={{color: '#354252', m: 5, padding: 8}}  > 
    25 Entrepreneurs
         </Typography>


</Col>


</Row>
</Container>

    </div>
    );
};

export default Impacts;