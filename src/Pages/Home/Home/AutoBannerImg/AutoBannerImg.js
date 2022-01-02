import React from 'react';
import img1 from '../../../../images/sdg.png'
import img2 from '../../../../images/today1.jpg'
import img3 from '../../../../images/today2.jpg'
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';
import './AutoBannerImg.css'

const AutoBannerImg = () => {
    return (
        
     <div  id="carouselExampleCaptions" className="carousel slide autobanner" data-bs-ride="carousel">
           {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div> */}
  <div id="home" className="carousel-inner autobanner">
    <div className="carousel-item autobannerimg-1 active">
      {/*<img src="" className="d-block w-100" alt="..."/> */}
      <div className="carousel-caption d-none d-md-block">
      {/* <div className="banner-text mx-auto">
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
            
            </div> */}






      </div>
    </div>
    <div className="carousel-item autobannerimg-2">
      {/*<img src="" className="d-block w-100" alt="..."/> */}
      <div className="carousel-caption d-none d-md-block">
      {/* <div className="banner-text mx-auto">
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
                <Link to="/explore"><button className="btn btn-outline-success banner-btn">Donate</button></Link>
            </div> */}
      </div>
    </div>
    <div className="carousel-item autobannerimg-3">
      {/*<img src="" className="d-block w-100" alt="..."/> */}
      <div className="carousel-caption d-none d-md-block">
      {/* <div className="banner-text mx-auto">
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
                <Link to="/explore"><button className="btn btn-outline-success banner-btn">Donate</button></Link>
            </div> */}
      </div>
    </div>
    <div className="carousel-item autobannerimg-4">
      {/*<img src="" className="d-block w-100" alt="..."/> */}
      <div className="carousel-caption d-none d-md-block">
      {/* <div className="banner-text mx-auto">
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
                <Link to="/explore"><button className="btn btn-outline-success banner-btn">Donate</button></Link>
            </div> */}
      </div>
    </div>
    <div className="carousel-item autobannerimg-5">
      {/*<img src="" className="d-block w-100" alt="..."/> */}
      <div className="carousel-caption d-none d-md-block">
      {/* <div className="banner-text mx-auto">
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
                <Link to="/explore"><button className="btn btn-outline-success banner-btn">Donate</button></Link>
            </div> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden carousel-btn text-black">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    );
};

export default AutoBannerImg;