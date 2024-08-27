import { useState } from "react";
import { TherapyPlansSearch } from "./components/TherapyPlansSearch";
import { TherapyPlanCardList } from "./components/TherapyPlanCardList";
import { useSupervisorContext } from "./contexts/SupervisorContext";

export const TherapyPlanList = () => {
  const { setIsNewPlans, isNewPlans } = useSupervisorContext();

  return (
    <>
      <div className="sv-therapy-plans p-3 h-[100vh] overflow-y-auto">
        <div className="sv-toggle flex justify-evenly text-xl max-w-[350px] border-solid border-2 border-purple-500 rounded-lg overflow-hidden">
          <div className={`sv-toggle-option ${!isNewPlans ? "" : "bg-slate-700"}`} onClick={() => setIsNewPlans(true)}>
            Plans to review
          </div>
          <div className={`sv-toggle-option ${isNewPlans ? "" : "bg-slate-700"}`} onClick={() => setIsNewPlans(false)}>
            Reviewed Plans
          </div>
        </div>
        <div className="sv-therapy-plans-search my-5">
          <TherapyPlansSearch />
        </div>
        <div className="sv-therapy-plan-cards p-5">
          <TherapyPlanCardList />
        </div>
      </div>
    </>
  );
};
