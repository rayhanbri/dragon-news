import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto'>
          <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto'>
          <Navbar></Navbar>
        </nav>
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