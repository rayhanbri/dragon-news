import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
  const {createUser,setUser} = use(AuthContext)
  const handleRegister = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,photo,email,password})

    createUser(email,password)
    .then(result =>{
      const  user = result.user;
      // console.log(user)
      setUser(user);
    })
    .catch((error) => {
      const erroCode = error.code;
      const errorMessage = error.message; 
      alert(errorMessage)
    })
    

  }
  return (
    <div className='flex  justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='font-bold text-3xl text-center'>Register your account</h1>
          <hr className=' my-5 text-base-300'></hr>
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name  */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name='name'
              className="input"
              placeholder="Enter Your Name"
              required />
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name='photo'
              className="input"
              placeholder="Enter Your Photo Url"
              required />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name='email'
              className="input"
              placeholder="Email" 
              required/>

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name='password'
              className="input"
              placeholder="Password"
              required />
            <div><label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Remember me
            </label></div>

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
        <p className='pb-5 text-center font-semibold text-sm'>
          Already have an account ? <Link className='text-secondary' to='/auth/login' >Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;