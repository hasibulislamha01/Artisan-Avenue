import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './HomePage/Home';
import Register from './UserManagement/Register';
import { HelmetProvider } from 'react-helmet-async';
import Login from './UserManagement/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import AddSpot from './AddSpotPage/AddSpot';
import AllSpot from './AllSpotPage/AllSpot';
import ValidateUser from './UserManagement/ValidateUser';
import YourSpot from './YourSpotPage/YourSpot';
// import Test from './Components/test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/allSpots",
        element: <AllSpot></AllSpot>
      },
      {
        path: "/addSpot",
        element: <ValidateUser> <AddSpot></AddSpot> </ValidateUser>
      },
      {
        path: "/myList",
        element: <ValidateUser> <YourSpot></YourSpot> </ValidateUser>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      
      {
        path: "/register",
        element: <Register></Register>
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
