import React from 'react';
import { Grid } from '@mui/material';
import './EventStarting.css'


const EventStarting = () => {
    return (
        <>
        <div className='my-4'>
                <h2 className='text-coloring'>Uddog o Uddokta Japan: Annual Conference 2022</h2>
                <br />
                <h4 className='text-coloring'>50 Years of Japan-Bangladesh Relationship and Opportunities for Future Collaboration
                    </h4>
                    <p className='text-coloring'>July 02, 2022 | Saturday | 11:00 to 18:30 JST | Online</p>
            </div>
        <div className="row container m-5">
               <Grid xs={12} sm={12} md={3} className="session1 p-4 container">
                
               <img width="100%" src="https://munimpact.org/wp-content/uploads/2020/06/Screenshot-2020-06-14-at-8.45.06-PM-1.png" alt="" />
        
        </Grid>
               <Grid xs={12} sm={12} md={3} className="session1 p-3 container">
               <img width='100%' src="https://i.ibb.co/ZM2ZFch/japan-bangladesh-removebg-preview.png" alt="" />
        
        </Grid>
               <Grid xs={12} sm={12} md={3} className="session1 p-3 container">
               <img width="100%" src="https://i.ibb.co/FYWYqSz/image-27-12-21-03-53.jpg" alt="" />
        
        </Grid>
               <Grid xs={12} sm={12} md={3} className="session1 p-3 container">
               <img width="100%" src="https://1000logos.net/wp-content/uploads/2017/06/Toshiba-logo.jpg" alt="" />
        
        </Grid>
            </div>
            
            
        </>
        
    );
};

export default EventStarting;