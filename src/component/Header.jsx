import React from 'react';
import logo from './../assets/logo.png'
import { format } from 'date-fns';
import MarqueeLayout from './marquee/MarqueeLayout';

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 flex-col">
        <img src={logo} className="w-87.5 mb-5" alt="title logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="text-accent mt-2">
          {format(new Date(), 'EEEE, MMMM MM, yyyy')}
        </p>
      </div>
      <section className='marquee w-11/12 mx-auto '>
        <MarqueeLayout>
          
        </MarqueeLayout>
      </section>
    </div>
  );
};

export default Header;