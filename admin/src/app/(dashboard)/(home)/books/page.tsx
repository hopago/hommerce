import { ApiModal } from "@/app/ui/(dashboard)/(home)/@modal";
import ApiServices from "@/app/ui/(dashboard)/(home)/_components/ApiServices";
import BooksSearchResults from "@/app/ui/(dashboard)/(home)/books/_components/BooksSearchResults";
import BookDataChart, {
  BookDataChartSkeleton,
} from "@/app/ui/(dashboard)/(home)/books/_components/BookDataChart";

import { Suspense } from "react";

export default function Books() {
  return (
    <>
      <BooksSearchResults />
      <Suspense fallback={<BookDataChartSkeleton />}>
        <BookDataChart />
      </Suspense>
      <ApiServices title="도서 API" tag="books" />
      <ApiModal />
    </>
  );
}
