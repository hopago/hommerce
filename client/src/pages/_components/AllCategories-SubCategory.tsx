import { bookSubCategory } from "./constants/category";
import AD from '../../assets/nav-modal-ad.png';
import { MdAdd } from "react-icons/md";

export default function AllCategoriesSubCategory() {
  return (
    <div className="all-categories__book-category">
      <ul className="sub-category-list">
        {bookSubCategory.map((category) => (
          <li key={category}>
            <span>{category}</span>
            <div className="sub-category-list__icon-wrap">
              <MdAdd />
            </div>
          </li>
        ))}
      </ul>
      <div className="ad-box">
        <img src={AD} alt="nav-modal-ad" />
      </div>
    </div>
  );
}
