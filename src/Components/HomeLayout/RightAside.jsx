import React from 'react';
import SocialLonin from './SocialLonin';
import Findus from './Findus';
import QZone from './QZone';

const RightAside = () => {
  return (
    <div className='space-y-7'>
     <SocialLonin></SocialLonin>
     <Findus></Findus>
     <QZone></QZone>
    </div>
  );
};

export default RightAside;