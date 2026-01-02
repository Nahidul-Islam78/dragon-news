import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className=' grid grid-cols-12 w-11/12 mx-auto mt-20'>
        <aside className='leftNav col-span-3'>
          <LeftLayout></LeftLayout>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='rightNav col-span-3'>
          <RightLayout></RightLayout>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;