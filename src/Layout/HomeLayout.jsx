import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        {/* left navbar  */}
        <section className="left-navbar"></section>
        {/* main  out let section  */}
        <section className='main'>
          <Outlet></Outlet>
        </section>
        {/* right navbar */}
        <section className="right-navbar"></section>

      </main>
    </div>
  );
};

export default HomeLayout;