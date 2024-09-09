import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import { HelmetProvider } from 'react-helmet-async';
import Login from './UserManagement/Login';
import Countries from './Components/Countries';
import SimilarCategories from './Pages/CategorizedArtsPage/SimilarCategories';
import ArtDetails from './Pages/AllArtsPage/ArtDetails';
import NotFound from './Components/NotFound/NotFound';
import ValidateUser from './UserManagement/ValidateUser';
import Register from './UserManagement/Register';
import YourArts from './Pages/YourArtsPage/YourArts';
import UpdateArt from './Pages/YourArtsPage/UpdateArt';
import AllArts from './Pages/AllArtsPage/AllArts';
import Home from './Pages/HomePage/Home';
import AddArts from './Pages/AddArtsPage/AddArts';
import AuthProvider from './Components/AuthProvider';

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
        element: <SimilarCategories></SimilarCategories>
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
