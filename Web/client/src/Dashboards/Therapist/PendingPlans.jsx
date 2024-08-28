import React from 'react';
import { Bar } from 'react-chartjs-2';

// Sample data for pending therapy plans
const pendingPlans = [
  { id: 1, planName: 'Speech Improvement', patient: 'John Doe', submissionDate: '2024-08-10', status: 'Awaiting Approval' },
  { id: 2, planName: 'Language Skills', patient: 'Jane Smith', submissionDate: '2024-08-12', status: 'Draft' },
  { id: 3, planName: 'Cognitive Therapy', patient: 'Robert Brown', submissionDate: '2024-08-14', status: 'Awaiting Approval' },
];

const PendingPlans = () => {
  const data = {
    labels: pendingPlans.map(plan => plan.planName),
    datasets: [
      {
        label: 'Status',
        data: pendingPlans.map(plan => plan.status === 'Awaiting Approval' ? 1 : 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#4b5563', 
        },
      },
      x: {
        grid: {
          color: '#4b5563', 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', 
        },
      },
    },
  };

  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold text-white mb-4">Pending Therapy Plans</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8 max-h-96 overflow-y-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded text-center">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Plan Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Patient Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Submission Date</th>
              <th className="py-2 px-4 border-b border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingPlans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-700 text-white">
                <td className="py-2 px-4 border-b border-gray-600">{plan.planName}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.patient}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.submissionDate}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-800 shadow-md rounded p-4">
        <h3 className="text-xl font-bold text-white mb-4">Therapy Plans Status {'(Awaiting Approval)'}</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PendingPlans;
