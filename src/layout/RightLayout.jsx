import React from 'react';
import SocialLogin from '../component/SocialLogin';
import FindUs from '../component/FindUs';
import QZone from '../component/Qzone';

const RightLayout = () => {
  return (
    <div>
      <section className="socialLogin">
        <SocialLogin></SocialLogin>
      </section>
      <section className="findUs">
        <FindUs></FindUs>
      </section>
      <section className="QZone">
        <QZone></QZone>
      </section>
    </div>
    
  );
};

export default RightLayout;