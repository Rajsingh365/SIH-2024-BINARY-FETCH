import React from 'react';
import { Bar } from 'react-chartjs-2';

// Sample data for the table and chart
const cases = [
  { id: 1, patient: 'John Doe', therapist: 'Therapist A', startDate: '2024-08-01', status: 'Active' },
  { id: 2, patient: 'Jane Smith', therapist: 'Therapist B', startDate: '2024-08-03', status: 'Active' },
  { id: 3, patient: 'Robert Brown', therapist: 'Therapist A', startDate: '2024-08-05', status: 'Active' },
  { id: 4, patient: 'Lucy Johnson', therapist: 'Therapist C', startDate: '2024-08-07', status: 'Active' },
];

const countCasesPerTherapist = () => {
  const therapistCounts = cases.reduce((acc, caseItem) => {
    acc[caseItem.therapist] = (acc[caseItem.therapist] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(therapistCounts),
    datasets: [
      {
        label: 'Active Cases',
        data: Object.values(therapistCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
};

const CasesPerTherapist = () => {
  return (
    <div className="bg-gray-900 text-white p-6 py-10 rounded-lg mx-5 w-full">
      <h2 className="text-2xl font-bold mb-4">Therapy Cases Overview</h2>

      {/* Data Table */}
      <div className="overflow-x-auto max-h-96 overflow-y-auto mb-8">
        <table className="min-w-full bg-gray-800 text-white shadow-md rounded text-center">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Case ID</th>
              <th className="py-2 px-4 border-b border-gray-600">Patient Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Therapist</th>
              <th className="py-2 px-4 border-b border-gray-600">Start Date</th>
              <th className="py-2 px-4 border-b border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem) => (
              <tr key={caseItem.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-600">{caseItem.id}</td>
                <td className="py-2 px-4 border-b border-gray-600">{caseItem.patient}</td>
                <td className="py-2 px-4 border-b border-gray-600">{caseItem.therapist}</td>
                <td className="py-2 px-4 border-b border-gray-600">{caseItem.startDate}</td>
                <td className="py-2 px-4 border-b border-gray-600">{caseItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-800 p-4 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Active Cases per Therapist</h3>
        <Bar
          data={countCasesPerTherapist()}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: 'white', // Legend text color
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: 'white', // X-axis labels color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)', // X-axis grid line color
                },
              },
              y: {
                ticks: {
                  color: 'white', // Y-axis labels color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid line color
                },
              },
            },
          }}

          height='50px'
        />
      </div>
    </div>
  );
};

export default CasesPerTherapist;
