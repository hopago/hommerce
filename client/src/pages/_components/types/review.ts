export type ReviewRatingType = "1" | "2" | "3" | "4" | "5";

export type ReviewKeywords =
  | "쉬웠어요"
  | "집중돼요"
  | "도움돼요"
  | "최고에요"
  | "추천해요";

export type TReview = {
  id: string;
  buyWay: SellWay;
  bookId: string;
  userId: string;
  userName: string;
  rating: ReviewRatingType;
  keyword: ReviewKeywords;
  desc: string;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  liked: number;
};

export type TReviews = TReview[];

export type TReviewReply = {
  id: string;
  userId: string;
  reviewId: string;
  userName: string;
  desc: string;
  createdAt: Date | string;
  updatedAt: Date | string | null;
};
