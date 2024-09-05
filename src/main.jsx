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
import AddArts from './AddArtsPage/AddArts';
import ValidateUser from './UserManagement/ValidateUser';
import YourArts from './YourArtsPage/YourArts';
import UpdateArt from './YourArtsPage/UpdateArt';
import NotFound from './NotFound/NotFound';
// import AddArts from './Components/AddArts';
import Countries from './Components/Countries';
import AllCategories from './Components/AllCategories';
import AllArts from './AllArtsPage/AllArts';
import ArtDetails from './AllArtsPage/ArtDetails';
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
        loader: () => fetch('https://a-10-travel-site-server.vercel.app/spot'),
        element: <Home></Home>
      },

      {
        path: "/allSpots",
        loader: () => fetch('https://a-10-travel-site-server.vercel.app/spot'),
        element: <AllArts></AllArts>
      },

      {
        path: "/spot/:id",
        loader: async ({ params }) => {
          const response = await fetch(`https://a-10-travel-site-server.vercel.app/spot`)
          const data = await response.json()

          console.log(data, params)
          return data;


        },

        element: <ValidateUser> <ArtDetails></ArtDetails> </ValidateUser>
      },

      {
        path: "/addSpot",
        element: <ValidateUser> <AddArts></AddArts> </ValidateUser>
      },

      {
        path: "/addCountries",
        element: <AddArts></AddArts>
      },

      {
        path: "/countries",
        element: <Countries></Countries>
      },
      {
        path: "/myList",
        element: <ValidateUser> <YourArts></YourArts> </ValidateUser>
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`https://a-10-travel-site-server.vercel.app/spot/${params.id}`),
        element: <UpdateArt></UpdateArt>
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
        loader: ({ params }) => fetch(`https://a-10-travel-site-server.vercel.app/categories`),
        element: <AllCategories></AllCategories>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
