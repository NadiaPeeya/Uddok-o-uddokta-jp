import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Row, Col, FormLabel as Label } from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './Donation2.css';
import { TextField } from '@mui/material';

const Donation2 = () => {
  const [donation, setdonation] = useState({})
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...donation };
    newInfo[field] = value;
    setdonation(newInfo);
}

    return (
        <div data-aos="zoom-in-up" id="donation2" className='donation-section container'>
      <div className="row donation-start my-5 py-5">
          <div className="col-md-6 col-sm-12 donate-inside-text">
           <div className='container'>
           <h1 className='text-white fw-bolder h-donation'>Donate for Sustainable 
             Social Impacts</h1>
            <p className='text-white p-donation'>Donate for bringing positive changes in the
lives of the underprivileged. With us you
can participate in not just any charity, but
your offerings will surely be used in places
where they are bound to create sustainable
impacts. The goal is not to provide
temporary help, but to ensure that people.don’t require further donations to live
healthy lives. In other words, Donation for
sustainable development.</p>
           </div>

          </div>
    
          <div className="col-md-6 col-sm-12">
          <form onSubmit=''>
               <div className="row container payment-form py-5">
                   <div className="col-md-6 form-table container">
                   <h3>Billing Address</h3>
   <div className='form-table container'>
   <Label className='label-field' htmlFor="fname"><i className="fa fa-user"></i> Full Name</Label>
   <TextField
        sx={{ width: '70%', my: 1 }}
        name="Full Name"
        onBlur={handleOnBlur}
        label="Name"
        id="standard-basic"
        variant="standard"
        
    />
     <Label className='label-field' htmlFor="email"><i className="fa fa-envelope"></i> Email</Label>
     <TextField
        sx={{ width: '70%', my: 1 }}
        name="email"
        onBlur={handleOnBlur}
        label="email"
        id="standard-basic"
        variant="standard"
        
    />
     <Label className='label-field' htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</Label>
     <TextField
        sx={{ width: '70%', my: 1 }}
        name="Address"
        onBlur={handleOnBlur}
        label="address"
        id="standard-basic"
        variant="standard"
        
    /> 
    <br />
    <br />
    <br />
     {/* <Label className='label-field' htmlFor="city"><i className="fa fa-institution"></i> City</Label>
     <TextField
        sx={{ width: '70%', my: 1 }}
        name="email"
        onBlur=''
        label="email"
        id="standard-basic"
        variant="standard"
        
    /> */}
     <div className='row'>
     <div className='col'>
     <Label className='label-field' htmlFor="state">State</Label>
     <TextField
        sx={{ width: '70%', my: 1 }}
        name="State"
        onBlur={handleOnBlur}
        label="state"
        id="standard-basic"
        variant="standard"
        
    />
     </div>
     <div className='col'> 
     <Label className='label-field' htmlFor="zip">Zip</Label>
     <TextField
        sx={{ width: '70%', my: 1 }}
        name="Zip"
        onBlur={handleOnBlur}
        label="zip"
        id="standard-basic"
        variant="standard"
        
    />
     </div>
  
     </div>
   
   
   </div>

                   </div>
                   <div className="col-md-6">
                   <h3>Payment</h3>
  {/* <Label className='label-field' htmlFor="fname"><i className="fa fa-user"></i>Accepted Cards</Label> */}
  <div className="icon-container">
              <i className="fa fa-cc-visa navy" ></i>
              <i className="fa fa-cc-amex blue" ></i>
              <i className="fa fa-cc-mastercard red" ></i>
              <i class="fab fa-cc-paypal orange"></i>
            </div>
            <div className='form-table container'>
                
            <Label className='label-field' htmlFor="cname">Name on Card</Label>
           
            <TextField
        sx={{ width: '70%', my: 1 }}
        name="Name On Card"
        onBlur={handleOnBlur}
        label="Name on card"
        id="standard-basic"
        variant="standard"
        
    />
     <Label className='label-field' htmlFor="ccnum">Credit card number</Label>
     <TextField
        sx={{ width: '80%', my: 1 }}
        name="Card Number"
        onBlur={handleOnBlur}
        placeholder='3622 720627 1667'
        label="Card Number"
        id="standard-basic"
        variant="standard"
        
    />
     <div className="row">
       <div className="col">
       <Label className='label-field' htmlFor="expmonth">Exp Month</Label>
       <TextField
        sx={{ width: '70%', my: 1 }}
        name="Exp Month"
        onBlur={handleOnBlur}
        placeholder='September'
        label="Exp Month"
        id="standard-basic"
        variant="standard"
        
    />
       </div>
       <div className="col">
       <Label className='label-field' htmlFor="cvv">CVV</Label>
       <TextField
        sx={{ width: '70%', my: 1 }}
        name="CVV"
        onBlur={handleOnBlur}
        placeholder='3622 720627 1667'
        label="CVV"
        id="standard-basic"
        variant="standard"
        
    />
       </div>
     </div>
     
    

   
  </div>
   
                   </div>
                   <input type="submit" value="Continue Donation" class="donation-continue"/>
               </div>
               
               </form>

          </div>
          
      </div>
        </div>
    );
};

export default Donation2;