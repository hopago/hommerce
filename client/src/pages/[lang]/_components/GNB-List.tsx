import GNBCategory from "./GNB-Item";

import { useParams } from "react-router-dom";

import { LanguagePathName } from "../types/pathname";
import { transformPathname } from "../utils/transformPathnameToKor";
import { useGNBList } from "../../hooks/use-gnb-list";

type RouteParams = {
  lang?: LanguagePathName;
  category?: BookSubCategory;
};

type GNBListProps = {
  list: BookParentCategoryList | BookSubCategoryList;
  type: "parent" | "sub";
};

export default function GNBList({ list, type }: GNBListProps) {
  const pathname = useParams<RouteParams>();

  const { lang } = pathname;
  const { category } = pathname;

  const { show, onMouseEnter, onMouseLeave } = useGNBList();

  return (
    <div
      className="kor-gnb__horizontal__default__show"
      onMouseEnter={onMouseEnter}
      onMouseLeave={(e) =>
        onMouseLeave(e, "kor-gnb__horizontal__default__show")
      }
    >
      {type === "parent" ? (
        <div className="text-wrap">
          <span>{transformPathname(lang!)}</span>
        </div>
      ) : (
        <div className="text-wrap">
          <span>{category ?? "전체"}</span>
        </div>
      )}
      {show ? (
        <ol>
          {list.map((category) => (
            <GNBCategory key={category} category={category} />
          ))}
        </ol>
      ) : null}
    </div>
  );
}
