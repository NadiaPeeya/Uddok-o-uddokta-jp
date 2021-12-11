import React from 'react';
import { CopyrightOutlined, Place, CopyrightSharp, EmailOutlined, FacebookOutlined, PhoneAndroidOutlined, Twitter } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';


const Footer = () => {
    const style = {
        backgroundColor: 'rgb(35, 34, 34)',
        color: '#D8D2BE',
        textAlign: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        position: "static",
        left: "0",
        bottom: "0",

        width: "100%",
        marginTop: '350px'
    }
    return (
        <div style={style} >
        <Container >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{paddingY:4}} variant="h4">Contact us!</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid direction="column" align="left" item xs={6}>
                            <FacebookOutlined sx={{ marginX: 1 }} /> @Uddog O uddogta Japan
                        </Grid>
                        <Grid direction="column" align="left" item xs={6}>
                            <Twitter sx={{ marginX: 1 }} /> @Uddog O uddogta Japan
                        </Grid>
                        <Grid direction="column" align="left" item xs={6}>
                            <EmailOutlined sx={{ marginX: 1 }} /> info.uujp@gmail.com
                        </Grid>
                        <Grid direction="column" align="left" item xs={6}>
                            <PhoneAndroidOutlined sx={{ marginX: 1 }} />  +81-80-9666-8105
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{paddingY:4}} variant="h4">Address</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid direction="column" align="center" item xs={12}>
                            <Place />
                            <Typography variant="body2">
                                  Shinjuku Park Tower,N30F, <br />
                                  3-7-1 Nishishinjuku,
                                 Shinjuku-ku, 
 <br />
 Tokyo 163-1030, Japan <br />
                              
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <Typography variant="subtitle1">Uddog O uddogta Japan.</Typography>
            <Typography variant="subtitle1">Copyright all right reserved <CopyrightOutlined /></Typography>

        </Container>
    </div>
    );
};

export default Footer;