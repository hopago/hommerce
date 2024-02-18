type TReview = {
  buyWay: SellWay;
  userId: string;
  userName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  keyword: "쉬웠어요" | "집중돼요" | "도움돼요" | "최고에요" | "추천해요";
  desc: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

type TReviews = TReview[];

type TReviewReply = {
  userId: string;
  reviewId: string;
  userName: string;
  desc: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};