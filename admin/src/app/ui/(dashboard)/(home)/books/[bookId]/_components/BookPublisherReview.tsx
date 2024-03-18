import styles from "./book-info.module.css";

type BookPublisherReviewProps = {
  publisherReview: string;
};

export default function BookPublisherReview({
  publisherReview,
}: BookPublisherReviewProps) {
  return (
    <div className={styles.detailsInfoContainer}>
      <h3>출판사 서평</h3>
      <p>{publisherReview}</p>
    </div>
  );
}
