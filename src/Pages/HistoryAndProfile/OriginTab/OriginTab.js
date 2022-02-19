import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import img from '../../../images/Capture2.PNG'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OriginTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
          <Box sx={{ width: '100%', backgroundColor:'#212121' , padding: 5, marginBottom: '55px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  style={{margin: '5px' , }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color: 'white'}} label="NATURE OF ORGANIZATION 
" {...a11yProps(0)} />
          <Tab style={{color: 'white'}}  label="LEGAL IDENTITY
" {...a11yProps(1)} />
          <Tab style={{color: 'white'}}  label="JOURNEY IN JAPAN " {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel style={{textAlign:  'justify', pY: 5 , marginTop: 15}} value={value} index={0}>
      <Container>
<Grid container spacing={6} style={{}}>
        <Grid item xs={12} md={6}>
         <img width="100%" src={img} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography style={{textAlign: 'left', color: 'white', fontWeight: '600'}} variant="h6" gutterBottom component="div">
        NATURE OF ORGANIZATION
      </Typography>
      <Typography style={{textAlign: 'justify', color: '#d7ccc8'}} variant="body1" gutterBottom>
      It is an international social welfare organization/initiative to promote and support entrepreneurship development, success, and sustainability.


      </Typography>
        </Grid>
      </Grid>
     </Container>
      </TabPanel>
      <TabPanel style={{textAlign:  'justify', pY: 5 , marginTop: 15}} value={value} index={1}>
      <Container>
<Grid container spacing={6} style={{}}>
        <Grid item xs={12} md={6}>
         <img width="100%" src={img} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography style={{textAlign: 'left', color: 'white', fontWeight: '600'}} variant="h6" gutterBottom component="div">
        LEGAL IDENTITY

      </Typography>
      <Typography style={{textAlign: 'justify', color: '#d7ccc8'}} variant="body1" gutterBottom>
      It will be registered as a social organization in those countries where it will be operating as per following that country’s laws. The Other organization will stay in Bangladesh. All organizations worldwide will have to be linked and authorized by the mother organization. 

      </Typography>
        </Grid>
      </Grid>
     </Container>
      </TabPanel>
      <TabPanel style={{textAlign:  'justify', pY: 5 , marginTop: 15}} value={value} index={2}>
      <Container>
<Grid container spacing={6} style={{}}>
        <Grid item xs={12} md={6}>
         <img width="100%" src={img} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography style={{textAlign: 'left', color: 'white', fontWeight: '600'}} variant="h6" gutterBottom component="div">
        JOURNEY IN JAPAN 


      </Typography>
      <Typography style={{textAlign: 'justify', color: '#d7ccc8'}} variant="body1" gutterBottom>
      In 2020 “Uddog o Uddokta” has started its broad scale activities as an individual social organization in Japan. First organizing meeting was held in Japan on 01 January 2020.  In Japan we are working on entrepreneurship development for Japan market as well as to make connection with global entrepreneurship market. We registered as social organization in Japan on 18 December 2020. 


      </Typography>
        </Grid>
      </Grid>
     </Container>

      </TabPanel>
    </Box>
      </Container>
    
  );
}