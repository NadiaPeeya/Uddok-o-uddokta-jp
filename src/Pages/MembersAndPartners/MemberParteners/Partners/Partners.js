import { Container, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Partner from './Partner/Partner';



const Partners = () => {
    const [partners, setPartners] = useState([])
    useEffect(()=> {
        fetch('./Partners.json')
        .then(res => res.json())
        .then(data => setPartners(data))
    }, [])

    return (
        <div>
            <h1>Partners {partners.length}</h1>
            <Container>
                <Grid container spacing={0}>
                {
                    partners.map(partner => <Partner partner={partner}></Partner>)
                }
                </Grid>
           
            </Container>
        </div>
    );
};

export default Partners;