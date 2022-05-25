import React, { useEffect, useState } from 'react';
import './PlannarySession1.css'
import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SpeakerSession1 from './SpeakerSession1/SpeakerSession1';
import './PlannarySession1.css'



const speaker = [
    {
        id:1,
        photo:"https://i.ibb.co/KWLf0d7/Abdullah-Al-Masud-Khan.jpg",
        schedule:1,
        name:'Dr Abdullah Al Masud Khan, Ph.D',
        affiliation:'Researcher, Tokyo Medical and Dental University',
        designation:'Moderator',
        topic: ''
        },
        {
            id:2,
            photo:"https://i.ibb.co/7WzBLsW/Asraf-Ud-Doula.jpg",
            schedule:1,
            name:'Mr. Ashraf Ud Doula',
            affiliation:'Ex Ambassador, Bangladesh Embassy, Japan',
            designation:'Resource Person',
            topic: 'Speech'
            },
    {
        id:3,
        photo:"",
        schedule:1,
        name:'Dr Abdullah Al Masud Khan, Ph.D',
        affiliation:'Vice Chairman & CEO-EPB, Bangladesh',
        designation:'Moderator',
        topic: ''
        },
    {
        id:4,
        photo:"",
        schedule:1,
        name:'TBD',
        affiliation:'',
        designation:'Speaker',
        topic: 'Speech'
        },
        {
        id:2,
        photo:"",
        schedule:1,
        name:'Mr. Syed Nasir Ershad',
        affiliation:'',
        designation:'Speaker',
        topic: 'h'
        },
        {
        id:2,
        photo:"",
        schedule:1,
        name:'TBD',
        affiliation:'Economic Minister, Bangladesh Embassy Japan',
        designation:'Speaker',
        topic: 'Speech'
        },
        {
        id:6,
        photo:"https://i.ibb.co/HhXq0Pd/Abu-Mukhles-Alamgir-Hossain.jpg",
        schedule:1,
        name:'Mr. Abu Mukhles Alamgir Hossain',
        affiliation:'Director (Fair and Display)-Current Charge Export Promotion Bureau',
        designation:'Speaker',
        topic: 'Japan-Bangladesh Export/Import Scenario and Future Prospect'
        },
]



const PlannarySession1 = () => {
    
    // const [speaker, setSpeaker] = useState([]);
    // useEffect(()=>{
    //     fetch('./plenary.json')
    //     .then(res => res.json())
    //     .then(data => setSpeaker(data))
    // })
    return (
        <div className='plenary1'>
<div className='plenary-session1 container'>
            <h2 className='text-primary fw-bold mt-5 pt-3'>Plenary Session 1: Japan-Bangladesh 50 Years Relationship <br /> <span className='py-2 my-2'> 13:00-14:00 JST</span> </h2>
         
            <Container className='my-5'>

                <div className="row container">
                {
        
        speaker.map(speaker =><SpeakerSession1 key={speaker.id} speaker={speaker}></SpeakerSession1>)
    
    
 }
                </div>

</Container>
        </div>
        </div>
        
    );
};

export default PlannarySession1;