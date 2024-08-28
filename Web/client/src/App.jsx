import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FeedbackForm, SessionList, TherapyPlanList } from "./pages/Supervisor";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressReport from './pages/Therapist/ProgressReport';
import ProgressReportList from './pages/Therapist/ProgressReportList';
import SessionForm from "./pages/Therapist/SessionForm.jsx";
import SessionFormList from "./pages/Therapist/SessionFormList.jsx";

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
        <Route path="/therapist/progress-report" element={<ProgressReport />} />
        <Route path="/therapist/progress-report-list" element={<ProgressReportList />} />
        <Route path="/therapist/session-form/:patientId" element={<SessionForm />} />
        <Route path="/therapist/session-list" element={<SessionFormList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;