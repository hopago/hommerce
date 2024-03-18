import { reactQueryFetcher } from "../fetcher/fetcher";

export const getSingleBook = async (bookId: string) => {
  try {
    const book = await reactQueryFetcher<IBook>({
      method: "GET",
      path: `/book/${bookId}`,
    });

    return book;
  } catch (err) {
    throw err;
  }
};
