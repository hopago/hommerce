type ReviewRatingType = "1" | "2" | "3" | "4" | "5";
type ReviewRatingValue = 1 | 2 | 3 | 4 | 5;

type ReviewKeywords =
  | "쉬웠어요"
  | "집중돼요"
  | "도움돼요"
  | "최고에요"
  | "추천해요";

type TReview = {
  id: string;
  buyWay: SellWay;
  bookId: string;
  userId: string;
  userName: string;
  rating: ReviewRatingType;
  keyword: ReviewKeywords;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  liked: number;
};

type TReviews = TReview[];
