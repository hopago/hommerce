import { reactQueryFetcher } from "../fetcher/fetcher";

export interface IDetailsNoContent {
  code: 404;
  message: string;
}

export const getBookDetails = async (bookId: string) => {
  try {
    const details = await reactQueryFetcher<IDetails | IDetailsNoContent>({
      method: "GET",
      path: `/book/details/${bookId}`,
    });

    return details;
  } catch (err) {
    throw err;
  }
};
