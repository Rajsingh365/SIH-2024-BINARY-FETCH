import React from 'react';
import { useNavigate } from 'react-router-dom';

const SessionFormList = () => {
  const navigate = useNavigate();

  const patients = [
    { id: 1, name: 'Patient 1', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 2, name: 'Patient 2', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 3, name: 'Patient 3', age: 30, gender: 'Female', problem: 'Articulation Disorder' },
    { id: 4, name: 'Patient 4', age: 30, gender: 'Female', problem: 'Articulation Disorder' },
    { id: 5, name: 'Patient 5', age: 45, gender: 'Male', problem: 'Voice Disorder' },
    { id: 6, name: 'Patient 6', age: 45, gender: 'Male', problem: 'Voice Disorder' },
    { id: 7, name: 'Patient 7', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 8, name: 'Patient 8', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 9, name: 'Patient 9', age: 30, gender: 'Female', problem: 'Articulation Disorder' },
    { id: 10, name: 'Patient 10', age: 30, gender: 'Female', problem: 'Articulation Disorder' },
    { id: 11, name: 'Patient 11', age: 45, gender: 'Male', problem: 'Voice Disorder' },
    { id: 12, name: 'Patient 12', age: 45, gender: 'Male', problem: 'Voice Disorder' },
    { id: 13, name: 'Patient 13', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 14, name: 'Patient 14', age: 24, gender: 'Male', problem: 'Stuttering' },
    { id: 15, name: 'Patient 15', age: 30, gender: 'Female', problem: 'Articulation Disorder' },
    { id: 16, name: 'Patient 16', age: 45, gender: 'Male', problem: 'Voice Disorder' },
  ];

  const Sidebar = () => (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Speech Therapy</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/cases" className="hover:text-gray-400">Cases</a>
          </li>
          <li className="mb-4">
            <a href="/therapy-progress" className="hover:text-gray-400">Therapy Progress</a>
          </li>
          <li className="mb-4">
            <a href="/reports" className="hover:text-gray-400">Reports</a>
          </li>
          <li>
            <a href="/sessions" className="hover:text-gray-400">Sessions</a>
          </li>
        </ul>
      </nav>
    </aside>
  );



  // PatientCard component with updated onClick handler
  const PatientCard = ({ id, name, age, gender, problem }) => (
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
            onClick={() => navigate(`/therapist/session-form/${id}`)}
          >
            Session Details
          </button>
        </div>
      </div>
    </div>
  );

  // MainContent component (unchanged)
  const MainContent = () => (
    <main className="flex-1 p-6 bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-6">Session List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            id={patient.id}
            name={patient.name}
            age={patient.age}
            gender={patient.gender}
            problem={patient.problem}
          />
        ))}
      </div>
    </main>
  );

  // Render the combined layout (unchanged)
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default SessionFormList;