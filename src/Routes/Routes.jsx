import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Biodata from "../Pages/Biodata/Biodata";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
    },
    {
      path: '/biodata',
      element: <PrivateRoute> <Biodata> </Biodata></PrivateRoute>
  },
  {
    path: '/dashbord',
    element: <Dashboard></Dashboard>
}
      ]
    },
  ]);