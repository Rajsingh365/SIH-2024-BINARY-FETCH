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
    <>
      <div className="sv-plan-card bg-blue-400 py-3 px-5 relative rounded-lg shadow-lg">
        <div className="card-header flex justify-end">
          <div className="sub-date text-xl underline">{new Date(sessionDate).toDateString()}</div>
        </div>
        <div className="card-content grid grid-cols-3 text-xl gap-2">
          <div className="">Patient Name </div>
          <div className="col-span-2">{patientName}</div>
          <div className="">Therapist Name </div>
          <div className="col-span-2">{therapistName}</div>
          <div className="">Experience </div>
          <div className="col-span-2">{therapistExperience}</div>
          <div className="">Summary </div>
          <div className="col-span-2">{summary}</div>
          <div className="">Activities </div>
          <div className="col-span-2">{activitiesPerformed}</div>
          <div className="">Progress </div>
          <div className="col-span-2">{progress}</div>
        </div>
        <div className="card-footer flex py-3 my-auto">
          <button className="bg-purple-500 px-3 py-1 mx-auto rounded-lg shadow-md text-xl">Review Notes</button>
        </div>
      </div>
    </>
  );
};
