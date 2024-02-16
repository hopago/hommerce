import { Link } from "react-router-dom";
import BestFlagBadge from "./utils/BestFlagBadge";

type BestSellerItemProps = {
  book: TBookShortcut;
  i: number;
};

export default function BestSellerItem({ book, i }: BestSellerItemProps) {
  return (
    <li key={`${book.id}${book.title}`}>
      <div className="best-prod-wrap">
        <BestFlagBadge i={i} />
      </div>
      <Link to={`/details/${book.id}`} className="img-wrap link">
        <img src={book.representImg} alt={book.title} />
      </Link>
      <div className="info">
        <Link to={`/details/${book.id}`} className="link">
          <h2>{book.title}</h2>
        </Link>
        <span>
          {book.author} · {book.category}
        </span>
      </div>
    </li>
  );
}
