import { Link } from "react-router-dom";

import { bookParentCategory } from "../../_components/constants/category";
import { bookSubCategory } from "../../_components/constants/category";
import divider from "../../../assets/lang-page-divider.png";

import { MdHome } from "react-icons/md";

import GNBList from "./GNB-List";

export default function GNB() {
  return (
    <div className="kor-gnb">
      <div className="kor-gnb__horizontal">
        <Link to="/">
          <span>
            <MdHome color="#767675" />
          </span>
        </Link>
        <div className="kor-gnb__horizontal__default">
          <GNBList type="parent" list={bookParentCategory} />
          <img src={divider} alt="" />
          <GNBList type="sub" list={bookSubCategory} />
        </div>
      </div>
    </div>
  );
}
