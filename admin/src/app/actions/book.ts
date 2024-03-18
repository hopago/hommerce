"use server"

import { revalidatePath } from "next/cache";

import {
  UpdateBookParams,
  updateBook as mutateFn,
} from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-book";

import { updateBookImage as mutateBookImageFn } from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-image";

type UpdateBookImageParams = {
  bookId: string;
  updatedImageUrl: string | undefined;
  imageUrl: string;
};

export async function updateBook({ bookId, images }: UpdateBookParams) {
  try {
    const updatedBook = await mutateFn({ bookId, images });

    console.log(updateBook);

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
    const updatedBook = await mutateBookImageFn({
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
