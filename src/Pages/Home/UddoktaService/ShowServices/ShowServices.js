import React from 'react';
import './ShowServices.css'

const ShowServices = (props) => {
    const {img, name} = props.service;
    return (
        <div data-aos="zoom-in-up" className="col card-style">
        <div className="card h-100 show-detail">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div>
    
    );
};

export default ShowServices;