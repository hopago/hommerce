import { ReviewKeywords, ReviewRatingType } from "./review";

export type ReviewsTotalRating = {
  id: string;
  bookId: string;
  totalAvgRating: number;
  ratingEachPert: Partial<Record<ReviewRatingType, number>>;
};

export type ReviewsKeywords = {
  id: string;
  bookId: string;
  totalAvgKeyword: ReviewKeywords;
  keywordEachPert: Partial<Record<ReviewKeywords, number>>;
};
