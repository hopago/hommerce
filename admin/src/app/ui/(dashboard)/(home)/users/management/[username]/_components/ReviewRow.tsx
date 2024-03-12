import ReviewActions from "./ReviewActions";
import ReviewSelectedCheckBox from "./ReviewSelectedCheckBox";

import styles from "./review-log-list.module.css";

type ReviewRowProps = {
  review: ReviewLog;
};

export default function ReviewRow({ review }: ReviewRowProps) {
  return (
    <tr>
      <ReviewSelectedCheckBox id={review._id} />
      <td>{review._id}</td>
      <td>{review.bookTitle}</td>
      <td>{review.desc}</td>
      <ReviewActions id={review._id} />
    </tr>
  );
}