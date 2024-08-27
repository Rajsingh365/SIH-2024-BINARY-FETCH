import { createContext, useContext, useState } from "react";

const context = createContext(null);

export const SupervisorContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("Priority");
  const [time, setTime] = useState("sort");
  return (
    <context.Provider value={{ searchTerm, setSearchTerm, priority, setPriority, time, setTime }}>
      {children}
    </context.Provider>
  );
};

export const useSupervisorContext = () => {
  return useContext(context);
};
