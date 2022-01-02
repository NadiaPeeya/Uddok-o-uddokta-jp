import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Row, Col, FormLabel as Label } from 'react-bootstrap';
import './Donation2.css';

const Donation2 = () => {
    return (
        <div data-aos="zoom-in-up" id="donation2" className='donation-section container'>
      <div className="row donation-start my-5 py-5">
          <div className="col-md-6 donate-inside-text">
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
     
          <div className="col-md-6">
               <div className="row container payment-form py-5">
                   <div className="col-md-6 form-table container">
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
     <div className='row'>
     <div className='col'>
     <Label className='label-field' htmlFor="state">State</Label>
     <input className='input-field' type="text" id="state" name="state" placeholder="NY"/>
     </div>
     <div className='col'> 
     <Label className='label-field' htmlFor="zip">Zip</Label>
     <input className='input-field' type="text" id="zip" name="zip" placeholder="10001" />
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
     <input className='input-field' type="text" id="cname" name="cardname" placeholder="John More Doe" />
     <Label className='label-field' htmlFor="ccnum">Credit card number</Label>
     <input className='input-field' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
     <div className="row">
       <div className="col">
       <Label className='label-field' htmlFor="expmonth">Exp Month</Label>
     <input className='input-field' type="text" id="expmonth" name="expmonth" placeholder="September"/>
       </div>
       <div className="col">
       <Label className='label-field' htmlFor="cvv">CVV</Label>
     <input className='input-field' type="text" id="cvv" name="cvv" placeholder="352"/>
 
       </div>
     </div>
     
    

   
  </div>
   
                   </div>
                   <input type="submit" value="Continue Donation" class="donation-continue"/>
               </div>
               

          </div>
          
      </div>
        </div>
    );
};

export default Donation2;