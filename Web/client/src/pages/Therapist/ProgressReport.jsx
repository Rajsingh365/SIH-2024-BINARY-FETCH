import React, { useState } from 'react';
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
  const report = 
    {
      name: 'Patient 1',
      conditionBefore: 'Mild stutter',
      conditionAfter: 'Significant improvement',
      date: '2024-08-01',
      progress: [30, 50, 70, 90], // Example progress data
      speechRate: [5, 6, 7, 8],  // Example speech rate over sessions
      articulationAccuracy: [70, 75, 80, 85],  // Example articulation accuracy over sessions
    }



  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
        {/* Patient Information Section */}
        <section className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
        
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Name: {report.name}</h3>
                <p className="text-sm">Condition Before: {report.conditionBefore}</p>
                <p className="text-sm">Condition After: {report.conditionAfter}</p>
                <p className="text-sm">Date: {report.date}</p>

                {/* Progress Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Speech Rate Chart */}
                  <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <Line
                      data={{
                        labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                        datasets: [{
                          label: 'Speech Rate (Words per Minute)',
                          data: report.speechRate,
                          borderColor: '#4ade80',
                          backgroundColor: 'rgba(74, 222, 128, 0.2)',
                        }],
                      }}
                      options={{ maintainAspectRatio: false }}
                      height={150}  // Adjust height for smaller chart
                      width={300}  // Adjust width for smaller chart
                    />
                  </div>

                  {/* Articulation Accuracy Chart */}
                  <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <Line
                      data={{
                        labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                        datasets: [{
                          label: 'Articulation Accuracy (%)',
                          data: report.articulationAccuracy,
                          borderColor: '#60a5fa',
                          backgroundColor: 'rgba(96, 165, 250, 0.2)',
                        }],
                      }}
                      options={{ maintainAspectRatio: false }}
                      height={150}  // Adjust height for smaller chart
                      width={300}  // Adjust width for smaller chart
                    />
                  </div>
                </div>
              </div>

        </section>
      </div>
  );
};

export default ProgressReport;



