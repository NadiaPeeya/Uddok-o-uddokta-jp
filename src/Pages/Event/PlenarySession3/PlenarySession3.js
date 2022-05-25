import { Container } from '@mui/material';
import React from 'react';
import Session3 from './Session3/Session3';
import './PlenarySession3.css'


const session3 = [
    {   
        photo: '',
        name: '',
        designation: 'moderator',
         affiliation:'',
         topic: ''
    },
     {
         photo: '',
         name: 'Japanese-TBD',
         designation: 'Resource Person-1',
         affiliation: '',
         topic: ''

     },
     {
        photo: '' ,
        name: '',
        designation: 'Resource Person-2',
        affiliation: '',
        topic: ''
     },
     {
         photo: '',
         name: 'Ms. Yamashita Haruka',
         designation: 'Speaker1',
         affiliation: 'Executive Director, Ritzy Ichiba'
     },
     {
         photo: 'https://i.ibb.co/yR07tYn/Samira-Hossain-Mili.png',
         name: 'Ms. Samira Hossain Mili',
         designation: 'Speaker2',
         affiliation: 'Managing Director, Sanrin Global Ltd.'
     },
     {
         photo: 'https://i.ibb.co/4NnR2dq/Shailaju-Kasaju.jpg',
         name: 'Ms. Shailaja Kasaju',
         designation: 'Speaker 3',
         affiliation: 'Country Director, Uddog o Uddokta Nepal'
     }


    
]

const PlenarySession3 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary3'>
        <div className='plenary-session1 container'>
                    <h2 className='text-primary fw-bold mt-5 pt-3'>Plenary Session 3:Emerging Youth and Women Entrepreneurs </h2>
                 
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