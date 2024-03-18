import { reactQueryFetcher } from "@/app/fetcher/fetcher";

export type UpdateBookParams = {
  bookId: string;
  images: (string | undefined)[] | null;
};

export const updateBook = async ({ bookId, images }: UpdateBookParams) => {
  return reactQueryFetcher<IBook>({
    method: "PATCH",
    path: `/book/${bookId}`,
    body: {
      images,
    },
  });
};
