import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Sample data for feedback summary
const feedbackData = [
  { id: 1, feedbackType: 'Therapy Plan', patientName: 'John Doe', feedbackDate: '2024-08-10' },
  { id: 2, feedbackType: 'Session Notes', patientName: 'Jane Smith', feedbackDate: '2024-08-12' },
  { id: 3, feedbackType: 'Progress Report', patientName: 'Robert Brown', feedbackDate: '2024-08-14' },
];

const feedbackCountData = {
  labels: ['Therapy Plan', 'Session Notes', 'Progress Report'],
  datasets: [
    {
      label: 'Feedback Count',
      data: [2, 3, 1], 
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};
const optionBar={
  plugins: {
    legend: {
      labels: {
        color: 'white', 
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white', 
      },
      grid: {
        color: '#444444', 
      },
    },
    y: {
      ticks: {
        color: 'white', 
      },
      grid: {
        color: '#444444', 
      },
      beginAtZero: true,
    },
  },
}

const FeedbackSummary = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%] text-white">
      <h2 className="text-2xl font-bold mb-4">Supervisor Feedback Summary</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-[#2D2E36] shadow-md rounded text-center">
          <thead className="bg-[#3C3D47] text-white">
            <tr>
              <th className="py-2 px-4 border-b">Feedback Type</th>
              <th className="py-2 px-4 border-b">Patient Name</th>
              <th className="py-2 px-4 border-b">Feedback Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr key={feedback.id} className="hover:bg-[#484956]">
                <td className="py-2 px-4 border-b">{feedback.feedbackType}</td>
                <td className="py-2 px-4 border-b">{feedback.patientName}</td>
                <td className="py-2 px-4 border-b">{feedback.feedbackDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="bg-[#2D2E36] shadow-md rounded p-4">
        <h3 className="text-xl font-bold mb-4">Feedback Count by Type</h3>
        <Bar
          data={feedbackCountData}
          options={optionBar}
        />
      </div>
    </div>
  );
};

export default FeedbackSummary;
