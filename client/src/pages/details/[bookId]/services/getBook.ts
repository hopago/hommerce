import { restFetcher } from "../../../../fetcher/restFetcher";

export const getBook = async (bookId: string) => {
  if (!bookId) return;

  const path = `/book/${bookId}`;

  try {
    const book = await restFetcher<IBook>({
      method: "GET",
      path,
    });

    return book;
  } catch (err) {
    throw err;
  }
};
