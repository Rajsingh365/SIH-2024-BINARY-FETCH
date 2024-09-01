import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionFormList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getAllPatients = async () => {
      const response = await fetch(
        "http://localhost:5000/api/patient/get-all-patients"
      );
      const data = await response.json();
      setPatients(data);
      // console.log(data);
    };
    getAllPatients();
  }, []);

  return (
    <main className="flex-1 p-6 bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-6">Session List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient._id}
            id={patient._id}
            name={patient.name}
            age={patient.age}
            gender={patient.gender}
            problem={patient.condition}
          />
        ))}
      </div>
    </main>
  );
};

export default SessionFormList;

const PatientCard = ({ id, name, age, gender, problem }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-sm">Age: {age}</p>
          <p className="text-sm">Gender: {gender}</p>
          <p className="text-sm">Problem: {problem}</p>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400"
            onClick={() => navigate(`/therapist/workspace/session-form/${id}`)}
          >
            Session Details
          </button>
        </div>
      </div>
    </div>
  );
};
