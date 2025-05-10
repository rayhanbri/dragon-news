import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {signIn} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email=form.email.value;
    const password = form.password.value;
    // console.log(email,password)
   signIn (email,password)
   .then(result =>{
      const  user = result.user;
      console.log(user)
     
    })
    .catch((error) => {
      const erroCode = error.code;
      const errorMessage = error.message; 
      alert(errorMessage,erroCode)
    })

  }
  return (
    <div className='flex  justify-center min-h-screen items-center'>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-center'>Login your account</h1>
        <hr className=' my-5 text-base-300'></hr>
        <form onSubmit={handleLogin} className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <p  className='pb-5 text-center font-semibold text-sm'>
        Dont’t Have An Account ? <Link  className='text-secondary' to='/auth/register' >Register</Link>
      </p>
      </div>
    </div>
  );
};

export default Login;