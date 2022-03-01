import React from 'react';
import Grid from '@mui/material/Grid';
import { Card } from 'react-bootstrap';
import { textAlign } from '@mui/system';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const BoardMember = (props) => {
    const {img, name , section} = props.boardMember;
    return (
        <>
      
          <Grid item xs={12} md={4}>
          

<Card style={{ width: '20rem', height: '100%' }}>
  <Card.Img style={{height:'70%'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {section}
    </Card.Text>
    <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href=""> <FacebookIcon className='facebook'></FacebookIcon> </Card.Link>

        <Card.Link className='link-color-change' target="_blank" href="https://miinternational.co.jp/">  <EmailIcon className=''></EmailIcon> </Card.Link>
     
        <Card.Link className='link-color-change' target="_blank" href=""><InstagramIcon className='instagram'></InstagramIcon></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""> <TwitterIcon className='twitter'></TwitterIcon>  </Card.Link>
        </div>
  </Card.Body>
</Card>

  </Grid>
     
           
          






 
        </>
      

     
    );
};

export default BoardMember;