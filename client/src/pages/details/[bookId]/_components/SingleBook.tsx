import SingleBookHeading from "./SingleBookHeading";
import SingleBookInfo from "./SingleBookInfo";
import SingleBookPrice from "./SingleBookPrice";
import SingleBookThumbnail from "./SingleBookThumbnail";
import SingleBookSellType from "./SingleBookSellType";
import SingleBookComment from "./SingleBookComment";

type SingleBookProps = {
  book: IBook;
  currSellType: SellWay;
  setCurrSellType: React.Dispatch<React.SetStateAction<SellWay>>;
};

const SingleBook = ({
  book,
  currSellType,
  setCurrSellType,
}: SingleBookProps) => {
  /* 
  TODO: 
  책 ID - ref, review 데이터 
  적립 포인트 5% - 구매 user에게 부여 
  기본: 종이책 값 or sellType 추가 시 ebookPrice도 추가
  */

  return (
    <div className="details-single-book">
      <SingleBookHeading title={book.title} />
      {book.comment && <SingleBookComment comment={book.comment} />}
      {book.sellType && (
        <SingleBookSellType
          currSellType={currSellType}
          setCurrSellType={setCurrSellType}
          price={book.price}
          eBookPrice={book.eBookPrice}
          sellType={book.sellType}
        />
      )}
      <div className="details-single-book__horizontal">
        <SingleBookInfo
          title={book.title}
          author={book.author}
          publisher={book.publisher}
        />
        <SingleBookThumbnail img={book.representImg} />
        <SingleBookPrice
          sellType={currSellType}
          price={book.price}
          eBookPrice={book.eBookPrice}
          unit={book.unit}
          discount={book.discount}
        />
      </div>
    </div>
  );
};

export default SingleBook;
