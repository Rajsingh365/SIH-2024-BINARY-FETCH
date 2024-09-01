import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle, MdSupervisorAccount } from "react-icons/md";
import { Link } from 'react-router-dom';
// import AdminDashboardContent from './AdminDashboardContent';
import { useNavigate } from 'react-router-dom';
import TherapistWorkspace from './TherapistWorkspace';

const Therapist = () => {
  const [currentItem, setCurrentItem]=useState("Cases")
  const navigate = useNavigate()
  useEffect(()=>{
    // navigate('/therapist/workspace/case-list')
  },[])
  const handleItemClick=(item)=>{
    setCurrentItem(item)
  }

  return (
    <div className="">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-500 bg-[#171821] shadow-lg"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#171821]">
          <ul className="space-y-2 font-medium text-white">

            <li className={`${currentItem === "Dashboard"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/therapist/dashboard'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Dashboard")}
              >
                <FaUsers className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </Link>
            </li>

            <li className={`${currentItem === "Cases"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/therapist/workspace/case-list'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Cases")}
              >
                <FaUsers className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Cases</span>
              </Link>
            </li>


            <li className={`${currentItem === "Therapy Progress"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/therapist/workspace/therapy-list'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Therapy Progress")}
              >
                <FaUserDoctor className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Therapy Progress</span>
              </Link>
            </li>


            <li className={`${currentItem === "Sessions"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/therapist/workspace/session-list'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Sessions")} 
              >
                <MdOutlineSupervisedUserCircle className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sessions</span>
              </Link>
            </li>
            <li className={`${currentItem === "Reports"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/therapist/workspace/progress-report-list'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Reports")} 
              >
                <MdOutlineSupervisedUserCircle className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-[#171821]">
        <TherapistWorkspace/>
      </div>
    </div>
  );
}

export default Therapist


