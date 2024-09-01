import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PatientCard from "./PatientCard"; // Import the PatientCard component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faNotesMedical, faSyncAlt, faBullseye, faClock } from '@fortawesome/free-solid-svg-icons';

// Dummy patient data for example
const dummyPatientData = {
  therapyId: "TP001",
  patientName: "Liam Johnson",
  patientAge: 7,
  condition: "Articulation Disorder",
  submissionDate: "2024-08-20",
  status: "Awaiting Review",
  priority: "High",
  goals: "Improve articulation of specific sounds.",
  activities: "Sound production drills, word repetition exercises.",
  duration: "12 weeks",
};

function TherapyPage() {
  const { therapyId } = useParams();
  const [therapy, setTherapy] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTherapyData = async () => {
      setLoading(true);
      try {
        // Simulate an API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulated API response
        const response = {
          patienttherapyId: `P${therapyId.slice(1)}`,
          conditionName: "Articulation Disorder",
          therapyName: "Speech Therapy",
          startDate: new Date().toISOString().split('T')[0],
          status: "Ongoing",
          goals: "Improve articulation of specific sounds.",
          frequency: "2 times a week",
          duration: "12 weeks",
          nextSession: new Date(Date.now() + Math.floor(Math.random() * 7) * 86400000).toISOString().split('T')[0],
        };

        setTherapy(response);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch therapy data");
        setLoading(false);
      }
    };

    fetchTherapyData();
  }, [therapyId]);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-slate-900 min-h-screen text-white p-8 w-full mx-auto shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Therapy Report</h1>
      <div className="border-t-2 border-gray-300 pt-4">
        <h2 className="text-xl mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 mr-2" />
          Patient therapyId: {therapy.patienttherapyId}
        </h2>
        <h2 className="text-xl mb-2">
          <FontAwesomeIcon icon={faBullseye} className="text-red-500 mr-2" />
          Condition: {therapy.conditionName}
        </h2>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <PatientCard patient={dummyPatientData} /> {/* Render the PatientCard */}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: faNotesMedical, title: "Therapy", value: therapy.therapyName, color: "text-teal-500" },
          { icon: faCalendarAlt, title: "Start Date", value: therapy.startDate, color: "text-blue-500" },
          { icon: faSyncAlt, title: "Status", value: therapy.status, color: "text-yellow-500" },
          { icon: faBullseye, title: "Goals", value: therapy.goals, color: "text-red-500" },
          { icon: faClock, title: "Duration", value: therapy.duration, color: "text-purple-500" },
          { icon: faCalendarAlt, title: "Next Session", value: therapy.nextSession, color: "text-orange-500" },
          { icon: faSyncAlt, title: "Frequency", value: therapy.frequency, color: "text-yellow-500" },
        ].map((card, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold">
              <FontAwesomeIcon icon={card.icon} className={`${card.color} mr-2`} />
              {card.title}:
            </h2>
            <p className="text-lg">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TherapyPage;
