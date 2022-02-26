import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Volunteer from './Volunteer/Volunteer';





const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(()=>{
         fetch('./volunteers.json')
         .then(res => res.json())
         .then(data => setVolunteers(data))
    },[])
    return (
        <div className='mx-auto container'>
           <h1 className='text-primary'>Volunteers: 2020-2021 {volunteers.length}
</h1> 
<Container className='my-5'>
<Grid container spacing={0}>

  {
  volunteers.map(volunteer => <Volunteer volunteer={volunteer}></Volunteer>)
}
</Grid>

</Container>

        </div>
    );
};

export default Volunteers;