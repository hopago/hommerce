import { getSingleBook } from "@/app/services/getBook";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// TODO: 전체 에러 페이지, 404 페이지 UI

async function getBook(bookId: string) {
  const book = await getSingleBook(bookId);

  return book;
}

export default async function Book({ params }: Params) {
  const { bookId } = params;

  const book = await getBook(bookId);

  return <div>page</div>;
}
