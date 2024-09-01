import React, { useState } from 'react'
import TherapistDashboardNavbar from './TherapistDashboardNavbar'
import Overview from './Overview'
import PatientCardList from './PatientCardList';

const TherapistDashboard = () => {
  const [tab, setTab] = useState("patient");
  return (
    
      <div className="bg-[#171821] flex flex-col items-center gap-y-10">
      <TherapistDashboardNavbar/> 
      
      <div className="w-[96%] flex border-2 h-12 rounded-3xl">
        <div className={`w-1/2 justify-center flex items-center text-white ${tab=='patient'?'hover:bg-gray-700':'hover:bg-zinc-700 '} rounded-l-3xl ${tab=='patient'?'bg-gray-600':'bg-transparent'}`} onClick={()=>setTab("patient")}>
          Patients
        </div>
        <div className={`w-1/2 justify-center flex items-center text-white ${tab=='overview'?'bg-gray-600':'bg-transparent'} ${tab=='overview'?'hover:bg-gray-700':'hover:bg-zinc-700 '} rounded-r-3xl`} onClick={()=>setTab("overview")}>
          Overview
        </div>
      </div>

      {tab == 'patient'?<PatientCardList></PatientCardList>:<Overview/>}
    </div>
  )
}

export default TherapistDashboard