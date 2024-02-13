import FilterOptions from "./FilterOptions";
import Heading from "./Heading";
import SeenBooks from "./SeenBooks";

import { useFilterOption } from "./hooks/use-filter-option";

type SeenBookListProps = {
  books: TBooks;
};

export default function SeenBookList({ books }: SeenBookListProps) {
  const { option, onClick } = useFilterOption();

  return (
    <div className="seen-book-list">
      <div className="bg-fill" />
      <div className="seen-book-list__wrap">
        <Heading />
        <FilterOptions onClick={onClick} option={option} />
        <SeenBooks books={books} option={option} />
      </div>
    </div>
  );
}
