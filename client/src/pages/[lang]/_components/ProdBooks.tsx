import ProdBookItem from "./ProdBookItem";

type ProdBooksProps = {
  books: TBooks;
};

export default function ProdBooks({ books }: ProdBooksProps) {
  return (
    <div className="lang-page-picks__best__container__book-list__prod">
      <ul>
        {books.map((book, i) => (
          <ProdBookItem key={`${book.id}-${book.title}`} i={i} book={book} />
        ))}
      </ul>
    </div>
  );
}
