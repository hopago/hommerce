import { Link } from "react-router-dom";
import { recommendTypes } from "../../constants/recommend-types";

type RecommendBookInformationBookItemProps = {
  book: TBookShortcut;
  i: number;
};

export default function RecommendBookInformationBookItem({
  book,
  i,
}: RecommendBookInformationBookItemProps) {
  return (
    <li key={`${book.id}${book.title}`}>
      <Link to={`/details/${book.id}`} className="link">
        <p className="recommend-type">{recommendTypes[i]}</p>
        <div className="img-wrap">
          <img src={book.representImg} alt={book.title} />
        </div>
        <div className="book-info">
          <span className="category">{`[${book.category}]`}</span>
          <h2>{book.title}</h2>
          <span className="author">{book.author}</span>
        </div>
      </Link>
    </li>
  );
}
