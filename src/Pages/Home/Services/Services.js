import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './../Service/Service';

const services = [
   {
    name: 'Research',
    Description: '',
    img:'https://media.istockphoto.com/photos/asian-woman-wearing-japanese-traditional-kimono-and-cherry-blossom-in-picture-id1195370326?k=20&m=1195370326&s=612x612&w=0&h=wEV4GNS2OHOs4x0k30fTNDyI7YfjxAOLavA6o7NQdec='
   },
   {
    name: 'Training',
    Description: '',
    img:'https://media.istockphoto.com/photos/asian-woman-wearing-japanese-traditional-kimono-and-cherry-blossom-in-picture-id1195370326?k=20&m=1195370326&s=612x612&w=0&h=wEV4GNS2OHOs4x0k30fTNDyI7YfjxAOLavA6o7NQdec='
   },
   {
    name: 'Consulting',
    Description: '',
    img:'https://media.istockphoto.com/photos/asian-woman-wearing-japanese-traditional-kimono-and-cherry-blossom-in-picture-id1195370326?k=20&m=1195370326&s=612x612&w=0&h=wEV4GNS2OHOs4x0k30fTNDyI7YfjxAOLavA6o7NQdec=',
   },
   {
    name: 'Funding',
    Description: '',
    img:'https://media.istockphoto.com/photos/asian-woman-wearing-japanese-traditional-kimono-and-cherry-blossom-in-picture-id1195370326?k=20&m=1195370326&s=612x612&w=0&h=wEV4GNS2OHOs4x0k30fTNDyI7YfjxAOLavA6o7NQdec=',
   },
   


]
  

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight: 400, color: ''} } gutterBottom variant="h6" component="div">
         Our Services
        </Typography>
      <Typography sx={{fontWeight: 600, color: 'success.main'} } gutterBottom variant="h3" component="div">
         Services We Provide
        </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            services.map(service =><Service
            key={service.name}
            service={service}
            ></Service>)
        }
        </Grid>
      </Container>
      </Box>
    );
};

export default Services;