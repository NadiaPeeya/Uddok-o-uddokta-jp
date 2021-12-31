import React from 'react';
import './DonorBanner.css'
import img from '../../images/112.jpg'
import Box from '@mui/material/Box';

const DonorBanner = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner donorBannerImg">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
        </div>

        <div className="container py-5">


<Box className='donor-next-section' sx={{ bgcolor: '', height: '100%' }}>
<div >
   
   <h1 className="news1-heading">Win your chance to donate for the  sustainable development <br /> of society</h1>
   <p sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">

<h6 className='list-item text-primary'> Benefits:</h6>
<ul sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">
<li className='list-item'>Giving to charity makes you feel good
</li>
<li className='list-item'>Giving to charity strengthens personal values
</li>
<li className='list-item'>It helps to protect your community

</li>
<li className='list-item'>It helps to solve social problems and create larger impact for social development 
</li>
<li className='list-item'>Charity enables you to give more meaning to your life
</li>
</ul>


<br />


<h6 className='list-item text-primary'> Eligibility:</h6>
<ul sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">
<li className='list-item'>From any country 
</li>
<li className='list-item'>Legal financial sources 

</li>
</ul>
<br />
<br />


</p>
</div>
    </Box> 
    <Box className='mx-auto '>
        <h1 className="text-primary">Enlistment as Donor </h1>
        <p sx={{textAlign: 'center', color: '#354252' }} className="donor-form-text container fs-4 fw-bolder">Please register here to become enlisted donor and to be a social change maker:
</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScNbaX7AWA9BhXA3C3UEh7zEeeRUeehEPYWdIakfwJkgo94Aw/viewform?embedded=true" className='donor-form' width="1240" height="2454" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Box>

</div>


      </div>
    );
};

export default DonorBanner;