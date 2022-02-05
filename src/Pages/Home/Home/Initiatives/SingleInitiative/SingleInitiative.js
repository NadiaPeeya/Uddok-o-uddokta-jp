import React from 'react';

const SingleInitiative = (props) => {
    const {img,name} = props.initiative;
    return (
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="80%" src={img} alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>{name}</h4>
        <div className='social-media-initiatives'>
        <i class="fab fa-facebook facebook"></i>
        <i class="fas fa-pager website"></i>
        <i class="fab fa-youtube youtube"></i>
        <i class="fab fa-instagram-square instagram"></i>
        <i class="fab fa-twitter-square twitter"></i>
        </div>
        </div>

        
   
      </div>
    );
};

export default SingleInitiative;