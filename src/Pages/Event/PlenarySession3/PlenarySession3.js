import { Container } from '@mui/material';
import React from 'react';
import Session3 from './Session3/Session3';
import './PlenarySession3.css'


const session3 = [
    {   
        photo: '',
        name: 'Dr. Mehruba Mona',
        designation: 'moderator',
         affiliation:'Assistant Professor, Okayama University, Japan',
         topic: ''
    },
     {
         photo: '',
         name: 'Prof. Dr. A B M Shahidul Islam',
         designation: 'Resource Person',
         affiliation: 'Professor & Chairman, Department of Marketing, University of Dhaka BoT Member, Eastern University, Bangladesh',
         topic: ''

     },
     {
        photo: '' ,
        name: 'TBD',
        designation: 'Resource Person',
        affiliation: '',
        topic: ''
     },
     {
         photo: '',
         name: 'Ms. Yamashita Haruka',
         designation: 'Speaker',
         affiliation: 'Executive Director, Ritzy Ichiba, Japan'
     },
     {
         photo: 'https://i.ibb.co/yR07tYn/Samira-Hossain-Mili.png',
         name: 'Ms. Samira Hossain Mili',
         designation: 'Speaker',
         affiliation: 'Managing Director, Sanrin Japan Corporation, Japan'
     },
     {
         photo: 'https://i.ibb.co/4NnR2dq/Shailaju-Kasaju.jpg',
         name: 'Ms. Shailaja Kasaju',
         designation: 'Speaker',
         affiliation: 'Country Director, Uddog o Uddokta, Nepal'
     }


    
]

const PlenarySession3 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary3'>
        <div className='plenary-session1 container'>
                    <h2 className='text-coloring fw-bold mt-5 pt-3'>Plenary Session 3:Emerging Youth and Women Entrepreneurs </h2>
                 
                    <Container className='my-5'>

                <div className="row container">
                {
        
        session3.map(session3 =><Session3 key={session3.id} session3={session3}></Session3>)
    
    
 }
                </div>

</Container>
        </div>
        </div>
    );
};

export default PlenarySession3;