import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CommunityPrompt from "./pages/Dashboard/ParentDashboard/Community/CommunityPrompt";
import ParentDashboard from "./pages/Dashboard/ParentDashboard/ParentDashboard";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Community from "./pages/Dashboard/ParentDashboard/Community/Community";
import Recommendations from "./pages/Dashboard/ParentDashboard/Recommendations/Recommendations";
import SafetyForm from "./pages/Dashboard/ParentDashboard/SafetyForm/SafetyForm";
import Notification from "./pages/Dashboard/ParentDashboard/Notification";
import Feedback from "./pages/Dashboard/ParentDashboard/Feedback/Feedback";
import EventsDetails from "./pages/Dashboard/ParentDashboard/Events/Events";
import ExploreEvents from "./pages/Dashboard/ParentDashboard/Explore/Explore";
import ExplorePrompt from "./pages/Dashboard/ParentDashboard/Explore/ExplorePrompt";

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
        element: <ExploreEvents/>
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
      },
      {
        path: 'explore-prompt',
        element: <ExplorePrompt />
      },
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
