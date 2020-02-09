import React from 'react';
import './style.css';

const HeroImage = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header>
          <img src={props.image} alt="Hero" />
        </header>
      </div>
    </div>
  )
}

export default HeroImage;
