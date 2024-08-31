import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const pendingReports = [
  { id: 1, reportName: 'Progress Report 1', patientName: 'John Doe', sessionsCompleted: 10 },
  { id: 2, reportName: 'Progress Report 2', patientName: 'Jane Smith', sessionsCompleted: 20 },
  { id: 3, reportName: 'Progress Report 3', patientName: 'Robert Brown', sessionsCompleted: 30 },
];

const chartData = {
  labels: pendingReports.map(report => report.patientName),
  datasets: [
    {
      label: 'Sessions Completed',
      data: pendingReports.map(report => report.sessionsCompleted),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#3B3F51',
      },
      ticks: {
        color: '#FFFFFF',
      },
    },
    x: {
      grid: {
        color: '#3B3F51',
      },
      ticks: {
        color: '#FFFFFF',
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF',
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw}`;
        },
      },
    },
  },
};

const PendingReports = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%] text-white">
      <h2 className="text-2xl font-bold mb-4">Pending Progress Reports</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-[#2D2F3A] shadow-md rounded text-center">
          <thead className="bg-[#3B3F51]">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Report Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Patient Name</th>
              <th className="py-2 px-4 border-b border-gray-600">Sessions Completed</th>
              <th className="py-2 px-4 border-b border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingReports.map((report) => (
              <tr key={report.id} className="hover:bg-[#353846]">
                <td className="py-2 px-4 border-b border-gray-600">{report.reportName}</td>
                <td className="py-2 px-4 border-b border-gray-600">{report.patientName}</td>
                <td className="py-2 px-4 border-b border-gray-600">{report.sessionsCompleted}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <a href="/progress-report-form" className="text-blue-400 hover:underline">
                    Submit Report
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="bg-[#2D2F3A] shadow-md rounded p-4">
        <h3 className="text-xl font-bold mb-4">Sessions Completed per Patient</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PendingReports;
