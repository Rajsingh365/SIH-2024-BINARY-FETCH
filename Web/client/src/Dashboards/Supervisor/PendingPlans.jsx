import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Sample data for the table and chart
const therapyPlans = [
  { id: 1, therapist: 'Therapist A', patient: 'John Doe', submissionDate: '2024-08-20', status: 'Pending' },
  { id: 2, therapist: 'Therapist B', patient: 'Jane Smith', submissionDate: '2024-08-21', status: 'Approved' },
  { id: 3, therapist: 'Therapist C', patient: 'Robert Brown', submissionDate: '2024-08-22', status: 'Pending' },
  { id: 4, therapist: 'Therapist A', patient: 'Lucy Johnson', submissionDate: '2024-08-23', status: 'Approved' },
];

const countPlansByStatus = () => {
  const statusCounts = therapyPlans.reduce((acc, plan) => {
    acc[plan.status] = (acc[plan.status] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Therapy Plans',
        data: Object.values(statusCounts),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      },
    ],
  };
};

const PendingPlans = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: countPlansByStatus(),
      options: {
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%] text-white">
      <h2 className="text-2xl font-bold mb-4">Therapy Plans Pending Approval</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8 max-h-96 overflow-y-auto">
        <table className="min-w-full bg-[#2A2B3D] shadow-md rounded text-center">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Plan ID</th>
              <th className="py-2 px-4 border-b border-gray-600">Therapist Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Patient Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Submission Date</th>
              <th className="py-2 px-4 border-b border-gray-600">Approval Status</th>
            </tr>
          </thead>
          <tbody>
            {therapyPlans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-600">
                <td className="py-2 px-4 border-b border-gray-600">{plan.id}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.therapist}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.patient}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.submissionDate}</td>
                <td className="py-2 px-4 border-b border-gray-600">{plan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart */}
      <div className="bg-[#2A2B3D] shadow-md rounded p-4">
        <h3 className="text-xl font-bold mb-4">Pending vs Approved Plans</h3>
        <div className="flex justify-center">
          <canvas ref={chartRef} style={{ width: '300px', height: '300px' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default PendingPlans;