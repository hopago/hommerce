import GNBCategory from "./GNB-Item";

import { useParams } from "react-router-dom";

import { LanguagePathName } from "../types/pathname";
import { transformPathname } from "../utils/transformPathnameToKor";

import { useGNBList } from "../../hooks/use-gnb-list";

import { useEffect, useRef } from "react";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

type RouteParams = {
  lang?: LanguagePathName;
  category?: BookSubCategory;
};

type GNBListProps = {
  list: BookParentCategoryList | BookSubCategoryList;
  type: "parent" | "sub";
  category: BookParentCategory | BookSubCategory | undefined;
  parentCategory?: BookParentCategory;
};

export default function GNBList({
  list,
  type,
  category: propsCategory,
  parentCategory,
}: GNBListProps) {
  const olRef = useRef<HTMLOListElement>(null);

  const pathname = useParams<RouteParams>();

  const { lang } = pathname;
  const { category } = pathname;

  const { show, onMouseEnter, onMouseLeave } = useGNBList();

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        if (olRef.current) {
          olRef.current.style.opacity = "1";
        }
      }, 50);
    } else {
      if (olRef.current) {
        olRef.current.style.opacity = "0";
      }
    }
  }, [show]);

  return (
    <div
      className={"kor-gnb__horizontal__default__show"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(e) =>
        onMouseLeave(e, "kor-gnb__horizontal__default__show")
      }
    >
      {type === "parent" ? (
        <div className="text-wrap">
          <span>
            {transformPathname(lang!)
              ? transformPathname(lang!)
              : propsCategory
              ? `${propsCategory}`
              : "국내도서"}
          </span>
          <div className="icon-wrap">
            {show ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
        </div>
      ) : (
        <div className="text-wrap">
          <span>
            {category
              ? `${category}`
              : propsCategory
              ? `${propsCategory}`
              : "전체"}
          </span>
          <div className="icon-wrap">
            {show ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
        </div>
      )}
      {show ? (
        <ol ref={olRef}>
          {list.map((category) => (
            <GNBCategory
              key={category}
              type={type}
              category={category}
              parentCategory={parentCategory}
            />
          ))}
        </ol>
      ) : null}
    </div>
  );
}
