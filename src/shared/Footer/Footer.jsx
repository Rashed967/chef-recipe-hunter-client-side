import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <Link className="link link-hover">Home</Link> 
    <Link className="link link-hover">Blog</Link> 
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">

      <Link className='text-3xl'><FaFacebook /></Link>  
      <Link className='text-3xl'><FaInstagram /></Link>
      <Link className='text-3xl'><FaYoutube /></Link>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Rashed Hasan</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;