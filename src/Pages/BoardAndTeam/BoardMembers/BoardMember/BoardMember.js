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

const BoardMember = (props) => {
    const {img, name , section} = props.boardMember;
    return (
        <>
      
          <Grid item xs={12} md={3}>
          {/* <Card sx={{ maxWidth: "245" }}>
      <CardMedia
        component="img"
        height="380"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {section}
        </Typography>
      </CardContent>
   
    </Card> */}

<Card style={{ width: '16rem', height: '100%' }}>
  <Card.Img style={{height:'70%'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {section}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  </Grid>
     
           
            {/* <div style={{height: '70%'}}  className="card my-5  boardMembers">
  <div className="row g-0">
    <div className="col-md-4">
      <img width="80%" src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 sx={{textAlign: 'justify'}} className="card-title boardMember-card">{name}</h5>
        <p className="card-text boardMember-card">{section}</p>
       
        <div className='col-md-3 footer-socials'>
      <Card.Link className='link-color-change fs-3' target="_blank" href="https://www.facebook.com/uddogouddoktajapan/"><i class="fab fa-facebook footer-facebook facebook text-color-change"></i></Card.Link>
        <Card.Link target="_blank" className='link-color-change fs-3 boardMember-card' href="https://www.linkedin.com/company/uujapan
"><i class="fab fa-linkedin linkedin footer-linkdin text-color-change"></i></Card.Link>


<Card.Link className='link-color-change fs-3' target="_blank" href="https://www.twitter.com/OUddog/"><i class="fab fa-twitter-square twitter footer-twitter text-color-change"></i></Card.Link>
<Card.Link className='link-color-change fs-3' target="_blank" href="https://www.instagram.com/uu_japan_official/?utm_medium=copy_link"

><i class="fab fa-instagram-square instagram footer-instagram text-color-change"></i></Card.Link>

</div>
      </div>
    </div>
  </div>
</div> */}






 
        </>
      

     
    );
};

export default BoardMember;