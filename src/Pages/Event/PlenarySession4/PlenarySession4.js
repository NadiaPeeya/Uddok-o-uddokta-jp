import { Container } from '@mui/material';
import React from 'react';
import Speaker4 from './Speaker4/Speaker4';
import './PlenarySession4.css'
const speaker4 = [
    {
        photo: 'https://i.ibb.co/0BxWZSD/Usha-Ranjan.jpg',
        name: 'Mr Usha Ranjan',
        designation: 'Moderator',
        affiliation: 'Founder And CEO, Usha International Co. Japan. Lecturer, Gaibu, Shizouka University',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/Z6qK5Hr/Yuji-Ando.jpg',
        name: 'Mr Yuji Ando',
        designation: 'Resource Person 1',
        affiliation: 'Country Representative, JETRO, Dhaka',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/6Y3dSJL/Hiroshi-Yamamoto.jpg',
        name: 'Mr Hiroshi Yamamoto',
        designation: 'Resource Person 2',
        affiliation: 'Founder at Reserve Link Co., Ltd.',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/GJ0B9kD/Dr-Mashiur-Rahman.jpg',
        name: 'Dr. Mashiur Rahman',
        designation: 'Speaker1',
        affiliation: 'Digital Healthcare Solutions Specialist, Omron Healthcare, Singapore & Japan',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/Cn5cKnm/Xavier-Choedhury.jpg',
        name: 'Mr Xavier Chowdhury',
        designation: 'Speaker 2',
        affiliation: 'Founder, iCurry',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/BBnfP1z/Muhammad-Solayman-Hossain.jpg',
        name: 'Mr Muhammad Solayman Hossain',
        designation: 'Speaker 3',
        affiliation: 'Founder at Sara Creations Co., Ltd., Japan',
        topic: ''
    },

] 

const PlenarySession4 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary4'>
        <div className='plenary-session1 container'>
                    <h2 className='text-primary fw-bold mt-5 pt-3'>Plenary Session 4: Story of Failures</h2>
     
        <Container className='my-5'>

            <div className="row container">
            {
    
    speaker4.map(speaker4 =><Speaker4 key={speaker4.name} speaker4={speaker4}></Speaker4>)


}
            </div>

</Container>
    </div>
    </div>
    );
};

export default PlenarySession4;