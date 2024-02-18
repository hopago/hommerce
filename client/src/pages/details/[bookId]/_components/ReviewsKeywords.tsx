import { useEffect } from "react";

type ReviewsKeywordsProps = {
  bookId: string;
};

import { reviewsKeywords } from "../../../_components/constants/reviews-rating";

export default function ReviewsKeywords({ bookId }: ReviewsKeywordsProps) {
  useEffect(() => {
    // TODO: findReviewsKeywordsByBookId
  }, [bookId]);

  const keys = Object.keys(reviewsKeywords.keywordEachPert);
  const values = Object.values(reviewsKeywords.keywordEachPert);

  const reviewsKeywordsList = keys.map((key, index) => ({
    keyword: key,
    pert: values[index],
  }));

  return (
    <div className="review-box keywords">
        
    </div>
  );
}
