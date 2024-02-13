type NewBookItemProps = {
  book: TBookOptional;
};

export default function NewBookItem({ book }: NewBookItemProps) {
  return (
    <li>
      <div className="img-wrap">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <div className="publish">
          <span>{book.author}&nbsp;·&nbsp;</span>
          <span>{book.publisher}</span>
        </div>
        {book.discount ? (
          <span className="discount">{book.discount}</span>
        ) : null}
        <span className="price" style={{ fontWeight: "bold" }}>
          {book.price}
        </span>
        <span className="unit">{book.unit}</span>
      </div>
    </li>
  );
}
