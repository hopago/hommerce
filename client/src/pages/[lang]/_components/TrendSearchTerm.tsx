import { trendSearchTerms } from "../constants/issue-trend";

import Heading from "./TodayPickHeading";

export default function TrendSearchTerm() {
  return (
    <div className="trend-search-term">
      <Heading title="이슈 & 트랜드" />
      <div className="trend-search-term__container">
        <div className="trend-search-term__container__wrapper">
          <ul>
            {trendSearchTerms.map((trend) => (
              <li key={trend}>
                <span>{trend}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
