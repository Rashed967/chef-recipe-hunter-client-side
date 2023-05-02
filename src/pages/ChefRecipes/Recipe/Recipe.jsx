import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const {ingredients} = recipe;
    const [disable, setDisable] = useState(false)
    const notify = () => toast.success('Recipe added', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });

    const likeHandler = () => {
      notify()
      setDisable(true)
    }

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
                    <button disabled={disable} onClick={likeHandler} className={`text-2xl cursor-pointer ${disable ? "text-red-600" : "" } `}><FaHeart  ></FaHeart></button>

                    {/* <div className={`text-2xl cursor-pointer ${disable ? "text-red-600" : ""}`}>{children}</div> */}
                 </div>
                    {/* <Link to={`/chefs/${id}`} className="badge badge-outline">View Recipes</Link> */}
               </div>
                 </div>
                 <ToastContainer />
               </div>
    )
};

export default Recipe;