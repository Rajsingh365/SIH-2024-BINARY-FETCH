import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const context = createContext(null);

export const SupervisorContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("Priority");
  const [time, setTime] = useState("sort");
  const [therapyPlans, setTherapyPlans] = useState([]);
  const [isNewPlans, setIsNewPlans] = useState(true);

  const fetchTherapyPlans = async () => {
    const response = await axios.get("http://localhost:8080/therapyPlans");

    let plans = response.data;

    plans = plans.filter((item) => {
      if (isNewPlans) {
        return item.status == "Awaiting Review";
      }
      return item.status == "Under Revision";
    });

    if (priority == "low" || priority == "medium" || priority == "high") {
      plans = plans.filter((item) => item.priority.toLowerCase() == priority);
    }

    if (time == "ascending") {
      plans = plans.sort((a, b) => {
        const dateA = new Date(a.submissionDate);
        const dateB = new Date(b.submissionDate);

        return dateA - dateB;
      });
    } else if (time == "descending") {
      plans = plans.sort((a, b) => {
        const dateA = new Date(a.submissionDate);
        const dateB = new Date(b.submissionDate);

        return dateB - dateA;
      });
    }

    setTherapyPlans(plans);

    console.log(response.data);
  };

  useEffect(() => {
    fetchTherapyPlans();
  }, [time, priority, isNewPlans]);

  return (
    <context.Provider
      value={{
        searchTerm,
        setSearchTerm,
        priority,
        setPriority,
        time,
        setTime,
        therapyPlans,
        isNewPlans,
        setIsNewPlans,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useSupervisorContext = () => {
  return useContext(context);
};
