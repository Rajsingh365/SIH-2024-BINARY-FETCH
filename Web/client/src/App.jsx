import React from "react";
import AdminDashboard from "./pages/Admin/AdminDashboardContent.jsx";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SupervisorDashboard , NotificationSupervisor} from "./pages/Supervisor/index.js";
import {Admin, Supervisors, Therapists, Users} from './pages/Admin/index.js'
import {TherapistDashboard} from "./pages/Therapist/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/admin",
        children: [
          {
            path: "dashboard",
            element: <Admin />,
            children: [
              {
                path: "users",
                element: <Users />,
              },
              {
                path: "therapists",
                element: <Therapists/>,
              },
              { 
                path: "supervisors",
                element: <Supervisors/>,
              },
            ],

          },
        ],
      },
      {
        path: "/supervisor",
        children: [
          {
            path: "dashboard",
            element: <SupervisorDashboard/>,
          },
          {
            path: "workspace",
            element: <h1>Supervisor Workspace</h1>,
          },
        ],
      },
      {
        path: "/therapist",
        children: [
          {
            path: "dashboard",
            element: <TherapistDashboard/>,
          },
          {
            path: "workspace",
            element: <h1>Therapist Workspace</h1>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
