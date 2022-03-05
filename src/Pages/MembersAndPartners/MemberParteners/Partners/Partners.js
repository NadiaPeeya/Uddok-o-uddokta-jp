import { Container, Grid, Typography, Box, TableContainer, TableHead, TableRow, Table, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './Partners.css'


import Paper from '@mui/material/Paper';


const Partners = () => {
    const [partners, setPartners] = useState([])
    useEffect(()=> {
        fetch('./partners2.json')
        .then(res => res.json())
        .then(data => setPartners(data))
    }, [])

    return (
<>
     <Container>

     <Typography variant="h1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'18px', md:"32px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)' }}>PARTNERS</Typography>
        <Box sx={{ width: '100%', display: { xs: 'block', md: 'block' } }}>
            <TableContainer component={Paper} className="table-partners">
                <Table sx={{ display: { xs: 'block', md: 'block' }}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">Serial No</TableCell>
                            <TableCell align="left">Name of Organization

</TableCell>
                     
                            <TableCell align="left">Country</TableCell>
                            <TableCell align="left">Projects</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {partners.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left">{row.si}</TableCell>
                                <TableCell align="left">{row.NatureOrganization}</TableCell>
                                <TableCell align="left">{row.countryName}</TableCell>
                                <TableCell align="left">{row.projects}</TableCell>
                                <TableCell align="left">

                                   
                                

                                </TableCell>

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

export default Partners;