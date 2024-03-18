import { reactQueryFetcher } from "@/app/fetcher/fetcher";

type UpdateBookImageParams = {
  bookId: string;
  updatedImageUrl: string;
  imageUrl: string;
};

export const updateBookImage = async ({
  bookId,
  updatedImageUrl,
  imageUrl,
}: UpdateBookImageParams) => {
  return reactQueryFetcher<IBook>({
    method: "PATCH",
    path: `/book/${bookId}/i`,
    body: {
      imageUrl,
      updatedImageUrl,
    },
  });
};
