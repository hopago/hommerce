import { ReviewKeywords } from "../../pages/_components/types/review";

export type ReviewTotalData = {
  total: {
    totalRating: number;
    totalKeyword: ReviewKeywords;
  };
  reviewsLength: number;
};
