import { Link } from "react-router-dom";

export const TempButtons = () => {
  return (
    <div>
      <Link to={"/supervisor/clinical-rating"}>Clinical Rating</Link> <br />
      <Link to={"/supervisor/progress-report-list"}>All Progress Reports</Link> <br />
      <Link to={"/supervisor/sessions-list"}>All session notes</Link> <br />
      <Link to={"/supervisor/therapy-plan-list"}>All therapy plans</Link> <br />
    </div>
  );
};
