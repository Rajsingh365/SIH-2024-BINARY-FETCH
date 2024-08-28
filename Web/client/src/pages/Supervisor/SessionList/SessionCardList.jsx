import { useSupervisorContext } from "../contexts/SupervisorContext";
import { SessionCard } from "./SessionCard";

export const SessionCardList = () => {
  const { sessions } = useSupervisorContext();
  return (
    <>
      <div className="sv-therapy-cards grid grid-cols-2 gap-7 ">
        {sessions.map((plan) => {
          return <SessionCard {...plan} key={plan.id} />;
        })}
      </div>
    </>
  );
};
