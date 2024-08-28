import { useSupervisorContext } from "../contexts/SupervisorContext";
import { ProgressCard } from "./ProgressCard";

export const ProgressCardList = () => {
  const { progressReports } = useSupervisorContext();
  return (
    <>
      <div className="sv-therapy-cards grid grid-cols-2 gap-7 ">
        {progressReports.map((plan) => {
          return <ProgressCard {...plan} key={plan.id} />;
        })}
      </div>
    </>
  );
};
