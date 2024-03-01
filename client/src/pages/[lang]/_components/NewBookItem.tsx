import { Link } from "react-router-dom";

type NewBookItemProps = {
  book: TBookOptional;
};

export default function NewBookItem({ book }: NewBookItemProps) {
  return (
    <li>
      <Link to={`/details/${book.id}`} className="link">
        <div className="img-wrap">
          <img src={book.representImg} alt={book.title} />
        </div>
        <div className="book-info">
          <h3>{book.title}</h3>
          <div className="publish">
            <span>{book.author}&nbsp;·&nbsp;</span>
            <span>{book.publisher}</span>
          </div>
          {book.discount ? (
            <span className="discount">{book.discount}%</span>
          ) : null}
          <span className="price" style={{ fontWeight: "bold" }}>
            {book.price?.toLocaleString()}
          </span>
          <span className="unit">{book.unit}</span>
        </div>
      </Link>
    </li>
  );
}
