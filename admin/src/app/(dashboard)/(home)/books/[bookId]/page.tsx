import { getSingleBook } from "@/app/services/getBook";

import { cache } from "react";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import BookInfo from "@/app/ui/(dashboard)/(home)/books/[bookId]/_components/BookInfo";
import BookDetails from "@/app/ui/(dashboard)/(home)/books/[bookId]/_components/BookDetails";

import { HttpError } from "@/app/fetcher/error";

export const preload = (bookId: string) => {
  void getBook(bookId);
};

export const getBook = cache(async (bookId: string) => {
  try {
    const book = await getSingleBook(bookId);

    return book;
  } catch (err) {
    const error = err as HttpError;
    const status = error.status;

    if (status) {
      switch (status) {
        case 400:
          throw new Error("책 아이디를 받지 못했어요. 다시 시도하시겠어요?");
        case 404:
          throw new Error("해당 책 아이디로 책을 찾지 못했습니다.");
        case 500:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
        default:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
      }
    } else {
      throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
    }
  }
});

export default async function Book({ params }: Params) {
  const { bookId } = params;

  const book = await getBook(bookId);

  return (
    <>
      <section>
        <BookInfo book={book} />
      </section>
      <section>
        <BookDetails bookId={book._id} />
      </section>
    </>
  );
}
