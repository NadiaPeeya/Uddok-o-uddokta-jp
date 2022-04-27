import React, { useState } from 'react';
import './BoardMembers.css'
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import BoardMember from './BoardMember/BoardMember';
import { Card } from 'react-bootstrap';



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
               <Card.Img className='origin' src='https://i.ibb.co/KLKbswG/142728334-210251047467134-7881869320876743472-n.jpg' alt="Card image" />
               <Card.ImgOverlay>        
               </Card.ImgOverlay>
             </Card>
               </div>
       <Container>
           <div className='my-5'>
               
<Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD', marginBottom: 5}}>

    <span className='my-5 py-5'>Board Members</span>

      </Typography>
             
               <Grid container spacing={4}>
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