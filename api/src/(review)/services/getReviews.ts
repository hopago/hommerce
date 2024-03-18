import Review from "../models/review";

export const handleGetReviews = async (bookId: string, pageNum = 1) => {
  const perPage = 10;
  const skip = (pageNum - 1) * perPage;

  const reviews = await Review.find({ bookId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(perPage);

  const totalReviews = await Review.countDocuments({ bookId });
  const hasNextPage = skip + perPage < totalReviews;

  return {
    reviews,
    hasNextPage,
    totalReviews,
  };
};
