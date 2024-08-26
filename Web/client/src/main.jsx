import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedbackForm, ProgressReportList, SessionList, TherapyPlanList } from "./pages/Supervisor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/clinical-rating",
    element: <FeedbackForm />,
  },
  {
    path: "/progress-report-list",
    element: <ProgressReportList />,
  },
  {
    path: "/sessions-list",
    element: <SessionList />,
  },
  {
    path: "/therapy-plan-list",
    element: <TherapyPlanList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
