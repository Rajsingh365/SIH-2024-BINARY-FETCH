import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCircle } from 'react-icons/fa';
import { set } from 'mongoose';

const statusStyles = {
  Await: 'bg-yellow-500 text-white',
  Appro: 'bg-green-500 text-white',
  Rejec: 'bg-red-500 text-white',
};

const TherapyPlanStatus = () => {
  const [therapyPlanStatus, setTherapyPlanStatus] = useState([]);
  const [patientName, setPatientName] = useState({});
  useEffect(() => {
    const fetchTherapyPlanStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plan/get-all-plan');
        console.log('TherapyPlanStatus:', response.data);
        setTherapyPlanStatus(response.data);

      } catch (error) {
        console.error("Error fetching therapy plan status:", error);
      }
    };
    fetchTherapyPlanStatus();
  }, []);

  return (
    <div className="flex flex-col p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Therapy Plan Status</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Patient Name</th>
              <th className="py-3 px-4 text-left">Goals</th>
              <th className="py-3 px-4 text-left">Activities</th>
              <th className="py-3 px-4 text-left">Duration</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Submission Date</th>
              <th className="py-3 px-4 text-left">Review Date</th>
              <th className="py-3 px-4 text-left">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {therapyPlanStatus.map((plan, index) => (
              <tr key={plan._id} className="border-b border-gray-700">
                <td className="py-3 px-4">{plan.patient.name}</td>
                <td className="py-3 px-4">{plan.goals}</td>
                <td className="py-3 px-4">{plan.activities}</td>
                <td className="py-3 px-4">{plan.duration}</td>
                <td className={`py-3 px-4 ${statusStyles[plan.status.slice(0,5)]}`}>
                  {/* <FaCircle className="inline-block mr-2" /> */}
                  {plan.status}
                </td>
                <td className="py-3 px-4">{new Date(plan.submissionDate).toLocaleDateString()}</td>
                <td className="py-3 px-4">{plan.reviewDate ? new Date(plan.reviewDate).toLocaleDateString() : 'N/A'}</td>
                <td className="py-3 px-4">{plan.feedback || 'No feedback'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TherapyPlanStatus;
