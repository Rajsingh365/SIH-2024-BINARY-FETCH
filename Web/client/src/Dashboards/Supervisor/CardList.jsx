import React from "react";
import TherapistCard from "./TherapistCard";
function CardList() {
  return (
    <div className="w-full">
      <ul className="w-[90%] flex flex-wrap items-center m-auto gap-3">
        {Array.from({ length: 30 }, (_, index) => (
          <TherapistCard key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
