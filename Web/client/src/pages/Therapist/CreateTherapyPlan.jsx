import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
      goals: e.target.goals.value,
      duration: e.target.duration.value,
      priority: e.target.priority.value,
      activities: e.target.activities.value,
      patientHistory: e.target.patientHistory.value,
      additionalNotes: e.target.additionalNotes.value,
      milestones: formData.milestones,
      attachments: formData.attachments,
    };

    console.log('data', data);
    try {
      await axios.post(`http://localhost:5000/api/therapy-plans/create-plan/`, data);
      console.log('Plan created successfully');
      // navigate(`/therapist/workspace/patient-plans/${patientId}`);
    } catch (error) {
      console.error("Error creating therapy plan:", error);
    }
  };

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
          </div>

          {/* Patient History */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="patientHistory">
              Patient History
            </label>
            <textarea
              id="patientHistory"
              name="patientHistory"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            ></textarea>
          </div>

          {/* Additional Notes */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
            ></textarea>
          </div>

          {/* Milestones */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="milestones">
              Milestones
            </label>
            {formData.milestones.map((milestone, index) => (
              <div key={index} className="mb-4">
                <input
                  type="number"
                  placeholder="Week"
                  value={milestone.week || ''}
                  onChange={(e) => handleMilestonesChange(index, 'week', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                />
                <input
                  type="text"
                  placeholder="Milestone Description"
                  value={milestone.milestone || ''}
                  onChange={(e) => handleMilestonesChange(index, 'milestone', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFormData({ ...formData, milestones: [...formData.milestones, { week: '', milestone: '' }] })}
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Milestone
            </button>
          </div>

          {/* Attachments */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="attachments">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setFormData({ ...formData, attachments: Array.from(e.target.files) })}
            />
          </div>


          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Plan
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateTherapyPlan;
