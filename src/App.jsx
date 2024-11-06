import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CommunityPrompt from "./pages/Dashboard/Community/CommunityPrompt";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'community-prompt',
        element: <CommunityPrompt/>
      },

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