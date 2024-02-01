import ParentCategoryBadge from "./ParentCategoryBadge";

type NextBookItemProps = {
  book: Pick<TBook, "id" | "title" | "category" | "img" | "parentCategory">;
};

export default function NextBookItem({ book }: NextBookItemProps) {
  return (
    <li>
      {/* <div className="img-wrap">
        <img src={book.img} alt={book.title} />
      </div> */}
      {book.parentCategory ? (
        <ParentCategoryBadge text={book.parentCategory} />
      ) : null}
      <p>{book.title}</p>
    </li>
  );
}
