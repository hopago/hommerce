type SingleBookInfoProps = {
  title: string;
  author: string;
  publisher: string;
};

export default function SingleBookInfo({
  title,
  author,
  publisher,
}: SingleBookInfoProps) {
  return (
    <div className="details-single-book__horizontal__book-info">
      <span className="title">{title}</span>
      <p>{author}</p>
      <div className="publish">
        <span>{publisher}</span>&nbsp;·&nbsp;<span>2023년 09월 07일</span>
      </div>
      {/* TODO: REVIEW */}
    </div>
  );
}
