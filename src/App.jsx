import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Landing/>
      }
    ]
  }
])

export default function App (){
  return(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}