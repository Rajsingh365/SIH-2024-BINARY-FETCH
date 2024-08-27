import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto'; 


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample data for the progress reports
const reports = [
  { id: 1, patient: 'John Doe', therapist: 'Therapist A', submissionDate: '2024-08-01', evaluatedDate: '2024-08-05' },
  { id: 2, patient: 'Jane Smith', therapist: 'Therapist B', submissionDate: '2024-08-03', evaluatedDate: '2024-08-06' },
  { id: 3, patient: 'Robert Brown', therapist: 'Therapist A', submissionDate: '2024-08-05', evaluatedDate: '2024-08-10' },
  { id: 4, patient: 'Lucy Johnson', therapist: 'Therapist C', submissionDate: '2024-08-01', evaluatedDate: '2024-08-12' },
];

const generateLineChartData = () => {
  const labels = reports.map(report => report.submissionDate);
  const data = {
    labels,
    datasets: [
      {
        label: 'Reports Submitted',
        data: labels.map(date => reports.filter(report => report.submissionDate === date).length),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Reports Evaluated',
        data: labels.map(date => reports.filter(report => report.evaluatedDate === date).length),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      }
    ],
  };

  return data;
};
const optionLine={
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF'  
      }
    },
    title: {
      display: true,
      text: 'Progress Report Submissions and Evaluations',
      color: '#FFFFFF' 
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#FFFFFF' 
      },
      grid: {
        color: '#444' 
      }
    },
    y: {
      ticks: {
        color: '#FFFFFF' 
      },
      grid: {
        color: '#444' 
      }
    }
  }
}
const ProgressReports = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold mb-4 text-white">Progress Reports Overview</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8 max-h-96 overflow-y-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded text-center text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-2 px-4 border-b">Report ID</th>
              <th className="py-2 px-4 border-b">Patient Name</th>
              <th className="py-2 px-4 border-b">Therapist</th>
              <th className="py-2 px-4 border-b">Submission Date</th>
              <th className="py-2 px-4 border-b">Evaluated Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b">{report.id}</td>
                <td className="py-2 px-4 border-b">{report.patient}</td>
                <td className="py-2 px-4 border-b">{report.therapist}</td>
                <td className="py-2 px-4 border-b">{report.submissionDate}</td>
                <td className="py-2 px-4 border-b">{report.evaluatedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Line Graph */}
      <div className="bg-gray-800 shadow-md rounded p-4">
        <h3 className="text-xl font-bold mb-4 text-white">Progress Report Submissions and Evaluations</h3>
        <Line data={generateLineChartData()} options={optionLine} />
      </div>
    </div>
  );
};

export default ProgressReports;
