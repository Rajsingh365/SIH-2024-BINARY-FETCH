import React from "react";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedbackForm, ProgressReportList, SessionList, TherapyPlanList, WorkspaceLayout } from "./pages/Supervisor";

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
            element: <WorkspaceLayout />,
            children: [
              {
                path: "progress-report",
                element: <ProgressReportList />,
              },
              {
                path: "sessions",
                element: <SessionList />,
              },
              {
                path: "therapy-plans",
                element: <TherapyPlanList />,
              },
              {
                path: "clinical-rating",
                element: <FeedbackForm />,
              },
            ],
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
