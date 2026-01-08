import React from 'react';
import Swimming from './../assets/swimming.png'
import Class from '../assets/class.png'
import Playground from '../assets/playground.png';

const QZone = () => {
  return (
    <div className='bg-base-200 p-2 my-4'>
      <p className='font-bold'>Q-Zone</p>
      <div>
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;