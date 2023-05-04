import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';



const Login = () => {
  const {signInUser, googelSignIn, gitHubSignIn} = useContext(AuthContext)
  const [error, setError] = useState()

  const location = useLocation()
  const from = location?.state?.from?.pathname || "/";


  const handleSignIn = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 
    if(email.length < 0){
      return setError("email is empty")
    }
    signInUser(email, password)
   
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error => {
      console.error(error.message)
    })
    console.log(email, password)
  } 

 
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-full md:w-9/12 lg:w-2/4 flex-col md:flex-col">
    <div className="text-center lg:text-left mb-2">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p>{error}</p>
        </div>


        <div className="form-control mt-6">
          <Link to={from} className="btn bg-lime-50 text-black hover:text-white">Login</Link>
        </div>
        <p>New to this website? <Link className='text-blue-500' to="/register">Register Now</Link></p>
        <div>
            <h3 className='text-center border-b-2'>Other option</h3>
            <div className='flex justify-center space-x-3 text-2xl mt-4'>
                <span onClick={googelSignIn}><FaGoogle /></span>
                <span onClick={gitHubSignIn}><FaGithub /></span>
            </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;