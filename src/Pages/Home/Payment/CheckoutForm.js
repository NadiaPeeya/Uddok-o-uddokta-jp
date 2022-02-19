import React from 'react';
import { CircularProgress, TextField } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Grid from '@mui/material/Grid';
import { Container, Row, Col, FormLabel as Label } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';



const CheckoutForm = () => {
    const [donation, setDonation] = useState({})
    const stripe = useStripe();
    const elements = useElements();

  
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [donationAdded, setdonationAdded] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...donation };
        newInfo[field] = value;
        setDonation(newInfo);
    }

    const handleConfirmation = e => {
        setdonationAdded(false);
        const donationFinal = {
          ...donation,
       
      }
        e.preventDefault();
        
        fetch('http://localhost:5000/donation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setdonationAdded(true);
                    
  
                }
            })
  
        e.preventDefault();
    }


   
  

    return (
        <div className="col-md-6">
        <form onSubmit={handleConfirmation}>
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
                 {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                  Pay
              </button>}
             </div>
             
             </form>
             {
              error && <p style={{ color: 'red' }}>{error}</p>
          }
          {
              success && <p style={{ color: 'green' }}>{success}</p>
          }

        </div>
    );
};

export default CheckoutForm;