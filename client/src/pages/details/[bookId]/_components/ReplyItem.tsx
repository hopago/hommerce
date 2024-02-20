import { formatDate } from "../../../../utils/create-formatted-date";

import { ReviewReply } from "../../../_components/types/review-reply";

import arwReply from "../../../../assets/ico_arw_reply.png";

type ReplyItemProps = {
  reply: ReviewReply;
};

export default function ReplyItem({ reply }: ReplyItemProps) {
  return (
    <div className="reply-item">
      <div className="reply-item__reply-info">
        <div className="icon-wrap">
          <img src={arwReply} alt="reply-icon" />
        </div>
        <span>{reply.username}</span>
        <div className="divider" />
        <span>{formatDate(reply.createdAt)}</span>
      </div>
      <div className="reply-item__desc">
        <span>{reply.desc}</span>
      </div>
    </div>
  );
}
