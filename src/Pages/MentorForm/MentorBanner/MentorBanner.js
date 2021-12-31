import React from 'react';
import img from '../../../images/mentorBanner.jpg'
import Box from '@mui/material/Box';
const MentorBanner = () => {
    return (

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner donorBannerImg">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <Box className='mx-auto my-5 py-5'>
        <h1 className="text-primary">Enlistment as Mentor
</h1>
        <p sx={{textAlign: 'center', color: '#354252' }} className="donor-form-text container fs-4 fw-bolder">Please register here to become enlisted angel Mentor:

</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2vLYCOLVnVPV7fCjtA8pQZi9drwrU8dpeYxfVg-nLDjJ69g/viewform?usp=sf_link" width="1240" height="2299" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Box>

        </div>
    );
};

export default MentorBanner;