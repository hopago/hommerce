import { useEffect, useState } from "react";

import { GNB } from "../../[lang]/_components";
import { SearchSection } from "../../_components";

import { books } from "../../../recoil/books";

import { useParams } from "react-router-dom";
import SingleBook from "./_components/SingleBook";

export default function DetailsIndex() {
  const params = useParams();

  const { bookId } = params;

  const [book, setBook] = useState<TBook>();
  const [parentCategory, setParentCategory] = useState<BookParentCategory>(
    book?.parentCategory!
  );
  const [subCategory, setSubCategory] = useState<BookSubCategory>(
    book?.category!
  );

  useEffect(() => {
    if (!bookId) return;

    const currBook = books.find((book) => book.id === Number(bookId));

    if (currBook) {
      setBook(currBook);
      setParentCategory(currBook.parentCategory);
      setSubCategory(currBook.category);
    }
  }, [bookId]);

  if (!book) return;

  return (
    <>
      <SearchSection />
      <GNB parentCategory={parentCategory} subCategory={subCategory} />
      <SingleBook book={book} />
    </>
  );
}
