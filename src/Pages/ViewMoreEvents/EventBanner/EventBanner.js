import React from 'react';
import { Card } from 'react-bootstrap';

const EventBanner = (props) => {
    const {img} = props.event;
    return (
        <div>
           <Card className="text-white">
        <Card.Img className='img-fluid' src={img} 
        alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card> 
        </div>
    );
};

export default EventBanner;