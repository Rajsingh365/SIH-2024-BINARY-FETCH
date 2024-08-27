import React from "react";
import AdminDashboard from "./pages/Admin/AdminDashboardContent.jsx";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin/Admin.jsx";
import Users from "./Dashboards/Admin/Users/Users.jsx";
import Therapists from "./Dashboards/Admin/Therapists/Therapists.jsx";
import Supervisors from "./Dashboards/Admin/Supervisors/Supervisors.jsx";

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
            element: <h1>Supervisor Dashboard</h1>,
          },
          {
            path: "workspace",
            element: <h1>Supervisor Workspace</h1>,
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
