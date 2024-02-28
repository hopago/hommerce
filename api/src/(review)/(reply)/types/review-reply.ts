export type TReviewReply = {
  id: string;
  userId: string;
  reviewId: string;
  userName: string;
  desc: string;
  createdAt: Date | string;
  updatedAt: Date | string | null;
};
