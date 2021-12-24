import React from 'react';
import { Container } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <Container className='bg-success newsletter-1'>
               <p>What's new?</p>
               <h1>Get Update</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam fugiat rerum voluptas? Vitae quo cum blanditiis dolore obcaecati natus.</p>
            </Container>
        </div>
    );
};

export default NewsLetter;