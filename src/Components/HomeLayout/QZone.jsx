import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playgroundImg from "../../assets/playground.png"

const QZone = () => {
  return (
    <div className='bg-base-200 p-3 space-y-6'>
     <h1 className='font-bold'>QZone</h1>
     <div className='space-y-4'>
      <img src={swimmingImage} alt="" />
      <img src={classImg} alt="" />
      <img src={playgroundImg} alt="" />

     </div>
    </div>
  );
};

export default QZone;