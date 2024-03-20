import { reactQueryFetcher } from "@/app/fetcher/fetcher";

type UpdateBookImageParams = {
  bookId: string;
  updatedImageUrl: string;
  imageUrl: string;
};

type DeletedImageParams = {
  bookId: string;
  deletedImageUrl: string;
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

export const deleteBookImage = async ({
  bookId,
  deletedImageUrl,
}: DeletedImageParams) => {
  return reactQueryFetcher<IBook>({
    method: "DELETE",
    path: `/book/${bookId}/i`,
    body: {
      deletedImageUrl,
    },
  });
};
