import { Container } from '@mui/material';
import React from 'react';
import Session3 from './Session3/Session3';
import './PlenarySession3.css'


const session3 = [
    {   
        photo: 'https://i.ibb.co/YkTzCtH/Dr-Mehruba-Mona.jpg',
        name: 'Dr. Mehruba Mona',
        designation: 'Moderator',
         affiliation:'Assistant Professor, Okayama University, Japan',
         topic: ''
    },
     {
         photo: 'https://i.ibb.co/Hny683f/Prof-Dr-A-B-M-Shahidul-Islam.jpg',
         name: 'Prof. Dr. A B M Shahidul Islam',
         designation: 'Resource Person',
         affiliation: 'Professor & Chairman, Department of Marketing, University of Dhaka BoT Member, Eastern University, Bangladesh',
         topic: ''

     },
     {
        photo: 'https://i.ibb.co/QPTKKVw/S-M-Ali-Azam.jpg' ,
        name: 'Mr. S M Ali Azam',
        designation: 'Advisor',
        affiliation: 'Advisor, Uddog o Uddokta, Bangladesh',
        topic: ''
     },
     {
         photo: 'https://i.ibb.co/XDrGfDz/290566909-1090692028534035-2974002580187379454-n.jpg',
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
                    <h2 className='text-coloring fw-bold mt-5 pt-3'>Plenary Session 3: Emerging Youth and Women Entrepreneurs <br /> 15:00-16:00 JST </h2>
                 
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