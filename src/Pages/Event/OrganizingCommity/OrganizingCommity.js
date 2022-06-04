import { Container } from '@mui/material';
import React from 'react';
import OrganizingCommittee from './OrganizingCommittee/OrganizingCommittee';

const organizingCommittee = [
    {   
        photo: '',
        name: 'Forhad Hossain',
        designation: 'Chairman',


    },
    {   
        photo: '',
        name: 'M M Raihan',
        designation: 'Secretary',


    },
    {   
        photo: '',
        name: 'Afrin Khan Piya',
        designation: 'Registration Chair',


    },
    {   
        photo: '',
        name: 'Shirin Jahan',
        designation: 'Communication Chair',


    },
    {   
        photo: '',
        name: 'Samira Hossain Mili',
        designation: 'Tresurer',


    },
    {   
        photo: '',
        name: 'Shailaja Kasaju',
        designation: 'Logistics Chair',


    },
    {   
        photo: '',
        name: 'Monir Hossain',
        designation: 'Publication Chair',


    },
    {   
        photo: '',
        name: 'Haruka',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Misaki',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Imamura',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Matsushita',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Sakura',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Mohammed',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Md. Sakayet Hossain',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Tahmid Tazwar',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Nadia',
        designation: 'Member',


    },
    {   
        photo: '',
        name: 'Arnob',
        designation: 'Member',


    },
    
]

const OrganizingCommity = () => {
    return (
        <div data-aos="zoom-in-up" className='opening'>
            <div className='plenary-session1 container my-5 p-5'>
            <h1 className='text-coloring fw-bold mt-3 pt-3'>Organizing Committee</h1>
         
            <Container className='my-4'>

                <div className="row container">
                {
        
        organizingCommittee.map(organizingCommittee =><OrganizingCommittee organizingCommittee={organizingCommittee}></OrganizingCommittee>)
    
    
 }
                </div>

</Container>
        </div>
        </div>
        
    );
};

export default OrganizingCommity;