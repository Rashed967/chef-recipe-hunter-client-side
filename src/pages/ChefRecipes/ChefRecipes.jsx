import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import image1 from '../../assets/image1.jpg'
import { BiLike } from 'react-icons/bi';

const ChefRecipes = () => {
    const {id} = useParams()
    const chef = useLoaderData()
    const {picture, name, experience, numRecipes, likes,bio, recipes } = chef;
    console.log(recipes)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={picture} className="max-w-sm  shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{bio}</p>
      <p className='text-xl'>number of recipes : {numRecipes}</p>
      <p className='text-xl'> years of experience : {experience}</p>
      <p className='flex space-x-2 items-center text-xl'><BiLike></BiLike> <span> {likes} </span> </p>
    </div>
  </div>
</div>

        <div>
            <h3>All recipes</h3>
            <div>
            {
                <div className="card  bg-base-100 shadow-xl mb-5">
                <figure><img className='h-72 object-cover' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                  </h2>
                  <p>experience : {experience} Years</p>
                  <p>Numbers of recipes : {numRecipes} Recipe</p>
                  <div className="card-actions justify-between items-center mt-3">
                    <div className="flex space-x-2 items-center ">
                      <BiLike></BiLike>
                      <span> {likes}</span>
                    </div>
                    <Link to={`/chefs/${id}`} className="badge badge-outline">View Recipes</Link>
                  </div>
                </div>
              </div>
            }
            </div>
        </div>

        </div>
    );
};

export default ChefRecipes;