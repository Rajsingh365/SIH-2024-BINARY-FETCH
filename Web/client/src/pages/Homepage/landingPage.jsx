import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white ">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl p-6 space-y-6 md:space-y-0 gap-x-5">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-vector/sleep-time-composition-with-characters-talking-patient-therapist-sitting-chairs-flat-isolated-vector-illustration_1284-66865.jpg?t=st=1725185102~exp=1725188702~hmac=fda787b6dc0a9326589def37ade148b4b72c184ba2493cfd034a49eae7d6fabc&w=900"
            alt="Therapist Session"
            className="w-[45rem] h-auto object-contain"
          />
        </motion.div>
        <motion.div
          className="w-[30rem] bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-6">Welcome to Speech Therapy Hub</h1>
          <div className="flex space-x-4 mb-6">
            <motion.button
              className={`px-4 py-2 rounded-lg ${
                formType === "signup" ? "bg-blue-600" : "bg-gray-700"
              } hover:bg-blue-500 transition-transform duration-300`}
              onClick={() => setFormType("signup")}
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg ${
                formType === "login" ? "bg-blue-600" : "bg-gray-700"
              } hover:bg-blue-500 transition-transform duration-300`}
              onClick={() => setFormType("login")}
              whileHover={{ scale: 1.05 }}
            >
              Log In
            </motion.button>
          </div>
          {formType === "signup" ? <Signup /> : <Login />}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
