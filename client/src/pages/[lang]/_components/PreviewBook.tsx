import { cn } from "../../../lib/utils";

type PreviewBookProps = {
  currIndex: number;
  i: number;
  book: {
    img: string;
    id: number;
  };
};

export default function PreviewBook({ book, currIndex, i }: PreviewBookProps) {
  return (
    <li
      className={cn(
        "recommend-books__today-pick__contents__preview__book",
        currIndex === i && "active"
      )}
    >
      <div className="img-wrap">
        <img src={book.img} alt="preview-book-img" />
      </div>
    </li>
  );
}
