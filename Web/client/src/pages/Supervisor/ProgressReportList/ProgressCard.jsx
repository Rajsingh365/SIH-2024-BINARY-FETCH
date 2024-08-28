export const ProgressCard = ({
  patientName,
  patientAge,
  condition,
  reportDate,
  therapistName,
  therapistExperience,
  summary,
  progress,
  therapyGoals,
  nextSteps,
}) => {
  return (
    <>
      <div className="sv-plan-card bg-blue-400 py-3 px-5 relative rounded-lg shadow-lg">
        <div className="card-header flex justify-end">
          <div className="sub-date text-xl underline">{new Date(reportDate).toDateString()}</div>
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
          <div className="">Summary </div>
          <div className="col-span-2">{summary}</div>
          <div className="">Progress </div>
          <div className="col-span-2">{progress}</div>
          <div className="">Therapy Goals </div>
          <div className="col-span-2">{therapyGoals}</div>
          <div className="">Next Steps</div>
          <div className="col-span-2">{nextSteps}</div>
        </div>
        <div className="card-footer flex py-3 my-auto">
          <button className="bg-purple-500 px-3 py-1 mx-auto rounded-lg shadow-md text-xl">Review Progress</button>
        </div>
      </div>
    </>
  );
};
