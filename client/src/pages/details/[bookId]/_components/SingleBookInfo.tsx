type SingleBookInfoProps = {
  info: {
    title: string;
    author: string;
    publisher: string;
  };
};

export default function SingleBookInfo({ info }: SingleBookInfoProps) {
  return (
    <div className="details-single-book__horizontal__book-info">book-info</div>
  );
}
