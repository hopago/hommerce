type ReviewLog = {
  reviewId: string;
  bookTitle: string;
  desc: string;
  createdAt: Date;
};

type ReviewLogs = ReviewLog[];

type FilterOption = "리뷰 ID" | "책 제목" | "리뷰 내용" | "검색 옵션";

type FilterOptions = FilterOption[];
