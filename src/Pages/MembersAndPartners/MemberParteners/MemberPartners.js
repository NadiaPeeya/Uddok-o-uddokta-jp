import React, { useEffect, useState } from 'react';
import OurMember from './OurMember/OurMember';
import { Container, Grid, Typography, Box, TableContainer, TableHead, TableRow, Table, TableCell, TableBody } from '@mui/material';

import Paper from '@mui/material/Paper';


const MemberPartners = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('./members.json')
        .then(res => res.json())
        .then(data=> setMembers(data))
    },[])
   
    return (

<>
<Container  className='my-5 py-5'>

<Typography variant="h3" sx={{ width: '100%', fontWeight: 600, paddingY: '30px', fontSize:{xs:'22px', md:"32px"}, color: 'rgb(35, 34, 34)', backgroundColor: 'gray', border: '1px solid gray', borderRadius: '5px 5px 0px 0px' }}> MEMBERS</Typography>
<Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
    <TableContainer component={Paper} style={{boxShadow: '10px 10px 5px gray', backgroundColor: 'rgb(35, 34, 34)', borderRadius: '0px 0px 50px 50px' , padding: '25px' }}>
        <Table sx={{}} aria-label=" List">
            <TableHead>
                <TableRow>

                    <TableCell style={{color: 'white'}} align="left">Membership ID</TableCell>
                    <TableCell style={{color: 'white'}} align="left">Name</TableCell>
                    <TableCell style={{color: 'white'}} align="left">Membership Category

</TableCell>
                    

                </TableRow>
            </TableHead>
            <TableBody>
                {members.map((row) => (
                    <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                        <TableCell style={{color: 'white'}} align="left">{row.id}</TableCell>
                        <TableCell style={{color: 'white'}} align="left">{row.name}</TableCell>
                        <TableCell style={{color: 'white'}} align="left">{row.mC}</TableCell>
                        <TableCell style={{color: 'white'}} align="left">

                       
                        

                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</Box>
<Box sx={{ width: '100%', display: { xs: 'block', md: 'none' }}}>
    <TableContainer component={Paper}>
        <Table sx={{}} aria-label=" List">
            <TableBody>
                {members.map((row) => (
                    <TableRow
                        key={row._id}
                        sx={{
                            display: { xs: 'grid' },
                            gridAutoColumns: { xs: '1fr' },
                            gap: { xs: 1 },
                        }}
                    >

                    
                      
                     
                    

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</Box>
</Container>


</>
    );
};

export default MemberPartners;