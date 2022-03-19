import React, { useEffect, useState } from 'react';
import { Container, Table } from '@mui/material';
import { TableContainer, Typography } from '@mui/material';


import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

import './BriedProfileUddokta.css'






const BriedProfileUddokta = () => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch('./profile.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div className='brief-profile'>
            <Container className='my-5'>
            <Typography variant="subtitle1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'12px', md:"22px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)', }}>BRIEF PROFILE OF UDDOG OF UDDOKTA JAPAN ASSOCIATION
</Typography>
        <Box sx={{ width: '100%', display: { xs: 'block', md: 'block' } }}>
            <TableContainer sx={{ width: '100%', display: { xs: 'block', md: 'block' } }} component={Paper}>
                <Table sx={{border: '' , boxShadow: '0px 0px 50px red'}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}} align="left">Registered Name </TableCell>
                            <TableCell align="left">一般社団法人UDDOG O UDDOKTA JAPAN</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', m: 2, fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Organizing Day</TableCell>
                            <TableCell align="left">01 January 2020</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left"> Charter Day </TableCell>
                            <TableCell align="left">18 December 2020</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Registration No</TableCell>
                            <TableCell align="left">0111-05-009635</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Location</TableCell>
                            <TableCell align="left">Tokyo, Japan </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Nature Of Organization</TableCell>
                            <TableCell align="left">A social organization in Japan to promote and support  entrepreneurship management, success and sustainability</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Legal Entity</TableCell>
                            <TableCell align="left">Registered as Ippan shadan hojin ( 一般社団法人 = general incorporated association) in Japan </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Vision</TableCell>
                            <TableCell align="left">To accumulate entrepreneurs for sustainable accomplishments</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Mission  </TableCell>
                            <TableCell align="left">
                            <ul>
                                <li>To assist on building knowledge and skills about entrepreneurship
</li>
                                <li>To enrich the capability of entrepreneurs through research, regular training programs, seminars, counseling & relevant activities 
</li>
                                <li>To ensure the proper combination of theoretical study and practical business operation
</li>
                                <li>To solve contemporary social issues, and to assure creative social enterprise
</li>
                                <li>To provide all sort of possible supports to transform failure entrepreneurs into success
</li>
                            </ul>

                            
                            </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Beneficiary Groups </TableCell>
                            <TableCell align="left">
                               
                               <ul>
                                   <li>Any foreign nationals who want to start a business in Japan</li>
                                   <li>Japanese people who want to invest in foreign startups or to contribute in achieving SDG Goals</li>
                                   <li>Who want to do business from their home country with Japan</li>
                                   <li>Unprivileged communities in developing or underdeveloped countries, to help them become micro entrepreneurs</li>
                               </ul>

                                
                                
 
                          
                            </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px',backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Major Services</TableCell>
                            <TableCell align="left">

                                  <p> <span className='fw-bold'> A. Knowledge Support: </span> <br />
Research, Training, Seminar, Individual Counseling to make entrepreneurs become efficient and successful. To work with various authorities to increase <br /> the scope of entrepreneurship learning and practice. 
</p>
                                  <p> <span className='fw-bold'> B. Financial Support 
: </span> <br />
To arrange capital support for entrepreneurship startups, stand ups and stays ups. Accumulating funds from various sources, aiming for entrepreneurship development. Distributing the funds among the entrepreneurs for their development. Increasing funding by entrepreneurship activities.

</p>
                                  <p> <span className='fw-bold'> C. Sustainable Development Support: </span> <br />
                                  To assist in business operation, decision making, strategic development and ensure the use of modern business techniques for business sustainability, as well as to guide the entrepreneurs to operate businesses without creating any harmful impact on the society to ensure sustainable social development.

</p>
                            </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}   align="left">Specific Service for the Members</TableCell>
                            <TableCell  align="left"> 

                            <ul>
                                <li>Delivering training on entrepreneurship/business </li>
                                <li>Individual counseling to the entrepreneurs</li>
                                <li>Provide legal counseling for business operations in Japan</li>
                                <li>Rendering help in business fund/capital sourcing</li>
                                <li> Regular counseling & training on capital management</li>
                                <li>Help to enhance the eligibility of the workers</li>
                                <li>Render help in accounts management in business </li>
                                <li>Regular supervision for the continuity of the profit of the business </li>
                                <li>Assuring the benefit of using technology & modern/updated business policy</li>
                                <li>Joint effort for market development for sustainable benefits</li>
                                
                            </ul>
                            
                            
                         
</TableCell>
                            

                        </TableRow>
                    </TableHead>
                  
                       
                </Table>
            </TableContainer>
        </Box>
        
            </Container>
            
        </div>
    );
};

export default BriedProfileUddokta;