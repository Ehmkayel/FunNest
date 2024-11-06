import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CommunityPrompt from "./pages/Dashboard/Community/CommunityPrompt";
import ParentDashboard from "./pages/Dashboard/ParentDashboard/ParentDashboard";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Explore from "./pages/Dashboard/ParentDashboard/Explore/Explore";
import Community from "./pages/Dashboard/ParentDashboard/Community/Community";
import Recommendations from "./pages/Dashboard/ParentDashboard/Recommendations/Recommendations";
import SafetyForm from "./pages/Dashboard/ParentDashboard/SafetyForm/SafetyForm";
import Notification from "./pages/Dashboard/ParentDashboard/Notification";
import Feedback from "./pages/Dashboard/ParentDashboard/Feedback/Feedback";
import EventsDetails from "./pages/Dashboard/ParentDashboard/Events/Events";

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <ParentDashboard />
      },
      {
        path: 'events',
        element: <EventsDetails />
      },
      {
        path: 'explore-events',
        element: <Explore/>
      },
      {
        path: 'community',
        element: <Community/>
      },
      {
        path: 'recommendation',
        element: <Recommendations/>
      },
      {
        path: 'safety-form',
        element: <SafetyForm/>
      },
      {
        path: 'notifications',
        element: <Notification/>
      },
      {
        path: 'feedback',
        element: <Feedback/>
      }

    ]
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'community-prompt',
        element: <CommunityPrompt />
      }
    ]
  }
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
