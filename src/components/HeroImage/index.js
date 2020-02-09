import React from 'react';
import image from '../../images/heroimage.jpg';
import './style.css';

const HeroImage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header>
          <img src={image} alt="Hero Image" />
        </header>
      </div>
    </div>
  )
}

export default HeroImage;
