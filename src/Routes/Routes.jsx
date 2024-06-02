import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
// import Biodata from "../Pages/Biodata/Biodata";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
// import CreateBiodata from "../Pages/Dashboard/CreateBiodata/CreateBiodata";
import CreateEditBiodat from "../Pages/createEditBiodat/CreateEditBiodat";
import CardForm from "../Pages/Biodata/CardForm";
import Biodata from "../Pages/Biodata/Biodata";
import BiodataDetail from "../Pages/Biodata/BiodataDetail";
import About from "../Pages/About/About";
import Favourite from "../Component/DashboardComponents/Favourite";
import ViewBiodata from "../Component/DashboardComponents/ViewBiodata";
import GotMarried from "../Component/DashboardComponents/GotMarried";
import ContactUs from "../Pages/ContactUs/ContactUs";




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
      element: <Biodata> </Biodata>

  },
  {
    path: '/biodata/:id',
    element: <BiodataDetail></BiodataDetail>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contact',
    element: <ContactUs></ContactUs>
  },
  
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children: [
       {  
        path: "create_edit_biodata",
         element: <CreateEditBiodat></CreateEditBiodat>
        },
        
        {  
        path: "view_biodata",
         element: <ViewBiodata></ViewBiodata>
        },
        {  
        path: "favorites_biodata",
         element:<Favourite></Favourite>
        },
        {  
          path: "got_married",
           element:<GotMarried></GotMarried>
          }
      ]
    }
  ]);