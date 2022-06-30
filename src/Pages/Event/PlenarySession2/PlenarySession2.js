import React from 'react';
import { Container, Grid } from '@mui/material';
import SessionSpeaker2 from './SessionSpeaker2/SessionSpeaker2';
import './PlanerySession2.css'
const speaker2 = [ {


photo:"https://i.ibb.co/QCj7pGh/Dr-Rafiqul-Islam.png",
schedule:2,
name:'Dr. Rafiqul Islam Maruf' ,
affiliation:'Associate Professor, Kyushu University Hospital, Japan',
designation:'Moderator',
topic:''
},
{
id:7,
photo:"https://i.ibb.co/CnWwdZV/Mokhlesur-Rahman.jpg",
schedule:2,
name:'Prof. Dr. Mokhlesur Rahman',
affiliation:'Ex-Professor, Japan University of Economics, Principal at CODO International College, Japan',
designation:'Resource Person',
topic: ''
},
{
id:8,
photo:"https://i.ibb.co/gdQMXrW/Takuya-Kawamura.png",
schedule:2,
name:'Mr. Takuya Kawamura',
affiliation:'President, Sunpower Corporation, Japan',
designation:'Resource Person',
},
{
  id:10,
  photo:"https://i.ibb.co/BLbkhPL/Dr-Ashir-Ahmed.jpg",
  schedule:2,
  name:'Dr. Ashir Ahmed',
  affiliation:'Associate Professor, Kyushu University, Japan',
  designation:'Speaker',
  topic: 'SDG 3: Good Heath and Wellbeing'
  },
{
id:9,
photo:"https://i.ibb.co/sbqKdgj/Shariar-Hossain.jpg",
schedule:2,
name:'Mr. Shahriar Ahmed',
affiliation:'Managing Director, Deloitte Japan',
designation:'Speaker',
topic: 'The Role of Sustainable Technologies in Achieving the SDGs'
},

{
id:16,
photo:"https://i.ibb.co/mNFYQ2G/Tarek-Rafi-Bhuiyan.png",
schedule:2,
name:'Mr. Tareq Rafi Bhuiyan',
affiliation:'Secretary-General, Japan-Bangladesh Chamber of Commerce & Industry, Bangladesh' ,
designation:'Speaker',
topic: 'SDG 8 & 9 (Economic and Industrial Growth'
},
]

const PlenarySession2 = () => {
    return (
        <div data-aos="zoom-in-up" className='plenary2'>
        <div className='plenary-session1 container'>
                    <h2 className='text-coloring fw-bold mt-5 pt-3'>Plenary Session 2: Entrepreneurship to Achieve SDGs <br /> <span className='py-2 my-2'> 14:00-15:00 JST </span> </h2>
                 
                    <Container className='my-5'>
 

                <div className="row container">
                {
        
        speaker2.map(speaker2 =><SessionSpeaker2 key={speaker2.id} speaker2={speaker2}></SessionSpeaker2>)
    
    
 }
                </div>

</Container>
        </div>
      </div>
      
    );
};

export default PlenarySession2;