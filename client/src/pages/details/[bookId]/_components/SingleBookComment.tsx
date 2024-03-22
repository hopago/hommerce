type SingleBookCommentProps = {
  comment: string;
};

export default function SingleBookComment({ comment }: SingleBookCommentProps) {
  return (
    <div className="details-single-book__comment">
      <p>{comment}</p>
    </div>
  );
}
