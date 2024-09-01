import low from "../../../assets/icons/low-priority.png";
import medium from "../../../assets/icons/medium-priority.png";
import high from "../../../assets/icons/high-priority.png";
import { useNavigate } from "react-router-dom";

export const TherapyPlanCard = ({
  activities,
  duration,
  goals,
  _id,
  patient,
  priority,
  submissionDate,
}) => {
  const navigate = useNavigate();
  const redirectReview = () => {
    navigate(`review/${_id}`);
  };

  return (
    <div className="sv-plan-card bg-white p-5 relative rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="card-header flex justify-end mb-4">
        <div className="priority absolute top-[-10px] left-[-10px] transform rotate-[-10deg]">
          <img
            src={priority === "Low" ? low : priority === "Medium" ? medium : high}
            alt={priority}
          />
        </div>
        <div className="sub-date text-sm text-gray-500">
          {new Date(submissionDate).toDateString()}
        </div>
      </div>
      <div className="card-content grid grid-cols-3 text-base text-gray-800 gap-y-2">
        <div className="font-semibold">Patient Name</div>
        <div className="col-span-2">{patient.name}</div>
        <div className="font-semibold">Patient Age</div>
        <div className="col-span-2">{patient.age}</div>
        <div className="font-semibold">Condition</div>
        <div className="col-span-2">{patient.condition}</div>
        <div className="font-semibold">Therapist Name</div>
        <div className="col-span-2">{patient.assigned_therapist_id.fullName}</div>
        <div className="font-semibold">Goals</div>
        <div className="col-span-2">{goals}</div>
        <div className="font-semibold">Activities</div>
        <div className="col-span-2">{activities}</div>
        <div className="font-semibold">Duration</div>
        <div className="col-span-2">{duration}</div>
      </div>
      <div className="card-footer flex py-4 mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 mx-auto"
          onClick={redirectReview}
        >
          View Plan
        </button>
      </div>
    </div>
  );
};
