import React from 'react';
import logo from '../../assets/logo.png'
import { format } from "date-fns";

const Header = () => {
  return (
    <div className='flex justify-center flex-col gap-3 items-center'>
      <img className='mt-7' src={logo} alt="" />
      <p className='text-accent'> Journalism Without Fear or Favour</p>
      <p className='font-semibold text-accent'>{format(new Date (),"EEEE, MMMM MM,  YYY" )}</p>
      
    </div>
  );
};

export default Header;