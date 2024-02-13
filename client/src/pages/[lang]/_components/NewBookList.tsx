import { temporaryNewBooks } from "../../../recoil/books";

import NewBookItem from "./NewBookItem";

export default function NewBookList() {
  return (
    <div className="new-books__book-list">
      <ul>
        {temporaryNewBooks.map((book) => (
          <NewBookItem key={`${book.id}-${book.title}`} book={book} />
        ))}
      </ul>
    </div>
  );
}
