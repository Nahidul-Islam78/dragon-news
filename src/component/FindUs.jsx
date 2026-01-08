import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <p className="font-bold mt-10 mb-6">Find Us On</p>
      <div className="join join-vertical w-full justify-baseline ">
        <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram>Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;