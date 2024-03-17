import { reactQueryFetcher } from "@/app/fetcher/fetcher";

export type UpdateBookParams = {
  bookId: string;
  file: string | string[];
};

export const updateBook = async ({ bookId, file }: UpdateBookParams) => {
  return reactQueryFetcher<IBook>({
    method: "PATCH",
    path: `/book/${bookId}`,
    body: {
      images: file,
    },
  });
};
