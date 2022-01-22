import React from 'react'
import Info from '../Info/Info'
import Title from './Title/Title'
import Ram from './Ram/Ram'
import Capacity from './Capacity/Capacity'
import Color from './Color/Color'
import Count from './Count/Count'

import './Hero.css'

const Hero = () => {

  return (
    <div className='hero'>
      <div className='hero__container container'>
        <div className='hero__left'></div>
        <div className='hero__right'>
          <Title />
          <Ram />
          <Capacity />
          <Color />
          <Count />
          <div className="hero-bookmark__box">
            <button className="hero-bookmrak__btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
