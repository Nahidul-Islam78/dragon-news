import React from 'react';
import logo from './../assets/logo.png'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 flex-col">
        <img src={logo} className='w-87.5 mb-5' alt="title logo" />
        <p>Journalism Without Fear or Favour</p>
      </div>
    </div>
  );
};

export default Header;