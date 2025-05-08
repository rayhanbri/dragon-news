import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';

const SocialLonin = () => {
  return (
    <div>
      <h1 className='font-bold m-5'>Login With</h1>
      <div className='flex flex-col gap-3'>
        <button className='w-full btn btn-outline btn-secondary'><FcGoogle size={30}/>Login With Google</button>
        <button className='w-full btn btn-outline btn-primary'><ImGithub size={26} />Login With GitHub</button>
      </div>
    </div>
  );
};

export default SocialLonin;