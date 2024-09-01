import React from "react";
import { FaUser, FaCalendarAlt, FaInfoCircle, FaBullseye, FaTasks, FaHourglassHalf } from "react-icons/fa";

const PatientCard = ({ patient }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {patient.patientName}
        </h2>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <FaUser className="mr-2 text-blue-400" /> Age: {patient.patientAge}
          </p>
          <p className="flex items-center">
            <FaInfoCircle className="mr-2 text-green-400" /> Condition: {patient.condition}
          </p>
          <p className="flex items-center">
            <FaCalendarAlt className="mr-2 text-yellow-400" /> Submitted: {patient.submissionDate}
          </p>
          <p className="flex items-center">
            <FaInfoCircle className="mr-2 text-red-400" /> Status: {patient.status}
          </p>
          <p className="flex items-center">
            <FaInfoCircle className="mr-2 text-purple-400" /> Priority: {patient.priority}
          </p>
          <p className="flex items-center">
            <FaBullseye className="mr-2 text-pink-400" /> Goals: {patient.goals}
          </p>
          <p className="flex items-center">
            <FaTasks className="mr-2 text-indigo-400" /> Activities: {patient.activities}
          </p>
          <p className="flex items-center">
            <FaHourglassHalf className="mr-2 text-orange-400" /> Duration: {patient.duration}
          </p>
        </div>
      </div>
      <div className="bg-gray-700 p-4 flex justify-end space-x-2">
        <button className="text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded">
          ✅
        </button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded">
          ❌
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
