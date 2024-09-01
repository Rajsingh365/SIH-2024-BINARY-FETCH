import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { SupervisorContextProvider } from "./contexts/SupervisorContext";

export const WorkspaceLayout = () => {
  return (
    <>
      <SupervisorContextProvider>
        <div className="sp-workspace flex">
          <Sidebar />
          <div className="main-content bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white w-full">
            <Outlet />
          </div>
        </div>
      </SupervisorContextProvider>
    </>
  );
};

