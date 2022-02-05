import React from 'react';
import { Box } from '@mui/material';

const EventPage = (props) => {
    const {description, img1, name,description2, objectivesName, list1, list2, list3,list4, name1,duration, period, Reporting, Department, FinancialManagement, NoOfVacancies, Eligibility, Application,Email


        , WorkMedium, description3, description4, Date, Time, Venue} = props.event;
    return (
        <div className="container py-5">


        <Box className='' sx={{ bgcolor: '', height: '100%' }}>
        <div >
           
           <h1 className="news1-heading">{name} </h1>
           <p sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6"> 
         
         
          <p className='fw-bold'>{Date} </p> 
           
       <p className='fw-bold'>{Time}</p> 
          
          <p className='fw-bold'> {Venue}</p>
           
</p>
            
           <p sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6"> {description2}
<br />
<br />
<h6 className='list-item text-primary'> {objectivesName}</h6>
{/* <ul sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">
<li className='list-item'>{duration} {list1}</li>
  <li className='list-item'>{period}{list2} 
</li>
  <li className='list-item'> {Reporting}{list3}
</li>
  <li className='list-item'> {Department}{list4}
</li>
</ul> */}


{list1} <span className='fw-bold'>{duration}</span>

<br />

{list2}<span className='fw-bold'>{period}</span>
<br />
<span className='fw-bold'>{WorkMedium}</span>

{list3}<span className='fw-bold'>{Reporting}</span>

<br />

{list4}<span className='fw-bold'>{Department}</span>
<br />
<br />
{description3}<span className='fw-bold'>{FinancialManagement}</span>
<br />
{description4}<span className='fw-bold'>{NoOfVacancies}</span>
<br />
<span className='fw-bold'>{Eligibility}</span>
<br />
<span className='fw-bold'>{Application}</span>
<br />
<span className='fw-bold'>{Email}</span>
</p>
</div>
            </Box> 
            
   </div>
    );
};

export default EventPage;