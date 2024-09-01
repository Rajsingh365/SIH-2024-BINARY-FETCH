import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const IndividualSessionInformation = () => {
  const authUser = {
    name: 'Therapist 1',
  }
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/session/get-particular-session/${sessionId}`);
        setSession(response.data);
        console.log('Session:', response.data);
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-400">Loading...</div>;
  }

  if (!session) {
    return <div className="text-center text-red-500">Session not found</div>;
  }

  const formatDate = (date) => format(new Date(date), 'dd-MM-yyyy');

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-semibold mb-6 text-blue-400">Session Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium mb-2">
              <strong>Patient Name:</strong> {session.patient_name}
            </p>
            <p className="text-lg font-medium mb-2">
              <strong>Therapist Name:</strong> {authUser.name}
            </p>
            <p className="text-lg font-medium mb-2">
              <strong>Date:</strong> {formatDate(session.date)}
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium mb-2">
              <strong>Activities Performed:</strong>
            </p>
            <p className="text-gray-300">{session.activitiesPerformed}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Session Insights</h2>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Patient Response:</strong>
            </p>
            <p className="text-gray-300">{session.patientResponse}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Notes:</strong>
            </p>
            <p className="text-gray-300">{session.notes}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Progress:</strong>
            </p>
            <p className="text-gray-300">{session.progress}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Summary:</strong>
            </p>
            <p className="text-gray-300">{session.summary}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Next Steps:</strong>
            </p>
            <p className="text-gray-300">{session.nextSteps}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg font-medium mb-2">
              <strong>Mood:</strong>
            </p>
            <p className="text-gray-300">{session.mood}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-medium">
            <strong>Created At:</strong> {formatDate(session.createdAt)}
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndividualSessionInformation;
