import React from 'react';
import { Card } from 'react-bootstrap';
import './OriginBanner.css'
import img from '../../../images/aboutUsBanner.jpg'


const OriginBanner = () => {
    return (
        <div className='origin'>
 <Card  className=" text-white blog-banner ">
        <Card.Img className='origin' src={img} alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card>
        </div>

       
    );
};

export default OriginBanner;