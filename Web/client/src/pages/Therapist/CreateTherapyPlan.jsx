import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSpeechRecognition from '../../hooks/useSpeechRecognition';

const CreateTherapyPlan = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [patient, setPatient] = useState({});
  const [reviewDate, setReviewDate] = useState(new Date());
  const [formData, setFormData] = useState({
    goals: "",
    duration: "",
    priority: "",
    activities: "",
    patientHistory: "",
    additionalNotes: "",
    milestones: [],
    attachments: [],
    feedback: "",
  });

  useEffect(() => {
    const getPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/patient/get-patient/${patientId}`);
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    getPatient();
  }, [patientId]);

  const handleMilestonesChange = (index, field, value) => {
    const newMilestones = [...formData.milestones];
    newMilestones[index][field] = value;
    setFormData({ ...formData, milestones: newMilestones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      patient: patientId,
      therapist: "66d3b2a7bed7d26d01a929ee",  
      submissionDate: new Date(),
      reviewDate: reviewDate,
      goals: formData.goals,
      duration: formData.duration,
      priority: formData.priority,
      activities: formData.activities,
      patientHistory: formData.patientHistory,
      additionalNotes: formData.additionalNotes,
      milestones: formData.milestones,
      attachments: formData.attachments,
      feedback: formData.feedback,
    };

    try {
      await axios.post(`http://localhost:5000/api/plan/create-plan/`, data);
      console.log('Plan created successfully');
      navigate(`/therapist/workspace/patient-plans/${patientId}`);
    } catch (error) {
      console.error("Error creating therapy plan:", error);
    }
  };

  const handleSpeechResult = (field) => (result) => {
    setFormData((prev) => ({
      ...prev,
      [field]: result,
    }));
  };

  const { startListening: startListeningGoals } = useSpeechRecognition(handleSpeechResult('goals'));
  const { startListening: startListeningDuration } = useSpeechRecognition(handleSpeechResult('duration'));
  const { startListening: startListeningActivities } = useSpeechRecognition(handleSpeechResult('activities'));
  const { startListening: startListeningPatientHistory } = useSpeechRecognition(handleSpeechResult('patientHistory'));
  const { startListening: startListeningAdditionalNotes } = useSpeechRecognition(handleSpeechResult('additionalNotes'));
  const { startListening: startListeningFeedback } = useSpeechRecognition(handleSpeechResult('feedback'));

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white">
      <div className="bg-gray-800 shadow rounded-lg mb-6 p-4">
        <h1 className="text-2xl font-bold mb-4">
          Therapy Plan for {patient.name}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Gender:</strong> {patient.gender}
          </p>
          <p>
            <strong>Condition:</strong> {patient.condition}
          </p>
          <p>
            <strong>Admission Date:</strong> {patient.createdAt ? patient.createdAt.split("T")[0] : new Date().toISOString().split("T")[0]}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Create New Therapy Plan</h2>
        <form onSubmit={handleSubmit}>
          {/* Goals */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="goals">
              Goals
            </label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
            <button
              type="button"
              onClick={startListeningGoals}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Goals
            </button>
          </div>

          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="duration">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              onClick={startListeningDuration}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Duration
            </button>
          </div>

          {/* Review Date */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="reviewDate">
              Review Date
            </label>
            <DatePicker
              id="reviewDate"
              name="reviewDate"
              selected={reviewDate}
              onChange={(date) => setReviewDate(date)}
              wrapperClassName="w-full"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Priority */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="priority">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Activities */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="activities">
              Activities
            </label>
            <textarea
              id="activities"
              name="activities"
              value={formData.activities}
              onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
            <button
              type="button"
              onClick={startListeningActivities}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Activities
            </button>
          </div>

          {/* Patient History */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="patientHistory">
              Patient History
            </label>
            <textarea
              id="patientHistory"
              name="patientHistory"
              value={formData.patientHistory}
              onChange={(e) => setFormData({ ...formData, patientHistory: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
            <button
              type="button"
              onClick={startListeningPatientHistory}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Patient History
            </button>
          </div>

          {/* Additional Notes */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
            <button
              type="button"
              onClick={startListeningAdditionalNotes}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Additional Notes
            </button>
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
            <button
              type="button"
              onClick={startListeningFeedback}
              className="mt-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Speak Feedback
            </button>
          </div>

          {/* Milestones */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="milestones">
              Milestones
            </label>
            {formData.milestones.map((milestone, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Milestone Title"
                  value={milestone.title || ''}
                  onChange={(e) => handleMilestonesChange(index, 'title', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <textarea
                  placeholder="Milestone Description"
                  value={milestone.description || ''}
                  onChange={(e) => handleMilestonesChange(index, 'description', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 mt-2"
                  required
                ></textarea>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFormData({ ...formData, milestones: [...formData.milestones, { title: '', description: '' }] })}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Milestone
            </button>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Therapy Plan
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateTherapyPlan;