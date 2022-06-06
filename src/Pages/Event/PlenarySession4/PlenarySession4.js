import { Container } from '@mui/material';
import React from 'react';
import Speaker4 from './Speaker4/Speaker4';
import './PlenarySession4.css'
const speaker4 = [
    {
        photo: 'https://i.ibb.co/0BxWZSD/Usha-Ranjan.jpg',
        name: 'Mr Usha Ranjan',
        designation: 'Moderator',
        affiliation: 'Founder And CEO, Usha International Co. Japan. Lecturer, Gaibu, Shizouka University, Japan',
        topic: ''
    },
    {
        photo: '',
        name: '',
        designation: 'Resource Person(Proposed)',
        affiliation: 'Country Representative, JETRO, Bangladesh',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/6Y3dSJL/Hiroshi-Yamamoto.jpg',
        name: 'Mr Hiroshi Yamamoto',
        designation: 'Resource Person',
        affiliation: 'Founder, Reserve Link Co., Ltd., Japan',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/GJ0B9kD/Dr-Mashiur-Rahman.jpg',
        name: 'Dr. Mashiur Rahman',
        designation: 'Speaker',
        affiliation: 'Digital Healthcare Solutions Specialist, Omron Healthcare Ltd., Singapore & Japan.',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/Cn5cKnm/Xavier-Choedhury.jpg',
        name: 'Mr Xavier Chowdhury',
        designation: 'Speaker',
        affiliation: 'Founder, iCurry, Japan',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/WxPcfCm/285028100-1172384986850046-687788624970214725-n.jpg',
        name: 'Mr Muhammad Solayman Hossain',
        designation: 'Speaker',
        affiliation: 'Founder, Sara Creations Co., Ltd., Japan',
        topic: ''
    },

] 

const PlenarySession4 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary4'>
        <div className='plenary-session1 container'>
                    <h2 className='text-coloring fw-bold mt-5 pt-3'>Plenary Session 4: Story of Failures <br /> 16:00 to 17:00 JST</h2>
     
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