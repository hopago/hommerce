import { Link } from "react-router-dom";
import ParentCategoryBadge from "./ParentCategoryBadge";

type NextBookItemProps = {
  book: {
    id: number;
    title: string;
    category: BookSubCategory;
    img: string;
    parentCategory: BookParentCategory;
  };
};

export default function NextBookItem({ book }: NextBookItemProps) {
  return (
    <li>
      <Link to={`/details/${book.id}`} className="img-wrap link">
        <img src={book.img} alt={book.title} />
      </Link>
      {book.parentCategory ? (
        <ParentCategoryBadge text={book.parentCategory} />
      ) : null}
      <Link to={`/details/${book.id}`} className="link">
        <p>{book.title}</p>
      </Link>
    </li>
  );
}
