import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {picture, name, experience, numRecipes, likes, id} = chef;
    console.log(picture, name, experience, numRecipes, likes, id)

    return (
       
//             <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src={picture} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {name}
//     </h2>
//     <p>experience : {experience} Years</p>
//     <p>Numbers of recipes : {numRecipes} Recipe</p>
//     <div className="card-actions justify-between items-center mt-3">
//       <div className="flex space-x-2 items-center ">
//         <BiLike></BiLike>
//         <span> {likes}</span>
//       </div>
//       <Link className="badge badge-outline">View Recipes</Link>
//     </div>
//   </div>
// </div>


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    );
};

export default Chef;