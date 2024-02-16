import { cn } from "../../../lib/utils";

type PreviewBookProps = {
  currIndex: number;
  i: number;
  book: {
    representImg: string;
    id: number;
  };
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function PreviewBook({
  book,
  currIndex,
  i,
  setCurrIndex,
}: PreviewBookProps) {
  return (
    <li
      className={cn(
        "recommend-books__today-pick__contents__preview__book",
        currIndex === i && "active"
      )}
      onClick={() => setCurrIndex(i)}
    >
      <div className="img-wrap">
        <img src={book.representImg} alt="preview-book-img" />
      </div>
    </li>
  );
}
