import React from "react";
// import Header from "../../Dashboards/Admin/Header";
// import AdminNavbar from "../../Dashboards/Admin/AdminNavbar";
import { Outlet } from "react-router-dom";

const TherapistWorkspace = () => {
  return (
    <div className="flex flex-col gap-y-3">
      {/* <AdminNavbar /> */}
      <Outlet />
    </div>
  );
};

export default TherapistWorkspace




