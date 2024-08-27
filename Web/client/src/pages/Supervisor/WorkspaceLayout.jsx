import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export const WorkspaceLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content bg-white text-black">
        <Outlet />
      </div>
    </>
  );
};
