import { MdClose } from "react-icons/md";
import heart from "../../../assets/ico_heart.png";

import { useState } from "react";

import ParentCategoryBadge from "../../../pages/_components/ParentCategoryBadge";

import { cn } from "../../../lib/utils";

type SeenBookItemProps = {
  book: TBook;
};

export default function SeenBookItem({ book }: SeenBookItemProps) {
  const [active, setActive] = useState(false);

  const handleClose = () => {};

  const handleFavorite = () => {
    // TODO: DB에 찜 상품 추가, 클라이언트에 낙관적 업데이트
    setActive(true);
  };

  return (
    <li className="seen-book-list__wrap__book-list__wrap__book-item">
      <div className="img-wrap">
        <img src={book.representImg} alt={book.title} />
      </div>
      <div className="seen-book-list__wrap__book-list__wrap__book-item__book-info">
        {book.parentCategory ? (
          <ParentCategoryBadge text={book.parentCategory} />
        ) : null}
        <h1 className="title">{book.title}</h1>
        <p className="author">{book.author}</p>
        <div className="text-wrap">
          {book.discount ? (
            <span className="discount">{book.discount}</span>
          ) : null}
          <span className="price" style={{ fontWeight: "bold" }}>
            {book.price.toLocaleString()}
          </span>
          <span className="unit">{book.unit}</span>
        </div>
      </div>
      <div className="seen-book-list__wrap__book-list__wrap__book-item__buttons">
        <button className="close" onClick={handleClose}>
          <span>
            <MdClose />
          </span>
        </button>
        <div
          className={cn("heart-button-wrap", active && "active")}
          onClick={handleFavorite}
        >
          <button>
            <img src={heart} alt="heart-button" />
          </button>
        </div>
      </div>
    </li>
  );
}
