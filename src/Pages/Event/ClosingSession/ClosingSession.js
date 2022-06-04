import { Container } from '@mui/material';
import React from 'react';
import ClosingSpeaker from './ClosingSpeaker/ClosingSpeaker';

const closingSpeaker = [
     {
        photo: '',
        name: 'Ms. Afrina Khan Piya',
        affiliation: 'Researcher, University of Leeds, UK',
        designation: 'Secretary General, UUJP'
         
     },
     {
        photo: '',
        name: 'Ms. Shirin Jahan',
        affiliation: 'Executive Director, Uddog o Uddokta, Bangladesh',
        designation: 'ED, UUBD'
         
     },
]

const ClosingSession = () => {
    return (
        
             <div data-aos="zoom-in-up" className='opening'>
            <div className='plenary-session1 container my-5 p-5'>
            <h1 className='text-coloring fw-bold mt-3 pt-3'>Closing Session</h1>
         
            <Container className='my-4'>

                <div className="row container">
                {
        
        closingSpeaker.map(closingSpeaker =><ClosingSpeaker key={closingSpeaker.name} closingSpeaker={closingSpeaker}></ClosingSpeaker>)
    
    
 }
                </div>

</Container>
        </div>
        </div>
       
        
    );
};

export default ClosingSession;