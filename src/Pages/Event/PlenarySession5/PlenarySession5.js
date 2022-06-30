import { Container } from '@mui/material';
import React from 'react';
import Speaker5 from './Speaker5/Speaker5';
import './PlenarySession5.css'

const speaker5 = [
    {
        photo: 'https://i.ibb.co/Nt6qWd5/287327709-396457862515847-1374297138869828506-n.jpg',
        name: 'Sahjabin Kabir',
        designation: 'Moderator',
        affiliation: 'Founder, Deyalkotha',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/YbZY9Bh/290308148-1496488647461619-7523089135983555851-n.jpg',
        name: 'Dr. Rubina Hussain',
        designation: 'Resource Person',
        affiliation: 'Managing Director, Institute of Hotel Management & Hospitality',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/tcFdmyq/Munim-Kumar-Barai.jpg',
        name: 'Prof. Dr. Munim Kumar Barai',
        designation: 'Resource Person',
        affiliation: 'Professor, Ritsumeikan Asia Pacific University, Japan',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/znvXb2B/Dr-Bishnu-Kumar-Adhikary.jpg',
        name: 'Dr Bishnu Kumar Adhikary',
        designation: 'Speaker',
        affiliation: 'Associate Professor, Doshisha University, Japan',
        topic: 'Startup finance (venture capital, crowd funding, others)'
    },
    {
        photo: 'https://i.ibb.co/1Tq2rMN/Khokan-Kumar-Nandy.jpg',
        name: 'Khokan Kumar Nandy',
        designation: 'Speaker',
        affiliation: 'President JBR Co. Ltd., Japan',
        topic: ''
    },
    {
        photo: 'https://i.ibb.co/GF4RMRv/Dr-Farhad-Haque.jpg',
        name: 'Dr. Farhad Haque',
        designation: 'Speaker',
        affiliation: 'Author, Entrepreneurship in Plain English',
        topic: 'Steps to start an entrepreneurship'
    },
]


const PlenarySession5 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary5'>
        <div className='plenary-session1 container'>
                    <h2 className='text-primary fw-bold mt-5 pt-3'> Plenary Session 5: How to strat an Entrepreneurship <br /> 17:00-18:00 JST</h2>
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