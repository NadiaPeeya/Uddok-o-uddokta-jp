import React from 'react';
import { Container, Row, Col, FormLabel as Label } from 'react-bootstrap';
import Grid from '@mui/material/Grid';

import './Donation.css';


const Donation = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={6}>
       <h1>hi</h1>
        </Grid>
        <Grid item xs={6}>
         <Container>
  <Row className='container'>
  
    <Col className='form-table container'>

    <h3>Billing Address</h3>
   <div className='form-table container'>
   <Label className='label-field' htmlFor="fname"><i className="fa fa-user"></i> Full Name</Label>
     <input className='input-field' type="text" id="fname" name="firstname" placeholder="John M. Doe" />
     <Label className='label-field' htmlFor="email"><i className="fa fa-envelope"></i> Email</Label>
     <input className='input-field' type="text" id="email" name="email" placeholder="john@example.com"/>
     <Label className='label-field' htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</Label>
     <input className='input-field' type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
     <Label className='label-field' htmlFor="city"><i className="fa fa-institution"></i> City</Label>
     <input className='input-field' type="text"  id="city" name="city" placeholder="Tokyo"/>
     <Label className='label-field' htmlFor="state">State</Label>
     <input className='input-field' type="text" id="state" name="state" placeholder="NY"/>
     <Label className='label-field' htmlFor="zip">Zip</Label>
     <input className='input-field' type="text" id="zip" name="zip" placeholder="10001" />
   </div>

    
 
{/* 

    <div className='row'>
        <div className='col'>
        <Label className='label-field' htmlFor="state">State</Label>
     <input className='input-field' type="text" id="state" name="state" placeholder="NY"/>
        </div>
   
<div className='col'>
<Label className='label-field' htmlFor="zip">Zip</Label>
     <input className='input-field' type="text" id="zip" name="zip" placeholder="10001" />
</div>
    
    </div> */}
   

    </Col>
    
    <Col>
    <h3>Payment</h3>
  <Label className='label-field' htmlFor="fname"><i className="fa fa-user"></i>Accepted Cards</Label>
  <div className="icon-container">
              <i className="fa fa-cc-visa navy" ></i>
              <i className="fa fa-cc-amex blue" ></i>
              <i className="fa fa-cc-mastercard red" ></i>
              <i className="fa fa-cc-discover orange"></i>
            </div>
            <div className='form-table container'>
                
            <Label className='label-field' htmlFor="cname">Name on Card</Label>
     <input className='input-field' type="text" id="cname" name="cardname" placeholder="John More Doe" />
     <Label className='label-field' htmlFor="ccnum">Credit card number</Label>
     <input className='input-field' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
     <Label className='label-field' htmlFor="expmonth">Exp Month</Label>
     <input className='input-field' type="text" id="expmonth" name="expmonth" placeholder="September"/>
     <Label className='label-field' htmlFor="cvv">CVV</Label>
     <input className='input-field' type="text" id="cvv" name="cvv" placeholder="352"/>
 

    
 

{/* 
    <div className='row'>
        <div className='col'>
        <Label className='label-field' htmlFor="state">State</Label>
     <input className='input-field' type="text" id="state" name="state" placeholder="NY"/>
        </div>
   
<div className='col'>
<Label className='label-field' htmlFor="zip">Zip</Label>
     <input className='input-field' type="text" id="zip" name="zip" placeholder="10001" />
</div>
    
    </div> */}
   
  </div>
   
    
    </Col>
  </Row>
</Container>
        </Grid>

      </Grid>
      
    );
};

export default Donation;