import React from 'react';
import { FaExpeditedssl, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-full md:w-9/12 lg:w-2/4 flex-col md:flex-col">
    <div className="text-center lg:text-left mb-2">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>New to this website? <Link to="/register">Register Now</Link></p>
        <div>
            <h3 className='text-center border-b-2'>Other option</h3>
            <div className='flex justify-center space-x-3 text-2xl mt-4'>
                <span><FaGoogle /></span>
                <span><FaGithub /></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;