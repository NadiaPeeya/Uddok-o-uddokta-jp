import React, { useState } from 'react';
import './BoardMembers.css'
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import BoardMember from './BoardMember/BoardMember';
import { Card } from 'react-bootstrap';

const boardMembers = [
    {
     img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90',
     name: 'Forhad Hossain',
     work: 'Representative Director, President & CEO',
     facebook: 'https://www.linkedin.com/company/uujapan',
     instagram: 'https://www.linkedin.com/company/uujapan',
     linkedin: 'https://www.linkedin.com/company/uujapan'


    },
    {
     img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90',
     name: 'Forhad Hossain',
     work: 'Representative Director, President & CEO',
     facebook: 'https://www.linkedin.com/company/uujapan',
     instagram: 'https://www.linkedin.com/company/uujapan',
     linkedin: 'https://www.linkedin.com/company/uujapan'



    },
    {
     img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90',
     name: 'Forhad Hossain',
     work: 'Representative Director, President & CEO',
     facebook: 'https://www.linkedin.com/company/uujapan',
     instagram: 'https://www.linkedin.com/company/uujapan',
     linkedin: 'https://www.linkedin.com/company/uujapan'



    },
    {
     img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90',
     name: 'Forhad Hossain',
     work: 'Representative Director, President & CEO',
     facebook: 'https://www.linkedin.com/company/uujapan',
     instagram: 'https://www.linkedin.com/company/uujapan',
     linkedin: 'https://www.linkedin.com/company/uujapan'



    },
    {
     img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90',
     name: 'Forhad Hossain',
     work: 'Representative Director, President & CEO',
     facebook: 'https://www.linkedin.com/company/uujapan',
     instagram: 'https://www.linkedin.com/company/uujapan',
     linkedin: 'https://www.linkedin.com/company/uujapan'



    }
]


const BoardMembers = () => {
    const [boardMembers, setBoardMembers] = useState([])
    useEffect(()=>{
        fetch('/boardMembers.json')
        .then(res => res.json())
        .then(data => setBoardMembers(data))
    },[])
    return (
        <>
        <div className='origin'>
        <Card  className="container text-white blog-banner ">
               <Card.Img className='origin' src='https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/124870166_155905849568321_8887183799574785898_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFGxbx2fg5l0InmErvl_5KGvvbhNos5T_O-9uE2izlP8xg9fvNssQ6We4JH4qfIc088TD1pnkJxb_sMHH8VWsgB&_nc_ohc=V1Dv3WYRn1UAX88tDC9&_nc_ht=scontent.fdac39-1.fna&oh=00_AT-pS0IVQDDiqdESgLOARQI5gPfGeXM2E-Vpyqc9je7lhQ&oe=623DEA6B' alt="Card image" />
               <Card.ImgOverlay>        
               </Card.ImgOverlay>
             </Card>
               </div>
       <Container>
           <div className='my-5'>
               <h1 className='text-primary py-5'>Board Members</h1>
               <Grid container spacing={6}>
               {
                   boardMembers.map(boardMember =><BoardMember boardMember={boardMember}></BoardMember> )
               }
</Grid>
             
           </div>

       </Container>
        </>
        
          
        
    );
};

export default BoardMembers;