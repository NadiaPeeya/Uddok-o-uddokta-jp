import React from 'react';
import { Card } from 'react-bootstrap';
import './BlogBanner.css'

const BlogBanner = () => {
    return (
        <Card className="bg-dark text-white blog-banner">
        <Card.Img src="https://i.ibb.co/MkVqS6d/cover-image-2.jpg" alt="Card image" />
        <Card.ImgOverlay>        
        </Card.ImgOverlay>
      </Card>
    );
};

export default BlogBanner;