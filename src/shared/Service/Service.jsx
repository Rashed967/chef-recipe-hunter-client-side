import React from "react";
// import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Service = ({service}) => {
    const {title, image, _id, description} = service
    console.log(title, image, _id, description)

    return (

            <div className="card bg-base-100 shadow-md mx-4 my-5 bg-lime-50 ">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read more</button>
    </div>
  </div>
</div> 

    );
};

export default Service;