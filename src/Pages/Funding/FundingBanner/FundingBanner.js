import React from 'react';
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';
import './FundingBanner.css'

const FundingBanner = () => {
    return (
        <div  id="carouselExampleCaptions" className="carousel slide fundingBanner" data-bs-ride="carousel">
        <div class="carousel-indicators">
 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
 <div className="carousel-item fundingBannerimg active">
   {/*<img src="" className="d-block w-100" alt="..."/> */}
   <div className="carousel-caption d-none d-md-block">
   <div className="banner-text mx-auto">
             <div className="looped-text">
                 <div className="banner-title">
                     <span className="text-whitesmoke">We Need Your Hand</span> <span className="text-red"></span> <br />
                 </div>
                 <TextLoop interval={1500}>
                 
                 
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem ipsum dolor sit amet.</span>
                   
                 </TextLoop>
             </div>
   
         </div>
   </div>
 </div>
 <div className="carousel-item fundingBannerimg-2">
   {/*<img src="" className="d-block w-100" alt="..."/> */}
   <div className="carousel-caption d-none d-md-block">
   <div className="banner-text mx-auto">
             <div className="looped-text">
                 <div className="banner-title">
                     <span className="text-whitesmoke">lorem</span> <span className="text-red"></span> <br />
                 </div>
                 <TextLoop interval={1500}>
                   
              
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem ipsum dolor sit amet.</span>
                   
                 </TextLoop>
             </div>
            
         </div>
   </div>
 </div>
 <div className="carousel-item fundingBannerimg-3">
   {/*<img src="" className="d-block w-100" alt="..."/> */}
   <div className="carousel-caption d-none d-md-block">
   <div className="banner-text mx-auto">
             <div className="looped-text">
                 <div className="banner-title">
                     <span className="text-whitesmoke">lorem</span> <span className="text-red"></span> <br />
                 </div>
                 <TextLoop interval={1500}>
               
               
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem, ipsum.</span>
                     <span className="textloop-text">Lorem ipsum dolor sit amet.</span>
                   
                 </TextLoop>
             </div>
        
         </div>
   </div>
 </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>
    );
};

export default FundingBanner;