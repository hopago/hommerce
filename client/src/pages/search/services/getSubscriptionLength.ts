import { restFetcher } from "../../../fetcher/restFetcher";

type GetSubscriptionLengthProps = {
  bookId: string;
};

export const getSubscriptionLength = async ({
  bookId,
}: GetSubscriptionLengthProps) => {
  const path = `/docs/book/${bookId}`;

  try {
    const favorItem = await restFetcher<number>({
      method: "PATCH",
      path,
    });

    return favorItem;
  } catch (err) {
    throw err;
  }
};
