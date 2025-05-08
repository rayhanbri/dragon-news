import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center bg-base-200 gap-x-5 p-3'>
      <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
      <Marquee className=' flex gap-5' pauseOnHover speed={60}>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore.</p>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore.</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;