import { Link } from "react-router-dom";

import { bookParentCategory } from "../../_components/constants/category";
import { bookSubCategory } from "../../_components/constants/category";
import GNBList from "./GNB-List";

import divider from "../../../assets/lang-page-divider.png";

import { MdHome } from "react-icons/md";

import { useRecoilValue } from "recoil";
import { gnbCategoryState } from "../../../recoil/use-category";

export default function GNB() {
  const { parentCategory, category: subCategory } =
    useRecoilValue(gnbCategoryState);

  return (
    <div className="kor-gnb">
      <div className="kor-gnb__horizontal">
        <Link to="/">
          <span>
            <MdHome color="#767675" />
          </span>
        </Link>
        <div className="kor-gnb__horizontal__default">
          <GNBList
            type="parent"
            category={parentCategory!}
            list={bookParentCategory}
          />
          <img src={divider} alt="" />
          <GNBList
            type="sub"
            category={subCategory!}
            list={bookSubCategory}
            parentCategory={parentCategory!}
          />
        </div>
      </div>
    </div>
  );
}
