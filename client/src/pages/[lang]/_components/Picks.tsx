import TodayBest from "./TodayBest";
import TodayPick from "./TodayPick";

export default function Picks() {
  return (
    <div className="lang-page-picks">
      <div className="lang-page-picks__today">
        <TodayPick />
      </div>
      <div className="lang-page-picks__best">
        <TodayBest />
      </div>
    </div>
  );
}
