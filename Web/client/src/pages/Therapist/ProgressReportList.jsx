import React from 'react';

const ProgressReportList = () => {
  // Sample progress data with 16 entries for demonstration
  const progressData = Array.from({ length: 16 }, (_, index) => ({
    name: `Patient ${index + 1}`,
    conditionBefore: 'Condition before therapy',
    conditionAfter: 'Condition after therapy',
  }));

  // Sidebar component
  const Sidebar = () => (
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
  );

  // ProgressCard component with square shape and aligned content
  const ProgressCard = ({ name, conditionBefore, conditionAfter }) => (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-white">{name[0]}</span> {/* Initials or icon */}
          </div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-semibold bg-green-600 px-2 py-1 rounded-full">Before</span>
            <p className="mt-1 text-sm">{conditionBefore}</p>
          </div>
          <div>
            <span className="text-xs font-semibold bg-blue-600 px-2 py-1 rounded-full">After</span>
            <p className="mt-1 text-sm">{conditionAfter}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // MainContent component with responsive grid layout
  const MainContent = () => (
    <main className="flex-1 p-6 bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-6">Progress Report List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {progressData.map((data, index) => (
          <ProgressCard
            key={index}
            name={data.name}
            conditionBefore={data.conditionBefore}
            conditionAfter={data.conditionAfter}
          />
        ))}
      </div>
    </main>
  );

  // Render the combined layout
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default ProgressReportList;
