import React, { useState } from "react";
import SupervisorDashboardNavbar from "./SupervisorDashboardNavbar";
import CardList from "./CardList";
import Overview from "./Overview";

const SupervisorDashboard = () => {
  const [tab, setTab] = useState("therapist");
  return (
    <div className="bg-[#171821] flex flex-col items-center gap-y-10">
      <SupervisorDashboardNavbar />
      
      <div className="w-[96%] flex border-2 h-12 rounded-3xl">
        <div className={`w-1/2 justify-center flex items-center text-white ${tab=='therapist'?'hover:bg-gray-700':'hover:bg-zinc-700 '} rounded-l-3xl ${tab=='therapist'?'bg-gray-600':'bg-transparent'}`} onClick={()=>setTab("therapist")}>
          Therapists
        </div>
        <div className={`w-1/2 justify-center flex items-center text-white ${tab=='overview'?'bg-gray-600':'bg-transparent'} ${tab=='overview'?'hover:bg-gray-700':'hover:bg-zinc-700 '} rounded-r-3xl`} onClick={()=>setTab("overview")}>
          Overview
        </div>
      </div>

      {tab == 'therapist'?<CardList></CardList>:<Overview/>}
    </div>
  );
};

export default SupervisorDashboard;
