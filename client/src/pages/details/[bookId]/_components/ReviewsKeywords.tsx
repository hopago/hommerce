import { useEffect } from "react";

import { reviewsKeywords } from "../../../_components/constants/reviews-rating";

type ReviewsKeywordsProps = {
  bookId: string;
};

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

  const reviewsMainKeyword = reviewsKeywordsList.find(
    (ele) => ele.pert === values.sort((a, b) => b - a)[0]
  );
  const { pert, keyword: mainKeyword } = reviewsMainKeyword!;

  return (
    <div className="review-box keywords">
      <div className="review-box__review-keywords">
        <span>
          {pert}%의 구매자가 <br />
          <strong>{mainKeyword}</strong>라고 응답했어요
        </span>
      </div>
      <div className="review-box__review-keywords-bar">
        <div className="review-box__review-keywords-bar__keyword-list">
          {reviewsKeywordsList.map((keyword) => (
            <div key={keyword.keyword} className="keyword-item">
              <div className="keyword-item__pert">
                <span>{keyword.pert}</span>
              </div>
              <div className="keyword-item__score-bar">
                <div className="bg" />
                <div className="fill" style={{ height: `${keyword.pert}%` }} />
              </div>
              <div
                className="keyword-item__keyword"
                style={
                  mainKeyword === keyword.keyword
                    ? { color: "#7175BF", fontWeight: "bold" }
                    : {}
                }
              >
                {keyword.keyword}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
