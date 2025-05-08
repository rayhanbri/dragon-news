import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='flex justify-center flex-col gap-3 items-center'>
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;