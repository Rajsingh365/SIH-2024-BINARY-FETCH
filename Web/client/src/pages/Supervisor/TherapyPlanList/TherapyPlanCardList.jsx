import { useSupervisorContext } from "../contexts/SupervisorContext";
import { TherapyPlanCard } from "./TherapyPlanCard";

export const TherapyPlanCardList = () => {
  const { therapyPlans } = useSupervisorContext();
  return (
    <>
      <div className="sv-therapy-cards grid grid-cols-2 gap-7 ">
        {therapyPlans.map((plan) => {
          return <TherapyPlanCard {...plan} key={plan._id} />;
        })}
      </div>
    </>
  );
};
