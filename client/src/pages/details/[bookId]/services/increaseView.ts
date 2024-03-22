import { ServerError } from "../../../../fetcher/error";

import { restFetcher } from "../../../../fetcher/restFetcher";

export const increaseView = async (bookId: string) => {
  const path = `/book/d/${bookId}`;
  const sendErrorPath = `/client/error`;

  try {
    await restFetcher({
      method: "PATCH",
      path,
    });
  } catch (err) {
    if (err instanceof ServerError) {
      await restFetcher({
        method: "PATCH",
        path: sendErrorPath,
        body: err,
      });
    }
  }
};
