import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Intern from './Intern/Intern';


const intern = [{
    img: 'https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/134375962_1856415884521992_5732641800874482965_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEuw6e3T5WhNvaS-sHEWlGamrPpr3JwQr2as-mvcnBCvcI65z44s3Sh13tSRIqY8xzBeOVheQt_tOQtLG0a4G-t&_nc_ohc=86EuTvN-EhwAX-Xqsju&_nc_ht=scontent.fdac11-1.fna&oh=00_AT_xvqfStinYNueP1j7ddhLbzJaac9BTNDY498ShsjIKlw&oe=62405685',
    name: 'Nadia Binte Rahman Peeya',
    section: 'Web Devloper',

},
{
    img: 'https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/49788103_2262642660683138_1566077455603597312_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeG7qkQW_du5Lg3xlY5bgA8GeMmMDk1Zkr54yYwOTVmSvpyHQns81B-SowdY8c674DnLhdZbbZ5TtoAjaXy6FwjW&_nc_ohc=lSFlqyPQ3k8AX9fEcQK&_nc_ht=scontent.fdac11-1.fna&oh=00_AT9hNxr0AT89YoPg0p7FvkfCY6DD5R3cP01U-58b6L70AQ&oe=623E78B5',
    name: 'Md Joabyer Hossain Chowdhury',
    section: 'Web Devloper',

},
{
    img: 'https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/185807533_1693757247477089_6789462802500233184_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFu7BlDwcTXjosWCPV1TUT1ZDJLLCIFd3VkMkssIgV3dWOaADW_tCTUuFYiIHqpruEdm6Mhqm-uzY9AgmJZ9fwS&_nc_ohc=kO4VW-ab7Z4AX-4kJ9z&_nc_ht=scontent.fdac11-1.fna&oh=00_AT-J5Wh0ZMSAIKrXkyywdu6nF9hyPauf-3emEfx0wrVI3Q&oe=62408A2D',
    name: 'Tahmid Tajwar',
    section: 'Content Writer',

}
]



const Interns = () => {
    const [interns, setInterns] = useState([]);
    useEffect(()=>{
        fetch('./intern.json')
        .then(res => res.json())
        .then(data => setInterns(data))
    },[])
    return (
        <div className='my-5'>
            

<Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD'}}>
INTERNS
  
      </Typography>

<p className='text-secondary'>Interns: 1st Intake (October 2021 to March 2022)

</p> 
<Container className='my-5'>
<Grid container spacing={2}>

  {
  interns.map(intern => <Intern intern={intern}></Intern>)
}
</Grid>

</Container>

        </div>
    );
};

export default Interns;