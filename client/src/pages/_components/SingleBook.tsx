import { AiFillMessage } from "react-icons/ai";
import ParentCategoryBadge from "./ParentCategoryBadge";

type SingleBookProps = {
  currentBook: TBook
}

export default function SingleBook({ currentBook }: SingleBookProps) {
  return (
    <div className="recommend-books__today-pick__contents__single-book">
      <div className="recommend-books__today-pick__contents__single-book__wrap">
        <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal">
          <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal__img">
            <img src={currentBook.img} alt={currentBook.title} />
          </div>
          <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal__info">
            {currentBook.parentCategory ? (
              <ParentCategoryBadge text={currentBook.parentCategory} />
            ) : null}
            <p className="title">{currentBook.title}</p>
            <p className="author">{currentBook.author}</p>
            <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal__info__price-texts">
              {currentBook.discount ? (
                <span className="discount">{currentBook.discount}</span>
              ) : null}
              <span className="price" style={{ fontWeight: "bold" }}>
                {currentBook.price}
              </span>
              <span className="unit">{currentBook.unit}</span>
            </div>
            <p className="comment">
              <span>
                <span>
                  <AiFillMessage color="#474C98" />
                </span>
                {currentBook.comment}
              </span>
            </p>
            <p className="desc">{currentBook.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
