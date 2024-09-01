import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SessionForm = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [patient, setPatient] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const getPatient = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/patient/get-patient/${patientId}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    getPatient();
  }, [patientId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      patient: patientId,
      therapist: "66d3b2a7bed7d26d01a929ee",
      date: selectedDate.toISOString().split("T")[0],
      activitiesPerformed: e.target.activitiesPerformed.value,
      patientResponse: e.target.patientResponse.value,
      notes: e.target.notes.value,
      progress: e.target.progress.value,
      summary: e.target.summary.value,
      nextSteps: e.target.nextSteps.value,
      mood: e.target.mood.value,
    };
    try {
      const sessionResponse = await axios.post(`http://localhost:5000/api/session/add-session-for-patient/${patientId}`, data);
      const session_id = sessionResponse.data._id;
      await axios.post(`http://localhost:5000/api/patient/add-new-session/${patientId}`, { session_id });
      // navigate(`/therapist/workspace/individual-session-information/${session_id}`);
    } catch (error) {
      console.error("Error saving session data:", error);
    }
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white">
      <div className="bg-gray-800 shadow rounded-lg mb-6 p-4">
        <h1 className="text-2xl font-bold mb-4">
          Session Details for {patient.name}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Gender:</strong> {patient.gender}
          </p>
          <p>
            <strong>Problem:</strong> {patient.condition}
          </p>
          <p>
            <strong>Date:</strong> {patient.createdAt ? patient.createdAt.split("T")[0] : new Date().toISOString().split("T")[0]}
          </p>
        </div>
      </div>

      {/* Previous Sessions Section */}
      <div className="bg-gray-800 shadow rounded-lg mb-6 p-4">
        <h2 className="text-xl font-semibold mb-4">Previous Sessions</h2>
        {patient.therapy_sessions && patient.therapy_sessions.length > 0 ? (
          patient.therapy_sessions.map((session_id, index) => (
            <Link
              to={`/therapist/workspace/individual-session-information/${session_id}`}
              className="mb-4 cursor-pointer font-medium block text-blue-400 hover:text-blue-300"
              key={index}
            >
              Session {index + 1}
            </Link>
          ))
        ) : (
          <h1>No sessions found</h1>
        )}
      </div>

      {/* New Session Form Section */}
      <div className="bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">New Session Entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <DatePicker
              id="date"
              name="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              wrapperClassName="w-full"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="activitiesPerformed">
              Activities Performed
            </label>
            <textarea
              id="activitiesPerformed"
              name="activitiesPerformed"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="patientResponse">
              Patient Response
            </label>
            <textarea
              id="patientResponse"
              name="patientResponse"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="notes">
              Session Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="progress">
              Progress
            </label>
            <input
              type="text"
              id="progress"
              name="progress"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="summary">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="nextSteps">
              Next Steps
            </label>
            <input
              type="text"
              id="nextSteps"
              name="nextSteps"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="mood">
              Patient Mood
            </label>
            <select
              id="mood"
              name="mood"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="sad">Sad</option>
              <option value="anxious">Anxious</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Session
          </button>
        </form>
      </div>
    </main>
  );
};

export default SessionForm;
