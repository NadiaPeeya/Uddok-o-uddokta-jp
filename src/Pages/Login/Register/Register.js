import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth()
    const history = useHistory();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
      if(loginData.password !== loginData.password2){
          alert('Your password did not match')
          return
      }

        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
<Grid container spacing={2}>
  <Grid item sx={{mt: 18}} xs={12} md={6}>
  <Typography variant="body1" gutterBottom>
         Register
      </Typography>
      {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField 
      required
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Name"
      type="text"
      name="name" 
      onBlur={handleOnBlur}
      variant="standard" />
      <TextField 
      required
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Email"
      type="email"
      name="email" 
      onBlur={handleOnBlur}
      variant="standard" />
        <TextField          required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                           onBlur={handleOnBlur}
                            variant="standard" />
        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-basic"
                            label="ReType your Password"
                            type="password"
                            name="password2"
                           onBlur={handleOnBlur}
                            variant="standard" />
                            
                            <Button sx={{width: '75%', m: 1}} 
                            type="submit"
                            variant="contained">Login</Button>
                             <NavHashLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already registered? Please login</Button>
                        </NavHashLink>
                        {
          isLoading && <CircularProgress />
      }
      {
          user?.email && <Alert  severity="success">Your Account has been created successfully</Alert>
      }
      {
          authError && <Alert severity="error">{authError}</Alert>
      }
      </form> 
      
    
      
      
      }
      
  </Grid>
  <Grid item xs={12} md={6}>
<img width="100%" src="https://www.bracbank.com/uddokta_101/image/service/partner.png" alt="" />
  </Grid>

</Grid>
       </Container>
    );
};

export default Register;