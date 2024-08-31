import React from "react";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Admin, Supervisors, Therapists, Users} from './pages/Admin/index.js'
import {TherapistDashboard} from "./pages/Therapist/index.js";
import {SupervisorDashboard, ClinicalRatings, ProgressReportList, SessionList, TherapyPlanList, WorkspaceLayout,NotificationSupervisor } from "./pages/Supervisor";
import ProgressReport from "./pages/Therapist/ProgressReport";
import TherapistProgressReportList from "./pages/Therapist/ProgressReportList";
import SessionForm from "./pages/Therapist/SessionForm.jsx";
import SessionFormList from "./pages/Therapist/SessionFormList.jsx";
import WorkspaceLayoutTherapist from "./pages/Therapist/WorkspaceLayoutTherapist.jsx";

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
            path: "dashboard",
            element: <TherapistDashboard/>,
          },
          {
            path: "workspace",
            element: <WorkspaceLayoutTherapist />,
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
