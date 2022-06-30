import { Container } from '@mui/material';
import React from 'react';
import OrganizingCommittee from './OrganizingCommittee/OrganizingCommittee';
import './OrganizingCommity.css'

const organizingCommittee = [
    {   
        photo: 'https://i.ibb.co/bLfTzkW/Forhad-Hossain-2-1.png',
        name: 'Forhad Hossain',
        designation: 'Chairman',


    },
    {   
        photo: 'https://i.ibb.co/ZJQq5k3/MM-Raihan-1.jpg',
        name: 'M M Raihan',
        designation: 'Secretary',


    },
    {   
        photo: 'https://i.ibb.co/h7vPxLZ/Afrina-Khan-Priya.jpg',
        name: 'Afrin Khan Piya',
        designation: 'Registration Chair',


    },
    {   
        photo: 'https://i.ibb.co/0MRYQcT/Shirin-Jahan.jpg',
        name: 'Shirin Jahan',
        designation: 'Communication Chair',


    },
    {   
        photo: 'https://i.ibb.co/1GzgtNm/283356122-536213944849949-8480011815998436862-n.jpg',
        name: 'Zeaul Huda Hemal',
        designation: 'Invitation Chair',


    },
    {   
        photo: 'https://i.ibb.co/Zg210Zs/Samira-Hossain-Mili-1.png',
        name: 'Samira Hossain Mili',
        designation: 'Treasurer',


    },
    {   
        photo: 'https://i.ibb.co/DrM5LGV/Shailaju-Kasaju-1.jpg',
        name: 'Shailaja Kasaju',
        designation: 'Logistics Chair',


    },
    {   
        photo: 'https://i.ibb.co/whGPG9N/Monir-Hossain.jpg',
        name: 'Monir Hossain',
        designation: 'Publication Chair',


    },
    {   
        photo: '',
        name: 'Haruka',
        designation: 'Member',


    },
    {   
        photo: 'https://i.ibb.co/DfwRPwf/Insiat-Islam.gif',
        name: 'Insiat Islam',
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
        photo: 'https://i.ibb.co/k4zksxm/Md-Sakayet-Hossain.jpg',
        name: 'Md. Sakayet Hossain',
        designation: 'Member',


    },
    {   
        photo: 'https://i.ibb.co/z4mYJT4/Tahmid-Tazwar-Khan.jpg',
        name: 'Tahmid Tazwar',
        designation: 'Member',


    },
    {   
        photo: 'https://i.ibb.co/w0P2t7Y/Jobayer-Hossain-Chowdhury.jpg',
        name: 'Md. Jobayer Hossain Chowdhury',
        designation: 'Member',


    },
    {   
        photo: 'https://i.ibb.co/QPbJW6j/Nadia-Binte-Peeya.jpg',
        name: 'Nadia Binte Rahman Peeya',
        designation: 'Member',


    },
    
]

const OrganizingCommity = () => {
    return (
        <div className='organize'>
             <div data-aos="zoom-in-up" className='opening'>
            <div className='plenary-session1 container mt-5 p-5'>
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
        
        </div>
       
    );
};

export default OrganizingCommity;