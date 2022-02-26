import React from 'react';
import { Card } from 'react-bootstrap';
import './BlogBanner.css'

const BlogBanner = () => {
    return (
        <Card className="bg-dark text-white blog-banner border-0">
        <Card.Img src='https://i.ibb.co/9rYdgW0/img-slider-2-1.jpg' alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card>
    );
};

export default BlogBanner;