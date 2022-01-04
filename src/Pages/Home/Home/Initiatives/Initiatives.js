import React from 'react';

import Typography from '@mui/material/Typography';
import { Button, Card } from 'react-bootstrap';
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import { Container } from '@mui/material';
import './Initiatives.css'
import img1 from '../../../../images/erisa.png';
import img2 from '../../../../images/sanrin.png';
import img3 from '../../../../images/zhumka2.jpg';
import img4 from '../../../../images/misaki2.png';
import img5 from '../../../../images/lesd.jpg';
import img6 from '../../../../images/mi.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Initiatives = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 4,
  //   speed: 500
  // };

    return ( 
      
      <div data-aos="zoom-in-up" className='initiative-section container'>
        <div className='initiatives-div mb-5 pb-3'>
          <h1 className='entrepreneurial-text text-primary'>Entrepreneurial Initiatives </h1>
          <p className='text-black-50'>We are closely working with new and existing entrepreneurs for their organizational development as well as for social development. <br /> They have taken our various services at different times. We wish them continued success and more impact on society.
</p>
        </div>
      
        <div className="row">
        <Carousel breakPoints={breakPoints}>
          <div className="col-md-3 initiatives-box">
            <div>
            <img className='initiatives-img' width="100%" src={img1} alt="" />
            </div>
          
            <div className='initiatives-text-style'>
            <h4 className='my-3'>Erisa Limited</h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>

            
       
          </div>
          <div className="col-md-3 initiatives-box">
            <div>
            <img className='initiatives-img' width="62%" src={img2} alt="" />
            </div>
          
            <div className='initiatives-text-style'>
            <h4 className='my-3'>Sanrin Global Ltd
</h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>

            
          </div>
          <div className="col-md-3 initiatives-box">
          
            <div>
            <img className='initiatives-img' width="50%" src={img3} alt="" />
            </div>
         
            <div className='initiatives-text-style'>
            <h4 className='my-3'>Zhumka Bangladesh </h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>

            
          </div>
          <div className="col-md-3 initiatives-box">
            <div>
            <div>
            <img className='initiatives-img' width="50%" src={img4} alt="" />
            </div>
         
            <div className='initiatives-text-style'>
            <h4 className='my-3'>Misaki</h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>
            </div>

            

          </div>
          <div className="col-md-3 initiatives-box">
            <div>
            <div>
            <img className='initiatives-img' width="50%" src={img5} alt="" />
            </div>
         
            <div className='initiatives-text-style'>
            <h4 className='my-3'>Lesd It Solution
</h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>
            </div>

            

          </div>
          <div className="col-md-3 initiatives-box">
            <div>
            <div>
            <img className='initiatives-img' width="100%" src={img6} alt="" />
            </div>
         
            <div className='initiatives-text-style'>
            <h4 className='my-3'>M I International Ltd</h4>
            <div className='social-media-initiatives'>
            <i class="fab fa-facebook facebook"></i>
            <i class="fas fa-pager website"></i>
            <i class="fab fa-youtube youtube"></i>
            <i class="fab fa-instagram-square instagram"></i>
            <i class="fab fa-twitter-square twitter"></i>
            </div>
            </div>
            </div>

            

          </div>
          </Carousel>
        </div>
        
      </div>


// <div className='initiative-section container'>
//         <h2>Center Mode</h2>
//         <Slider {...settings} className='container g-5 row'>
         
//           <div className='initiatives-box col-md-3'>
//           <div>
//             <img className='initiatives-img' width="100%" src={img1} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//           <div className='initiatives-box col-md-3'>
//           <div >
//             <img className='initiatives-img' width="70%" src={img2} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//           <div className='initiatives-box col-md-3'>
//           <div >
//             <img className='initiatives-img' width="50%" src={img3} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//           <div className='initiatives-box col-md-3'>
//           <div >
//             <img className='initiatives-img' width="50%" src={img4} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//           <div className='initiatives-box col-md-3'>
//           <div >
//             <img className='initiatives-img' width="50%" src={img5} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//           <div className='initiatives-box col-md-3'>
//           <div >
//             <img className='initiatives-img' width="100%" src={img6} alt="" />
//             </div>
          
//             <div className='initiatives-text-style'>
//             <h3 className='my-3'>Erisa Limited</h3>
//             <div className='social-media-initiatives'>
//             <i class="fab fa-facebook"></i>
//             <i class="fas fa-pager website"></i>
//             <i class="fab fa-youtube youtube"></i>
//             <i class="fab fa-instagram-square instagram"></i>
//             <i class="fab fa-twitter-square twitter"></i>
//             </div>
//             </div>
//           </div>
//         </Slider>
//       </div>



    );
};

export default Initiatives;