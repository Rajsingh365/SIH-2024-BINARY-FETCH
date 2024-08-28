import low from "../../../assets/icons/low-priority.png";
import medium from "../../../assets/icons/medium-priority.png";
import high from "../../../assets/icons/high-priority.png";

export const TherapyPlanCard = ({
  activities,
  condition,
  duration,
  goals,
  id,
  patientAge,
  patientName,
  priority,
  status,
  submissionDate,
  therapistExperience,
  therapistName,
}) => {
  return (
    <>
      <div className="sv-plan-card bg-blue-400 py-3 px-5 relative rounded-lg shadow-lg">
        <div className="card-header flex justify-end">
          <div className="priority absolute top-[-25px] left-[-25px] transform rotate-[-20deg]">
            <img src={priority == "Low" ? low : priority == "Medium" ? medium : high} alt="" />
          </div>
          <div className="sub-date text-xl underline">{new Date(submissionDate).toDateString()}</div>
        </div>
        <div className="card-content grid grid-cols-3 text-xl gap-2">
          <div className="">Patient Name </div>
          <div className="col-span-2">{patientName}</div>
          <div className="">Patient Age </div>
          <div className="col-span-2">{patientAge}</div>
          <div className="">Condition </div>
          <div className="col-span-2">{condition}</div>
          <div className="">Therapist Name </div>
          <div className="col-span-2">{therapistName}</div>
          <div className="">Experience </div>
          <div className="col-span-2">{therapistExperience}</div>
          <div className="">Goals </div>
          <div className="col-span-2">{goals}</div>
          <div className="">Activities </div>
          <div className="col-span-2">{activities}</div>
          <div className="">Duration </div>
          <div className="col-span-2">{duration}</div>
        </div>
        <div className="card-footer flex py-3 my-auto">
          <button className="bg-purple-500 px-3 py-1 mx-auto rounded-lg shadow-md text-xl">Review Plan</button>
        </div>
      </div>
    </>
  );
};
