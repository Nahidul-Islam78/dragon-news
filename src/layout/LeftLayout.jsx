import React, { Suspense } from 'react';
import Category from '../component/Category';

const LeftLayout = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner text-info"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftLayout;