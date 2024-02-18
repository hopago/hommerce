import { Link } from "react-router-dom";

type ReferrerBookItemProps = {
  book: Partial<TBook>;
};

export default function ReferrerBookItem({ book }: ReferrerBookItemProps) {
  return (
    <li>
      <Link to={`/details/${book.id}`} className="link">
        <div className="img-wrap">
          <img src={book.representImg} alt="author-referrer-book" />
        </div>
        <p>{book.title}</p>
      </Link>
    </li>
  );
}
