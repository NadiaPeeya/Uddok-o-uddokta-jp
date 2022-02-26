import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Volunteer from './Volunteer/Volunteer';




const volunteers = [

    {   img: '',
        name: 'Ahnaf Razzque Ratin',
        work: 'Information and Technology',

    },
    {   img: 'https://scontent.fdac39-1.fna.fbcdn.net/v/t39.30808-6/242804933_3056648834620873_2636807527451635247_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHnYifsQlepJVnLzkyEjzCw-c8dQHDgaoP5zx1AcOBqg5MdtifEytqcBs5et3WiWNTEKDjmP86oyC-Kfz0OCnLf&_nc_ohc=MpXNcbk-5zEAX8nFTca&_nc_ht=scontent.fdac39-1.fna&oh=00_AT9YaykLlCOOwQETXa-iGV5zEZKltOsZAA_uyrDtd5gvKw&oe=621DE1E0',
        name: 'Sharmin Sultana Sweety',
        work: 'Research and Development',

    },
    {   img: '',
        name: 'Keiji Yoshioka',
        work: 'Public Relation',

    },
    {   img: '',
        name: 'M M Islam Hridoy',
        work: 'Digital Marketing ',

    }
]
const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(()=>{
         fetch('./Volunteers.json')
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