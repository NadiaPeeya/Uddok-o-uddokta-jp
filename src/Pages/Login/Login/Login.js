import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const {user, signInWithGoogle, loginUser, isLoading, authError} = useAuth()
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleLoginSubmit = e => {
         loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
       <Container>
<Grid container spacing={2}>
  <Grid item sx={{mt: 18}} xs={12} md={6}>
  <Typography variant="body1" gutterBottom>
         Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Email"
      type="email"
      name="email" 
      onBlur={handleOnBlur}
      variant="standard" />
        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                           onBlur={handleOnBlur}
                            variant="standard" />
                            
                            <Button sx={{width: '75%', m: 1}} 
                            type="submit"
                            variant="contained">Login</Button>
                            
                        {
          isLoading && <CircularProgress />
      }
   
    
      </form>
      <Button onClick={handleGoogleSignIn} sx={{width: '75%', m: 1}} 
                            type="submit"
                            variant="contained">Sign In With Google</Button>
                            <br />
                            <Link sx={{width: "75%", textDecoration: 'none'}} to="/register">New User? Please Register</Link>
                            {
          authError && <Alert severity="error">This Email does not exists</Alert>
      }
                            
  </Grid>
  <Grid item xs={12} md={6}>
<img width="100%" src="https://www.bracbank.com/uddokta_101/image/service/partner.png" alt="" />
  </Grid>

</Grid>
       </Container>
    );
};

export default Login;