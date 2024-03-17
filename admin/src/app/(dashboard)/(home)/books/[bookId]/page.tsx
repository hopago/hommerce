import { getSingleBook } from "@/app/services/getBook";

import { cache } from "react";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import BookInfo from "@/app/ui/(dashboard)/(home)/books/[bookId]/_components/BookInfo";
import BookDetails from "@/app/ui/(dashboard)/(home)/books/[bookId]/_components/BookDetails";

export const preload = (bookId: string) => {
  void getBook(bookId);
};

export const getBook = cache(async (bookId: string) => {
  const book = await getSingleBook(bookId);

  return book;
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
