import { AiFillMessage } from "react-icons/ai";

import ParentCategoryBadge from "./ParentCategoryBadge";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

type SingleBookProps = {
  currentBook: TBook;
};

export default function SingleBook({ currentBook }: SingleBookProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentBook ? `${currentBook.id}${currentBook.title}` : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="single-book-motion"
      >
        <div className="recommend-books__today-pick__contents__single-book">
          <div className="recommend-books__today-pick__contents__single-book__wrap">
            <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal">
              <Link
                to={`/details/${currentBook.id}`}
                className="recommend-books__today-pick__contents__single-book__wrap__horizontal__img link"
              >
                <img src={currentBook.representImg} alt={currentBook.title} />
              </Link>
              <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal__info">
                {currentBook.parentCategory ? (
                  <ParentCategoryBadge text={currentBook.parentCategory} />
                ) : null}
                <Link to={`/details/${currentBook.id}`} className="link">
                  <p className="title">{currentBook.title}</p>
                </Link>
                <p className="author">{currentBook.author}</p>
                <div className="recommend-books__today-pick__contents__single-book__wrap__horizontal__info__price-texts">
                  {currentBook.discount ? (
                    <span className="discount">{currentBook.discount}</span>
                  ) : null}
                  <span className="price" style={{ fontWeight: "bold" }}>
                    {currentBook.price.toLocaleString()}
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
      </motion.div>
    </AnimatePresence>
  );
}
