import React from 'react';
import { Box, Typography } from '@mui/material';

const ProgramDetails = () => {
    return (
        <Box  className='about' id="aboutUs" sx={{ flexGrow: 1,  backgroundColor: ''}}>
        
        <div className="container whatWeAre">
        <div className="row">
            <div className="col-md-6">
                <img className='img-about' width="85%" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/279082648_503204121505157_2544891356422406429_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_HM5pIL7ME4AX_w6sPV&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-vFibm34MKH1_-s_4nR5O62HwwR1LVg4_m5iOmWNzLeQ&oe=62913642" alt="" /> 
             
            </div>
           
            <div className="col-md-6 whatweare">
                <div className='whatweare-text'>


<Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'cambria', fontWeight: 700, textAlign: 'start', color: '#0D6EFD'}}>
          Program Details
  
      </Typography>
      <Typography variant="p" component="div" gutterBottom sx={{fontFamily: 'cambria',  textAlign: 'justify', color: '#354252'}}>
      Plenary Session 1: Japan-Bangladesh 50 Years Relationship <br />
Plenary Session 2: SDGs and Entrepreneurship: Japan-Bangladesh Perspective
<br />
Plenary Session 3:Emerging Youth and Women Entrepreneurs (Entrepreneurial activity and their challenges) <br />
Plenary Session 4: Story of Failures <br />
Plenary Session 5: Startup Preparation for Japanese Market and Others
<br />
<br />
  <button>Download Pdf</button>

      </Typography>
                </div>
    
            </div>
          
   
        </div>
        
    </div>
    </Box>
    );
};

export default ProgramDetails;