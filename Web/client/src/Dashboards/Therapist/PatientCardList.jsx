import React, { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
function PatientCardList() {
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
  // const patients =
  //   {
  //     id: '10001',
  //     name: 'Rajesh Kumar',
  //     photo: 'path/to/photo1.jpg',
  //     age: 45,
  //     gender: 'Male',
  //     diagnosis: 'Aphasia',
  //     therapist: 'Dr. Anjali Mehta',
  //     currentTherapyPlan: 'Speech Therapy - Phase 2',
  //     nextSession: '2024-09-05',
  //     status: 'Ongoing',
  //   },

  return (
    <div className="w-full">
      <ul className="w-[90%] flex flex-wrap items-center m-auto gap-3">
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </ul>
    </div>
  );
}

export default PatientCardList;