import { restFetcher } from "../../../../fetcher/restFetcher";

export const getBookDetails = async (bookId: string) => {
  if (!bookId) return;

  const path = `/book/details/${bookId}`;

  try {
    const bookDetails = await restFetcher<IDetails>({
      method: "GET",
      path,
    });

    return bookDetails;
  } catch (err) {
    throw err;
  }
};
