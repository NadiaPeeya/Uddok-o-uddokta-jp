import React from 'react';
import { ButtonGroup as Button, Container, Form } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div data-aos="zoom-in-up" className='newsLetter container'>
            <Container className='newsletter-1'>
                <div className='my-4 py-4'>
                <p className='text-white'>What's new?</p>
               <h1 className='text-white'>Get Update</h1>
               {/* <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam fugiat rerum voluptas? Vitae quo cum blanditiis dolore obcaecati natus. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus laborum autem ipsam sunt quam recusandae obcaecati architecto iure magni.</p>     */}
                </div>        
             <div className="row">
                  <div className="col-md-4 container my-1" sx={{display: 'flex'}}>
                  <Form.Control type="email" placeholder="Enter email" />
                  <button className='my-2 subscribe-btn'>Subscibe</button>     
                  </div>
              </div> 


            </Container>
        </div>
    );
};

export default NewsLetter;