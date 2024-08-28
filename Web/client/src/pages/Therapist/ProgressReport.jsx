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
  const [reports, setReports] = useState([
    {
      name: 'Patient 1',
      conditionBefore: 'Mild stutter',
      conditionAfter: 'Significant improvement',
      date: '2024-08-01',
      progress: [30, 50, 70, 90], // Example progress data
      speechRate: [5, 6, 7, 8],  // Example speech rate over sessions
      articulationAccuracy: [70, 75, 80, 85],  // Example articulation accuracy over sessions
    },
    {
      name: 'Patient 2',
      conditionBefore: 'Severe stutter',
      conditionAfter: 'Moderate improvement',
      date: '2024-08-10',
      progress: [20, 40, 60, 80], // Example progress data
      speechRate: [4, 5, 6, 7],  // Example speech rate over sessions
      articulationAccuracy: [60, 65, 70, 75],  // Example articulation accuracy over sessions
    },
    // Add more sample data if needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
   
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Speech Therapy</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/cases" className="hover:text-gray-400">Cases</a>
          </li>
          <li className="mb-4">
            <a href="/therapy-progress" className="hover:text-gray-400">Therapy Progress</a>
          </li>
          <li className="mb-4">
            <a href="/reports" className="hover:text-gray-400">Reports</a>
          </li>
          <li>
            <a href="/sessions" className="hover:text-gray-400">Sessions</a>
          </li>
        </ul>
      </nav>
    </aside>
  
      <div className="flex-1 p-4">
        {/* Search Bar */}
        <div className="flex items-center mb-6 bg-gray-800 rounded-lg p-2">
          <input
            type="text"
            placeholder="Search reports..."
            className="bg-transparent text-white border-none outline-none placeholder-gray-400 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Patient Information Section */}
        <section className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
          {filteredReports.length > 0 ? (
            filteredReports.map((report, index) => (
              <div key={index} className="mb-6">
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
            ))
          ) : (
            <p className="text-gray-400">No reports found.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProgressReport;
