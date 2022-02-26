import React, { useEffect, useState } from 'react';
import OurMember from './OurMember/OurMember';
import { Container, Grid } from '@mui/material';



const MemberPartners = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('./members.json')
        .then(res => res.json())
        .then(data=> setMembers(data))
    },[])
   
    return (
        <div>
            <h1 className='my-5 text-primary'> MEMBERS  </h1>
 <Container>
 <Grid container spacing={4}>

  {
        members.map(member=><OurMember member={member}></OurMember>)
    }
</Grid>
 </Container>

  
        </div>
    );
};

export default MemberPartners;