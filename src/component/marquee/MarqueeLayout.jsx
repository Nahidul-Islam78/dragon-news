import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeLayout = () => {
  return (
    <div className="flex items-center bg-base-200 p-4 gap-2 ">
      <p className="text-base-100 bg-secondary p-2">Latest</p>
      <Marquee className='flex gap-10 font-bold' direction='right'>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeLayout;