import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaInfoCircle, FaBullseye, FaClock, FaHourglassHalf } from "react-icons/fa";

function TherapyList() {
  const navigate = useNavigate();
  const [therapies, setTherapies] = useState([]);

  useEffect(() => {
    const fetchTherapies = async () => {
      // Simulate an API call with a delay
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: "T101",
              therapyName: "Language Comprehension",
              startDate: "2024-01-10",
              status: "Ongoing",
              goals: "Improve coping mechanisms.",
              frequency: "1 time a week",
              duration: "16 weeks",
            },
            {
              id: "T102",
              therapyName: "Speech Fluency",
              startDate: "2024-02-18",
              status: "Completed",
              goals: "Restore physical function.",
              frequency: "3 times a week",
              duration: "8 weeks",
            },
            {
              id: "T103",
              therapyName: "Speech Articulation",
              startDate: "2024-03-12",
              status: "Ongoing",
              goals: "Express emotions through art.",
              frequency: "2 times a week",
              duration: "10 weeks",
            },
            {
              id: "T104",
              therapyName: "Swallowing",
              startDate: "2024-03-12",
              status: "Ongoing",
              goals: "Express emotions through art.",
              frequency: "2 times a week",
              duration: "10 weeks",
            },
          ]);
        }, 1000);
      });

      if (response) {
        setTherapies(response);
      } else {
        // Set default data if the response is empty
        setTherapies([
          {
            id: "Default",
            therapyName: "No Therapy Data Available",
            startDate: "N/A",
            status: "N/A",
            goals: "N/A",
            frequency: "N/A",
            duration: "N/A",
          },
        ]);
      }
    };

    fetchTherapies();
  }, []);

  const handleClick = (id) => {
    navigate(`/therapist/workspace/therapy-page/${id}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Ongoing Therapies</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {therapies.map((therapy) => (
          <div
            key={therapy.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => handleClick(therapy.id)}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">{therapy.therapyName}</h2>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><FaCalendarAlt className="mr-2 text-green-400" /> {therapy.startDate}</p>
                <p className="flex items-center"><FaInfoCircle className="mr-2 text-yellow-400" /> {therapy.status}</p>
                <p className="flex items-center"><FaBullseye className="mr-2 text-red-400" /> {therapy.goals}</p>
                <p className="flex items-center"><FaClock className="mr-2 text-purple-400" /> {therapy.frequency}</p>
                <p className="flex items-center"><FaHourglassHalf className="mr-2 text-pink-400" /> {therapy.duration}</p>
              </div>
            </div>
            <div className="bg-gray-700 p-4 text-right">
              <button className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TherapyList;
