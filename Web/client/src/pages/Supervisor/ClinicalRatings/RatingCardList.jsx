import { useSupervisorContext } from "../contexts/SupervisorContext";
import { RatingCard } from "./RatingCard";

export const RatingCardList = () => {
  const { clinicalRatings } = useSupervisorContext();
  return (
    <>
      <div className="sv-therapy-cards grid grid-cols-2 gap-7 ">
        {clinicalRatings.map((plan) => {
          return <RatingCard {...plan} key={plan.id} />;
        })}
      </div>
    </>
  );
};
