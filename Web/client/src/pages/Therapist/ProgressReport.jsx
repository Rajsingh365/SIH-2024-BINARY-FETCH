import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ProgressReport = () => {
  const report = {
    name: 'Patient 1',
    conditionBefore: 'Mild stutter',
    conditionAfter: 'Significant improvement',
    date: '2024-08-01',
    progress: [30, 50, 70, 90],
    speechRate: [5, 6, 7, 8],
    articulationAccuracy: [70, 75, 80, 85],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Ensures the chart does not maintain its aspect ratio
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: '#444' }
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#444' }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col lg:flex-row p-6">
      {/* Patient Information Section */}
      <section className="bg-gray-800 p-8 rounded-lg mb-6 shadow-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Patient Progress Report</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Patient Information</h3>
          <p className="text-lg mb-2"><span className="font-semibold">Name:</span> {report.name}</p>
          <p className="text-lg mb-2"><span className="font-semibold">Condition Before:</span> {report.conditionBefore}</p>
          <p className="text-lg mb-2"><span className="font-semibold">Condition After:</span> {report.conditionAfter}</p>
          <p className="text-lg mb-6"><span className="font-semibold">Date:</span> {report.date}</p>
        </div>

        {/* Progress Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Speech Rate Chart */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg" style={{ height: '300px' }}>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Speech Rate Over Sessions</h4>
            <div className="h-full">
              <Line
                data={{
                  labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                  datasets: [{
                    label: 'Words per Minute',
                    data: report.speechRate,
                    borderColor: '#4ade80',
                    backgroundColor: 'rgba(74, 222, 128, 0.2)',
                    pointBackgroundColor: '#4ade80',
                    pointBorderColor: '#fff',
                  }],
                }}
                options={chartOptions}
              />
            </div>
          </div>

          {/* Articulation Accuracy Chart */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg" style={{ height: '300px' }}>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Articulation Accuracy Over Sessions</h4>
            <div className="h-full">
              <Line
                data={{
                  labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                  datasets: [{
                    label: 'Accuracy (%)',
                    data: report.articulationAccuracy,
                    borderColor: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    pointBackgroundColor: '#60a5fa',
                    pointBorderColor: '#fff',
                  }],
                }}
                options={chartOptions}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressReport;
