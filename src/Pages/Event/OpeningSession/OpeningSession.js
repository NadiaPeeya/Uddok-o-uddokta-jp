import React from 'react';

import { Container, Grid } from '@mui/material';
import OpeningSpeaker from './OpeningSpeaker/OpeningSpeaker';
import './OpneningSession.css'
const openingSession = [
    {   
        photo:'https://i.ibb.co/zRk2vt2/283359573-1186252911917001-8500944929951458849-n.jpg',
        name: 'Dr. Shamsul Alam',
        affiliation: 'State Minister, Ministry of Planning, Bangladesh',
        designation: 'Chief Guest',
        topic: 'speech'

    },
    {   
        photo:'https://i.ibb.co/S7GJzCj/283240534-399013268676897-1099742981902784682-n.png',
        name: 'Mr. Shahabuddin Ahmed',
        affiliation: 'Ambassador of Bangladesh to Japan',
        designation: 'Special Guest',
        topic: 'speech'

    },
    
 
  
    {   
        photo:'https://i.ibb.co/zZJS7F2/Keisuke-omori.jpg',
        name: 'Mr. Keisuke Omori',
        affiliation: 'President, Toshiba International Foundation, Japan',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
  
    
    
    {
        photo: 'https://i.ibb.co/HtQq2fY/Dr-Ashir-Ahmed.jpg',
        name: 'Dr. Ashir Ahmed',
        affiliation: 'Associate Professor, Kyushu University, Japan',
        designation: 'Guest of Honor',
        topic: 'Speech'
    },
    {   
        photo:'https://i.ibb.co/QCj7pGh/Dr-Rafiqul-Islam.png',
        name: 'Dr. Rafiqul Islam Maruf',
        affiliation: 'Kyushu University Hospital, Japan',
        designation: 'Advisor UUJP',
        topic: 'speech'

    },
    {   
        photo:'https://i.ibb.co/rvhfkvW/Shariar-Hossain.jpg',
        name: 'Mr. Shariar Hossain',
        affiliation: 'Managing Director, Deloitte Japan',
        designation: 'Advisor UUJP',
        topic: 'speech'

    },

 

  
    {   
        photo:'https://i.ibb.co/NSHQD1D/Forhad-Hossain-2.png',
        name: 'Mr. Forhad Hossain',
        affiliation: 'President, Uddog o Uddokta Japan Association',
        designation: 'President',
        topic: 'Introduction of UUJP'

    },
    {   
        photo:'https://i.ibb.co/DbLCrDf/MM-Raihan.jpg',
        name: 'Mr. M M Raihan',
        affiliation: 'Vice President, Uddog o Uddokta Japan Association',
        designation: 'Moderator',
        topic: ''

    },
]

const OpeningSession = () => {
    return (
        <div data-aos="zoom-in-up" className='opening'>
            <div className='plenary-session1 container my-5 p-5'>
            <h2 className='text-coloring fw-bold mt-4 pt-4'>Opening Session <br /> 12:00-13:00 JST </h2>
         
            <Container className='my-4'>

                <div className="row container">
                {
        
        openingSession.map(openingSession =><OpeningSpeaker key={openingSession.id} openingSession={openingSession}></OpeningSpeaker>)
    
    
 }
                </div>

</Container>
        </div>
        </div>
        
    );
};

export default OpeningSession;