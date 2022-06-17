import React from 'react';

import { Container, Grid } from '@mui/material';
import OpeningSpeaker from './OpeningSpeaker/OpeningSpeaker';
import './OpneningSession.css'
const openingSession = [
    {   
        photo:'',
        name: '',
        affiliation: 'Minister, Ministry of Commerce, Bangladesh',
        designation: 'Chief Guest(Proposed)',
        topic: 'speech'

    },
    {   
        photo:'',
        name: '',
        affiliation: 'Ambassador of Bangladesh to Japan',
        designation: 'Special Guest(Proposed)',
        topic: 'speech'

    },
    
    {   
        photo:'',
        name: '',
        affiliation: 'Ambassador Japan to Bangladesh',
        designation: 'Special Guest(Proposed)',
        topic: 'speech'

    },
  
    {   
        photo:'https://i.ibb.co/zZJS7F2/Keisuke-omori.jpg',
        name: 'Mr. Keisuke Omori',
        affiliation: 'President, Toshiba International Foundation, Japan',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    // {   
    //     photo:'',
    //     name: 'TBD',
    //     affiliation: 'JICA, Bangladesh',
    //     designation: 'Guest of Honor',
    //     topic: 'speech'

    // },
    {   
        photo:'',
        name: '',
        affiliation: 'Vice Chairman and CEO-EPB, Bangladesh',
        designation: 'Guest of Honor(Proposed)',
        topic: 'speech'

    },
    {   
        photo:'',
        name: '',
        affiliation: 'President, FBCCI, Bangladesh',
        designation: 'Guest of Honor(Proposed)',
        topic: 'speech'

    },
    {   
        photo:'',
        name: '',
        affiliation: 'Country Representative, JETRO, Bangladesh',
        designation: 'Guest of Honor(Proposed)',
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
        photo:'https://i.ibb.co/rvhfkvW/Shariar-Hossain.jpg',
        name: 'Mr. Shariar Hossain',
        affiliation: 'Managing Director, Deloitte Japan',
        designation: 'Advisor UUJP',
        topic: 'speech'

    },

 

    {   
        photo:'https://i.ibb.co/QCj7pGh/Dr-Rafiqul-Islam.png',
        name: 'Dr. Rafiqul Islam',
        affiliation: 'Advisor, Uddog o Uddokta Japan Association',
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