import React from "react";
import { Toaster } from "react-hot-toast";

import { MainLayout } from "./pages/Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Admin, Supervisors, Therapists, Users} from './pages/Admin/index.js'
import {SupervisorDashboard, ClinicalRatings, ProgressReportList, SessionList, TherapyPlanList, ReviewPlan, WorkspaceLayout,NotificationSupervisor } from "./pages/Supervisor";
import {TherapistDashboard, Therapist, SessionFormList,SessionForm,TherapistProgressReportList, ProgressReport, IndividualSessionInformation, TherapyList, TherapyPage, NotificationFeed,CreateTherapyPlan,TherapyPlanStatus } from "./pages/Therapist";
import {LandingPage, Signup, Login} from "./pages/Homepage";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
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
                path: "therapy-plans/review/:planId",
                element: <ReviewPlan />
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
                path: "progress-report/:patientId",
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
              },
              {
                path: "therapy-list",
                element: <TherapyList />,
              },
              {
                path: "therapy-page/:therapyId",
                element: <TherapyPage />,
              },
              {
                path: "create-therapy-plan/:patientId",
                element: <CreateTherapyPlan />,
              },
              {
                path: "therapy-plan-status/",
                element: <TherapyPlanStatus />,
              }
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <>
  <RouterProvider router={router}></RouterProvider>;
   <Toaster />
  </>
  
};

export default App;
