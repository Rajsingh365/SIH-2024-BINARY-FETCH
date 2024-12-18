import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const context = createContext(null);

export const SupervisorContextProvider = ({ children }) => {
  const [planSearchTerm, setPlanSearchTerm] = useState("");
  const [priority, setPriority] = useState("Priority");
  const [time, setTime] = useState("sort");
  const [therapyPlans, setTherapyPlans] = useState([]);
  const [isNewPlans, setIsNewPlans] = useState(true);

  const [sessions, setSessions] = useState([]);

  const [progressReports, setProgressReports] = useState([]);

  const [clinicalRatings, setClinicalRatings] = useState([]);

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

    if (time == "descending") {
      plans = plans.sort((a, b) => {
        const dateA = new Date(a.submissionDate);
        const dateB = new Date(b.submissionDate);

        return dateA - dateB;
      });
    } else if (time == "ascending") {
      plans = plans.sort((a, b) => {
        const dateA = new Date(a.submissionDate);
        const dateB = new Date(b.submissionDate);

        return dateB - dateA;
      });
    }

    setTherapyPlans(plans);
  };

  useEffect(() => {
    fetchTherapyPlans();
  }, [time, priority, isNewPlans]);

  const fetchSessionNotes = async () => {
    const response = await axios.get("http://localhost:8080/sessionNotes");

    let notes = response.data;

    if (time == "descending") {
      notes = notes.sort((a, b) => {
        const dateA = new Date(a.sessionDate);
        const dateB = new Date(b.sessionDate);

        return dateA - dateB;
      });
    } else if (time == "ascending") {
      notes = notes.sort((a, b) => {
        const dateA = new Date(a.sessionDate);
        const dateB = new Date(b.sessionDate);

        return dateB - dateA;
      });
    }

    setSessions(notes);
  };

  const fetchProgressReports = async () => {
    const response = await axios.get("http://localhost:8080/progressReports");

    let reports = response.data;

    if (time == "descending") {
      reports = reports.sort((a, b) => {
        const dateA = new Date(a.reportDate);
        const dateB = new Date(b.reportDate);

        return dateA - dateB;
      });
    } else if (time == "ascending") {
      reports = reports.sort((a, b) => {
        const dateA = new Date(a.reportDate);
        const dateB = new Date(b.reportDate);

        return dateB - dateA;
      });
    }

    setProgressReports(reports);
  };

  useEffect(() => {
    fetchSessionNotes();
    fetchProgressReports();
  }, [time]);

  const fetchClinicalRatings = async () => {
    const response = await axios.get("http://localhost:8080/clinicalRatings");
    setClinicalRatings(response.data);
  };

  useEffect(() => {
    fetchClinicalRatings();
  }, []);

  return (
    <context.Provider
      value={{
        planSearchTerm,
        setPlanSearchTerm,
        priority,
        setPriority,
        time,
        setTime,
        therapyPlans,
        isNewPlans,
        setIsNewPlans,
        sessions,
        progressReports,
        clinicalRatings,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useSupervisorContext = () => {
  return useContext(context);
};
