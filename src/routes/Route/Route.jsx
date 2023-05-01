import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Home from "../../home/Home/Home";


  const router = createBrowserRouter([
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
        }
      ]
    },
  ]);

  export default router