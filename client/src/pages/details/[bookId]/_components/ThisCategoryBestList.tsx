import ThisCategoryBestItem from "./ThisCategoryBestItem";

type ThisCategoryBestListProps = {
  books: IBook[];
};

export default function ThisCategoryBestList({
  books,
}: ThisCategoryBestListProps) {
  return (
    <div className="details-prod-contents__horizontal__recommend-books__this-best">
      <ul>
        {books.map((book, i) => (
          <ThisCategoryBestItem key={book._id} book={book} i={i} />
        ))}
      </ul>
    </div>
  );
}
