import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const {user} = use(AuthContext)
  return (
    <div className='flex  justify-between items-center mt-3'>
     <div className="blank-div">{user.email}</div>
     <div className="nav-iteam flex gap-3 text-accent">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/career'>Career</NavLink>
     </div>
     <div className='flex gap-3'>
      <img src={user} alt="" />
      <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
     </div>
    </div>
  );
};

export default Navbar;