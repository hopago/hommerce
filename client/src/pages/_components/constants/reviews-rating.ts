import { ReviewsKeywords, ReviewsTotalRating } from "../types/review-total";

export const reviewsTotalRating: ReviewsTotalRating = {
  id: "1",
  bookId: "1",
  totalAvgRating: 3.87,
  ratingEachPert: {
    "5": 12,
    "4": 73,
    "3": 9,
    "2": 3,
    "1": 2,
  },
};

export const reviewsKeywords: ReviewsKeywords = {
  id: "1",
  bookId: "1",
  totalAvgKeyword: "도움돼요",
  keywordEachPert: {
    집중돼요: 24,
    도움돼요: 37,
    쉬웠어요: 7,
    최고에요: 12,
    추천해요: 20,
  },
};
