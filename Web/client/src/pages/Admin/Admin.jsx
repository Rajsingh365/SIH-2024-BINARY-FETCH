import React, { useState } from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle, MdSupervisorAccount } from "react-icons/md";
import { Link } from 'react-router-dom';
import AdminDashboardContent from './AdminDashboardContent';
const Admin = () => {
  const [currentItem, setCurrentItem]=useState("Users")
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
            <li className={`${currentItem === "Users"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/admin/dashboard/users'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Users")}
              >
                <FaUsers className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li className={`${currentItem === "Therapists"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/admin/dashboard/therapists'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Therapists")}
              >
                <FaUserDoctor className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Therapists</span>
              </Link>
            </li>
            <li className={`${currentItem === "Supervisors"?" bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black": "hover:bg-gray-700"}`}>
              <Link
                to={'/admin/dashboard/supervisors'}
                className="flex items-center p-2 rounded-lg group"
                onClick={()=>handleItemClick("Supervisors")} 
              >
                <MdOutlineSupervisedUserCircle className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Supervisors</span>
              </Link>
            </li>

          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-[#171821]">
        <AdminDashboardContent/>
      </div>
    </div>
  );
}

export default Admin