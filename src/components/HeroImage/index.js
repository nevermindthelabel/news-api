import React from 'react';
import image from '../../images/heroimage.jpg';

const HeroImage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default HeroImage;
