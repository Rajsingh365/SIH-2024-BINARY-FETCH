import { Link } from "react-router-dom";

export const TempButtons = () => {
  return (
    <div>
      <Link to={"/clinical-rating"}>Clinical Rating</Link> <br />
      <Link to={"/progress-report-list"}>All Progress Reports</Link> <br />
      <Link to={"/sessions-list"}>All session notes</Link> <br />
      <Link to={"/therapy-plan-list"}>All therapy plans</Link> <br />
    </div>
  );
};
