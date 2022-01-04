import React from 'react';
import './AreYouReady.css'
import Button from '@mui/material/Button';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
const AreYouReady = () => {
    return (
        <div data-aos="zoom-in-up" className='AreYouReady'>
            <div>
            <h2 className='text-white'>Anyone Can Be a Volunteer. Also You</h2>
          <p className='areyouready-text text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore qui totam sunt veritatis id adipisci corrupti mollitia assumenda quo! Aliquid iusto unde quas suscipit cum <br /> laudantium tenetur mollitia alias impedit!</p>
<Button><Nav.Link className="style-member-1 hover-underline-animation" as={HashLink} to="/MemberForm"><span className='style-member'>BECOME A MEMBER</span></Nav.Link>
</Button>
            </div>
   
        </div>
    );
};

export default AreYouReady;