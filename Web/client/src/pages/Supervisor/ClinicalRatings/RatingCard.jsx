export const RatingCard = ({
  patientName,
  patientAge,
  condition,
  therapistName,
  therapistExperience,
  therapyDuration,
  sessionCount,
}) => {
  return (
    <div className="sv-plan-card bg-white p-5 relative rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="card-header flex justify-end mb-4">
        <div className="sub-date text-sm text-gray-500">
          Duration: {therapyDuration}
        </div>
      </div>
      <div className="card-content grid grid-cols-3 text-base text-gray-800 gap-y-2">
        <div className="font-semibold">Patient Name</div>
        <div className="col-span-2">{patientName}</div>
        <div className="font-semibold">Patient Age</div>
        <div className="col-span-2">{patientAge}</div>
        <div className="font-semibold">Condition</div>
        <div className="col-span-2">{condition}</div>
        <div className="font-semibold">Therapist Name</div>
        <div className="col-span-2">{therapistName}</div>
        <div className="font-semibold">Experience</div>
        <div className="col-span-2">{therapistExperience}</div>
        <div className="font-semibold">Session Count</div>
        <div className="col-span-2">{sessionCount}</div>
      </div>
      <div className="card-footer flex py-4 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 mx-auto">
          Review Case
        </button>
      </div>
    </div>
  );
};
