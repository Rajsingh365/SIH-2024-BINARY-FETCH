import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const patientData = {
  1: {
    name: 'Patient 1',
    age: 24,
    gender: 'Male',
    problem: 'Stuttering',
    sessions: [
      { session: 'Session 1', date: '2023-08-15', conversation: [{ question: 'How do you feel today?', answer: 'A bit nervous.' }] },
      { session: 'Session 2', date: '2023-08-22', conversation: [{ question: 'Any progress since last week?', answer: 'Yes, I practiced daily.' }] },
    ]
  },
  2: {
    name: 'Patient 2',
    age: 30,
    gender: 'Female',
    problem: 'Articulation Disorder',
    sessions: [
      { session: 'Session 1', date: '2023-08-16', conversation: [{ question: 'What sounds are most difficult?', answer: 'The "r" sound.' }] },
    ]
  },
  // Add more mock data for other patients...
};

const SessionForm = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [currentSession, setCurrentSession] = useState({
    date: new Date().toISOString().split('T')[0],
    notes: '',
    progress: '',
    nextSteps: '',
    mood: 'neutral',
  });

  useEffect(() => {
    const fetchedPatient = patientData[patientId];
    if (fetchedPatient) {
      setPatient(fetchedPatient);
    }
  }, [patientId]);

  const handleInputChange = (e) => {
    setCurrentSession({
      ...currentSession,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Session data:', currentSession);
    // Here you would typically save the session data
  };


  const MainContent = () => (
    <main className="flex-1 p-6 bg-gray-900 text-white">
      {!patient ? (
        <div className="m-4 p-4 bg-red-800 text-white rounded-lg">
          <h1 className="text-2xl font-bold">Patient not found</h1>
          <p>Please check the URL or patient ID.</p>
        </div>
      ) : (
        <>
          <div className="bg-gray-800 shadow rounded-lg mb-6 p-4">
            <h1 className="text-2xl font-bold mb-4">Session Details for {patient.name}</h1>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Problem:</strong> {patient.problem}</p>
              <p><strong>Date:</strong> {patient.sessions.length}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 shadow rounded-lg mb-6 p-4">
            <h2 className="text-xl font-semibold mb-4">New Session Entry</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={currentSession.date}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="notes">
                Session Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={currentSession.notes}
                onChange={handleInputChange}
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
                value={currentSession.progress}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="nextSteps">
                Next Steps
              </label>
              <input
                type="text"
                id="nextSteps"
                name="nextSteps"
                value={currentSession.nextSteps}
                onChange={handleInputChange}
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
                value={currentSession.mood}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="happy">Happy</option>
                <option value="neutral">Neutral</option>
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
              </select>
            </div>
            <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save Session
            </button>
          </form>

          <div className="bg-gray-800 shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Previous Sessions</h2>
            {patient.sessions.map((session, index) => (
              <details key={index} className="mb-4">
                <summary className="cursor-pointer font-medium text-blue-400 hover:text-blue-300">
                  {session.session} - {session.date}
                </summary>
                <div className="mt-2 pl-4">
                  {session.conversation.map((entry, idx) => (
                    <div key={idx} className="mb-2">
                      <p className="font-semibold">{entry.question}</p>
                      <p className="pl-4 text-gray-300">{entry.answer}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </>
      )}
    </main>
  );

  return (
    <div className="flex">
      <MainContent />
    </div>
  );
};

export default SessionForm;