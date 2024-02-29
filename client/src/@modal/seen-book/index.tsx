import { useEffect, useRef } from "react";

import { useFilterOption } from "./hooks/use-filter-option";

import Heading from "./_components/Heading";
import FilterOptions from "./_components/FilterOptions";
import SeenBooks from "./_components/SeenBooks";

type SeenBookListProps = {
  books: TBooks;
  show: boolean;
};

export default function SeenBookModal({ books, show }: SeenBookListProps) {
  const { option, onClick } = useFilterOption();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.style.transition = "all 0.3s ease";
      modalRef.current.className = "seen-book-list__wrap right-pop";
    }
  }, [show]);

  return (
    <div className="seen-book-list">
      <div className="bg-fill" />
      <div className="seen-book-list__wrap" ref={modalRef}>
        <Heading />
        <FilterOptions onClick={onClick} option={option} />
        <SeenBooks books={books} option={option} />
      </div>
    </div>
  );
}
