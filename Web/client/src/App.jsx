import React from "react";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";

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
            element: <AdminDashboard />,
          },
          {
            path: "workspace",
            element: <h1>Admin Workspace</h1>,
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
