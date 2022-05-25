import { Container } from '@mui/material';
import React from 'react';
import Speaker5 from './Speaker5/Speaker5';
import './PlenarySession5.css'

const speaker5 = [
    {
        photo: 'https://i.ibb.co/c6YgZvg/Krishna-G-Nath.jpg',
        name: 'Dr Krishna G Nath',
        designation: 'Moderator',
        affiliation: 'R&D Specialist, Eurofins, Japan',
        topic: ''
    },
    {
        photo: '',
        name: 'TBD',
        designation: 'Resource Person 2',
        affiliation: '',
        topic: ''
    },
    {
        photo: '',
        name: 'TBD',
        designation: 'Resource Person 2',
        affiliation: '',
        topic: ''
    },
    {
        photo: '',
        name: 'Dr Bishnu Kumar Adhikary',
        designation: 'Speaker 1',
        affiliation: 'Associate Professor at Doshisha Business School',
        topic: 'Startup finance (venture capital, crowd funding, others)'
    },
    {
        photo: '',
        name: 'TBD',
        designation: 'Speaker 2',
        affiliation: '',
        topic: ''
    },
    {
        photo: '',
        name: 'Dr Farhad Haque',
        designation: 'Speaker 3',
        affiliation: 'PhD from Harvard Bunisess school, Author-Entrepreneurship in Plain English',
        topic: 'Steps to start an entrepreneurship'
    },
]


const PlenarySession5 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary5'>
        <div className='plenary-session1 container'>
                    <h2 className='text-primary fw-bold mt-5 pt-3'>Plenary Session 4: How to start an Entrepreneurship</h2>
        <Container className='my-5'>

            <div className="row container">
            {
    
    speaker5.map(speaker5 =><Speaker5 key={speaker5.id} speaker5={speaker5}></Speaker5>)


}
            </div>

</Container>
    </div>
    </div>
    );
};

export default PlenarySession5;