import SingleBookHeading from "./SingleBookHeading";
import SingleBookInfo from "./SingleBookInfo";
import SingleBookPrice from "./SingleBookPrice";
import SingleBookThumbnail from "./SingleBookThumbnail";

type SingleBookProps = {
  book: TBook;
};

export default function SingleBook({ book }: SingleBookProps) {
  // TODO: 책 ID - ref, review 데이터 / 적립 포인트 - 구매 user에게 부여

  const { title, author, publisher, price, unit, discount, img } = book;

  const info = { title, author, publisher };
  const thumb = { img };
  const priceInfo = { price, unit, discount };

  return (
    <div className="details-single-book">
      <SingleBookHeading title={book.title} />
      <div className="details-single-book__horizontal">
        <SingleBookInfo info={info} />
        <SingleBookThumbnail thumb={thumb.img} />
        <SingleBookPrice info={priceInfo} />
      </div>
    </div>
  );
}
