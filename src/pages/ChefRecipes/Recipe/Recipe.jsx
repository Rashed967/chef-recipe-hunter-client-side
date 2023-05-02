import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    console.log(recipe)
    return (
        <div className="card  bg-base-100 shadow-xl mb-5">
                 <figure><img className='h-72 object-cover' src="" alt="Shoes" /></figure>
                 <div className="card-body">
                   <h2 className="card-title">
                    {name}
                  </h2>
                  <p>experience :  Years</p>
                  <p>Numbers of recipes :  Recipe</p>
                  <div className="card-actions justify-between items-center mt-3">
                    <div className="flex space-x-2 items-center ">
                      <BiLike></BiLike>
                      <span> </span>
                 </div>
                    {/* <Link to={`/chefs/${id}`} className="badge badge-outline">View Recipes</Link> */}
               </div>
                 </div>
               </div>
    )
};

export default Recipe;