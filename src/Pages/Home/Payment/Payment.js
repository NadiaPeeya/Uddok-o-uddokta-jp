import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K58wSC1M2uo2CANgE2uzxwiDjEHvHSzyaEzoCRR8BRMo7fDrMTZXzqNf21UAmCf7kR8ULdVZReMzBfPe3H9MbN200eP4INXpu')

const Payment = () => {

   
 
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
             <Elements stripe={stripePromise}>
      <CheckoutForm 
 
      />
    </Elements>
        </div>
        </div>
        
    );
};

export default Payment;
