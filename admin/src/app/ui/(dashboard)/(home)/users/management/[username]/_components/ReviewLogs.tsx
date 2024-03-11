import PaginateControl from "../../../../_components/PaginateControl";
import { getPageTotal } from "../../../../utils/getPageTotal";

import FilterReviewLogs from "./FilterReviewLogs";
import ReviewLogList from "./ReviewLogList";

export default function ReviewLogs() {
  const temporaryReviewLog: ReviewLog = {
    reviewId: "mongoId_1837541092",
    bookTitle: "인간관계론",
    desc: "I could never stop doing this.",
    createdAt: new Date(),
  };

  const temporaryReviewLogs: ReviewLogs = [...Array.from({ length: 22 })].map(
    (_, i) => {
      const log = { ...temporaryReviewLog };

      log.reviewId = log.reviewId + i;

      return log;
    }
  );

  const pageTotal = getPageTotal(temporaryReviewLogs.length);

  return (
    <>
      <FilterReviewLogs />
      <ReviewLogList reviews={temporaryReviewLogs} />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}
