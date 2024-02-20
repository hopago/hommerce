export type ReviewReply = {
  id: string;
  username: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ReviewReplies = ReviewReply[];
