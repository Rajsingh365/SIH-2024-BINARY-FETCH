import React from 'react';

const notifications = [
  { id: 1, type: 'Task Reminder', message: 'Submit session notes for Patient A', link: '/session-notes' },
  { id: 2, type: 'System Update', message: 'New feature added to the dashboard', link: '/dashboard' },
  { id: 3, type: 'Task Reminder', message: 'Therapy plan approval pending for Patient B', link: '/therapy-plans' },
  { id: 4, type: 'Task Reminder', message: 'Progress report submission due for Patient C', link: '/progress-reports' },
];

const NotificationTherapist = () => {
  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold mb-4 text-white">Notification Feed</h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-[#2A2B3A] p-4 rounded shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">{notification.type}</span>
              <a href={notification.link} className="text-blue-400 underline">
                View
              </a>
            </div>
            <p className="text-gray-300">{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationTherapist;
