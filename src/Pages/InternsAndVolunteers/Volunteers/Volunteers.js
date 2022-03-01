import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Grid, Typography } from '@mui/material';
import Volunteer from './Volunteer/Volunteer';





const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(()=>{
         fetch('./volunteers.json')
         .then(res => res.json())
         .then(data => setVolunteers(data))
    },[])
    return (
      <Container>
 <div className='my-5'>
 <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD'}}>
Volunteers
  
      </Typography>

<p className='text-secondary'>Volunteers: 1st Intake (2020-2021)
)

</p> 
<Container className='my-5'>
<Grid container spacing={4}>

{
volunteers.map(volunteer => <Volunteer volunteer={volunteer}></Volunteer>)
}
</Grid>

</Container>

  </div>
      </Container>
     
    );
};

export default Volunteers;