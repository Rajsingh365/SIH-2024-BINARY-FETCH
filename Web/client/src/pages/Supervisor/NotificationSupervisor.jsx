import React from 'react'

export const NotificationSupervisor = () => {
  // Sample notification data
const notifications = [
  { id: 1, type: 'Task', message: 'Pending approval for therapy plan submission.', date: '2024-08-27' },
  { id: 2, type: 'Feedback', message: 'New feedback received from Supervisor for Patient A.', date: '2024-08-26' },
  { id: 3, type: 'Update', message: 'System maintenance scheduled for 2024-08-30.', date: '2024-08-25' },
];
  return (
    <div className="bg-[#1F1F1F] p-6 py-10 rounded-lg mx-5 w-[90%]">
      <h2 className="text-2xl font-bold mb-4 text-white">Notification Feed</h2>
      
      {/* Notification Cards */}
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="bg-[#2D2D2D] p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-white">{notification.type}</span>
              <span className="text-sm text-gray-400">{notification.date}</span>
            </div>
            <p className="text-gray-300">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
