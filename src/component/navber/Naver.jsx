import React from 'react';
import userLogo from './../../assets/user.png'
import { NavLink } from 'react-router';

const Naver = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div>
        <ul className="flex justify-center items-center gap-4 text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={userLogo} alt="user logo " />
        <button className="text-base-100 bg-primary px-6 py-2">Login</button>
      </div>
    </div>
  );
};

export default Naver;