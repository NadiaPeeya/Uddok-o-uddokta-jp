import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../../images/UUJ Main Banner .png'

const AnnualEventBanner2022 = () => {
    return (
        <div>
                   <div className='container'>
 <Card  className=" text-white blog-banner ">
        <Card.Img className='' src={img} alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card>
        </div>
        </div>
    );
};

export default AnnualEventBanner2022;