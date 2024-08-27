import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import {
  MdOutlineSupervisedUserCircle,
  MdSupervisorAccount,
} from "react-icons/md";

const UsersInfo = () => {
  const totalUsers = 20101;
  return (
    <div className="bg-[#21222D] py-10 rounded-lg mx-5 w-[90%] ">
      <h2 className="text-3xl font-semibold ml-10 pb-5">Users Summary</h2>
      <div className=" gap-x-5 flex items-center justify-center p-5 text-3xl text-center ">
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <div className="stat place-items-center">
          <div class="stat-figure text-secondary">
            <FaUsers className="text-[#CB964D] " />
          </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-[#CB964D]">{totalUsers}</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <div className="stat place-items-center">
            <div className="stat-title">New Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersInfo;
