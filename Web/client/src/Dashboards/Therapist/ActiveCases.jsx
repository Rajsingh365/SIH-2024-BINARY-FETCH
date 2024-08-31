import React from 'react';
import { Bar } from 'react-chartjs-2';

// Sample data for active cases
const activeCases = [
  { id: 1, patientName: 'John Doe', status: 'Ongoing' },
  { id: 2, patientName: 'Jane Smith', status: 'On Hold' },
  { id: 3, patientName: 'Robert Brown', status: 'Completed' },
  { id: 4, patientName: 'Lucy Johnson', status: 'Ongoing' },
];

const countCasesByStatus = () => {
  const statusCounts = activeCases.reduce((acc, caseItem) => {
    acc[caseItem.status] = (acc[caseItem.status] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Case Status',
        data: Object.values(statusCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
};

const optionBar={
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#FFFFFF',
      }
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#FFFFFF',
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF',
      },
    },
  },
}
const ActiveCases = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold text-white mb-4">Active Cases</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8 max-h-96 overflow-y-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded text-center">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600 text-white">Case ID</th>
              <th className="py-2 px-4 border-b border-gray-600 text-white">Patient Name</th>
              <th className="py-2 px-4 border-b border-gray-600 text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {activeCases.map((caseItem) => (
              <tr key={caseItem.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-600 text-white">{caseItem.id}</td>
                <td className="py-2 px-4 border-b border-gray-600 text-white">{caseItem.patientName}</td>
                <td className="py-2 px-4 border-b border-gray-600 text-white">{caseItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-800 shadow-md rounded p-4">
        <h3 className="text-xl font-bold text-white mb-4">Case Status Distribution</h3>
        <Bar data={countCasesByStatus()} options={optionBar} />
      </div>
    </div>
  );
};

export default ActiveCases;
