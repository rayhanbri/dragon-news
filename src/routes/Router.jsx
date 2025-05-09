import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import  AuthLayout from '../Layout/AuthLayout'

const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:'/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader:() => fetch('/news.json')
        }
      ]
    },
    {
      path:'/auth',
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:'/auth/login',
          element:<Login></Login>
        },
        {
          path:'/auth/register',
          element:<Register></Register>
        },
      ]

    },
    {
      path:'/news',
      element:<h1>this is news</h1>
    },
    {
      path:'/*',
      element:<h1>Eorror this  page  in not found</h1>
    }
  ]
);

export default router;