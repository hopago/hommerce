import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { UpdateBookParams } from "./use-mutate-book";

export const updateBookImage = async ({
  bookId,
  file,
  imageUrl,
}: UpdateBookParams & { imageUrl: string }) => {
  return reactQueryFetcher<IBook>({
    method: "PATCH",
    path: `/book/${bookId}/i/${imageUrl}`,
    body: {
      images: file,
    },
  });
};
