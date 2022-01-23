import React, { useRef, useState } from 'react';
import { ButtonGroup as Button, Container, Form } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
   
    
    const emailRef = useRef();
    const handleAddUser = e => {
    
        const email = emailRef.current.value;
        const newUser = { email: email }
    
        // send data to the server
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
           if(data.insertedId){
               alert('Successfully Subscribed');
               e.target.reset();
           }
           
            ;
            // reset name and email
          
            emailRef.current.value = '';
          })
    
        e.preventDefault();
      }
    return (
        <div data-aos="zoom-in-up" className='newsLetter container'>
            <Container className='newsletter-1'>
                <div className='my-4 py-4'>
                <p className='text-white'>What's new?</p>
               <h1 className='text-white'>Get Update</h1>
               
                </div>        
             <div className="row">
                  <div className="col-md-4 container my-1" sx={{display: 'flex'}}>
                  
      <form onSubmit={handleAddUser}>
      
        <input type="email" ref={emailRef} name="" id="" placeholder="Email" />
        <input type="submit" value="Subscribe" />
      </form>

               
                  </div>
              </div> 


            </Container>
        </div>
    );
};

export default NewsLetter;