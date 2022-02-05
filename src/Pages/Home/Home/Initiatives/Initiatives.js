import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { Button, Card } from 'react-bootstrap';
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import { Container, stepperClasses } from '@mui/material';
import './Initiatives.css'
import img1 from '../../../../images/erisa.png';
import img2 from '../../../../images/sanrin.png';
import img3 from '../../../../images/zhumka2.jpg';
import img4 from '../../../../images/misaki2.png';
import img5 from '../../../../images/lesd.jpg';
import img6 from '../../../../images/mi.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';

import SingleInitiative from './SingleInitiative/SingleInitiative';



const initiatitives = [
  {
    id:1,
    img: "",
    name: "",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",
    
  },
  {
    id:2,
    img: "https://i.ibb.co/2ygrvvW/misaki.jpg",
    name: "Misaki",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",

  },
  {
    id:3,
    img: "https://i.ibb.co/JqvtxdV/mi.jpg",
    name: "M I International Ltd",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",

  },
  {
    id:4,
    img: "https://i.ibb.co/Db2M4jy/erisa.png",
    name: "Erisa Limited",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",

  },
  {
    id:5,
    img: "https://i.ibb.co/nQc3v3R/zhumka2.jpg",
    name: "Zhumka Bangladesh",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",

  },
  {
    id:6,
    img: "https://i.ibb.co/HYtMMR3/lesd.jpg",
    name: "Lesd It Solution",
    facebookLink: "",
    youtubeLink: "",
    websiteLink: "",
    youtubeLink: "",
    instagramLink: "",
    twitterLink: "",

  }
]

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Initiatives = () => {
 

    return ( 
      <div className='top-initiatives'>
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
        <img className='' height="100%" width="60%" src="https://i.ibb.co/nwtDHTn/sanrin.png" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>Sanrin Global Ltd</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/SanrinGakkou"><i class="fab fa-facebook facebook"> </i></Card.Link>

        <Card.Link className='link-color-change' target="_blank" href="http://www.sanringlobal.jp/"><i class="fas fa-pager website"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href="https://www.youtube.com/channel/UC4Zj1RZa0v7pVY4YeeGUgCQ"><i class="fab fa-youtube youtube"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href="https://www.instagram.com/sanringlobal/"><i class="fab fa-instagram-square instagram"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href="https://twitter.com/sanringlobal"> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        
        
        
       
        </div>
        </div>

        
   
      </div>
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="100%" src="https://i.ibb.co/Db2M4jy/erisa.png" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>Erisa Limited</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-facebook facebook"> </i></Card.Link>

        <Card.Link className='link-color-change' target="_blank" href="https://erisaltd.co.jp/"><i class="fas fa-pager website"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-youtube youtube"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-instagram-square instagram"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        </div>
        </div>

        
   
      </div>
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="90%" src="https://i.ibb.co/JqvtxdV/mi.jpg" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>M I International Ltd
</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-facebook facebook"> </i></Card.Link>

        <Card.Link className='link-color-change' target="_blank" href="https://miinternational.co.jp/"><i class="fas fa-pager website"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-youtube youtube"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-instagram-square instagram"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        </div>
        </div>

        
   
      </div>
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="45%" src="https://i.ibb.co/2ygrvvW/misaki.jpg" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>Misaki</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/misakithebeautybloom/"><i class="fab fa-facebook facebook"> </i></Card.Link>

        <Card.Link className='link-color-change' target="_blank" href="https://www.misakibd.com/"><i class="fas fa-pager website"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-youtube youtube"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href="https://www.instagram.com/misaki_the_beauty_bloom/"><i class="fab fa-instagram-square instagram"></i></Card.Link>
        <Card.Link className='link-color-change' target="_blank" href=""> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        </div>
        </div>

        
   
      </div>
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="45%" src="https://i.ibb.co/HYtMMR3/lesd.jpg" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>Lesd It Solution</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/LesdItSolution"><i class="fab fa-facebook facebook"> </i></Card.Link>

<Card.Link className='link-color-change' target="_blank" href="http://lesdsolutions.com/"><i class="fas fa-pager website"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-youtube youtube"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-instagram-square instagram"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        </div>
        </div>

        
   
      </div>
        <div className="col-md-3 initiatives-box">
        <div>
        <img className='' height="100%" width="40%" src="https://i.ibb.co/nQc3v3R/zhumka2.jpg" alt="" />
        </div>
      
        <div className='initiatives-text-style'>
        <h4 className='my-3'>Zhumka Bangladesh</h4>
        <div className='social-media-initiatives'>
        <Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/zhumkabangladesh"><i class="fab fa-facebook facebook"> </i></Card.Link>

<Card.Link className='link-color-change' target="_blank" href="http://www.zhumka.org/"><i class="fas fa-pager website"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-youtube youtube"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-instagram-square instagram"></i></Card.Link>
<Card.Link className='link-color-change' target="_blank" href=""> <i class="fab fa-twitter-square twitter"></i></Card.Link>
        </div>
        </div>

        
   
      </div>
   

     
          </Carousel>
        </div>
        
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