import React from 'react';
import { Box, Table, TableContainer, TableHead, TableRow, TableCell, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Container, Nav } from 'react-bootstrap';
import './AnnualConference2022.css'
import { HashLink } from 'react-router-hash-link';

const AnnualConference2022 = () => {
    return (
        <div className='container anualconferenceTable'>
                  <div className='brief-profile'>
            <Container>
            <Typography variant="subtitle1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'12px', md:"22px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)', }}>UUJP Annual Conference 2022: 50 Years of Japan-Bangladesh 
Relationship and Opportunities for Future Collaboration
<br />
<small style={{fontSize: '18px'}}>Organized by: Uddog o Uddokta Japan Association
<br />
Supported by: Toshiba International Foundation
</small>
</Typography>
        <Box sx={{ width: '100%', display: { xs: 'block', md: 'block' } }}>
            <TableContainer sx={{ width: '100%', display: { xs: 'block', md: 'block' } }} component={Paper}>
                <Table sx={{border: '' , boxShadow: '0px 0px 50px red'}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell width="40%"  style={{borderRight: '1px solid gray', }} align="center">
                                 <img width="100%" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/5221422_Bang-Japan%202.jpg" alt="" />
                                
                                 </TableCell>
                            <TableCell align="left">Japan -Bangladesh relationship was established on 10 February 1972. In 2022 It will reach 50 years. Japan is already recognized as the best friendly country for Bangladesh considering diplomatic relations and foreign aid. We believe that this relationship will be stronger and more impactful in near future. Japanese ideology for industry and social development always inspires us and we want to make it more impactful for the young generations. On this remarkable occasion, we would like to organize two days international conference virtually to show the 50 years' achievements of Japan-Bangladesh relationships as well as the future opportunities to move forward. Bangladeshi students in Japan, any Bangladeshi citizen in Japan, and Bangladeshi students from Bangladesh and any interested person will be able to participate in this conference. Japanese and Bangladeshi professors, researchers, entrepreneurs, community leaders, youth leaders will be the speaker to share the success and future opportunities from different perspectives. Also, we will publish a hardcopy souvenir to make an archive in one book bringing some remarkable stories of this relationship as well as stories of successful Bangladeshi entrepreneurs in Japan.

</TableCell>

                            

                        </TableRow>
                        <TableRow>

              
                        </TableRow>
                        </TableHead>
              
                </Table>
            </TableContainer>
        </Box>
    

        <div style={{border: '1px solid white'}}>
                               <h5 className='text-danger'>To attend this conference please register at the following link, registration is free!
</h5>
<Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/viewConferenceForm">
 <span className='style-nav text-size'>View Form</span>
 </Nav.Link>

                           </div>
            </Container>
            
        </div>

        <div className='brief-profile anualconferenceTable2 mb-5'>
            <Container>
            <Typography variant="subtitle1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'12px', md:"22px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)', }}>Entrepreneurial Directory to Celebrate 50 Years of Japan-Bangladesh Relationship

<br />
<small style={{fontSize: '18px'}}>Published by: Uddog o Uddokta Japan Association

<br />
Supported by: Toshiba International Foundation

</small>
</Typography>
        <Box sx={{ width: '100%', display: { xs: 'block', md: 'block' } }}>
            <TableContainer sx={{ width: '100%', display: { xs: 'block', md: 'block' } }} component={Paper}>
                <Table sx={{border: '' , boxShadow: '0px 0px 50px red'}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell width="40%"  style={{borderRight: '1px solid gray', }} align="center">
                                 <img width="50%" src="https://images.clipartlogo.com/files/istock/previews/9370/93701831-yellow-pages-phone-book.jpg" alt="" />
                                
                                 </TableCell>
                            <TableCell align="left">

                                <h6 className='text-danger'>To publish your profile and your business profile in above mentioned directory please submit following form: 
                                <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/viewConferenceForm">
 <span className='style-nav text-size'>View Form</span>
 </Nav.Link>

                                </h6>
</TableCell>

                            

                        </TableRow>
                        <TableRow>

              
                        </TableRow>
                        </TableHead>
              
                </Table>
            </TableContainer>
        </Box>
    

            </Container>
            
        </div>
        </div>
    );
};

export default AnnualConference2022;