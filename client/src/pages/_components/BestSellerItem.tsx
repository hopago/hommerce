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
      <div className="img-wrap">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="info">
        <h2>{book.title}</h2>
        <span>
          {book.author} · {book.category}
        </span>
      </div>
    </li>
  );
}
