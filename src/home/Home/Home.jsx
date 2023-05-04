import React from "react";
// import image1 from '../../assets/image1.jpg'
import image2 from "../../assets/chef1.jpg"
import Chefs from "../Chefs/Chefs";
import { Link } from "react-router-dom";
import Services from "../../shared/Services/Services";
import Story from "../../shared/Story/Story";



const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image2} className=" lg:max-w-sm rounded-md  shadow-2xl" />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">A Culinary Mastermind with a Passion for Flavors</h1>
      <p className="py-6">A culinary mastermind with a passion for flavors. His innovative creations using fresh ingredients have earned him recognition and accolades.</p>
      <Link to="/login" className="btn bg-lime-50 text-black hover:text-white">Login Now</Link >
    </div>
  </div>
</div>

      <Chefs></Chefs>
      {/* <Services></Services> */}
      <Services></Services>
      <Story></Story>
        </div>
    );
};

export default Home;