import { useSupervisorContext } from "../contexts/SupervisorContext";

export const ProgressForm = () => {
  const { planSearchTerm, setPlanSearchTerm, time, setTime } = useSupervisorContext();

  return (
    <>
      <div className="sv-search-form text-xl p-2 flex gap-10 my-5">
        <div className="search-form flex">
          <input
            type="text"
            value={planSearchTerm}
            onChange={(e) => setPlanSearchTerm(e.target.value)}
            className="bg-gray-600 w-[300px] p-1 focus:outline-none"
            placeholder="Patient or therapist's name..."
          />
          <button className="bg-blue-600 px-3">Search</button>
        </div>

        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-[150px] bg-gray-600 focus:outline-none"
        >
          <option value="sort">Sort</option>
          <option value="ascending">Newest First</option>
          <option value="descending">Oldest First</option>
        </select>
      </div>
    </>
  );
};
