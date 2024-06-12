import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './styles/ImageSlider.css'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import Navbar from './Navbar';
import ApprovedDoctors from './ApprovedDoctors';

const ImageSlider = () => {
  const images = [
   image1,image2,image3,image4
  ];

  return (
    <div>
        <Navbar/>
   
    <div className="slider-container">
      <SimpleImageSlider
        width={1100}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}        
        autoPlayDelay={1.0}
      />
    </div>
    <div>
        <ApprovedDoctors/>
    </div>
    </div>
  );
};

export default ImageSlider;
