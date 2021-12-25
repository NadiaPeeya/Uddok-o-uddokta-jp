import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import './Involved.css'
import { Modal, Container, Row, Col } from 'react-bootstrap';


const Involved = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const {name, img, Description, joinTitle, img2} = props.activity;
    return (
        <Grid item xs={3} >
        <Card style={{boxShadow: '5px 5px 10px brown'}} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" sx={{ maxWidth: 355, height: "100%"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={200}
        image={img}
      />
      <CardContent>
        <Typography className='join-text' gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Description}
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign: 'center'}}>
        {/* <Button  sx={{border:'1px solid #b71c1c', backgroundColor: '#b71c1c'}} className="mx-auto design-color" variant="contained"  size="small">  </Button> */}
        <Button sx={{border:'1px solid primary', backgroundColor: 'primary'}} className="mx-auto design-color" variant="contained"  size="small"  onClick={handleShow}>
        Join
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Joining</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
        <Container>
  <Row>
  
    <Col sm={12} className="place-order">
     <div><img className="" width="100%" src={img2} alt="" /></div>
    <h1>{joinTitle}</h1>
 <img src="" alt="" />

 <form >

<div className="form-styling container">
<input   placeholder='Enter Your First Name'/>
<input   placeholder='Enter Your Last Name'/>
<input placeholder='Enter Your Email' />
 <input placeholder="Address" />
<input placeholder="City"/>
<input placeholder="phone number" />
</div>
{/* <input className="form-styling"  placeholder='Enter Your First Name'/>
<input   placeholder='Enter Your Last Name'/>
<input placeholder='Enter Your Email' />
 <input placeholder="Address" />
<input placeholder="City"/>
<input placeholder="phone number" /> */}
 <br />
 <input className="btn-danger submit-button" type="submit" />
 </form>

    </Col>
    {/* <Col sm={4} className="mt-3 pt-3">
        <img className="mt-5 pt-5" width="100%" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
    </Col> */}
  </Row>
</Container>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </CardActions>
    </Card>
      </Grid>
    );
};

export default Involved;