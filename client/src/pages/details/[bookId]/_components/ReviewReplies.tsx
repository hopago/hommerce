import { MdArrowRight } from "react-icons/md";

import { ReviewReplies } from "../../../_components/types/review-reply";

import { useNavigate } from "react-router-dom";

import ReplyItem from "./ReplyItem";

type ReviewRepliesProps = {
  replies: ReviewReplies;
};

export default function ReviewRepliesContainer({
  replies,
}: ReviewRepliesProps) {
  // TODO: useAuth()
  const isLogin = false;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="review-list__item__wrapper__review-replies">
      {!isLogin && (
        <div className="review-list__item__wrapper__review-replies__bg">
          <span>답글 등록은 로그인 후 이용할 수 있습니다.</span>
          <button onClick={handleClick}>
            <MdArrowRight className="icon" />
            <span>로그인</span>
          </button>
        </div>
      )}
      {replies.map((reply, i) => (
        <ReplyItem key={`${reply.id}-${i}`} reply={reply} />
      ))}
    </div>
  );
}
