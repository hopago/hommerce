import { ApiModal } from "@/app/ui/(dashboard)/(home)/@modal";
import ApiServices from "@/app/ui/(dashboard)/(home)/_components/ApiServices";
import BooksSearchResults from "@/app/ui/(dashboard)/(home)/books/_components/BooksSearchResults";
import BookDataChart from "@/app/ui/(dashboard)/(home)/books/_components/BookDataChart";

export default function Books() {
  return (
    <>
      <BooksSearchResults />
      <BookDataChart />
      <ApiServices title="도서 API" tag="books" />
      <ApiModal />
    </>
  );
}
