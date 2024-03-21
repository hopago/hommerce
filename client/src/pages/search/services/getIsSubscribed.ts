import { restFetcher } from "../../../fetcher/restFetcher";

type GetIsSubscribedProps = {
  bookId: string;
  userId: string;
};

export const getIsSubscribed = async ({
  bookId,
  userId,
}: GetIsSubscribedProps) => {
  const path = `/subscription/user/${userId}/book/${bookId}`;

  try {
    const isSubscribed = await restFetcher<boolean>({
      method: "PATCH",
      path,
    });

    return isSubscribed;
  } catch (err) {
    throw err;
  }
};
