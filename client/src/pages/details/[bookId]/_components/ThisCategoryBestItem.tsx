import BestFlagBadge from "../../../_components/utils/BestFlagBadge";

type ThisCategoryBestItemProps = {
  book: IBook;
  i: number;
};

export default function ThisCategoryBestItem({
  book,
  i,
}: ThisCategoryBestItemProps) {
  return (
    <li>
      <div className="img-wrap">
        <img src={book.representImg} alt={book.title} />
      </div>
      <div className="book-info">
        <BestFlagBadge i={i} />
        <h3>{book.title}</h3>
        <div className="publish">
          <span>{book.author}</span>
        </div>
        <span className="price" style={{ fontWeight: "bold" }}>
          {book.price?.toLocaleString()}
        </span>
        <span className="unit">{book.unit}</span>
      </div>
    </li>
  );
}
