import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle, MdSupervisorAccount } from "react-icons/md";

const UsersInfo = () => {
  const totalUsers = 20000;
  const totalTherapists = 500
  const totalSupervisors = 100
  return (
    <div className="bg-[#21222D] py-10 rounded-lg mx-5 w-[75%] ">
      <h2 className="text-3xl font-semibold ml-10 pb-5">Users Summary</h2>
      <div className=" gap-x-5 flex items-center justify-center p-5 text-3xl text-center ">
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <FaUsers className="text-[#CB964D] " />
          <p className="font-semibold ">{totalUsers}</p>
          <div className="text-[#CB964D]">Total Users </div>
        </div>
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <FaUserDoctor className="text-[#89d4d4]" />
          <p className="font-semibold ">{totalTherapists}</p>
          <div className="text-[#89d4d4]">Total Therapists </div>
        </div>
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <MdOutlineSupervisedUserCircle className=" text-[#BE9FBE]" />
          <p className="font-semibold ">{totalSupervisors}</p>
          <div className="text-[#BE9FBE]">Total Supervisors </div>
        </div>
      </div>
    </div>
  );
};

export default UsersInfo;
