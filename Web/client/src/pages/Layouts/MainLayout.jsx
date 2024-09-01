import { Outlet } from "react-router-dom";
import ChatBot from "../../components/ChatBot";
export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <div
        className="cursor-pointer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <ChatBot />
      </div>
    </>
  );
};
