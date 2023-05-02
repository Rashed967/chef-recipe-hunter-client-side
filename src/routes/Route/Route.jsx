import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Home from "../../home/Home/Home";

import ChefRecipeLayout from "../../layout/ChefRecipeLayout";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";


  const router = createBrowserRouter([
    {
        path : "chefs",
        element : <ChefRecipeLayout></ChefRecipeLayout>,
        children : [
            {
              path : ":id",
              element : <ChefRecipes></ChefRecipes>,
              loader : ({params}) => fetch(`https://afghan-chef-hunter-server-rashed967.vercel.app/chefs/${params.id}`)
            }
        ]

    },
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
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        },
        
      ]
    },
  ]);

  export default router