import React from "react";
import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Admin, Supervisors, Therapists, Users} from './pages/Admin/index.js'
import {SupervisorDashboard, ClinicalRatings, ProgressReportList, SessionList, TherapyPlanList, WorkspaceLayout,NotificationSupervisor } from "./pages/Supervisor";

import {TherapistDashboard, Therapist, SessionFormList,SessionForm,TherapistProgressReportList, ProgressReport,IndividualSessionInformation } from "./pages/Therapist";
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
            element: <Therapist />,
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
              {
                path: "individual-session-information/:sessionId",
                element: <IndividualSessionInformation />,
              }
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
