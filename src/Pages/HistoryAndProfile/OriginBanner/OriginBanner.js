import React from 'react';
import { Card } from 'react-bootstrap';
import './OriginBanner.css'


const OriginBanner = () => {
    return (
        <div className='origin'>
 <Card  className="bg-dark text-white blog-banner ">
        <Card.Img className='origin' src='https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/128361604_10225283606781814_5070873124260733871_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8631f5&_nc_ohc=psp3ltM0TqAAX_65ziL&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_2dRthfsxfBisJS3jyg7GVgg-Hw28tHr_1zqTJkU12FQ&oe=623702F5' alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card>
        </div>

       
    );
};

export default OriginBanner;