import { Container } from '@mui/material';
import React from 'react';
import ClosingSpeaker from './ClosingSpeaker/ClosingSpeaker';

const closingSpeaker = [
     {
        photo: 'https://i.ibb.co/h7vPxLZ/Afrina-Khan-Priya.jpg',
        name: 'Ms. Afrina Khan Piya',
        affiliation: 'Secretary General, Uddog o Uddokta, Japan',
        designation: 'Moderator'
         
     },
     {
        photo: 'https://i.ibb.co/0MRYQcT/Shirin-Jahan.jpg',
        name: 'Ms. Shirin Jahan',
        affiliation: 'Executive Director, Uddog o Uddokta, Bangladesh',
        designation: 'Speaker'
         
     },

     {
        photo: 'https://i.ibb.co/gghFdFq/Forhad-Hossain-2-2.png',
        name: 'Mr. Forhad Hossain',
        affiliation: 'President, Uddog o Uddokta Japan Association',
        designation: 'Speaker'
         
     },
     {
        photo: 'https://i.ibb.co/rHdxxHB/MM-Raihan-2.jpg',
        name: 'Mr. M M Raihan',
        affiliation: 'Vice President, Uddog o Uddokta Japan Association',
        designation: 'Speaker'
         
     },
     {
        photo: 'https://i.ibb.co/1GzgtNm/283356122-536213944849949-8480011815998436862-n.jpg',
      
      name: 'Mr. Zeaul Huda Hemal',
      affiliation: 'Mentor, Uddog o Uddokta Bangladesh',
      designation: 'Speaker'
       
   },
     {
        photo: 'https://i.ibb.co/XDrGfDz/290566909-1090692028534035-2974002580187379454-n.jpg',
        name: 'Ms. Yamashita Haruka',
        affiliation: 'Project Director, Uddog o Uddokta Japan Association',
        designation: 'Speaker'
         
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