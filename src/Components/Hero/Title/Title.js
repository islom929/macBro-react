import React from 'react'
import './Title.css'

const Title = () => {
  return (
      <div className="hero-heading__box">
        <h1 className="hero-right__heading">MacBook Air 13-inch</h1>
        <div className="hero-text__box">
          <span className="hero-text__model">M1</span><span>/</span><span className="hero-text__ram">8</span><span>/</span><span className="hero-text__memory">16</span>
          <span className="hero-text__color">Gold</span>
        </div>
      </div>
  );
}

export default Title;
