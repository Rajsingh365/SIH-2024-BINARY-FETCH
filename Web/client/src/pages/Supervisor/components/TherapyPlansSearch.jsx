import { useSupervisorContext } from "../contexts/SupervisorContext";

export const TherapyPlansSearch = () => {
  const { searchTerm, setSearchTerm, priority, setPriority, time, setTime } = useSupervisorContext();

  return (
    <>
      <div className="sv-search-form text-xl p-2 flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-600 w-[300px] p-1 focus:outline-none"
          placeholder="Patient or therapist's name..."
        />
        <button className="bg-blue-600 px-3">Search</button>

        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-[150px] mx-10 bg-gray-600 focus:outline-none"
        >
          <option value="Priority">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

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
