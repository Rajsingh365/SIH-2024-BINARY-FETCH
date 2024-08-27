import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Sample data for upcoming sessions
const upcomingSessions = [
  { id: 1, date: '2024-09-01', time: '10:00 AM', patient: 'John Doe' },
  { id: 2, date: '2024-09-02', time: '11:30 AM', patient: 'Jane Smith' },
  { id: 3, date: '2024-09-03', time: '02:00 PM', patient: 'Robert Brown' },
  { id: 4, date: '2024-09-04', time: '09:00 AM', patient: 'Lucy Johnson' },
];





const UpcomingSessions = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold text-white mb-4">Upcoming Therapy Sessions</h2>

      {/* Data Table */}
      <div className="overflow-x-auto mb-8 max-h-96 overflow-y-auto">
        <table className="min-w-full bg-[#2A2B3B] shadow-md rounded text-center">
          <thead className="bg-[#1F1F2D] text-white">
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Session Date</th>
              <th className="py-2 px-4 border-b border-gray-600">Time</th>
              <th className="py-2 px-4 border-b border-gray-600">Patient Name</th>
            </tr>
          </thead>
          <tbody>
            {upcomingSessions.map((session) => (
              <tr key={session.id} className="hover:bg-[#38394B] text-white">
                <td className="py-2 px-4 border-b border-gray-600">{session.date}</td>
                <td className="py-2 px-4 border-b border-gray-600">{session.time}</td>
                <td className="py-2 px-4 border-b border-gray-600">{session.patient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UpcomingSessions;
