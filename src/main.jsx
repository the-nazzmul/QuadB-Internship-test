import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import ShowDetails from './Pages/ShowDetails/ShowDetails';
import Booking from './Pages/Booking/Booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/movies/:id',
        element: <ShowDetails></ShowDetails>,
        loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: '/booking/:id',
        element: <Booking></Booking>,
        loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
