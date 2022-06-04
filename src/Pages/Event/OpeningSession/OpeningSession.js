import React from 'react';

import { Container, Grid } from '@mui/material';
import OpeningSpeaker from './OpeningSpeaker/OpeningSpeaker';
import './OpneningSession.css'
const openingSession = [
    {   
        photo:'',
        name: 'Mr. Tipu Munshi',
        affiliation: 'Minister, Ministry of Commerce, Bangladesh',
        designation: 'Chief Guest(Proposed)',
        topic: 'speech'

    },
    
    {   
        photo:'',
        name: 'Mr. ITO Naoki',
        affiliation: 'Ambassador Japan to Bangladesh',
        designation: 'Special Guest(Proposed)',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Shahabuddin Ahmed',
        affiliation: 'Ambassador of Bangladesh to Japan',
        designation: 'Special Guest(Proposed)',
        topic: 'speech'

    },
    {   
        photo:'',
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
        photo:'https://i.ibb.co/pbL64Mn/A-H-M-Ahsan.jpg',
        name: 'Mr. A.H.M. Ahsan',
        affiliation: 'Vice Chairman and CEO-EPB, Bangladesh',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Md. Jashim Uddin',
        affiliation: 'President, FBCCI, Bangladesh',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'https://i.ibb.co/tLv5Hy3/Yuji-Ando.jpg',
        name: 'Mr. Yuji Ando',
        affiliation: 'Country Representative, JETRO, Bangladesh',
        designation: 'Guest of Honor',
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
        photo: '',
        name: 'Dr. Ashir Ahmed',
        affiliation: 'Associate Professor, Kyushu University, Japan',
        designation: 'Advisor, UUJP AC2022',
        topic: 'Speech'
    },

    {   
        photo:'',
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