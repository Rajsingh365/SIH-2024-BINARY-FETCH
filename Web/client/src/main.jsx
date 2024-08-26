import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedbackForm, ProgressReportList, SessionList, TherapyPlanList } from "./pages/Supervisor";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "supervisor/clinical-rating", element: <FeedbackForm /> },
      { path: "supervisor/progress-report-list", element: <ProgressReportList /> },
      { path: "supervisor/sessions-list", element: <SessionList /> },
      { path: "supervisor/therapy-plan-list", element: <TherapyPlanList /> },
      { path: "admin/dashboard", element: <AdminDashboard /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
