import React from 'react';
import Box from '@mui/material/Box';
import img from '../../../images/investor-1.jpg'

const InvestorBanner = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner donorBannerImg">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
        </div>

        <div className="container py-5">


<Box className='' sx={{ bgcolor: '', height: '100%' }}>
<div >
   
   <h1 className="news1-heading">Opportunity to create a social impact through investing in youth innovations and dedications. You can be an enlisted  investor <br /> with us to create larger and quick social impacts. 
</h1>
   <p sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">

<h6 className='list-item text-primary'> Benefits:</h6>
<ul sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">
<li className='list-item'>Meet interesting people with fascinating ideas


</li>
<li className='list-item'>
High-Risk High Return

</li>
<li className='list-item'>Diversifying Opportunities


</li>
<li className='list-item'>Investment is all about securing the future and getting good returns in the coming years.
</li>

</ul>


<br />


<h6 className='list-item text-primary'> Eligibility:</h6>
<ul sx={{textAlign: 'justify', color: '#354252' }} className="news1 container fs-6">
<li className='list-item'>From any country 
</li>
<li className='list-item'>Legal financial sources 

</li>
<li className='list-item'>Ability to take risk and interested on new initiatives

</li>
</ul>
<br />
<br />


</p>
</div>
    </Box> 
    <Box className='mx-auto'>
        <h1 className="text-primary">Enlistment as Investor
</h1>
        <p sx={{textAlign: 'center', color: '#354252' }} className="donor-form-text container fs-4 fw-bolder">Please register here to become enlisted angel investor:

</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFGn7FpJ46rYPlVvb5uBUzBm42xujo0HDoMlveSl1cCEYTgg/viewform?embedded=true" width="640" height="2299" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Box>

</div>


      </div>
    );
};

export default InvestorBanner;