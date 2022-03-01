import React, { useEffect, useState } from 'react';
import { Container, Table } from '@mui/material';
import { Alert, Button, Link, TableContainer, Typography } from '@mui/material';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { DeleteForeverOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';


const profile = [{
    registeredName: '一般社団法人UDDOG O UDDOKTA JAPAN',
    englishName: 'Uddog of Uddokta Japan Association',
    OrganizingDay : '01 January 2020',
    CharterDay : '18 December 2020',
    RegistrationNo: '0111-05-009635',
    Location: 'Tokyo, Japan ',
    NatureOfOrganization: 'A social organization in Japan to promote and support  entrepreneurship management, success and sustainability. ',
    LegalEntity: 'Registered as Ippan shadan hojin ( 一般社団法人 = general incorporated association) in Japan ',
    Vision: 'To accumulate entrepreneurs for sustainable accomplishments',
    Mission : 'To assist on building knowledge and skills about entrepreneurship.To enrich the capability of entrepreneurs through research, regular training programs, seminars, counseling & relevant activities To ensure the proper combination of theoretical study and practical business operation To solve contemporary social issues, and to assure creative social enterprise . To provide all sort of possible supports to transform failure entrepreneurs into success',
    BeneficiaryGroups: '1. Any foreign nationals who want to start a business in Japan. 2. Japanese people who want to invest in foreign startups or to contribute in achieving SDG Goals. 3. Who want to do business from their home country with Japan. 4. Unprivileged communities in developing or underdeveloped countries, to help them become micro entrepreneurs',
    MajorServices: 'Knowledge Support Research, Training, Seminar, Individual Counseling to make entrepreneurs become efficient and successful. To work with various authorities to increase the scope of entrepreneurship learning and practice.Financial Support To arrange capital support for entrepreneurship startups, stand ups and stays ups. Accumulating funds from various sources, aiming for entrepreneurship development. Distributing the funds among the entrepreneurs for their development. Increasing funding by entrepreneurship activities.Sustainable Development Support To assist in business operation, decision making, strategic development and ensure the use of modern business techniques for business sustainability, as well as to guide the entrepreneurs to operate businesses without creating any harmful impact on the society to ensure sustainable social development.',
    SpecificServicefortheMembers : 'Delivering training on entrepreneurship/business Individual counseling to the entrepreneurs Supporting newcomers to make all necessary documents for starting business in Japan Provide legal counseling for business operations in Japan Rendering help in business fund/capital sourcing Regular counseling & training on capital management Help to enhance the eligibility of the workers Render help in accounts management in business Regular supervision for the continuity of the profit of the business Assuring the benefit of using technology & modern/updated business policy Joint effort for market development for sustainable benefits'
}]




const BriedProfileUddokta = () => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch('./profile.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div>
            <Container className='my-5'>
            <Typography variant="subtitle1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'12px', md:"22px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)' }}>BRIEF PROFILE OF UDDOG OF UDDOKTA JAPAN ASSOCIATION
</Typography>
        <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
            <TableContainer component={Paper}>
                <Table sx={{border: '' , boxShadow: '0px 0px 50px red'}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}} align="left">Registered Name </TableCell>
                            <TableCell align="center">一般社団法人UDDOG O UDDOKTA JAPAN</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', m: 2, fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Organizing Day</TableCell>
                            <TableCell align="center">01 January 2020</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left"> Charter Day </TableCell>
                            <TableCell align="center">18 December 2020</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Registration No</TableCell>
                            <TableCell align="center">0111-05-009635</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Location</TableCell>
                            <TableCell align="center">Tokyo, Japan </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Nature Of Organization</TableCell>
                            <TableCell align="center">A social organization in Japan to promote and support  entrepreneurship management, success and sustainability</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Legal Entity</TableCell>
                            <TableCell align="center">Registered as Ippan shadan hojin ( 一般社団法人 = general incorporated association) in Japan </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Vision</TableCell>
                            <TableCell align="center">To accumulate entrepreneurs for sustainable accomplishments</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px', backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Mission  </TableCell>
                            <TableCell align="justify">
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
                            <TableCell align="justify">
                                <p>1.Any foreign nationals who want to start a business in Japan </p>
                                <p>2.Japanese people who want to invest in foreign startups or to contribute in achieving SDG Goals
 </p>
                                <p>3.Who want to do business from their home country with Japan
 </p>
                                <p>4. Unprivileged communities in developing or underdeveloped countries, to help them become micro entrepreneurs
 </p>
                          
                            </TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>

                            <TableCell style={{borderRight: '1px solid gray', fontWeight: '900', fontSize: '16px',backgroundColor: 'rgb(35, 34, 34)', color: 'white'}}  align="left">Major Services</TableCell>
                            <TableCell align="justify">

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
                            <TableCell  align="justify"> 
                            
                            
                          <p>1.Delivering training on entrepreneurship/business </p>  
<p>2.Individual counseling to the entrepreneurs</p>  
<p>3. Supporting newcomers to make all necessary documents for starting business in Japan</p> 
 <p>4. Provide legal counseling for business operations in Japan </p>
<p>5. Rendering help in business fund/capital sourcing</p>
<p>6. Regular counseling & training on capital management</p>
<p>7. Help to enhance the eligibility of the workers</p>
<p>8. Render help in accounts management in business </p>
<p>9. Regular supervision for the continuity of the profit of the business </p>
<p>10. Assuring the benefit of using technology & modern/updated business policy </p>
<p>11. Joint effort for market development for sustainable benefits </p>

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