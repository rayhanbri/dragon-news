import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar';
import Leftaside from '../Components/HomeLayout/Leftaside';
import RightAside from '../Components/HomeLayout/RightAside';

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
      <main className='w-11/12 mx-auto py-4  grid grid-cols-12 gap-5'>
       
        {/* left navbar  */}
       <aside className='col-span-3 sticky  top-0 h-fit'>
        <Leftaside></Leftaside>
       </aside>
        {/* main  out let section  */}
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        {/* right navbar */}
        <aside className='col-span-3 sticky  top-0 h-fit'>
       <RightAside></RightAside>
       </aside>

      </main>
    </div>
  );
};

export default HomeLayout;