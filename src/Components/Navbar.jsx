import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userProfile from "../assets/user.png"

import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = use(AuthContext)

  const handleLogout=() =>{
    console.log('clcick nicci bro')
    logOut()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
    
  }
  return (
    <div className='flex  justify-between items-center mt-3'>
     <div className="blank-div">{user && user.email}</div>
     <div className="nav-iteam flex gap-3 text-accent">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/career'>Career</NavLink>
     </div>
     <div className='flex gap-3'>
      <img src={userProfile} alt="" />
      {
        user?
        <button onClick={handleLogout}  className='btn btn-primary px-10'>Log Out </button>
        :
        <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>

      }
      
     </div>
    </div>
  );
};

export default Navbar;