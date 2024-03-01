import { AnimatePresence, motion } from "framer-motion";

import ParentCategoryBadge from "../../_components/ParentCategoryBadge";

import { AiFillMessage } from "react-icons/ai";

export default function book({ book }: { book: TBook }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={book ? `${book.id}${book.title}` : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="lang-page-picks__today__vertical__single-book"
      >
        <div className="lang-page-picks__today__vertical__single-book__horizontal">
          <div className="img-wrap">
            <img src={book.representImg} alt={book.title} />
          </div>
          <div className="lang-page-picks__today__vertical__single-book__horizontal__book-info">
            {book.parentCategory ? (
              <ParentCategoryBadge text={book.parentCategory} />
            ) : null}
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <div className="lang-page-picks__today__vertical__single-book__horizontal__book-info__price-texts">
              {book.discount ? (
                <span className="discount">{book.discount}%</span>
              ) : null}
              <span className="price" style={{ fontWeight: "bold" }}>
                {book.price.toLocaleString()}
              </span>
              <span className="unit">{book.unit}</span>
            </div>
            <p className="comment">
              <span>
                <span>
                  <AiFillMessage color="#474C98" />
                </span>
                {book.comment}
              </span>
            </p>
            <p className="desc">{book.desc}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
