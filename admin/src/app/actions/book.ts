"use server";

import { revalidatePath } from "next/cache";

import {
  UpdateBookParams,
  updateBook as mutateFn,
} from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-book";

import {
  deleteBookImage as mutateDeleteBookImageFn,
  updateBookImage as mutateUpdateBookImageFn,
} from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-image";

type UpdateBookImageParams = {
  bookId: string;
  updatedImageUrl: string | undefined;
  imageUrl: string;
};

type DeletedImageParams = {
  bookId: string;
  deletedImageUrl: string;
};

export async function updateBook({ bookId, images }: UpdateBookParams) {
  try {
    const updatedBook = await mutateFn({ bookId, images });

    revalidatePath(`/book/${bookId}`);

    return updatedBook;
  } catch (err) {
    throw err;
  }
}

export async function updateBookImage({
  bookId,
  updatedImageUrl,
  imageUrl,
}: UpdateBookImageParams) {
  try {
    if (!updatedImageUrl) return;

    const updatedBook = await mutateUpdateBookImageFn({
      bookId,
      updatedImageUrl,
      imageUrl,
    });

    revalidatePath(`/book/${bookId}`);

    return updatedBook;
  } catch (err) {
    throw err;
  }
}

export async function deleteBookImage({
  bookId,
  deletedImageUrl,
}: DeletedImageParams) {
  try {
    if (!deletedImageUrl) return;

    const imgUrl = await mutateDeleteBookImageFn({
      bookId,
      deletedImageUrl,
    });

    revalidatePath(`/book/${bookId}`);

    return imgUrl;
  } catch (err) {
    throw err;
  }
}
