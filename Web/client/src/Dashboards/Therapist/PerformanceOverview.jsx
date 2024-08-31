import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Filler,
  PointElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
);

const barChartData = {
  labels: ['Active Cases', 'Approved Plans', 'Completed Sessions'],
  datasets: [
    {
      label: 'Metrics',
      data: [10, 5, 20], 
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], 
  datasets: [
    {
      label: 'Patient Progress',
      data: [50, 60, 70, 80, 90], 
      fill: false,
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.1,
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

const PerformanceOverview = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%] text-white">
      <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>

      {/* Bar Chart */}
      <div className="bg-[#2D2F3A] shadow-md rounded p-4 mb-8">
        <h3 className="text-xl font-bold mb-4">Metrics Overview</h3>
        <Bar data={barChartData} options={chartOptions} />
      </div>

      {/* Line Graph */}
      <div className="bg-[#2D2F3A] shadow-md rounded p-4 mb-8">
        <h3 className="text-xl font-bold mb-4">Patient Progress Trends</h3>
        <Line data={lineChartData} options={chartOptions} />
      </div>

    </div>
  );
};

export default PerformanceOverview;
