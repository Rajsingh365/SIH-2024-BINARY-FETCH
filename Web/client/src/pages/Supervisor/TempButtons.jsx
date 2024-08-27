import { Link } from "react-router-dom";

export const TempButtons = () => {
  return (
    <div>
      <Link to={"clinical-rating"}>Clinical Rating</Link> <br />
      <Link to={"progress-report"}>All Progress Reports</Link> <br />
      <Link to={"sessions"}>All session notes</Link> <br />
      <Link to={"therapy-plans"}>All therapy plans</Link> <br />
    </div>
  );
};
