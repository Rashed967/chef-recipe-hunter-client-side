import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Home from "../../home/Home/Home";

// import ChefRecipeLayout from "../../layout/ChefRecipeLayout";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Blog from "../../pages/Blog/Blog";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
const ChefRecipeLayout = React.lazy(() => import('../../layout/ChefRecipeLayout'))




  const router = createBrowserRouter([
    // {
    //     path : "chefs",
    //     element : <React.Suspense fallback="Loading"><ChefRecipeLayout></ChefRecipeLayout></React.Suspense>,
    //     children : [
    //         {
    //           path : ":id",
    //           element : <PrivetRoute><ChefRecipes></ChefRecipes></PrivetRoute>,
    //           loader : ({params}) => fetch(`https://afghan-chef-hunter-server-rashed967.vercel.app/chefs/${params.id}`)
    //         }
    //     ]

    // },
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path : "/",
          element : <Home></Home>
        }
        ,
        {
          path : "chefs/:id",
          element : <PrivetRoute><ChefRecipes></ChefRecipes></PrivetRoute>,
          loader : ({params}) => fetch(`https://afghan-chef-hunter-server-rashed967.vercel.app/chefs/${params.id}`)
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        },
        {
          path : "/blog",
          element :<Blog></Blog>
      
        }
        
      ]
    },
    {
      path : "*",
      element : <ErrorPage></ErrorPage>
    },
   
  ]);

  export default router