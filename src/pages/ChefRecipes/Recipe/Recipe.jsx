import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    const {ingredients} = recipe;

    return (
        <div className="card  bg-base-100 shadow-xl mb-5">
                 <figure><img className='h-72 object-cover' src={recipe?.picture} alt="Shoes" /></figure>
                 <div className="card-body">
                   <h2 className="card-title">
                    {recipe?.name}
                  </h2>
                  
                  
                  <h3 className='font-semibold text-xl'>ingredients :</h3>
                  {
                  
                  ingredients.map(ingredient => <span>{ingredient}</span>)
                  }
                  <p><span className='font-semibold text-xl'>Cooking methode :</span> {recipe?.method}</p>
                  <div className="card-actions justify-between items-center mt-3">
                    <div className="flex space-x-2 items-center ">
                    <BiLike></BiLike>
                    <p>Rattings : {recipe?.rating}</p>
                 </div>
                    {/* <Link to={`/chefs/${id}`} className="badge badge-outline">View Recipes</Link> */}
               </div>
                 </div>
               </div>
    )
};

export default Recipe;