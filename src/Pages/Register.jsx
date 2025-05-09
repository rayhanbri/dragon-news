import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className='flex  justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='font-bold text-3xl text-center'>Register your account</h1>
          <hr className=' my-5 text-base-300'></hr>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Enter Your Name" />
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Enter Your Photo Url" />
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Remember me
            </label></div>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
        <p className='pb-5 text-center font-semibold text-sm'>
          Already have an account ? <Link className='text-secondary' to='/auth/login' >Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;