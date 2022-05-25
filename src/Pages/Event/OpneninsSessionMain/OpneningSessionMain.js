import { Container } from '@mui/material';
import React from 'react';
import Session1 from './Session1/Session1';
const openingSession = [
    {   
        photo:'https://i.ibb.co/F7FwfW7/Usha-Ranjan.jpg',
        name: 'Mr. Tipu Munshi',
        affiliation: 'Ministry of Commerce, Bangladesh',
        designation: 'Chief Guest',
        topic: 'speech'

    },
    {   
        photo:'https://i.ibb.co/F7FwfW7/Usha-Ranjan.jpg',
        name: 'All',
        affiliation: '',
        designation: 'Directory Opening',
        topic: 'Announce by Chief Guest'

    },
    {   
        photo:'https://i.ibb.co/F7FwfW7/Usha-Ranjan.jpg',
        name: 'Mr. ITO Naoki',
        affiliation: 'Ambassador Japan to Bangladesh',
        designation: 'Special Guest',
        topic: 'speech'

    },
    {   
        photo:'https://i.ibb.co/F7FwfW7/Usha-Ranjan.jpg',
        name: 'Mr. Shahabuddin Ahmed',
        affiliation: 'Ambassador of Bangladesh to Japan',
        designation: 'Special Guest',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Keisuke Omori',
        affiliation: 'President, Toshiba International Foundation',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'TBD',
        affiliation: 'JICA',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. A.H.M. Ahsan',
        affiliation: 'Vice Chairman and CEO-EPB, Bangladesh',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Md. Jashim Uddin',
        affiliation: 'President, FBCCI',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Yuji Ando',
        affiliation: 'Country Representative, JETRO, Dhaka',
        designation: 'Guest of Honor',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Shariar Hossain',
        affiliation: '',
        designation: 'Advisor UUJP',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Dr. Rafiqul Islam',
        affiliation: 'Advisor, Uddog o Uddokta Japan Association',
        designation: 'Advisor UUJP',
        topic: 'speech'

    },
    {   
        photo:'',
        name: 'Mr. Forhad Hossain',
        affiliation: 'President, Uddog o Uddokta Japan Association',
        designation: 'Chief Guest',
        topic: 'Introduction of UUJP'

    },
    {   
        photo:'',
        name: 'Mr. M M Raihan',
        affiliation: 'Vice President, Uddog o Uddokta Japan Association',
        designation: 'Chief Guest',
        topic: ''

    },
]

const OpneningSessionMain = () => {
    return (
        <div className='plenary-session1 container'>
            <h3>Plenary Session 1: Japan-Bangladesh 50 Years Relationship <br /> <span className='py-2 my-2'> 13:00-14:00 JST</span> </h3>
         
            <Container className='my-5'>

                <div className="row container">
                {
        
        openingSession.map(openingSession =><Session1 key={openingSession.id} openingSession={openingSession}></Session1>)
    
    
 }
                </div>

</Container>
        </div>
    );
};

export default OpneningSessionMain;