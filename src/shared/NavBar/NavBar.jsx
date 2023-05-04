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
    <Link to="/"><h3 className="font-bold normal-case text-xl">Afghan</h3></Link>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-3">
      <ActiveLink to="/" className='mx-3'>Home</ActiveLink>
      <ActiveLink to="/blog" className='ms-2'>Blog</ActiveLink>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="hover:tooltip hover:tooltip-open hover:tooltip-left tooltip-primary text-lime-50" data-tip={user.displayName}>
   <Link className="btn"  ><FaRegUser className="text-lime-50" /></Link>
    </div>
      
      

      : <Link to="/login" className="btn bg-lime-50 text-black hover:text-white">Login</Link>
    }
  </div>
</div>


        </div>
    );
};

export default NavBar;