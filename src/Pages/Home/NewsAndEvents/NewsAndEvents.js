import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Events from './Events/Events';

const NewsEvents = [
    {   id: 1,
        img: "https://i.ibb.co/HTk7xHW/news1.jpg",
        description: "Micro Entrepreneurship Program for the Poor Women in Bangladesh"
    },
    {   id: 2,
        img: "https://i.ibb.co/SKzYGvf/newsEve2.jpg",
        description: "Internship opportunity for enthusiastic people"
    },
    {    id: 3,
        img: "https://i.ibb.co/z22c2ZK/newsEve3.jpg",
        description: "Annual Conference 2022: 50 Years of Japan-Bangladesh relationship and opportunities for future collaboration"
    },
]



const NewsAndEvents = () => {
    const [newsEvents, setNewsEvents] = useState([]);

    useEffect(() => {
        fetch('https://dry-inlet-45409.herokuapp.com/newsEvents')
        .then(res => res.json())
        .then(data => setNewsEvents(data))
    }, [])
    return (
        <div data-aos="zoom-in-up" id="LatestNews" className='LatestNews-div'>
        <Container className="LatestNews-style"  sx={{ flexGrow: 1, height: '750px', mt: '15px' }}>       
              <div className='text-style'>
              <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 600, textAlign: 'center', color: '#0D6EFD'}}>
              Latest News & Events
      </Typography>

                  
              </div>
     <Grid container spacing={2}>

{
    newsEvents.map(newsEvent =><Events key={newsEvent.id} newsEvent= {newsEvent}></Events> )
}


</Grid>
      </Container>
      </div>
    );
};

export default NewsAndEvents;