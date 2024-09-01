import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sv-sidebar min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black w-full max-w-[230px] p-5 shadow-lg border-r-2 border-blue-300">
      <div className="flex flex-col space-y-4">
        <NavLink
          to="/supervisor/dashboard"
          className={({ isActive }) =>
            `sv-nav-link transition-all duration-300 font-semibold rounded-lg p-2 ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-blue-700 hover:shadow-lg'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="therapy-plans"
          className={({ isActive }) =>
            `sv-nav-link transition-all duration-300 font-semibold rounded-lg p-2 ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-blue-700 hover:shadow-lg'
            }`
          }
        >
          All Therapy Plans
        </NavLink>
        <NavLink
          to="progress-report"
          className={({ isActive }) =>
            `sv-nav-link transition-all duration-300 font-semibold rounded-lg p-2 ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-blue-700 hover:shadow-lg'
            }`
          }
        >
          All Progress Reports
        </NavLink>
        <NavLink
          to="sessions"
          className={({ isActive }) =>
            `sv-nav-link transition-all duration-300 font-semibold rounded-lg p-2 ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-blue-700 hover:shadow-lg'
            }`
          }
        >
          All Session Notes
        </NavLink>
        <NavLink
          to="clinical-rating"
          className={({ isActive }) =>
            `sv-nav-link transition-all duration-300 font-semibold rounded-lg p-2 ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-blue-700 hover:shadow-lg'
            }`
          }
        >
          Clinical Rating
        </NavLink>
      </div>
    </div>
  );
};




