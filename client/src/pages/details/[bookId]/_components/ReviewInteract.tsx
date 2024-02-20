import { MdThumbUp } from "react-icons/md";
import reply from "../../../../assets/ico_reply.png";

type ReviewInteractProps = {
  repliesLength: number;
  liked: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReviewInteract({
  repliesLength,
  liked,
  setShow,
}: ReviewInteractProps) {
  const handleLikeReview = () => {};

  const handleShowReply = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="review-list__item__review-interact">
      <div className="like-section" onClick={handleLikeReview}>
        <MdThumbUp className="icon" />
        <span>{liked}</span>
      </div>
      <div className="reply-section" onClick={handleShowReply}>
        <img src={reply} alt="reply-icon" />
        <span>답글&nbsp;{repliesLength}</span>
      </div>
    </div>
  );
}
