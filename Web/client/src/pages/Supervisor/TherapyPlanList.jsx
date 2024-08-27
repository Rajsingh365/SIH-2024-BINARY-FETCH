import { useState } from "react";
import { TherapyPlansSearch } from "./components/TherapyPlansSearch";
import { TherapyPlanCardList } from "./components/TherapyPlanCardList";

export const TherapyPlanList = () => {
  const [oldPlans, setOldPlans] = useState(false);

  return (
    <>
      <div className="sv-therapy-plans p-3">
        <div className="sv-toggle flex justify-evenly text-xl max-w-[350px] border-solid border-2 border-purple-500 rounded-lg overflow-hidden">
          <div className={`sv-toggle-option ${oldPlans ? "" : "bg-slate-700"}`} onClick={() => setOldPlans(false)}>
            Plans to review
          </div>
          <div className={`sv-toggle-option ${!oldPlans ? "" : "bg-slate-700"}`} onClick={() => setOldPlans(true)}>
            Reviewed Plans
          </div>
        </div>
        <div className="sv-therapy-plans-search my-5">
          <TherapyPlansSearch />
        </div>
        <div className="sv-therapy-plan-cards">
          <TherapyPlanCardList />
        </div>
      </div>
    </>
  );
};
