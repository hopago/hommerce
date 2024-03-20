import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { getSingleBook } from "@/app/services/getBook";
import { daysToMs } from "@/app/ui/(dashboard)/(home)/utils/daysToMs";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getBookDetails } from "@/app/services/getBookDetails";

import styles from "@/app/ui/(dashboard)/(home)/books/edit/[bookId]/edit-book.module.css";

import BookInfoEdit from "@/app/ui/(dashboard)/(home)/books/edit/[bookId]/_components/BookInfoEdit";
import BookDetailEdit from "@/app/ui/(dashboard)/(home)/books/edit/[bookId]/_components/BookDetailsEdit";
import BookEditHeader from "@/app/ui/(dashboard)/(home)/books/edit/[bookId]/_components/BookEditHeader";

type BookEditPageProps = {
  params: {
    bookId: string;
  };
};

export default async function BookEditPage({ params }: BookEditPageProps) {
  const { bookId } = params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.BOOK, bookId],
    queryFn: () => getSingleBook(bookId),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.BOOK_DETAIL, bookId],
    queryFn: () => getBookDetails(bookId),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BookEditHeader />
        <HydrationBoundary state={dehydratedState}>
          <section>
            <BookInfoEdit />
          </section>
          <section>
            <BookDetailEdit />
          </section>
        </HydrationBoundary>
      </div>
    </div>
  );
}
