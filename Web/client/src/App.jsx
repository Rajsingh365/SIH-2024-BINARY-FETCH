import React from "react";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClinicalRatings, ProgressReportList, SessionList, TherapyPlanList, WorkspaceLayout } from "./pages/Supervisor";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

import ProgressReport from "./pages/Therapist/ProgressReport";
import TherapistProgressReportList from "./pages/Therapist/ProgressReportList";
import SessionForm from "./pages/Therapist/SessionForm.jsx";
import SessionFormList from "./pages/Therapist/SessionFormList.jsx";

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
                element: <ClinicalRatings />,
              },
            ],
          },
        ],
      },
      {
        path: "/therapist",
        children: [
          {
            path: "progress-report",
            element: <ProgressReport />,
          },
          {
            path: "progress-report-list",
            element: <TherapistProgressReportList />,
          },
          {
            path: "session-list",
            element: <SessionFormList />,
          },
          {
            path: "session-form/:patientId",
            element: <SessionForm />,
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
