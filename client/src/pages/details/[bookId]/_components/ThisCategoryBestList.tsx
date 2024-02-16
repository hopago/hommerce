import { temporaryNewBooks } from "../../../../recoil/books";
import ThisCategoryBestItem from "./ThisCategoryBestItem";

export default function ThisCategoryBestList() {
  return (
    <div className="details-prod-contents__horizontal__recommend-books__this-best">
      <ul>
        {temporaryNewBooks.map((book, i) => (
          <ThisCategoryBestItem key={`${book.id}-${book.title}`} book={book} i={i} />
        ))}
      </ul>
    </div>
  );
}
