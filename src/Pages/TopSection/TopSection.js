import React from 'react';
import './TopSection.css'

const TopSection = () => {
    return (

        <div data-aos="zoom-in-up" className='top-up'>
  <div className="row container TopSection mx-auto g-2">
                <div className="col-md-4 col-sm-12">
                    <div className='topSection-box'>
                        <div className='icon-color mx-auto'>
                        <i class="fas fa-paper-plane"></i>
                        </div>
                        <div className='topSection-text'>
                            <div>
                            <h4 sx={{color: "#666666"}}>Our Mission</h4>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque!</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className='topSection-box'>
                        <div className='icon-color mx-auto'>
                        <i class="fas fa-heart"></i>
                        </div>
                        <div className='topSection-text'>
                            <div>
                            <h4 sx={{color: "#666666"}}>Help & Support</h4>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque!</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className='topSection-box'>
                        <div className='icon-color mx-auto'>
                        <i class="fas fa-boxes"></i>
                        </div>
                        <div className='topSection-text'>
                            <div>
                            <h4 sx={{color: "#666666"}}>Our Programs</h4>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque!</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
          
        
    );
};

export default TopSection;