type ReviewData = {
  reviews: ReviewLogs;
  pagination: {
    totalPages: number;
    totalReviews: number;
  };
};

type ReviewLog = {
  _id: string;
  bookTitle: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
};

type ReviewLogs = ReviewLog[];

type FilterOption = "리뷰 ID" | "책 제목" | "리뷰 내용" | "검색 옵션";

type FilterOptions = FilterOption[];
