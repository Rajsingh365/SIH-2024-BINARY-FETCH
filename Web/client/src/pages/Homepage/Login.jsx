import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("therapist");
  console.log("selectedRole:", selectedRole);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log('formData:', formData);
    try {
      const data = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log('Data:', data);
      toast.success("User registered successfully");
      if (selectedRole == "admin") {
        navigate("/admin/dashboard");
      } else if (selectedRole == "supervisor") {
        navigate("/supervisor/dashboard");
      } else {
        navigate("/therapist/dashboard");
      }
      console.log('worked');
    } catch (error) {
      console.log('Error:', error);
      toast.error("Error registering user", error.message);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Log In</h2>
      <motion.input
        type="text"
        name="email"
        placeholder="Email"
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.select
        name="role"
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileFocus={{ scale: 1.02 }}
      >
        <option value="therapist">Therapist</option>
        <option value="supervisor">Supervisor</option>
        <option value="admin">Admin</option>
      </motion.select>
      <motion.button
        type="submit"
        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Log In
      </motion.button>
    </motion.form>
  );
};

export default Login;
