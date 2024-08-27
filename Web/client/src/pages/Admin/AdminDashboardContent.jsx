import React from "react";
import Header from "../../Dashboards/Admin/Header";
import VisitorsInfo from "../../Dashboards/Admin/Users/VisitorsInfo";
import UsersInfo from "../../Dashboards/Admin/Users/UsersInfo";
import AdminNavbar from "../../Dashboards/Admin/AdminNavbar";
import Users from "../../Dashboards/Admin/Users/Users";
import { Outlet } from "react-router-dom";

const AdminDashboardContent = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <AdminNavbar />
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminDashboardContent;
