import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sv-sidebar h-screen bg-slate-600 w-[40%] test-white font-semibold max-w-[300px] p-5 text-xl">
      <div className="sv-nav-link">
        <NavLink to={"/supervisor/dashboard"}>Dashboard</NavLink> <br />
      </div>
      <div className="sv-nav-link">
        <NavLink to={"clinical-rating"}>Clinical Rating</NavLink> <br />
      </div>
      <div className="sv-nav-link">
        <NavLink to={"progress-report"}>All Progress Reports</NavLink> <br />
      </div>
      <div className="sv-nav-link">
        <NavLink to={"sessions"}>All session notes</NavLink> <br />
      </div>
      <div className="sv-nav-link">
        <NavLink to={"therapy-plans"}>All therapy plans</NavLink> <br />
      </div>
    </div>
  );
};
