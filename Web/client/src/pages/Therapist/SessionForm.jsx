import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSpeechRecognition from '../../hooks/useSpeechRecognition';

const SessionForm = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [patient, setPatient] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    activitiesPerformed: '',
    patientResponse: '',
    notes: '',
    progress: '',
    summary: '',
    nextSteps: '',
  });

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
      ...formData,
    };
    try {
      const sessionResponse = await axios.post(`http://localhost:5000/api/session/add-session-for-patient/${patientId}`, data);
      const session_id = sessionResponse.data._id;
      await axios.post(`http://localhost:5000/api/patient/add-new-session/${patientId}`, { session_id });
      navigate(`/therapist/workspace/individual-session-information/${session_id}`);
    } catch (error) {
      console.error("Error saving session data:", error);
    }
  };

  const handleSpeechResult = (field) => (result) => {
    setFormData((prev) => ({
      ...prev,
      [field]: result,
    }));
  };

  const { startListening: startListeningActivities } = useSpeechRecognition(handleSpeechResult('activitiesPerformed'));
  const { startListening: startListeningResponse } = useSpeechRecognition(handleSpeechResult('patientResponse'));
  const { startListening: startListeningNotes } = useSpeechRecognition(handleSpeechResult('notes'));
  const { startListening: startListeningProgress } = useSpeechRecognition(handleSpeechResult('progress'));
  const { startListening: startListeningSummary } = useSpeechRecognition(handleSpeechResult('summary'));
  const { startListening: startListeningNextSteps } = useSpeechRecognition(handleSpeechResult('nextSteps'));

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

          {['activitiesPerformed', 'patientResponse', 'notes', 'progress', 'summary', 'nextSteps'].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor={field}>
                {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              />
              <button
                type="button"
                onClick={() => {
                  const speechRecognition = {
                    activitiesPerformed: startListeningActivities,
                    patientResponse: startListeningResponse,
                    notes: startListeningNotes,
                    progress: startListeningProgress,
                    summary: startListeningSummary,
                    nextSteps: startListeningNextSteps,
                  }[field];
                  speechRecognition();
                }}
                className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Speak {field.replace(/([A-Z])/g, ' $1')}
              </button>
            </div>
          ))}

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