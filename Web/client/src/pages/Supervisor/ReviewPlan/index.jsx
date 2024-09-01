import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSupervisorContext } from "../contexts/SupervisorContext";
import axios from "axios";

export const ReviewPlan = () => {
  const { planId: id } = useParams();
  const navigate = useNavigate();
  const { therapyPlans } = useSupervisorContext();

  const therapyPlan = therapyPlans.find((plan) => plan._id === id);
  const [feedback, setFeedback] = useState(therapyPlan.feedback);
  console.log("hello",therapyPlan);

  if (!therapyPlan) {
    return (
      <p className="text-center text-red-500 mt-4">
        Therapy plan not found.
      </p>
    );
  }

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleApproval = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/therapy-plans/review/${id}`,
        {
          feedback,
          status: "Approved",
        }
      );
  
      if (response.status === 200) {
        navigate(-1); // Navigate back if successful
      } else {
        console.error("Failed to approve the therapy plan",response.error);
      }
    } catch (error) {
      console.error("Error approving the therapy plan:", error.message);
    }
  };
  
  const handleRejection = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/therapy-plans/review/${id}`,
        {
          feedback,
          status: "Rejected", 
        }
      );
  
      if (response.status === 200) {
        navigate(-1); 
      } else {
        console.error("Failed to reject the therapy plan");
      }
    } catch (error) {
      console.error("Error rejecting the therapy plan:", error.message);
    }
  };


  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden my-8 border-2 border-gray-200">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6">
        <h2 className="text-3xl font-bold mb-2">Therapy Plan: {therapyPlan._id}</h2>
        <p className="text-xl mb-2">Patient: {therapyPlan.patient.name} ({therapyPlan.patient.age} years old)</p>
        <p className="text-xl mb-2">Condition: {therapyPlan.patient.condition}</p>
        <p className="text-lg mb-2">Status: <span className={`font-semibold ${therapyPlan.status === 'Awaiting Review' ? 'text-yellow-400' : 'text-red-400'}`}>{therapyPlan.status}</span></p>
        <p className="text-lg">Priority: <span className={`font-semibold ${therapyPlan.priority === 'High' ? 'text-red-400' : 'text-blue-400'}`}>{therapyPlan.priority}</span></p>
      </div>
      <div className="p-6">
        {/* Goals Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Goals</h3>
          <p className="text-gray-700">{therapyPlan.goals}</p>
        </div>
        {/* Activities Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Activities</h3>
          <p className="text-gray-700">{therapyPlan.activities}</p>
        </div>
        {/* Therapist Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Therapist</h3>
          <p className="text-gray-700">
            {therapyPlan.patient.assigned_therapist_id.fullName} 
            {/* ({therapyPlan.therapistExperience}) */}
          </p>
        </div>
        {/* Duration */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Duration</h3>
          <p className="text-gray-700">{therapyPlan.duration}</p>
        </div>
        {/* Patient History */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient History</h3>
          <p className="text-gray-700">{therapyPlan.patientHistory}</p>
        </div>
        {/* Additional Notes */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Notes</h3>
          <p className="text-gray-700">{therapyPlan.additionalNotes}</p>
        </div>
        {/* Milestones */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Milestones</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {therapyPlan.milestones.map((milestone, index) => (
              <li key={index}>Week {milestone.week}: {milestone.milestone}</li>
            ))}
          </ul>
        </div>
        {/* Attachments */}
        {therapyPlan.attachments && therapyPlan.attachments.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Attachments</h3>
            <ul className="list-disc pl-5 text-blue-500">
              {therapyPlan.attachments.map((attachment, index) => (
                <li key={index}>
                  <a
                    href={`#`} // Replace with actual URL if needed
                    className="hover:underline"
                  >
                    {attachment}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Review Date */}
        {therapyPlan.reviewDate && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Review Date</h3>
            <p className="text-gray-700">{therapyPlan.reviewDate}</p>
          </div>
        )}
        {/* Feedback Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Supervisor Feedback</h3>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            rows="4"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
        </div>
      </div>
      {/* Buttons Section */}
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleApproval}
          >
            Approve
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleRejection}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};
