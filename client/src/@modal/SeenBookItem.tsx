import ParentCategoryBadge from "../pages/_components/ParentCategoryBadge";

import { MdClose } from "react-icons/md";
import heart from "../assets/ico_heart.png";

type SeenBookItemProps = {
  book: TBook;
};

export default function SeenBookItem({ book }: SeenBookItemProps) {
  const handleClose = () => {};

  const handleFavorite = () => {};

  return (
    <li className="seen-book-list__wrap__book-list__wrap__book-item">
      <div className="img-wrap">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="seen-book-list__wrap__book-list__wrap__book-item__book-info">
        {book.parentCategory ? (
          <ParentCategoryBadge text={book.parentCategory} />
        ) : null}
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        {book.discount ? (
          <span className="discount">{book.discount}</span>
        ) : null}
        <span className="price" style={{ fontWeight: "bold" }}>
          {book.price}
        </span>
        <span className="unit">{book.unit}</span>
      </div>
      <div className="seen-book-list__wrap__book-list__wrap__book-item__buttons">
        <button className="close" onClick={handleClose}>
          <span>
            <MdClose />
          </span>
        </button>
        <div className="heart-button-wrap">
          <button onClick={handleFavorite}>
            <img src={heart} alt="heart-button" />
          </button>
        </div>
      </div>
    </li>
  );
}
