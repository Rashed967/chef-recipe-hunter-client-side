import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <h3 className="btn btn-ghost normal-case text-xl">daisyUI</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link className='mx-3'>Home</Link>
      <Link>Blog</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn"><FaRegUser /></Link>
  </div>
</div>
        </div>
    );
};

export default NavBar;