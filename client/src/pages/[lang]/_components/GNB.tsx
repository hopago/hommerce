import { Link } from "react-router-dom";

import { bookParentCategory } from "../../_components/constants/category";
import { bookSubCategory } from "../../_components/constants/category";

import { MdHome } from "react-icons/md";

import GNBList from "./GNB-List";

export default function GNB() {
  return (
    <div className="kor-gnb">
      <div className="kor-gnb__horizontal">
        <Link to="/">
          <span>
            <MdHome />
          </span>
        </Link>
        <div className="kor-gnb__horizontal__default">
          <GNBList type="parent" list={bookParentCategory} />
          <GNBList type="sub" list={bookSubCategory} />
        </div>
      </div>
    </div>
  );
}
