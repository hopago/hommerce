"use server";

import { revalidatePath } from "next/cache";

import {
  UpdateBookParams,
  updateBook as mutateFn,
} from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-book";

import { updateBookImage as mutateBookImageFn } from "../ui/(dashboard)/(home)/books/[bookId]/services/use-mutate-image";

export async function updateBook({ bookId, file }: UpdateBookParams) {
  try {
    const updatedBook = await mutateFn({ bookId, file });

    revalidatePath(`/book/${bookId}`);

    return updatedBook;
  } catch (err) {
    throw err;
  }
}

export async function updateBookImage({
  bookId,
  file,
  imageUrl,
}: UpdateBookParams & { imageUrl: string }) {
  try {
    const updatedBook = await mutateBookImageFn({ bookId, file, imageUrl });

    revalidatePath(`/book/${bookId}`);

    return updatedBook;
  } catch (err) {
    throw err;
  }
}
