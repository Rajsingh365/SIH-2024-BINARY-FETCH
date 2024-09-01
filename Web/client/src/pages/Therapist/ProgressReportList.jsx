import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProgressReportList = () => {

  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const patientData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patient/get-all-patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
    patientData();
  }, []); 
  return (
    <main className="flex-1 p-6 bg-gray-900">

    {
      patients? (
        <>
        <h1 className="text-3xl font-bold text-white mb-6">
          Progress Report List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {patients.map((patient, index) => (
            // console.log('Patient:', patient)
            <Link to={`/therapist/workspace/progress-report/${patient._id}`} key={index}>
              <ProgressCard
                key={index}
                name={patient.name}
                conditionBefore={patient.additionalInfo.conditionBeforeTherapy}
                conditionAfter={patient.additionalInfo.conditionAfterTherapy}
                />
            </Link>
          ))}
        </div>  
          </>
      ): (
        <div>
          <h1>Loading...</h1>
        </div>
        )}
        </main>
  );
};

export default ProgressReportList;

const ProgressCard = ({ name, conditionBefore, conditionAfter }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-white">{name[0]}</span>{" "}
          </div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-semibold bg-green-600 px-2 py-1 rounded-full">
              Before
            </span>
            <p className="mt-1 text-sm">{conditionBefore}</p>
          </div>
          <div>
            <span className="text-xs font-semibold bg-blue-600 px-2 py-1 rounded-full">
              After
            </span>
            <p className="mt-1 text-sm">{conditionAfter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};