import { restFetcher } from "../../../fetcher/restFetcher";

import { ReviewTotalData } from "../../../types/api/review-total";

type GetReviewTotalByBookIdProps = {
  bookId: string;
};

export const getReviewTotalByBookId = async ({
  bookId,
}: GetReviewTotalByBookIdProps) => {
  const path = `/review/total/${bookId}`;

  try {
    const reviewTotal = await restFetcher<ReviewTotalData>({
      method: "GET",
      path,
    });

    return reviewTotal;
  } catch (err) {
    throw err;
  }
};
