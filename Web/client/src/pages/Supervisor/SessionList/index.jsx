import { SessionCardList } from "./SessionCardList";
import { SessionNotesForm } from "./SessionNotesForm";

export const SessionList = () => {
  return (
    <div className="sv-session-notes p-5 h-[100vh] overflow-auto">
      <div className="sv-session-search">
        <SessionNotesForm />
      </div>

      <SessionCardList />
    </div>
  );
};
