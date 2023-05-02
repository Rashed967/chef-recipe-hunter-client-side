import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';


const NavBar = () => {
   const {user} = useContext(AuthContext)
   console.log(user)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <h3 className="btn btn-ghost normal-case text-xl">daisyUI</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-3">
      <ActiveLink to="/" className='mx-3'>Home</ActiveLink>
      <ActiveLink to="/blog" className='ms-2'>Blog</ActiveLink>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <Link className="btn"><FaRegUser className="" /></Link>
      : <Link to="/login" className="btn">Login</Link>
    }
  </div>
</div>
        </div>
    );
};

export default NavBar;