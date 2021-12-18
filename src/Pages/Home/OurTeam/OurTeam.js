import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className='our-team'>
            <h1 className='h-text'>Our Team</h1>
            <Container className='my-5 py-5'>
  <div className="row g-2">
    <div className="col-md-3 team-box g-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.18169-9/21752022_10214003959917692_5209191346228252546_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=IhB6hpH54BgAX_be_3A&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9cwVpXIH_lR3miXCHfEuco-MIxjbT6AMmT9oTs_ITmcg&oe=61E191FD" />
  <Card.Body>
    <Card.Title>Md Forhad Hossain</Card.Title>
    <Card.Text>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae..
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://www.facebook.com/forhad.bipu"><i class="fab fa-facebook"></i></Card.Link>
    <Card.Link href="https://www.instagram.com/forhadbipu/"><i class="fab fa-instagram-square"></i></Card.Link>
  </Card.Body>
</Card>
    </div>
    <div className="col-md-3 team-box g-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" width="100%" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/p640x640/69601655_757358121384793_1438634024900755456_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=GkSkJGcRtt4AX8VWrME&_nc_ht=scontent.fdac7-1.fna&oh=00_AT92HW8bbnLaVPs7cXueSOF6zn2on9Ik0Fll7zi8FNW_uA&oe=61E38731" />
  <Card.Body>
    <Card.Title>Samira Hossain</Card.Title>
    <Card.Text>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae..
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#"><i class="fab fa-facebook"></i></Card.Link>
    <Card.Link href="#"><i class="fab fa-instagram-square"></i></Card.Link>
  </Card.Body>
</Card>
    </div>
    <div className="col-md-3 team-box">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height={280} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bffd185-fce9-4b34-9898-7b1875d60cab/ddjzucy-99e0f38f-aacc-4830-b986-78ed48a062d6.png/v1/fill/w_1062,h_752,strp/zenitsu_agatsuma_by_kyukino_ddjzucy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMWJmZmQxODUtZmNlOS00YjM0LTk4OTgtN2IxODc1ZDYwY2FiXC9kZGp6dWN5LTk5ZTBmMzhmLWFhY2MtNDgzMC1iOTg2LTc4ZWQ0OGEwNjJkNi5wbmciLCJ3aWR0aCI6Ijw9MTI3MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.F5xOMjyl-e9It3D8Gdi4CdaDj9He6OrxGfC3QUDPNWY" />
  <Card.Body>
    <Card.Title>Zenitsu</Card.Title>
    <Card.Text>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae..
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://www.facebook.com/samiradcc"><i class="fab fa-facebook"></i></Card.Link>
    <Card.Link href="https://www.instagram.com/samira_hossain_/"><i class="fab fa-instagram-square"></i></Card.Link>
  </Card.Body>
</Card>
    </div>
    <div className="col-md-3 team-box">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height={280} src="https://c4.wallpaperflare.com/wallpaper/93/908/938/book-naruto-reads-cosplay-wallpaper-preview.jpg" />
  <Card.Body>
    <Card.Title>Kakashi Hatake</Card.Title>
    <Card.Text>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae..
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#"><i class="fab fa-facebook"></i></Card.Link>
    <Card.Link href="#"><i class="fab fa-instagram-square"></i></Card.Link>
  </Card.Body>
</Card>
    </div>
  </div>
</Container>
        </div>
    );
};

export default OurTeam;