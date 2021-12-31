import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Sector from './Sector/Sector';

const JoinUs2 = () => {
    const [joinSectors, setJoinSectors] = useState([]);
    useEffect(()=>{
        fetch('./joinus.json')
        .then(res => res.json())
        .then(data => setJoinSectors(data))
    }, [])
    return (
        <Grid className='joinUs2' container data-aos="zoom-in-up" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
    
            {
                joinSectors.map(joinSectors =><Sector joinSectors={joinSectors}></Sector>)
            }
         
      
      </Grid>
    );
};

export default JoinUs2;