import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    role: 'therapist',
  });
  const [selectedRole, setSelectedRole] = useState("therapist");
  console.log('selectedRole:', selectedRole);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData={
      fullName: e.target.fullName.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: selectedRole,
    }
    if(selectedRole=="therapist"){
      formData.additionalInfo={
        specialization: e.target.specialization.value,
        experience: e.target.experience.value,
        clinic_Affiliation: e.target.clinic_Affiliation.value,
        qualifications: e.target.qualifications.value,
      }
    }
    else if(selectedRole=="supervisor"){
      formData.additionalInfo={
        specialization: e.target.specialization.value,
        department: e.target.department.value,
        experience: e.target.experience.value,
      }
    }
    console.log('formData:', formData);


    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      toast.success('User registered successfully');
      if(selectedRole=="admin"){
        navigate('/admin/dashboard');
      }
      else if(selectedRole=="supervisor"){
        navigate('/supervisor/workspace');
      }
      else{
        navigate('/therapist/workspace');
      }
    } catch (error) {
      toast.error('Error registering user');
      console.log('Error:', error.message);
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
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <motion.input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        whileFocus={{ scale: 1.02 }}
      />

      <motion.input
        type="email"
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
        onChange={(e)=>setSelectedRole(e.target.value)}

        className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileFocus={{ scale: 1.02 }}
      >
        <option value="therapist">Therapist</option>
        <option value="supervisor">Supervisor</option>
        <option value="admin">Admin</option>
      </motion.select>
     {selectedRole=="therapist"? (
      <div className='flex flex-col gap-y-3'>
        <motion.input
          type="text"
          name="specialization"
          placeholder="Specialization"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <motion.input
          type="text"
          name="experience"
          placeholder="Experience"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <motion.input
          type="text"
          name="clinic_Affiliation"
          placeholder="Clinic/Hospital Affiliation"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <motion.input
          type="text"
          name="qualifications"
          placeholder="Qualifications"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

      </div>): null}
     {selectedRole=="supervisor"? (<div
        className="flex flex-col gap-y-3"
      >
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Years of Experience"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

      </div>): null}
      
      <motion.button
        type="submit"
        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold mt-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up
      </motion.button>
    </motion.form>
  );
};

export default Signup;