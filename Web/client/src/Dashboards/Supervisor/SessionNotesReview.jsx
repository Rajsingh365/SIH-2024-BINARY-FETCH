import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

// Sample data for the charts
const sessionNotes = [
  { date: '2024-08-01', submitted: 5, reviewed: 3 },
  { date: '2024-08-02', submitted: 7, reviewed: 4 },
  { date: '2024-08-03', submitted: 6, reviewed: 5 },
  { date: '2024-08-04', submitted: 8, reviewed: 6 },
  { date: '2024-08-05', submitted: 4, reviewed: 2 },
];

const barChartData = {
  labels: sessionNotes.map(note => note.date),
  datasets: [
    {
      label: 'Session Notes Submitted',
      data: sessionNotes.map(note => note.submitted),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const lineChartData = {
  labels: sessionNotes.map(note => note.date),
  datasets: [
    {
      label: 'Reviewed Notes',
      data: sessionNotes.map(note => note.reviewed),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      fill: true,
    },
    {
      label: 'Pending Notes',
      data: sessionNotes.map(note => note.submitted - note.reviewed),
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      fill: true,
    },
  ],
};

const optionBar={
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF'
      }
    },
    title: {
      display: true,
      text: 'Frequency of Session Notes Submissions',
      color: '#FFFFFF'
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        color: '#333'
      }
    },
    y: {
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        color: '#333'
      }
    }
  }
}
const optionLine={
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF'
      }
    },
    title: {
      display: true,
      text: 'Reviewed vs Pending Session Notes',
      color: '#FFFFFF'
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        color: '#333'
      }
    },
    y: {
      ticks: {
        color: '#FFFFFF'
      },
      grid: {
        color: '#333'
      }
    }
  }
}
const SessionNotesReview = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-full text-white">
      <h2 className="text-2xl font-bold mb-4">Session Notes Review</h2>

      {/* Bar Chart */}
      <div className="bg-[#2A2B3D] shadow-md rounded p-4 mb-8">
        <h3 className="text-xl font-bold mb-4">Session Notes Submissions</h3>
        <Bar data={barChartData} options={optionBar} height={'50px'}/>
      </div>

      {/* Line Graph */}
      <div className="bg-[#2A2B3D] shadow-md rounded p-4">
        <h3 className="text-xl font-bold mb-4">Reviewed vs Pending Notes</h3>
        <Line data={lineChartData} options={optionLine} height={'50px'}/>
      </div>
    </div>
  );
};

export default SessionNotesReview;
