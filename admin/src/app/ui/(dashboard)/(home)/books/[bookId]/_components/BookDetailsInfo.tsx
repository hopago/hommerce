import BookAwards from "./BookAwards";
import BookContentList from "./BookContentList";
import BookInside from "./BookInside";
import BookIntro from "./BookIntro";
import BookPublisherReview from "./BookPublisherReview";

import styles from "./book-info.module.css";

type BookDetailsInfoProps = {
  details: IDetails;
};

export default function BookDetailsInfo({ details }: BookDetailsInfoProps) {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfoWrap}>
        <div className={styles.bookInfoHeader}>
          <div className={styles.headerTitle}>
            <div className={styles.fill} />
            <h1>도서 상세정보</h1>
          </div>
        </div>
        <div className={styles.detailsContents}>
          <BookAwards awards={details.awards} />
          <BookIntro intro={details.intro} />
          <BookContentList contentList={details.contentsList} />
          <BookInside bookInside={details.bookInside} />
          <BookPublisherReview publisherReview={details.bookPublisherReview} />
        </div>
      </div>
    </div>
  );
}
