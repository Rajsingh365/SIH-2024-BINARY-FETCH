export const SessionCard = ({
  patientName,
  sessionDate,
  therapistName,
  therapistExperience,
  summary,
  activitiesPerformed,
  progress,
}) => {
  return (
    <div className="sv-plan-card bg-white p-5 relative rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="card-header flex justify-end mb-4">
        <div className="sub-date text-sm text-gray-500">
          {new Date(sessionDate).toDateString()}
        </div>
      </div>
      <div className="card-content grid grid-cols-3 text-base text-gray-800 gap-y-2">
        <div className="font-semibold">Patient Name</div>
        <div className="col-span-2">{patientName}</div>
        <div className="font-semibold">Therapist Name</div>
        <div className="col-span-2">{therapistName}</div>
        <div className="font-semibold">Experience</div>
        <div className="col-span-2">{therapistExperience}</div>
        <div className="font-semibold">Summary</div>
        <div className="col-span-2">{summary}</div>
        <div className="font-semibold">Activities</div>
        <div className="col-span-2">{activitiesPerformed}</div>
        <div className="font-semibold">Progress</div>
        <div className="col-span-2">{progress}</div>
      </div>
      <div className="card-footer flex py-4 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 mx-auto">
          Review Notes
        </button>
      </div>
    </div>
  );
};
