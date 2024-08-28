import { ProgressCardList } from "./ProgressCardList";
import { ProgressForm } from "./ProgressForm";

export const ProgressReportList = () => {
  return (
    <div className="sv-progress-report p-5 h-[100vh] overflow-auto">
      <div className="sv-progress-form">
        <ProgressForm />
      </div>

      <div className="sv-progress-cards-list">
        <ProgressCardList />
      </div>
    </div>
  );
};
