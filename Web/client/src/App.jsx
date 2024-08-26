import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FeedbackForm, ProgressReportList, SessionList, TherapyPlanList } from "./pages/Supervisor";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/supervisor/clinical-rating" element={<FeedbackForm />} />
        <Route path="/supervisor/progress-report-list" element={<ProgressReportList />} />  
        <Route path="/supervisor/sessions-list" element={<SessionList />} />
        <Route path="/supervisor/therapy-plan-list" element={<TherapyPlanList />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
