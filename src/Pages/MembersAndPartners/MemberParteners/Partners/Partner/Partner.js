import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Card } from 'react-bootstrap';
import './partner.css'

const Partner = (props) => {
    const {name, NatureOrganization,projects, countryName} =  props.partner;
    return (
        <Grid xs={12} md={12}>
         <div  className="card my-5  partners mx-auto">
<div className="row g-0">
<div className="col-md-5">
  <img width="75%" src="https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/87813274_10221409419609556_4984182300011921408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGr9kIj8e2PZ2zSa2ULI5hOZmITJnHO5MhmYhMmcc7kyF_NhlKIv2MvUOGBBMwbxY0wKulLdFknrnoF2Iv6mwcI&_nc_ohc=WuIIVnbZE2cAX-T1gTk&_nc_ht=scontent.fdac39-1.fna&oh=00_AT952GA30xrNfIbYrJGJ9NlLUSLItHshSUkM84lYLwHpJQ&oe=623EDD90" className="img-fluid rounded-start" alt="..."/>
</div>
<div className="col-md-7">
  <div className="card-body">
   <p style={{textAlign: 'left' , fontWeight: '600'}}>Name: {name}</p>
   <p style={{textAlign: 'left', fontWeight: '600'}}>Nature of organization: {NatureOrganization}</p>
   <p style={{textAlign: 'left', fontWeight: '600'}}>  {projects}</p>
   
   <p style={{textAlign: 'left', fontWeight: '600'}}>Country: {countryName} </p>

   
    
  </div>
</div>
</div>
</div> 




</Grid>

    );
};

export default Partner;