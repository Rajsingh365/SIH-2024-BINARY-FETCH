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

  return };

export default Navbar;