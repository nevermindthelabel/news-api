import React from 'react';
import './style.css';

const HeroImage = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header>
          <img src={props.image} alt="Hero" />
          <div className="container">
            <h1 className="py-2">{props.title}</h1>
          </div>
        </header>
      </div>
    </div>
  )
}

export default HeroImage;
