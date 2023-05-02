import React from "react";
import image1 from '../../assets/image1.jpg'
import Chefs from "../Chefs/Chefs";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} className="max-w-sm  shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">A Culinary Mastermind with a Passion for Flavors</h1>
      <p className="py-6">A culinary mastermind with a passion for flavors. His innovative creations using fresh ingredients have earned him recognition and accolades.</p>
      <Link to="/login" className="btn btn-primary">Login Now</Link >
    </div>
  </div>
</div>

      <Chefs></Chefs>
        </div>
    );
};

export default Home;