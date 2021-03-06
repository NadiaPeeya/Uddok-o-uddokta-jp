import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { HashLink } from 'react-router-hash-link';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import img1 from '../../../images/news1.jpg'
import img2 from '../../../images/newsEve2.jpg'
import img3 from '../../../images/newsEve3.jpg'
import './LatestNews.css'
import { textAlign } from '@mui/system';
import { Card, Nav } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div data-aos="zoom-in-up" id="LatestNews" className='LatestNews-div'>
  <Container className="LatestNews-style"  sx={{ flexGrow: 1, height: '750px', mt: '15px' }}>       
        <div className='text-style'>
       
            <h1 className='h-text lates-news-h1'>Latest News & Events</h1>
        </div>
        
        <Grid className="LatestNews"  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 450}}>
    <Card.Img variant="top" height={300} src={img1} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '700'}} gutterBottom variant="p" component="div">
    Micro Entrepreneurship Program for the Poor Women in Bangladesh 
        </Typography>

                     <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/NewsBanner1"><span className='style-nav'>View More</span></Nav.Link>
</Button>
    </Card.Body>
 
  </Card>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 450}}>
    <Card.Img variant="top" height={300} src={img2} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '700'}} gutterBottom variant="p" component="div">
    Internship opportunity for enthusiastic people 
        </Typography>
  
                        <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/NewsBanner2"><span className='style-nav'>View More</span></Nav.Link>
</Button>
    </Card.Body>

  </Card>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 450}}>
    <Card.Img variant="top" height={270} src={img3} />
    <Card.Body>
    <Typography sx={{textAlign: 'left',  color: '#354252', fontWeight: '700'}} gutterBottom variant="p" component="div">
    Annual Conference 2022: 50 Years of Japan-Bangladesh relationship and opportunities for future collaboration
        </Typography>

                     <Button><Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/NewsBanner3"><span className='style-nav'>View More</span></Nav.Link>
</Button>
    </Card.Body>

  </Card>

            </Grid>
          
          
 
        
        </Grid>
      </Container>
        </div>
      
    );
};

export default LatestNews;