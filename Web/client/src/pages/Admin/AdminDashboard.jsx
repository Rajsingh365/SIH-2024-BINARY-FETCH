import React from "react";
import RenderBarChart from "./RenderBarChart";
import Header from "./Header";
import UsersInfo from "./UsersInfo";
import VisitorsInfo from "./VisitorsInfo";

const AdminDashboard = () => {
  return (
    <div className="bg-[#171821] min-h-screen flex flex-col items-center gap-y-10">
      <div className="flex py-5 gap-y-3 justify-center w-[90%]">
        <Header/>
      </div>
      <UsersInfo/>
      <VisitorsInfo/>
    </div>
  );
};

export default AdminDashboard;
