type SingleBookInfoProps = {
  info: {
    title: string;
    author: string;
    publisher: string;
  };
};

export default function SingleBookInfo({ info }: SingleBookInfoProps) {
  return (
    <div className="details-single-book__horizontal__book-info">
      <span>{info.title}</span>
      <p>{info.author}</p>
      <div className="publish">
        <span>{info.publisher}</span>&nbsp;·&nbsp;2023년 09월 07일
      </div>
      {/* TODO: REVIEW */}
    </div>
  );
}
