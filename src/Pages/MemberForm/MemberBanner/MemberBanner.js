import React from 'react';
import img from '../../../images/mentorBanner.jpg'
import Box from '@mui/material/Box';
const MemberBanner = () => {
    return (
      
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner donorBannerImg">
          <div className="carousel-item active">
            <img src="https://icheme-images.azureedge.net//media/7224/membergroups-new-700x395.jpg?width=710&height=400&quality=90&mode=crop&scale=both&center=0,0" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <Box className='mx-auto my-5 py-5'>
        <h1 className="text-primary">Enlistment as Member
</h1>
        <p sx={{textAlign: 'center', color: '#354252' }} className="donor-form-text container fs-4 fw-bolder">Please register here to become enlisted angel Member:

</p>

<iframe src="https://docs.google.com/forms/d/1yys2RedGMVT5hWsUHVi_5S0s3WFn5ZYoU_LSzxBd5xo/edit" width="1200" height="2299" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Box>

        </div>
    );
};

export default MemberBanner;