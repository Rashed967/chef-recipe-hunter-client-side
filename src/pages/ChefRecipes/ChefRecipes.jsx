import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import image1 from '../../assets/image1.jpg'
import { BiLike } from 'react-icons/bi';
import Recipe from './Recipe/Recipe';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { MagnifyingGlass } from 'react-loader-spinner';


const ChefRecipes = () => {
    const {id} = useParams()
    const chef = useLoaderData()
    const {loading} = useContext(AuthContext)
    const {picture, name, experience, numRecipes, likes,bio, recipes } = chef;
    
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
      <p  className='flex space-x-2 items-center text-xl'><BiLike ></BiLike> <span> {likes} </span> </p>
    </div>
  </div>
</div>


        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 space-x-4 mt-5 px-4'>

            {
                recipes.map(recipe => <Recipe
                key={recipe.id}
                recipe={recipe}
                ></Recipe>)

            }


            </div>
        </div>
        
        <MagnifyingGlass
  visible={loading}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
        </div>
    );
};

export default ChefRecipes;