import React from "react";
import { Link } from "react-router-dom";
// import {useAuthContext} from "../context/AuthContext"
// import useLogout from "../hooks/useLogout";

const Navbar = () => {
  // const {authUser}=useAuthContext()
  // const {loading,logout}=useLogout()
  const authUser=true;
  const loading=false;
  const handleLogout=(e)=>{
    e.preventDefault()
    // logout()
  }

  return (

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/report-crime"}>Report a Crime</Link>
          </li>
          <li>
            <Link to={"/police-location"}>Police Station</Link>
          </li>
          <li>
            <Link to={"/crime-map"}>Crime map</Link>
          </li>

          <li>
            <details>
              <summary>More</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/resources"}>Resources</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>About us</Link>
                </li>
                <li>
                  <Link to={"/feedback-form"}>Feedback Form</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {authUser&&<div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <div className="card bg-primary text-primary-content shadow-sm">
                <div className="card-body">
                  <p>You have 3 unread messages. <Link to={"/profile"} className="text-white">Tap here to see.</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={authUser?.profilePic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;