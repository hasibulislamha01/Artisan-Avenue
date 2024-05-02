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
import SpotDetail from './AllSpotPage/SpotDetail';
import UpdateSpot from './YourSpotPage/UpdateSpot';
import NotFound from './NotFound/NotFound';
import AddCountries from './Components/AddCountries';
import Countries from './Components/Countries';
import AllCategories from './Components/AllCategories';
// import Test from './Components/test';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/spot'),
        element: <Home></Home>
      },

      {
        path: "/allSpots",
        loader: () => fetch('http://localhost:5000/spot'),
        element: <AllSpot></AllSpot>
      },

      {
        path: "/spot/:id",
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/spot`)
          const data = await response.json()

          console.log(data, params)
          return data;


        },

        element: <ValidateUser> <SpotDetail></SpotDetail> </ValidateUser>
      },

      {
        path: "/addSpot",
        element: <ValidateUser> <AddSpot></AddSpot> </ValidateUser>
      },

      {
        path: "/addCountries",
        element: <AddCountries></AddCountries>
      },

      {
        path: "/countries",
        element: <Countries></Countries>
      },
      {
        path: "/myList",
        element: <ValidateUser> <YourSpot></YourSpot> </ValidateUser>
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/spot/${params.id}`),
        element: <UpdateSpot></UpdateSpot>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/allCategories/:subCategoryId",
        loader: ({params})=>fetch(`http://localhost:5000/categories`), 
        element: <AllCategories></AllCategories>
      },


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
