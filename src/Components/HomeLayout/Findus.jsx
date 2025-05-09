import React from 'react';
import { BsInstagram } from 'react-icons/bs';

const Findus = () => {
  return (
    <div>
      <h1 className='font-bold'>Find Us on</h1>
      <div className=''>
      <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</button>
      <button className="btn bg-black text-white border-black w-full">
  <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
  Login with X
</button>
      <button className="btn bg-base-300 text-white border-black w-full">
  <BsInstagram className='text-red-500'></BsInstagram>
  Login with Instagram
</button>

      </div>
    </div>
  );
};

export default Findus;